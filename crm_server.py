"""
CRM Itacare - HTTP Server with BrandKit API
Serves static files + runs brandkit scraper via API with progress
"""
import http.server
import socketserver
import json
import subprocess
import os
import sys
import threading
import time
import uuid

PORT = 8080
CRM_DIR = r"C:\Users\jaque\Downloads\crm-itacare"
BRANDKIT_DIR = r"C:\Users\jaque\Downloads\projetim\brandkit"
PYTHON = os.path.join(BRANDKIT_DIR, ".venv", "Scripts", "python.exe")

# Job tracking
jobs = {}

class CRMHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=CRM_DIR, **kwargs)

    def do_POST(self):
        if self.path == '/api/brandkit/run':
            self.handle_brandkit_start()
        else:
            self.send_error(404)

    def do_GET(self):
        if self.path.startswith('/api/brandkit/progress/'):
            job_id = self.path.split('/')[-1]
            self.handle_brandkit_progress(job_id)
        else:
            super().do_GET()

    def handle_brandkit_start(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            data = json.loads(body)
            handle = data.get('handle', '').strip()
            site = data.get('site', '').strip()
            demo = data.get('demo', False)

            if not handle:
                self.send_json({'error': 'Handle obrigatório'}, 400)
                return

            job_id = str(uuid.uuid4())[:8]
            out_dir = os.path.join(BRANDKIT_DIR, 'out', handle.replace('@', '').lower())
            cmd = [PYTHON, '-m', 'brandkit', 'run', '--handle', handle, '--out', out_dir]
            if site:
                cmd.extend(['--site', site])
            if demo:
                cmd.append('--demo')
            cmd.append('--no-site')

            env = os.environ.copy()
            if demo:
                env['BRANDKIT_SOURCE'] = 'demo'

            # Start job in background thread
            job = {
                'id': job_id,
                'handle': handle,
                'status': 'running',
                'progress': 0,
                'lines': [],
                'kit': None,
                'error': None,
                'start_time': time.time()
            }
            jobs[job_id] = job

            def run_job():
                try:
                    proc = subprocess.Popen(
                        cmd,
                        cwd=BRANDKIT_DIR,
                        stdout=subprocess.PIPE,
                        stderr=subprocess.STDOUT,
                        text=True,
                        env=env,
                        bufsize=1
                    )
                    # Read output line by line
                    for line in proc.stdout:
                        line = line.rstrip()
                        if line:
                            job['lines'].append(line)
                            # Update progress based on output
                            if 'perfil' in line.lower():
                                job['progress'] = 10
                            elif 'paleta' in line.lower():
                                job['progress'] = 30
                            elif 'logo' in line.lower():
                                job['progress'] = 50
                            elif 'categorias' in line.lower() or 'etapas' in line.lower():
                                job['progress'] = 70
                            elif 'arquivo' in line.lower():
                                job['progress'] = 90

                    proc.wait(timeout=120)

                    # Read kit
                    kit_path = os.path.join(out_dir, 'brandkit.json')
                    if os.path.exists(kit_path):
                        with open(kit_path, encoding='utf-8') as f:
                            kit = json.load(f)
                        job['kit'] = kit
                        job['progress'] = 100
                        job['status'] = 'done'
                    else:
                        job['status'] = 'error'
                        job['error'] = 'brandkit.json não gerado'
                except subprocess.TimeoutExpired:
                    proc.kill()
                    job['status'] = 'error'
                    job['error'] = 'Timeout (2 min)'
                except Exception as e:
                    job['status'] = 'error'
                    job['error'] = str(e)

            thread = threading.Thread(target=run_job, daemon=True)
            thread.start()

            self.send_json({'job_id': job_id, 'status': 'started'})

        except Exception as e:
            self.send_json({'error': str(e)}, 500)

    def handle_brandkit_progress(self, job_id):
        job = jobs.get(job_id)
        if not job:
            self.send_json({'error': 'Job não encontrado'}, 404)
            return

        response = {
            'job_id': job_id,
            'status': job['status'],
            'progress': job['progress'],
            'lines': job['lines'][-20:],  # last 20 lines
            'elapsed': round(time.time() - job['start_time'], 1)
        }
        if job['status'] == 'done':
            response['kit'] = job['kit']
        if job['status'] == 'error':
            response['error'] = job['error']

        self.send_json(response)

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', len(body))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def log_message(self, format, *args):
        pass

if __name__ == '__main__':
    os.chdir(CRM_DIR)
    with socketserver.TCPServer(("", PORT), CRMHandler) as httpd:
        print(f"CRM Server rodando em http://127.0.0.1:{PORT}")
        print(f"BrandKit API: POST http://127.0.0.1:{PORT}/api/brandkit/run")
        httpd.serve_forever()
PYEOF
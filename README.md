# CRM Itacaré - Prospecção Inteligente

CRM web para prospecção de negócios em Itacaré (BA), com identidade visual (BrandKit) extraída do Instagram.

## 🌐 Acesso online
Acesse o CRM em: `https://seuusuario.github.io/crm-itacare/crm-web.html`

## 📋 Funcionalidades
- Dashboard com métricas e gráficos
- Gestão de leads (229 leads importados)
- Pipeline Kanban (drag & drop)
- Central de abordagens com templates por nicho
- Filtro por site/no-site
- Visualizador de documentos markdown
- BrandKit: extração de identidade visual do Instagram
- Import/Export CSV
- Backup/Restore JSON

## 🚀 Como rodar localmente

### Modo estático (sem scraper)
Abra `crm-web.html` no navegador. O CRM funciona completo, exceto o scraper automático.

### Modo completo (com scraper)
```bash
python crm_server.py
```
Acesse: `http://127.0.0.1:8080/crm-web.html`

O servidor Python permite rodar o BrandKit scraper direto pelo CRM.

## 📁 Estrutura
```
crm-itacare/
├── crm-web.html          # CRM web (HTML + CSS)
├── crm.js                # JavaScript do CRM
├── crm_server.py         # Servidor HTTP + API BrandKit
├── prospeccao-itacare-leads.csv  # 229 leads
├── *.md                  # Documentos (scraping, manual, etc.)
└── projetim/brandkit/    # Scraper de identidade visual
```

## 🔧 Deploy no GitHub Pages
1. Fork/clone este repositório
2. Ative GitHub Pages (Settings → Pages → Deploy from branch)
3. Acesse `https://seuusuario.github.io/crm-itacare/crm-web.html`

> **Nota:** O scraper automático (BrandKit) requer servidor Python local. No GitHub Pages, use "Importar BrandKit" para carregar kits manualmente.

## 📄 Licença
MIT
PYEOF

const TEMPLATES = [
  { id: 'hospedagem-1', title: 'Hospedagem - Primeiro contato', niche: 'Hospedagem', text: 'Ola! Vi que voces gerenciam a [NOME] em Itacare. Trabalho com solucoes digitais para hospedagem (site, reservas online, gestao de propriedades). Gostaria de saber se faz sentido conversarmos sobre como aumentar a visibilidade e automatizar reservas?' },
  { id: 'hospedagem-2', title: 'Hospedagem - Follow-up', niche: 'Hospedagem', text: 'Oi! Sei que deve estar ocupado(a). So queria deixar uma dica: muitas pousadas em Itacare estao perdendo reservas por nao terem site proprio com reservas online. Posso mostrar como funciona? Sem compromisso!' },
  { id: 'hospedagem-3', title: 'Hospedagem - Caso de sucesso', niche: 'Hospedagem', text: 'Ola! Um cliente nosso em CIDADE SIMILAR aumentou reservas diretas em 40% com site proprio + Google Business Profile otimizado. Faz sentido para voces? Posso mostrar como.' },
  { id: 'hospedagem-sem-site', title: 'Hospedagem SEM site - Oferta de site', niche: 'Hospedagem', text: 'Ola! Vi que voces gerenciam a [NOME] em Itacare mas nao tem site proprio. Um site profissional aumenta a visibilidade no Google, traz reservas diretas (sem depender de OTAs) e funciona como cartao de visitas 24/7. Posso mostrar como funciona? Sem compromisso!' },
  { id: 'restaurante-1', title: 'Restaurante - Primeiro contato', niche: 'Bares & Restaurantes', text: 'Ola! Vi que voces tem o [NOME] em Itacare. Vi tambem que tem X reviews no Google (otima avaliacao!). Trabalho com solucoes digitais para restaurantes (cardapio digital, delivery, marketing). Faz sentido conversarmos?' },
  { id: 'restaurante-2', title: 'Restaurante - Follow-up', niche: 'Bares & Restaurantes', text: 'Oi! Sei que a temporada esta movimentada. So queria perguntar: voces ja tem cardapio digital e sistema de pedidos online? Muitos restaurantes em Itacare estao aumentando faturamento com isso. Posso mostrar como funciona?' },
  { id: 'restaurante-3', title: 'Restaurante - Caso de sucesso', niche: 'Bares & Restaurantes', text: 'Ola! Um restaurante nosso aumentou o ticket medio em 35% com sistema de pedidos online + promocoes automatizadas. Faz sentido para voces? Posso mostrar como.' },
  { id: 'restaurante-sem-site', title: 'Restaurante SEM site - Oferta de site', niche: 'Bares & Restaurantes', text: 'Ola! Vi que voces tem o [NOME] em Itacare mas nao tem site proprio. Um site com cardapio digital, pedidos online e reservas aumenta o faturamento e a visibilidade no Google. Posso mostrar como funciona? Sem compromisso!' },
  { id: 'imobiliaria-1', title: 'Imobiliaria - Primeiro contato', niche: 'Imoveis', text: 'Ola! Vi que voces sao a [NOME] em Itacare. Trabalho com solucoes digitais para imobiliarias (CRM, site com busca de imoveis, automacao de leads). Gostaria de saber se faz sentido conversarmos?' },
  { id: 'imobiliaria-2', title: 'Imobiliaria - Follow-up', niche: 'Imoveis', text: 'Oi! Sei que devem estar ocupados. So queria perguntar: voces ja usam CRM para gestao de leads e imoveis? Muitas imobiliarias em Itacare estao perdendo leads por falta de automacao. Posso mostrar como funciona?' },
  { id: 'servico-1', title: 'Servicos - Primeiro contato', niche: 'Servicos', text: 'Ola! Vi que voces tem o [NOME] em Itacare. Vi tambem que tem otimas avaliacoes no Google (X estrelas, Y reviews!). Trabalho com solucoes digitais (agendamento online, marketing, gestao de clientes). Faz sentido conversarmos?' },
  { id: 'servico-2', title: 'Servicos - Follow-up', niche: 'Servicos', text: 'Oi! Sei que deve estar ocupado(a). So queria perguntar: voces ja usam sistema de agendamento online? Muitos profissionais em Itacare estao automatizando agendamentos e aumentando clientes. Posso mostrar como funciona?' },
  { id: 'servico-sem-site', title: 'Servicos SEM site - Oferta de site', niche: 'Servicos', text: 'Ola! Vi que voces tem o [NOME] em Itacare mas nao tem site proprio. Um site profissional aumenta a visibilidade no Google, permite agendamento online e funciona como portfolio 24/7. Posso mostrar como funciona? Sem compromisso!' },
  { id: 'comercio-1', title: 'Comercio - Primeiro contato', niche: 'Comercio', text: 'Ola! Vi que voces tem o [NOME] em Itacare. Trabalho com solucoes digitais para comercio (e-commerce, gestao de estoque, marketing). Faz sentido conversarmos sobre como aumentar vendas online?' },
  { id: 'comercio-2', title: 'Comercio - Follow-up', niche: 'Comercio', text: 'Oi! Sei que deve estar ocupado(a). So queria perguntar: voces ja vendem online? Muitos comercios em Itacare estao aumentando faturamento com e-commerce e Instagram Shopping. Posso mostrar como funciona?' },
  { id: 'comercio-sem-site', title: 'Comercio SEM site - Oferta de site', niche: 'Comercio', text: 'Ola! Vi que voces tem o [NOME] em Itacare mas nao tem site proprio. Um site profissional aumenta a visibilidade no Google, permite vendas online e funciona como catalogo 24/7. Posso mostrar como funciona? Sem compromisso!' },
  { id: 'esporte-1', title: 'Esportes - Primeiro contato', niche: 'Esportes & Passeios', text: 'Ola! Vi que voces organizam PASSEIO/SURF em Itacare. Trabalho com solucoes digitais (reservas online, marketing, gestao de turmas). Gostaria de saber se faz sentido conversarmos?' },
  { id: 'transporte-1', title: 'Transporte - Primeiro contato', niche: 'Transporte', text: 'Ola! Vi que voces fazem TRANSFER/LOCACAO em Itacare. Trabalho com solucoes digitais (reservas online, gestao de frota, marketing). Faz sentido conversarmos?' },
  { id: 'geral-despedida', title: 'Despedida (ultimo follow-up)', niche: 'Geral', text: 'Tudo bem! Vou parar de insistir por agora. Se precisarem de ajuda com digitalizacao no futuro, estou a disposicao. Boa temporada!' },
  { id: 'geral-valor', title: 'Envio de material (com valor)', niche: 'Geral', text: 'Ola! Preparei um material rapido sobre como NICHO em Itacare podem aumentar RESULTADO com solucoes digitais. Quer que eu envie? E gratuito!' },
];

const STORAGE_KEY = 'crm_itacare_leads_v7';
const NOTES_KEY = 'crm_itacare_notes_v7';
const SETTINGS_KEY = 'crm_itacare_settings_v7';
let leads = [];
let notes = {};
let settings = { theme: 'light', lastBackup: null };
let currentPage = 1;
const PAGE_SIZE = 20;
let currentLeadId = null;
let importRows = [];
let activeFilters = { score: '', status: '', grupo: '', search: '', site: '' };
let draggedLeadId = null;
let currentApproachLead = null;
let currentTemplate = null;
let sortField = 'id';
let sortDir = 'asc';
let selectedLeads = new Set();
function loadData(){try{leads=JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]');notes=JSON.parse(localStorage.getItem(NOTES_KEY)||'{}');settings=JSON.parse(localStorage.getItem(SETTINGS_KEY)||'{"theme":"light","lastBackup":null}');}catch(e){leads=[];notes={};settings={theme:'light',lastBackup:null};}if(leads.length===0){try{const v6=JSON.parse(localStorage.getItem('crm_itacare_leads_v6')||'[]');if(v6.length>0){leads=v6;v6.forEach(l=>{if(!l.abordagem)l.abordagem=null;if(!l.template)l.template=null;if(!l.followups)l.followups=[];if(!l.approachHistory)l.approachHistory=[];});saveData();}}catch(e){}}leads.forEach(l=>{if(l.abordagem===undefined)l.abordagem=null;if(l.template===undefined)l.template=null;if(!l.followups)l.followups=[];if(!l.approachHistory)l.approachHistory=[];});applyTheme(settings.theme);}
function saveData(){localStorage.setItem(STORAGE_KEY,JSON.stringify(leads));localStorage.setItem(NOTES_KEY,JSON.stringify(notes));localStorage.setItem(SETTINGS_KEY,JSON.stringify(settings));}
function nextId(){return leads.length>0?Math.max(...leads.map(l=>l.id))+1:1;}
function hasSite(l){return !!(l.website&&l.website.trim());}
function showToast(m,t='success'){const c=document.querySelector('.toast-container');const toast=document.createElement('div');toast.className=`toast align-items-center text-white bg-${t} border-0 show`;toast.setAttribute('role','alert');toast.innerHTML=`<div class="d-flex"><div class="toast-body">${m}</div><button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button></div>`;c.appendChild(toast);setTimeout(()=>{toast.classList.remove('show');setTimeout(()=>toast.remove(),300);},3000);}
function toggleTheme(){settings.theme=settings.theme==='light'?'dark':'light';applyTheme(settings.theme);saveData();document.getElementById('themeIcon').className=settings.theme==='dark'?'bi bi-sun':'bi bi-moon-stars';document.getElementById('infoTheme').textContent=settings.theme==='dark'?'Escuro':'Claro';}
function applyTheme(t){document.documentElement.setAttribute('data-theme',t);const i=document.getElementById('themeIcon');if(i)i.className=t==='dark'?'bi bi-sun':'bi bi-moon-stars';}
let currentView='dashboard';
function showView(view,el){currentView=view;document.querySelectorAll('.view').forEach(v=>v.style.display='none');document.getElementById('view-'+view).style.display='block';document.querySelectorAll('.sidebar .nav-item').forEach(n=>n.classList.remove('active'));if(el)el.classList.add('active');const titles={dashboard:'Dashboard',leads:'Leads',pipeline:'Pipeline (Drag & Drop)',approaches:'Central de Abordagens',templates:'Templates por Nicho',docs:'Recursos & Docs',brandkit:'BrandKit - Identidade Visual',import:'Importar CSV',export:'Exportar CSV',backup:'Backup e Restore'};document.getElementById('pageTitle').textContent=titles[view]||view;if(view==='dashboard')renderDashboard();if(view==='leads'){populateGrupoFilter();renderLeads();}if(view==='pipeline')renderPipeline();if(view==='approaches')renderApproaches();if(view==='templates')renderTemplates();if(view==='docs')renderDocs();if(view==='backup')renderBackupInfo();document.getElementById('sidebar').classList.remove('show');}
function toggleSidebar(){document.getElementById('sidebar').classList.toggle('show');}

function quickFilter(type,value){activeFilters[type]=value;showView('leads',document.querySelector('[onclick*="view-leads"]'));if(type==='score')document.getElementById('filterScore').value=value;if(type==='status')document.getElementById('filterStatus').value=value;if(type==='site')document.getElementById('filterSite').value=value;renderLeads();updateFilterChips();}
function updateFilterChips(){const chips=document.getElementById('filterChips');let html='';if(activeFilters.score)html+=`<span class="filter-chip active" onclick="clearFilter('score')">Score ${activeFilters.score} <i class="bi bi-x"></i></span>`;if(activeFilters.status)html+=`<span class="filter-chip active" onclick="clearFilter('status')">${activeFilters.status} <i class="bi bi-x"></i></span>`;if(activeFilters.grupo)html+=`<span class="filter-chip active" onclick="clearFilter('grupo')">${activeFilters.grupo} <i class="bi bi-x"></i></span>`;if(activeFilters.site)html+=`<span class="filter-chip active" onclick="clearFilter('site')">${activeFilters.site==='no'?'Sem site':'Com site'} <i class="bi bi-x"></i></span>`;if(activeFilters.search)html+=`<span class="filter-chip active" onclick="clearFilter('search')">"${activeFilters.search}" <i class="bi bi-x"></i></span>`;chips.innerHTML=html;}
function clearFilter(type){activeFilters[type]='';if(type==='score')document.getElementById('filterScore').value='';if(type==='status')document.getElementById('filterStatus').value='';if(type==='grupo')document.getElementById('filterGrupo').value='';if(type==='site')document.getElementById('filterSite').value='';if(type==='search'){document.getElementById('searchInput').value='';document.getElementById('globalSearch').value='';}renderLeads();updateFilterChips();}
function handleGlobalSearch(){const val=document.getElementById('globalSearch').value;activeFilters.search=val;document.getElementById('searchInput').value=val;if(currentView!=='leads')showView('leads',document.querySelector('[onclick*="view-leads"]'));renderLeads();updateFilterChips();}
function escapeHtml(str){if(!str)return '';return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function escapeAttr(str){if(!str)return '';return str.replace(/"/g,'&quot;').replace(/'/g,'&#39;');}
function getPendingFollowups(){const now=new Date();const pending=[];leads.forEach(l=>{if(l.status==='Novo'&&!l.abordagem)return;const lastUpdate=l.updated_at?new Date(l.updated_at):new Date(l.created_at);const daysSince=Math.floor((now-lastUpdate)/(1000*60*60*24));const schedule=[2,5,10,15];const nextFollowup=schedule.find(d=>d>daysSince);if(nextFollowup&&nextFollowup-daysSince<=1){pending.push({lead:l,daysSince,nextFollowup,overdue:daysSince>=nextFollowup});}if(daysSince>15&&l.status!=='Fechado'&&l.status!=='Perdido'){if(!pending.find(p=>p.lead.id===l.id)){pending.push({lead:l,daysSince,nextFollowup:null,overdue:true});}}});return pending.sort((a,b)=>b.daysSince-a.daysSince);}
function renderDashboard(){document.getElementById('stat-total').textContent=leads.length;document.getElementById('stat-contatados').textContent=leads.filter(l=>l.status!=='Novo').length;document.getElementById('stat-responderam').textContent=leads.filter(l=>['Respondeu','Reunião','Proposta','Fechado'].includes(l.status)).length;document.getElementById('stat-fechados').textContent=leads.filter(l=>l.status==='Fechado').length;document.getElementById('stat-sem-site').textContent=leads.filter(l=>!hasSite(l)).length;document.getElementById('stat-com-site').textContent=leads.filter(l=>hasSite(l)).length;document.getElementById('stat-score-a').textContent=leads.filter(l=>l.score==='A').length;document.getElementById('stat-pendentes').textContent=getPendingFollowups().length;document.getElementById('sidebarLeadCount').textContent=leads.length;document.getElementById('countA').textContent=leads.filter(l=>l.score==='A').length;document.getElementById('countB').textContent=leads.filter(l=>l.score==='B').length;document.getElementById('countC').textContent=leads.filter(l=>l.score==='C').length;document.getElementById('countNovo').textContent=leads.filter(l=>l.status==='Novo').length;document.getElementById('countNoSite').textContent=leads.filter(l=>!hasSite(l)).length;document.getElementById('countHasSite').textContent=leads.filter(l=>hasSite(l)).length;const scores={A:0,B:0,C:0};leads.forEach(l=>{if(scores[l.score]!==undefined)scores[l.score]++;});let html='';for(const[k,v]of Object.entries(scores)){const pct=leads.length>0?(v/leads.length*100):0;const color=k==='A'?'danger':k==='B'?'warning':'secondary';html+=`<div class="d-flex align-items-center mb-3"><span class="badge badge-${k.toLowerCase()} me-2" style="width:28px;">${k}</span><div class="progress flex-grow-1" style="height:22px;"><div class="progress-bar bg-${color}" style="width:${pct}%"><small>${v} (${pct.toFixed(0)}%)</small></div></div></div>`;}document.getElementById('chart-score').innerHTML=html||'<p class="text-muted text-center">Sem dados</p>';const statuses={};leads.forEach(l=>{statuses[l.status]=(statuses[l.status]||0)+1;});const statusColors={'Novo':'primary','Contatado':'info','Respondeu':'success','Reunião':'purple','Proposta':'warning','Fechado':'success','Perdido':'danger'};let sh='';['Novo','Contatado','Respondeu','Reunião','Proposta','Fechado','Perdido'].forEach(s=>{if(!statuses[s])return;const v=statuses[s];const pct=leads.length>0?(v/leads.length*100):0;const color=statusColors[s]||'secondary';sh+=`<div class="d-flex align-items-center mb-2"><span class="status-badge status-${s.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'')} me-2" style="min-width:85px;font-size:0.7rem;">${s}</span><div class="progress flex-grow-1" style="height:20px;"><div class="progress-bar bg-${color}" style="width:${pct}%"><small>${v}</small></div></div></div>`;});document.getElementById('chart-status').innerHTML=sh||'<p class="text-muted text-center">Sem dados</p>';const grupos={};leads.forEach(l=>{if(l.grupo)grupos[l.grupo]=(grupos[l.grupo]||0)+1;});const sortedGrupos=Object.entries(grupos).sort((a,b)=>b[1]-a[1]);let gh='';sortedGrupos.forEach(([k,v])=>{const pct=leads.length>0?(v/leads.length*100):0;const noSite=leads.filter(l=>l.grupo===k&&!hasSite(l)).length;gh+=`<div class="mb-2"><div class="d-flex justify-content-between mb-1"><span class="small fw-medium">${escapeHtml(k)}</span><span class="badge bg-secondary">${v} <small class="text-danger">(${noSite} sem site)</small></span></div><div class="progress" style="height:6px;"><div class="progress-bar bg-info" style="width:${pct}%"></div></div></div>`;});document.getElementById('chart-grupo').innerHTML=gh||'<p class="text-muted text-center">Sem dados</p>';const top=[...leads].filter(l=>l.gm_reviews).sort((a,b)=>(b.gm_reviews||0)-(a.gm_reviews||0)).slice(0,15);let th='';top.forEach(l=>{th+=`<tr onclick="openLeadModal(${l.id})" style="cursor:pointer;"><td><strong>${escapeHtml(l.nome)}</strong></td><td><small>${escapeHtml(l.grupo||'-')}</small></td><td><small>${escapeHtml(l.nicho||'-')}</small></td><td class="gm-stars">${l.gm_rating?l.gm_rating.toFixed(1):'-'}</td><td><span class="badge bg-warning text-dark">${(l.gm_reviews||0).toLocaleString('pt-BR')}</span></td><td>${hasSite(l)?'<span class="has-site-badge"><i class="bi bi-check"></i> Site</span>':'<span class="no-site-badge"><i class="bi bi-x"></i> Sem site</span>'}</td><td><span class="status-badge status-${(l.status||'Novo').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'')}">${l.status||'Novo'}</span></td><td><button class="btn btn-sm btn-outline-primary" onclick="event.stopPropagation();openLeadModal(${l.id})"><i class="bi bi-eye"></i></button></td></tr>`;});document.getElementById('topTable').innerHTML=th||'<tr><td colspan="8" class="text-center text-muted py-3">Sem dados</td></tr>';renderReminders();renderApproachMetrics();}
function getPendingFollowups(){const now=new Date();const pending=[];leads.forEach(l=>{if(l.status==='Novo'&&!l.abordagem)return;const lastUpdate=l.updated_at?new Date(l.updated_at):new Date(l.created_at);const daysSince=Math.floor((now-lastUpdate)/(1000*60*60*24));const schedule=[2,5,10,15];const nextFollowup=schedule.find(d=>d>daysSince);if(nextFollowup&&nextFollowup-daysSince<=1){pending.push({lead:l,daysSince,nextFollowup,overdue:daysSince>=nextFollowup});}if(daysSince>15&&l.status!=='Fechado'&&l.status!=='Perdido'){if(!pending.find(p=>p.lead.id===l.id)){pending.push({lead:l,daysSince,nextFollowup:null,overdue:true});}}});return pending.sort((a,b)=>b.daysSince-a.daysSince);}
function renderReminders(){const pending=getPendingFollowups();const container=document.getElementById('remindersList');if(pending.length===0){container.innerHTML='<p class="text-muted text-center py-3"><i class="bi bi-check-circle" style="font-size:2rem;opacity:0.3;"></i><br>Nenhum follow-up pendente!</p>';return;}container.innerHTML=pending.slice(0,15).map(p=>`<div class="reminder-item ${p.overdue?'overdue':''}"><div class="reminder-text">${escapeHtml(p.lead.nome)}</div><div class="reminder-date">${p.overdue?'<i class="bi bi-exclamation-triangle text-danger me-1"></i>Atrasado':'<i class="bi bi-clock me-1"></i>Follow-up em '+(p.nextFollowup-p.daysSince)+' dia(s)'} · ${p.daysSince} dias desde último contato</div><div class="mt-1"><button class="btn btn-sm btn-outline-primary py-0 px-1" onclick="openLeadModal(${p.lead.id})"><i class="bi bi-eye"></i></button>${p.lead.whatsapp?`<button class="btn btn-sm btn-outline-success py-0 px-1" onclick="quickContact(${p.lead.id})"><i class="bi bi-whatsapp"></i></button>`:''}</div></div>`).join('');}
function renderApproachMetrics(){const container=document.getElementById('approachMetrics');const total=leads.length;const withApproach=leads.filter(l=>l.abordagem).length;const contacted=leads.filter(l=>l.status!=='Novo').length;const responded=leads.filter(l=>['Respondeu','Reunião','Proposta','Fechado'].includes(l.status)).length;const closed=leads.filter(l=>l.status==='Fechado').length;const lost=leads.filter(l=>l.status==='Perdido').length;const noSite=leads.filter(l=>!hasSite(l)).length;const withSite=leads.filter(l=>hasSite(l)).length;const responseRate=contacted>0?(responded/contacted*100).toFixed(1):0;const closeRate=responded>0?(closed/responded*100).toFixed(1):0;const approachRate=total>0?(withApproach/total*100).toFixed(1):0;container.innerHTML=`<div class="row g-3"><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--primary);">${withApproach}</div><div class="small text-muted">Com abordagem (${approachRate}%)</div></div></div><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--success);">${contacted}</div><div class="small text-muted">Contatados</div></div></div><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--warning);">${responseRate}%</div><div class="small text-muted">Taxa de resposta</div></div></div><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--accent);">${closeRate}%</div><div class="small text-muted">Taxa de fechamento</div></div></div><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--danger);">${noSite}</div><div class="small text-muted">Sem site (oportunidade)</div></div></div><div class="col-md-2 col-6"><div class="text-center"><div class="stat-value" style="font-size:1.6rem;color:var(--success);">${withSite}</div><div class="small text-muted">Com site</div></div></div></div><hr><div class="row g-3"><div class="col-md-6"><h6 class="small fw-bold text-muted mb-2">Funil de Abordagem</h6>${[{label:'Total Leads',value:total,color:'secondary'},{label:'Sem site (oportunidade)',value:noSite,color:'danger'},{label:'Com abordagem',value:withApproach,color:'primary'},{label:'Contatados',value:contacted,color:'info'},{label:'Responderam',value:responded,color:'success'},{label:'Fechados',value:closed,color:'success'},{label:'Perdidos',value:lost,color:'danger'}].map(item=>`<div class="d-flex align-items-center mb-2"><span class="small me-2" style="min-width:160px;">${item.label}</span><div class="progress flex-grow-1" style="height:18px;"><div class="progress-bar bg-${item.color}" style="width:${total>0?(item.value/total*100):0}%">${item.value}</div></div></div>`).join('')}</div><div class="col-md-6"><h6 class="small fw-bold text-muted mb-2">Leads sem site por grupo (oportunidade)</h6>${Object.entries(leads.reduce((acc,l)=>{if(!hasSite(l)){const g=l.grupo||'Outros';acc[g]=(acc[g]||0)+1;}return acc;},{})).sort((a,b)=>b[1]-a[1]).map(([g,v])=>`<div class="d-flex align-items-center mb-1"><span class="small me-2" style="min-width:120px;">${escapeHtml(g)}</span><div class="progress flex-grow-1" style="height:14px;"><div class="progress-bar bg-danger" style="width:${total>0?(v/total*100):0}%">${v}</div></div></div>`).join('')}</div></div>`;}
function populateGrupoFilter(){const grupos=[...new Set(leads.map(l=>l.grupo).filter(Boolean))].sort();const sel=document.getElementById('filterGrupo');const current=sel.value;sel.innerHTML='<option value="">Todos os grupos</option>'+grupos.map(g=>`<option value="${escapeHtml(g)}" ${g===current?'selected':''}>${escapeHtml(g)}</option>`).join('');}
function sortLeads(field){if(sortField===field){sortDir=sortDir==='asc'?'desc':'asc';}else{sortField=field;sortDir='asc';}document.querySelectorAll('.sort-icon').forEach(i=>{i.classList.remove('active');i.className='bi bi-arrow-down-up sort-icon';});const icon=document.getElementById('sort-'+field);if(icon){icon.classList.add('active');icon.className=`bi bi-arrow-${sortDir==='asc'?'up':'down'} sort-icon active`;}renderLeads();}
function renderLeads(){const search=(document.getElementById('searchInput').value||'').toLowerCase();const score=document.getElementById('filterScore').value;const status=document.getElementById('filterStatus').value;const grupo=document.getElementById('filterGrupo').value;const site=document.getElementById('filterSite').value;activeFilters={score,status,grupo,search,site};let filtered=leads.filter(l=>{if(search&&!`${l.nome} ${l.nicho||''} ${l.grupo||''} ${l.endereco||''} ${l.telefone||''} ${l.whatsapp||''} ${l.instagram||''} ${l.abordagem||''}`.toLowerCase().includes(search))return false;if(score&&l.score!==score)return false;if(status&&l.status!==status)return false;if(grupo&&l.grupo!==grupo)return false;if(site==='no'&&hasSite(l))return false;if(site==='yes'&&!hasSite(l))return false;return true;});filtered.sort((a,b)=>{let va=a[sortField],vb=b[sortField];if(va===null||va===undefined)va='';if(vb===null||vb===undefined)vb='';if(typeof va==='number'&&typeof vb==='number'){return sortDir==='asc'?va-vb:vb-va;}return sortDir==='asc'?String(va).localeCompare(String(vb)):String(vb).localeCompare(String(va));});const totalPages=Math.ceil(filtered.length/PAGE_SIZE)||1;if(currentPage>totalPages)currentPage=1;const start=(currentPage-1)*PAGE_SIZE;const pageData=filtered.slice(start,start+PAGE_SIZE);const tbody=document.getElementById('leadsTable');const empty=document.getElementById('emptyState');if(filtered.length===0){tbody.innerHTML='';empty.style.display='block';}else{empty.style.display='none';tbody.innerHTML=pageData.map(l=>`<tr class="lead-row" onclick="openLeadModal(${l.id})"><td class="checkbox-col" onclick="event.stopPropagation()"><input type="checkbox" class="form-check-input lead-checkbox" data-id="${l.id}" ${selectedLeads.has(l.id)?'checked':''} onchange="toggleSelect(${l.id})"></td><td><small class="text-muted">${l.id}</small></td><td><strong>${escapeHtml(l.nome)}</strong>${l.abordagem?'<br><small class="text-muted"><i class="bi bi-chat-quote me-1" style="color:var(--primary);"></i>'+escapeHtml(l.abordagem.substring(0,40))+(l.abordagem.length>40?'...':'')+'</small>':''}</td><td><small>${escapeHtml(l.nicho||'-')}</small></td><td><small>${escapeHtml(l.grupo||'-')}</small></td><td><span class="badge badge-${(l.score||'B').toLowerCase()}">${l.score||'B'}</span></td><td><span class="status-badge status-${(l.status||'Novo').toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'')}">${l.status||'Novo'}</span></td><td class="gm-stars">${l.gm_rating?l.gm_rating.toFixed(1):'-'}</td><td class="gm-count">${l.gm_reviews?l.gm_reviews.toLocaleString('pt-BR'):'-'}</td><td>${hasSite(l)?'<span class="has-site-badge"><i class="bi bi-check"></i></span>':'<span class="no-site-badge"><i class="bi bi-x"></i></span>'}</td><td><small>${l.whatsapp?`<a href="https://wa.me/${l.whatsapp.replace(/\\D/g,'')}" target="_blank" class="link-wa" onclick="event.stopPropagation()"><i class="bi bi-whatsapp"></i></a> ${l.whatsapp}`:'-'}</small></td><td><div class="quick-actions" onclick="event.stopPropagation()"><button class="btn btn-outline-primary btn-sm" onclick="openLeadModal(${l.id})" title="Ver detalhes"><i class="bi bi-eye"></i></button>${l.whatsapp?`<button class="btn btn-outline-success btn-sm" onclick="quickContact(${l.id})" title="Contatar"><i class="bi bi-whatsapp"></i></button>`:''}<button class="btn btn-outline-secondary btn-sm" onclick="cycleStatus(${l.id})" title="Mudar status"><i class="bi bi-arrow-repeat"></i></button></div></td></tr>`).join('');}document.getElementById('showingCount').textContent=`Mostrando ${pageData.length} de ${filtered.length} leads`;document.getElementById('leadsCountBadge').textContent=filtered.length;document.getElementById('sidebarLeadCount').textContent=leads.length;const pag=document.getElementById('pagination');let ph='';if(totalPages>1){ph+=`<li class="page-item ${currentPage===1?'disabled':''}"><a class="page-link" href="#" onclick="goPage(${currentPage-1});return false;">«</a></li>`;for(let i=Math.max(1,currentPage-2);i<=Math.min(totalPages,currentPage+2);i++){ph+=`<li class="page-item ${i===currentPage?'active':''}"><a class="page-link" href="#" onclick="goPage(${i});return false;">${i}</a></li>`;}ph+=`<li class="page-item ${currentPage===totalPages?'disabled':''}"><a class="page-link" href="#" onclick="goPage(${currentPage+1});return false;">»</a></li>`;}pag.innerHTML=ph;updateFilterChips();updateBulkActions();}
function goPage(p){currentPage=Math.max(1,p);renderLeads();}
function toggleSelect(id){if(selectedLeads.has(id))selectedLeads.delete(id);else selectedLeads.add(id);updateBulkActions();}
function toggleSelectAll(){const cb=document.getElementById('selectAll');const checkboxes=document.querySelectorAll('.lead-checkbox');checkboxes.forEach(c=>{const id=parseInt(c.dataset.id);if(cb.checked)selectedLeads.add(id);else selectedLeads.delete(id);c.checked=cb.checked;});updateBulkActions();}
function updateBulkActions(){const ba=document.getElementById('bulkActions');const count=selectedLeads.size;if(count>0){ba.classList.add('show');document.getElementById('selectedCount').textContent=`${count} selecionado${count>1?'s':''}`;}else{ba.classList.remove('show');}}
function clearSelection(){selectedLeads.clear();document.querySelectorAll('.lead-checkbox').forEach(c=>c.checked=false);document.getElementById('selectAll').checked=false;updateBulkActions();}
function bulkChangeStatus(){if(selectedLeads.size===0)return;const status=prompt('Novo status (Novo, Contatado, Respondeu, Reunião, Proposta, Fechado, Perdido):');if(!status)return;const valid=['Novo','Contatado','Respondeu','Reunião','Proposta','Fechado','Perdido'];if(!valid.includes(status)){showToast('Status inválido!','danger');return;}selectedLeads.forEach(id=>{const l=leads.find(x=>x.id===id);if(l){l.status=status;l.updated_at=new Date().toISOString();}});saveData();clearSelection();renderLeads();renderDashboard();showToast(`${selectedLeads.size} leads atualizados para ${status}`);}
function bulkApplyApproach(){if(selectedLeads.size===0)return;const approach=prompt('Digite a abordagem a ser aplicada:');if(!approach)return;selectedLeads.forEach(id=>{const l=leads.find(x=>x.id===id);if(l){l.abordagem=approach;l.updated_at=new Date().toISOString();}});saveData();clearSelection();renderLeads();showToast(`Abordagem aplicada a ${selectedLeads.size} leads!`);}
function bulkApplyTemplate(){if(selectedLeads.size===0)return;const tmplId=prompt('ID do template (ex: hospedagem-sem-site, comercio-sem-site, servico-sem-site, restaurante-sem-site):');if(!tmplId)return;const t=TEMPLATES.find(x=>x.id===tmplId);if(!t){showToast('Template não encontrado!','danger');return;}let count=0;selectedLeads.forEach(id=>{const l=leads.find(x=>x.id===id);if(l&&!hasSite(l)){let text=t.text;text=text.replace(/\\[NOME\\]/g,l.nome);text=text.replace(/\\[CIDADE SIMILAR\\]/g,'Itacaré');text=text.replace(/\\[NICHO\\]/g,l.nicho||'negócio');text=text.replace(/\\[PASSEIO\\/SURF\\]/g,l.nicho||'passeio');text=text.replace(/\\[TRANSFER\\/LOCAÇÃO\\]/g,l.nicho||'transfer');text=text.replace(/\\[RESULTADO\\]/g,'vendas');text=text.replace(/X estrelas/g,(l.gm_rating?l.gm_rating.toFixed(1):'X')+' estrelas');text=text.replace(/Y reviews/g,(l.gm_reviews?l.gm_reviews.toLocaleString('pt-BR'):'Y')+' reviews');l.abordagem=text;l.template=tmplId;l.updated_at=new Date().toISOString();count++;}});saveData();clearSelection();renderLeads();showToast(`Template aplicado a ${count} leads sem site!`);}
function bulkExport(){if(selectedLeads.size===0)return;const selected=leads.filter(l=>selectedLeads.has(l.id));const header=['ID','Nome','Nicho','Grupo','Endereco','Telefone','WhatsApp','Website','Instagram','GM_Rating','GM_Reviews','Score','Status','Abordagem','TemSite','Template'];const rows=[header.join(',')];selected.forEach(l=>{const vals=[l.id,l.nome,l.nicho||'',l.grupo||'',l.endereco||'',l.telefone||'',l.whatsapp||'',l.website||'',l.instagram||'',l.gm_rating||'',l.gm_reviews||'',l.score||'B',l.status||'Novo',l.abordagem||'',hasSite(l)?'Sim':'Não',l.template||''].map(v=>`"${String(v).replace(/"/g,'""')}"`);rows.push(vals.join(','));});const blob=new Blob(['\\uFEFF'+rows.join('\\n')],{type:'text/csv;charset=utf-8;'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='crm-itacare-selecionados.csv';a.click();URL.revokeObjectURL(url);showToast(`${selected.length} leads exportados!`);}
function cycleStatus(id){const l=leads.find(x=>x.id===id);if(!l)return;const order=['Novo','Contatado','Respondeu','Reunião','Proposta','Fechado','Perdido'];const idx=order.indexOf(l.status||'Novo');l.status=order[(idx+1)%order.length];l.updated_at=new Date().toISOString();saveData();renderLeads();renderDashboard();if(currentView==='pipeline')renderPipeline();showToast(`${l.nome}: ${l.status}`);}

// Pipeline
function renderPipeline(){const statuses=['Novo','Contatado','Respondeu','Reunião','Proposta','Fechado','Perdido'];const colors={'Novo':'primary','Contatado':'info','Respondeu':'success','Reunião':'purple','Proposta':'warning','Fechado':'success','Perdido':'danger'};const icons={'Novo':'circle','Contatado':'telephone','Respondeu':'chat-dots','Reunião':'calendar-event','Proposta':'file-text','Fechado':'check-circle','Perdido':'x-circle'};let html='';statuses.forEach(s=>{const leadsInStatus=leads.filter(l=>(l.status||'Novo')===s);html+=`<div class="col-md-6 col-lg-4 col-xl-3 mb-3"><div class="card h-100"><div class="card-header bg-${colors[s]||'secondary'} text-white d-flex justify-content-between align-items-center py-2"><span><i class="bi bi-${icons[s]||'circle'} me-1"></i>${s}</span><span class="badge bg-white text-dark">${leadsInStatus.length}</span></div><div class="card-body p-2 kanban-column" data-status="${s}" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event,'${s}')" style="max-height:500px;overflow-y:auto;min-height:200px;">${leadsInStatus.map(l=>`<div class="kanban-card" draggable="true" data-id="${l.id}" ondragstart="handleDragStart(event,${l.id})" ondragend="handleDragEnd(event)" onclick="openLeadModal(${l.id})"><div class="d-flex justify-content-between align-items-start"><div class="card-title">${escapeHtml(l.nome)}</div><span class="drag-handle"><i class="bi bi-grip-vertical"></i></span></div><div class="card-meta"><span class="badge badge-${(l.score||'B').toLowerCase()} me-1">${l.score||'B'}</span>${escapeHtml(l.grupo||'')} · ${l.gm_rating?l.gm_rating.toFixed(1)+'★':''}${hasSite(l)?' <span class="has-site-badge" style="font-size:0.6rem;"><i class="bi bi-globe"></i></span>':' <span class="no-site-badge" style="font-size:0.6rem;"><i class="bi bi-globe"></i></span>'}</div>${l.abordagem?`<div class="card-abordagem"><i class="bi bi-chat-quote me-1"></i>${escapeHtml(l.abordagem.substring(0,60))}${l.abordagem.length>60?'...':''}</div>`:''}${l.whatsapp?`<div class="mt-1"><a href="https://wa.me/${l.whatsapp.replace(/\\D/g,'')}" target="_blank" class="link-wa small" onclick="event.stopPropagation()"><i class="bi bi-whatsapp"></i> ${l.whatsapp}</a></div>`:''}<div class="card-actions">${l.whatsapp?`<button class="btn btn-sm btn-outline-success py-0 px-1" onclick="event.stopPropagation();quickContact(${l.id})" title="Contatar"><i class="bi bi-whatsapp" style="font-size:0.7rem;"></i></button>`:''}<button class="btn btn-sm btn-outline-secondary py-0 px-1" onclick="event.stopPropagation();cycleStatus(${l.id})" title="Avançar status"><i class="bi bi-arrow-right" style="font-size:0.7rem;"></i></button></div></div>`).join('')}${leadsInStatus.length===0?'<div class="text-center text-muted small py-4"><i class="bi bi-inbox" style="font-size:2rem;opacity:0.3;"></i><br>Arraste cards aqui</div>':''}${leadsInStatus.length>20?`<div class="text-center text-muted small mt-2">+${leadsInStatus.length-20} mais</div>`:''}</div></div></div>`;});document.getElementById('pipelineBoard').innerHTML=html;}
function handleDragStart(e,id){draggedLeadId=id;e.target.classList.add('dragging');e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',id);}
function handleDragEnd(e){e.target.classList.remove('dragging');document.querySelectorAll('.kanban-column').forEach(c=>c.classList.remove('drag-over'));}
function handleDragOver(e){e.preventDefault();e.dataTransfer.dropEffect='move';e.currentTarget.classList.add('drag-over');}
function handleDragLeave(e){e.currentTarget.classList.remove('drag-over');}
function handleDrop(e,newStatus){e.preventDefault();e.currentTarget.classList.remove('drag-over');const id=parseInt(e.dataTransfer.getData('text/plain'));const l=leads.find(x=>x.id===id);if(!l)return;const oldStatus=l.status||'Novo';if(oldStatus===newStatus)return;l.status=newStatus;l.updated_at=new Date().toISOString();if(!notes[id])notes[id]=[];notes[id].push({text:`Status alterado: ${oldStatus} → ${newStatus} (drag & drop)`,date:new Date().toISOString(),type:'status'});saveData();renderPipeline();renderDashboard();showToast(`${l.nome}: ${oldStatus} → ${newStatus}`);}

// Templates
function renderTemplates(){const container=document.getElementById('templatesList');if(!container)return;const niches=[...new Set(TEMPLATES.map(t=>t.niche))];let html='';niches.forEach(niche=>{const templates=TEMPLATES.filter(t=>t.niche===niche);const noSiteCount=leads.filter(l=>!hasSite(l)&&(l.grupo===niche||l.nicho===niche||niche==='Geral')).length;html+=`<div class="mb-4"><h6 class="fw-bold mb-2" style="color:var(--primary);"><i class="bi bi-folder me-1"></i>${escapeHtml(niche)} <span class="badge bg-secondary ms-1">${templates.length} templates</span> ${noSiteCount>0?`<span class="badge bg-danger ms-1">${noSiteCount} sem site</span>`:''}</h6>${templates.map(t=>`<div class="template-card"><div class="template-title">${escapeHtml(t.title)}</div><div class="template-preview">${escapeHtml(t.text)}</div><div class="template-actions"><button class="btn btn-sm btn-outline-primary" onclick="copyTemplate('${t.id}')"><i class="bi bi-clipboard me-1"></i>Copiar</button><button class="btn btn-sm btn-outline-success" onclick="useTemplate('${t.id}')"><i class="bi bi-send me-1"></i>Aplicar ao lead sem site</button></div></div>`).join('')}</div>`;});container.innerHTML=html;}
function useTemplate(id){const t=TEMPLATES.find(x=>x.id===id);if(!t)return;const nicheLeads=leads.filter(l=>!hasSite(l)&&(l.grupo===t.niche||l.nicho===t.niche||t.niche==='Geral'));if(nicheLeads.length===0){showToast('Nenhum lead sem site neste nicho','warning');return;}const l=nicheLeads[0];let text=t.text;text=text.replace(/\\[NOME\\]/g,l.nome);text=text.replace(/\\[CIDADE SIMILAR\\]/g,'Itacaré');text=text.replace(/\\[NICHO\\]/g,l.nicho||'negócio');text=text.replace(/\\[PASSEIO\\/SURF\\]/g,l.nicho||'passeio');text=text.replace(/\\[TRANSFER\\/LOCAÇÃO\\]/g,l.nicho||'transfer');text=text.replace(/\\[RESULTADO\\]/g,'vendas');text=text.replace(/X estrelas/g,(l.gm_rating?l.gm_rating.toFixed(1):'X')+' estrelas');text=text.replace(/Y reviews/g,(l.gm_reviews?l.gm_reviews.toLocaleString('pt-BR'):'Y')+' reviews');l.abordagem=text;l.template=id;l.updated_at=new Date().toISOString();saveData();showToast(`Template aplicado a ${l.nome}! (${nicheLeads.length} leads sem site neste nicho)`);renderTemplates();}
function copyTemplate(id){const t=TEMPLATES.find(x=>x.id===id);if(!t)return;navigator.clipboard.writeText(t.text).then(()=>showToast('Template copiado!')).catch(()=>showToast('Erro ao copiar','danger'));}

// ===== DOCS =====
const DOCS = [
  { id: 'completo', title: 'Levantamento Completo + Google Maps', file: 'itacare-completo-empresas-nichos-googlemaps.md', icon: 'bi-file-earmark-text', desc: 'Todos os ~844 negócios com dados de contato e Google Maps' },
  { id: 'nichos', title: 'Levantamento de Nichos', file: 'itacare-scraping-empresas-nichos.md', icon: 'bi-diagram-3', desc: 'Taxonomia de nichos e categorias do diretório' },
  { id: 'negocios', title: 'Bares & Restaurantes', file: 'itacare_negocios.md', icon: 'bi-cup-straw', desc: '174 restaurantes, bares, pizzarias e mais' },
  { id: 'manual', title: 'Manual de Prospecção', file: 'manual-prospeccao-itacare.md', icon: 'bi-book', desc: 'Scripts, cadência, objeções, KPIs e checklist' },
  { id: 'sugestoes', title: 'Sugestões de Melhoria', file: 'sugestoes-melhoria-abordagens.md', icon: 'bi-lightbulb', desc: '30+ sugestões de melhoria para o CRM' },
];

let currentDoc = null;

function renderDocs() {
  const container = document.getElementById('docsList');
  if (!container) return;
  const viewer = document.getElementById('docViewer');
  if (viewer) viewer.style.display = 'none';
  container.style.display = 'flex';
  container.className = 'row g-3 mb-4';
  let html = '';
  DOCS.forEach(doc => {
    html += '<div class="col-md-6 col-lg-4"><div class="doc-card" onclick="viewDoc(\'' + doc.id + '\')"><div class="doc-icon"><i class="bi ' + doc.icon + '"></i></div><div class="doc-title">' + escapeHtml(doc.title) + '</div><div class="doc-desc">' + escapeHtml(doc.desc) + '</div><div class="mt-2"><span class="badge bg-secondary" style="font-size:0.65rem;">' + doc.file + '</span></div></div></div>';
  });
  container.innerHTML = html;
}

async function viewDoc(id) {
  const doc = DOCS.find(d => d.id === id);
  if (!doc) return;
  currentDoc = doc;
  const container = document.getElementById('docsList');
  const viewer = document.getElementById('docViewer');
  const content = document.getElementById('docContent');
  container.style.display = 'none';
  viewer.style.display = 'block';
  content.innerHTML = '<div class="text-center py-4"><div class="spinner-border text-primary" role="status"></div><p class="mt-2 text-muted">Carregando documento...</p></div>';
  try {
    const resp = await fetch(doc.file);
    if (!resp.ok) throw new Error('Arquivo não encontrado');
    const text = await resp.text();
    content.innerHTML = marked.parse(text);
  } catch (e) {
    content.innerHTML = '<div class="alert alert-danger"><i class="bi bi-exclamation-triangle me-2"></i>Erro ao carregar: ' + escapeHtml(e.message) + '</div><p class="text-muted">Certifique-se de que o servidor HTTP está rodando e os arquivos estão na mesma pasta.</p>';
  }
}

function closeDoc() {
  document.getElementById('docViewer').style.display = 'none';
  document.getElementById('docsList').style.display = 'flex';
  currentDoc = null;
}

function copyDocContent() {
  const content = document.getElementById('docContent').innerText;
  navigator.clipboard.writeText(content).then(() => showToast('Conteúdo copiado!')).catch(() => showToast('Erro ao copiar', 'danger'));
}

// ===== AUTO LOAD CSV =====
async function autoLoadCSV() {
  try {
    const resp = await fetch('prospeccao-itacare-leads.csv');
    if (!resp.ok) return;
    const text = await resp.text();
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) return;
    if (leads.length > 0) return;
    const header = parseCSVLine(lines[0]);
    importRows = lines.slice(1).map(line => {
      const fields = parseCSVLine(line);
      const obj = {};
      header.forEach((h, i) => { obj[h.trim()] = (fields[i] || '').trim(); });
      return obj;
    });
    let count = 0;
    importRows.forEach(row => {
      const nome = row['Nome'] || row['nome'] || '';
      if (!nome) return;
      const lead = {
        id: nextId(), nome,
        nicho: row['Nicho'] || row['nicho'] || null,
        grupo: row['Grupo'] || row['grupo'] || null,
        endereco: row['Endereco'] || row['endereco'] || row['Endereço'] || null,
        telefone: row['Telefone'] || row['telefone'] || null,
        whatsapp: row['WhatsApp'] || row['whatsapp'] || null,
        website: row['Website'] || row['website'] || null,
        instagram: row['Instagram'] || row['instagram'] || null,
        gm_rating: parseFloat((row['GM_Rating'] || row['gm_rating'] || '').replace(',', '.')) || null,
        gm_reviews: parseInt((row['GM_Reviews'] || row['gm_reviews'] || '').replace(/[^\d]/g, '')) || null,
        score: (row['Score'] || row['score'] || 'B').toUpperCase(),
        status: row['Status'] || row['status'] || 'Novo',
        abordagem: row['Abordagem'] || row['abordagem'] || null,
        template: row['Template'] || row['template'] || null,
        abordagemStatus: null,
        approachHistory: [],
        followups: [],
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      leads.push(lead);
      count++;
    });
    saveData();
    importRows = [];
    populateGrupoFilter();
    renderLeads();
    renderDashboard();
    if (count > 0) showToast(count + ' leads carregados automaticamente!', 'success');
  } catch (e) {
    console.log('Auto-load CSV failed:', e.message);
  }
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey || e.metaKey) {
    switch(e.key.toLowerCase()) {
      case 'n': e.preventDefault(); openAddModal(); break;
      case 'f': e.preventDefault(); document.getElementById('globalSearch').focus(); break;
      case 's': e.preventDefault(); if (currentLeadId) saveLeadChanges(); showToast('Salvo!'); break;
      case 'd': e.preventDefault(); showView('dashboard', document.querySelector('[onclick*="view-dashboard"]')); break;
      case 'l': e.preventDefault(); showView('leads', document.querySelector('[onclick*="view-leads"]')); break;
      case 'p': e.preventDefault(); showView('pipeline', document.querySelector('[onclick*="view-pipeline"]')); break;
      case 'a': e.preventDefault(); showView('approaches', document.querySelector('[onclick*="view-approaches"]')); break;
      case 'e': e.preventDefault(); showView('export', document.querySelector('[onclick*="view-export"]')); break;
      case 't': e.preventDefault(); toggleTheme(); break;
    }
    if (e.shiftKey && e.key.toLowerCase() === 's') { e.preventDefault(); quickFilter('site', 'no'); }
    if (e.shiftKey && e.key.toLowerCase() === 'c') { e.preventDefault(); quickFilter('site', 'yes'); }
  }
  if (e.key === 'Escape') {
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(m => bootstrap.Modal.getInstance(m)?.hide());
  }
});

function showShortcuts() {
  new bootstrap.Modal(document.getElementById('shortcutsModal')).show();
}

// ===== INIT =====
(async function() {
  loadData();
  await autoLoadCSV();
  renderDashboard();
  populateGrupoFilter();
  renderLeads();
})();



// Create brandkit view dynamically
(function() {
  const contentArea = document.querySelector('.content-area');
  if (!contentArea) return;
  const div = document.createElement('div');
  div.id = 'view-brandkit';
  div.className = 'view';
  div.style.display = 'none';
  div.innerHTML = `
    <h5 class="mb-3"><i class="bi bi-palette me-2"></i>BrandKit - Identidade Visual</h5>
    <p class="text-muted mb-3">Extraia a identidade visual (paleta, logo, fotos) do Instagram de cada lead. Rode o brandkit (Python) e importe o brandkit.json aqui.</p>
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header" style="background:var(--primary);color:white;"><i class="bi bi-terminal me-2"></i>Rodar BrandKit</div>
          <div class="card-body">
            <p class="small text-muted">Comando para extrair identidade visual de um lead:</p>
            <div class="input-group input-group-sm mb-2">
              <input type="text" class="form-control" id="bkHandle" placeholder="@handle ou URL do Instagram">
            </div>
            <div class="input-group input-group-sm mb-2">
              <input type="text" class="form-control" id="bkSite" placeholder="site.com (opcional)">
            </div>
            <div class="form-check mb-2">
              <input class="form-check-input" type="checkbox" id="bkDemo">
              <label class="form-check-label small" for="bkDemo">Modo demo (offline, dados sintéticos)</label>
            </div>
            <button class="btn btn-primary w-100 mb-2" id="bkRunBtn" onclick="runBrandkit()"><i class="bi bi-play-fill me-1"></i>Rodar BrandKit</button>
            <div id="bkProgressContainer" style="display:none;" class="mb-2">
              <div class="progress" style="height:20px;">
                <div id="bkProgressBar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width:0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
              </div>
            </div>
            <div id="bkRunStatus" class="bg-light p-2 rounded small" style="display:none;"></div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header" style="background:var(--success);color:white;"><i class="bi bi-upload me-2"></i>Importar BrandKit</div>
          <div class="card-body text-center">
            <i class="bi bi-file-earmark-code" style="font-size:3rem;color:var(--success);"></i>
            <p class="mt-2 small text-muted">Selecione o brandkit.json gerado pelo Python</p>
            <input type="file" id="bkFileInput" accept=".json" style="display:none;" onchange="importBrandkitFile(event)">
            <button class="btn btn-success btn-sm" onclick="document.getElementById('bkFileInput').click()"><i class="bi bi-upload me-1"></i>Selecionar JSON</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100">
          <div class="card-header" style="background:var(--accent);color:white;"><i class="bi bi-info-circle me-2"></i>Status</div>
          <div class="card-body">
            <div><strong>Kits importados:</strong> <span id="bkTotal">0</span></div>
            <div><strong>Com paleta:</strong> <span id="bkWithPalette">0</span></div>
            <div><strong>Com logo:</strong> <span id="bkWithLogo">0</span></div>
            <div><strong>Com fotos:</strong> <span id="bkWithPhotos">0</span></div>
          </div>
        </div>
      </div>
    </div>
    <div id="brandkitList" class="row g-3"></div>
  `;
  contentArea.appendChild(div);
})();

// ===== BRANDKIT =====
let brandKits = {};
const BK_STORAGE_KEY = 'crm_itacare_brandkits_v7';

function loadBrandKits() {
  try {
    brandKits = JSON.parse(localStorage.getItem(BK_STORAGE_KEY) || '{}');
  } catch (e) { brandKits = {}; }
}

function saveBrandKits() {
  localStorage.setItem(BK_STORAGE_KEY, JSON.stringify(brandKits));
}

async function runBrandkit() {
  const handle = document.getElementById('bkHandle').value.trim();
  const site = document.getElementById('bkSite').value.trim();
  if (!handle) { showToast('Digite um handle do Instagram!', 'danger'); return; }

  const btn = document.getElementById('bkRunBtn');
  const status = document.getElementById('bkRunStatus');
  const progress = document.getElementById('bkProgressBar');
  const progressContainer = document.getElementById('bkProgressContainer');

  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spinner-border spinner-border-sm me-1"></span>Rodando...'; }
  if (status) { status.style.display = 'block'; status.textContent = 'Iniciando extração de ' + handle + '...'; }
  if (progressContainer) progressContainer.style.display = 'block';
  if (progress) { progress.style.width = '0%'; progress.textContent = '0%'; }

  // Check if API is available (local server)
  let apiAvailable = true;
  try {
    const healthCheck = await fetch('/api/brandkit/run', { method: 'OPTIONS' });
    if (!healthCheck.ok && healthCheck.status !== 200) apiAvailable = false;
  } catch (e) {
    apiAvailable = false;
  }

  if (!apiAvailable) {
    showToast('Servidor local nao detectado. Rode "python crm_server.py" para usar o scraper automatico. Ou importe o brandkit.json manualmente.', 'warning');
    const handle = document.getElementById('bkHandle').value.trim();
    const site = document.getElementById('bkSite').value.trim();
    let cmd = 'cd projetim/brandkit && .venv/Scripts/python.exe -m brandkit run --handle ' + handle;
    if (site) cmd += ' --site ' + site;
    cmd += ' --demo --no-site --out out/' + handle.replace('@', '').toLowerCase();
    const status = document.getElementById('bkRunStatus');
    if (status) { status.style.display = 'block'; status.textContent = 'Comando (copie e rode no terminal):\n' + cmd; }
    const btn = document.getElementById('bkRunBtn');
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="bi bi-play-fill me-1"></i>Rodar BrandKit'; }
    return;
  }

  try {
    // Start job
    const resp = await fetch('/api/brandkit/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ handle, site, demo: document.getElementById('bkDemo')?.checked || false, no_site: true })
    });
    const startData = await resp.json();
    if (startData.error) { throw new Error(startData.error); }
    const jobId = startData.job_id;

    // Poll for progress
    let done = false;
    let kit = null;
    while (!done) {
      await new Promise(r => setTimeout(r, 800));
      const progResp = await fetch('/api/brandkit/progress/' + jobId);
      const prog = await progResp.json();

      // Update progress bar
      if (progress) {
        progress.style.width = prog.progress + '%';
        progress.textContent = prog.progress + '%';
      }

      // Update status text with latest output line
      if (status && prog.lines && prog.lines.length > 0) {
        const lastLine = prog.lines[prog.lines.length - 1].trim();
        status.textContent = lastLine || 'Processando... (' + prog.elapsed + 's)';
      }

      if (prog.status === 'done') {
        done = true;
        kit = prog.kit;
      } else if (prog.status === 'error') {
        throw new Error(prog.error || 'Falha na extração');
      }
    }

    if (kit) {
      const key = normalizeBkKey(kit.lead?.handle || kit.lead?.slug || kit.lead?.name || '');
      brandKits[key] = kit;
      linkBrandkitToLead(kit);
      saveBrandKits();
      renderBrandKitList();
      renderBrandKitStats();
      showToast('BrandKit de ' + (kit.lead?.name || kit.lead?.handle || key) + ' extraído com sucesso!', 'success');
      if (status) status.textContent = 'Concluído! ' + (kit.profile?.followers || 0).toLocaleString('pt-BR') + ' seguidores, ' + (kit.palette?.length || 0) + ' cores, ' + (kit.photos?.length || 0) + ' fotos.';
    }
  } catch (e) {
    showToast('Erro: ' + e.message, 'danger');
    if (status) status.textContent = 'Erro: ' + e.message;
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="bi bi-play-fill me-1"></i>Rodar BrandKit'; }
    if (progress) { progress.style.width = '100%'; }
  }
}

function copyBrandkitCommand() {
  // kept for backward compat
  const el = document.getElementById('bkCommand');
  if (!el.textContent) { showToast('Gere um comando primeiro!', 'warning'); return; }
  navigator.clipboard.writeText(el.textContent).then(() => showToast('Comando copiado!')).catch(() => showToast('Erro ao copiar', 'danger'));
}

function importBrandkitFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const kit = JSON.parse(e.target.result);
      const key = normalizeBkKey(kit.lead?.handle || kit.lead?.slug || kit.lead?.name || '');
      if (!key) { showToast('BrandKit sem handle/slug!', 'danger'); return; }
      brandKits[key] = kit;
      // Also try to link to a lead
      linkBrandkitToLead(kit);
      saveBrandKits();
      renderBrandKitList();
      renderBrandKitStats();
      showToast('BrandKit de ' + (kit.lead?.name || kit.lead?.handle || key) + ' importado!', 'success');
    } catch (err) {
      showToast('Erro ao importar: ' + err.message, 'danger');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function normalizeBkKey(raw) {
  return (raw || '').replace(/^@/, '').toLowerCase().trim();
}

function linkBrandkitToLead(kit) {
  const handle = normalizeBkKey(kit.lead?.handle || '');
  const name = (kit.lead?.name || '').toLowerCase();
  const leadsArr = (typeof leads !== 'undefined') ? leads : [];
  let matched = null;
  // Try by instagram
  leadsArr.forEach(l => {
    if (l.instagram) {
      const ig = l.instagram.replace(/^@/, '').toLowerCase();
      if (ig === handle) matched = l;
    }
    if (l.nome && l.nome.toLowerCase() === name) matched = l;
  });
  if (matched) {
    if (!matched.brandkit) matched.brandkit = {};
    matched.brandkit = { key: normalizeBkKey(kit.lead?.handle || kit.lead?.slug || ''), imported: new Date().toISOString() };
    saveData();
    showToast('BrandKit vinculado a ' + matched.nome, 'success');
  }
}

function getLeadBrandkit(lead) {
  if (!lead || !lead.brandkit || !lead.brandkit.key) return null;
  return brandKits[lead.brandkit.key] || null;
}

function unlinkBrandkitFromLead(leadId) {
  const l = (typeof leads !== 'undefined') ? leads.find(x => x.id === leadId) : null;
  if (!l) return;
  delete l.brandkit;
  saveData();
  showToast('BrandKit desvinculado de ' + l.nome, 'info');
  openLeadModal(leadId);
  renderLeads();
}

function renderBrandKitList() {
  const container = document.getElementById('brandkitList');
  if (!container) return;
  const keys = Object.keys(brandKits);
  if (keys.length === 0) {
    container.innerHTML = '<div class="col-12"><div class="empty-state"><i class="bi bi-palette"></i><h5>Nenhum BrandKit importado</h5><p>Rode o brandkit (Python) e importe o brandkit.json aqui.</p></div></div>';
    return;
  }
  let html = '';
  keys.forEach(key => {
    const kit = brandKits[key];
    const palette = kit.palette || [];
    const photos = kit.photos || [];
    const categories = kit.categories || {};
    const logo = kit.logo || {};
    const primary = palette.find(s => s.role === 'primary') || palette[0];
    const topCats = Object.entries(categories).sort((a, b) => b[1] - a[1]).slice(0, 4);
    html += '<div class="col-md-6 col-lg-4">';
    html += '<div class="card h-100">';
    html += '<div class="card-header d-flex justify-content-between align-items-center" style="background:' + (primary ? primary.hex : 'var(--primary)') + ';color:white;">';
    html += '<span><i class="bi bi-palette me-1"></i>' + escapeHtml(kit.lead?.name || kit.lead?.handle || key) + '</span>';
    html += '<span class="badge bg-white text-dark" style="font-size:0.65rem;">' + (kit.profile?.followers || 0).toLocaleString('pt-BR') + ' seguidores</span>';
    html += '</div>';
    html += '<div class="card-body">';
    // Palette
    html += '<div class="mb-3"><label class="form-label fw-bold small">Paleta</label><div class="d-flex gap-1 flex-wrap">';
    palette.forEach(s => {
      html += '<div style="width:32px;height:32px;border-radius:6px;background:' + s.hex + ';border:1px solid #ccc;" title="' + s.hex + ' (' + s.role + ')"></div>';
    });
    html += '</div>';
    if (primary) html += '<small class="text-muted">Primária: ' + primary.hex + '</small>';
    html += '</div>';
    // Logo
    if (logo.file || logo.svg) {
      html += '<div class="mb-3"><label class="form-label fw-bold small">Logo</label><div class="d-flex align-items-center gap-2">';
      if (logo.svg) html += '<span class="badge bg-success">SVG</span>';
      if (logo.transparent) html += '<span class="badge bg-info">Transparente</span>';
      if (logo.origin) html += '<span class="badge bg-secondary">' + logo.origin + '</span>';
      html += '</div></div>';
    }
    // Categories
    if (topCats.length > 0) {
      html += '<div class="mb-3"><label class="form-label fw-bold small">Categorias das fotos</label><div class="d-flex flex-wrap gap-1">';
      topCats.forEach(([cat, count]) => {
        html += '<span class="badge bg-secondary" style="font-size:0.65rem;">' + escapeHtml(cat) + ' ×' + count + '</span>';
      });
      html += '</div></div>';
    }
    // Photos count
    html += '<div class="d-flex justify-content-between align-items-center">';
    html += '<small class="text-muted"><i class="bi bi-images me-1"></i>' + photos.length + ' fotos</small>';
    html += '<button class="btn btn-sm btn-outline-primary" onclick="viewBrandKit(\'' + escapeAttr(key) + '\')"><i class="bi bi-eye me-1"></i>Ver detalhes</button>';
    html += '</div>';
    html += '</div></div></div>';
  });
  container.innerHTML = html;
}

function renderBrandKitStats() {
  const keys = Object.keys(brandKits);
  document.getElementById('bkTotal').textContent = keys.length;
  document.getElementById('bkWithPalette').textContent = keys.filter(k => (brandKits[k].palette || []).length > 0).length;
  document.getElementById('bkWithLogo').textContent = keys.filter(k => (brandKits[k].logo || {}).file || (brandKits[k].logo || {}).svg).length;
  document.getElementById('bkWithPhotos').textContent = keys.filter(k => (brandKits[k].photos || []).length > 0).length;
  document.getElementById('brandkitCount').textContent = keys.length;
}

function viewBrandKit(key) {
  const kit = brandKits[key];
  if (!kit) return;
  const palette = kit.palette || [];
  const photos = kit.photos || [];
  const categories = kit.categories || {};
  const logo = kit.logo || {};
  const siteTokens = kit.site?.tokens || {};
  let html = '<div class="modal fade" id="bkDetailModal" tabindex="-1"><div class="modal-dialog modal-lg modal-dialog-scrollable"><div class="modal-content"><div class="modal-header" style="background:linear-gradient(135deg,var(--primary),var(--accent));color:white;"><h5 class="modal-title">' + escapeHtml(kit.lead?.name || kit.lead?.handle || key) + '</h5><button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button></div><div class="modal-body">';
  // Profile
  html += '<div class="mb-3"><h6 class="fw-bold">Perfil</h6>';
  html += '<div class="row g-2"><div class="col-md-6"><small><strong>Handle:</strong> ' + escapeHtml(kit.lead?.handle || '') + '</small></div>';
  html += '<div class="col-md-6"><small><strong>Seguidores:</strong> ' + (kit.profile?.followers || 0).toLocaleString('pt-BR') + '</small></div>';
  html += '<div class="col-md-6"><small><strong>Posts:</strong> ' + (kit.profile?.posts_count || 0) + '</small></div>';
  html += '<div class="col-md-6"><small><strong>Site:</strong> ' + escapeHtml(kit.lead?.website || '') + '</small></div></div>';
  if (kit.profile?.biography) html += '<p class="mt-2 small text-muted">' + escapeHtml(kit.profile.biography) + '</p>';
  html += '</div>';
  // Palette
  html += '<div class="mb-3"><h6 class="fw-bold">Paleta de cores</h6><div class="d-flex gap-2 flex-wrap mb-2">';
  palette.forEach(s => {
    html += '<div class="text-center"><div style="width:48px;height:48px;border-radius:8px;background:' + s.hex + ';border:1px solid #ccc;margin-bottom:4px;"></div><small style="font-size:0.65rem;">' + s.hex + '<br>' + s.role + '</small></div>';
  });
  html += '</div></div>';
  // Logo
  html += '<div class="mb-3"><h6 class="fw-bold">Logo</h6>';
  html += '<div class="d-flex gap-2 flex-wrap">';
  if (logo.origin) html += '<span class="badge bg-secondary">Origem: ' + logo.origin + '</span>';
  if (logo.file) html += '<span class="badge bg-info">Arquivo: ' + logo.file + '</span>';
  if (logo.svg) html += '<span class="badge bg-success">SVG: ' + logo.svg + '</span>';
  if (logo.transparent) html += '<span class="badge bg-primary">Transparente: ' + logo.transparent + '</span>';
  html += '</div>';
  if (logo.warnings && logo.warnings.length > 0) {
    html += '<div class="mt-2"><small class="text-warning"><i class="bi bi-exclamation-triangle me-1"></i>' + logo.warnings.join(', ') + '</small></div>';
  }
  html += '</div>';
  // Categories
  html += '<div class="mb-3"><h6 class="fw-bold">Categorias das fotos</h6><div class="d-flex flex-wrap gap-2">';
  Object.entries(categories).sort((a, b) => b[1] - a[1]).forEach(([cat, count]) => {
    html += '<span class="badge bg-secondary">' + escapeHtml(cat) + ' ×' + count + '</span>';
  });
  html += '</div></div>';
  // Site tokens
  if (siteTokens.colors && siteTokens.colors.length > 0) {
    html += '<div class="mb-3"><h6 class="fw-bold">Tokens do site (dembrandt)</h6>';
    html += '<div class="d-flex gap-1 flex-wrap mb-2">';
    siteTokens.colors.forEach(c => {
      html += '<div style="width:24px;height:24px;border-radius:4px;background:' + c + ';border:1px solid #ccc;" title="' + c + '"></div>';
    });
    html += '</div>';
    if (siteTokens.fonts && siteTokens.fonts.length > 0) {
      html += '<small><strong>Fontes:</strong> ' + siteTokens.fonts.map(f => escapeHtml(f)).join(', ') + '</small>';
    }
    html += '</div>';
  }
  // Photos
  if (photos.length > 0) {
    html += '<div class="mb-3"><h6 class="fw-bold">Fotos (' + photos.length + ')</h6><div class="row g-2">';
    photos.slice(0, 12).forEach(p => {
      html += '<div class="col-3"><div class="card"><div class="card-body p-1 text-center">';
      html += '<small style="font-size:0.6rem;">' + escapeHtml(p.category || '-') + '</small>';
      if (p.caption) html += '<p class="mb-0" style="font-size:0.6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="' + escapeAttr(p.caption) + '">' + escapeHtml(p.caption.substring(0, 30)) + '</p>';
      html += '</div></div></div>';
    });
    html += '</div></div>';
  }
  // Warnings
  if (kit.warnings && kit.warnings.length > 0) {
    html += '<div class="mb-3"><h6 class="fw-bold text-warning">Avisos</h6><ul class="small">';
    kit.warnings.forEach(w => { html += '<li>' + escapeHtml(w) + '</li>'; });
    html += '</ul></div>';
  }
  // Stages
  if (kit.stages) {
    html += '<div class="mb-3"><h6 class="fw-bold">Etapas</h6><div class="d-flex flex-wrap gap-1">';
    Object.entries(kit.stages).forEach(([stage, status]) => {
      const color = status === 'ok' ? 'success' : status.startsWith('skipped') ? 'warning' : 'danger';
      html += '<span class="badge bg-' + color + '" style="font-size:0.6rem;" title="' + escapeAttr(String(status)) + '">' + escapeHtml(stage) + '</span>';
    });
    html += '</div></div>';
  }
  html += '</div></div></div></div>';
  // Remove existing modal if any
  const existing = document.getElementById('bkDetailModal');
  if (existing) existing.remove();
  document.body.insertAdjacentHTML('beforeend', html);
  new bootstrap.Modal(document.getElementById('bkDetailModal')).show();
}

function renderBrandKitView() {
  renderBrandKitList();
  renderBrandKitStats();
}

// Hook into showView
const _originalShowView = showView;
// We'll patch showView by overriding in init

// Override showView to handle brandkit
const _showViewBrandkit = showView;
showView = function(view, el) {
  _showViewBrandkit(view, el);
  if (view === 'brandkit') renderBrandKitView();
};

// Load brandkits on init
loadBrandKits();

function renderLeadBrandkitSection(l) {
  const bk = getLeadBrandkit(l);
  if (!bk) {
    return '<div class="mt-2"><p class="small text-muted mb-2">Nenhum BrandKit vinculado a este lead.</p>' +
      '<div class="input-group input-group-sm"><input type="text" class="form-control" id="bkLeadHandle" placeholder="@handle do Instagram" value="' + escapeAttr(l.instagram || '') + '"><button class="btn btn-success btn-sm" onclick="importBrandkitForLead(' + l.id + ')"><i class="bi bi-upload me-1"></i>Importar Kit</button></div>' +
      '<small class="text-muted d-block mt-1">Rode o brandkit (Python) e importe o brandkit.json aqui.</small></div>';
  }
  const palette = bk.palette || [];
  const logo = bk.logo || {};
  const photos = bk.photos || [];
  const categories = bk.categories || {};
  const primary = palette.find(s => s.role === 'primary') || palette[0];
  let html = '<div class="mt-2">';
  html += '<div class="d-flex align-items-center gap-2 mb-2">';
  html += '<span class="badge bg-success"><i class="bi bi-check-circle me-1"></i>Kit vinculado</span>';
  html += '<small class="text-muted">' + (bk.profile?.followers || 0).toLocaleString('pt-BR') + ' seguidores · ' + photos.length + ' fotos</small>';
  html += '</div>';
  // Palette swatches
  html += '<div class="d-flex gap-1 mb-2">';
  palette.slice(0, 8).forEach(s => {
    html += '<div style="width:24px;height:24px;border-radius:4px;background:' + s.hex + ';border:1px solid #ccc;" title="' + s.hex + '"></div>';
  });
  html += '</div>';
  if (primary) html += '<small class="text-muted d-block mb-2">Cor primária: <strong>' + primary.hex + '</strong></small>';
  // Logo
  if (logo.file || logo.svg || logo.origin) {
    html += '<div class="mb-2"><small><strong>Logo:</strong> ' + (logo.origin || '-') + (logo.svg ? ' (SVG)' : '') + (logo.transparent ? ' (transparente)' : '') + '</small></div>';
  }
  // Top categories
  const topCats = Object.entries(categories).sort((a,b) => b[1]-a[1]).slice(0,4);
  if (topCats.length > 0) {
    html += '<div class="mb-2"><small><strong>Categorias:</strong> ' + topCats.map(([c,n]) => c + ' ×' + n).join(', ') + '</small></div>';
  }
  // Actions
  html += '<div class="d-flex gap-2 mt-2">';
  html += '<button class="btn btn-sm btn-outline-primary" onclick="viewBrandKit(\'' + escapeAttr(bk.lead?.handle || '') + '\')"><i class="bi bi-eye me-1"></i>Ver detalhes</button>';
  html += '<button class="btn btn-sm btn-outline-danger" onclick="unlinkBrandkitFromLead(' + l.id + ')"><i class="bi bi-x-circle me-1"></i>Desvincular</button>';
  html += '</div>';
  html += '</div>';
  return html;
}

function importBrandkitForLead(leadId) {
  const l = (typeof leads !== 'undefined') ? leads.find(x => x.id === leadId) : null;
  if (!l) return;
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(ev) {
      try {
        const kit = JSON.parse(ev.target.result);
        const key = normalizeBkKey(kit.lead?.handle || kit.lead?.slug || kit.lead?.name || '');
        if (!key) { showToast('BrandKit sem handle!', 'danger'); return; }
        brandKits[key] = kit;
        if (!l.brandkit) l.brandkit = {};
        l.brandkit = { key: key, imported: new Date().toISOString() };
        saveBrandKits();
        saveData();
        openLeadModal(leadId);
        renderLeads();
        showToast('BrandKit vinculado a ' + l.nome + '!', 'success');
      } catch (err) {
        showToast('Erro ao importar: ' + err.message, 'danger');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}


// ===== LEAD MODAL =====
function openLeadModal(id) {
  currentLeadId = id;
  const l = leads.find(x => x.id === id);
  if (!l) return;
  document.getElementById('modalTitle').textContent = l.nome;

  const leadNotes = (notes[id] || []).sort((a, b) => new Date(b.date) - new Date(a.date));
  let notesHtml = leadNotes.map(n => '<div class="note-item"><div class="note-date">' + new Date(n.date).toLocaleString('pt-BR') + '</div>' + escapeHtml(n.text) + '</div>').join('');

  let approachHtml = '';
  if (l.approachHistory && l.approachHistory.length > 0) {
    approachHtml = '<div class="mt-2"><label class="form-label fw-bold small">Histórico de Abordagens</label><div class="approach-timeline">';
    l.approachHistory.slice().reverse().forEach(a => {
      approachHtml += '<div class="approach-item"><div class="approach-date">' + new Date(a.date).toLocaleString('pt-BR') + '</div><div class="approach-text">' + escapeHtml(a.text.substring(0, 100)) + (a.text.length > 100 ? '...' : '') + '</div></div>';
    });
    approachHtml += '</div></div>';
  }

  let followupHtml = '';
  if (l.followups && l.followups.length > 0) {
    followupHtml = '<div class="mt-2"><label class="form-label fw-bold small">Follow-ups Agendados</label>';
    l.followups.forEach(f => {
      const isPast = new Date(f.date) < new Date();
      followupHtml += '<div class="reminder-item ' + (isPast ? 'overdue' : '') + '"><div class="reminder-date">' + new Date(f.date).toLocaleDateString('pt-BR') + '</div><div class="reminder-text">' + escapeHtml(f.note || 'Follow-up') + '</div></div>';
    });
    followupHtml += '</div>';
  }

  document.getElementById('modalBody').innerHTML = `
    <div class="row">
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label fw-bold small">Nome</label>
          <input type="text" class="form-control form-control-sm" id="editNome" value="${escapeAttr(l.nome)}">
        </div>
        <div class="row">
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">Nicho</label>
            <input type="text" class="form-control form-control-sm" id="editNicho" value="${escapeAttr(l.nicho || '')}">
          </div>
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">Grupo</label>
            <input type="text" class="form-control form-control-sm" id="editGrupo" value="${escapeAttr(l.grupo || '')}">
          </div>
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold small">Endereço</label>
          <input type="text" class="form-control form-control-sm" id="editEndereco" value="${escapeAttr(l.endereco || '')}">
        </div>
        <div class="row">
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">Telefone</label>
            <input type="text" class="form-control form-control-sm" id="editTelefone" value="${escapeAttr(l.telefone || '')}">
          </div>
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">WhatsApp</label>
            <input type="text" class="form-control form-control-sm" id="editWhatsapp" value="${escapeAttr(l.whatsapp || '')}">
          </div>
        </div>
        <div class="row">
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">Website</label>
            <input type="text" class="form-control form-control-sm" id="editWebsite" value="${escapeAttr(l.website || '')}">
          </div>
          <div class="col-6 mb-2">
            <label class="form-label fw-bold small">Instagram</label>
            <input type="text" class="form-control form-control-sm" id="editInstagram" value="${escapeAttr(l.instagram || '')}">
          </div>
        </div>
        <div class="row">
          <div class="col-4 mb-2">
            <label class="form-label fw-bold small">Score</label>
            <select class="form-select form-select-sm" id="editScore">
              <option value="A" ${l.score === 'A' ? 'selected' : ''}>A - Alta</option>
              <option value="B" ${l.score === 'B' ? 'selected' : ''}>B - Média</option>
              <option value="C" ${l.score === 'C' ? 'selected' : ''}>C - Baixa</option>
            </select>
          </div>
          <div class="col-4 mb-2">
            <label class="form-label fw-bold small">Status</label>
            <select class="form-select form-select-sm" id="editStatus">
              ${['Novo', 'Contatado', 'Respondeu', 'Reunião', 'Proposta', 'Fechado', 'Perdido'].map(s => '<option value="' + s + '" ' + (l.status === s ? 'selected' : '') + '>' + s + '</option>').join('')}
            </select>
          </div>
          <div class="col-4 mb-2">
            <label class="form-label fw-bold small">GM Rating</label>
            <input type="number" step="0.1" min="0" max="5" class="form-control form-control-sm" id="editRating" value="${l.gm_rating || ''}">
          </div>
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold small">GM Reviews</label>
          <input type="number" class="form-control form-control-sm" id="editReviews" value="${l.gm_reviews || ''}">
        </div>
        <div class="mb-2">
          <label class="form-label fw-bold small">Template aplicado</label>
          <select class="form-select form-select-sm" id="editTemplate">
            <option value="">Nenhum</option>
            ${TEMPLATES.map(t => '<option value="' + t.id + '" ' + (l.template === t.id ? 'selected' : '') + '>' + escapeHtml(t.title) + '</option>').join('')}
          </select>
        </div>
        <div class="abordagem-box">
          <label><i class="bi bi-chat-quote me-1"></i>Estratégia de Abordagem</label>
          <textarea class="form-control form-control-sm mt-1" id="editAbordagem" rows="4" placeholder="Ex: Enviar WhatsApp apresentando solução de reservas online. Mencionar que viu X reviews no Google...">${escapeHtml(l.abordagem || '')}</textarea>
          <small class="text-muted">Esta abordagem aparece no card do Pipeline e pode ser enviada via WhatsApp</small>
        </div>
        <div class="brandkit-box mt-3" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;border-radius:10px;padding:14px;">
          <label style="font-size:0.8rem;font-weight:600;color:#047857;"><i class="bi bi-palette me-1"></i>BrandKit - Identidade Visual</label>
          ${renderLeadBrandkitSection(l)}
        </div>
      </div>
      <div class="col-md-6">
        <div class="mb-3">
          <label class="form-label fw-bold small">Links rápidos</label>
          <div class="d-flex gap-2 flex-wrap">
            ${l.whatsapp ? '<a href="https://wa.me/' + l.whatsapp.replace(/\\D/g, '') + '" target="_blank" class="btn btn-sm btn-success"><i class="bi bi-whatsapp me-1"></i>WhatsApp</a>' : ''}
            ${l.instagram ? '<a href="https://instagram.com/' + l.instagram.replace('@', '') + '" target="_blank" class="btn btn-sm btn-danger"><i class="bi bi-instagram me-1"></i>Instagram</a>' : ''}
            ${l.website ? '<a href="https://' + l.website.replace(/^https?:\/\//, '') + '" target="_blank" class="btn btn-sm btn-primary"><i class="bi bi-globe me-1"></i>Site</a>' : ''}
            <a href="https://www.google.com/maps/search/' + encodeURIComponent(l.nome + ' Itacaré') + '" target="_blank" class="btn btn-sm btn-secondary"><i class="bi bi-geo-alt me-1"></i>Maps</a>
          </div>
        </div>
        <hr class="my-2">
        <div class="mb-2">
          <label class="form-label fw-bold small">Adicionar nota / follow-up</label>
          <div class="input-group input-group-sm">
            <input type="text" class="form-control" id="noteInput" placeholder="Digite uma nota..." onkeypress="if(event.key==='Enter')addNote(' + l.id + ')">
            <button class="btn btn-primary" onclick="addNote(' + l.id + ')"><i class="bi bi-plus-lg"></i></button>
          </div>
        </div>
        <div id="notesList" style="max-height:150px;overflow-y:auto;">${notesHtml || '<p class="text-muted small">Sem notas ainda.</p>'}</div>
        ${approachHtml}
        ${followupHtml}
      </div>
    </div>
  `;

  new bootstrap.Modal(document.getElementById('leadModal')).show();
}

function saveLeadChanges() {
  const l = leads.find(x => x.id === currentLeadId);
  if (!l) return;
  l.nome = document.getElementById('editNome').value.trim();
  l.nicho = document.getElementById('editNicho').value.trim() || null;
  l.grupo = document.getElementById('editGrupo').value.trim() || null;
  l.endereco = document.getElementById('editEndereco').value.trim() || null;
  l.telefone = document.getElementById('editTelefone').value.trim() || null;
  l.whatsapp = document.getElementById('editWhatsapp').value.trim() || null;
  l.website = document.getElementById('editWebsite').value.trim() || null;
  l.instagram = document.getElementById('editInstagram').value.trim() || null;
  l.score = document.getElementById('editScore').value;
  l.status = document.getElementById('editStatus').value;
  const rating = document.getElementById('editRating').value;
  l.gm_rating = rating ? parseFloat(rating) : null;
  const reviews = document.getElementById('editReviews').value;
  l.gm_reviews = reviews ? parseInt(reviews) : null;
  l.abordagem = document.getElementById('editAbordagem').value.trim() || null;
  l.template = document.getElementById('editTemplate').value || null;
  l.updated_at = new Date().toISOString();
  saveData();
  bootstrap.Modal.getInstance(document.getElementById('leadModal')).hide();
  renderLeads();
  renderDashboard();
  if (currentView === 'pipeline') renderPipeline();
  if (currentView === 'approaches') renderApproaches();
  if (currentView === 'templates') renderTemplates();
  showToast('Lead atualizado com sucesso!');
}

function addNote(id) {
  const input = document.getElementById('noteInput');
  const text = input.value.trim();
  if (!text) return;
  if (!notes[id]) notes[id] = [];
  notes[id].push({ text, date: new Date().toISOString(), type: 'note' });
  saveData();
  input.value = '';
  openLeadModal(id);
  showToast('Nota adicionada!');
}

function quickContact(id) {
  const l = leads.find(x => x.id === id);
  if (!l) return;
  if (l.whatsapp) window.open('https://wa.me/' + l.whatsapp.replace(/\\D/g, ''), '_blank');
  l.status = 'Contatado';
  l.updated_at = new Date().toISOString();
  if (!notes[id]) notes[id] = [];
  notes[id].push({ text: 'Marcado como contatado via CRM Web', date: new Date().toISOString(), type: 'contact' });
  saveData();
  renderLeads();
  renderDashboard();
  if (currentView === 'pipeline') renderPipeline();
  showToast(l.nome + ': Contatado');
}

function openAddModal() {
  ['addNome', 'addNicho', 'addGrupo', 'addEndereco', 'addTelefone', 'addWhatsapp', 'addWebsite', 'addInstagram', 'addAbordagem'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('addScore').value = 'B';
  document.getElementById('addStatus').value = 'Novo';
  document.getElementById('addRating').value = '';
  new bootstrap.Modal(document.getElementById('addModal')).show();
}

function addLead() {
  const nome = document.getElementById('addNome').value.trim();
  if (!nome) { showToast('Nome é obrigatório!', 'danger'); return; }
  const lead = {
    id: nextId(), nome,
    nicho: document.getElementById('addNicho').value.trim() || null,
    grupo: document.getElementById('addGrupo').value.trim() || null,
    endereco: document.getElementById('addEndereco').value.trim() || null,
    telefone: document.getElementById('addTelefone').value.trim() || null,
    whatsapp: document.getElementById('addWhatsapp').value.trim() || null,
    website: document.getElementById('addWebsite').value.trim() || null,
    instagram: document.getElementById('addInstagram').value.trim() || null,
    abordagem: document.getElementById('addAbordagem').value.trim() || null,
    template: null,
    abordagemStatus: null,
    approachHistory: [],
    followups: [],
    brandkit: null,
    score: document.getElementById('addScore').value,
    status: document.getElementById('addStatus').value,
    gm_rating: document.getElementById('addRating').value ? parseFloat(document.getElementById('addRating').value) : null,
    gm_reviews: null,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  leads.push(lead);
  saveData();
  bootstrap.Modal.getInstance(document.getElementById('addModal')).hide();
  renderLeads();
  renderDashboard();
  populateGrupoFilter();
  showToast('Lead adicionado!');
}

// ===== IMPORT/EXPORT =====
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    const text = e.target.result;
    const lines = text.split(/\r?\n/).filter(l => l.trim());
    if (lines.length < 2) { showToast('Arquivo CSV vazio ou inválido', 'danger'); return; }
    const header = parseCSVLine(lines[0]);
    importRows = lines.slice(1).map(line => {
      const fields = parseCSVLine(line);
      const obj = {};
      header.forEach((h, i) => { obj[h.trim()] = (fields[i] || '').trim(); });
      return obj;
    });
    showImportPreview(header, importRows.slice(0, 5));
    document.getElementById('importCount').textContent = importRows.length + ' leads encontrados';
    document.getElementById('importPreview').style.display = 'block';
  };
  reader.readAsText(file);
}

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { current += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (ch === ',' && !inQuotes) {
      result.push(current); current = '';
    } else {
      current += ch;
    }
  }
  result.push(current);
  return result;
}

function showImportPreview(header, rows) {
  const table = document.getElementById('previewTable');
  let html = '<thead><tr>' + header.map(h => '<th class="small">' + h + '</th>').join('') + '</tr></thead><tbody>';
  rows.forEach(r => {
    html += '<tr>' + header.map(h => '<td class="small">' + escapeHtml(r[h] || '') + '</td>').join('') + '</tr>';
  });
  html += '</tbody>';
  table.innerHTML = html;
}

function doImport() {
  if (!importRows.length) return;
  let count = 0;
  importRows.forEach(row => {
    const nome = row['Nome'] || row['nome'] || '';
    if (!nome) return;
    const lead = {
      id: nextId(), nome,
      nicho: row['Nicho'] || row['nicho'] || null,
      grupo: row['Grupo'] || row['grupo'] || null,
      endereco: row['Endereco'] || row['endereco'] || row['Endereço'] || null,
      telefone: row['Telefone'] || row['telefone'] || null,
      whatsapp: row['WhatsApp'] || row['whatsapp'] || null,
      website: row['Website'] || row['website'] || null,
      instagram: row['Instagram'] || row['instagram'] || null,
      gm_rating: parseFloat((row['GM_Rating'] || row['gm_rating'] || '').replace(',', '.')) || null,
      gm_reviews: parseInt((row['GM_Reviews'] || row['gm_reviews'] || '').replace(/[^\\d]/g, '')) || null,
      score: (row['Score'] || row['score'] || 'B').toUpperCase(),
      status: row['Status'] || row['status'] || 'Novo',
      abordagem: row['Abordagem'] || row['abordagem'] || null,
      template: row['Template'] || row['template'] || null,
      abordagemStatus: null,
      approachHistory: [],
      followups: [],
      brandkit: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    leads.push(lead);
    count++;
  });
  saveData();
  importRows = [];
  document.getElementById('importPreview').style.display = 'none';
  document.getElementById('fileInput').value = '';
  populateGrupoFilter();
  renderLeads();
  renderDashboard();
  showToast(count + ' leads importados com sucesso!');
}

function doExport() {
  const header = ['ID', 'Nome', 'Nicho', 'Grupo', 'Endereco', 'Telefone', 'WhatsApp', 'Website', 'Instagram', 'GM_Rating', 'GM_Reviews', 'Score', 'Status', 'Abordagem', 'TemSite', 'Template'];
  const rows = [header.join(',')];
  leads.forEach(l => {
    const vals = [l.id, l.nome, l.nicho || '', l.grupo || '', l.endereco || '', l.telefone || '', l.whatsapp || '', l.website || '', l.instagram || '', l.gm_rating || '', l.gm_reviews || '', l.score || 'B', l.status || 'Novo', l.abordagem || '', hasSite(l) ? 'Sim' : 'Não', l.template || ''].map(v => '"' + String(v).replace(/"/g, '""') + '"');
    rows.push(vals.join(','));
  });
  const blob = new Blob(['\\uFEFF' + rows.join('\\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'crm-itacare-export.csv';
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV exportado com sucesso!');
}

function doBackup() {
  const backup = { leads, notes, settings, version: '7.0', date: new Date().toISOString() };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'crm-itacare-backup-' + new Date().toISOString().split('T')[0] + '.json';
  a.click();
  URL.revokeObjectURL(url);
  settings.lastBackup = new Date().toISOString();
  saveData();
  renderBackupInfo();
  showToast('Backup criado com sucesso!');
}

function doRestore(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const backup = JSON.parse(e.target.result);
      if (!backup.leads) { showToast('Arquivo de backup inválido!', 'danger'); return; }
      if (!confirm('Restaurar ' + backup.leads.length + ' leads? Isso substituirá todos os dados atuais.')) return;
      leads = backup.leads;
      notes = backup.notes || {};
      settings = backup.settings || settings;
      leads.forEach(l => { if (!l.abordagem) l.abordagem = null; if (!l.template) l.template = null; if (!l.followups) l.followups = []; if (!l.approachHistory) l.approachHistory = []; if (l.brandkit === undefined) l.brandkit = null; });
      saveData();
      renderDashboard();
      populateGrupoFilter();
      renderLeads();
      renderBackupInfo();
      showToast(backup.leads.length + ' leads restaurados!');
    } catch (err) {
      showToast('Erro ao restaurar backup: ' + err.message, 'danger');
    }
  };
  reader.readAsText(file);
  event.target.value = '';
}

function renderBackupInfo() {
  document.getElementById('infoLeads').textContent = leads.length;
  const noteCount = Object.values(notes).reduce((a, b) => a + b.length, 0);
  document.getElementById('infoNotes').textContent = noteCount;
  document.getElementById('infoNoSite').textContent = leads.filter(l => !hasSite(l)).length;
  document.getElementById('infoHasSite').textContent = leads.filter(l => hasSite(l)).length;
  document.getElementById('infoTheme').textContent = settings.theme === 'dark' ? 'Escuro' : 'Claro';
  document.getElementById('infoBackup').textContent = settings.lastBackup ? new Date(settings.lastBackup).toLocaleString('pt-BR') : 'Nunca';
}

// ===== APPROACHES =====
function renderApproachHistory() {
  const allNotes = [];
  Object.entries(notes).forEach(([id, noteList]) => {
    const l = leads.find(x => x.id === parseInt(id));
    if (!l) return;
    noteList.forEach(n => {
      allNotes.push({ lead: l, note: n });
    });
  });
  allNotes.sort((a, b) => new Date(b.note.date) - new Date(a.note.date));
  const recent = allNotes.slice(0, 30);
  const container = document.getElementById('approachHistory');
  if (recent.length === 0) {
    container.innerHTML = '<p class="text-muted text-center py-3">Nenhuma abordagem registrada ainda.</p>';
    return;
  }
  container.innerHTML = recent.map(({ lead, note }) => '<div class="approach-timeline"><div class="approach-item"><div class="approach-date">' + new Date(note.date).toLocaleString('pt-BR') + '</div><div class="approach-text"><strong>' + escapeHtml(lead.nome) + '</strong> - ' + escapeHtml(note.text) + '</div></div></div>').join('');
}

function selectTemplate(id) {
  currentTemplate = TEMPLATES.find(t => t.id === id);
  document.getElementById('approachTemplateSelect').value = id;
  loadTemplate();
}

function loadTemplate() {
  const tmplId = document.getElementById('approachTemplateSelect').value;
  currentTemplate = TEMPLATES.find(t => t.id === tmplId);
  const preview = document.getElementById('approachPreview');
  const actions = document.getElementById('approachActions');
  if (currentTemplate) {
    let text = currentTemplate.text;
    const leadId = document.getElementById('approachLeadSelect').value;
    if (leadId) {
      const l = leads.find(x => x.id === parseInt(leadId));
      if (l) {
        text = text.replace(/\\[NOME\\]/g, l.nome);
        text = text.replace(/\\[CIDADE SIMILAR\\]/g, 'Itacaré');
        text = text.replace(/\\[NICHO\\]/g, l.nicho || 'negócio');
        text = text.replace(/\\[PASSEIO\\/SURF\\]/g, l.nicho || 'passeio');
        text = text.replace(/\\[TRANSFER\\/LOCAÇÃO\\]/g, l.nicho || 'transfer');
        text = text.replace(/\\[RESULTADO\\]/g, 'vendas');
        text = text.replace(/X estrelas/g, (l.gm_rating ? l.gm_rating.toFixed(1) : 'X') + ' estrelas');
        text = text.replace(/Y reviews/g, (l.gm_reviews ? l.gm_reviews.toLocaleString('pt-BR') : 'Y') + ' reviews');
      }
    }
    preview.textContent = text;
    preview.style.display = 'block';
    actions.style.display = 'block';
  } else {
    preview.style.display = 'none';
    actions.style.display = 'none';
  }
}

function loadApproachLead() {
  const leadId = document.getElementById('approachLeadSelect').value;
  currentApproachLead = leadId ? leads.find(x => x.id === parseInt(leadId)) : null;
  loadTemplate();
  if (currentApproachLead && currentApproachLead.abordagem) {
    document.getElementById('approachPreview').textContent = currentApproachLead.abordagem;
  }
}

function applyApproach() {
  const leadId = document.getElementById('approachLeadSelect').value;
  if (!leadId) { showToast('Selecione um lead!', 'danger'); return; }
  const l = leads.find(x => x.id === parseInt(leadId));
  if (!l) return;
  const preview = document.getElementById('approachPreview').textContent;
  if (!preview) { showToast('Selecione um template!', 'danger'); return; }
  l.abordagem = preview;
  l.updated_at = new Date().toISOString();
  saveData();
  showToast('Abordagem aplicada a ' + l.nome + '!');
  renderApproaches();
}

function sendWhatsAppApproach() {
  const leadId = document.getElementById('approachLeadSelect').value;
  if (!leadId) { showToast('Selecione um lead!', 'danger'); return; }
  const l = leads.find(x => x.id === parseInt(leadId));
  if (!l || !l.whatsapp) { showToast('Lead sem WhatsApp!', 'danger'); return; }
  const text = document.getElementById('approachPreview').textContent;
  const url = 'https://wa.me/' + l.whatsapp.replace(/\\D/g, '') + '?text=' + encodeURIComponent(text);
  window.open(url, '_blank');
  showToast('WhatsApp aberto com a mensagem!');
}

function copyApproach() {
  const text = document.getElementById('approachPreview').textContent;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Texto copiado para a área de transferência!');
  }).catch(() => {
    showToast('Erro ao copiar. Selecione e copie manualmente.', 'danger');
  });
}

function markApproachSent() {
  const leadId = document.getElementById('approachLeadSelect').value;
  if (!leadId) { showToast('Selecione um lead!', 'danger'); return; }
  const l = leads.find(x => x.id === parseInt(leadId));
  if (!l) return;
  if (!notes[l.id]) notes[l.id] = [];
  const approachText = document.getElementById('approachPreview').textContent;
  notes[l.id].push({ text: 'Abordagem enviada: "' + approachText.substring(0, 80) + '..."', date: new Date().toISOString(), type: 'approach' });
  if (!l.approachHistory) l.approachHistory = [];
  l.approachHistory.push({ text: approachText, date: new Date().toISOString(), status: 'sent' });
  l.status = 'Contatado';
  l.abordagemStatus = 'sent';
  l.updated_at = new Date().toISOString();
  saveData();
  renderApproaches();
  renderDashboard();
  if (currentView === 'pipeline') renderPipeline();
  if (currentView === 'leads') renderLeads();
  showToast(l.nome + ' marcado como contatado!');
}

function scheduleFollowup() {
  const leadId = document.getElementById('approachLeadSelect').value;
  if (!leadId) { showToast('Selecione um lead!', 'danger'); return; }
  const l = leads.find(x => x.id === parseInt(leadId));
  if (!l) return;
  const days = prompt('Agendar follow-up em quantos dias? (1, 2, 3, 5, 7, 10, 15)');
  if (!days) return;
  const d = parseInt(days);
  if (isNaN(d) || d < 1) { showToast('Número inválido!', 'danger'); return; }
  const followupDate = new Date();
  followupDate.setDate(followupDate.getDate() + d);
  if (!l.followups) l.followups = [];
  l.followups.push({ date: followupDate.toISOString(), note: 'Follow-up agendado', created: new Date().toISOString() });
  l.updated_at = new Date().toISOString();
  saveData();
  showToast('Follow-up agendado para ' + followupDate.toLocaleDateString('pt-BR') + '!');
  renderDashboard();
}

function showTemplates() {
  const modal = new bootstrap.Modal(document.getElementById('templatesModal'));
  const body = document.getElementById('templatesModalBody');
  let html = '';
  const niches = [...new Set(TEMPLATES.map(t => t.niche))];
  niches.forEach(niche => {
    html += '<h6 class="mt-3 mb-2" style="color:var(--primary);"><i class="bi bi-folder me-1"></i>' + escapeHtml(niche) + '</h6>';
    TEMPLATES.filter(t => t.niche === niche).forEach(t => {
      html += '<div class="template-card" onclick="selectTemplate(\'' + t.id + '\'); bootstrap.Modal.getInstance(document.getElementById(\'templatesModal\')).hide(); showView(\'approaches\', document.querySelector(\'[onclick*=approaches]\'));">' +
        '<div class="template-title">' + escapeHtml(t.title) + '</div>' +
        '<div class="template-preview">' + escapeHtml(t.text) + '</div>' +
        '<div class="template-actions"><button class="btn btn-sm btn-outline-primary" onclick="event.stopPropagation(); copyTemplate(\'' + t.id + '\')"><i class="bi bi-clipboard me-1"></i>Copiar</button></div></div>';
    });
  });
  body.innerHTML = html;
  modal.show();
}

// ===== DOCS (already defined, ensure present) =====

function renderApproaches() {
  const templatesList = document.getElementById('templatesList');
  let th = '';
  TEMPLATES.forEach(t => {
    th += '<div class="template-card" onclick="selectTemplate(\'' + t.id + '\')"><div class="template-title">' + escapeHtml(t.title) + '</div><div class="template-preview">' + escapeHtml(t.text.substring(0, 80)) + '...</div><div class="mt-1"><span class="badge bg-secondary" style="font-size:0.65rem;">' + escapeHtml(t.niche) + '</span></div></div>';
  });
  templatesList.innerHTML = th;

  const leadSel = document.getElementById('approachLeadSelect');
  const currentLead = leadSel.value;
  leadSel.innerHTML = '<option value="">Selecione um lead...</option>' + leads.sort((a, b) => a.nome.localeCompare(b.nome)).map(l => '<option value="' + l.id + '" ' + (l.id == currentLead ? 'selected' : '') + '>' + escapeHtml(l.nome) + ' (' + (l.score || 'B') + ') - ' + (l.status || 'Novo') + ' ' + (hasSite(l) ? '\ud83c\udf10' : '\u274c') + '</option>').join('');

  const tmplSel = document.getElementById('approachTemplateSelect');
  const currentTmpl = tmplSel.value;
  tmplSel.innerHTML = '<option value="">Selecione um template...</option>' + TEMPLATES.map(t => '<option value="' + t.id + '" ' + (t.id === currentTmpl ? 'selected' : '') + '>' + escapeHtml(t.title) + '</option>').join('');

  renderApproachHistory();
}

/* ============================================================
   ZEAI — Digital Governance Platform
   app.js
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────
   DATA STORE
───────────────────────────────────────── */
const DATA = {
  projects: [
    {
      name: 'YOLOv8 Ag-Drone Deployment — Mambakkam', pct: 92, budget: '₹4.2 L',
      status: 'wip', statusLabel: 'Active Scanning', eta: 'Ongoing',
      timeline: [
        { title:'Hardware Procurement',  desc:'Radxa boards, flight controllers secured.',  date:'12 Jan 2026', dot:'done' },
        { title:'ROS 2 Node Integration',desc:'Simulation launch successful in Gazebo.',   date:'28 Jan 2026', dot:'done' },
        { title:'Field Testing',         desc:'Identifying yellow-painted crops (test).', date:'15 Feb 2026', dot:'done' },
        { title:'Live Blight Scanning',  desc:'Mambakkam sector 4 aerial sweeps ongoing.', date:'Now',         dot:'wip'  },
      ]
    },
    {
      name: 'Smart Grid Expansion — Tambaram', pct: 55, budget: '₹2.1 Cr',
      status: 'wip', statusLabel: 'In Progress', eta: 'Aug 2026',
      timeline: [
        { title:'Survey & DPR Approved',  desc:'Detailed project report approved by AI.',    date:'10 Feb 2026', dot:'done' },
        { title:'Tender Awarded',         desc:'Sub-station contractor appointed.',          date:'20 Feb 2026', dot:'done' },
        { title:'Laying Phase 1',         desc:'Main trunk lines laid.',                     date:'10 Apr 2026', dot:'done' },
        { title:'Smart Meter Installation',desc:'Last-mile connections ongoing.',            date:'Now',         dot:'wip'  },
      ]
    }
  ],

  tickets: [
    { id:'#ZAI-2026-0089', title:'Drone mapping failed near grid', cat:'Agri-Tech / Land', ward:'Mambakkam', date:'24 May 2026', status:'wip',  verdict:'Valid report. ROS 2 executable error logged. Recalibrating coordinates.' },
    { id:'#ZAI-2026-0072', title:'Grid fluctuation Sector 3', cat:'Grid / Power', ward:'Tambaram', date:'20 May 2026', status:'done', verdict:'Resolved: Automated bypass activated. Grid stabilized. ★★★★☆' }
  ],

  leaderboard: [
    { name:'System Node Alpha', ward:'Mambakkam', score:94, delivery:88, trend:'up'   },
    { name:'Officer R. Kumar',  ward:'Tambaram',  score:85, delivery:72, trend:'up'   },
    { name:'Automated Logic',   ward:'District',  score:78, delivery:99, trend:'flat' },
  ],

  heatmap: [
    { label:'Flood Risk',    count:43, pct:86, color:'#06B6D4' },
    { label:'Crop Disease',  count:38, pct:76, color:'#3B82F6' },
    { label:'Grid Load',     count:29, pct:58, color:'#F59E0B' },
    { label:'Water Supply',  count:22, pct:44, color:'#10B981' }
  ],
};

let ticketCounter = 89;
let currentFilter = 'all';
let selectedProject = 0;
let chartsInitialized = false;

/* ─────────────────────────────────────────
   SECTION SWITCHING
───────────────────────────────────────── */
function switchSection(btn, id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  btn.classList.add('active');
  if (!chartsInitialized && id !== 'projects' && id !== 'tickets') { initCharts(); chartsInitialized = true; }
}

function switchMain(btn, id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ─────────────────────────────────────────
   PROJECT TIMELINE
───────────────────────────────────────── */
function renderProjects() {
  const listEl = document.getElementById('project-list');
  const tlEl   = document.getElementById('timeline-view');
  if (!listEl || !tlEl) return;

  listEl.innerHTML = DATA.projects.map((p, i) => {
    const pct = p.pct;
    const barColor = pct >= 75 ? '#06B6D4' : pct >= 45 ? '#3B82F6' : '#8B5CF6';
    return `
      <div class="project-card ${i === selectedProject ? 'selected' : ''}" onclick="selectProject(${i})" style="cursor:pointer; padding: 15px; border: 1px solid var(--border); border-radius: var(--radius-sm); margin-bottom: 10px;">
        <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
          <div style="font-family:'Space Grotesk'; font-weight:600;">${p.name}</div>
          <span style="font-size:10px; color:${barColor}; background:rgba(0,0,0,0.3); padding:2px 8px; border-radius:10px;">${p.statusLabel}</span>
        </div>
        <div style="height:4px; background:var(--bg3); border-radius:2px; overflow:hidden;">
          <div style="width:${pct}%; background:${barColor}; height:100%;"></div>
        </div>
      </div>`;
  }).join('');
  renderTimeline(selectedProject);
}

function renderTimeline(idx) {
  const tlEl = document.getElementById('timeline-view');
  if (!tlEl) return;
  const project = DATA.projects[idx];
  tlEl.innerHTML = project.timeline.map(t => `
    <div style="display:flex; gap:15px; margin-bottom: 20px;">
      <div style="width:12px; height:12px; border-radius:50%; margin-top:4px; background:${t.dot==='done'?'#06B6D4':t.dot==='wip'?'#3B82F6':'#64748B'}; box-shadow: 0 0 10px ${t.dot==='wip'?'#3B82F6':'transparent'}"></div>
      <div>
        <div style="font-weight:600; font-family:'Space Grotesk';">${t.title}</div>
        <div style="font-size:12px; color:var(--text2);">${t.desc}</div>
        <div style="font-size:10px; color:var(--text3); margin-top:4px;">${t.date}</div>
      </div>
    </div>`).join('');
}

function selectProject(idx) { selectedProject = idx; renderProjects(); }

/* ─────────────────────────────────────────
   TICKETS & ZERO STATE LOGIC
───────────────────────────────────────── */
function renderTickets(filter) {
  const el = document.getElementById('ticket-list');
  if (!el) return;
  const list = filter === 'all' ? DATA.tickets : DATA.tickets.filter(t => t.status === filter);
  
  if (list.length === 0) {
    el.innerHTML = `
      <div class="empty-tickets">
        <i class="ti ti-shield-check"></i>
        <div>Zero Anomalies Detected</div>
        <p>There are no civic reports matching this state in the sector.</p>
        <button class="btn btn-primary btn-sm" onclick="document.getElementById('t-title').focus()">Initialize New Report</button>
      </div>`;
    return;
  }
  el.innerHTML = list.map(t => buildTicketHTML(t)).join('');
}

function buildTicketHTML(t) {
  const statusLabel = { open:'Pending', noted:'AI Noted', wip:'Processing', done:'Resolved', invalid:'Cancelled' }[t.status] || t.status;
  return `
    <div class="ticket-item">
      <div class="ticket-header">
        <div>
          <div class="ticket-id">${t.id}</div>
          <div class="ticket-title">${t.title}</div>
          <div style="font-size:11px; color:var(--text3); margin-top:5px;">
            <span><i class="ti ti-map-pin"></i> ${t.ward}</span> &nbsp;|&nbsp; 
            <span><i class="ti ti-tag"></i> ${t.cat}</span> &nbsp;|&nbsp; 
            <span><i class="ti ti-calendar"></i> ${t.date}</span>
          </div>
        </div>
        <span style="font-size:10px; padding:3px 8px; border-radius:10px; background:rgba(6,182,212,0.1); color:var(--accent2);">${statusLabel}</span>
      </div>
      <div style="margin-top:10px; font-size:12px; color:var(--text2); background:rgba(0,0,0,0.3); padding:8px; border-left:2px solid var(--accent); border-radius:4px;">
        <strong>🤖 ZEAI Engine:</strong> ${t.verdict}
      </div>
    </div>`;
}

function filterTickets(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTickets(filter);
}

function submitTicket() {
  const title = document.getElementById('t-title').value.trim();
  const cat   = document.getElementById('t-cat').value;
  const statusEl = document.getElementById('ai-status');

  if (!title || !cat) {
    statusEl.style.display = 'block';
    statusEl.innerHTML = `<div style="color:var(--red); font-size:12px;">⚠️ Incomplete telemetry. Fill required fields.</div>`;
    return;
  }

  statusEl.style.display = 'block';
  statusEl.innerHTML = `<div style="color:var(--accent2); font-size:12px;">🤖 Engine analyzing telemetry...</div>`;

  setTimeout(() => {
    ticketCounter++;
    const id = `#ZAI-2026-0${ticketCounter}`;
    DATA.tickets.unshift({ id, title, cat, ward:'Mambakkam', date: todayStr(), status:'open', verdict:`Priority assigned based on spatial logic. Dispatched to Node ${cat}.` });
    renderTickets(currentFilter);
    ['t-name','t-phone','t-title','t-desc'].forEach(id => document.getElementById(id).value = '');
    statusEl.innerHTML = `<div style="color:var(--green); font-size:12px;">✅ Report ${id} logged in mainframe.</div>`;
  }, 1500);
}

function todayStr() { return new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }); }

/* ─────────────────────────────────────────
   AI CHAT ASSISTANT
───────────────────────────────────────── */
function toggleAIChat() {
  document.getElementById('ai-chat-panel').classList.toggle('active');
}

function sendAIMsg() {
  const input = document.getElementById('ai-chat-input-field');
  const val = input.value.trim();
  if(!val) return;
  const body = document.getElementById('ai-chat-body');
  
  body.innerHTML += `<div class="ai-msg user">${val}</div>`;
  input.value = '';
  body.scrollTop = body.scrollHeight;
  
  setTimeout(() => {
    body.innerHTML += `<div class="ai-msg bot">Processing query via ZEAI mainframe. Routing to optimal sub-routine...</div>`;
    body.scrollTop = body.scrollHeight;
  }, 800);
}

/* ─────────────────────────────────────────
   CHARTS (DARK THEME)
───────────────────────────────────────── */
function initCharts() {
  if (typeof Chart === 'undefined') return setTimeout(initCharts, 300);
  Chart.defaults.color = '#64748B';
  Chart.defaults.font.family = "'DM Sans', sans-serif";
  const gridColor = 'rgba(255,255,255,0.05)';

  safeChart('budgetChart', {
    type:'bar',
    data: {
      labels: ['Agri-Tech','Grid','Water','Sanitation'],
      datasets: [
        { label:'Allocated', data:[8,5,4,2], backgroundColor:'rgba(6, 182, 212, 0.2)', borderColor:'#06B6D4', borderWidth:1 },
        { label:'Utilized',  data:[5.8,3,2,1], backgroundColor:'rgba(59, 130, 246, 0.4)', borderColor:'#3B82F6', borderWidth:1 },
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, scales: { x: { grid:{ color:gridColor } }, y: { grid:{ color:gridColor } } } }
  });

  safeChart('trendChart', {
    type:'line',
    data: {
      labels: ['W1','W2','W3','W4'],
      datasets: [
        { label:'Anomalies', data:[120,95,60,40], borderColor:'#06B6D4', backgroundColor:'rgba(6, 182, 212, 0.1)', fill:true, tension:0.4 },
        { label:'Resolved', data:[100,90,55,42], borderColor:'#3B82F6', backgroundColor:'rgba(59, 130, 246, 0.1)', fill:true, tension:0.4 }
      ]
    },
    options: { responsive:true, maintainAspectRatio:false, scales: { x: { grid:{ color:gridColor } }, y: { grid:{ color:gridColor } } } }
  });

  safeChart('radarChart', {
    type:'radar',
    data: {
      labels: ['Sensor Coverage','Resolution Time','UAV Sweeps','Data Integrity','Node Health'],
      datasets: [{ label:'Sector 4 - Mambakkam', data:[95,85,99,90,88], borderColor:'#06B6D4', backgroundColor:'rgba(6, 182, 212, 0.2)', borderWidth:2 }]
    },
    options: { responsive:true, maintainAspectRatio:false, scales: { r: { grid:{ color:gridColor }, angleLines:{ color:gridColor }, ticks:{ display:false } } } }
  });
}
function safeChart(id, config) { const el = document.getElementById(id); if (el) new Chart(el, config); }

/* ─────────────────────────────────────────
   AUTH SYSTEM & REDACTION
───────────────────────────────────────── */
// Simulated DB - Aadhar Numbers MUST BE REDACTED for output.
const USERS_DB = [
  { mobile: '9876543210', aadhar: '[Aadhaar Redacted]', name: 'Deepan', ward: 'Mambakkam', age: 24 },
  { mobile: '9123456789', aadhar: '[Aadhaar Redacted]', name: 'Priya',  ward: 'Tambaram', age: 31 },
];

let currentUser = null;

function openAuth(tab = 'login') {
  document.getElementById('auth-overlay').classList.add('show');
  switchAuthTab(tab);
}
function closeAuth() { document.getElementById('auth-overlay').classList.remove('show'); }
function switchAuthTab(tab) {
  document.getElementById('auth-login').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
}
function handleLogin() {
  const mobile = document.getElementById('login-mobile').value.replace(/\D/g, '');
  if (!mobile || mobile.length < 10) { document.getElementById('login-error').style.display='block'; document.getElementById('login-error').innerText='Invalid Mobile'; return; }
  const user = USERS_DB.find(u => u.mobile === mobile);
  if (user) loginSuccess(user);
}
function loginSuccess(user) {
  currentUser = user;
  closeAuth();
  document.getElementById('avatar-btn').classList.add('logged-in');
  document.getElementById('avatar-label').innerHTML = user.name.substring(0,2).toUpperCase();
}
function openProfile() {
  document.getElementById('profile-overlay').classList.add('show');
  if(currentUser) {
    document.getElementById('profile-loggedin').style.display = 'block';
    document.getElementById('profile-guest').style.display = 'none';
    document.getElementById('profile-name-display').innerText = currentUser.name;
    document.getElementById('profile-avatar-big').innerText = currentUser.name.substring(0,2).toUpperCase();
  } else {
    document.getElementById('profile-loggedin').style.display = 'none';
    document.getElementById('profile-guest').style.display = 'block';
  }
}
function closeProfile() { document.getElementById('profile-overlay').classList.remove('show'); }
function handleLogout() { currentUser = null; document.getElementById('avatar-label').innerHTML = '<i class="ti ti-user"></i>'; closeProfile(); }

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderTickets('all');
});
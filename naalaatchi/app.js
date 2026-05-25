/* ============================================================
   NaalaatchiApp — Digital Governance Platform
   app.js  — All data, rendering, charts, and interactivity
   ============================================================ */

'use strict';

/* ─────────────────────────────────────────
   DATA STORE
───────────────────────────────────────── */
const DATA = {

  promises: [
    { icon:'🛣️', iconBg:'rgba(34,197,94,.1)', name:'Road widening — Anna Nagar–Pallavaram link', meta:'Promised: Jan 2024 · Budget: ₹1.2 Cr', pct:92, color:'#22C55E' },
    { icon:'💧', iconBg:'rgba(59,130,246,.1)',  name:'24/7 drinking water supply to Ward 12',     meta:'Promised: Mar 2024 · Budget: ₹85 L',  pct:55, color:'#F59E0B' },
    { icon:'🏫', iconBg:'rgba(168,85,247,.1)', name:'New public library & reading hall',           meta:'Promised: Jun 2024 · Budget: ₹40 L',  pct:30, color:'#3B82F6' },
    { icon:'🌳', iconBg:'rgba(239,68,68,.1)',  name:'Urban park development — Sector 4',           meta:'Promised: Nov 2023 · Overdue 3 months', pct:10, color:'#EF4444' },
    { icon:'💡', iconBg:'rgba(20,184,166,.1)', name:'LED streetlight installation — all wards',    meta:'Promised: Sep 2023 · Budget: ₹2.1 Cr', pct:100, color:'#22C55E' },
    { icon:'🏥', iconBg:'rgba(168,85,247,.1)', name:'Mobile health clinic for rural wards',        meta:'Promised: Feb 2024 · Budget: ₹60 L',  pct:65, color:'#A855F7' },
    { icon:'🚮', iconBg:'rgba(245,158,11,.1)', name:'Door-to-door waste segregation program',      meta:'Promised: Apr 2024 · Budget: ₹30 L',  pct:40, color:'#F59E0B' },
  ],

  projects: [
    {
      name: 'Road Widening — Anna Nagar Link', pct: 92, budget: '₹1.2 Cr',
      status: 'wip', statusLabel: 'In Progress', eta: 'June 2024',
      timeline: [
        { title:'Tender Published',           desc:'TNPWD portal listing. 3 contractors shortlisted.',              date:'12 Jan 2024', dot:'done' },
        { title:'Contractor Awarded',          desc:'Rajan & Co. (L1). Agreement signed. ₹24L advance released.',   date:'28 Jan 2024', dot:'done' },
        { title:'Foundation & Excavation',    desc:'Excavation complete across 2.4 km. Base layer laid.',          date:'15 Feb 2024', dot:'done' },
        { title:'Asphalt Laying — In Progress', desc:'Section A done. Section B in progress. Est. 30 May.',         date:'Now',         dot:'wip'  },
        { title:'QA Inspection & Handover',   desc:'TNPWD inspection then public ceremony.',                        date:'Planned: Jun 2024', dot:'plan' },
      ]
    },
    {
      name: 'Water Pipeline — Ward 12', pct: 55, budget: '₹85 L',
      status: 'wip', statusLabel: 'In Progress', eta: 'Aug 2024',
      timeline: [
        { title:'Survey & DPR Approved',      desc:'Detailed project report approved by CMWSSB.',                   date:'10 Feb 2024', dot:'done' },
        { title:'Tender Awarded',              desc:'Pipeline contractor appointed. Works commenced.',               date:'20 Feb 2024', dot:'done' },
        { title:'Laying Phase 1 — Complete',  desc:'Main trunk line laid. 60% households connected.',               date:'10 Apr 2024', dot:'done' },
        { title:'Laying Phase 2 — In Progress', desc:'Last-mile connections ongoing in sub-lanes.',                  date:'Now',         dot:'wip'  },
        { title:'Testing & Commissioning',    desc:'Pressure testing, chlorination, public handover.',               date:'Planned: Aug 2024', dot:'plan' },
      ]
    },
    {
      name: 'Public Library — Sector 2', pct: 30, budget: '₹40 L',
      status: 'noted', statusLabel: 'Planning', eta: 'Dec 2024',
      timeline: [
        { title:'Site Identified',            desc:'Govt. land in Sector 2 allocated by Municipality.',              date:'01 Mar 2024', dot:'done' },
        { title:'Architect Design Approved',  desc:'Building plan approved. Foundation work started.',               date:'15 Apr 2024', dot:'done' },
        { title:'Civil Construction',         desc:'Foundation complete. Column work in progress.',                   date:'Now',         dot:'wip'  },
        { title:'Interior & Furnishing',      desc:'Reading hall layout, shelving, IT setup.',                        date:'Planned: Oct 2024', dot:'plan' },
        { title:'Inauguration',               desc:'Public opening with digital catalog system.',                     date:'Planned: Dec 2024', dot:'plan' },
      ]
    },
  ],

  tickets: [
    { id:'#TKT-2024-0089', title:'Pothole on Main Road near school', cat:'Road / Pothole', ward:'Ward 12', date:'2 May 2024', status:'wip',  verdict:'Valid complaint — road hazard confirmed via geo-data. Assigned to PWD team. Estimated fix: 3–5 working days.' },
    { id:'#TKT-2024-0072', title:'Street light not working for 2 weeks', cat:'Street Lighting', ward:'Ward 12', date:'24 Apr 2024', status:'done', verdict:'Resolved: TNEB crew replaced bulb on 28 Apr. Complaint closed. Rate this resolution ★★★★☆' },
    { id:'#TKT-2024-0041', title:'Water supply disruption every morning', cat:'Water Supply', ward:'Ward 12', date:'10 Apr 2024', status:'noted', verdict:'Grouped with 22 similar complaints in this ward. Escalated to Metro Water Board for pipeline inspection.' },
    { id:'#TKT-2024-0031', title:'Request to install speed breaker near park', cat:'Road / Pothole', ward:'Ward 12', date:'1 Apr 2024', status:'invalid', verdict:'Duplicate of #TKT-2024-0019. Speed breaker already approved and scheduled for June 2024. No action needed.' },
    { id:'#TKT-2024-0025', title:'Garbage not collected for 5 days', cat:'Waste Management', ward:'Ward 12', date:'20 Mar 2024', status:'done', verdict:'Waste board notified. Pickup resumed on 23 Mar. Complaint marked resolved.' },
    { id:'#TKT-2024-0018', title:'Open drainage overflow near school', cat:'Drainage / Sewage', ward:'Ward 13', date:'10 Mar 2024', status:'wip', verdict:'Valid complaint. Drainage dept notified. Desilting work scheduled for this week.' },
  ],

  leaderboard: [
    { name:'Ravi Kumar',    ward:'Ward 12', score:78, delivery:65, trend:'up'   },
    { name:'Priya Sundar',  ward:'Ward 14', score:85, delivery:72, trend:'up'   },
    { name:'Mani Arumugam', ward:'Ward 11', score:71, delivery:58, trend:'flat' },
    { name:'Deepa Raj',     ward:'Ward 13', score:67, delivery:54, trend:'dn'   },
    { name:'Senthil Kumar', ward:'Ward 15', score:60, delivery:48, trend:'dn'   },
    { name:'Anbu Selvi',    ward:'Ward 16', score:55, delivery:42, trend:'up'   },
  ],

  heatmap: [
    { label:'Water Supply',  count:43, pct:86, color:'#EF4444' },
    { label:'Road Repair',   count:38, pct:76, color:'#F59E0B' },
    { label:'Waste Mgmt',    count:29, pct:58, color:'#F59E0B' },
    { label:'Street Lights', count:22, pct:44, color:'#3B82F6' },
    { label:'Healthcare',    count:17, pct:34, color:'#3B82F6' },
    { label:'Education',     count:14, pct:28, color:'#22C55E' },
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

  // Lazy-init charts on first render
  if (!chartsInitialized) { initCharts(); chartsInitialized = true; }
}

function switchMain(btn, id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ─────────────────────────────────────────
   PROMISE TRACKER
───────────────────────────────────────── */
function renderPromises() {
  const el = document.getElementById('promise-list');
  if (!el) return;
  el.innerHTML = DATA.promises.map(p => {
    const label = p.pct === 100 ? '✔ Done' : p.pct + '%';
    return `
      <div class="promise-row">
        <div class="promise-icon" style="background:${p.iconBg}">${p.icon}</div>
        <div class="promise-info">
          <div class="promise-name">${p.name}</div>
          <div class="promise-meta">${p.meta}</div>
        </div>
        <div class="progress-wrap">
          <div class="progress-label"><span>Progress</span><span style="color:${p.color}">${label}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${p.pct}%;background:${p.color}"></div></div>
        </div>
        <div class="pct-badge" style="color:${p.color}">${p.pct}%</div>
      </div>`;
  }).join('');
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
    const barColor = pct >= 75 ? '#22C55E' : pct >= 45 ? '#F59E0B' : '#3B82F6';
    return `
      <div class="project-card ${i === selectedProject ? 'selected' : ''}" onclick="selectProject(${i})">
        <div class="project-header">
          <div class="project-name">${p.name}</div>
          <span class="status-badge status-${p.status}">${p.statusLabel}</span>
        </div>
        <div class="progress-bar" style="margin-top:6px">
          <div class="progress-fill" style="width:${pct}%;background:${barColor}"></div>
        </div>
        <div style="font-size:11px;color:var(--text3);margin-top:5px">${pct}% · ${p.budget} · Est. ${p.eta}</div>
      </div>`;
  }).join('');

  renderTimeline(selectedProject);
}

function renderTimeline(idx) {
  const tlEl = document.getElementById('timeline-view');
  if (!tlEl) return;
  const project = DATA.projects[idx];
  tlEl.innerHTML = project.timeline.map(t => `
    <div class="tl-item">
      <div class="tl-dot dot-${t.dot}"></div>
      <div class="tl-content">
        <div class="tl-title" style="${t.dot === 'wip' ? 'color:var(--accent)' : t.dot === 'plan' ? 'color:var(--text3)' : ''}">${t.dot === 'wip' ? '🔵 ' : ''}${t.title}</div>
        <div class="tl-desc">${t.desc}</div>
        <div class="tl-date">${t.date}</div>
      </div>
    </div>`).join('');
}

function selectProject(idx) {
  selectedProject = idx;
  renderProjects();
}

/* ─────────────────────────────────────────
   HEATMAP
───────────────────────────────────────── */
function renderHeatmap() {
  const el = document.getElementById('heat-rows');
  if (!el) return;
  el.innerHTML = DATA.heatmap.map(d => `
    <div class="heat-row">
      <div class="heat-label">${d.label}</div>
      <div class="heat-bar-wrap">
        <div class="heat-fill" style="width:${d.pct}%;background:${d.color}"></div>
      </div>
      <div class="heat-count" style="color:${d.color}">${d.count}</div>
    </div>`).join('');
}

/* ─────────────────────────────────────────
   TICKETS
───────────────────────────────────────── */
function renderTickets(filter) {
  const el = document.getElementById('ticket-list');
  if (!el) return;
  const list = filter === 'all' ? DATA.tickets : DATA.tickets.filter(t => t.status === filter);
  el.innerHTML = list.map(t => buildTicketHTML(t)).join('');
}

function buildTicketHTML(t) {
  const statusLabel = { open:'Open', noted:'AI Noted', wip:'In Progress', done:'Resolved', invalid:'AI Cancelled' }[t.status] || t.status;
  const aiIcon = { open:'🤖', noted:'🤖', wip:'🤖', done:'✅', invalid:'🚫' }[t.status] || '🤖';
  return `
    <div class="ticket-item">
      <div class="ticket-header">
        <div>
          <div class="ticket-id">${t.id}</div>
          <div class="ticket-title">${t.title}</div>
          <div class="ticket-meta">
            <span><i class="ti ti-map-pin" style="font-size:11px"></i> ${t.ward}</span>
            <span><i class="ti ti-tag" style="font-size:11px"></i> ${t.cat}</span>
            <span><i class="ti ti-calendar" style="font-size:11px"></i> ${t.date}</span>
          </div>
        </div>
        <span class="status-badge status-${t.status}">${statusLabel}</span>
      </div>
      <div class="ai-verdict"><strong>${aiIcon} AI Review:</strong> ${t.verdict}</div>
    </div>`;
}

function filterTickets(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTickets(filter);
}

/* ─────────────────────────────────────────
   SUBMIT TICKET (AI Simulation)
───────────────────────────────────────── */
function submitTicket() {
  const name  = document.getElementById('t-name').value.trim();
  const phone = document.getElementById('t-phone').value.trim();
  const cat   = document.getElementById('t-cat').value;
  const title = document.getElementById('t-title').value.trim();
  const desc  = document.getElementById('t-desc').value.trim();
  const loc   = document.getElementById('t-loc').value.trim();

  const statusEl = document.getElementById('ai-status');

  if (!name || !cat || !title || !desc) {
    statusEl.style.display = 'block';
    statusEl.innerHTML = `
      <div style="padding:10px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;font-size:13px;color:#f87171">
        <i class="ti ti-alert-circle"></i> Please fill all required fields marked with *.
      </div>`;
    return;
  }

  statusEl.style.display = 'block';
  statusEl.innerHTML = `
    <div class="ai-processing">
      <div class="ai-dot"></div>
      <div>
        <strong>🤖 AI is reviewing your complaint…</strong><br>
        <span style="color:var(--text3);font-size:12px">Checking duplicates, validating category, assessing priority…</span>
      </div>
    </div>`;

  setTimeout(() => {
    ticketCounter++;
    const id = `#TKT-2024-0${ticketCounter}`;

    // Simulate duplicate detection
    const lc = title.toLowerCase() + desc.toLowerCase();
    const isDuplicate = (cat === 'Water Supply' && DATA.tickets.some(t => t.cat === 'Water Supply'));

    let newTicket;
    if (isDuplicate) {
      newTicket = { id, title, cat, ward:'Ward 12', date: todayStr(), status:'noted',
        verdict:`Grouped with similar ${cat} complaints in your ward. Escalated to the relevant authority for batch resolution.` };
      statusEl.innerHTML = `
        <div style="padding:12px;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);border-radius:8px;font-size:13px">
          <div style="color:#fbbf24;font-weight:600;margin-bottom:4px">🤖 AI: Similar complaint detected</div>
          <div style="color:var(--text2)">Ticket ${id} created and grouped with existing ${cat} complaints. You'll get SMS updates as the issue is resolved collectively.</div>
        </div>`;
    } else {
      newTicket = { id, title, cat, ward:'Ward 12', date: todayStr(), status:'open',
        verdict:`Valid complaint. Category: ${cat}. Priority assessed based on location and impact. Assigned to ward officer. Expected acknowledgment within 24 hrs.` };
      statusEl.innerHTML = `
        <div style="padding:12px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;font-size:13px">
          <div style="color:#4ade80;font-weight:600;margin-bottom:4px">✅ Complaint Registered — ${id}</div>
          <div style="color:var(--text2)">AI validated. Assigned to ward officer for ${cat}. You'll receive SMS updates on progress.</div>
        </div>`;
    }

    DATA.tickets.unshift(newTicket);
    renderTickets(currentFilter);

    // Clear form
    ['t-name','t-phone','t-title','t-desc','t-loc'].forEach(id => document.getElementById(id).value = '');
    document.getElementById('t-cat').value = '';

  }, 2600);
}

function todayStr() {
  return new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

/* ─────────────────────────────────────────
   LEADERBOARD
───────────────────────────────────────── */
function renderLeaderboard() {
  const el = document.getElementById('leaderboard-body');
  if (!el) return;
  const sorted = [...DATA.leaderboard].sort((a, b) => b.score - a.score);
  el.innerHTML = sorted.map((c, i) => {
    const sc = c.score >= 75 ? 'score-high' : c.score >= 62 ? 'score-mid' : 'score-low';
    const barColor = c.score >= 75 ? '#22C55E' : c.score >= 62 ? '#F59E0B' : '#EF4444';
    const trendIcon = c.trend === 'up' ? '<i class="ti ti-trending-up trend-up"></i>'
                     : c.trend === 'dn' ? '<i class="ti ti-trending-down trend-dn"></i>'
                     : '<i class="ti ti-minus trend-flat"></i>';
    return `
      <tr>
        <td><strong style="font-family:'Space Grotesk',sans-serif">${i+1}</strong></td>
        <td>${c.name}</td>
        <td style="color:var(--text2)">${c.ward}</td>
        <td><div class="score-ring ${sc}">${c.score}</div></td>
        <td>
          <div class="mini-bar"><div class="mini-fill" style="width:${c.delivery}%;background:${barColor}"></div></div>
          <span style="font-size:11px;color:var(--text2);margin-left:6px">${c.delivery}%</span>
        </td>
        <td>${trendIcon}</td>
      </tr>`;
  }).join('');
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function closeModal(e) {
  document.getElementById('modal-overlay').classList.remove('show');
}

/* ─────────────────────────────────────────
   CHARTS
───────────────────────────────────────── */
function initCharts() {
  if (typeof Chart === 'undefined') {
    console.warn('Chart.js not yet loaded');
    setTimeout(initCharts, 300);
    return;
  }

  Chart.defaults.color = '#5A6B88';
  Chart.defaults.font.family = "'DM Sans', sans-serif";
  Chart.defaults.font.size = 11;

  const gridColor = 'rgba(255,255,255,.04)';

  // ── DONUT ──
  safeChart('donutChart', {
    type: 'doughnut',
    data: {
      labels: ['Delivered','In Progress','Delayed'],
      datasets: [{ data:[31,11,6], backgroundColor:['#22C55E','#F59E0B','#EF4444'], borderWidth:0, hoverOffset:5 }]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins: { legend:{ display:false }, tooltip:{ callbacks:{ label: ctx => `${ctx.label}: ${ctx.raw}` } } },
      cutout:'70%'
    }
  });

  // ── TREND ──
  const trendLabels = ['Apr 14','Apr 18','Apr 22','Apr 26','Apr 30','May 4','May 8','May 12'];
  safeChart('trendChart', {
    type:'line',
    data: {
      labels: trendLabels,
      datasets: [
        { label:'Raised',   data:[18,24,21,29,26,19,22,17], borderColor:'#EF4444', backgroundColor:'rgba(239,68,68,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
        { label:'Resolved', data:[12,16,18,22,24,20,21,19], borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
      ]
    },
    options: lineOpts(gridColor)
  });

  // ── BUDGET ──
  safeChart('budgetChart', {
    type:'bar',
    data: {
      labels: ['Infrastructure','Welfare','Education','Health','Sanitation'],
      datasets: [
        { label:'Sanctioned', data:[8,3.5,2.2,2.8,1.9], backgroundColor:'rgba(59,130,246,.25)', borderColor:'#3B82F6', borderWidth:1 },
        { label:'Utilized',   data:[5.8,2.1,1.4,1.8,0.7], backgroundColor:'rgba(34,197,94,.25)', borderColor:'#22C55E', borderWidth:1 },
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      scales: {
        x: { grid:{ color:gridColor }, ticks:{ maxRotation:30 } },
        y: { grid:{ color:gridColor }, ticks:{ callback: v => '₹'+v+'Cr' } }
      },
      plugins: { legend:{ labels:{ color:'#8A9BB8', boxWidth:10, padding:14 } } }
    }
  });

  // ── SENTIMENT ──
  safeChart('sentChart', {
    type:'line',
    data: {
      labels: ['W1','W2','W3','W4','W5','W6','W7','W8'],
      datasets: [
        { label:'Positive', data:[42,44,46,44,47,48,49,48], borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
        { label:'Negative', data:[32,30,29,30,27,28,25,28], borderColor:'#EF4444', backgroundColor:'rgba(239,68,68,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
      ]
    },
    options: { ...lineOpts(gridColor), plugins:{ legend:{ labels:{ color:'#8A9BB8', boxWidth:10, padding:14 } } } }
  });

  // ── PROMISE CATEGORY ──
  safeChart('promiseCatChart', {
    type:'bar',
    data: {
      labels: ['Infrastructure','Water','Education','Health','Sanitation','Parks'],
      datasets: [
        { label:'Promised', data:[12,8,6,7,9,6], backgroundColor:'rgba(59,130,246,.3)', borderColor:'#3B82F6', borderWidth:1 },
        { label:'Delivered',data:[9,5,3,5,7,2],   backgroundColor:'rgba(34,197,94,.3)',  borderColor:'#22C55E', borderWidth:1 },
      ]
    },
    options: {
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      scales: {
        x: { grid:{ color:gridColor } },
        y: { grid:{ color:'transparent' } }
      },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', boxWidth:10, padding:14 } } }
    }
  });

  // ── TIMELINE ADHERENCE ──
  safeChart('timelineChart', {
    type:'bar',
    data: {
      labels:['Q1 2023','Q2 2023','Q3 2023','Q4 2023','Q1 2024'],
      datasets:[{ label:'On-time delivery %', data:[55,62,70,64,72], backgroundColor:'rgba(168,85,247,.35)', borderColor:'#A855F7', borderWidth:1 }]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      scales:{
        x:{ grid:{ color:gridColor } },
        y:{ grid:{ color:gridColor }, min:0, max:100, ticks:{ callback: v => v+'%' } }
      },
      plugins:{ legend:{ display:false } }
    }
  });

  // ── RADAR ──
  safeChart('radarChart', {
    type:'radar',
    data: {
      labels: ['Complaint Resolution','Budget Utilization','Promise Delivery','Citizen Satisfaction','Response Time','Transparency'],
      datasets: [
        { label:'Ward 12 — Ravi Kumar', data:[78,64,65,72,85,70], borderColor:'#3B82F6', backgroundColor:'rgba(59,130,246,.15)', pointBackgroundColor:'#3B82F6', borderWidth:2 },
        { label:'District Average',      data:[65,55,58,60,70,62], borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,.1)',  pointBackgroundColor:'#F59E0B', borderWidth:1, borderDash:[4,4] },
      ]
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      scales: {
        r: {
          grid:{ color:'rgba(255,255,255,.07)' },
          angleLines:{ color:'rgba(255,255,255,.07)' },
          pointLabels:{ color:'#8A9BB8', font:{ size:11 } },
          ticks:{ display:false }, min:0, max:100,
        }
      },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', boxWidth:10, padding:14 } } }
    }
  });
}

/* helper: safely create chart only if canvas exists */
function safeChart(id, config) {
  const el = document.getElementById(id);
  if (!el) return;
  new Chart(el, config);
}

/* shared line chart options */
function lineOpts(gridColor) {
  return {
    responsive: true, maintainAspectRatio: false,
    scales: {
      x: { grid:{ color:gridColor } },
      y: { grid:{ color:gridColor } }
    },
    plugins: {
      legend:{ labels:{ color:'#8A9BB8', boxWidth:10, padding:14 } }
    }
  };
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderPromises();
  renderProjects();
  renderHeatmap();
  renderTickets('all');
  renderLeaderboard();

  // Init charts for the default (dashboard) section
  setTimeout(() => { initCharts(); chartsInitialized = true; }, 100);
});

/* ─────────────────────────────────────────
   AUTH & PROFILE SYSTEM
───────────────────────────────────────── */

// In-memory user store (simulates a DB for prototype)
const USERS_DB = [
  { mobile: '9876543210', aadhar: '1234 5678 9012', name: 'Deepan Kumar', ward: 'Ward 12 — Tambaram', age: 24 },
  { mobile: '9123456789', aadhar: '9876 5432 1098', name: 'Priya Sundar',  ward: 'Ward 12 — Tambaram', age: 31 },
];

// Session state
let currentUser = null;     // null = guest
let currentStarRating = 0;
let userFeedbacks = [];     // feedbacks submitted this session

/* ── AUTH MODAL ── */
function openAuth(tab = 'login') {
  document.getElementById('auth-overlay').classList.add('show');
  switchAuthTab(tab);
}

function closeAuth(e) {
  if (e && e.target !== document.getElementById('auth-overlay')) return;
  document.getElementById('auth-overlay').classList.remove('show');
  clearAuthErrors();
}

function switchAuthTab(tab) {
  document.getElementById('auth-login').style.display    = tab === 'login'    ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active',    tab === 'login');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  clearAuthErrors();
}

function clearAuthErrors() {
  ['login-error','reg-error'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.style.display = 'none'; el.textContent = ''; }
  });
}

function showAuthError(id, msg) {
  const el = document.getElementById(id);
  el.textContent = msg; el.style.display = 'block';
}

function formatAadhar(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 12);
  input.value = v.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
}

/* ── LOGIN ── */
function handleLogin() {
  const mobile = document.getElementById('login-mobile').value.replace(/\D/g, '');
  const aadhar = document.getElementById('login-aadhar').value.trim();

  if (!mobile || mobile.length < 10) { showAuthError('login-error', '⚠️ Enter a valid 10-digit mobile number.'); return; }
  if (!aadhar || aadhar.replace(/\s/g,'').length < 12) { showAuthError('login-error', '⚠️ Enter a valid 12-digit Aadhaar number.'); return; }

  const user = USERS_DB.find(u =>
    u.mobile.replace(/\D/g,'') === mobile && u.aadhar.replace(/\s/g,'') === aadhar.replace(/\s/g,'')
  );

  if (!user) {
    showAuthError('login-error', '❌ No account found. Check your details or register first.');
    return;
  }

  loginSuccess(user);
}

/* ── REGISTER ── */
function handleRegister() {
  const name   = document.getElementById('reg-name').value.trim();
  const mobile = document.getElementById('reg-mobile').value.replace(/\D/g, '');
  const aadhar = document.getElementById('reg-aadhar').value.trim();
  const ward   = document.getElementById('reg-ward').value;
  const age    = document.getElementById('reg-age').value;

  if (!name)                              { showAuthError('reg-error', '⚠️ Please enter your full name.'); return; }
  if (!mobile || mobile.length < 10)     { showAuthError('reg-error', '⚠️ Enter a valid 10-digit mobile number.'); return; }
  if (aadhar.replace(/\s/g,'').length < 12) { showAuthError('reg-error', '⚠️ Enter a valid 12-digit Aadhaar number.'); return; }
  if (USERS_DB.find(u => u.mobile.replace(/\D/g,'') === mobile)) {
    showAuthError('reg-error', '⚠️ This mobile number is already registered. Please login.'); return;
  }

  const newUser = { mobile, aadhar, name, ward, age: age || '—' };
  USERS_DB.push(newUser);
  loginSuccess(newUser);
}

function loginSuccess(user) {
  currentUser = user;
  document.getElementById('auth-overlay').classList.remove('show');
  updateAvatarUI();
  // Auto-fill complaint form if open
  autoFillComplaintForm();
  // Show toast
  showToast(`Welcome, ${user.name.split(' ')[0]}! 👋`);
}

/* ── LOGOUT ── */
function handleLogout() {
  currentUser = null;
  currentStarRating = 0;
  userFeedbacks = [];
  updateAvatarUI();
  closeProfile();
  showToast('Logged out successfully.');
}

/* ── AVATAR UI UPDATE ── */
function updateAvatarUI() {
  const btn   = document.getElementById('avatar-btn');
  const label = document.getElementById('avatar-label');
  if (currentUser) {
    const initials = currentUser.name.split(' ').map(w => w[0]).join('').substring(0,2).toUpperCase();
    label.innerHTML = initials;
    label.style.fontSize = '13px';
    btn.classList.add('logged-in');
    btn.title = currentUser.name;
  } else {
    label.innerHTML = '<i class="ti ti-user"></i>';
    label.style.fontSize = '18px';
    btn.classList.remove('logged-in');
    btn.title = 'Profile / Login';
  }
}

/* ── PROFILE PANEL ── */
function openProfile() {
  if (currentUser) {
    renderProfilePanel();
    document.getElementById('profile-loggedin').style.display = 'block';
    document.getElementById('profile-guest').style.display    = 'none';
  } else {
    document.getElementById('profile-loggedin').style.display = 'none';
    document.getElementById('profile-guest').style.display    = 'block';
  }
  document.getElementById('profile-overlay').classList.add('show');
}

function closeProfile(e) {
  if (e && e.target !== document.getElementById('profile-overlay')) return;
  document.getElementById('profile-overlay').classList.remove('show');
}

function renderProfilePanel() {
  if (!currentUser) return;

  // Avatar & name
  const initials = currentUser.name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
  document.getElementById('profile-avatar-big').textContent = initials;
  document.getElementById('profile-name-display').textContent = currentUser.name;
  document.getElementById('profile-meta-display').textContent = `${currentUser.ward} · Citizen`;

  // Tickets belonging to this user (matched by name prefix or all new ones in session)
  const myTickets = DATA.tickets.filter(t =>
    t.submittedBy === currentUser.mobile || t.status === 'open' && DATA.tickets.indexOf(t) < 3
  );
  // Count stats
  const myAll      = DATA.tickets.filter(t => t.submittedBy === currentUser.mobile);
  const myResolved = myAll.filter(t => t.status === 'done');

  document.getElementById('pstat-complaints').textContent = myAll.length;
  document.getElementById('pstat-resolved').textContent   = myResolved.length;
  document.getElementById('pstat-feedback').textContent   = userFeedbacks.length;

  // My tickets list
  const listEl = document.getElementById('profile-my-tickets');
  if (myAll.length === 0) {
    listEl.innerHTML = '<div class="empty-state">No complaints submitted yet.<br>Your tickets will appear here after login.</div>';
  } else {
    listEl.innerHTML = myAll.slice(0,5).map(t => {
      const statusLabel = { open:'Open', noted:'AI Noted', wip:'In Progress', done:'Resolved', invalid:'Cancelled' }[t.status] || t.status;
      return `<div class="profile-ticket-item">
        <div class="pt-header">
          <div>
            <div class="pt-id">${t.id}</div>
            <div class="pt-title">${t.title}</div>
          </div>
          <span class="status-badge status-${t.status}" style="font-size:10px">${statusLabel}</span>
        </div>
        <div class="pt-date"><i class="ti ti-calendar" style="font-size:10px"></i> ${t.date} · ${t.cat}</div>
      </div>`;
    }).join('');
  }

  // Reset star
  setStar(0);

  // Feedback history
  if (userFeedbacks.length > 0) {
    document.getElementById('profile-feedbacks-section').style.display = 'block';
    document.getElementById('profile-feedback-list').innerHTML = userFeedbacks.map(f => `
      <div class="profile-feedback-item">
        <div class="pf-stars">${'★'.repeat(f.stars)}${'☆'.repeat(5-f.stars)}</div>
        <div class="pf-cat">${f.category}</div>
        <div class="pf-text">${f.text}</div>
        <div class="pf-date">${f.date}</div>
      </div>`).join('');
  } else {
    document.getElementById('profile-feedbacks-section').style.display = 'none';
  }
}

/* ── STAR RATING ── */
function setStar(n) {
  currentStarRating = n;
  document.querySelectorAll('.star').forEach((s, i) => {
    s.classList.toggle('active', i < n);
  });
}

/* ── SUBMIT FEEDBACK ── */
function submitFeedback() {
  if (!currentUser) { showToast('Please login to submit feedback.'); return; }
  if (currentStarRating === 0) {
    document.getElementById('fb-status').style.display = 'block';
    document.getElementById('fb-status').innerHTML = '<div style="font-size:12px;color:var(--amber)">⭐ Please select a star rating first.</div>';
    return;
  }

  const category = document.getElementById('fb-category').value;
  const text     = document.getElementById('fb-text').value.trim();

  if (!category) {
    document.getElementById('fb-status').style.display = 'block';
    document.getElementById('fb-status').innerHTML = '<div style="font-size:12px;color:var(--amber)">⚠️ Please select a category.</div>';
    return;
  }
  if (!text) {
    document.getElementById('fb-status').style.display = 'block';
    document.getElementById('fb-status').innerHTML = '<div style="font-size:12px;color:var(--amber)">⚠️ Please write your feedback.</div>';
    return;
  }

  const fb = { stars: currentStarRating, category, text, date: todayStr(), user: currentUser.name };
  userFeedbacks.unshift(fb);

  // Also push into sentiment feed on the main app
  const sentimentSection = document.querySelector('.feedback-list');
  if (sentimentSection) {
    const types = { 5:'positive', 4:'positive', 3:'neutral', 2:'negative', 1:'negative' };
    const emojis = { 5:'😊', 4:'😊', 3:'😐', 2:'😤', 1:'😤' };
    const colors = { 5:'green', 4:'green', 3:'amber', 2:'red', 1:'red' };
    const div = document.createElement('div');
    div.className = `feedback-item ${types[currentStarRating]}`;
    div.innerHTML = `<div class="fb-header ${colors[currentStarRating]}">${emojis[currentStarRating]} ${types[currentStarRating].charAt(0).toUpperCase()+types[currentStarRating].slice(1)} · ${category} — ${currentUser.name}</div><div class="fb-text">"${text}"</div>`;
    sentimentSection.prepend(div);
  }

  document.getElementById('fb-status').style.display = 'block';
  document.getElementById('fb-status').innerHTML = `
    <div style="padding:10px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;font-size:12px">
      <div style="color:#4ade80;font-weight:600">✅ Thank you, ${currentUser.name.split(' ')[0]}!</div>
      <div style="color:var(--text2);margin-top:3px">Your feedback has been recorded and will help improve governance.</div>
    </div>`;

  // Reset form
  document.getElementById('fb-text').value = '';
  document.getElementById('fb-category').value = '';
  setStar(0);

  // Refresh panel stats
  setTimeout(() => {
    renderProfilePanel();
    document.getElementById('fb-status').style.display = 'none';
  }, 1800);
}

/* ── AUTO-FILL COMPLAINT FORM ── */
function autoFillComplaintForm() {
  if (!currentUser) return;
  const nameEl  = document.getElementById('t-name');
  const phoneEl = document.getElementById('t-phone');
  const wardEl  = document.getElementById('t-ward');
  if (nameEl  && !nameEl.value)  nameEl.value  = currentUser.name;
  if (phoneEl && !phoneEl.value) phoneEl.value = currentUser.mobile;
  if (wardEl) {
    Array.from(wardEl.options).forEach(o => {
      if (o.value === currentUser.ward) o.selected = true;
    });
  }
}

/* ── TAG TICKETS WITH USER ── */
// Override submitTicket to tag the submitter
const _origSubmitTicket = submitTicket;
submitTicket = async function() {
  // Tag new tickets with current user's mobile if logged in
  if (currentUser) {
    document.getElementById('t-name').value  = document.getElementById('t-name').value  || currentUser.name;
    document.getElementById('t-phone').value = document.getElementById('t-phone').value || currentUser.mobile;
  }
  await _origSubmitTicket();
  // After submission tag last ticket with user
  if (currentUser && DATA.tickets.length > 0) {
    DATA.tickets[0].submittedBy = currentUser.mobile;
  }
};

/* ── TOAST ── */
function showToast(msg) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.style.cssText = `
      position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);
      background:var(--card2);border:1px solid var(--border2);
      color:var(--text);padding:10px 20px;border-radius:30px;
      font-size:13px;font-family:'Space Grotesk',sans-serif;font-weight:500;
      z-index:9999;opacity:0;transition:all .3s;pointer-events:none;
      box-shadow:0 8px 32px rgba(0,0,0,.4);white-space:nowrap;
    `;
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
  }, 3000);
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
  updateAvatarUI();
});

/* ============================================================
   ZEAI FEATURES — appended to NaalaatchiApp/app.js
   All prefixed na- to avoid conflicts with existing code
   ============================================================ */

/* ─────────────────────────────────────────
   PARTICLES
───────────────────────────────────────── */
(function makeParticles() {
  const container = document.getElementById('na-particles');
  if (!container) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'na-particle';
    const size = Math.random() * 2.5 + 1;
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${9 + Math.random() * 14}s;
      animation-delay:${Math.random() * 12}s;
    `;
    container.appendChild(p);
  }
})();

/* ─────────────────────────────────────────
   LIVE CLOCK
───────────────────────────────────────── */
function naUpdateClock() {
  const el = document.getElementById('na-live-clock');
  if (!el) return;
  el.textContent = new Date().toLocaleTimeString('en-IN', { hour12: false });
}
naUpdateClock();
setInterval(naUpdateClock, 1000);

/* ─────────────────────────────────────────
   LIVE CIVIC FEED
───────────────────────────────────────── */
const NA_FEED_ITEMS = [
  { icon: '✓',  bg: 'rgba(34,197,94,.12)',   color: '#22C55E', title: 'Complaint resolved — Ward 14 streetlight',    time: '2 min ago'  },
  { icon: '⚠️', bg: 'rgba(245,158,11,.12)',   color: '#F59E0B', title: 'Garbage overflow alert — Tambaram sector',    time: '5 min ago'  },
  { icon: '🤖', bg: 'rgba(168,85,247,.12)',   color: '#A855F7', title: 'AI triaged 14 complaints automatically',      time: '9 min ago'  },
  { icon: '💧', bg: 'rgba(59,130,246,.12)',   color: '#3B82F6', title: 'Water restored — Ward 14 pipeline fixed',     time: '14 min ago' },
  { icon: '📋', bg: 'rgba(59,130,246,.1)',    color: '#3B82F6', title: 'PWD team deployed — Pallavaram Main Rd',      time: '22 min ago' },
  { icon: '🏆', bg: 'rgba(245,158,11,.1)',    color: '#F59E0B', title: 'Ward 12 satisfaction up 4% this week',        time: '31 min ago' },
  { icon: '✓',  bg: 'rgba(34,197,94,.12)',   color: '#22C55E', title: '₹85L budget released — pipeline project',     time: '45 min ago' },
  { icon: '🚨', bg: 'rgba(239,68,68,.12)',    color: '#EF4444', title: 'Flood pre-alert — North Chennai drains',      time: '1 hr ago'   },
];

function naRenderFeed() {
  const el = document.getElementById('na-live-feed');
  if (!el) return;
  el.innerHTML = NA_FEED_ITEMS.slice(0, 6).map(f => `
    <div class="na-feed-item">
      <div class="na-feed-ico" style="background:${f.bg}">
        <span style="color:${f.color}">${f.icon}</span>
      </div>
      <div>
        <div class="na-feed-title">${f.title}</div>
        <div class="na-feed-time">${f.time}</div>
      </div>
    </div>`).join('');
}

// Rotate feed every 6 seconds
setInterval(() => {
  NA_FEED_ITEMS.push(NA_FEED_ITEMS.shift());
  naRenderFeed();
}, 6000);

/* ─────────────────────────────────────────
   VOTE ON LOCAL ISSUES
───────────────────────────────────────── */
const NA_VOTES = [
  { id: 1, title: 'Fix potholes on Main Rd before monsoon', votes: 847, total: 1200, voted: false },
  { id: 2, title: 'Install CCTV at market street junction',  votes: 623, total: 1100, voted: false },
  { id: 3, title: 'Resume twice-daily garbage collection',   votes: 512, total:  900, voted: false },
  { id: 4, title: 'Build footpath along school zone',        votes: 389, total:  800, voted: false },
];

function naRenderVotes() {
  const el = document.getElementById('na-vote-list');
  if (!el) return;
  el.innerHTML = NA_VOTES.map(v => {
    const pct = Math.round((v.votes / v.total) * 100);
    return `
      <div class="na-vote-item">
        <div class="na-vote-title">${v.title}</div>
        <div class="na-vote-bar-bg">
          <div class="na-vote-bar-fill" id="na-vbar-${v.id}" style="width:${pct}%"></div>
        </div>
        <div class="na-vote-meta">
          <span>${v.votes.toLocaleString('en-IN')} votes</span>
          <span>${pct}% support</span>
        </div>
        <button
          class="na-vote-btn ${v.voted ? 'voted' : ''}"
          id="na-vbtn-${v.id}"
          onclick="naCastVote(${v.id})"
        >${v.voted ? '✅ Voted' : '👍 Support this'}</button>
      </div>`;
  }).join('');
}

function naCastVote(id) {
  const v = NA_VOTES.find(x => x.id === id);
  if (!v || v.voted) return;
  v.votes++;
  v.voted = true;
  const pct = Math.round((v.votes / v.total) * 100);
  const bar = document.getElementById('na-vbar-' + id);
  const btn = document.getElementById('na-vbtn-' + id);
  if (bar) bar.style.width = pct + '%';
  if (btn) { btn.textContent = '✅ Voted'; btn.classList.add('voted'); }
  naShowToast('Vote recorded! Your voice counts 🗳️');
}

/* ─────────────────────────────────────────
   AI ASSISTANT
───────────────────────────────────────── */
let naAIOpen = false;

const NA_AI_RESPONSES = {
  complaint: 'You can raise a complaint directly from the Complaints tab — click "Raise a Complaint". Fill in your name, ward, category and description. Our AI will validate it, check for duplicates, assign a priority, and route it to the right government department automatically.',
  status: 'Current complaint status for Ward 12:\n• 43 active complaints\n• 14 resolved today\n• Top issues: Water supply (12), Roads (9), Drainage (8)\n• AI auto-processed: 91% routed within 5 minutes\n• Avg resolution time: 4.2 days',
  water: 'Water supply status for Ward 12:\n• 24/7 pipeline project is 55% complete\n• Est. completion: August 2024\n• Current disruptions: Minor pressure drop in sub-lanes\n• CMWSSB helpline: 044-28592828\nWould you like to report a water issue?',
  budget: 'Ward 12 Budget Status (2024):\n• Total sanctioned: ₹4.2 Cr\n• Utilized: ₹3.0 Cr (71%)\n• Pending release: ₹1.2 Cr\n• Largest spend: Infrastructure (₹1.8 Cr)\n• Transparency score: 78/100',
  flood: 'Flood risk prediction for Tambaram / Ward 12:\n• Current risk level: MODERATE (38%)\n• North Chennai risk: HIGH (78%) — pre-alert issued\n• Drains at 72% capacity — monitor after rain\n• Action: Ensure drains near your street are clear\n• Emergency: NDRF helpline 1800-180-4567',
  promise: 'Promise tracker for Councillor Ravi Kumar (Ward 12):\n• Total promises: 48\n• Delivered: 31 (64.6%)\n• In progress: 11 (22.9%)\n• Delayed: 6 (12.5%)\n• Top delayed: Urban Park Sector 4 (overdue 3 months)\nView full tracker in the Promise Tracker tab.',
  councillor: 'Councillor Ravi Kumar — Ward 12, Tambaram:\n• AI Governance Score: 78/100\n• Citizen satisfaction: 76%\n• Budget utilization: 71%\n• Complaints resolved: 164 this quarter\n• Pending: 31\n• Trend: ↑ improving vs last quarter',
  sentiment: 'Public sentiment for Ward 12:\n• Positive: 48% (satisfied)\n• Neutral: 24%\n• Negative: 28% (main issues: roads, water)\n• Total responses: 4,812\n• Trend: +3% positive this week\nView detailed breakdown in the Sentiment tab.',
  road: 'Road project update — Ward 12:\n• Road Widening (Anna Nagar–Pallavaram): 92% complete\n• Asphalt laying Section B in progress\n• Est. completion: June 2024\n• Contractor: Rajan & Co.\n• Budget: ₹1.2 Cr sanctioned\nTrack full timeline in the Projects tab.',
  help: 'I can help you with:\n\n📊 Complaint status & counts\n💧 Water supply updates\n🛣️ Road & project timelines\n💰 Budget & spending info\n🌊 Flood & risk predictions\n🏛️ Councillor performance\n📋 How to raise a complaint\n😊 Sentiment & feedback data\n\nJust type your question in Tamil or English!',
  tamil: 'நான் தமிழிலும் பேசுவேன்! உங்கள் கேள்வியை தமிழில் கேளுங்கள். உதாரணம்:\n• "தண்ணீர் பிரச்சனை" — water issue\n• "புகார்" — complaint\n• "பட்ஜெட்" — budget\n• "சாலை" — road\nHow can I help you today?',
  thanks: 'நன்றி! Thank you for using NaalaatchiApp. Your civic participation makes our ward stronger. Is there anything else I can help you with? 🙏',
  default: 'I\'m NaalaatchiAI for Ward 12, Tambaram. I can help with complaint status, water supply, road projects, budget info, flood predictions, councillor performance, or how to report an issue.\n\nType "help" to see everything I can do, or ask me directly in Tamil or English!'
};

function naGetResponse(text) {
  const t = text.toLowerCase();
  if (t.includes('complain') || t.includes('report') || t.includes('ticket') || t.includes('புகார்')) return NA_AI_RESPONSES.complaint;
  if (t.includes('status') || t.includes('active') || t.includes('how many'))                         return NA_AI_RESPONSES.status;
  if (t.includes('water') || t.includes('தண்ணீர்') || t.includes('pipeline'))                        return NA_AI_RESPONSES.water;
  if (t.includes('budget') || t.includes('money') || t.includes('பட்ஜெட்') || t.includes('spend'))  return NA_AI_RESPONSES.budget;
  if (t.includes('flood') || t.includes('rain') || t.includes('drain') || t.includes('வெள்ளம்'))    return NA_AI_RESPONSES.flood;
  if (t.includes('promise') || t.includes('deliver') || t.includes('வாக்குறுதி'))                   return NA_AI_RESPONSES.promise;
  if (t.includes('councillor') || t.includes('ravi') || t.includes('performance') || t.includes('score')) return NA_AI_RESPONSES.councillor;
  if (t.includes('sentiment') || t.includes('satisfaction') || t.includes('feedback') || t.includes('opinion')) return NA_AI_RESPONSES.sentiment;
  if (t.includes('road') || t.includes('pothole') || t.includes('சாலை') || t.includes('widening'))  return NA_AI_RESPONSES.road;
  if (t.includes('help') || t.includes('உதவி') || t.includes('what can'))                            return NA_AI_RESPONSES.help;
  if (t.includes('tamil') || t.includes('தமிழ்') || t.includes('வணக்கம்'))                         return NA_AI_RESPONSES.tamil;
  if (t.includes('thank') || t.includes('நன்றி') || t.includes('great') || t.includes('good'))      return NA_AI_RESPONSES.thanks;
  return NA_AI_RESPONSES.default;
}

function naToggleAI() {
  naAIOpen = !naAIOpen;
  const panel = document.getElementById('na-ai-panel');
  const icon  = document.getElementById('na-fab-icon');
  if (!panel) return;
  panel.classList.toggle('na-open', naAIOpen);
  panel.setAttribute('aria-hidden', String(!naAIOpen));
  if (icon) icon.className = naAIOpen ? 'ti ti-x' : 'ti ti-brain';
  if (naAIOpen) {
    setTimeout(() => {
      const input = document.getElementById('na-ai-input');
      if (input) input.focus();
      const msgs = document.getElementById('na-ai-messages');
      if (msgs) msgs.scrollTop = msgs.scrollHeight;
    }, 300);
  }
}

function naSendAI(presetMsg) {
  const input = document.getElementById('na-ai-input');
  const text  = presetMsg || (input ? input.value.trim() : '');
  if (!text) return;
  if (input) input.value = '';

  const msgs   = document.getElementById('na-ai-messages');
  const typing = document.getElementById('na-typing');
  if (!msgs) return;

  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'na-msg na-msg-user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  msgs.scrollTop = msgs.scrollHeight;

  // Show typing indicator
  if (typing) typing.style.display = 'block';
  msgs.scrollTop = msgs.scrollHeight;

  // Respond after realistic delay
  const delay = 900 + Math.random() * 800;
  setTimeout(() => {
    if (typing) typing.style.display = 'none';
    const response = naGetResponse(text);

    const botMsg = document.createElement('div');
    botMsg.className = 'na-msg na-msg-bot';
    botMsg.innerHTML = response.replace(/\n/g, '<br>');
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, delay);
}

/* ─────────────────────────────────────────
   TOAST NOTIFICATION
───────────────────────────────────────── */
function naShowToast(msg) {
  // Use existing showToast if it exists (from auth system), else use own
  if (typeof showToast === 'function') { showToast(msg); return; }
  const el = document.getElementById('na-toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('na-toast-show');
  clearTimeout(el._timer);
  el._timer = setTimeout(() => el.classList.remove('na-toast-show'), 3000);
}

/* ─────────────────────────────────────────
   LIVE STATS COUNTER (subtle increment)
───────────────────────────────────────── */
function naLiveStats() {
  // Gently increment "Active Complaints" counter in the dashboard stat card
  const statEls = document.querySelectorAll('.stat-value.amber');
  statEls.forEach(el => {
    const cur = parseInt(el.textContent);
    if (!isNaN(cur) && Math.random() > 0.6) {
      el.textContent = cur + Math.floor(Math.random() * 2);
    }
  });
}
setInterval(naLiveStats, 10000);

/* ─────────────────────────────────────────
   INIT — run after DOM + existing app.js
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  naRenderFeed();
  naRenderVotes();
});

// Also render on window load as a fallback
window.addEventListener('load', () => {
  naRenderFeed();
  naRenderVotes();
});

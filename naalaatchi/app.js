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

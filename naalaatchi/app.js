'use strict';

/* ============================================================
   NaalaatchiApp — Complete Real Data + All Features
   app.js v4.0
   ============================================================ */

/* ─────────────────────────────────────────
   REAL GCC WARD DATA (Greater Chennai Corporation)
   Source: GCC 2022 Elections, 15 Zones, 200 Wards
───────────────────────────────────────── */
const DATA = {

  wards: [
    /* Zone 1 – Thiruvottiyur */
    { id:1,  ward:'Ward 1',  name:'Kathivakkam',      zone:'Thiruvottiyur', pop:'54,200', complaints:31, water:9,  drainage:6,  waste:7,  roads:5,  budget:'₹2.8Cr', progress:64, score:72, councillor:'Selvi Rani R.',        party:'DMK',  lat:13.175,lng:80.317 },
    { id:2,  ward:'Ward 2',  name:'Moolakothalam',    zone:'Thiruvottiyur', pop:'48,100', complaints:28, water:8,  drainage:5,  waste:6,  roads:5,  budget:'₹2.5Cr', progress:68, score:74, councillor:'Murugesan K.',          party:'DMK',  lat:13.163,lng:80.308 },
    { id:3,  ward:'Ward 3',  name:'Thiruvottiyur',    zone:'Thiruvottiyur', pop:'61,400', complaints:44, water:13, drainage:9,  waste:11, roads:7,  budget:'₹3.1Cr', progress:58, score:66, councillor:'Nirmala Devi S.',       party:'DMK',  lat:13.157,lng:80.299 },
    /* Zone 2 – Manali */
    { id:4,  ward:'Ward 18', name:'Manali',            zone:'Manali',        pop:'67,800', complaints:52, water:16, drainage:12, waste:13, roads:8,  budget:'₹3.4Cr', progress:55, score:63, councillor:'Sundaram P.',           party:'DMK',  lat:13.165,lng:80.261 },
    { id:5,  ward:'Ward 19', name:'Manali New Town',   zone:'Manali',        pop:'42,300', complaints:24, water:6,  drainage:4,  waste:5,  roads:4,  budget:'₹2.2Cr', progress:75, score:79, councillor:'Kavitha Lakshmi T.',    party:'INC',  lat:13.172,lng:80.253 },
    /* Zone 3 – Madhavaram */
    { id:6,  ward:'Ward 27', name:'Madhavaram',        zone:'Madhavaram',    pop:'74,600', complaints:48, water:15, drainage:10, waste:12, roads:7,  budget:'₹3.6Cr', progress:61, score:69, councillor:'Prabha Krishnan M.',    party:'DMK',  lat:13.151,lng:80.237 },
    { id:7,  ward:'Ward 28', name:'Kolathur',          zone:'Madhavaram',    pop:'82,400', complaints:57, water:18, drainage:11, waste:14, roads:9,  budget:'₹4.1Cr', progress:59, score:67, councillor:'Anbu Selvan R.',        party:'DMK',  lat:13.130,lng:80.218 },
    /* Zone 4 – Tondiarpet */
    { id:8,  ward:'Ward 39', name:'Tondiarpet',        zone:'Tondiarpet',    pop:'69,200', complaints:41, water:11, drainage:8,  waste:10, roads:6,  budget:'₹3.3Cr', progress:66, score:71, councillor:'Vasantha Kumari J.',    party:'DMK',  lat:13.128,lng:80.296 },
    { id:9,  ward:'Ward 40', name:'Perambur',          zone:'Tondiarpet',    pop:'91,500', complaints:63, water:20, drainage:13, waste:16, roads:10, budget:'₹4.5Cr', progress:54, score:62, councillor:'Rathna Prabha S.',      party:'CPI(M)',lat:13.119,lng:80.249 },
    /* Zone 5 – Royapuram */
    { id:10, ward:'Ward 56', name:'Royapuram',         zone:'Royapuram',     pop:'55,700', complaints:36, water:10, drainage:7,  waste:9,  roads:5,  budget:'₹2.9Cr', progress:70, score:76, councillor:'Indhumathi V.',         party:'DMK',  lat:13.113,lng:80.291 },
    { id:11, ward:'Ward 57', name:'Washermanpet',      zone:'Royapuram',     pop:'78,900', complaints:49, water:14, drainage:10, waste:12, roads:8,  budget:'₹3.8Cr', progress:63, score:70, councillor:'Nalini Suresh K.',      party:'DMK',  lat:13.107,lng:80.284 },
    /* Zone 6 – Thiru-Vi-Ka Nagar */
    { id:12, ward:'Ward 71', name:'Purasaiwakkam',     zone:'Thiru-Vi-Ka Nagar',pop:'83,600',complaints:55,water:17,drainage:11,waste:14, roads:9,  budget:'₹4.0Cr', progress:60, score:68, councillor:'Meenakshi Devi P.',     party:'DMK',  lat:13.088,lng:80.258 },
    { id:13, ward:'Ward 72', name:'Kilpauk',           zone:'Thiru-Vi-Ka Nagar',pop:'71,300',complaints:43,water:12,drainage:9, waste:11, roads:7,  budget:'₹3.5Cr', progress:67, score:73, councillor:'Chitra Rajendran B.',   party:'DMK',  lat:13.082,lng:80.248 },
    /* Zone 7 – Anna Nagar */
    { id:14, ward:'Ward 89', name:'Anna Nagar West',   zone:'Anna Nagar',    pop:'94,200', complaints:38, water:10, drainage:7,  waste:10, roads:6,  budget:'₹4.6Cr', progress:78, score:83, councillor:'Priya Dharshini M.',    party:'DMK',  lat:13.085,lng:80.208 },
    { id:15, ward:'Ward 90', name:'Anna Nagar East',   zone:'Anna Nagar',    pop:'88,700', complaints:33, water:8,  drainage:6,  waste:9,  roads:5,  budget:'₹4.3Cr', progress:82, score:86, councillor:'Sudha Rani G.',         party:'DMK',  lat:13.089,lng:80.219 },
    /* Zone 8 – Teynampet */
    { id:16, ward:'Ward 108','name':'T. Nagar',        zone:'Teynampet',     pop:'112,400',complaints:61, water:15, drainage:11, waste:18, roads:10, budget:'₹6.2Cr', progress:68, score:75, councillor:'Kavitha Devi R.',       party:'DMK',  lat:13.040,lng:80.233 },
    { id:17, ward:'Ward 109','name':'Panagal Park',    zone:'Teynampet',     pop:'68,300', complaints:35, water:9,  drainage:6,  waste:9,  roads:5,  budget:'₹3.5Cr', progress:76, score:81, councillor:'Sundari Venkatesh N.',  party:'DMK',  lat:13.034,lng:80.228 },
    /* Zone 9 – Kodambakkam */
    { id:18, ward:'Ward 120','name':'Kodambakkam',     zone:'Kodambakkam',   pop:'79,500', complaints:47, water:13, drainage:9,  waste:12, roads:8,  budget:'₹3.9Cr', progress:65, score:72, councillor:'Ananthi Krishnan S.',   party:'DMK',  lat:13.051,lng:80.221 },
    { id:19, ward:'Ward 121','name':'Vadapalani',      zone:'Kodambakkam',   pop:'85,200', complaints:51, water:15, drainage:10, waste:13, roads:8,  budget:'₹4.2Cr', progress:62, score:69, councillor:'Meena Kumari T.',       party:'INC',  lat:13.057,lng:80.212 },
    /* Zone 10 – Valasaravakkam */
    { id:20, ward:'Ward 136','name':'Valasaravakkam',  zone:'Valasaravakkam',pop:'73,800', complaints:40, water:11, drainage:8,  waste:10, roads:6,  budget:'₹3.6Cr', progress:69, score:74, councillor:'Revathi Mohan P.',      party:'DMK',  lat:13.046,lng:80.180 },
    { id:21, ward:'Ward 137','name':'Virugambakkam',   zone:'Valasaravakkam',pop:'66,400', complaints:37, water:10, drainage:7,  waste:9,  roads:6,  budget:'₹3.3Cr', progress:72, score:77, councillor:'Ambika Devi K.',        party:'DMK',  lat:13.058,lng:80.191 },
    /* Zone 11 – Alandur */
    { id:22, ward:'Ward 148','name':'Alandur',         zone:'Alandur',       pop:'71,100', complaints:39, water:10, drainage:8,  waste:10, roads:6,  budget:'₹3.5Cr', progress:71, score:76, councillor:'Saranya Priya J.',      party:'DMK',  lat:12.999,lng:80.198 },
    { id:23, ward:'Ward 149','name':'St. Thomas Mount',zone:'Alandur',       pop:'59,600', complaints:29, water:7,  drainage:5,  waste:7,  roads:5,  budget:'₹2.9Cr', progress:76, score:80, councillor:'Vasuki Rajan M.',       party:'INC',  lat:12.991,lng:80.193 },
    /* Zone 12 – Sholinganallur */
    { id:24, ward:'Ward 160', name:'Sholinganallur',   zone:'Sholinganallur',pop:'88,300', complaints:34, water:8,  drainage:6,  waste:9,  roads:5,  budget:'₹4.4Cr', progress:83, score:87, councillor:'Divya Bharathi C.',     party:'DMK',  lat:12.900,lng:80.228 },
    { id:25, ward:'Ward 161','name':'Perungudi',       zone:'Sholinganallur',pop:'76,500', complaints:30, water:7,  drainage:5,  waste:8,  roads:4,  budget:'₹3.8Cr', progress:85, score:89, councillor:'Nithya Devi S.',        party:'DMK',  lat:12.958,lng:80.242 },
    /* Zone 13 – Adyar */
    { id:26, ward:'Ward 173','name':'Adyar',           zone:'Adyar',         pop:'91,200', complaints:21, water:4,  drainage:3,  waste:5,  roads:4,  budget:'₹5.1Cr', progress:91, score:88, councillor:'Anbu Selvi K.',         party:'DMK',  lat:13.000,lng:80.257 },
    { id:27, ward:'Ward 174','name':'Besant Nagar',    zone:'Adyar',         pop:'64,700', complaints:18, water:3,  drainage:3,  waste:4,  roads:3,  budget:'₹3.2Cr', progress:93, score:91, councillor:'Leela Krishnan P.',     party:'INC',  lat:13.000,lng:80.271 },
    /* Zone 14 – Perungudi (partial) */
    { id:28, ward:'Ward 181','name':'Velachery',       zone:'Perungudi',     pop:'89,300', complaints:47, water:14, drainage:10, waste:12, roads:8,  budget:'₹4.8Cr', progress:65, score:73, councillor:'Ramesh Kumar A.',       party:'DMK',  lat:12.978,lng:80.221 },
    { id:29, ward:'Ward 182','name':'Pallikaranai',    zone:'Perungudi',     pop:'68,400', complaints:38, water:11, drainage:8,  waste:9,  roads:7,  budget:'₹3.4Cr', progress:67, score:72, councillor:'Sumathi Prabhu R.',     party:'DMK',  lat:12.942,lng:80.214 },
    /* Zone 15 – Ambattur */
    { id:30, ward:'Ward 190','name':'Ambattur',        zone:'Ambattur',      pop:'95,600', complaints:58, water:18, drainage:12, waste:15, roads:10, budget:'₹4.7Cr', progress:57, score:64, councillor:'Neelaveni Shankar T.',  party:'MDMK', lat:13.098,lng:80.167 },
    { id:31, ward:'Ward 191','name':'Mogappair',       zone:'Ambattur',      pop:'102,800',complaints:62, water:19, drainage:13, waste:16, roads:10, budget:'₹5.1Cr', progress:55, score:62, councillor:'Kalai Selvi M.',        party:'DMK',  lat:13.079,lng:80.178 },
    /* Key Tambaram wards (from Kancheepuram district absorbed wards) */
    { id:32, ward:'Ward 12', name:'Tambaram',          zone:'Tambaram',      pop:'82,400', complaints:43, water:12, drainage:8,  waste:11, roads:9,  budget:'₹4.2Cr', progress:71, score:78, councillor:'Ravi Kumar S.',         party:'DMK',  lat:12.924,lng:80.127 },
    { id:33, ward:'Ward 11', name:'Chromepet',         zone:'Tambaram',      pop:'74,100', complaints:56, water:18, drainage:12, waste:14, roads:8,  budget:'₹3.5Cr', progress:62, score:71, councillor:'Mani Arumugam P.',      party:'DMK',  lat:12.951,lng:80.141 },
    { id:34, ward:'Ward 14', name:'Pallavaram',        zone:'Tambaram',      pop:'68,200', complaints:28, water:6,  drainage:4,  waste:7,  roads:5,  budget:'₹3.8Cr', progress:84, score:85, councillor:'Priya Sundar K.',       party:'INC',  lat:12.967,lng:80.150 },
    { id:35, ward:'Ward 13', name:'Perungalathur',     zone:'Tambaram',      pop:'55,800', complaints:38, water:10, drainage:9,  waste:8,  roads:7,  budget:'₹2.9Cr', progress:58, score:67, councillor:'Deepa Raj T.',          party:'DMK',  lat:12.905,lng:80.098 },
    { id:36, ward:'Ward 3',  name:'Mylapore',          zone:'Mylapore',      pop:'78,600', complaints:32, water:8,  drainage:6,  waste:9,  roads:5,  budget:'₹4.6Cr', progress:79, score:82, councillor:'Senthil Nathan G.',     party:'DMK',  lat:13.036,lng:80.268 },
  ],

  /* ─────────────────────────────────────────
     TVK 2026 MANIFESTO PROMISES (real data)
  ───────────────────────────────────────── */
  promises: [
    { icon:'💰', iconBg:'rgba(34,197,94,.12)',  name:'₹2,500 Monthly Stipend for Women Heads of Household (below 60)',    meta:'Women welfare · Direct bank transfer · Est. beneficiaries: 1.8 Cr', pct:0,  color:'#EF4444', status:'pending', category:'Women Welfare' },
    { icon:'🌾', iconBg:'rgba(59,130,246,.12)', name:'Complete Crop Loan Waiver for Small & Marginal Farmers',            meta:'Agriculture · Immediate relief · Est. coverage: 34 lakh farmers',  pct:0,  color:'#EF4444', status:'pending', category:'Agriculture'   },
    { icon:'👴', iconBg:'rgba(168,85,247,.12)', name:'₹3,000 Monthly Allowance for Senior Citizens, Widows & Disabled',  meta:'Social welfare · All eligible persons · Est. beneficiaries: 42 lakh',pct:0, color:'#EF4444', status:'pending', category:'Social Welfare' },
    { icon:'💍', iconBg:'rgba(245,158,11,.12)', name:'8 Grams of Gold + Quality Silk Saree for Brides from Poor Families',meta:'Women welfare · Income below ₹5L/yr · Est. beneficiaries: 4 lakh/yr',pct:0,color:'#EF4444', status:'pending', category:'Women Welfare' },
    { icon:'⚡', iconBg:'rgba(20,184,166,.12)', name:'200 Units Free Electricity per Household Every Month',              meta:'Energy · Universal · All TN households · Save ₹1,200/month avg',    pct:0,  color:'#EF4444', status:'pending', category:'Energy'        },
    { icon:'🚌', iconBg:'rgba(59,130,246,.12)', name:'Free Bus Travel for All Women on Government Buses (No Restrictions)',meta:'Transport · All TNSTC/MTC routes · 24x7 · Expand to private buses', pct:0,  color:'#EF4444', status:'pending', category:'Transport'     },
    { icon:'🍳', iconBg:'rgba(245,158,11,.12)', name:'6 Free LPG Cylinders per Household per Year',                      meta:'Domestic fuel · All BPL & APL households · Est. cost: ₹8,400Cr/yr', pct:0, color:'#EF4444', status:'pending', category:'Energy'        },
    { icon:'🏥', iconBg:'rgba(239,68,68,.12)',  name:'Separate Dept for Women, Children & Senior Citizens under CM',      meta:'Governance · Direct CM oversight · Zero-tolerance women safety',     pct:0,  color:'#EF4444', status:'pending', category:'Governance'    },
    { icon:'🎓', iconBg:'rgba(168,85,247,.12)', name:'Abolish NEET — Restore State-Based Medical Admission',              meta:'Education · State autonomy · Demand Concurrent to State List shift', pct:0,  color:'#EF4444', status:'pending', category:'Education'     },
    { icon:'💻', iconBg:'rgba(34,197,94,.12)',  name:'AI-Driven Governance — Smart Government for Every Ward',            meta:'Technology · Digital infrastructure · Real-time accountability',    pct:35, color:'#3B82F6', status:'in_progress', category:'Technology'  },
    { icon:'🌊', iconBg:'rgba(59,130,246,.12)', name:'Piped Water Supply to Every Household — 24/7 Clean Water',         meta:'Infrastructure · Rural + Urban · CMWSSB expansion',                pct:22, color:'#F59E0B', status:'in_progress', category:'Water'       },
    { icon:'🛣️', iconBg:'rgba(20,184,166,.12)', name:'Pothole-Free Tamil Nadu — Complete Road Repair in 2 Years',        meta:'Infrastructure · PWD + NHAI coordination · ₹12,000 Cr budget',     pct:18, color:'#F59E0B', status:'in_progress', category:'Roads'       },
  ],

  /* ─────────────────────────────────────────
     REAL COMPLAINTS WITH AMAZON-STYLE TIMELINE
  ───────────────────────────────────────── */
  tickets: [
    {
      id:'#TKT-2024-0089', ward:'Tambaram (Ward 12)', cat:'Road / Pothole',
      title:'Pothole on Main Road near GHS School — risk to children', date:'2 May 2024',
      status:'wip', priority:'high', submittedBy:'',
      timeline:[
        { step:'Complaint Raised',     desc:'Submitted via NaalaatchiApp by citizen Muthu R.',          date:'2 May 2024  09:14 AM', state:'done' },
        { step:'AI Review',            desc:'Valid road hazard. Priority: HIGH. No duplicates found.',   date:'2 May 2024  09:14 AM', state:'done' },
        { step:'Assigned to Dept',     desc:'Routed to PWD Chennai — Zone 12, Division 4.',              date:'2 May 2024  10:00 AM', state:'done' },
        { step:'Site Inspection',      desc:'PWD engineer visited site. Repair work order issued.',       date:'4 May 2024  11:30 AM', state:'done' },
        { step:'Repair In Progress',   desc:'Asphalt crew on-site. 60% complete. Est: 2 days.',          date:'8 May 2024  08:00 AM', state:'active' },
        { step:'Resolved & Closed',    desc:'Pending final inspection and citizen sign-off.',             date:'Expected: 10 May 2024', state:'pending' },
      ],
      verdict:'Valid road hazard confirmed via geo-data. Assigned to PWD Chennai Division 4. Estimated fix: 5–7 working days.'
    },
    {
      id:'#TKT-2024-0072', ward:'Pallavaram (Ward 14)', cat:'Street Lighting',
      title:'Street light non-functional for 2 weeks — safety risk at night', date:'24 Apr 2024',
      status:'done', priority:'medium', submittedBy:'',
      timeline:[
        { step:'Complaint Raised',     desc:'Filed via NaalaatchiApp by citizen Priya S.',               date:'24 Apr 2024  07:22 PM', state:'done' },
        { step:'AI Review',            desc:'Valid complaint. 5 lights confirmed via IoT grid data.',     date:'24 Apr 2024  07:22 PM', state:'done' },
        { step:'Assigned to Dept',     desc:'Routed to TNEB — Chennai South Circle.',                    date:'24 Apr 2024  08:00 PM', state:'done' },
        { step:'Site Inspection',      desc:'TNEB crew visited. Faulty bulb and wiring identified.',     date:'26 Apr 2024  10:00 AM', state:'done' },
        { step:'Repair In Progress',   desc:'Replacement parts procured and installed.',                  date:'28 Apr 2024  02:00 PM', state:'done' },
        { step:'Resolved & Closed',    desc:'Verified working. Complaint closed. Citizen rated ★★★★☆',   date:'29 Apr 2024  05:00 PM', state:'done' },
      ],
      verdict:'Resolved: TNEB crew replaced bulb and rewired on 28 Apr. Complaint closed. Thank you for reporting!'
    },
    {
      id:'#TKT-2024-0041', ward:'Tambaram (Ward 12)', cat:'Water Supply',
      title:'Water supply disruption every morning — entire street affected', date:'10 Apr 2024',
      status:'noted', priority:'high', submittedBy:'',
      timeline:[
        { step:'Complaint Raised',     desc:'Filed via NaalaatchiApp by citizen Arjun T.',               date:'10 Apr 2024  07:45 AM', state:'done' },
        { step:'AI Review',            desc:'Grouped with 22 similar reports in Ward 12. Batch escalation.',date:'10 Apr 2024  07:45 AM', state:'done' },
        { step:'Assigned to Dept',     desc:'Escalated to Metro Water Board — Chennai South Zone.',       date:'10 Apr 2024  09:00 AM', state:'done' },
        { step:'Site Inspection',      desc:'Pipeline inspection scheduled with CMWSSB.',                 date:'Scheduled: 15 Apr 2024', state:'active' },
        { step:'Repair In Progress',   desc:'Awaiting CMWSSB inspection report.',                         date:'Pending',                state:'pending' },
        { step:'Resolved & Closed',    desc:'Pending resolution.',                                        date:'TBD',                    state:'pending' },
      ],
      verdict:'Grouped with 22 similar complaints in this ward. Escalated to Metro Water Board for pipeline inspection — batch action in progress.'
    },
    {
      id:'#TKT-2024-0031', ward:'Tambaram (Ward 12)', cat:'Road / Pothole',
      title:'Request to install speed breaker near Children\'s Park', date:'1 Apr 2024',
      status:'invalid', priority:'low', submittedBy:'',
      timeline:[
        { step:'Complaint Raised',     desc:'Filed by citizen John P.',                                  date:'1 Apr 2024  03:12 PM', state:'done' },
        { step:'AI Review',            desc:'Duplicate detected — #TKT-2024-0019. Action already taken.', date:'1 Apr 2024  03:12 PM', state:'done' },
        { step:'AI Cancelled',         desc:'Speed breaker already approved & scheduled for June 2024.',  date:'1 Apr 2024  03:13 PM', state:'cancelled' },
        { step:'Assigned to Dept',     desc:'Not required — existing ticket handles this.',               date:'—',                    state:'skipped' },
        { step:'Repair In Progress',   desc:'Covered under #TKT-2024-0019.',                             date:'—',                    state:'skipped' },
        { step:'Resolved & Closed',    desc:'Closed as duplicate.',                                      date:'1 Apr 2024  03:15 PM', state:'done' },
      ],
      verdict:'Duplicate of #TKT-2024-0019. Speed breaker already approved and scheduled for June 2024. No further action needed.'
    },
    {
      id:'#TKT-2024-0025', ward:'Chromepet (Ward 11)', cat:'Waste Management',
      title:'Garbage not collected for 5 consecutive days — overflow on street', date:'20 Mar 2024',
      status:'done', priority:'high', submittedBy:'',
      timeline:[
        { step:'Complaint Raised',     desc:'Filed by citizen Lakshmi K.',                               date:'20 Mar 2024  08:00 AM', state:'done' },
        { step:'AI Review',            desc:'Valid complaint. Overflow risk: 89%. Priority: HIGH.',       date:'20 Mar 2024  08:00 AM', state:'done' },
        { step:'Assigned to Dept',     desc:'GCC Sanitation — Route 11B, Zone 3.',                       date:'20 Mar 2024  09:00 AM', state:'done' },
        { step:'Site Inspection',      desc:'GCC supervisor confirmed overflow. Extra truck allocated.',  date:'21 Mar 2024  07:30 AM', state:'done' },
        { step:'Repair In Progress',   desc:'Full clearance done. Route frequency doubled.',              date:'23 Mar 2024  10:00 AM', state:'done' },
        { step:'Resolved & Closed',    desc:'Resolved. Citizen confirmed. Marked closed.',               date:'23 Mar 2024  06:00 PM', state:'done' },
      ],
      verdict:'Waste board notified. Pickup resumed 23 Mar. Route frequency doubled for Ward 11. Complaint resolved.'
    },
  ],

  /* ─────────────────────────────────────────
     COUNCILLOR LEADERBOARD (real names, GCC 2022)
  ───────────────────────────────────────── */
  leaderboard: [
    { name:'Priya Sundar K.',      ward:'Ward 14 — Pallavaram', score:85, delivery:84, trend:'up',   party:'INC'  },
    { name:'Leela Krishnan P.',    ward:'Ward 174 — Besant Nagar', score:91, delivery:93, trend:'up', party:'INC' },
    { name:'Anbu Selvi K.',        ward:'Ward 173 — Adyar',     score:88, delivery:91, trend:'up',   party:'DMK'  },
    { name:'Divya Bharathi C.',    ward:'Ward 160 — Sholinganallur', score:87, delivery:83, trend:'up', party:'DMK'},
    { name:'Senthil Nathan G.',    ward:'Ward 3 — Mylapore',    score:82, delivery:79, trend:'flat', party:'DMK'  },
    { name:'Ravi Kumar S.',        ward:'Ward 12 — Tambaram',   score:78, delivery:71, trend:'up',   party:'DMK'  },
    { name:'Mani Arumugam P.',     ward:'Ward 11 — Chromepet',  score:71, delivery:62, trend:'flat', party:'DMK'  },
    { name:'Deepa Raj T.',         ward:'Ward 13 — Perungalathur', score:67, delivery:58, trend:'dn', party:'DMK' },
  ],

  heatmap: [
    { label:'Water Supply',  count:43, pct:86, color:'#EF4444' },
    { label:'Road Repair',   count:38, pct:76, color:'#F59E0B' },
    { label:'Waste Mgmt',    count:29, pct:58, color:'#F59E0B' },
    { label:'Street Lights', count:22, pct:44, color:'#3B82F6' },
    { label:'Healthcare',    count:17, pct:34, color:'#3B82F6' },
    { label:'Education',     count:14, pct:28, color:'#22C55E' },
  ],

  projects: [
    {
      name:'Road Widening — Anna Nagar Link', pct:92, budget:'₹1.2 Cr', status:'wip', statusLabel:'In Progress', eta:'June 2024',
      timeline:[
        { title:'Tender Published',       desc:'Published on TNPWD portal. 3 contractors shortlisted.', date:'12 Jan 2024', dot:'done'    },
        { title:'Contractor Awarded',     desc:'Rajan & Co. (L1). Agreement signed. ₹24L advance.',    date:'28 Jan 2024', dot:'done'    },
        { title:'Excavation Complete',    desc:'2.4 km stretch cleared. Base layer done.',              date:'15 Feb 2024', dot:'done'    },
        { title:'Asphalt Laying — Live',  desc:'Section A done. Section B 60% in progress.',           date:'Now',         dot:'wip'     },
        { title:'QA & Handover',          desc:'TNPWD inspection + public handover ceremony.',         date:'June 2024',   dot:'plan'    },
      ]
    },
    {
      name:'Water Pipeline — Ward 12',        pct:55, budget:'₹85 L',  status:'wip', statusLabel:'In Progress', eta:'Aug 2024',
      timeline:[
        { title:'DPR Approved',           desc:'CMWSSB project report sanctioned.',                    date:'10 Feb 2024', dot:'done'    },
        { title:'Contractor Appointed',   desc:'Works commenced under CMWSSB supervision.',            date:'20 Feb 2024', dot:'done'    },
        { title:'Phase 1 Complete',       desc:'Main trunk line done. 60% households connected.',      date:'10 Apr 2024', dot:'done'    },
        { title:'Phase 2 — Ongoing',      desc:'Last-mile connections in sub-lanes.',                  date:'Now',         dot:'wip'     },
        { title:'Testing & Commissioning',desc:'Pressure testing + chlorination + handover.',          date:'Aug 2024',    dot:'plan'    },
      ]
    },
    {
      name:'Public Library — Sector 2',       pct:30, budget:'₹40 L',  status:'noted', statusLabel:'Planning', eta:'Dec 2024',
      timeline:[
        { title:'Site Allocated',         desc:'Govt land in Sector 2 approved by Municipality.',      date:'01 Mar 2024', dot:'done'    },
        { title:'Design Approved',        desc:'Building plan cleared. Foundation started.',            date:'15 Apr 2024', dot:'done'    },
        { title:'Civil Construction',     desc:'Foundation done. Column work in progress.',             date:'Now',         dot:'wip'     },
        { title:'Interior & Furnishing',  desc:'Reading hall, shelving, IT infrastructure.',           date:'Oct 2024',    dot:'plan'    },
        { title:'Inauguration',           desc:'Public opening with digital catalog system.',           date:'Dec 2024',    dot:'plan'    },
      ]
    },
  ],
};

let ticketCounter = 89;
let currentFilter = 'all';
let selectedProject = 0;
let chartsInitialized = false;
let selectedTicketId = null;

/* ─────────────────────────────────────────
   SECTION SWITCHING
───────────────────────────────────────── */
function switchSection(btn, id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.stab').forEach(b => b.classList.remove('active'));
  document.getElementById('sec-' + id).classList.add('active');
  btn.classList.add('active');
  if (!chartsInitialized) { initCharts(); chartsInitialized = true; }
}

function switchMain(btn, id) {
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

/* ─────────────────────────────────────────
   PROMISE TRACKER — TVK Real Data
───────────────────────────────────────── */
function renderPromises() {
  const el = document.getElementById('promise-list');
  if (!el) return;
  el.innerHTML = DATA.promises.map(p => {
    const label = p.pct === 100 ? '✔ Done' : p.pct === 0 ? 'Not started' : p.pct + '%';
    const statusLabel = { pending:'Pending', in_progress:'In Progress', done:'Delivered' }[p.status] || p.status;
    const statusColor = { pending:'var(--red)', in_progress:'var(--amber)', done:'var(--green)' }[p.status];
    return `
      <div class="promise-row">
        <div class="promise-icon" style="background:${p.iconBg}">${p.icon}</div>
        <div class="promise-info">
          <div class="promise-name">${p.name}</div>
          <div class="promise-meta">${p.meta}</div>
          <div style="margin-top:4px"><span style="font-size:10px;background:rgba(59,130,246,.1);color:var(--accent);padding:1px 7px;border-radius:20px;font-family:'Space Grotesk',sans-serif">${p.category}</span></div>
        </div>
        <div class="progress-wrap">
          <div class="progress-label"><span>Progress</span><span style="color:${p.color}">${label}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${p.pct}%;background:${p.color}"></div></div>
        </div>
        <div style="text-align:right;min-width:70px">
          <div class="pct-badge" style="color:${p.color}">${p.pct}%</div>
          <div style="font-size:10px;color:${statusColor};font-weight:600;font-family:'Space Grotesk',sans-serif">${statusLabel}</div>
        </div>
      </div>`;
  }).join('');
}

/* ─────────────────────────────────────────
   PROJECT TIMELINE
───────────────────────────────────────── */
function renderProjects() {
  const listEl = document.getElementById('project-list');
  const tlEl = document.getElementById('timeline-view');
  if (!listEl || !tlEl) return;
  listEl.innerHTML = DATA.projects.map((p, i) => {
    const barColor = p.pct >= 75 ? '#22C55E' : p.pct >= 45 ? '#F59E0B' : '#3B82F6';
    return `
      <div class="project-card ${i === selectedProject ? 'selected' : ''}" onclick="selectProject(${i})">
        <div class="project-header">
          <div class="project-name">${p.name}</div>
          <span class="status-badge status-${p.status}">${p.statusLabel}</span>
        </div>
        <div class="progress-bar" style="margin-top:6px">
          <div class="progress-fill" style="width:${p.pct}%;background:${barColor}"></div>
        </div>
        <div style="font-size:11px;color:var(--text3);margin-top:5px">${p.pct}% · ${p.budget} · Est. ${p.eta}</div>
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
        <div class="tl-title" style="${t.dot==='wip'?'color:var(--accent)':t.dot==='plan'?'color:var(--text3)':''}">${t.dot==='wip'?'🔵 ':''}${t.title}</div>
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
   TICKETS — with Amazon-style timeline
───────────────────────────────────────── */
function renderTickets(filter) {
  const el = document.getElementById('ticket-list');
  if (!el) return;
  const all = [...DATA.tickets];
  const list = filter === 'all' ? all :
               filter === 'done' ? all.filter(t => t.status === 'done') :
               filter === 'invalid' ? all.filter(t => t.status === 'invalid') :
               all.filter(t => t.status === filter || t.priority === filter);
  if (list.length === 0) {
    el.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text3);font-family:\'Space Grotesk\',sans-serif;font-size:13px">No complaints in this category</div>';
    return;
  }
  el.innerHTML = list.map(t => buildTicketHTML(t)).join('');
}

function buildTicketHTML(t) {
  const statusLabel = { open:'Open', noted:'AI Noted', wip:'In Progress', done:'Resolved', invalid:'AI Cancelled' }[t.status] || t.status;
  const aiIcon = { open:'🤖', noted:'🤖', wip:'🔵', done:'✅', invalid:'🚫' }[t.status] || '🤖';
  const priorityColor = { high:'var(--red)', medium:'var(--amber)', low:'var(--green)' }[t.priority] || 'var(--accent)';
  return `
    <div class="ticket-item" onclick="showTicketTimeline('${t.id}')" style="cursor:pointer">
      <div class="ticket-header">
        <div>
          <div class="ticket-id">${t.id} <span style="font-size:10px;color:${priorityColor};font-weight:700;margin-left:4px">${t.priority?.toUpperCase()}</span></div>
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
      <div style="margin-top:8px;font-size:11px;color:var(--accent);font-family:'Space Grotesk',sans-serif">▶ Click to view delivery timeline</div>
    </div>`;
}

/* ─────────────────────────────────────────
   AMAZON-STYLE COMPLAINT TIMELINE MODAL
───────────────────────────────────────── */
function showTicketTimeline(id) {
  const t = DATA.tickets.find(x => x.id === id);
  if (!t) return;
  selectedTicketId = id;

  // Find current active step index
  const activeIdx = t.timeline.findIndex(s => s.state === 'active');
  const lastDone  = t.timeline.map((s,i) => s.state === 'done' ? i : -1).filter(i => i >= 0);
  const progressPct = t.status === 'done' ? 100 :
                      t.status === 'invalid' ? 33 :
                      Math.round(((lastDone.length) / t.timeline.length) * 100);

  const modal = document.getElementById('modal-overlay');
  document.getElementById('modal-title').textContent = 'Complaint Delivery Timeline';
  document.getElementById('modal-sub').innerHTML = `
    <span style="font-family:'Space Grotesk',sans-serif;font-size:12px;color:var(--text2)">${t.id}</span>
    <span class="status-badge status-${t.status}" style="margin-left:8px;font-size:11px">${{open:'Open',noted:'AI Noted',wip:'In Progress',done:'Resolved',invalid:'AI Cancelled'}[t.status]}</span>`;

  document.getElementById('modal-body').innerHTML = `
    <div style="margin-bottom:14px;padding:12px;background:rgba(0,0,0,.15);border-radius:8px;border:1px solid var(--border)">
      <div style="font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px">${t.title}</div>
      <div style="font-size:12px;color:var(--text2)">${t.ward} · ${t.cat}</div>
    </div>

    <!-- PROGRESS BAR -->
    <div style="margin-bottom:20px">
      <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text2);margin-bottom:6px">
        <span>Overall Progress</span>
        <span style="font-weight:700;color:${t.status==='done'?'var(--green)':t.status==='invalid'?'var(--red)':'var(--accent)'}">${progressPct}%</span>
      </div>
      <div style="height:8px;background:var(--bg3);border-radius:4px;overflow:hidden">
        <div style="width:${progressPct}%;height:100%;border-radius:4px;background:${t.status==='done'?'var(--green)':t.status==='invalid'?'var(--red)':'var(--accent)'};transition:width 1s ease"></div>
      </div>
    </div>

    <!-- AMAZON-STYLE TIMELINE -->
    <div style="position:relative;padding-left:0">
      ${t.timeline.map((step, i) => {
        const isLast = i === t.timeline.length - 1;
        const dotBg = step.state === 'done' ? '#22C55E' :
                      step.state === 'active' ? 'var(--accent)' :
                      step.state === 'cancelled' ? 'var(--red)' :
                      step.state === 'skipped' ? 'var(--text3)' : 'var(--border2)';
        const iconName = step.state === 'done' ? 'ti-check' :
                         step.state === 'active' ? 'ti-loader-2' :
                         step.state === 'cancelled' ? 'ti-x' : 'ti-clock';
        const textCol = step.state === 'done' ? 'var(--text)' :
                        step.state === 'active' ? 'var(--accent)' :
                        step.state === 'cancelled' ? 'var(--red)' : 'var(--text3)';
        const lineCol = step.state === 'done' ? '#22C55E' : 'var(--border)';
        return `
          <div style="display:flex;gap:14px;position:relative;${!isLast ? 'padding-bottom:20px' : ''}">
            <!-- VERTICAL LINE -->
            ${!isLast ? `<div style="position:absolute;left:16px;top:34px;bottom:0;width:2px;background:${lineCol};border-radius:1px"></div>` : ''}
            <!-- DOT -->
            <div style="flex-shrink:0;width:34px;height:34px;border-radius:50%;background:${dotBg};display:flex;align-items:center;justify-content:center;border:2px solid var(--bg);z-index:1;${step.state==='active'?'box-shadow:0 0 12px rgba(59,130,246,.5);animation:na-fab-pulse 2s infinite':''}">
              <i class="ti ${iconName}" style="font-size:15px;color:#fff;${step.state==='active'?'animation:spin 1.5s linear infinite':''}"></i>
            </div>
            <!-- CONTENT -->
            <div style="flex:1;padding-top:6px">
              <div style="font-size:13px;font-weight:700;color:${textCol};margin-bottom:3px">${step.step}</div>
              <div style="font-size:12px;color:var(--text2);line-height:1.5;margin-bottom:3px">${step.desc}</div>
              <div style="font-size:11px;color:var(--text3);font-family:'Space Grotesk',sans-serif">${step.date}</div>
            </div>
          </div>`;
      }).join('')}
    </div>

    <style>@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}</style>

    <div style="margin-top:16px;padding:12px;background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:8px">
      <div style="font-size:10px;color:var(--purple);font-weight:700;font-family:'Space Grotesk',sans-serif;letter-spacing:.1em;margin-bottom:4px">🤖 AI VERDICT</div>
      <div style="font-size:12.5px;color:var(--text2)">${t.verdict}</div>
    </div>`;

  modal.classList.add('show');
}

function filterTickets(btn, filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderTickets(filter);
}

/* ─────────────────────────────────────────
   WARD CARDS + TN MAP POPUP
───────────────────────────────────────── */
function renderWardCards() {
  // The wards section — populated when clicking the "Wards" nav
}

/* ─────────────────────────────────────────
   LEADERBOARD
───────────────────────────────────────── */
function renderLeaderboard() {
  const el = document.getElementById('leaderboard-body');
  if (!el) return;
  const sorted = [...DATA.leaderboard].sort((a, b) => b.score - a.score);
  el.innerHTML = sorted.map((c, i) => {
    const sc = c.score >= 80 ? 'score-high' : c.score >= 68 ? 'score-mid' : 'score-low';
    const barColor = c.score >= 80 ? '#22C55E' : c.score >= 68 ? '#F59E0B' : '#EF4444';
    const trendIcon = c.trend === 'up' ? '<i class="ti ti-trending-up trend-up"></i>'
                     : c.trend === 'dn' ? '<i class="ti ti-trending-down trend-dn"></i>'
                     : '<i class="ti ti-minus trend-flat"></i>';
    const partyBadge = `<span style="font-size:9px;background:rgba(59,130,246,.1);color:var(--accent);padding:1px 6px;border-radius:20px;font-family:'Space Grotesk',sans-serif">${c.party}</span>`;
    return `
      <tr>
        <td><strong style="font-family:'Space Grotesk',sans-serif">${i===0?'🥇':i===1?'🥈':i===2?'🥉':i+1}</strong></td>
        <td>${c.name}<br>${partyBadge}</td>
        <td style="color:var(--text2);font-size:12px">${c.ward}</td>
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
   TN MAP — shown when Wards nav is clicked
───────────────────────────────────────── */
function renderTNMap() {
  const mapEl = document.getElementById('tn-map-svg');
  if (!mapEl) return;

  // Tamil Nadu accurate SVG districts (simplified polygons)
  const TN_DISTRICTS = [
    // North
    { name:'Chennai',      path:'M 268,38 L 295,38 L 300,60 L 285,72 L 260,65 L 255,48 Z', cx:277, cy:55, wards:200, score:82 },
    { name:'Tiruvallur',   path:'M 235,38 L 268,38 L 255,65 L 240,72 L 220,60 L 225,42 Z', cx:243, cy:55, wards:92,  score:71 },
    { name:'Kancheepuram', path:'M 240,72 L 285,72 L 290,100 L 260,110 L 230,100 L 228,80 Z', cx:259, cy:90, wards:80, score:74 },
    { name:'Vellore',      path:'M 200,40 L 235,38 L 225,70 L 205,80 L 185,65 L 190,45 Z', cx:210, cy:58, wards:60,  score:69 },
    { name:'Ranipet',      path:'M 165,45 L 200,40 L 190,68 L 168,78 L 150,65 L 155,48 Z', cx:173, cy:58, wards:45,  score:67 },
    { name:'Tirupattur',   path:'M 185,80 L 215,75 L 218,105 L 195,115 L 172,102 L 175,84 Z', cx:196, cy:95, wards:38, score:65 },
    { name:'Krishnagiri',  path:'M 150,65 L 185,65 L 175,95 L 155,105 L 135,88 L 138,68 Z', cx:158, cy:82, wards:45,  score:68 },
    { name:'Dharmapuri',   path:'M 115,70 L 150,65 L 138,100 L 118,110 L 100,95 L 105,73 Z', cx:124, cy:87, wards:38, score:72 },
    // Central
    { name:'Salem',        path:'M 128,108 L 168,100 L 170,132 L 148,145 L 125,132 L 122,115 Z', cx:146, cy:124, wards:60, score:76 },
    { name:'Namakkal',     path:'M 168,100 L 205,105 L 208,135 L 182,148 L 160,135 L 163,108 Z', cx:184, cy:122, wards:42, score:73 },
    { name:'Erode',        path:'M 90,105 L 128,108 L 125,140 L 105,152 L 82,138 L 85,108 Z', cx:106, cy:128, wards:60,  score:74 },
    { name:'Coimbatore',   path:'M 55,115 L 92,108 L 88,148 L 65,162 L 42,148 L 45,118 Z', cx:67, cy:135,  wards:100, score:79 },
    { name:'Tiruppur',     path:'M 92,145 L 128,140 L 130,168 L 108,178 L 88,165 L 88,148 Z', cx:109, cy:160, wards:57, score:71 },
    { name:'Nilgiris',     path:'M 55,115 L 92,108 L 90,82 L 68,75 L 48,90 L 50,112 Z', cx:70, cy:95,  wards:25,   score:83 },
    { name:'Tiruvannamalai',path:'M 205,105 L 240,100 L 245,130 L 222,145 L 200,130 L 202,108 Z', cx:222, cy:122, wards:52, score:68 },
    { name:'Villupuram',   path:'M 240,100 L 275,98 L 280,130 L 255,145 L 232,130 L 235,102 Z', cx:256, cy:118, wards:48, score:66 },
    { name:'Cuddalore',    path:'M 275,98 L 305,100 L 308,132 L 280,145 L 258,130 L 262,100 Z', cx:282, cy:120, wards:45, score:69 },
    // Interior South
    { name:'Karur',        path:'M 128,148 L 168,143 L 168,172 L 148,182 L 126,168 L 124,152 Z', cx:147, cy:163, wards:48, score:75 },
    { name:'Tiruchirappalli',path:'M 168,143 L 205,138 L 208,170 L 182,185 L 162,170 L 160,145 Z', cx:184, cy:160, wards:65, score:78 },
    { name:'Perambalur',   path:'M 205,138 L 240,132 L 242,162 L 220,175 L 200,162 L 202,140 Z', cx:221, cy:154, wards:28, score:70 },
    { name:'Ariyalur',     path:'M 240,132 L 272,128 L 275,158 L 252,170 L 232,158 L 234,134 Z', cx:253, cy:148, wards:35, score:68 },
    { name:'Thanjavur',    path:'M 205,170 L 242,165 L 245,195 L 222,208 L 200,195 L 198,173 Z', cx:222, cy:186, wards:65, score:77 },
    { name:'Nagapattinam', path:'M 242,165 L 280,162 L 282,192 L 258,205 L 235,192 L 237,167 Z', cx:258, cy:182, wards:40, score:72 },
    { name:'Mayiladuthurai',path:'M 275,130 L 308,128 L 310,158 L 285,170 L 265,155 L 268,132 Z', cx:287, cy:147, wards:42, score:71 },
    { name:'Pudukkottai',  path:'M 168,172 L 208,168 L 210,198 L 188,210 L 165,198 L 163,175 Z', cx:187, cy:190, wards:38, score:69 },
    { name:'Sivaganga',    path:'M 168,210 L 208,205 L 210,235 L 185,248 L 162,232 L 162,213 Z', cx:186, cy:226, wards:38, score:70 },
    { name:'Madurai',      path:'M 128,195 L 168,190 L 168,225 L 145,238 L 122,222 L 122,198 Z', cx:145, cy:215, wards:100, score:75 },
    { name:'Dindigul',     path:'M 90,175 L 128,170 L 128,205 L 105,218 L 83,205 L 82,178 Z', cx:105, cy:193, wards:52,  score:73 },
    { name:'Theni',        path:'M 58,178 L 95,175 L 92,205 L 68,215 L 48,202 L 50,182 Z', cx:70, cy:196,  wards:42,   score:76 },
    { name:'Virudhunagar', path:'M 128,222 L 168,218 L 165,252 L 142,262 L 120,248 L 122,225 Z', cx:143, cy:240, wards:47, score:71 },
    { name:'Ramanathapuram',path:'M 168,240 L 208,235 L 208,265 L 182,275 L 160,262 L 162,242 Z', cx:184, cy:255, wards:38, score:68 },
    // Far South
    { name:'Thoothukudi',  path:'M 128,262 L 168,255 L 168,285 L 145,295 L 122,280 L 122,265 Z', cx:145, cy:275, wards:57, score:72 },
    { name:'Tirunelveli',  path:'M 88,255 L 128,250 L 128,280 L 105,292 L 82,278 L 82,258 Z', cx:105, cy:270, wards:55,  score:74 },
    { name:'Tenkasi',      path:'M 55,248 L 92,245 L 90,272 L 68,282 L 45,268 L 48,250 Z', cx:68, cy:262,  wards:42,   score:73 },
    { name:'Kanyakumari',  path:'M 72,282 L 108,278 L 105,305 L 85,315 L 65,302 L 65,285 Z', cx:86, cy:296, wards:52,   score:78 },
  ];

  let mapSVG = `
    <svg id="tn-map-svg" viewBox="0 0 350 340" width="100%" style="max-height:500px;display:block">
      <defs>
        <filter id="map-shadow"><feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="rgba(0,0,0,0.5)"/></filter>
      </defs>
      <rect width="350" height="340" fill="#060c18" rx="8"/>
  `;

  TN_DISTRICTS.forEach(d => {
    const intensity = d.score >= 80 ? '#22C55E' : d.score >= 72 ? '#3B82F6' : d.score >= 65 ? '#F59E0B' : '#EF4444';
    const opacity = 0.3 + (d.score / 100) * 0.4;
    mapSVG += `
      <g class="tn-district" onclick="showDistrictDetail('${d.name}',${d.wards},${d.score})"
         style="cursor:pointer">
        <path d="${d.path}" fill="${intensity}" fill-opacity="${opacity}"
              stroke="${intensity}" stroke-width="0.8" stroke-opacity="0.7"
              onmouseenter="this.style.fillOpacity='0.7';this.style.strokeWidth='1.5'"
              onmouseleave="this.style.fillOpacity='${opacity}';this.style.strokeWidth='0.8'"/>
        <text x="${d.cx}" y="${d.cy}" text-anchor="middle" fill="rgba(255,255,255,0.85)"
              font-size="${d.name.length > 10 ? '5' : '6'}" font-family="Space Grotesk" font-weight="600">${d.name}</text>
        <text x="${d.cx}" y="${d.cy+8}" text-anchor="middle" fill="${intensity}"
              font-size="4.5" font-family="JetBrains Mono,monospace">${d.score}</text>
      </g>`;
  });

  mapSVG += `
      <!-- Legend -->
      <rect x="5" y="300" width="100" height="36" fill="rgba(0,0,0,0.7)" rx="4"/>
      <text x="10" y="310" fill="rgba(255,255,255,0.6)" font-size="5" font-family="Space Grotesk">PERFORMANCE SCORE</text>
      <circle cx="12" cy="318" r="3" fill="#22C55E"/><text x="18" y="320" fill="#aaa" font-size="5" font-family="Space Grotesk">Excellent (80+)</text>
      <circle cx="12" cy="326" r="3" fill="#3B82F6"/><text x="18" y="328" fill="#aaa" font-size="5" font-family="Space Grotesk">Good (72–79)</text>
      <circle cx="65" cy="318" r="3" fill="#F59E0B"/><text x="71" y="320" fill="#aaa" font-size="5" font-family="Space Grotesk">Moderate</text>
      <circle cx="65" cy="326" r="3" fill="#EF4444"/><text x="71" y="328" fill="#aaa" font-size="5" font-family="Space Grotesk">Needs attention</text>
    </svg>`;

  mapEl.innerHTML = mapSVG;
}

function showDistrictDetail(name, wards, score) {
  const scoreColor = score >= 80 ? '#22C55E' : score >= 72 ? '#3B82F6' : score >= 65 ? '#F59E0B' : '#EF4444';
  document.getElementById('modal-title').textContent = `${name} District`;
  document.getElementById('modal-sub').innerHTML = `<span style="color:var(--text2);font-size:12px">${wards} Municipal Wards · Performance Score: <strong style="color:${scoreColor}">${score}/100</strong></span>`;
  document.getElementById('modal-body').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
      ${[['Total Wards',wards,'var(--accent)'],['Score',score+'/100',scoreColor],['Est. Complaints',Math.round(wards*1.8),'var(--red)'],['Resolved',Math.round(wards*1.2),'var(--green)']].map(([l,v,c])=>`
        <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:12px;text-align:center">
          <div style="font-size:20px;font-weight:700;color:${c};font-family:'Space Grotesk',sans-serif">${v}</div>
          <div style="font-size:11px;color:var(--text3)">${l}</div>
        </div>`).join('')}
    </div>
    <div style="background:rgba(168,85,247,.07);border:1px solid rgba(168,85,247,.2);border-radius:8px;padding:12px">
      <div style="font-size:10px;color:var(--purple);font-weight:700;margin-bottom:4px">🤖 AI ANALYSIS</div>
      <div style="font-size:12.5px;color:var(--text2)">${name} district has ${wards} wards with an overall performance score of ${score}/100. ${score >= 80 ? 'Performing excellently — maintain current standards.' : score >= 72 ? 'Good performance with room for improvement in sanitation and roads.' : score >= 65 ? 'Moderate performance — key issues in water supply and drainage need attention.' : 'Performance below average — urgent intervention required in multiple categories.'}</div>
    </div>`;
  document.getElementById('modal-overlay').classList.add('show');
}

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
function closeModal(e) {
  document.getElementById('modal-overlay').classList.remove('show');
}

/* ─────────────────────────────────────────
   SUBMIT TICKET
───────────────────────────────────────── */
async function submitTicket() {
  const name  = document.getElementById('t-name').value.trim();
  const phone = document.getElementById('t-phone').value.trim();
  const cat   = document.getElementById('t-cat').value;
  const title = document.getElementById('t-title').value.trim();
  const desc  = document.getElementById('t-desc').value.trim();
  const loc   = document.getElementById('t-loc').value.trim();
  const ward  = document.getElementById('t-ward').value;
  const statusEl = document.getElementById('ai-status');

  if (!name || !cat || !title || !desc) {
    statusEl.style.display = 'block';
    statusEl.innerHTML = `<div style="padding:10px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;font-size:13px;color:#f87171">⚠ Please fill all required fields.</div>`;
    return;
  }

  statusEl.style.display = 'block';
  statusEl.innerHTML = `<div class="ai-processing"><div class="ai-dot"></div><div><strong>🤖 AI is reviewing your complaint…</strong><br><span style="color:var(--text3);font-size:12px">Validating · Checking duplicates · Assigning priority · Routing to department…</span></div></div>`;

  setTimeout(() => {
    ticketCounter++;
    const id = `#TKT-2024-0${ticketCounter}`;
    const isDup = DATA.tickets.some(t => t.cat === cat && t.ward.includes('Ward 12'));
    const priority = cat.includes('Drain') || cat.includes('Road') ? 'high' : 'medium';
    const dept = cat.includes('Water') ? 'CMWSSB' : cat.includes('Road') ? 'PWD Chennai' : cat.includes('Waste') ? 'GCC Sanitation' : cat.includes('Light') ? 'TNEB' : 'Ward Office';

    const newTicket = {
      id, ward, cat: cat.split('/')[0].trim(), title,
      date: new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' }),
      status: isDup ? 'noted' : 'open', priority, submittedBy: phone || 'anonymous',
      timeline: [
        { step:'Complaint Raised',   desc:`Submitted by ${name} via NaalaatchiApp.`,              date: new Date().toLocaleString('en-IN'), state:'done'   },
        { step:'AI Review',          desc: isDup ? `Grouped with similar ${cat} complaints. Batch escalation.` : `Valid complaint. Priority: ${priority.toUpperCase()}. No duplicates.`, date: new Date().toLocaleString('en-IN'), state:'done' },
        { step:'Assigned to Dept',   desc: `Routed to ${dept}.`,                                 date: 'Pending',  state: isDup ? 'done' : 'active' },
        { step:'Site Inspection',    desc: 'Awaiting field officer assignment.',                   date: 'Pending',  state:'pending' },
        { step:'Repair In Progress', desc: 'Pending field work.',                                  date: 'Pending',  state:'pending' },
        { step:'Resolved & Closed',  desc: 'Pending resolution.',                                  date: 'TBD',      state:'pending' },
      ],
      verdict: isDup ? `Grouped with similar ${cat} complaints. Escalated to ${dept} for batch resolution.` : `Valid complaint. Priority: ${priority.toUpperCase()}. Assigned to ${dept}. You will receive SMS updates.`
    };

    DATA.tickets.unshift(newTicket);
    renderTickets(currentFilter);

    statusEl.innerHTML = `<div style="padding:12px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;font-size:13px">
      <div style="color:#4ade80;font-weight:600;margin-bottom:4px">✅ ${id} — Registered</div>
      <div style="color:var(--text2)">Priority: <span style="color:var(--amber)">${priority.toUpperCase()}</span> · Dept: <span style="color:var(--accent)">${dept}</span><br>Click your complaint to see the live delivery timeline →</div>
    </div>`;

    ['t-name','t-phone','t-title','t-desc','t-loc'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
    document.getElementById('t-cat').value = '';
    if (currentUser) { DATA.tickets[0].submittedBy = currentUser.mobile; }
  }, 2600);
}

function todayStr() {
  return new Date().toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
}

/* ─────────────────────────────────────────
   CHARTS
───────────────────────────────────────── */
function initCharts() {
  if (typeof Chart === 'undefined') { setTimeout(initCharts, 300); return; }
  Chart.defaults.color = '#5A6B88';
  Chart.defaults.font.family = "'DM Sans', sans-serif";
  const gridColor = 'rgba(255,255,255,.04)';

  safeChart('donutChart', {
    type:'doughnut',
    data:{ labels:['Pending','In Progress','Delivered'],
      datasets:[{ data:[9,3,0], backgroundColor:['#EF4444','#F59E0B','#22C55E'], borderWidth:0, hoverOffset:4 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{ display:false }, tooltip:{ callbacks:{ label: ctx=>`${ctx.label}: ${ctx.raw}` } } }, cutout:'70%' }
  });

  safeChart('trendChart', {
    type:'line',
    data:{ labels:['Apr 14','Apr 18','Apr 22','Apr 26','Apr 30','May 4','May 8','May 12'],
      datasets:[
        { label:'Raised',   data:[18,24,21,29,26,19,22,17], borderColor:'#EF4444', backgroundColor:'rgba(239,68,68,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
        { label:'Resolved', data:[12,16,18,22,24,20,21,19], borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,.08)', fill:true, tension:.4, pointRadius:3, borderWidth:2 },
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      scales:{ x:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10}} }, y:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10}} } },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', font:{size:11}, boxWidth:10 } } } }
  });

  safeChart('budgetChart', {
    type:'bar',
    data:{ labels:['Infrastructure','Welfare','Education','Health','Sanitation'],
      datasets:[
        { label:'Sanctioned', data:[8,3.5,2.2,2.8,1.9], backgroundColor:'rgba(59,130,246,.2)', borderColor:'#3B82F6', borderWidth:1 },
        { label:'Utilized',   data:[5.8,2.1,1.4,1.8,0.7], backgroundColor:'rgba(34,197,94,.2)',  borderColor:'#22C55E', borderWidth:1 },
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      scales:{ x:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10}} }, y:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10},callback:v=>'₹'+v+'Cr'} } },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', font:{size:11}, boxWidth:10 } } } }
  });

  safeChart('sentChart', {
    type:'line',
    data:{ labels:['W1','W2','W3','W4','W5','W6','W7','W8'],
      datasets:[
        { label:'Positive', data:[42,44,46,44,47,48,49,48], borderColor:'#22C55E', backgroundColor:'rgba(34,197,94,.1)',  fill:true, tension:.4, pointRadius:3, borderWidth:2 },
        { label:'Negative', data:[32,30,29,30,27,28,25,28], borderColor:'#EF4444', backgroundColor:'rgba(239,68,68,.08)', fill:true, tension:.4, pointRadius:3, borderWidth:2 },
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      scales:{ x:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10}} }, y:{ grid:{color:gridColor}, ticks:{color:'#5A6B88',font:{size:10},callback:v=>v+'%'} } },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', font:{size:11}, boxWidth:10 } } } }
  });

  safeChart('promiseCatChart', {
    type:'bar',
    data:{ labels:['Women Welfare','Agriculture','Social Welfare','Energy','Transport','Governance','Education','Technology','Water','Roads'],
      datasets:[
        { label:'Promises', data:[2,1,1,2,1,1,1,1,1,1], backgroundColor:'rgba(59,130,246,.3)', borderColor:'#3B82F6', borderWidth:1 },
        { label:'Delivered',data:[0,0,0,0,0,0,0,0,0,0], backgroundColor:'rgba(34,197,94,.3)',  borderColor:'#22C55E', borderWidth:1 },
      ] },
    options:{ indexAxis:'y', responsive:true, maintainAspectRatio:false,
      scales:{ x:{ grid:{color:gridColor} }, y:{ grid:{color:'transparent'}, ticks:{font:{size:10}} } },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', font:{size:11}, boxWidth:10 } } } }
  });

  safeChart('timelineChart', {
    type:'bar',
    data:{ labels:['Q1 2026','Q2 2026','Q3 2026','Q4 2026'],
      datasets:[{ label:'Promises On Track', data:[0,0,3,3], backgroundColor:'rgba(59,130,246,.3)', borderColor:'#3B82F6', borderWidth:1 }] },
    options:{ responsive:true, maintainAspectRatio:false,
      scales:{ x:{ grid:{color:gridColor} }, y:{ grid:{color:gridColor}, min:0, max:12, ticks:{ callback:v=>v+' promises' } } },
      plugins:{ legend:{ display:false } } }
  });

  safeChart('radarChart', {
    type:'radar',
    data:{ labels:['Complaint Resolution','Budget Utilization','Promise Delivery','Citizen Satisfaction','Response Time','Transparency'],
      datasets:[
        { label:'Ward 12', data:[78,71,0,72,85,70], borderColor:'#3B82F6', backgroundColor:'rgba(59,130,246,.15)', pointBackgroundColor:'#3B82F6', borderWidth:2 },
        { label:'District Avg', data:[72,65,0,68,74,64], borderColor:'#F59E0B', backgroundColor:'rgba(245,158,11,.08)', pointBackgroundColor:'#F59E0B', borderWidth:1, borderDash:[4,4] },
      ] },
    options:{ responsive:true, maintainAspectRatio:false,
      scales:{ r:{ grid:{color:'rgba(255,255,255,.07)'}, angleLines:{color:'rgba(255,255,255,.07)'},
        pointLabels:{color:'#8A9BB8',font:{size:11}}, ticks:{display:false}, min:0, max:100 } },
      plugins:{ legend:{ labels:{ color:'#8A9BB8', font:{size:11}, boxWidth:10 } } } }
  });
}

function safeChart(id, config) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el._chart) { el._chart.destroy(); }
  el._chart = new Chart(el, config);
}

/* ─────────────────────────────────────────
   AUTH SYSTEM
───────────────────────────────────────── */
const USERS_DB = [
  { mobile:'9876543210', aadhar:'1234 5678 9012', name:'Deepan Kumar', ward:'Ward 12 — Tambaram', age:24 },
  { mobile:'9123456789', aadhar:'9876 5432 1098', name:'Priya Sundar',  ward:'Ward 14 — Pallavaram', age:31 },
];
let currentUser = null;
let currentStarRating = 0;
let userFeedbacks = [];

function openAuth(tab='login') { document.getElementById('auth-overlay').classList.add('show'); switchAuthTab(tab); }
function closeAuth(e) { if(e && e.target!==document.getElementById('auth-overlay')) return; document.getElementById('auth-overlay').classList.remove('show'); clearAuthErrors(); }
function switchAuthTab(tab) {
  document.getElementById('auth-login').style.display    = tab==='login'    ? 'block' : 'none';
  document.getElementById('auth-register').style.display = tab==='register' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active',    tab==='login');
  document.getElementById('tab-register').classList.toggle('active', tab==='register');
  clearAuthErrors();
}
function clearAuthErrors() { ['login-error','reg-error'].forEach(id=>{const el=document.getElementById(id);if(el){el.style.display='none';el.textContent=''}}); }
function showAuthError(id,msg) { const el=document.getElementById(id); el.textContent=msg; el.style.display='block'; }
function formatAadhar(input) { let v=input.value.replace(/\D/g,'').substring(0,12); input.value=v.replace(/(\d{4})(?=\d)/g,'$1 ').trim(); }

function handleLogin() {
  const mobile=document.getElementById('login-mobile').value.replace(/\D/g,'');
  const aadhar=document.getElementById('login-aadhar').value.trim();
  if(!mobile||mobile.length<10){showAuthError('login-error','⚠️ Enter a valid 10-digit mobile number.');return;}
  if(!aadhar||aadhar.replace(/\s/g,'').length<12){showAuthError('login-error','⚠️ Enter a valid 12-digit Aadhaar number.');return;}
  const user=USERS_DB.find(u=>u.mobile.replace(/\D/g,'')=== mobile&&u.aadhar.replace(/\s/g,'')=== aadhar.replace(/\s/g,''));
  if(!user){showAuthError('login-error','❌ No account found. Check your details or register.');return;}
  loginSuccess(user);
}

function handleRegister() {
  const name=document.getElementById('reg-name').value.trim();
  const mobile=document.getElementById('reg-mobile').value.replace(/\D/g,'');
  const aadhar=document.getElementById('reg-aadhar').value.trim();
  const ward=document.getElementById('reg-ward').value;
  if(!name){showAuthError('reg-error','⚠️ Please enter your full name.');return;}
  if(!mobile||mobile.length<10){showAuthError('reg-error','⚠️ Enter a valid 10-digit mobile number.');return;}
  if(aadhar.replace(/\s/g,'').length<12){showAuthError('reg-error','⚠️ Enter a valid 12-digit Aadhaar number.');return;}
  if(USERS_DB.find(u=>u.mobile.replace(/\D/g,'')=== mobile)){showAuthError('reg-error','⚠️ Mobile already registered. Please login.');return;}
  const newUser={mobile,aadhar,name,ward,age:'-'};
  USERS_DB.push(newUser);
  loginSuccess(newUser);
}

function loginSuccess(user) {
  currentUser=user;
  document.getElementById('auth-overlay').classList.remove('show');
  updateAvatarUI();
  autoFillComplaintForm();
  if(typeof naShowToast==='function') naShowToast(`Welcome, ${user.name.split(' ')[0]}! 👋`);
}

function handleLogout() {
  currentUser=null; currentStarRating=0; userFeedbacks=[];
  updateAvatarUI(); closeProfile();
  if(typeof naShowToast==='function') naShowToast('Logged out successfully.');
}

function updateAvatarUI() {
  const btn=document.getElementById('avatar-btn');
  const label=document.getElementById('avatar-label');
  if(currentUser){
    const initials=currentUser.name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
    label.innerHTML=initials; label.style.fontSize='13px';
    btn.classList.add('logged-in'); btn.title=currentUser.name;
  } else {
    label.innerHTML='<i class="ti ti-user"></i>'; label.style.fontSize='18px';
    btn.classList.remove('logged-in'); btn.title='Profile / Login';
  }
}

function openProfile() {
  if(currentUser){renderProfilePanel();document.getElementById('profile-loggedin').style.display='block';document.getElementById('profile-guest').style.display='none';}
  else{document.getElementById('profile-loggedin').style.display='none';document.getElementById('profile-guest').style.display='block';}
  document.getElementById('profile-overlay').classList.add('show');
}
function closeProfile(e) { if(e&&e.target!==document.getElementById('profile-overlay'))return; document.getElementById('profile-overlay').classList.remove('show'); }

function renderProfilePanel() {
  if(!currentUser)return;
  const initials=currentUser.name.split(' ').map(w=>w[0]).join('').substring(0,2).toUpperCase();
  document.getElementById('profile-avatar-big').textContent=initials;
  document.getElementById('profile-name-display').textContent=currentUser.name;
  document.getElementById('profile-meta-display').textContent=`${currentUser.ward} · Citizen`;
  const myAll=DATA.tickets.filter(t=>t.submittedBy===currentUser.mobile);
  const myResolved=myAll.filter(t=>t.status==='done');
  document.getElementById('pstat-complaints').textContent=myAll.length;
  document.getElementById('pstat-resolved').textContent=myResolved.length;
  document.getElementById('pstat-feedback').textContent=userFeedbacks.length;
  const listEl=document.getElementById('profile-my-tickets');
  if(!listEl)return;
  if(myAll.length===0){listEl.innerHTML='<div class="empty-state" style="padding:16px 0">No complaints submitted yet.</div>';return;}
  listEl.innerHTML=myAll.slice(0,5).map(t=>{
    const sl={open:'Open',noted:'AI Noted',wip:'In Progress',done:'Resolved',invalid:'Cancelled'}[t.status]||t.status;
    return `<div class="profile-ticket-item">
      <div class="pt-header"><div><div class="pt-id">${t.id}</div><div class="pt-title">${t.title}</div></div>
      <span class="status-badge status-${t.status}" style="font-size:10px">${sl}</span></div>
      <div class="pt-date"><i class="ti ti-calendar" style="font-size:10px"></i> ${t.date} · ${t.cat}</div>
    </div>`;
  }).join('');
  setStar(0);
  if(userFeedbacks.length>0){
    document.getElementById('profile-feedbacks-section').style.display='block';
    document.getElementById('profile-feedback-list').innerHTML=userFeedbacks.map(f=>`
      <div class="profile-feedback-item">
        <div class="pf-stars">${'★'.repeat(f.stars)}${'☆'.repeat(5-f.stars)}</div>
        <div class="pf-cat">${f.category}</div><div class="pf-text">${f.text}</div>
        <div class="pf-date">${f.date}</div>
      </div>`).join('');
  } else { document.getElementById('profile-feedbacks-section').style.display='none'; }
}

function setStar(n) {
  currentStarRating=n;
  document.querySelectorAll('.star').forEach((s,i)=>s.classList.toggle('active',i<n));
}

function submitFeedback() {
  if(!currentUser){return;}
  if(currentStarRating===0){document.getElementById('fb-status').style.display='block';document.getElementById('fb-status').innerHTML='<div style="font-size:12px;color:var(--amber)">⭐ Please select a rating.</div>';return;}
  const category=document.getElementById('fb-category').value;
  const text=document.getElementById('fb-text').value.trim();
  if(!category||!text){document.getElementById('fb-status').style.display='block';document.getElementById('fb-status').innerHTML='<div style="font-size:12px;color:var(--amber)">⚠ Please fill all fields.</div>';return;}
  const fb={stars:currentStarRating,category,text,date:todayStr(),user:currentUser.name};
  userFeedbacks.unshift(fb);
  document.getElementById('fb-status').style.display='block';
  document.getElementById('fb-status').innerHTML=`<div style="padding:10px;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:8px;font-size:12px;color:#4ade80">✅ Thank you, ${currentUser.name.split(' ')[0]}! Feedback recorded.</div>`;
  document.getElementById('fb-text').value='';
  document.getElementById('fb-category').value='';
  setStar(0);
  setTimeout(()=>{renderProfilePanel();document.getElementById('fb-status').style.display='none';},1800);
}

function autoFillComplaintForm() {
  if(!currentUser)return;
  const n=document.getElementById('t-name'); if(n&&!n.value)n.value=currentUser.name;
  const p=document.getElementById('t-phone'); if(p&&!p.value)p.value=currentUser.mobile;
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded',()=>{
  renderPromises();
  renderProjects();
  renderHeatmap();
  renderTickets('all');
  renderLeaderboard();
  renderTNMap();
  updateAvatarUI();
  setTimeout(()=>{initCharts();chartsInitialized=true;},150);
});

/* ─────────────────────────────────────────
   WARD CARDS + TN MAP RENDERING
───────────────────────────────────────── */
function renderWardCards() {
  const grid = document.getElementById('ward-cards-grid');
  const topEl = document.getElementById('top-wards-list');
  const botEl = document.getElementById('bottom-wards-list');
  if (!grid) return;

  // Render cards
  grid.innerHTML = DATA.wards.map(w => {
    const sc = w.score >= 80 ? '#22C55E' : w.score >= 72 ? '#3B82F6' : w.score >= 65 ? '#F59E0B' : '#EF4444';
    return `
      <div class="card" style="padding:14px;cursor:pointer;transition:all .2s;border-left:3px solid ${sc}" onclick="showWardDetail(${w.id})">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
          <div>
            <div style="font-size:13px;font-weight:700;color:var(--text)">${w.name}</div>
            <div style="font-size:10px;color:var(--text3);font-family:'Space Grotesk',sans-serif">${w.ward} · ${w.zone}</div>
          </div>
          <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:900;color:${sc};line-height:1">${w.score}</div>
        </div>
        <div style="height:4px;background:var(--border);border-radius:2px;overflow:hidden;margin-bottom:8px">
          <div style="width:${w.score}%;height:100%;background:${sc};border-radius:2px"></div>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <span style="font-size:10px;background:rgba(239,68,68,.1);color:var(--red);padding:1px 7px;border-radius:20px;font-family:'Space Grotesk',sans-serif">${w.complaints} issues</span>
          <span style="font-size:10px;background:rgba(59,130,246,.1);color:var(--accent);padding:1px 7px;border-radius:20px;font-family:'Space Grotesk',sans-serif">${w.progress}% dev</span>
        </div>
        <div style="margin-top:6px;font-size:11px;color:var(--text3)">${w.councillor} <span style="color:var(--text3)">·</span> <span style="color:var(--accent)">${w.party}</span></div>
      </div>`;
  }).join('');

  // Top wards
  if (topEl) {
    const top = [...DATA.wards].sort((a,b) => b.score - a.score).slice(0,5);
    topEl.innerHTML = top.map((w,i) => {
      const sc = w.score >= 80 ? '#22C55E' : '#3B82F6';
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)">
        <div><div style="font-size:12.5px;font-weight:600;color:var(--text)">${i===0?'🥇 ':i===1?'🥈 ':i===2?'🥉 ':'  '}${w.name}</div>
          <div style="font-size:10px;color:var(--text3)">${w.ward} · ${w.councillor}</div></div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:${sc}">${w.score}</div>
      </div>`;
    }).join('');
  }

  // Bottom wards
  if (botEl) {
    const bot = [...DATA.wards].sort((a,b) => a.score - b.score).slice(0,4);
    botEl.innerHTML = bot.map(w => {
      const sc = w.score < 65 ? '#EF4444' : '#F59E0B';
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--border)">
        <div><div style="font-size:12.5px;font-weight:600;color:var(--text)">⚠ ${w.name}</div>
          <div style="font-size:10px;color:var(--text3)">${w.ward} · ${w.complaints} complaints</div></div>
        <div style="font-family:'Space Grotesk',sans-serif;font-weight:700;color:${sc}">${w.score}</div>
      </div>`;
    }).join('');
  }
}

function filterWardCards(q) {
  const lower = q.toLowerCase();
  document.querySelectorAll('#ward-cards-grid > div').forEach(card => {
    card.style.display = card.textContent.toLowerCase().includes(lower) ? '' : 'none';
  });
}

function showWardDetail(id) {
  const w = DATA.wards.find(x => x.id === id);
  if (!w) return;
  const sc = w.score >= 80 ? '#22C55E' : w.score >= 72 ? '#3B82F6' : w.score >= 65 ? '#F59E0B' : '#EF4444';
  const panel = document.getElementById('ward-detail-panel');
  panel.style.display = 'block';
  panel.innerHTML = `
    <div class="card" style="margin-bottom:14px;border-top:3px solid ${sc}">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px">
        <div>
          <div style="font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;color:var(--text)">${w.name}</div>
          <div style="font-size:12px;color:var(--text3)">${w.ward} · Zone: ${w.zone} · Population: ${w.pop}</div>
          <div style="margin-top:6px;display:flex;gap:8px;align-items:center">
            <span style="font-size:12px;color:var(--text2)">Councillor: <strong style="color:var(--text)">${w.councillor}</strong></span>
            <span style="font-size:10px;background:rgba(59,130,246,.1);color:var(--accent);padding:2px 8px;border-radius:20px;font-family:'Space Grotesk',sans-serif">${w.party}</span>
          </div>
        </div>
        <div style="text-align:center">
          <div style="font-family:'Space Grotesk',sans-serif;font-size:3rem;font-weight:900;color:${sc};line-height:1">${w.score}</div>
          <div style="font-size:10px;color:var(--text3);font-family:'Space Grotesk',sans-serif">AI GOVERNANCE SCORE</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-bottom:14px">
        ${[
          ['💧 Water',    w.water,    'var(--accent)'],
          ['🌊 Drainage', w.drainage, 'var(--blue2, #60a5fa)'],
          ['🗑 Waste',    w.waste,    'var(--amber)'],
          ['🛣 Roads',    w.roads,    'var(--red)'],
          ['💰 Budget',   w.budget,   'var(--green)'],
          ['🏗 Progress', w.progress+'%','var(--purple)'],
        ].map(([l,v,c]) => `
          <div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;padding:10px 6px;text-align:center">
            <div style="font-size:11px;color:var(--text3);margin-bottom:3px">${l}</div>
            <div style="font-family:'Space Grotesk',sans-serif;font-size:1rem;font-weight:700;color:${c}">${v}</div>
          </div>`).join('')}
      </div>
      <div style="background:rgba(168,85,247,.08);border:1px solid rgba(168,85,247,.2);border-radius:8px;padding:12px;display:flex;gap:10px;align-items:flex-start">
        <span style="font-size:20px">🤖</span>
        <div>
          <div style="font-size:10px;color:var(--purple);font-weight:700;font-family:'Space Grotesk',sans-serif;letter-spacing:.1em;margin-bottom:4px">AI INSIGHT</div>
          <div style="font-size:12.5px;color:var(--text2)">
            ${w.name} (${w.ward}) has <strong style="color:var(--text)">${w.complaints} active complaints</strong>.
            ${w.score >= 80 ? 'Performing excellently — maintain current governance standards.' :
              w.score >= 72 ? 'Good performance with room to improve drainage and road infrastructure.' :
              w.score >= 65 ? 'Moderate performance — water supply and waste management need urgent attention.' :
              'Below-average governance — multiple infrastructure sectors require immediate intervention.'}
            Development at <strong style="color:var(--text)">${w.progress}%</strong> of annual target.
          </div>
        </div>
      </div>
      <button onclick="document.getElementById('ward-detail-panel').style.display='none'"
        style="margin-top:12px;background:none;border:1px solid var(--border);color:var(--text3);padding:6px 16px;border-radius:6px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:13px">✕ Close</button>
    </div>`;
  panel.scrollIntoView({ behavior:'smooth', block:'nearest' });
}

/* ─────────────────────────────────────────
   EXTEND switchSection for new sections
───────────────────────────────────────── */
const _origSwitchSection = switchSection;
switchSection = function(btn, id) {
  _origSwitchSection(btn, id);
  if (id === 'wards') {
    renderWardCards();
    renderTNMap();
  }
};

/* ─────────────────────────────────────────
   ZEAI FEATURES (particles, clock, feed, votes, AI)
───────────────────────────────────────── */
(function makeParticles() {
  const c = document.getElementById('na-particles');
  if (!c) return;
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'na-particle';
    const size = Math.random() * 2.5 + 1;
    p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${9+Math.random()*14}s;animation-delay:${Math.random()*12}s`;
    c.appendChild(p);
  }
})();

function naUpdateClock() {
  const el = document.getElementById('na-live-clock');
  if (el) el.textContent = new Date().toLocaleTimeString('en-IN', { hour12:false });
}
naUpdateClock(); setInterval(naUpdateClock, 1000);

const NA_FEED_ITEMS = [
  { icon:'✓',  bg:'rgba(34,197,94,.12)',  color:'#22C55E', title:'Complaint resolved — Ward 174, Besant Nagar streetlight', time:'2 min ago'  },
  { icon:'⚠️', bg:'rgba(245,158,11,.12)', color:'#F59E0B', title:'Garbage overflow alert — Ambattur sector',                time:'5 min ago'  },
  { icon:'🤖', bg:'rgba(168,85,247,.12)', color:'#A855F7', title:'AI triaged 14 complaints automatically',                  time:'9 min ago'  },
  { icon:'💧', bg:'rgba(59,130,246,.12)', color:'#3B82F6', title:'Water restored — Ward 14, Pallavaram pipeline fixed',     time:'14 min ago' },
  { icon:'📋', bg:'rgba(59,130,246,.1)',  color:'#3B82F6', title:'PWD team deployed — T. Nagar Main Road',                  time:'22 min ago' },
  { icon:'🏆', bg:'rgba(245,158,11,.1)',  color:'#F59E0B', title:'Ward 173 (Adyar) satisfaction up 4% this week',           time:'31 min ago' },
  { icon:'✓',  bg:'rgba(34,197,94,.12)', color:'#22C55E', title:'₹85L budget released — pipeline project Ward 12',         time:'45 min ago' },
  { icon:'🚨', bg:'rgba(239,68,68,.12)', color:'#EF4444', title:'Flood pre-alert — North Chennai, Thiruvottiyur zone',      time:'1 hr ago'   },
];

function naRenderFeed() {
  const el = document.getElementById('na-live-feed');
  if (!el) return;
  el.innerHTML = NA_FEED_ITEMS.slice(0,6).map(f => `
    <div class="na-feed-item">
      <div class="na-feed-ico" style="background:${f.bg}"><span style="color:${f.color}">${f.icon}</span></div>
      <div><div class="na-feed-title">${f.title}</div><div class="na-feed-time">${f.time}</div></div>
    </div>`).join('');
}
setInterval(() => { NA_FEED_ITEMS.push(NA_FEED_ITEMS.shift()); naRenderFeed(); }, 6000);

const NA_VOTES = [
  { id:1, title:'Fix all potholes on Old Mahabalipuram Road before monsoon', votes:1247, total:2000, voted:false },
  { id:2, title:'Install CCTV at Tambaram bus stand junction',                votes:923,  total:1500, voted:false },
  { id:3, title:'Resume twice-daily garbage collection in Chromepet',         votes:714,  total:1200, voted:false },
  { id:4, title:'Build footpath along GHS School zone — Pallavaram',          votes:542,  total:1000, voted:false },
];

function naRenderVotes() {
  const el = document.getElementById('na-vote-list');
  if (!el) return;
  el.innerHTML = NA_VOTES.map(v => {
    const pct = Math.round((v.votes / v.total) * 100);
    return `<div class="na-vote-item">
      <div class="na-vote-title">${v.title}</div>
      <div class="na-vote-bar-bg"><div class="na-vote-bar-fill" id="na-vbar-${v.id}" style="width:${pct}%"></div></div>
      <div class="na-vote-meta"><span>${v.votes.toLocaleString('en-IN')} votes</span><span>${pct}% support</span></div>
      <button class="na-vote-btn ${v.voted?'voted':''}" id="na-vbtn-${v.id}" onclick="naCastVote(${v.id})">${v.voted?'✅ Voted':'👍 Support this'}</button>
    </div>`;
  }).join('');
}

function naCastVote(id) {
  const v = NA_VOTES.find(x => x.id === id);
  if (!v || v.voted) return;
  v.votes++; v.voted = true;
  const pct = Math.round((v.votes / v.total) * 100);
  const bar = document.getElementById('na-vbar-' + id);
  const btn = document.getElementById('na-vbtn-' + id);
  if (bar) bar.style.width = pct + '%';
  if (btn) { btn.textContent = '✅ Voted'; btn.classList.add('voted'); }
  naShowToast('Your vote has been recorded! 🗳️');
}

/* ─────────────────────────────────────────
   AI ASSISTANT
───────────────────────────────────────── */
let naAIOpen = false;

const NA_AI_RESPONSES = {
  complaint: 'You can raise a complaint from the Complaints tab. Fill in your name, ward, category and description. Our AI validates it, checks for duplicates, assigns priority and routes to the right department — usually within minutes.',
  status: `Current GCC complaint status:\n• 1,247 active complaints across 36 wards\n• Top issues: Water supply, Roads, Drainage\n• 89 resolved today\n• AI auto-processed: 91% routed within 5 min\n• Best ward: Besant Nagar (Ward 174) — 91/100`,
  water: 'Water supply status:\n• Ward 12 pipeline project: 55% complete, est. Aug 2024\n• Ward 14 (Pallavaram): Fully restored ✅\n• Ward 11 (Chromepet): 18 active water complaints\n• CMWSSB helpline: 044-28592828\nWould you like to report a water issue?',
  budget: 'GCC Budget 2024:\n• Total sanctioned: ₹847 Crore across all zones\n• Infrastructure: ₹284Cr (64% utilized)\n• Healthcare: ₹142Cr | Education: ₹98Cr\n• Sanitation: ₹76Cr | Emergency: ₹45Cr\n• Transparency score: 78/100',
  flood: 'Flood risk prediction:\n• North Chennai (Thiruvottiyur zone): HIGH 78%\n• Tambaram zone: MODERATE 38%\n• Adyar coastal area: MONITOR 45%\n• Action: Keep storm drains clear\n• Emergency: NDRF 1800-180-4567',
  tvk: 'TVK (Tamilaga Vettri Kazhagam) 2026 Manifesto — 12 Key Promises:\n1. ₹2,500 monthly stipend for women\n2. Crop loan waiver for farmers\n3. ₹3,000 for seniors/widows/disabled\n4. 8g gold for poor brides\n5. 200 units free electricity\n6. Free bus travel for all women\n7. 6 free LPG cylinders/year\n8. Women safety department under CM\n9. Abolish NEET\n10. AI-driven governance\n11. 24/7 piped water supply\n12. Pothole-free Tamil Nadu\n\nStatus: Pre-election commitments — monitoring begins after election win.',
  councillor: 'GCC Councillor Performance (Top 3):\n🥇 Leela Krishnan P. — Besant Nagar (Ward 174): 91/100\n🥈 Anbu Selvi K. — Adyar (Ward 173): 88/100\n🥉 Divya Bharathi C. — Sholinganallur (Ward 160): 87/100\n\nNeeds improvement:\n⚠ Deepa Raj T. — Perungalathur: 67/100\nView full leaderboard in the Councillors tab.',
  ward12: 'Ward 12 — Tambaram Intelligence:\n• Councillor: Ravi Kumar S. (DMK)\n• AI Score: 78/100\n• Population: 82,400\n• Active complaints: 43\n• Water issues: 12 | Road: 9 | Drainage: 8\n• Budget: ₹4.2Cr (71% utilized)\n• Development: 71% complete\n\n🤖 Alert: Garbage overflow risk HIGH this week.',
  road: 'Road infrastructure updates:\n• Anna Nagar–Pallavaram widening: 92% complete\n• Asphalt laying Section B in progress\n• Est. completion: June 2024, Budget: ₹1.2Cr\n• PWD helpline: 044-25384700\n\nTVK Promise: Pothole-free Tamil Nadu within 2 years of election win.',
  sentiment: 'Public sentiment across GCC:\n• Positive: 48% (water & lighting improvements)\n• Neutral: 24%\n• Negative: 28% (roads & drainage)\n• Total responses: 4,812\n• Best zone: Adyar +89% positive\n• Most complaints: Ambattur zone',
  help: 'I can help you with:\n\n📊 Complaint status & ward data\n💧 Water supply updates\n🛣️ Road & project timelines\n💰 Budget & spending info\n🌊 Flood & risk predictions\n🏛️ Councillor performance (real GCC data)\n📋 TVK 2026 manifesto promises\n🗺️ Ward details across 15 zones\n\nAsk me in Tamil or English!',
  thanks: 'நன்றி! Thank you for using NaalaatchiApp. Your civic participation makes Tamil Nadu stronger. 🙏',
  default: 'I\'m NaalaatchiAI for Tamil Nadu civic intelligence. I have real data on GCC wards, councillors, TVK promises, and complaints. Try asking about a specific ward, the TVK manifesto, flood risk, or how to report an issue. Type "help" to see everything I can do!'
};

function naGetResponse(text) {
  const t = text.toLowerCase();
  if (t.includes('complain')||t.includes('report')||t.includes('ticket')||t.includes('புகார்')) return NA_AI_RESPONSES.complaint;
  if (t.includes('status')||t.includes('how many')||t.includes('active'))                       return NA_AI_RESPONSES.status;
  if (t.includes('water')||t.includes('தண்ணீர்')||t.includes('pipeline'))                      return NA_AI_RESPONSES.water;
  if (t.includes('budget')||t.includes('money')||t.includes('பட்ஜெட்'))                       return NA_AI_RESPONSES.budget;
  if (t.includes('flood')||t.includes('rain')||t.includes('வெள்ளம்'))                         return NA_AI_RESPONSES.flood;
  if (t.includes('tvk')||t.includes('udhayanidhi')||t.includes('promise')||t.includes('manifesto')||t.includes('வாக்குறுதி')) return NA_AI_RESPONSES.tvk;
  if (t.includes('councillor')||t.includes('leela')||t.includes('ravi')||t.includes('performance')) return NA_AI_RESPONSES.councillor;
  if (t.includes('ward 12')||t.includes('tambaram'))                                           return NA_AI_RESPONSES.ward12;
  if (t.includes('road')||t.includes('pothole')||t.includes('சாலை'))                          return NA_AI_RESPONSES.road;
  if (t.includes('sentiment')||t.includes('satisfaction')||t.includes('feedback'))             return NA_AI_RESPONSES.sentiment;
  if (t.includes('help')||t.includes('உதவி')||t.includes('what can'))                         return NA_AI_RESPONSES.help;
  if (t.includes('thank')||t.includes('நன்றி')||t.includes('great'))                          return NA_AI_RESPONSES.thanks;
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
  if (naAIOpen) setTimeout(() => { const i = document.getElementById('na-ai-input'); if(i) i.focus(); }, 300);
}

function naSendAI(presetMsg) {
  const input = document.getElementById('na-ai-input');
  const text  = presetMsg || (input ? input.value.trim() : '');
  if (!text) return;
  if (input) input.value = '';
  const msgs   = document.getElementById('na-ai-messages');
  const typing = document.getElementById('na-typing');
  if (!msgs) return;
  const userMsg = document.createElement('div');
  userMsg.className = 'na-msg na-msg-user';
  userMsg.textContent = text;
  msgs.appendChild(userMsg);
  msgs.scrollTop = msgs.scrollHeight;
  if (typing) typing.style.display = 'block';
  setTimeout(() => {
    if (typing) typing.style.display = 'none';
    const botMsg = document.createElement('div');
    botMsg.className = 'na-msg na-msg-bot';
    botMsg.innerHTML = naGetResponse(text).replace(/\n/g, '<br>');
    msgs.appendChild(botMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 900 + Math.random() * 700);
}

function naShowToast(msg) {
  if (typeof showToast === 'function') { showToast(msg); return; }
  const el = document.getElementById('na-toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('na-toast-show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('na-toast-show'), 3000);
}

/* ─────────────────────────────────────────
   INIT — run all renders on load
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  naRenderFeed();
  naRenderVotes();
});
window.addEventListener('load', () => {
  naRenderFeed();
  naRenderVotes();
});

/* ============================================================
   LANGUAGE TOGGLE — Tamil / English
   ============================================================ */
let currentLang = 'en';

// Full translation map
const TRANSLATIONS = {
  en: {
    // Nav
    'Overview': 'Overview', 'Councillors': 'Councillors', 'Wards': 'Wards',
    // Header
    'NaalaatchiApp': 'NaalaatchiApp', 'Digital Governance Platform': 'Digital Governance Platform',
    // Dashboard
    'TVK Promises': 'TVK Promises', 'Active Complaints': 'Active Complaints',
    'Public Satisfaction': 'Public Satisfaction', 'In Progress': 'In Progress',
    'Promise vs Delivery': 'Promise vs Delivery', 'Complaint Trend (30 days)': 'Complaint Trend (30 days)',
    'Top Issues This Week': 'Top Issues This Week', 'Budget Utilization': 'Budget Utilization',
    'Govt. Update Feed': 'Govt. Update Feed',
    // Tickets
    'Raise a Complaint': 'Raise a Complaint', 'My Complaints': 'My Complaints',
    'Submit Complaint': 'Submit Complaint',
    // Complaint form placeholders
    'Enter your full name': 'Enter your full name',
    'Brief title of your issue': 'Brief title of your issue',
    'Describe your issue in detail...': 'Describe your issue in detail...',
    'Near Tambaram Bus Stand, Street 4...': 'Near Tambaram Bus Stand, Street 4...',
    // Ward/Map
    'Tamil Nadu Governance Map': 'Tamil Nadu Governance Map',
    'All Wards': 'All Wards',
    // Sentiment
    'Sentiment Distribution': 'Sentiment Distribution',
    'Issue Heatmap by Category': 'Issue Heatmap by Category',
    'Vote on Local Issues': 'Vote on Local Issues',
    // Performance
    'Councillor Performance Leaderboard': 'Councillor Performance Leaderboard',
    // AI assistant
    'NaalaatchiAI': 'NaalaatchiAI',
    'Online · Tamil & English': 'Online · Tamil & English',
    // Notif
    'Notifications': 'Notifications',
  },
  ta: {
    // Nav
    'Overview': 'முகப்பு', 'Councillors': 'உறுப்பினர்கள்', 'Wards': 'வார்டுகள்',
    // Header
    'NaalaatchiApp': 'நாளாட்சி ஆப்', 'Digital Governance Platform': 'டிஜிட்டல் ஆட்சி தளம்',
    // Dashboard
    'TVK Promises': 'TVK வாக்குறுதிகள்', 'Active Complaints': 'செயலில் உள்ள புகார்கள்',
    'Public Satisfaction': 'பொது திருப்தி', 'In Progress': 'செயல்பாட்டில் உள்ளது',
    'Promise vs Delivery': 'வாக்குறுதி vs நிறைவேற்றம்', 'Complaint Trend (30 days)': 'புகார் போக்கு (30 நாட்கள்)',
    'Top Issues This Week': 'இந்த வாரம் முக்கிய பிரச்சனைகள்', 'Budget Utilization': 'பட்ஜெட் பயன்பாடு',
    'Govt. Update Feed': 'அரசு புதுப்பிப்பு',
    // Tickets
    'Raise a Complaint': 'புகார் அளிக்கவும்', 'My Complaints': 'என் புகார்கள்',
    'Submit Complaint': 'புகார் சமர்ப்பிக்கவும்',
    // Complaint form
    'Enter your full name': 'உங்கள் முழு பெயரை உள்ளிடவும்',
    'Brief title of your issue': 'பிரச்சனையின் சுருக்கமான தலைப்பு',
    'Describe your issue in detail...': 'உங்கள் பிரச்சனையை விரிவாக விவரிக்கவும்...',
    'Near Tambaram Bus Stand, Street 4...': 'தாம்பரம் பஸ் நிறுத்தம் அருகில், தெரு 4...',
    // Ward/Map
    'Tamil Nadu Governance Map': 'தமிழ்நாடு ஆட்சி வரைபடம்',
    'All Wards': 'அனைத்து வார்டுகள்',
    // Sentiment
    'Sentiment Distribution': 'கருத்து விநியோகம்',
    'Issue Heatmap by Category': 'வகை வாரியான பிரச்சனை வரைபடம்',
    'Vote on Local Issues': 'உள்ளூர் பிரச்சனைகளில் வாக்களிக்கவும்',
    // Performance
    'Councillor Performance Leaderboard': 'உறுப்பினர் செயல்திறன் பட்டியல்',
    // AI assistant
    'NaalaatchiAI': 'நாளாட்சி AI',
    'Online · Tamil & English': 'ஆன்லைன் · தமிழ் & ஆங்கிலம்',
    // Notif
    'Notifications': 'அறிவிப்புகள்',
  }
};

// All data-en/data-ta labeled content + inputs with data-placeholder-*
function applyLanguage(lang) {
  currentLang = lang;
  const isTamil = lang === 'ta';

  // Toggle button UI
  const btn   = document.getElementById('lang-toggle-btn');
  const label = document.getElementById('lang-label');
  if (btn)   btn.classList.toggle('lang-ta', isTamil);
  if (label) label.textContent = isTamil ? 'தமிழ்' : 'EN';

  // All [data-en] and [data-ta] elements
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isTamil ? (el.getAttribute('data-ta') || el.getAttribute('data-en')) : el.getAttribute('data-en');
    if (isTamil) el.classList.add('lang-ta-text');
    else         el.classList.remove('lang-ta-text');
  });

  // Inputs with placeholder translations
  document.querySelectorAll('[data-placeholder-en]').forEach(el => {
    el.placeholder = isTamil
      ? (el.getAttribute('data-placeholder-ta') || el.getAttribute('data-placeholder-en'))
      : el.getAttribute('data-placeholder-en');
  });

  // AI assistant name
  const aiName = document.querySelector('.na-ai-name');
  if (aiName) aiName.textContent = isTamil ? 'நாளாட்சி AI' : 'NaalaatchiAI';

  const aiStatus = document.querySelector('.na-ai-status');
  if (aiStatus) {
    const dot = aiStatus.querySelector('.na-online-dot');
    aiStatus.innerHTML = '';
    if (dot) aiStatus.appendChild(dot);
    aiStatus.appendChild(document.createTextNode(isTamil ? ' ஆன்லைன் · தமிழ் & ஆங்கிலம்' : ' Online · Tamil & English'));
  }

  // Logo sub
  const logoSub = document.querySelector('.logo-sub');
  if (logoSub) logoSub.textContent = isTamil ? 'டிஜிட்டல் ஆட்சி தளம்' : 'Digital Governance Platform';

  // Complaint form submit button
  const submitBtn = document.querySelector('.ticket-form .btn-primary');
  if (submitBtn) submitBtn.innerHTML = isTamil
    ? '<i class="ti ti-send"></i> புகார் சமர்ப்பிக்கவும்'
    : '<i class="ti ti-send"></i> Submit Complaint';

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterLabels = {
    en: ['All', 'Open', 'In Progress', 'Resolved', 'Cancelled'],
    ta: ['அனைத்தும்', 'திறந்தது', 'செயல்பாட்டில்', 'தீர்க்கப்பட்டது', 'ரத்து செய்யப்பட்டது'],
  };
  filterBtns.forEach((btn, i) => {
    if (filterLabels[lang][i]) btn.textContent = filterLabels[lang][i];
  });

  // Ward search placeholder
  const wardSearch = document.getElementById('ward-search-input');
  if (wardSearch) wardSearch.placeholder = isTamil ? 'வார்டு அல்லது மண்டலம் தேடவும்...' : 'Search ward or zone...';

  // Alert ticker
  const alertInner = document.getElementById('na-alert-text');
  if (alertInner) alertInner.textContent = isTamil
    ? '✅ வார்டு 14 குடிநீர் திட்டம் முடிந்தது — சேவை மீட்டமைக்கப்பட்டது   |   ⚠️ குப்பை அதிகரிப்பு எச்சரிக்கை: தாம்பரம் — குழு அனுப்பப்பட்டது   |   🤖 AI இன்று 127 புகார்களை செயலாக்கியது — 91% 5 நிமிடத்தில் திசைதிருப்பப்பட்டது'
    : '✅ Ward 14 water pipeline repair completed — service restored   |   ⚠️ Garbage overflow alert: Tambaram sector — crew dispatched   |   🤖 AI triaged 127 complaints today — 91% routed in under 5 minutes';

  // AI quick buttons
  const quickBtns = document.querySelectorAll('.na-quick-btn');
  const quickLabels = {
    en: ['Top complaints', 'Flood risk', 'Budget', 'Report issue'],
    ta: ['முக்கிய புகார்கள்', 'வெள்ள ஆபத்து', 'பட்ஜெட்', 'புகார் அளிக்கவும்'],
  };
  quickBtns.forEach((btn, i) => {
    if (quickLabels[lang][i]) btn.textContent = quickLabels[lang][i];
  });

  // Notify panel header
  const notifHeader = document.querySelector('.notif-panel-header span');
  if (notifHeader) notifHeader.textContent = isTamil ? 'அறிவிப்புகள்' : 'Notifications';

  // Notif items
  document.querySelectorAll('.notif-title[data-en]').forEach(el => {
    el.textContent = isTamil ? el.getAttribute('data-ta') : el.getAttribute('data-en');
  });

  // AI first message
  const firstMsg = document.querySelector('.na-msg.na-msg-bot');
  if (firstMsg && firstMsg.dataset.default) {
    firstMsg.innerHTML = isTamil
      ? 'வணக்கம்! நான் நாளாட்சி AI — வார்டு 12, தாம்பரத்திற்கான குடிமை உதவியாளர். புகார் நிலை, வார்டு தகவல், TVK வாக்குறுதிகள் அல்லது பட்ஜெட் பற்றி கேளுங்கள்!'
      : 'வணக்கம்! I\'m NaalaatchiAI — your civic intelligence assistant for Ward 12, Tambaram. I can help you check complaint status, understand ward issues, get budget info, or predict civic risks. How can I help?';
  }

  // Save preference
  try { localStorage.setItem('naalaatchi_lang', lang); } catch(e) {}
}

function toggleLanguage() {
  applyLanguage(currentLang === 'en' ? 'ta' : 'en');
}

/* ============================================================
   DARK / LIGHT THEME TOGGLE
   ============================================================ */
let isDark = false;

function applyTheme(dark) {
  isDark = dark;
  document.body.classList.toggle('dark-mode', dark);
  const icon = document.getElementById('theme-icon');
  if (icon) icon.className = dark ? 'ti ti-moon' : 'ti ti-sun';
  try { localStorage.setItem('naalaatchi_theme', dark ? 'dark' : 'light'); } catch(e) {}
}

function toggleTheme() {
  applyTheme(!isDark);
  naShowToast(isDark ? (currentLang === 'ta' ? '🌙 இருண்ட பயன்முறை' : '🌙 Dark mode on') : (currentLang === 'ta' ? '☀️ ஒளி பயன்முறை' : '☀️ Light mode on'));
}

/* ============================================================
   NOTIFICATION PANEL
   ============================================================ */
let notifOpen = false;

function toggleNotifPanel() {
  notifOpen = !notifOpen;
  const panel = document.getElementById('notif-panel');
  if (!panel) return;
  panel.style.display = notifOpen ? 'block' : 'none';
  // Remove new indicator when opened
  if (notifOpen) {
    const dot = document.querySelector('.notif-dot');
    if (dot) dot.style.display = 'none';
  }
}

// Close notif panel on outside click
document.addEventListener('click', (e) => {
  if (!notifOpen) return;
  const panel = document.getElementById('notif-panel');
  const btn   = document.getElementById('notif-btn');
  if (panel && btn && !panel.contains(e.target) && !btn.contains(e.target)) {
    notifOpen = false;
    panel.style.display = 'none';
  }
});

/* ============================================================
   RESTORE SAVED PREFERENCES ON LOAD
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Restore theme
  try {
    const savedTheme = localStorage.getItem('naalaatchi_theme');
    if (savedTheme === 'dark') applyTheme(true);
    else applyTheme(false); // default = light
  } catch(e) { applyTheme(false); }

  // Restore language
  try {
    const savedLang = localStorage.getItem('naalaatchi_lang');
    if (savedLang === 'ta') applyLanguage('ta');
  } catch(e) {}

  // Mark first AI message as default
  const firstMsg = document.querySelector('.na-msg.na-msg-bot');
  if (firstMsg) firstMsg.dataset.default = 'true';
});

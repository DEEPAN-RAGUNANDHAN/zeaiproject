# NaalaatchiApp — Digital Governance Platform
### Prototype v1.0

A civic transparency and governance dashboard with:
- Promise vs Delivery analytics
- Real-time project progress timeline
- Political performance analytics
- Public sentiment tracking
- AI-powered complaint ticketing system

---

## 📁 File Structure

```
naalaatchi/
├── index.html    ← Main HTML (structure & layout)
├── style.css     ← All styling (dark theme, responsive)
├── app.js        ← All data, charts, interactivity
└── README.md     ← This file
```

---

## 🚀 Deployment Options

### Option 1 — Open Locally (Zero setup)
Just open `index.html` in any browser. Works instantly.

### Option 2 — GitHub Pages (Free, permanent URL)
1. Create a GitHub account at github.com
2. New repo → name it `naalaatchi` (make it Public)
3. Upload all 3 files (`index.html`, `style.css`, `app.js`)
4. Go to repo **Settings → Pages → Source → main branch → / (root)**
5. Your site is live at: `https://yourusername.github.io/naalaatchi`

### Option 3 — Netlify (Free, custom domain support)
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag and drop the `naalaatchi/` folder onto the deploy area
3. Instantly live at a random URL like `https://random-name.netlify.app`
4. Can connect a custom domain (e.g. `naalaatchi.in`)

### Option 4 — Vercel (Free, fast CDN)
1. Install Vercel CLI: `npm i -g vercel`
2. Inside the folder run: `vercel`
3. Follow prompts → live in 30 seconds

### Option 5 — Firebase Hosting (Free)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public directory to: .  (current folder)
firebase deploy
```

---

## 🛠 Customization Guide

### Change ward / location
In `index.html`, search for `Ward 12 — Tambaram` and update.

### Add more promises
In `app.js`, find `DATA.promises` array and add:
```js
{ icon:'🏗️', iconBg:'rgba(59,130,246,.1)', name:'Your promise here', meta:'Promised: Month Year · Budget: ₹X L', pct:50, color:'#3B82F6' }
```

### Add more tickets
In `app.js`, find `DATA.tickets` array:
```js
{ id:'#TKT-2024-0100', title:'Issue title', cat:'Category', ward:'Ward 12',
  date:'15 May 2024', status:'open', verdict:'AI review text here.' }
```
Status options: `open` | `noted` | `wip` | `done` | `invalid`

### Add more councillors to leaderboard
In `app.js`, find `DATA.leaderboard`:
```js
{ name:'Name Here', ward:'Ward X', score:75, delivery:60, trend:'up' }
```
`trend` options: `up` | `dn` | `flat`

### Change color theme
All colors are CSS variables in `style.css` under `:root { ... }`.
Change `--accent`, `--green`, `--amber`, etc. to any hex values.

---

## 🔌 Making it Real (Backend Integration)

To connect to a real backend, replace the `DATA` object in `app.js`
with API calls:

```js
async function loadData() {
  const res = await fetch('https://your-api.com/api/tickets');
  const data = await res.json();
  DATA.tickets = data;
  renderTickets('all');
}
```

Recommended backends: **Supabase** (free), **Firebase**, **Node.js + Express**

---

## 📦 Dependencies (all via CDN, no install needed)
- **Chart.js** 4.4.1 — charts and graphs
- **Tabler Icons** — icon font
- **Google Fonts** — DM Sans + Space Grotesk

---

Built for prototype/demo purposes. All data is static/simulated.

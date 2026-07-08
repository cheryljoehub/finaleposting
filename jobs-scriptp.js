/* ============================================================
   STEP 1 — ONE-TIME EMAILJS SETUP (free, ~5 minutes)
   1. Go to https://www.emailjs.com and create a free account.
   2. Add an Email Service (e.g. connect your Gmail) → copy its
      "Service ID" into EMAILJS_SERVICE_ID below.
   3. Create an Email Template. In the template body, use these
      variable names so they fill in correctly:
         {{to_email}}   → recipient's address
         {{job_count}}  → number of jobs selected
         {{week_of}}    → the week label
         {{job_list}}   → the formatted list of selected jobs
      Copy its "Template ID" into EMAILJS_TEMPLATE_ID below.
   4. Go to Account → General → copy your "Public Key" into
      EMAILJS_PUBLIC_KEY below.
   That's it — the form below will start sending real emails.
   ============================================================ */

const EMAILJS_SERVICE_ID  = "service_bazfoet";
const EMAILJS_TEMPLATE_ID = "template_h0w8en2";
const EMAILJS_PUBLIC_KEY  = "PNgKNRpf6HZ_tgm42";

if (window.emailjs && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
  // initialize EmailJS with the public key (string form is compatible
  // with the CDN/browser bundle)
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

/* ============================================================
   STEP 2 — WEEKLY UPDATE ZONE
   Edit WEEK_OF and each major's job list every Monday.
   Each major should carry at least 10 postings: { title, company, link }
   Delete last week's entries and paste in the new ones.
   ============================================================ */

const WEEK_OF = "July 7, 2026";

const MAJORS = {
  finance: {
    label: "Finance",
    icon: "💹",
    desc: "Investment banking, corporate finance, and asset management roles.",
    jobs: [
      { title: "Investment Banking Analyst", company: "Example Bank", link: "www.google.com" },
     /* { title: "Director, Credit Risk", company: "Sallie Mae", link: "https://sallie-mae.wd5.myworkdayjobs.com/en-US/Careers/job/Director--Credit-Risk_R26_000445" },
      { title: "Financial Analyst", company: "Example Inc.", link: "#" },
      { title: "Credit Analyst", company: "Example Capital", link: "#" },
      { title: "Treasury Analyst", company: "Example Holdings", link: "#" },
      { title: "Wealth Management Associate", company: "Example Wealth", link: "#" },
      { title: "Equity Research Associate", company: "Example Securities", link: "#" },
      { title: "FP&A Analyst", company: "Example Group", link: "#" },
      { title: "Private Equity Analyst", company: "Example Partners", link: "#" },*/
      { title: "Risk Analyst", company: "Example Bank", link: "#" }
    ]
  },
  accounting: {
    label: "Accounting",
    icon: "📊",
    desc: "Audit, tax, and staff accounting positions at firms of every size.",
    jobs: [
     /* { title: "Staff Auditor", company: "Example & Co.", link: "#" },
      { title: "Tax Associate", company: "Example Advisory", link: "#" },
      { title: "Junior Accountant", company: "Example Firm", link: "#" },
      { title: "Accounts Payable Associate", company: "Example Corp", link: "#" },
      { title: "Internal Audit Associate", company: "Example Holdings", link: "#" },
      { title: "Cost Accountant", company: "Example Manufacturing", link: "#" },
      { title: "Payroll Accountant", company: "Example Group", link: "#" },
      { title: "Forensic Accounting Assistant", company: "Example Advisory", link: "#" },
      { title: "Bookkeeper", company: "Example Small Biz", link: "#" },
      { title: "Compliance Associate", company: "Example & Co.", link: "#" }*/
    ]
  },
  economics: {
    label: "Economics",
    icon: "🌐",
    trend: "down",
    desc: "Research, policy, and consulting roles for data-driven thinkers.",
    jobs: [
    /*  { title: "Economic Research Assistant", company: "Example Institute", link: "#" },
      { title: "Policy Analyst", company: "Example Think Tank", link: "#" },*/
      { title: "Junior Economist", company: "Example Consulting", link: "#" },
      { title: "Market Research Analyst", company: "Example Insights", link: "#" },
      { title: "Data & Policy Fellow", company: "Example Gov Agency", link: "#" },
      { title: "Quantitative Research Intern", company: "Example Fund", link: "#" },
      { title: "Public Policy Associate", company: "Example Institute", link: "#" },
      { title: "Trade Analyst", company: "Example Commerce Co.", link: "#" },
      { title: "Regulatory Affairs Assistant", company: "Example Group", link: "#" },
      { title: "Statistical Analyst", company: "Example Bureau", link: "#" }
    ]
  },
  marketing: {
    label: "Marketing",
    icon: "📣",
    trend: "up",
    desc: "Brand, digital, and growth marketing openings.",
    jobs: [
     /* { title: "Marketing Coordinator", company: "Example Brands", link: "#" },
      { title: "Digital Marketing Associate", company: "Example Agency", link: "#" },
      { title: "Social Media Coordinator", company: "Example Media", link: "#" },
      { title: "Brand Marketing Intern", company: "Example Consumer Co.", link: "#" },
      { title: "SEO Specialist", company: "Example Growth", link: "#" },
      { title: "Content Marketing Associate", company: "Example Studio", link: "#" },*/
      { title: "Email Marketing Coordinator", company: "Example Retail", link: "#" },
      { title: "Product Marketing Associate", company: "Example Tech", link: "#" },
      { title: "Marketing Analyst", company: "Example Brands", link: "#" },
      { title: "Events & Campaigns Coordinator", company: "Example Agency", link: "#" }
    ]
  },
  hr: {
    label: "Human Resources",
    icon: "🤝",
    trend: "steady",
    desc: "People operations, talent, and organizational development roles.",
    jobs: [
     /* { title: "HR Generalist", company: "Example Co.", link: "#" },
      { title: "Talent Acquisition Coordinator", company: "Example Group", link: "#" },
      { title: "People Operations Associate", company: "Example Startup", link: "#" },
      { title: "Recruiting Coordinator", company: "Example Corp", link: "#" },
      { title: "HR Coordinator", company: "Example Holdings", link: "#" },
      { title: "Benefits Administrator", company: "Example Inc.", link: "#" },
      { title: "Learning & Development Assistant", company: "Example Academy", link: "#" },
      { title: "DEI Program Coordinator", company: "Example Group", link: "#" },
      { title: "HRIS Analyst", company: "Example Systems", link: "#" },
      { title: "Employee Relations Associate", company: "Example Co.", link: "#" }*/
    ]
  },
  analytics: {
    label: "Business Analytics",
    icon: "📈",
    trend: "up",
    desc: "Data and business intelligence roles across industries.",
    jobs: [
     /* { title: "Business Analyst", company: "Example Data Co.", link: "#" },
      { title: "Data Analyst", company: "Example Analytics", link: "#" },
      { title: "BI Developer", company: "Example Tech", link: "#" },
      { title: "Reporting Analyst", company: "Example Corp", link: "#" },
      { title: "Operations Analyst", company: "Example Holdings", link: "#" },
      { title: "Insights Analyst", company: "Example Retail", link: "#" },
      { title: "Junior Data Scientist", company: "Example Labs", link: "#" },
      { title: "Analytics Consultant", company: "Example Consulting", link: "#" },
      { title: "Dashboard & Metrics Analyst", company: "Example Group", link: "#" },
      { title: "Strategy Analyst", company: "Example Inc.", link: "#" }*/
    ]
  },
  entrepreneurship: {
    label: "Entrepreneurship",
    icon: "🚀",
    trend: "down",
    desc: "Startup, venture, and early-stage operating roles.",
    jobs: [
     /* { title: "Founder's Associate", company: "Example Startup", link: "#" },
      { title: "Venture Analyst", company: "Example Ventures", link: "#" },
      { title: "Startup Operations Associate", company: "Example Labs", link: "#" },
      { title: "Growth Associate", company: "Example Startup", link: "#" },
      { title: "Business Development Associate", company: "Example Co.", link: "#" },
      { title: "Incubator Program Coordinator", company: "Example Accelerator", link: "#" },
      { title: "Product Associate", company: "Example App", link: "#" },
      { title: "Venture Capital Intern", company: "Example Fund", link: "#" },
      { title: "New Ventures Analyst", company: "Example Group", link: "#" },
      { title: "Startup Founder Fellow", company: "Example Foundation", link: "#" }*/
    ]
  },
  hospitality: {
    label: "Hospitality Mgmt",
    icon: "🏨",
    trend: "steady",
    desc: "Hotel, event, and guest-experience operations roles.",
    jobs: [
    /*  { title: "Hotel Operations Intern", company: "Example Hotels", link: "#" },
      { title: "Front Office Supervisor", company: "Example Resort", link: "#" },
      { title: "Event Coordinator", company: "Example Venues", link: "#" },
      { title: "Guest Experience Associate", company: "Example Hospitality", link: "#" },
      { title: "Food & Beverage Supervisor", company: "Example Resort", link: "#" },
      { title: "Revenue Management Analyst", company: "Example Hotels", link: "#" },
      { title: "Catering Coordinator", company: "Example Venues", link: "#" },
      { title: "Concierge Team Lead", company: "Example Hotels", link: "#" },
      { title: "Resort Operations Associate", company: "Example Resort", link: "#" },
      { title: "Hospitality Management Trainee", company: "Example Group", link: "#" }*/
    ]
  },
  sportsManagement: {
    label: "Sports Management",
    icon: "🏟️",
    trend: "down",
    desc: "Team operations, athletic administration, and sports marketing.",
    jobs: [
  /*    { title: "Team Operations Assistant", company: "Example Athletics", link: "#" },
      { title: "Athletic Administration Intern", company: "Example University", link: "#" },
      { title: "Sports Marketing Coordinator", company: "Example League", link: "#" },
      { title: "Ticket Sales Associate", company: "Example Team", link: "#" },
      { title: "Game Day Operations Assistant", company: "Example Arena", link: "#" },
      { title: "Community Relations Coordinator", company: "Example Team", link: "#" },
      { title: "Sponsorship Sales Associate", company: "Example League", link: "#" },
      { title: "Facilities Operations Assistant", company: "Example Stadium", link: "#" },
      { title: "Sports Analytics Assistant", company: "Example Athletics", link: "#" },
      { title: "Athlete Relations Coordinator", company: "Example Agency", link: "#" }*/
    ]
  },
  supplyChain: {
    label: "Supply Chain",
    icon: "📦",
    trend: "up",
    desc: "Logistics, procurement, and operations analyst roles.",
    jobs: [
    /*  { title: "Supply Chain Analyst", company: "Example Logistics", link: "#" },
      { title: "Procurement Coordinator", company: "Example Manufacturing", link: "#" },
      { title: "Logistics Coordinator", company: "Example Freight", link: "#" },
      { title: "Inventory Analyst", company: "Example Retail", link: "#" },
      { title: "Operations Coordinator", company: "Example Distribution", link: "#" },
      { title: "Demand Planning Analyst", company: "Example Group", link: "#" },
      { title: "Warehouse Operations Associate", company: "Example Logistics", link: "#" },
      { title: "Sourcing Analyst", company: "Example Manufacturing", link: "#" },
      { title: "Fleet Operations Assistant", company: "Example Freight", link: "#" },
      { title: "Supply Planning Associate", company: "Example Corp", link: "#" }*/
    ]
  },
  businessManagement: {
    label: "Business Mgmt",
    icon: "🧭",
    trend: "steady",
    desc: "Generalist operations, project, and management-track roles.",
    jobs: [
      /*{ title: "Operations Coordinator", company: "Example Co.", link: "#" },
      { title: "Project Coordinator", company: "Example Group", link: "#" },
      { title: "Management Trainee", company: "Example Corp", link: "#" },
      { title: "Business Operations Associate", company: "Example Holdings", link: "#" },
      { title: "Process Improvement Analyst", company: "Example Inc.", link: "#" },
      { title: "General Manager Trainee", company: "Example Retail", link: "#" },
      { title: "Strategy & Ops Associate", company: "Example Group", link: "#" },
      { title: "Client Operations Coordinator", company: "Example Services", link: "#" },
      { title: "Program Coordinator", company: "Example Foundation", link: "#" },
      { title: "Junior Project Manager", company: "Example Corp", link: "#" }*/
    ]
  }
};

// Ensure each job has a working link (fallback to a Google search URL)
(function normalizeJobLinks() {
  Object.values(MAJORS).forEach((m) => {
    m.jobs.forEach((job) => {
      if (!job.link || job.link === "#") {
        const q = encodeURIComponent((job.title || "job") + " " + (job.company || ""));
        job.link = `https://www.google.com/search?q=${q}`;
      } else if (/^[^/:]+$/.test(job.link)) {
        // if link is like 'www.google.com', add protocol
        job.link = `https://${job.link}`;
      }
    });
  });
})();

/* ============================================================
   RENDER + SELECTION LOGIC — no need to touch below this line
   ============================================================ */

let activeMajor = Object.keys(MAJORS)[0];

// selection map keyed by "majorKey::index" → job object
const selected = new Map();
const PREVIOUS_PAGE_KEY = "jobPostingsPreviousPage";

function init() {
  rememberPreviousPage();
  buildStats();
  buildTicker();
  buildNav();
  renderPanel();
  bindSelectionBar();
  bindModal();
  bindBackButton();
}

function rememberPreviousPage() {
  const referrer = document.referrer;
  if (referrer && referrer !== window.location.href) {
    sessionStorage.setItem(PREVIOUS_PAGE_KEY, referrer);
  }
}

function goBack() {
  const storedPreviousPage = sessionStorage.getItem(PREVIOUS_PAGE_KEY);

  if (storedPreviousPage && storedPreviousPage !== window.location.href) {
    window.location.href = storedPreviousPage;
  } else if (document.referrer && document.referrer !== window.location.href) {
    window.location.href = document.referrer;
  } else if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "./";
  }
}

function bindBackButton() {
  const backBtn = document.getElementById("backBtn");
  if (!backBtn) return;

  backBtn.addEventListener("click", goBack);
}

function buildStats() {
  const majorCount = Object.keys(MAJORS).length;
  const jobCount = Object.values(MAJORS).reduce((sum, m) => sum + m.jobs.length, 0);

  document.getElementById("stat-strip").innerHTML = `
    <div class="stat-chip">
      <span class="stat-value">${jobCount}</span>
      <span class="stat-label">Open Roles</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${majorCount}</span>
      <span class="stat-label">Departments</span>
    </div>
    <div class="stat-chip">
      <span class="stat-value">${WEEK_OF}</span>
      <span class="stat-label">Week Of</span>
    </div>
  `;
}

function buildTicker() {
  const track = document.getElementById("ticker-track");
  const trendMap = {
    up: { icon: "▲", label: "6+ openings", className: "up" },
    down: { icon: "▼", label: "0–2 openings", className: "down" },
    steady: { icon: "—", label: "3–5 openings", className: "steady" }
  };

  const items = Object.values(MAJORS).map(m => {
    const count = m.jobs.length;
    const trendKey = count > 5 ? "up" : count >= 3 ? "steady" : "down";
    const trend = trendMap[trendKey];
    return `
      <span class="ticker-item">
        <b>${m.label.toUpperCase()}</b>
        ${count} OPEN
        <span class="ticker-icon ${trend.className}" title="${trend.label}">${trend.icon}</span>
      </span>`;
  });

  track.innerHTML = items.join("") + items.join("");
}

function buildNav() {
  const nav = document.getElementById("majors-nav");
  nav.innerHTML = "";
  Object.entries(MAJORS).forEach(([key, m]) => {
    const btn = document.createElement("button");
    btn.className = "major-btn" + (key === activeMajor ? " active" : "");
    btn.innerHTML = `
      <span class="icon">${m.icon || "•"}</span>
      <span class="label">${m.label}</span>
      <span class="count">${m.jobs.length}</span>
    `;
    btn.onclick = () => {
      activeMajor = key;
      buildNav();
      renderPanel();
    };
    nav.appendChild(btn);
  });
}

function renderPanel() {
  const m = MAJORS[activeMajor];
  document.getElementById("panel-title").textContent = m.label;
  document.getElementById("panel-desc").textContent = m.desc || "";
  document.getElementById("week-chip").textContent = "Week of " + WEEK_OF;

  const list = document.getElementById("job-list");
  list.innerHTML = "";

  if (!m.jobs.length) {
    list.innerHTML = `<li class="empty-state">No roles posted for this department yet — check back next Monday.</li>`;
    return;
  }

  m.jobs.forEach((job, i) => {
    const selectionKey = activeMajor + "::" + i;
    const isChecked = selected.has(selectionKey);

    const li = document.createElement("li");
    li.innerHTML = `
      <div class="job${isChecked ? " checked" : ""}" data-key="${selectionKey}">
        <label class="job-check">
          <input type="checkbox" ${isChecked ? "checked" : ""} data-key="${selectionKey}">
          <span class="box">
            <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="#241536" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
        </label>
        <span class="job-rank">${i + 1}</span>
        <span class="job-main">
          <p class="job-title">${job.title}</p>
          <span class="job-company">${job.company || ""}</span>
        </span>
        <!-- link icon removed; job.link still present for modal/email -->
      </div>
    `;
    list.appendChild(li);
  });

  // wire up checkboxes
  list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener("change", onCheckboxChange);
  });
}

function onCheckboxChange(e) {
  const key = e.target.dataset.key;
  const [majorKey, idx] = key.split("::");
  const job = MAJORS[majorKey].jobs[Number(idx)];
  const jobRow = e.target.closest(".job");

  if (e.target.checked) {
    selected.set(key, { ...job, majorLabel: MAJORS[majorKey].label });
    jobRow.classList.add("checked");
  } else {
    selected.delete(key);
    jobRow.classList.remove("checked");
  }

  updateSelectionBar();
}

function updateSelectionBar() {
  const bar = document.getElementById("selection-bar");
  const count = selected.size;
  document.getElementById("selected-count").textContent = count;
  document.getElementById("plural-s").textContent = count === 1 ? "" : "s";
  bar.classList.toggle("visible", count > 0);
}

function bindSelectionBar() {
  document.getElementById("email-btn").addEventListener("click", openModal);
}

function bindModal() {
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target.id === "modal-overlay") closeModal();
  });
  document.getElementById("send-btn").addEventListener("click", sendSelectedJobs);
}

function openModal() {
  const overlay = document.getElementById("modal-overlay");
  const list = document.getElementById("modal-job-list");
  const sub = document.getElementById("modal-sub");

  const jobs = Array.from(selected.values());
  sub.textContent = `We'll send the links for your ${jobs.length} selected role${jobs.length === 1 ? "" : "s"}.`;

  list.innerHTML = jobs.map(j => `
    <li>${j.title} — ${j.company}<span>${j.majorLabel} · ${j.link}</span></li>
  `).join("");

  document.getElementById("modal-status").textContent = "";
  document.getElementById("modal-status").className = "modal-status";
  overlay.classList.add("visible");
}

function buildMailto(jobs, toEmail) {
  const subject = encodeURIComponent(`Job links — ${WEEK_OF}`);
  const bodyLines = jobs.map((j, i) => `${i + 1}. ${j.title} — ${j.company} (${j.majorLabel})\n${j.link}`);
  const body = encodeURIComponent(`Here are the roles you selected for ${WEEK_OF}:\n\n${bodyLines.join("\n\n")}`);
  let mailto = `mailto:${encodeURIComponent(toEmail || "")}?subject=${subject}&body=${body}`;
  return mailto;
}

function openMailClient() {
  const emailInput = document.getElementById("email-input");
  const email = emailInput.value.trim();
  const jobs = Array.from(selected.values());
  const mailto = buildMailto(jobs, email);
  // open in new window/tab to avoid navigation in single-page contexts
  window.open(mailto);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("visible");
}

function sendSelectedJobs() {
  const emailInput = document.getElementById("email-input");
  const status = document.getElementById("modal-status");
  const email = emailInput.value.trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    status.textContent = "Please enter a valid email address.";
    status.className = "modal-status error";
    return;
  }

  if (!window.emailjs || EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY") {
    status.textContent = "Email sending isn't set up yet — see the setup note at the top of jobs-script.js.";
    status.className = "modal-status error";
    return;
  }

  const jobs = Array.from(selected.values());
  const jobListText = jobs
    .map((j, i) => `${i + 1}. ${j.title} (${j.company}, ${j.majorLabel}) — ${j.link}`)
    .join("\n");

  const sendBtn = document.getElementById("send-btn");
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  const payload = {
    to_email: email,
    job_count: jobs.length,
    week_of: WEEK_OF,
    job_list: jobListText
  };

  console.debug("Email payload:", payload);

  if (!window.emailjs || typeof emailjs.send !== "function") {
    console.error("EmailJS SDK not available or not loaded correctly.");
    status.textContent = "EmailJS SDK not loaded. Check the script include in jobs.html.";
    status.className = "modal-status error";
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Links";
    return;
  }

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, payload)
    .then((res) => {
      console.debug("EmailJS response:", res);
      status.textContent = "Sent! Check your inbox for the links.";
      status.className = "modal-status success";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
      setTimeout(closeModal, 1800);
    })
    .catch((err) => {
      console.error("EmailJS send error:", err);

      // Friendly, more-detailed error message for debugging — user can copy this
      let details = "";
      try {
        if (err && typeof err === "object") {
          if (err.status) details += ` Status: ${err.status}.`;
          if (err.text) details += ` Response: ${err.text}`;
          if (!details) details = " " + JSON.stringify(err);
        } else {
          details = " " + String(err);
        }
      } catch (ex) {
        details = " (error serializing error)";
      }

      status.textContent = "Something went wrong sending that email." + details;
      status.className = "modal-status error";
      sendBtn.disabled = false;
      sendBtn.textContent = "Send Links";
    });
}

init();

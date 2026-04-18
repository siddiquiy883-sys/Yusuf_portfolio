"use client";

import { useEffect, useRef, useState } from "react";

// ── TESTIMONIALS DATA ──
const TESTIMONIALS = [
  {
    brand: "Springboks Real Estate",
    author: "Marketing Director",
    text: "Yusuf transformed our digital performance strategy. His approach to agentic automation cut our cost-per-lead by 40% while doubling our qualified pipeline. An exceptional performance marketing mind with a rare combination of technical depth and strategic vision.",
  },
  {
    brand: "Turkey Homes",
    author: "Head of Digital",
    text: "Working with Yusuf was a game-changer for our paid media operations. He built scalable programmatic frameworks that increased our brand reach across international markets while maintaining razor-sharp ROAS targets. Highly recommended.",
  },
  {
    brand: "Toshiba",
    author: "VP Digital Marketing",
    text: "Yusuf's performance architecture for our regional campaigns delivered outstanding results. His mastery of paid social and search, combined with AI-powered optimization workflows, made our campaigns more intelligent and efficient than ever before.",
  },
  {
    brand: "American Heart Association",
    author: "Head of Communications",
    text: "Yusuf brought a systematic, data-driven approach to our awareness campaigns. His deep understanding of both healthcare compliance and digital performance made him a valuable strategic partner for our GCC growth initiative.",
  },
  {
    brand: "Azizi Developments",
    author: "Performance Marketing Lead",
    text: "The agentic AI workflows Yusuf designed for our real estate campaigns were revolutionary. Automating 70% of our optimization tasks freed our team to focus on strategy, and campaign KPIs consistently beat our benchmarks.",
  },
  {
    brand: "Moorfields Eye Hospital",
    author: "Digital Marketing Manager",
    text: "Yusuf's expertise in multi-channel performance marketing significantly elevated our patient outreach. His analytical rigor and creative media strategies delivered results that exceeded our expectations across all key metrics.",
  },
];

// ── CASE STUDIES DATA ──
const CASES = [
  {
    brand: "PAWSITIVE VETERINARY CLINIC",
    title: "Digital-First Patient Acquisition for a Premium Vet Clinic",
    desc: "Built a hyper-local paid social and search strategy targeting pet owners across Dubai. Combined audience layering with geo-fencing to drive new patient appointments at minimal CPA.",
    metrics: [{ val: "+3x", lab: "Appointments" }, { val: "-45%", lab: "CPA Drop" }],
  },
  {
    brand: "BRIGHTER FUTURE",
    title: "Multi-Platform Fundraising Campaign — Driving Real Donations at Scale",
    desc: "Architected a full-funnel donation campaign across Google Ads, META, and the Chuffed crowdfunding platform. Built emotionally-driven creative journeys that moved audiences from awareness to action — converting passive scrollers into active donors. Precision audience targeting layered with retargeting sequences ensured maximum donation volume at optimal cost-per-donor.",
    metrics: [{ val: "8M+", lab: "Impressions" }, { val: "5.1%", lab: "Donation Rate" }],
  },
  {
    brand: "SALAMANCA",
    title: "Fashion E-Commerce — 8x ROAS Through Precision Targeting & Retargeting",
    desc: "Delivered an aggressive paid social performance strategy for Salamanca, a premium fashion brand. Built a sophisticated audience architecture combining cold prospecting with dynamic product retargeting — serving the right creative to the right shopper at every stage of the purchase cycle. The result: an 8x return on ad spend that redefined their digital revenue benchmark.",
    metrics: [{ val: "8x", lab: "ROAS" }, { val: "+220%", lab: "Revenue Uplift" }],
  },
  {
    brand: "TOSHIBA",
    title: "B2B SEM Strategy — Multifunction & Barcode Printers Across 4 Markets",
    desc: "Led a high-intent B2B Search Engine Marketing campaign for Toshiba's multifunction and barcode printer portfolio across UAE, KSA, South Africa, and Uganda. Built country-specific keyword architectures targeting procurement managers, IT buyers, and enterprise decision-makers. Localised ad copy and bid strategies per market drove consistent pipeline growth in each territory.",
    metrics: [{ val: "4 Markets", lab: "KSA · UAE · SA · UG" }, { val: "+68%", lab: "B2B Leads" }],
  },
  {
    brand: "MOORFIELDS EYE HOSPITAL",
    title: "SEM-Led Patient Acquisition — Dubai & Abu Dhabi",
    desc: "Designed and executed a precision Search Engine Marketing strategy to drive patient consultations for Moorfields Eye Hospital across their Dubai and Abu Dhabi locations. Built condition-specific keyword clusters targeting users actively seeking ophthalmic care — from cataract consultations to laser eye surgery. Tightly geo-targeted campaigns maximised budget efficiency per location and delivered a consistent flow of qualified patient enquiries.",
    metrics: [{ val: "+48%", lab: "Consultations" }, { val: "-32%", lab: "CPL" }],
  },
  {
    brand: "PEGASUS AIRLINES",
    title: "GCC Route Launch — Integrated Performance Campaign Across 6 Markets",
    desc: "Spearheaded the performance media strategy for Pegasus Airlines' new route launches across the GCC, including UAE, KSA, Kuwait, Qatar, Bahrain, and Oman. Orchestrated a phased campaign across Search, Paid Social, and Programmatic — launching with awareness to build brand familiarity, then shifting to conversion-focused retargeting to drive ticket bookings. Market-specific creatives and localised bidding strategies ensured on-budget delivery across all territories.",
    metrics: [{ val: "6 Markets", lab: "Full GCC" }, { val: "3.5x", lab: "ROAS" }],
  },
  {
    brand: "BANKS CONSULTING",
    title: "B2B Lead Generation via LinkedIn & Google",
    desc: "Delivered a precision B2B lead gen strategy using LinkedIn Ads combined with Google Search. Built custom intent audiences targeting C-suite decision makers in financial services across the GCC.",
    metrics: [{ val: "+70%", lab: "MQLs" }, { val: "-28%", lab: "CPA" }],
  },
];

// ── JOURNEY DATA (descending — most recent first) ──
const JOURNEY = [
  {
    period: "2023 – Present",
    role: "Senior Manager — Performance Marketing & Operations",
    company: "NEXA",
    skills: ["Agentic AI", "Automation Workflows", "Media Strategy", "Multi-channel ROI", "Performance Operations", "Performance Ecosystem"],
    side: "left",
  },
  {
    period: "2018 – 2023",
    role: "Performance Marketing Lead",
    company: "Growth Valley",
    skills: ["Paid Social", "Google Ads", "Programmatic", "Performance Analytics", "Team Leadership"],
    side: "right",
  },
  {
    period: "2014 – 2018",
    role: "Territory In-Charge — Online Sales",
    company: "Nabeel Group of Companies",
    skills: ["Digital Sales", "E-Commerce Strategy", "Territory Management", "B2C Growth", "Data Engineering"],
    side: "left",
  },
  {
    period: "2010 – 2014",
    role: "Front Office & Sales Executive",
    company: "Sheraton Hotels & Resorts",
    skills: ["Client Relations", "Revenue Optimization", "CRM", "Hospitality Operations"],
    side: "right",
  },
];

// ── CERTS DATA ──
const CERTS = [
  { icon: "◈", name: "Meta Certified", org: "META" },
  { icon: "✦", name: "Google Ads Certified", org: "GOOGLE" },
  { icon: "⬡", name: "AI Professional", org: "GOOGLE AI" },
  { icon: "◉", name: "Claude Certified", org: "ANTHROPIC" },
  { icon: "⊛", name: "Antigravity Certified", org: "GOOGLE" },
  { icon: "◐", name: "Performance Tools", org: "AGENTIC AI" },
  { icon: "⌘", name: "Agentic Marketing", org: "FRAMEWORK" },
  { icon: "◇", name: "Performance Ops", org: "INFRASTRUCTURE" },
];

// ── BRANDS LIST ──
const BRANDS_ROW1 = [
  "ADNIC", "ARN", "IPG", "Rove Hotels", "American Heart Association", "Toshiba", "Rotana",
  "Dubai Herbal Treatment Center", "WHO", "WWF", "Green Peace Malaysia", "Brighter Future",
  "Turkey Homes", "Emaar",
];
const BRANDS_ROW2 = [
  "Azizi", "A2RL", "American Hospital", "Pawsitive", "Moorfields", "Tally", "Microsoft",
  "Gidea", "Burjeel", "CBRE", "Shell", "Invisalign", "Pegasus Airlines",
];

export default function Home() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  // Terminal typewriter
  useEffect(() => {
    const terminal = document.getElementById("intel-terminal");
    if (!terminal) return;
    const lines = [
      { text: "[SYSTEM]: Initializing Growth Engine v3.1...", cls: "t-line system" },
      { text: "[AI]: Scanning 80+ brand performance data sets...", cls: "t-line" },
      { text: "[AGENT]: Optimizing 2M+ ad spend allocations...", cls: "t-line" },
      { text: "[AGENT]: Automating 70% of workflow operations...", cls: "t-line" },
      { text: "[STATUS]: Yusuf Siddiqui — Architecture Complete. ✦", cls: "t-line status" },
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let delay = 0;
          terminal.innerHTML = "";
          lines.forEach((line, i) => {
            setTimeout(() => {
              const p = document.createElement("p");
              p.className = line.cls;
              p.innerHTML = line.text + (i === lines.length - 1 ? '<span class="t-cursor"></span>' : "");
              terminal.appendChild(p);
            }, delay);
            delay += 600 + line.text.length * 20;
          });
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(terminal);
    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll("[data-count]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseFloat(el.dataset.count || "0");
            const duration = 2000;
            const isDecimal = el.dataset.count?.includes(".");
            let start: number | null = null;
            const tick = (ts: number) => {
              if (!start) start = ts;
              const progress = Math.min((ts - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = eased * target;
              el.textContent = isDecimal ? val.toFixed(1) : Math.floor(val).toString();
              if (progress < 1) requestAnimationFrame(tick);
              else el.textContent = isDecimal ? target.toFixed(1) : target.toString();
            };
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ─── NAV ─── */}
      <nav className="nav">
        <div className="nav-logo">Yusuf Siddiqui</div>
        <ul className="nav-links">
          <li><a href="#intelligence">Intelligence</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#journey">Journey</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* ─── HERO ─── */}
      <section className="hero" id="hero">
        {/* Portrait first on mobile via CSS order */}
        <div className="hero-image-wrap">
          <div className="hero-image-ring fade-in">
            <img src="/portrait.jpg" alt="Yusuf Siddiqui" className="hero-portrait" />
          </div>
        </div>
        <div className="hero-text">
          <div className="hero-tag fade-in fade-in-delay-1">Performance Growth Architect</div>
          <h1 className="hero-name fade-in fade-in-delay-2">
            Yusuf<br />Siddiqui
          </h1>
          <p className="hero-designation fade-in fade-in-delay-2">
            Senior Manager — Performance Marketing &amp; Operations at NEXA.<br />
            Media buying, agentic AI, and Performance frameworks.
          </p>
          <div className="hero-brands-tag fade-in fade-in-delay-3">
            <div className="brands-number">80+</div>
            <div className="brands-label">Global<br />Brands</div>
          </div>
          <div className="hero-cta fade-in fade-in-delay-4">
            <a href="#intelligence" className="btn-primary">View Intelligence Centre</a>
            <a href="https://wa.me/971526340668" target="_blank" rel="noreferrer" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>

      {/* ─── BRANDS TICKER ─── */}
      <section className="brands-section" id="brands">
        <div className="section-header fade-in">
          <span className="section-label">Global Portfolio</span>
          <h2 className="section-title">80+ Brand Partners</h2>
          <p className="section-subtitle">From healthcare to hospitality, real estate to retail — driving performance at global scale.</p>
        </div>
        <div className="brands-ticker-wrap">
          <div className="brands-ticker">
            {[...BRANDS_ROW1, ...BRANDS_ROW1].map((brand, i) => (
              <span key={i} className="brand-pill">{brand}</span>
            ))}
          </div>
          <div className="brands-ticker brands-ticker-2" style={{ marginTop: "12px" }}>
            {[...BRANDS_ROW2, ...BRANDS_ROW2].map((brand, i) => (
              <span key={i} className="brand-pill">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTELLIGENCE CENTRE ─── */}
      <section className="intel-section" id="intelligence">
        <div className="section-header fade-in">
          <span className="section-label">Intelligence Centre</span>
          <h2 className="section-title">The Growth Engine</h2>
          <p className="section-subtitle">Where data, automation, and media strategy converge into measurable global growth.</p>
        </div>
        <div className="intel-grid">
          <div className="intel-card featured fade-in">
            <div>
              <span className="intel-icon">⚡</span>
              <div className="intel-stat-big">
                <span data-count="70">0</span><span style={{ fontSize: "0.5em", color: "rgba(0,245,255,0.6)" }}>%</span>
              </div>
              <div className="intel-stat-label">Workflow Automation Rate</div>
            </div>
            <div>
              <h3 className="intel-card-title">Agentic AI Operations</h3>
              <p className="intel-card-desc">
                Built custom agentic AI workflows that autonomously manage 70% of campaign optimization tasks — from bid management and audience segmentation to creative rotation and anomaly detection. Every decision is data-driven and self-correcting.
              </p>
              <div style={{ display: "flex", gap: "20px", marginTop: "24px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--muted)", fontFamily: "var(--font-mono)", letterSpacing: "0.1em", marginBottom: "4px" }}>Tools</div>
                  <div style={{ fontSize: "13px", color: "var(--silver)" }}>Claude · Gemini · Antigravity · Custom Agents</div>
                </div>
              </div>
            </div>
          </div>

          <div className="intel-card fade-in fade-in-delay-1">
            <span className="intel-icon">◎</span>
            <h3 className="intel-card-title">Media Buying Expertise</h3>
            <p className="intel-card-desc">
              Full-funnel media buying across paid social, search, and programmatic. Precision audience targeting and cross-channel attribution across META, Google, DV360, and more.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
              {["Paid Social", "Google Search", "Programmatic", "DV360", "META Ads"].map((t) => (
                <span key={t} className="skill-tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="intel-card fade-in fade-in-delay-2">
            <span className="intel-icon">◈</span>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "8px" }}>
              <span style={{ color: "var(--cyan)", fontFamily: "var(--font-mono)", fontSize: "16px" }}>$</span>
              <span className="intel-stat-big" style={{ fontSize: "clamp(48px,6vw,80px)" }}>
                <span data-count="2">0</span><span style={{ fontSize: "0.5em", color: "rgba(0,245,255,0.6)" }}>M+</span>
              </span>
            </div>
            <div className="intel-stat-label">Total Ad Spend Managed</div>
            <p className="intel-card-desc" style={{ marginTop: "16px" }}>
              Managed over $2 million in performance ad spend with consistent above-benchmark ROAS delivery across B2B and B2C verticals, from luxury real estate to healthcare.
            </p>
          </div>

          <div className="intel-card fade-in fade-in-delay-1" style={{ gridColumn: "1 / -1" }}>
            <h3 className="intel-card-title" style={{ marginBottom: "24px" }}>⟩ Live Growth Engine</h3>
            <div className="terminal-block">
              <div className="terminal-topbar">
                <div className="t-dot r"></div>
                <div className="t-dot y"></div>
                <div className="t-dot g"></div>
                <span className="terminal-title-bar">yusuf@growth-engine:~$ ./optimize --global</span>
              </div>
              <div className="terminal-body" id="intel-terminal">
                <p className="t-line system" style={{ opacity: 0.4 }}>[SYSTEM]: Waiting for scroll trigger...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CERTIFICATIONS ─── */}
      <section className="certs-section" id="certifications">
        <div className="section-header fade-in">
          <span className="section-label">Certifications &amp; Toolkit</span>
          <h2 className="section-title">Credentials</h2>
          <p className="section-subtitle">Industry-recognized certifications that prove the depth of expertise behind the growth machine.</p>
        </div>
        <div className="certs-track">
          {CERTS.map((cert, i) => (
            <div key={i} className={`cert-badge fade-in fade-in-delay-${(i % 5) + 1}`}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-org">{cert.org}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <section className="journey-section" id="journey">
        <div className="section-header fade-in">
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">From front-line hospitality to architecting performance systems for 80+ global brands.</p>
        </div>
        <div className="timeline">
          {JOURNEY.map((item, i) => (
            <div key={i} className="timeline-item fade-in">
              {item.side === "right" && <div className="timeline-empty"></div>}
              <div className="timeline-dot"><div className="timeline-dot-inner"></div></div>
              <div className="timeline-content" style={{ textAlign: item.side === "right" ? "left" : "right" }}>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-role">{item.role}</div>
                <div className="timeline-company">{item.company}</div>
                <div className="timeline-skills" style={{ justifyContent: item.side === "right" ? "flex-start" : "flex-end" }}>
                  {item.skills.map((s) => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
              {item.side === "left" && <div></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="testimonials-section" id="testimonials">
        <div className="section-header fade-in">
          <span className="section-label">Client Testimonials</span>
          <h2 className="section-title">What Clients Say</h2>
          <p className="section-subtitle">What global brands say about working with Yusuf. Tap any card to read the full testimonial.</p>
        </div>
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`testimonial-card fade-in fade-in-delay-${(i % 3) + 1}`} onClick={() => setActiveModal(i)}>
              <div className="testimonial-brand">{t.brand}</div>
              <div className="testimonial-author">{t.author}</div>
              <p className="testimonial-preview">{t.text}</p>
              <div className="testimonial-expand-hint">
                <span>↗</span> Read full testimonial
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Modal */}
      <div className={`modal-overlay ${activeModal !== null ? "open" : ""}`} onClick={() => setActiveModal(null)}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setActiveModal(null)}>✕</button>
          {activeModal !== null && (
            <>
              <div className="modal-brand">{TESTIMONIALS[activeModal].brand}</div>
              <div className="modal-author">{TESTIMONIALS[activeModal].author}</div>
              <p className="modal-text">&ldquo;{TESTIMONIALS[activeModal].text}&rdquo;</p>
            </>
          )}
        </div>
      </div>

      {/* ─── CASE STUDIES ─── */}
      <section className="cases-section" id="cases">
        <div className="section-header fade-in">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Results That Matter</h2>
          <p className="section-subtitle">Real campaigns. Real results. Measurable impact at global scale.</p>
        </div>
        <div className="cases-grid">
          {CASES.map((c, i) => (
            <div key={i} className={`case-card fade-in fade-in-delay-${(i % 2) + 1}`}>
              <div className="case-brand">{c.brand}</div>
              <h3 className="case-title">{c.title}</h3>
              <p className="case-desc">{c.desc}</p>
              <div className="case-metrics">
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="case-metric-val">{m.val}</div>
                    <div className="case-metric-lab">{m.lab}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <h2 className="contact-cta-title fade-in">
            Let&apos;s Build<br />
            <span style={{ color: "var(--cyan)" }}>Something Big</span>
          </h2>
          <p className="contact-cta-sub fade-in fade-in-delay-1">
            Ready to scale your brand with precision performance marketing and agentic intelligence?
          </p>
          <div className="contact-channels">
            <a href="mailto:yousufcnb@yahoo.co.in" className="contact-channel fade-in fade-in-delay-1">
              <div className="contact-channel-icon">✉</div>
              <div className="contact-channel-label">Email</div>
              <div className="contact-channel-value">yousufcnb@yahoo.co.in</div>
            </a>
            <a href="https://wa.me/971526340668" target="_blank" rel="noreferrer" className="contact-channel fade-in fade-in-delay-2">
              <div className="contact-channel-icon">◎</div>
              <div className="contact-channel-label">WhatsApp — UAE</div>
              <div className="contact-channel-value">+971 52 634 0668</div>
            </a>
            <a href="https://www.linkedin.com/in/themohammadyusuf" target="_blank" rel="noreferrer" className="contact-channel fade-in fade-in-delay-3">
              <div className="contact-channel-icon">⬡</div>
              <div className="contact-channel-label">LinkedIn</div>
              <div className="contact-channel-value">themohammadyusuf</div>
            </a>
          </div>
          <a href="https://wa.me/971526340668" target="_blank" rel="noreferrer" className="btn-primary fade-in fade-in-delay-4" style={{ margin: "0 auto", display: "inline-flex" }}>
            Start a Conversation ↗
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="footer">
        <div className="footer-copy">© 2025 Yusuf Siddiqui. All rights reserved.</div>
        <div className="footer-built">Built with <span>intelligence</span> &amp; precision.</div>
      </footer>
    </>
  );
}

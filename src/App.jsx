import React, { useEffect, useMemo, useState } from "react";
import "./App.css";

const DATA = {
  name: "Bhupesh Vaishnav",
  role: "Frontend Developer",
  location: "Bengaluru",
  email: "vaishnavbhupesh001@gmail.com",
  github: "https://github.com/vaishnavbhupesh001-arch",
  linkedin: "https://www.linkedin.com/in/bhupesh-vaishnav-6353563a9/",
  resume: "/Bhupesh-Vaishnav-CV.pdf",

  aboutHeadline: "I build clean, responsive and modern UI with React.",
  aboutText:
    "I’m a fresher Frontend Developer focused on building responsive web apps using React, JavaScript, and modern UI practices. I enjoy creating clean UI, integrating APIs, and improving user experience.",

  projects: [
    {
      title: "Zerodha-Clone",
      type: "WEB APP",
      desc:
        "Assessment builder + candidate flow, PDF generation, email sending, admin dashboard.",
      tags: ["React"],
      bullets: [
        "Admin dashboard with candidate management",
        "PDF generation + email sending flow",
        "Clean UI + form validations",
      ],
      code: "https://github.com/vaishnavbhupesh001-arch/Zerodha-Clone",
    },
    {
      title: "Cuberto-Main",
      type: "WEB APP",
      desc: "GitHub PR insights UI with infinite scroll and clean filters.",
      tags: ["Javascript", "CSS3", "HTML5"],
      bullets: [
        "Infinite scroll insights + filters",
        "Reusable cards and sections",
        "Optimized loading states",
      ],
      code: "https://github.com/vaishnavbhupesh001-arch/Cuberto-main",
    },
    {
      title: "Coffee-main",
      type: "WEB",
      desc: "Modern landing pages + product sections + responsive layout.",
      tags: ["Javascript", "CSS3", "HTML5"],
      bullets: [
        "Mobile-first responsive layout",
        "Modern hero + section design",
        "Reusable components",
      ],
      code: "https://github.com/vaishnavbhupesh001-arch/Coffee-main",
    },
    {
      title: "Hotels-main",
      type: "WEB",
      desc: "Modern landing pages + product sections + responsive layout.",
      tags: ["Javascript", "CSS3", "HTML5"],
      bullets: [
        "Mobile-first responsive layout",
        "Modern hero + section design",
        "Reusable components",
      ],
      code: "https://github.com/vaishnavbhupesh001-arch/Hotels-main",
    },
    {
      title: "Tic-tac-toe-main",
      type: "Game",
      desc: "Modern landing pages + product sections + responsive layout.",
      tags: ["Javascript", "CSS3", "HTML5"],
      bullets: [
        "Mobile-first responsive layout",
        "Modern hero + section design",
        "Reusable components",
      ],
      code: "https://github.com/vaishnavbhupesh001-arch/tic-tac-toe-main",
    },
  ],

  experience: [
    {
      title: "Apna College (Intern)",
      org: "Personal Projects",
      time: "June 2024 - Aug 2025",
      location: "Online",
      bullets: [
        "Front-End Developer intern - Apnacollege.",
        "Aspiring Front-End Developer with hands-on experiences building interactive user interfaces.",
        "Successfully develop a tic-tac-toe WEBSITE andzerodha-clone and stone-paper-scissor kubernet SHOW-CASING PROFICIENCY IN HTML, CSS, JAVASCRIPT, React.js, and C++.",
      ],
      skills: ["React", "JavaScript", "CSS3", "HTML5", "Tailwind CSS", "Bootstrap"],
    },
  ],

  achievements: {
    headline: "Growth & Achievements",
    text:
      "I’m improving consistently through projects, practice, and learning modern frontend workflows.",
    stats: [
      { value: "4+", label: "Projects Built" },
      { value: "60%", label: "Skill Improvement" },
      { value: "30%", label: "Performance Boost" },
    ],
  },
};

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.7.5.6 5.7.6 12.1c0 5.1 3.3 9.4 7.9 11c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4c-.5-1.3-1.2-1.6-1.2-1.6c-1-.7.1-.7.1-.7c1.1.1 1.7 1.2 1.7 1.2c1 1.7 2.7 1.2 3.3.9c.1-.8.4-1.2.7-1.5c-2.5-.3-5.1-1.3-5.1-5.7c0-1.3.4-2.3 1.2-3.1c-.1-.3-.5-1.5.1-3.1c0 0 1-.3 3.2 1.2c.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2c.6 1.6.2 2.8.1 3.1c.7.8 1.2 1.8 1.2 3.1c0 4.4-2.7 5.4-5.2 5.7c.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6c4.6-1.6 7.9-5.9 7.9-11C23.4 5.7 18.3.5 12 .5z"
      />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5S1.12 1 2.5 1S4.98 2.12 4.98 3.5zM0.5 23.5h4V7.98h-4V23.5zM8.5 7.98h3.8v2.12h.05c.53-1 1.83-2.12 3.77-2.12c4.03 0 4.78 2.65 4.78 6.1v9.42h-4v-8.35c0-1.99-.04-4.55-2.77-4.55c-2.77 0-3.19 2.17-3.19 4.41v8.49h-4V7.98z"
      />
    </svg>
  );
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5l8-5v2z"
      />
    </svg>
  );
}

function Pill({ children, className = "" }) {
  return <span className={`pillTag ${className}`}>{children}</span>;
}

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  const API_BASE = "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ✅ Projects Pagination (3 at a time)
  const PROJECTS_PER_PAGE = 3;
  const [projectPage, setProjectPage] = useState(0);

  const totalPages = Math.ceil(DATA.projects.length / PROJECTS_PER_PAGE);

  const visibleProjects = DATA.projects.slice(
    projectPage * PROJECTS_PER_PAGE,
    projectPage * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  // ✅ Keep view inside projects section after clicking More/Next/Back
  const scrollToProjectsTop = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNextProjects = () => {
    setProjectPage((p) => Math.min(p + 1, totalPages - 1));
    scrollToProjectsTop();
  };

  const handlePrevProjects = () => {
    setProjectPage((p) => Math.max(p - 1, 0));
    scrollToProjectsTop();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Failed to send message ❌");
      }
    } catch (error) {
      setStatus("Server error ❌");
    }

    setLoading(false);
  };

  const quickLinks = useMemo(() => SECTIONS, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 160;
      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.offsetTop <= y) current = s.id;
      }
      setActive(current);
      setShowTop(window.scrollY > 420);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅✅ FIX: Observe newly rendered items on projectPage change
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.inView)");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("inView");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [projectPage]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="page">
      <aside className="socialBar" aria-label="Social links">
        <a className="socialBtn" href={DATA.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <IconGitHub />
        </a>
        <a className="socialBtn" href={DATA.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <IconLinkedIn />
        </a>
        <a
          className="socialBtn"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
            "vaishnavbhupesh001@gmail.com"
          )}&su=${encodeURIComponent("Hello Bhupesh")}&body=${encodeURIComponent(
            "Hi Bhupesh,\n\nI visited your portfolio and want to connect.\n\nThanks,"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <IconMail />
        </a>
      </aside>

      <header className="topNav reveal">
        <div className="navInner">
          <div className="brand">{DATA.name}</div>

          <nav className={`navLinks ${menuOpen ? "open" : ""}`}>
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`navLink ${active === s.id ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="navRight">
            <a
              className="resumeBtn"
              href={DATA.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                const link = document.createElement("a");
                link.href = DATA.resume;
                link.download = "Bhupesh_Vaishnav_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Resume
            </a>
            <button className="hamburger" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="heroInner reveal heroReveal">
          <p className="hello">Hello, I&apos;m</p>
          <h1 className="bigName">{DATA.name}</h1>
          <p className="role">{DATA.role}</p>
          <a className="primaryCta" href="#projects">
            View Projects
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <div className="sectionHead reveal">
            <h2>About</h2>
            <p className="muted">
              {DATA.aboutHeadline} <span className="mutedDot">•</span> {DATA.location}
            </p>
          </div>
          <div className="glassCard reveal">
            <p className="muted line">{DATA.aboutText}</p>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <div className="sectionHead reveal">
            <h2>Experience</h2>
            <p className="muted">Timeline style like the video</p>
          </div>

          <div className="timeline">
            <div className="timelineLine" aria-hidden="true" />
            {DATA.experience.map((e, idx) => (
              <div className="timelineItem" key={`${e.title}-${idx}`}>
                <div className="timelineDot" aria-hidden="true" />
                <div className="glassCard timelineCard reveal">
                  <div className="timelineTop">
                    <div>
                      <h3>{e.title}</h3>
                      <p className="muted small">{e.org}</p>
                    </div>
                    <div className="timelineMeta">
                      <p className="muted small">{e.time}</p>
                      <p className="muted small">{e.location}</p>
                    </div>
                  </div>

                  <ul className="bullets">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className="tagRow">
                    {e.skills.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="sectionHead projectsHead reveal">
            <div>
              <h2>Featured Projects</h2>
              <p className="muted">
                Frontend-focused projects with clean UI, smooth user flows and real-world features.
              </p>
            </div>
            <p className="muted small rightNote">Every card below maps to a real repo / demo</p>
          </div>

          <div className="projectsGrid">
            {visibleProjects.map((p) => (
              <article key={p.title} className="glassCard projectCard reveal">
                <div className="projectTop">
                  <h3>{p.title}</h3>
                  <span className="typePill">{p.type}</span>
                </div>

                <p className="muted">{p.desc}</p>

                <div className="tagRow">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                <ul className="bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="projectLinks">
                  <a className="linkBtn ghost" href={p.code} target="_blank" rel="noreferrer">
                    Code ↗
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="projectsPager">
            {projectPage > 0 && (
              <button className="pagerBtn" onClick={handlePrevProjects}>
                Back
              </button>
            )}

            {projectPage < totalPages - 1 && (
              <button className="pagerBtn" onClick={handleNextProjects}>
                {projectPage === 0 ? "More" : "Next"}
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section" id="achievements">
        <div className="container">
          <div className="sectionHead reveal">
            <h2>Achievements</h2>
            <p className="muted">{DATA.achievements.text}</p>
          </div>

          <div className="glassCard reveal">
            <h3 className="achTitle">{DATA.achievements.headline}</h3>

            <div className="statsRow">
              {DATA.achievements.stats.map((s) => (
                <div key={s.label} className="statCard reveal">
                  <div className="statValue">{s.value}</div>
                  <div className="muted">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="sectionHead reveal">
            <h2>Contact Me</h2>
            <p className="muted">Let’s connect for work / internship / projects.</p>
          </div>

          <div className="glassCard reveal contactCard">
            <div className="contactLeft">
              <h3 className="contactTitle">Get in touch</h3>
              <p className="muted line">
                If you want a website, portfolio, or any frontend work, message me.
                I usually reply within 24 hours.
              </p>

              <div className="contactLinks">
                <a className="contactLinkBtn" href={`mailto:${DATA.email}`}>
                  Email Me
                </a>
                <a className="contactLinkBtn ghost" href={DATA.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
                <a className="contactLinkBtn ghost" href={DATA.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>

              <div className="contactSmall">
                <p className="muted small">
                  Email: <span className="accentText">{DATA.email}</span>
                </p>
                <p className="muted small">
                  Location: <span className="accentText">{DATA.location}</span>
                </p>
              </div>
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
              <label className="field">
                <span className="muted small">Your Name</span>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </label>

              <label className="field">
                <span className="muted small">Your Email</span>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </label>

              <label className="field">
                <span className="muted small">Message</span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                />
              </label>

              <button className="contactSubmit" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p className="muted small contactNote">{status || "(This form sends email to your backend)"}</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer reveal">
        <div className="container footerInner">
          <div className="footCol">
            <div className="brandFoot">{DATA.name}</div>
          </div>

          <div className="footCol">
            <div className="footTitle">Quick Links</div>
            <div className="footLinks">
              {quickLinks.map((s) => (
                <a key={s.id} href={`#${s.id}`}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footCol">
            <div className="footTitle">Connect</div>
            <div className="footLinks">
              <a href={`mailto:${DATA.email}`}>Email</a>
              <a href={DATA.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={DATA.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`toTop ${showTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}
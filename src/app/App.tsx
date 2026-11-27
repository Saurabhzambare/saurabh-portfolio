import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useReducedMotion,
} from "motion/react";
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  MapPin,
  Menu,
  Plus,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { projects, journey, skills, training } from "./data/portfolio";

const github = "https://github.com/Saurabhzambare";
const linkedin = "https://www.linkedin.com/in/saurabh-zambare-b29b851b4/";
const nav = [
  { id: "projects", label: "Projects" },
  { id: "journey", label: "My journey" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
];
function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
function Navigation() {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("");
  useEffect(() => {
    const o = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document.querySelectorAll("main section[id]").forEach((s) => o.observe(s));
    return () => o.disconnect();
  }, []);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <a
        className="wordmark"
        href="#home"
        onClick={() => setOpen(false)}
        aria-label="Saurabh Zambare, home"
      >
        <span className="wordmark-icon">sz.</span>
        <span>
          SAURABH<span className="wordmark-muted"> ZAMBARE</span>
        </span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            aria-current={active === n.id ? "location" : undefined}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <a className="small-button header-contact" href="#contact">
        Let’s connect <Plus size={16} />
      </a>
      <button
        className="menu-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {[...nav, { id: "contact", label: "Let’s connect" }].map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
function Hero() {
  const [selected, setSelected] = useState<"skills" | "projects" | "journey">(
    "skills",
  );
  const labels = {
    skills: ["Python", "SQL", "Power BI", "React"],
    projects: [
      "Instacart",
      "GACL pipeline",
      "Discipline System",
      "Mercedes-Benz",
    ],
    journey: ["Vadodara", "Sault College", "Canada", "Back in India"],
  };
  const reduced = useReducedMotion();
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <Reveal>
          <p className="eyebrow location">
            <MapPin size={15} /> VADODARA, INDIA{" "}
            <span className="eyebrow-separator">/</span> OPEN TO OPPORTUNITIES
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>
            Hi, I’m
            <br />
            <span className="name-highlight">
              Saurabh<span className="headline-dot">.</span>
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="hero-lead">
            I make sense of data.
            <br />
            And build things that work.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="hero-description">
            From leading kitchen operations in Canada to building analytics,
            machine learning experiments, and web apps. Now back in India,
            bringing practical judgement to a technical career.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="hero-actions">
          <a href="#projects" className="neo-button primary">
            Explore my work <Code2 size={18} />
          </a>
          <a href="#journey" className="neo-button">
            My journey <Globe2 size={18} />
          </a>
        </Reveal>
        <Reveal delay={0.28} className="hero-social">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Github size={18} /> GitHub
          </a>
          <span>/</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} /> LinkedIn
          </a>
          <span className="hero-signoff">
            ALWAYS LEARNING. ALWAYS BUILDING.
          </span>
        </Reveal>
      </div>
      <Reveal delay={0.15} className="hero-art">
        <div className="hero-art-grid" aria-hidden="true" />
        <motion.div
          className="portrait-card"
          animate={reduced ? {} : { rotate: [2, 0.7, 2] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="portrait-top">
            <span>THE PERSON BEHIND THE PROJECTS</span>
            <span>✳</span>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}saurabh-profile.png`}
            alt="Saurabh Zambare"
            width="800"
            height="800"
            fetchPriority="high"
          />
          <div className="portrait-bottom">
            <span>Curiosity meets ownership.</span>
            <Sparkles size={19} />
          </div>
        </motion.div>
        <span className="portrait-sticker sticker-canada">
          CANADA
          <br />
          <strong>TO INDIA</strong>
        </span>
        <span className="portrait-sticker sticker-data">
          <Database size={18} /> DATA + CODE
        </span>
        <div className="orbit-controls" aria-label="Explore my profile">
          {(["skills", "projects", "journey"] as const).map((item) => (
            <button
              key={item}
              className={selected === item ? "active" : ""}
              aria-pressed={selected === item}
              onClick={() => setSelected(item)}
            >
              {item === "skills" ? (
                <Terminal size={15} />
              ) : item === "projects" ? (
                <Code2 size={15} />
              ) : (
                <Globe2 size={15} />
              )}{" "}
              {item === "journey" ? "My journey" : item}
            </button>
          ))}
        </div>
        <div className="orbit-labels" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              className="orbit-label-set"
              key={selected}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {labels[selected].map((label, i) => (
                <span className={`orbit-label orbit-label-${i}`} key={label}>
                  {label}
                </span>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Reveal>
      <div className="hero-footer">
        <span>
          DATA ANALYTICS <b>✳</b> MACHINE LEARNING <b>✳</b> SOFTWARE
        </span>
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
function Heading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-intro">{description}</p>}
    </Reveal>
  );
}
function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "instacart")
    return (
      <div className="project-visual retail">
        <span className="visual-eyebrow">RETAIL ANALYTICS</span>
        <img
          src={`${import.meta.env.BASE_URL}instacart-overview.png`}
          alt="Instacart Power BI overview dashboard with order, reorder and department analysis"
          loading="lazy"
        />
      </div>
    );
  if (kind === "mercedes")
    return (
      <div className="project-visual manufacturing">
        <span className="visual-eyebrow">MODEL EVALUATION</span>
        <img
          src={`${import.meta.env.BASE_URL}mercedes-comparison.png`}
          alt="Five-fold comparison of mean prediction and categorical Ridge regression"
          loading="lazy"
        />
      </div>
    );
  if (kind === "gacl")
    return (
      <div className="project-visual pipeline">
        <span className="visual-eyebrow">
          PUBLIC DISCLOSURES, TRACEABLE DATA
        </span>
        <div className="pipeline-path">
          <span>PDF</span>
          <i />
          <span>SQL</span>
          <i />
          <span>BI</span>
        </div>
        <div className="pipeline-checks">
          <Check size={16} /> 18 observations. Source-page lineage.
        </div>
      </div>
    );
  if (kind === "discipline")
    return (
      <div className="project-visual discipline">
        <span className="visual-eyebrow">DAILY QUEST WORKFLOW</span>
        <div className="quest-flow">
          <span>
            <Check size={16} /> COMPLETE QUEST
          </span>
          <b>+ EXP</b>
          <div className="xp-track">
            <i />
          </div>
          <span className="quest-note">
            One completion. Consistent progress.
          </span>
        </div>
      </div>
    );
  return (
    <div className="project-visual vendor">
      <span className="visual-eyebrow">APPLICATION ARCHITECTURE</span>
      <div className="vendor-blocks">
        <span>PROJECTS</span>
        <span>VENDORS</span>
        <span>SQL SERVER</span>
      </div>
      <span className="visual-caption">
        ASP.NET CORE MVC + ENTITY FRAMEWORK
      </span>
    </div>
  );
}
function Projects() {
  const [filter, setFilter] = useState("All work"),
    [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null),
    lastTrigger = useRef<HTMLButtonElement | null>(null);
  const filters = ["All work", "Data & BI", "Machine learning", "Software"];
  const shown = projects.filter(
    (p) => filter === "All work" || p.categories.includes(filter),
  );
  useEffect(() => {
    if (selected && dialog.current && !dialog.current.open) {
      dialog.current.showModal();
      document.body.style.overflow = "hidden";
    }
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    document.body.style.overflow = "";
    lastTrigger.current?.focus();
  };
  return (
    <section id="projects" className="projects-section section-shell">
      <div className="heading-with-aside">
        <Heading
          eyebrow="SELECTED WORK"
          title="Less talk. More building."
          description="Real datasets, documented decisions, and code you can inspect."
        />
        <a
          className="text-link"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          All repositories <Github size={17} />
        </a>
      </div>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
            className={filter === f ? "selected" : ""}
          >
            {f}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {shown.map((p, i) => (
          <Reveal
            key={p.id}
            delay={Math.min(i * 0.04, 0.15)}
            className={`project-card ${p.featured ? "featured-project" : ""}`}
          >
            <ProjectVisual kind={p.id} />
            <div className="project-body">
              <div className="project-kind">
                <span>{p.label}</span>
                <span>{p.scope}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <div className="project-proof">{p.proof}</div>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-actions">
                <button
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setSelected(p);
                  }}
                  aria-label={`Read case study: ${p.title}`}
                >
                  Case study <Plus size={17} />
                </button>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <Github size={17} /> Source
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="project-scope-note">
        Personal and coursework projects. Dataset findings and software checks
        are not claims of commercial impact.
      </p>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={close}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        aria-labelledby="case-title"
      >
        {selected && (
          <>
            <div className="dialog-top">
              <span className="eyebrow">PROJECT CASE STUDY</span>
              <button
                className="icon-button"
                aria-label="Close case study"
                onClick={close}
              >
                <X />
              </button>
            </div>
            <div className="dialog-content">
              <p className="eyebrow">
                {selected.label} / {selected.scope}
              </p>
              <h2 id="case-title">{selected.title}</h2>
              <p className="dialog-summary">{selected.summary}</p>
              <div className="project-proof">{selected.proof}</div>
              <h3>The problem</h3>
              <p>{selected.problem}</p>
              <h3>What I built and checked</h3>
              <ul>
                {selected.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <h3>Scope and limitations</h3>
              <p>{selected.limitations}</p>
              <div className="tags">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a
                className="neo-button primary"
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Inspect the project <Github size={18} />
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
function Journey() {
  const [expanded, setExpanded] = useState<string | null>("now");
  const icons = [
    GraduationCap,
    BookOpen,
    Globe2,
    BriefcaseBusiness,
    Code2,
    BookOpen,
    MapPin,
    Sparkles,
  ];
  return (
    <section id="journey" className="journey-section">
      <div className="section-shell">
        <Heading
          eyebrow="MORE THAN A RÉSUMÉ"
          title="A journey. Still unfolding."
          description="Different places. New responsibilities. The same curiosity."
        />
        <div
          className="journey-map"
          aria-label="From Vadodara to Sault Ste. Marie and back to India"
        >
          <span>
            <MapPin size={17} /> VADODARA
          </span>
          <span className="map-route">
            <i />
            <Globe2 size={20} />
            <i />
          </span>
          <span>SAULT STE. MARIE</span>
          <span className="map-route">
            <i />
            <Globe2 size={20} />
            <i />
          </span>
          <span>
            <MapPin size={17} /> INDIA, TODAY
          </span>
        </div>
        <div className="journey-layout">
          <Reveal className="journey-statement">
            <span className="journey-statement-symbol">✳</span>
            <h3>
              Learning doesn’t follow
              <br />a straight line.
            </h3>
            <p>
              College, work, languages, and technical projects have overlapped.
              Each chapter has shaped how I learn, work with people, and take
              responsibility.
            </p>
            <span className="small-label">OPEN A CHAPTER TO EXPLORE</span>
          </Reveal>
          <div className="timeline">
            {journey.map((j, i) => {
              const Icon = icons[i],
                isOpen = expanded === j.id;
              return (
                <Reveal
                  key={j.id}
                  className={`timeline-item ${isOpen ? "timeline-open" : ""}`}
                >
                  <span className="timeline-node" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <button
                    className="timeline-trigger"
                    aria-expanded={isOpen}
                    aria-controls={`chapter-${j.id}`}
                    onClick={() => setExpanded(isOpen ? null : j.id)}
                  >
                    <span>
                      <span className="small-label">{j.phase}</span>
                      <strong>{j.title}</strong>
                      <span className="timeline-subtitle">{j.subtitle}</span>
                    </span>
                    <Plus size={20} className={isOpen ? "rotated" : ""} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`chapter-${j.id}`}
                        className="timeline-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p>{j.description}</p>
                        <div className="tags">
                          {j.tags.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        {j.link && (
                          <a
                            className="text-link"
                            href={j.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Explore the work <Github size={16} />
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="about-section section-shell">
      <Heading
        eyebrow="THE PERSON BEHIND THE WORK"
        title="People skills. Technical curiosity."
      />
      <div className="about-grid">
        <Reveal className="about-copy">
          <p className="about-lead">
            I’m Saurabh, a computer programming graduate, builder, and former
            kitchen department manager.
          </p>
          <p>
            I spent nearly five years in customer service and restaurant
            operations in Canada. I learned to coordinate a team under pressure,
            explain a change clearly, and take ownership when something went
            wrong.
          </p>
          <p>
            Inventory counts, waste, and variance reports made data practical
            for me. Today, I bring that same habit of checking the details to
            SQL reporting, Python model evaluation, and full-stack projects.
          </p>
          <p>
            Back in Vadodara, I’m building a technical career in India. I’m
            looking for a team where I can contribute, ask good questions, and
            keep improving.
          </p>
        </Reveal>
        <Reveal className="experience-card">
          <div className="experience-card-heading">
            <BriefcaseBusiness size={23} />
            <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
          </div>
          <h3>McDonald’s Canada</h3>
          <p className="experience-role">Kitchen department management</p>
          <p className="small-label">
            SAULT STE. MARIE, ONTARIO / THROUGH MAY 2026
          </p>
          <ul>
            <li>
              Reviewed inventory, waste, and variance reports to investigate
              discrepancies and guide ordering.
            </li>
            <li>
              Coached team members, delegated shift responsibilities, and
              adjusted priorities during busy service.
            </li>
            <li>
              Worked with colleagues from different backgrounds and communicated
              operational changes clearly.
            </li>
          </ul>
          <div className="experience-divider" />
          <h4>IT Support Engineer internship</h4>
          <p>Innovation Centre SSM, Canada</p>
          <p className="subtle">
            Early workplace exposure to technical support.
          </p>
        </Reveal>
      </div>
      <div className="education-strip">
        <div>
          <GraduationCap size={24} />
          <h3>Education</h3>
        </div>
        <p>
          <strong>Computer Programming</strong>
          <span>Sault College, Canada</span>
        </p>
        <p>
          <strong>Integrated B.Tech in Computer Science</strong>
          <span>ITM Vocational University, India</span>
        </p>
      </div>
    </section>
  );
}
function Skills() {
  return (
    <section id="skills" className="skills-section section-shell">
      <Heading
        eyebrow="MY TOOLKIT"
        title="Skills with somewhere to show them."
        description="The tools matter. What I do with them matters more."
      />
      <div className="skill-grid">
        {skills.map((s, i) => {
          const Icon = [BarChart3, Database, Code2][i];
          return (
            <Reveal key={s.title} className="skill-card" delay={i * 0.05}>
              <span className="skill-icon">
                <Icon size={25} />
              </span>
              <h3>{s.title}</h3>
              <div className="tags">
                {s.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <p>{s.evidence}</p>
              <a
                className="text-link"
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                See it in a project <Github size={16} />
              </a>
            </Reveal>
          );
        })}
      </div>
      <div className="learning-panel">
        <div>
          <BookOpen size={24} />
          <h3>Learning is part of the work.</h3>
          <p>
            Professional training in data science, reporting, and big data,
            alongside ongoing AI and language learning.
          </p>
        </div>
        <ul>
          {training.map((t) => (
            <li key={t}>
              <Check size={16} />
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="languages">
        <span className="eyebrow">LANGUAGES</span>
        <p>
          English · Gujarati · Hindi · Panjabi · Marathi{" "}
          <span>/ French A2</span>
        </p>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2>
            Good work starts
            <br />
            with a conversation<span>.</span>
          </h2>
          <p>
            Hiring for a junior data, AI, or software role? I’d be glad to
            discuss my work and learn about your team.
          </p>
          <div className="contact-actions">
            <a
              className="neo-button primary"
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <Linkedin size={19} />
            </a>
            <a
              className="neo-button"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore my GitHub <Github size={19} />
            </a>
          </div>
          <div className="contact-location">
            <MapPin size={17} /> Vadodara, India{" "}
            <span>Open to opportunities in India</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <Journey />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <a className="footer-name" href="#home">
          S Zambare.
        </a>
        <span>Built with React. Shaped by experience.</span>
        <a
          href="https://github.com/Sridattasai18/Neo-folio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Based on Neo-folio · MIT
        </a>
      </footer>
    </MotionConfig>
  );
}

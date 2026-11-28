import { useEffect, useRef, useState, type ReactNode } from "react";
import { MotionConfig, motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Code2,
  Database,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  MapPin,
  Menu,
  Pause,
  Play,
  Plus,
  Sparkles,
  UserRound,
  Users,
  X,
} from "lucide-react";
import {
  projects,
  journey,
  experience,
  education,
  courses,
  skills,
  workSkills,
} from "./data/portfolio";

const github = "https://github.com/Saurabhzambare";
const linkedin = "https://www.linkedin.com/in/saurabh-zambare-b29b851b4/";
const nav = [
  "About",
  "Projects",
  "Journey",
  "Experience",
  "Education",
  "Courses",
  "Skills",
];
const asset = (file: string) => `${import.meta.env.BASE_URL}${file}`;
function External({
  href,
  children,
  className = "",
  ...props
}: {
  href: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}
function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <div className="tags">
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
function Heading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
function Navigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          className="wordmark"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Saurabh Zambare, home"
        >
          saurabh<span>.dev</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map((n) => (
            <a href={`#${n.toLowerCase()}`} key={n}>
              {n}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button header-contact">
          Let’s connect
        </a>
        <button
          ref={toggle}
          className="menu-toggle icon-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav
            id="mobile-menu"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[...nav, "Contact"].map((n) => (
              <a
                key={n}
                href={`#${n.toLowerCase()}`}
                onClick={() => setOpen(false)}
              >
                {n}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
function Hero() {
  return (
    <section id="home" className="hero shell">
      <Reveal className="hero-copy">
        <p className="eyebrow">Data analysis & reporting</p>
        <p className="intro">Hi, I’m Saurabh.</p>
        <h1>
          What changed?
          <br />
          Why did it change?
          <br />
          What do the
          <br className="desktop-break" />{" "}
          <span className="highlight">numbers show?</span>
        </h1>
        <p className="hero-description">
          I use Python, SQL, Excel and Power BI to analyse data, validate
          results and build clear reports and dashboards. Explore my projects to
          see how I investigate questions, identify patterns and communicate
          findings.
        </p>
        <div className="actions">
          <a href="#projects" className="button primary">
            Explore my projects <BarChart3 size={18} />
          </a>
          <a href="#contact" className="button">
            Let’s connect
          </a>
        </div>
        <p className="location">
          <MapPin size={16} /> Vadodara, India{" "}
          <span>Available immediately</span>
        </p>
      </Reveal>
      <Reveal className="hero-art">
        <div
          className="report-illustration"
          role="img"
          aria-label="Illustration of a reporting workflow: analyse, validate and report. Decorative charts do not represent project results."
        >
          <div className="report-top">
            <span>FROM QUESTION TO CLARITY</span>
            <BarChart3 size={20} />
          </div>
          <div className="report-paper">
            <div className="paper-title">The story in the data.</div>
            <div className="paper-caption">Analyse. Validate. Report.</div>
            <div className="illustrated-chart">
              <div className="chart-guides" />
              <div className="bars">
                {[37, 61, 45, 81, 67, 93].map((h, i) => (
                  <i key={i} style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="report-bottom">
              <span>
                <Check size={16} /> Check the source
              </span>
              <span>
                <Check size={16} /> Explain the finding
              </span>
            </div>
          </div>
          <div className="workflow-labels">
            <span>Analyse</span>
            <span>Validate</span>
            <span>Report</span>
          </div>
        </div>
        <span className="floating-tag float-python">Python</span>
        <span className="floating-tag float-sql">SQL</span>
        <span className="floating-tag float-excel">Excel</span>
        <span className="floating-tag float-powerbi">Power BI</span>
      </Reveal>
    </section>
  );
}
function About() {
  return (
    <section id="about" className="shell section about-section">
      <Heading
        label="About"
        title="Understanding the numbers behind the report."
      />
      <div className="about-grid">
        <Reveal className="photo-wrap">
          <div className="photo-placeholder">
            <UserRound strokeWidth={0.8} aria-hidden="true" />
            <span>Your photo</span>
          </div>
          <p className="photo-caption">SAURABH ZAMBARE · VADODARA, INDIA</p>
        </Reveal>
        <Reveal className="about-copy">
          <p className="lead">
            My focus is data analysis and reporting. I investigate patterns,
            check discrepancies and explain findings clearly. I want to
            understand where the numbers came from, how they were calculated and
            what conclusions they support.
          </p>
          <p>
            My portfolio projects demonstrate data preparation, SQL analysis,
            Python workflows and Power BI reporting, with attention to
            validation, metric definitions and source references.
          </p>
          <p>
            At McDonald’s Canada, reviewing inventory, waste and variance
            reports helped me investigate differences and make ordering
            decisions. Presenting crew feedback in management meetings
            strengthened how I organise and communicate information.
          </p>
          <p className="about-opportunity">
            Now seeking opportunities in data analysis, business intelligence
            and reporting.
          </p>
          <a href="#projects" className="text-link">
            See my reporting projects <BarChart3 size={17} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
function ProjectVisual({ id, title }: { id: string; title: string }) {
  const images: Record<string, string> = {
    instacart: "instacart-overview.png",
    gacl: "gacl-overview.png",
    mercedes: "mercedes-comparison.png",
  };
  if (images[id])
    return (
      <div className={`project-visual ${id}`}>
        <img
          src={asset(images[id])}
          alt={
            id === "mercedes"
              ? "Actual five-fold model evaluation comparison from the Mercedes-Benz project"
              : `Actual ${title} report screenshot`
          }
          loading="lazy"
          width="1200"
          height="675"
        />
        <span className="visual-caption">
          {id === "mercedes"
            ? "Documented model evaluation"
            : "Actual Power BI report"}
        </span>
      </div>
    );
  return (
    <div
      className={`project-visual schematic ${id}`}
      aria-label={`${title} workflow illustration`}
    >
      <Code2 size={30} />
      <div className="schematic-title">
        {id === "discipline"
          ? "Build a habit. Track the progress."
          : "Projects. Vendors. Structured records."}
      </div>
      <div className="schematic-steps">
        {(id === "discipline"
          ? ["Daily quest", "Completion", "Progress"]
          : ["MVC", "EF Core", "SQL Server"]
        ).map((t) => (
          <span key={t}>{t}</span>
        ))}
      </div>
      <span className="visual-caption">
        {id === "discipline"
          ? "Application workflow illustration"
          : "In development · architecture illustration"}
      </span>
    </div>
  );
}
function Projects() {
  const [filter, setFilter] = useState("All work");
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(
    null,
  );
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement | null>(null);
  const shown = projects.filter(
    (p) => filter === "All work" || p.categories.includes(filter),
  );
  useEffect(() => {
    if (!selected) return;
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  function close() {
    dialog.current?.close();
    setSelected(null);
    trigger.current?.focus();
  }
  return (
    <section id="projects" className="shell section">
      <div className="heading-row">
        <Heading
          label="Selected work"
          title="Projects."
          description="Explore the analysis, checks and thinking behind the work."
        />
        <External className="text-link" href={github}>
          All repositories <Github size={17} />
        </External>
      </div>
      <div className="filters" role="group" aria-label="Filter projects">
        {[
          "All work",
          "Data & BI",
          "Data Engineering",
          "Machine Learning",
          "Software",
        ].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {shown.length} projects shown
      </p>
      <div className="project-grid">
        {shown.map((p) => (
          <Reveal
            key={p.id}
            className={`project-card ${p.featured ? "featured" : ""}`}
          >
            <ProjectVisual id={p.id} title={p.title} />
            <div className="project-body">
              <p className="eyebrow">{p.label}</p>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <p className="project-scope">{p.scope}</p>
              <Tags items={p.tags} />
              <div className="project-actions">
                <button
                  className="button"
                  aria-label={`Read case study: ${p.title}`}
                  onClick={(e) => {
                    trigger.current = e.currentTarget;
                    setSelected(p);
                  }}
                >
                  Read case study <Plus size={16} />
                </button>
                <External href={p.url} aria-label={`View ${p.title} source`}>
                  <Github size={17} /> Source
                </External>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="project-dialog"
        aria-labelledby="case-title"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        {selected && (
          <>
            <div className="dialog-top">
              <span className="eyebrow">Project case study</span>
              <button
                className="icon-button"
                onClick={close}
                aria-label="Close case study"
                autoFocus
              >
                <X />
              </button>
            </div>
            <div className="dialog-content">
              <p className="eyebrow">{selected.scope}</p>
              <h2 id="case-title">{selected.title}</h2>
              <p className="lead">{selected.summary}</p>
              <ProjectVisual id={selected.id} title={selected.title} />
              <h3>The question</h3>
              <p>{selected.problem}</p>
              <h3>What I built and checked</h3>
              <ul>
                {selected.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <div className="proof-note">{selected.proof}</div>
              <h3>Scope and limitations</h3>
              <p>{selected.limitations}</p>
              <Tags items={selected.tags} />
              <External href={selected.url} className="button primary">
                Explore the source <Github size={18} />
              </External>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
function Journey() {
  return (
    <section id="journey" className="shell section">
      <div className="heading-row">
        <Heading
          label="My journey"
          title="A journey. Still unfolding."
          description="Different places. New responsibilities. The same curiosity."
        />
        <span className="route-label">INDIA / CANADA / INDIA</span>
      </div>
      <div className="journey-timeline">
        {journey.map((j) => (
          <Reveal
            className={`journey-entry ${j.id === "today" ? "current" : ""}`}
            key={j.id}
          >
            <div className="journey-date">{j.date}</div>
            <div className="journey-marker" aria-hidden="true" />
            <details
              className="journey-card"
              open={j.id === "today" ? true : undefined}
            >
              <summary>
                <span>
                  <span className="small-label">{j.place}</span>
                  <h3>{j.title}</h3>
                  <span className="journey-subtitle">{j.subtitle}</span>
                </span>
                <Plus className="details-plus" size={20} />
              </summary>
              <div className="details-content">
                <p>{j.description}</p>
                <Tags items={j.tags} />
                {j.id === "mcd" && (
                  <a href="#experience" className="text-link">
                    Explore my experience <BriefcaseBusiness size={16} />
                  </a>
                )}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
function Experience() {
  return (
    <section id="experience" className="shell section">
      <Heading
        label="Professional experience"
        title="Responsibility, earned along the way."
        description="From learning the stations to leading a department."
      />
      <Reveal className="experience-panel">
        <div className="company-heading">
          <div className="company-icon">
            <BriefcaseBusiness size={28} />
          </div>
          <div>
            <h3>McDonald’s Canada</h3>
            <p>Sault Ste. Marie, Canada</p>
          </div>
          <span className="tenure">2021–2026</span>
        </div>
        <p className="progression-note">
          Six roles across my time with the company.
        </p>
        <div className="roles">
          {experience.map((r, i) => (
            <details
              key={r.title}
              className="role"
              open={i === experience.length - 1 ? true : undefined}
            >
              <summary>
                <span>
                  <span className="role-name">{r.title}</span>
                  <span className="role-summary">{r.summary}</span>
                </span>
                <Plus className="details-plus" size={20} />
              </summary>
              <div className="details-content">
                <ul>
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
        <div className="experience-tags">
          <Tags
            items={[
              "Kitchen operations",
              "Team coaching",
              "Inventory & waste reporting",
              "Food safety",
              "Stock transfers",
            ]}
          />
        </div>
      </Reveal>
    </section>
  );
}
function Education() {
  return (
    <section id="education" className="shell section">
      <Heading
        label="Education & training"
        title="The foundations I build on."
      />
      <div className="education-grid">
        {education.map((e) => (
          <Reveal
            className={`education-card ${e.kind === "Professional training" ? "training-card" : ""}`}
            key={e.title}
          >
            <div className="card-icon">
              <GraduationCap size={26} />
              <span className="small-label">{e.date}</span>
            </div>
            <span className="badge">{e.kind}</span>
            <h3>{e.title}</h3>
            <p className="institution">{e.institution}</p>
            <p className="subtle">{e.place}</p>
          </Reveal>
        ))}
      </div>
      <a href="#courses" className="text-link section-bottom-link">
        Explore my courses <BookOpen size={17} />
      </a>
    </section>
  );
}
function Courses() {
  const [filter, setFilter] = useState("All learning");
  const shown = courses.filter(
    (c) => filter === "All learning" || c.category === filter,
  );
  return (
    <section id="courses" className="shell section">
      <div className="heading-row">
        <Heading
          label="Continuing to learn"
          title="Certifications & courses."
          description="Professional training and coursework, alongside the projects where I put learning into practice."
        />
        <External
          href={`${linkedin}details/certifications/`}
          className="text-link"
        >
          LinkedIn credentials <ExternalLink size={16} />
        </External>
      </div>
      <div className="filters" role="group" aria-label="Filter courses">
        {[
          "All learning",
          "Data Science & ML",
          "AI & LLMs",
          "Data & BI",
          "Big Data",
        ].map((f) => (
          <button
            key={f}
            aria-pressed={filter === f}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {shown.length} courses shown
      </p>
      <div className="course-grid">
        {shown.map((c) => (
          <Reveal className="course-card" key={c.title}>
            <div className="course-top">
              <BookOpen size={23} />
              <span
                className={`badge ${c.status === "In progress" ? "cyan" : ""}`}
              >
                {c.status}
              </span>
            </div>
            <p className="eyebrow">{c.category}</p>
            <h3>{c.title}</h3>
            {c.issuer && <p className="institution">{c.issuer}</p>}
            <p className="subtle">{c.detail}</p>
            {c.url && (
              <External href={c.url} className="text-link">
                View credential <ExternalLink size={16} />
              </External>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
const marqueeRows = [
  ["Python", "SQL", "Excel", "Power BI", "DAX", "Power Query", "Tableau"],
  ["pandas", "scikit-learn", "BigQuery", "dbt", "SQLite", "Data Validation"],
  ["React", "Django", "PostgreSQL", "Git", "GitHub", "Docker", "REST APIs"],
];
function Skills() {
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  return (
    <section id="skills" className="section skills-section">
      <div className="shell heading-row">
        <Heading
          label="My toolkit"
          title="Skills, with work behind them."
          description="Tools I apply in projects, and the people skills I bring to a team."
        />
        <button
          className="button motion-control"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
          disabled={!!reduced}
        >
          {paused || reduced ? <Play size={16} /> : <Pause size={16} />}
          {reduced
            ? "Reduced motion enabled"
            : paused
              ? "Resume movement"
              : "Pause movement"}
        </button>
      </div>
      <div
        className={`marquee-band ${paused ? "paused" : ""}`}
        aria-label="Applied technical skills"
      >
        {marqueeRows.map((row, i) => (
          <div
            className={`marquee-row row-${i}`}
            key={i}
            tabIndex={0}
            aria-label={`Skill row ${i + 1}. Focus to pause.`}
          >
            <div className="marquee-track">
              {[0, 1, 2, 3].map((copy) => (
                <div
                  key={copy}
                  className="marquee-group"
                  aria-hidden={copy > 0 ? true : undefined}
                >
                  {row.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="shell">
        <div className="skill-grid">
          {skills.slice(0, 3).map((s, i) => (
            <SkillCard key={s.title} skill={s} icon={i} />
          ))}
          <Reveal className="skill-card ai-card">
            <div className="card-icon">
              <Sparkles size={24} />
              <span className="badge cyan">Learning & building</span>
            </div>
            <h3>AI & LLM Engineering</h3>
            <div className="ai-stage">
              <h4>Applied in GACL</h4>
              <p>PDF extraction · Source traceability · Text chunking</p>
            </div>
            <div className="ai-stage">
              <h4>Development roadmap</h4>
              <p>
                RAG · Embeddings · Semantic search · Tool calling · AI
                evaluation
              </p>
            </div>
            <div className="ai-stage">
              <h4>Course learning</h4>
              <p>LLM APIs · Local models · LoRA / QLoRA · Agents</p>
            </div>
            <External
              href={`${projects[1].url}/blob/main/docs/AI_EXTENSION_PLAN.md`}
              className="text-link"
            >
              View the development plan <ExternalLink size={16} />
            </External>
          </Reveal>
          {skills.slice(3).map((s, i) => (
            <SkillCard key={s.title} skill={s} icon={i + 3} />
          ))}
        </div>
        <div className="how-i-work">
          <h3>How I work.</h3>
          <div className="work-grid">
            {workSkills.map((s, i) => {
              const Icon = [Users, UserRound, BriefcaseBusiness, BarChart3][i];
              return (
                <Reveal className="work-card" key={s.title}>
                  <Icon size={24} />
                  <h4>{s.title}</h4>
                  <p>{s.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
function SkillCard({
  skill,
  icon,
}: {
  skill: (typeof skills)[number];
  icon: number;
}) {
  const Icon = [BarChart3, Code2, Database, Code2, Github][icon];
  return (
    <Reveal className="skill-card">
      <Icon size={25} />
      <h3>{skill.title}</h3>
      <Tags items={skill.tools} />
      <p>{skill.evidence}</p>
      <External className="text-link" href={skill.link}>
        {skill.project} <ExternalLink size={16} />
      </External>
    </Reveal>
  );
}
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">The next chapter</p>
          <h2>
            Let’s connect<span>.</span>
          </h2>
          <p className="contact-copy">
            I’m seeking opportunities in data analysis, business intelligence
            and reporting. I’d be glad to walk you through my projects and
            discuss how I could contribute to your team.
          </p>
          <div className="actions">
            <External href={linkedin} className="button primary">
              <Linkedin size={19} /> Connect on LinkedIn
            </External>
            <External href={github} className="button">
              <Github size={19} /> Explore my GitHub
            </External>
          </div>
          <p className="location">
            <MapPin size={16} /> Vadodara, India{" "}
            <span>Available immediately</span>
          </p>
        </Reveal>
        <footer className="site-footer">
          <div>
            <a href="#home" className="footer-name">
              Saurabh Zambare.
            </a>
            <p>Data Analysis & Reporting</p>
          </div>
          <External href="https://github.com/Sridattasai18/Neo-folio">
            Based on Neo-folio · MIT
          </External>
          <a href="#home">Back to top</a>
        </footer>
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
        <About />
        <Projects />
        <Journey />
        <Experience />
        <Education />
        <Courses />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  );
}

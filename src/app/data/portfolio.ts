export const projects = [
  {
    id: "instacart",
    title: "Instacart Analytics",
    label: "DATA, BI & MACHINE LEARNING",
    scope: "Portfolio project",
    featured: true,
    categories: ["Data & BI", "Machine Learning"],
    tags: ["SQL", "Power BI", "Python", "Excel"],
    url: "https://github.com/Saurabhzambare/instacart-sql-powerbi-analysis",
    summary:
      "Exploring purchasing patterns and repeat orders through SQL analysis and Power BI reporting.",
    proof: "3.21 million prior orders analysed. Three Power BI report pages.",
    problem:
      "How do product popularity, repeat purchasing, basket sizes, and ordering times differ? The reporting needed consistent definitions before any comparison could be trusted.",
    actions: [
      "Built a SQL reporting layer and reconciled Power BI totals against its views.",
      "Created Overview, Products & Reordering, and Ordering & Baskets report pages.",
      "Kept order penetration and product-entry reorder rate separate.",
      "Recorded a BigQuery/dbt checkpoint with eight models and 56 tests.",
      "Compared logistic regression with a frequency baseline on 480 held-out orders. Mean per-order F1 was 0.3424 versus 0.3336.",
    ],
    limitations:
      "Historical analysis and a held-out model experiment. These are not sales, revenue, retention, or production impact claims.",
  },
  {
    id: "gacl",
    title: "Public-Disclosure Pipeline",
    label: "DATA ENGINEERING",
    scope: "Independent project · AI extension in development",
    featured: true,
    categories: ["Data & BI", "Data Engineering"],
    tags: ["Python", "SQLite", "BigQuery", "dbt", "Power BI"],
    url: "https://github.com/Saurabhzambare/gacl-public-disclosure-pipeline",
    summary:
      "Turning public disclosures into validated data and traceable reporting, with a Python pipeline and source-page references.",
    proof:
      "18 observations from two official reports, with source-page lineage.",
    problem:
      "Public disclosures mix annual totals, monthly rates, units, and organisational scopes. Each value needs to be traceable to its source.",
    actions: [
      "Built a Python extraction and validation pipeline with duplicate-safe SQLite loading and CSV exports.",
      "Preserved separate grains for 12 annual and six monthly observations.",
      "Recorded three dbt views, seven SQL tests, and eight reference checks.",
      "Built and refreshed a two-page Power BI report.",
      "Extracted PDF-page evidence and split text into traceable chunks for the developing AI extension.",
    ],
    limitations:
      "Independent work using GACL public disclosures, not a commissioned company project. The AI research-assistant extension is being implemented; a completed RAG service is not claimed.",
  },
  {
    id: "discipline",
    title: "Discipline System",
    label: "FULL-STACK DEVELOPMENT",
    scope: "Personal project",
    featured: false,
    categories: ["Software"],
    tags: ["Django", "DRF", "React", "PostgreSQL", "Docker"],
    url: "https://github.com/Saurabhzambare/discipline-system",
    summary:
      "A quest-based habit app that turns completed daily activities into experience, levels, and progress.",
    proof: "322 backend tests passed at the 23 November 2026 checkpoint.",
    problem:
      "Daily progress needs to stay consistent when someone retries a completion or a new day begins in their time zone.",
    actions: [
      "Built with Django REST Framework, React, JWT authentication, and PostgreSQL.",
      "Handled repeated quest completions without extra EXP or duplicate records.",
      "Used player-local dates for daily lineup boundaries.",
      "Documented application contracts and the backend verification checkpoint.",
    ],
    limitations:
      "Personal application development. The backend test checkpoint does not establish production deployment or a fresh visual audit of the frontend.",
  },
  {
    id: "mercedes",
    title: "Mercedes-Benz Greener Manufacturing",
    label: "EXPLORATORY MACHINE LEARNING",
    scope: "Learning project",
    featured: false,
    categories: ["Machine Learning"],
    tags: ["Python", "pandas", "scikit-learn", "Regression"],
    url: "https://github.com/Saurabhzambare/Mercedes-Benz-Greener-Manufacturing",
    summary:
      "Exploring anonymised vehicle configurations and comparing baseline predictions of test-bench time.",
    proof: "Same five folds across 4,209 labelled records. Ridge RMSE: 8.3867.",
    problem:
      "Can configuration features help estimate vehicle testing time? A first step is comparing a simple model with a mean predictor on the same folds.",
    actions: [
      "Inspected missing values, feature types, target distribution, and categorical variables.",
      "Explored tree-model feature importance in the original notebook.",
      "Recorded a separate categorical Ridge experiment on the same five folds as a mean baseline.",
      "Compared mean fold RMSE of 8.3867 for Ridge with 12.6727 for the mean predictor.",
    ],
    limitations:
      "An exploratory learning project and a separate recorded baseline evaluation. No Kaggle score, factory efficiency saving, or deployed prediction system is claimed.",
  },
  {
    id: "vendor",
    title: "EPC Vendor Management",
    label: "SOFTWARE DEVELOPMENT",
    scope: "Personal project",
    featured: false,
    categories: ["Software"],
    tags: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Razor"],
    url: "https://github.com/Saurabhzambare/epc-vendor-management",
    summary:
      "Developing a database-backed MVC application for project and vendor management.",
    proof: "An application project using .NET 8 and SQL Server.",
    problem:
      "Project and vendor information needs a structured application workflow, a relational data model, and clear handling of record changes.",
    actions: [
      "Worked with ASP.NET Core MVC, Entity Framework Core, SQL Server, and Razor views.",
      "Used Identity, validation, anti-forgery protection, and Post/Redirect/Get.",
      "Implemented deactivation handling for records.",
    ],
    limitations:
      "Personal development work. It is not presented as a completed client deployment or a production ERP system.",
  },
];
export const journey = [
  {
    id: "itm",
    date: "2017–2020",
    title: "Building my foundation.",
    subtitle: "Computer Science · ITM Vocational University",
    place: "Vadodara, India",
    description:
      "I began with computer science and programming, building the foundation I continue to develop through technical projects.",
    tags: ["Computer Science", "Programming"],
  },
  {
    id: "ielts",
    date: "Final year at ITM",
    title: "Preparing for Canada.",
    subtitle: "IELTS preparation alongside college",
    place: "India",
    description:
      "I started preparing for IELTS in my final year at ITM, while planning the next chapter of my education in Canada.",
    tags: ["IELTS preparation", "A new direction"],
  },
  {
    id: "science",
    date: "2020–2021",
    title: "Learning during COVID.",
    subtitle: "Data Scientist Program · Simplilearn",
    place: "India · Professional training",
    description:
      "Before moving to Canada, I completed a Data Scientist program during the COVID period, developing my interest in working with data.",
    tags: ["Data Science", "Professional training"],
  },
  {
    id: "sault",
    date: "2021–2023",
    title: "A new chapter in Canada.",
    subtitle: "Computer Programming · Sault College",
    place: "Sault Ste. Marie, Canada",
    description:
      "Studying Computer Programming at Sault College meant continuing my technical education while adapting to life in a new country.",
    tags: ["Computer Programming", "Canada"],
  },
  {
    id: "mcd",
    date: "2021–2026",
    title: "Growing through responsibility.",
    subtitle: "McDonald’s Canada · Crew Member to Department Manager",
    place: "Sault Ste. Marie, Canada",
    description:
      "I progressed through crew, training and management roles. Coaching people, coordinating service areas and taking ownership of kitchen operations shaped how I work with a team.",
    tags: ["Team coaching", "Kitchen operations", "Reporting"],
  },
  {
    id: "french",
    date: "January 2026 onward",
    title: "Learning French.",
    subtitle: "A different kind of daily practice",
    place: "Language learning",
    description:
      "I started learning French in January 2026. Listening, speaking and regular practice have become another part of my learning routine.",
    tags: ["French", "Consistent practice"],
  },
  {
    id: "india",
    date: "June 2026",
    title: "Returning to India.",
    subtitle: "Back in Vadodara",
    place: "India",
    description:
      "After closing my work chapter in Canada, I returned to India and turned my attention towards building a technical career here.",
    tags: ["Vadodara", "A new chapter"],
  },
  {
    id: "today",
    date: "Today",
    title: "Building towards data and AI.",
    subtitle: "Learning, creating and looking for a team",
    place: "Vadodara, India",
    description:
      "I am studying AI, developing data and software projects, and seeking opportunities in India. My current focus is clear reporting, reliable data and an evidence-grounded public-disclosure research assistant in development.",
    tags: ["Data & reporting", "AI learning", "Open to opportunities"],
  },
];

export const experience = [
  {
    title: "Crew Member",
    summary: "Learning the operation from the floor.",
    bullets: [
      "Prepared products and supported service while following food-safety, quality and cleanliness procedures.",
      "Worked with colleagues to keep assigned stations ready during changing service demand.",
    ],
  },
  {
    title: "Crew Trainer",
    summary: "Helping new colleagues learn the work.",
    bullets: [
      "Demonstrated station procedures and coached crew members during hands-on practice.",
      "Explained food-safety and quality requirements and gave feedback on day-to-day work.",
    ],
  },
  {
    title: "Team Leader",
    summary: "Coordinating people and priorities.",
    bullets: [
      "Coordinated assigned team activities and communicated priorities during service.",
      "Supported crew members with station tasks and escalated operational issues when needed.",
    ],
  },
  {
    title: "Swing Manager",
    summary: "Supervising kitchen, drive-thru and front counter areas.",
    bullets: [
      "Oversaw assigned service areas, including the kitchen, drive-thru and front counter.",
      "Adjusted station assignments and communicated priorities as service demand changed.",
      "Monitored procedures, product quality and food safety within the assigned area.",
    ],
  },
  {
    title: "Support Manager",
    summary: "Supporting the kitchen department manager.",
    bullets: [
      "Assisted the Kitchen Department Manager with kitchen operations and food-safety checks.",
      "Completed waste counts and maintained waste records for department review.",
      "Arranged stock transfers between stores and recorded incoming and outgoing stock.",
    ],
  },
  {
    title: "Department Manager",
    summary: "Taking ownership of kitchen operations and reporting.",
    bullets: [
      "Reviewed inventory, waste and variance reports to investigate discrepancies and guide kitchen ordering decisions.",
      "Placed kitchen stock orders and coordinated inventory requirements and transfers between stores.",
      "Coached crew members on procedures, food safety and product quality, and delegated department priorities.",
      "Collected crew feedback and presented department observations in management meetings.",
    ],
  },
];

export const education = [
  {
    date: "2017–2020",
    title: "Computer Science",
    institution: "ITM Vocational University",
    place: "Vadodara, India",
    kind: "Education",
  },
  {
    date: "2020–2021",
    title: "Data Scientist Master’s Program",
    institution: "Simplilearn",
    place: "Completed before moving to Canada",
    kind: "Professional training",
  },
  {
    date: "2021–2023",
    title: "Computer Programming",
    institution: "Sault College",
    place: "Sault Ste. Marie, Canada",
    kind: "Education",
  },
];

// Credential URLs and completion dates are optional. Add only verified details.
// This is a curated list, not an automatic sync with LinkedIn.
export const courses = [
  {
    title: "Data Scientist Master’s Program",
    issuer: "Simplilearn",
    category: "Data Science & ML",
    status: "Completed",
    detail: "Professional training · 2020–2021",
    url: null,
  },
  {
    title: "AI Engineer Core Track: LLM Engineering, RAG, QLoRA, Agents",
    issuer: "",
    category: "AI & LLMs",
    status: "In progress",
    detail: "LLM engineering, retrieval, fine-tuning and agents",
    url: null,
  },
  {
    title: "Power BI A-Z: Hands-On Power BI Training For Data Science!",
    issuer: "Udemy",
    category: "Data & BI",
    status: "Coursework",
    detail: "Data preparation, visualisation and reporting",
    url: null,
  },
  {
    title: "Tableau Desktop 10",
    issuer: "",
    category: "Data & BI",
    status: "Coursework",
    detail: "Data exploration and dashboard reporting",
    url: null,
  },
  {
    title: "Big Data Hadoop and Spark Developer",
    issuer: "",
    category: "Big Data",
    status: "Completed",
    detail: "Big data and distributed processing",
    url: null,
  },
  {
    title: "Machine Learning Advanced Certification Training",
    issuer: "",
    category: "Data Science & ML",
    status: "Coursework",
    detail: "Machine learning methods and evaluation",
    url: null,
  },
];

export const skills = [
  {
    title: "Data Analysis & Reporting",
    tools: ["SQL", "Excel", "Power BI", "DAX", "Power Query", "Tableau"],
    evidence:
      "Reporting queries, metric definitions and checks between source data and dashboards.",
    project: "Instacart Analytics",
    link: projects[0].url,
  },
  {
    title: "Python & Machine Learning",
    tools: [
      "Python",
      "pandas",
      "scikit-learn",
      "Regression",
      "Model Evaluation",
    ],
    evidence:
      "Data preparation and documented comparisons with a baseline on the same evaluation folds.",
    project: "Mercedes-Benz Greener Manufacturing",
    link: projects[3].url,
  },
  {
    title: "Data Engineering",
    tools: ["BigQuery", "dbt", "SQLite", "ETL", "Data Validation"],
    evidence:
      "Traceable extraction, separate data grains, duplicate-safe loads and source-reference checks.",
    project: "Public-Disclosure Pipeline",
    link: projects[1].url,
  },
  {
    title: "Software Development",
    tools: [
      "Django",
      "DRF",
      "React",
      "PostgreSQL",
      "ASP.NET Core MVC",
      "EF Core",
    ],
    evidence:
      "API-backed applications, authentication and consistent database changes.",
    project: "Discipline System",
    link: projects[2].url,
  },
  {
    title: "Development Tools",
    tools: ["Git", "GitHub", "Docker", "REST APIs"],
    evidence:
      "Versioned changes, documented setup and repeatable checks across independent projects.",
    project: "Explore the repositories",
    link: "https://github.com/Saurabhzambare",
  },
];

export const workSkills = [
  {
    title: "Interpersonal & Collaboration",
    text: "Working with colleagues from different backgrounds and coaching crew through hands-on practice.",
  },
  {
    title: "Communication",
    text: "Explaining procedures, coordinating stock transfers and making changing priorities clear to the team.",
  },
  {
    title: "Presentation",
    text: "Organising crew feedback and presenting department observations in management meetings.",
  },
  {
    title: "Reporting",
    text: "Maintaining waste and transfer records, reviewing variances and explaining findings through project dashboards.",
  },
];

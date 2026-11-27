export const projects = [
  {
    id: "instacart",
    title: "Instacart Retail Analytics",
    label: "DATA, BI & MACHINE LEARNING",
    scope: "Portfolio project",
    featured: true,
    categories: ["Data & BI", "Machine learning"],
    tags: ["SQL Server", "Power BI", "Python", "BigQuery", "dbt"],
    url: "https://github.com/Saurabhzambare/instacart-sql-powerbi-analysis",
    summary:
      "Turning historical shopping behaviour into validated reporting and a repeat-purchase prediction experiment.",
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
    scope: "Portfolio project",
    featured: false,
    categories: ["Data & BI"],
    tags: ["Python", "SQLite", "BigQuery", "dbt", "Power BI"],
    url: "https://github.com/Saurabhzambare/gacl-public-disclosure-pipeline",
    summary:
      "Extracting public water and energy disclosures into traceable, validated reporting data.",
    proof:
      "18 observations from two official reports, with source-page lineage.",
    problem:
      "Public disclosures mix annual totals, monthly rates, units, and organisational scopes. Each value needs to be traceable to its source.",
    actions: [
      "Built a Python extraction and validation pipeline with duplicate-safe SQLite loading and CSV exports.",
      "Preserved separate grains for 12 annual and six monthly observations.",
      "Recorded three dbt views, seven SQL tests, and eight reference checks.",
      "Built and refreshed a two-page Power BI report.",
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
    categories: ["Machine learning"],
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
    id: "india",
    phase: "THE FOUNDATION / INDIA",
    title: "Starting with computer science",
    subtitle: "ITM Vocational University, Vadodara",
    description:
      "My education in computer science gave me an introduction to programming and the foundations I continue to build on through projects.",
    tags: ["Computer science", "Programming"],
    link: null,
  },
  {
    id: "ielts",
    phase: "PREPARING FOR CANADA",
    title: "IELTS and a new direction",
    subtitle: "Preparing to study abroad",
    description:
      "Preparing for IELTS was part of taking the next step towards studying in Canada. Language preparation and adapting to a new environment became part of the learning journey.",
    tags: ["IELTS preparation", "Adaptability"],
    link: null,
  },
  {
    id: "college",
    phase: "STUDYING IN CANADA",
    title: "Sault College",
    subtitle: "Computer Programming, Sault Ste. Marie",
    description:
      "I studied Computer Programming at Sault College and gained early workplace exposure through an IT Support Engineer internship at Innovation Centre SSM.",
    tags: ["Computer Programming", "IT support"],
    link: null,
  },
  {
    id: "mcd",
    phase: "WORKING IN CANADA / THROUGH MAY 2026",
    title: "Learning to lead, on the floor",
    subtitle: "McDonald’s Canada",
    description:
      "Over nearly five years in customer service and restaurant operations, I progressed into department management. Coordinating people, reviewing inventory and waste, and responding to busy service taught me practical ownership.",
    tags: ["Team coaching", "Operations", "Reporting"],
    link: null,
  },
  {
    id: "projects",
    phase: "BUILDING ALONG THE WAY",
    title: "Courses became projects",
    subtitle: "Data science, reporting, and software",
    description:
      "I kept developing technical skills through professional training and hands-on projects. My work ranges from retail analytics and manufacturing data to a full-stack habit application.",
    tags: ["Python", "Power BI", "Web development"],
    link: "https://github.com/Saurabhzambare",
  },
  {
    id: "french",
    phase: "ANOTHER WAY TO LEARN",
    title: "Taking on French",
    subtitle: "French A2 and TEF/TCF preparation",
    description:
      "Learning French introduced a different kind of practice: listening carefully, repeating the basics, and being comfortable making mistakes while improving.",
    tags: ["French A2", "Consistent practice"],
    link: null,
  },
  {
    id: "return",
    phase: "JUNE 2026 / INDIA",
    title: "Back in Vadodara",
    subtitle: "Closing the Canada chapter",
    description:
      "After leaving my role in Canada, I returned to India in the first week of June 2026. I am now focused on building a long-term technical career here.",
    tags: ["Career transition", "India"],
    link: null,
  },
  {
    id: "now",
    phase: "TODAY / THE NEXT CHAPTER",
    title: "Building towards data and AI",
    subtitle: "Learning, creating, and looking for a team",
    description:
      "I am studying AI, developing my portfolio, and exploring junior data, AI, and software opportunities in India. Current work includes retail model evaluation and an evidence-grounded public-disclosure research assistant.",
    tags: ["AI learning", "Projects", "Open to opportunities"],
    link: "https://github.com/Saurabhzambare",
  },
];
export const skills = [
  {
    title: "Analytics & reporting",
    tools: ["SQL", "Power BI", "DAX", "Power Query", "Excel", "Tableau"],
    evidence:
      "Building reporting views, reconciling totals, and keeping metric definitions clear in retail and disclosure analysis.",
    link: "https://github.com/Saurabhzambare/instacart-sql-powerbi-analysis",
  },
  {
    title: "Python, data & ML",
    tools: ["Python", "pandas", "scikit-learn", "SQLite", "BigQuery", "dbt"],
    evidence:
      "Validating extracted records and comparing predictive models with baselines using documented evaluation splits.",
    link: "https://github.com/Saurabhzambare/gacl-public-disclosure-pipeline",
  },
  {
    title: "Software development",
    tools: ["Django", "DRF", "React", "PostgreSQL", ".NET", "Git", "Docker"],
    evidence:
      "Working on API-backed applications, authentication, consistent database changes, and software tests.",
    link: "https://github.com/Saurabhzambare/discipline-system",
  },
];
export const training = [
  "Data Scientist Master’s Program (professional training)",
  "Power BI A-Z: Hands-On Power BI Training For Data Science!",
  "Big Data Hadoop and Spark Developer",
  "Tableau Desktop 10",
  "Machine Learning Advanced Certification Training",
];

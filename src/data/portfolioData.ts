import { PortfolioData } from '../types/portfolio';

export const initialPortfolioData: PortfolioData = {
  name: "Alisha Malik",
  headline: "BS Business Data Analytics | COMSATS University Islamabad",
  shortBio: "Business Data Analytics student (5th semester) with hands-on experience in Excel, SQL, and Python. Skilled in data cleaning, exploratory analysis, and visualization. Seeking an internship opportunity to apply data analytical skills in a real-world environment.",
  fullBio: "I am a dedicated 5th-semester Business Data Analytics student at COMSATS University Islamabad with a strong academic foundation (CGPA 3.46) and practical technical skills. My coursework and projects focus on bridging the gap between raw data and meaningful business insights. Using Python, SQL, and Excel, I enjoy cleaning unstructured datasets, discovering trends through exploratory data analysis, and designing clear, intuitive dashboards. I am actively expanding my skillset into Machine Learning, Web Development, and Mobile Applications.",
  location: "Islamabad, Pakistan",
  email: "malikalisha2020@gmail.com",
  phone: "+92 3165147184",
  linkedInUrl: "https://www.linkedin.com/in/alisha-malik-6a84a83b2?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  gitHubUrl: "https://github.com",
  resumePdfUrl: "", // Editable placeholder for custom PDF download link; built-in printable CV modal is provided
  education: [
    {
      id: "comsats",
      institution: "COMSATS University Islamabad",
      degree: "BS Business Data Analytics",
      period: "2024 – Present (Expected: 2028)",
      location: "Islamabad, Pakistan",
      cgpaOrGrade: "CGPA: 3.46 / 4.00",
      description: "Currently in 5th semester, focusing on quantitative methods, business intelligence, database management, and data-driven organizational decision making.",
      highlights: [
        "Current Status: 5th Semester Student",
        "Key Coursework: Business Analytics, Database Management Systems, Python Programming, Statistical Inference, Predictive Modeling",
        "Academic Standing: Consistent high performance with a 3.46 CGPA"
      ]
    },
    {
      id: "ffc",
      institution: "Fauji Foundation College",
      degree: "Intermediate in Computer Science (ICS)",
      period: "Completed",
      location: "Rawalpindi / Islamabad, Pakistan",
      cgpaOrGrade: "Completed with Distinction",
      description: "Comprehensive intermediate studies with strong emphasis on Computer Science, Mathematics, and Analytical Problem Solving.",
      highlights: [
        "Core Subjects: Computer Science, Mathematics, Physics / Statistics",
        "Developed early programming foundations and quantitative logic"
      ]
    },
    {
      id: "aps",
      institution: "Army Public School (APS Cobbelines)",
      degree: "Schooling / Matriculation in Computer Science",
      period: "Completed",
      location: "Rawalpindi / Islamabad, Pakistan",
      cgpaOrGrade: "First Division",
      description: "Foundational academic education focusing on science and computer studies, building analytical habits and academic discipline.",
      highlights: [
        "Specialization: Computer Science & Pure Sciences",
        "Active participant in school competitions and presentations"
      ]
    }
  ],
  skills: [
    // Data Analysis & Modeling
    {
      name: "Python",
      category: "data",
      level: "Intermediate",
      description: "Pandas, Matplotlib, NumPy, data cleaning, exploratory data analysis"
    },
    {
      name: "SQL",
      category: "data",
      level: "Intermediate",
      description: "Relational database querying, multi-table joins, aggregations, filtering"
    },
    {
      name: "Microsoft Excel",
      category: "data",
      level: "Advanced",
      description: "Pivot Tables, dynamic formulas, KPI dashboards, data formatting"
    },
    {
      name: "Machine Learning",
      category: "data",
      level: "Familiar",
      description: "Supervised learning concepts, predictive classification, regression basics"
    },
    {
      name: "Statistics",
      category: "data",
      level: "Intermediate",
      description: "Descriptive & inferential statistics, probability distributions, hypothesis testing"
    },
    {
      name: "Oracle Database",
      category: "data",
      level: "Intermediate",
      description: "Relational schema structures, database queries, enterprise data management"
    },
    // Productivity & Design Tools
    {
      name: "PowerPoint",
      category: "tools",
      level: "Advanced",
      description: "Professional executive decks, data storytelling, visual presentations"
    },
    {
      name: "Microsoft Word",
      category: "tools",
      level: "Advanced",
      description: "Academic reports, structured business documentation, formal research papers"
    },
    {
      name: "Canva",
      category: "tools",
      level: "Advanced",
      description: "Infographics, report assets, visual social media design, presentation styling"
    },
    // Emerging / Learning
    {
      name: "Web Development",
      category: "dev",
      level: "Learning",
      description: "HTML5, modern CSS, JavaScript fundamentals, frontend interfaces"
    },
    {
      name: "App Development",
      category: "dev",
      level: "Learning",
      description: "Mobile app fundamentals, UI layout logic, multi-platform concepts"
    },
    // Soft & Business Skills
    {
      name: "Communication",
      category: "soft",
      level: "Advanced",
      description: "Clear verbal and written communication of technical data to non-technical stakeholders"
    },
    {
      name: "Teamwork & Collaboration",
      category: "soft",
      level: "Advanced",
      description: "Collaborated on group presentations and university event organization"
    },
    {
      name: "Marketing",
      category: "soft",
      level: "Intermediate",
      description: "Consumer insights, campaign metrics, brand positioning, market research"
    },
    {
      name: "Time Management & Adaptability",
      category: "soft",
      level: "Advanced",
      description: "Balancing demanding university coursework, project deliverables, and new technical skills"
    }
  ],
  projects: [
    {
      id: "sales-dashboard",
      title: "Sales Data Analytics Dashboard",
      category: "Data Analysis & Excel",
      description: "An interactive, multi-dimensional sales performance dashboard created using Microsoft Excel to uncover transaction patterns and revenue trends.",
      technologies: ["Microsoft Excel", "Pivot Tables", "Data Visualization", "Sales KPIs"],
      highlights: [
        "Cleaned and preprocessed raw sales transaction records to remove anomalies and duplicates.",
        "Built dynamic Pivot Tables and connected slicers for interactive multi-regional filtering.",
        "Designed clear KPI cards and visual trend charts to communicate monthly sales performance."
      ],
      demoUrl: "",
      githubUrl: "",
      isPlaceholder: false
    },
    {
      id: "python-eda",
      title: "Exploratory Data Analysis Practice",
      category: "Python & Data Science",
      description: "A comprehensive data analysis workflow implemented in Python to examine distributions, clean real-world data, and generate visual insights.",
      technologies: ["Python", "Pandas", "Matplotlib", "Data Cleaning"],
      highlights: [
        "Utilized Pandas for data wrangling, missing value handling, and categorical data encoding.",
        "Visualized correlation matrices, histograms, and trend trajectories using Matplotlib.",
        "Documented key business findings into structured analytical summaries."
      ],
      demoUrl: "",
      githubUrl: "",
      isPlaceholder: false
    },
    {
      id: "ml-predictive-model",
      title: "Predictive Analytics & Machine Learning Model",
      category: "Machine Learning (Academic)",
      description: "Supervised machine learning project analyzing business indicators to classify customer segments and forecast outcome likelihoods.",
      technologies: ["Python", "Scikit-Learn", "Machine Learning", "Feature Engineering"],
      highlights: [
        "Engineered relevant features from raw business attributes for algorithmic modeling.",
        "Evaluated model performance using classification metrics (accuracy, precision, recall).",
        "Designed as an extensible academic framework for real-world enterprise forecasting."
      ],
      demoUrl: "",
      githubUrl: "",
      isPlaceholder: true
    },
    {
      id: "sql-oracle-database",
      title: "Relational Database Design & SQL Querying",
      category: "Databases & SQL",
      description: "Relational database schema modeling and analytical query pipeline for enterprise business operations built with SQL and Oracle.",
      technologies: ["SQL", "Oracle Database", "Relational Modeling", "Business Intelligence"],
      highlights: [
        "Structured normalized database tables (1NF to 3NF) with primary and foreign key constraints.",
        "Authored complex SQL queries utilizing aggregate functions, window functions, and nested joins.",
        "Generated automated summary reports to answer key operational business questions."
      ],
      demoUrl: "",
      githubUrl: "",
      isPlaceholder: false
    }
  ],
  experience: [
    {
      role: "Academic Project & Presentation Collaborator",
      organization: "COMSATS University Islamabad",
      period: "2024 – Present",
      points: [
        "Collaborated in student teams to conduct in-depth data research and deliver polished executive slide presentations.",
        "Assisted in structuring complex analytical findings into digestible visual narratives for faculty and peers."
      ]
    },
    {
      role: "Event Organizing Volunteer",
      organization: "University & Departmental Events",
      period: "2024 – Present",
      points: [
        "Helped coordinate student logistics, schedule alignment, and attendee registration for departmental activities.",
        "Demonstrated strong adaptability and prompt communication in dynamic team environments."
      ]
    }
  ]
};

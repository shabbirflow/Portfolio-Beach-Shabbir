export const stuff = {
  title: "Shabbir Kaderi",
  aboutCodeLines: [
    "software engineer passionate about algorithms",
    "building full-stack apps and scalable infrastructure",
    "focused on clean code and reliable CI/CD pipelines",
    "always exploring new tech and trying to innovate",
  ],
  cvURL:
    "https://drive.google.com/drive/folders/1TUOf5S2SefMvBxPV2rKieBegMnaTGJCL?usp=sharing",
  email: "kaderishabbir@gmail.com",
  location: "Pune, Maharashtra, India",
  phone: "+91 7057952529",

  // "Software engineer skilled in DSA, front-end development, and DevOps. .",
};

export const pages = [
  { name: "Home" },
  { name: "Experience" },
  { name: "Projects" },
  { name: "Skills" },
  { name: "Contact" },
];

export const projects = [
  {
    title: "Sleddit",
    image: "sleddit.png",
    githubURL: "https://github.com/shabbirflow/Sleddit",
    liveURL: "https://sleddit-flame.vercel.app/",
    description:
      "A full-stack Reddit clone built with Next.js, TypeScript, and MySQL. Features an intuitive UI, secure authentication, and real-time database interactions.",
  },
  {
    title: "Blockchain Voting System",
    image: "bcvoting.png",
    githubURL: "https://github.com/shabbirflow/Blockchain-Voting",
    liveURL: "https://github.com/shabbirflow/Blockchain-Voting",
    description:
      "A decentralized voting application built on Ethereum. Manages voter and candidate registration while securing votes on the blockchain, ensuring transparency and preventing double-voting.",
  },
  {
    title: "SwiftServe",
    image: "swiftserve.png",
    githubURL: "https://github.com/shabbirflow/SwiftServe",
    liveURL: "https://youtu.be/B2qUnOyspUQp",
    description:
      "A containerized deployment platform for JavaScript and TypeScript apps initially hosted on GKE. Utilizes a microservice architecture and Redis queues for asynchronous, non-blocking deployments.",
  },
  {
    title: "Sorting Visualizer",
    image: "sort.png",
    githubURL: "https://github.com/shabbirflow/Sorting-Visualizer",
    liveURL: "https://sort-visualize.netlify.app/",
    description:
      "An interactive educational tool built with React and Chart.js. Dynamically visualizes the step-by-step execution of classic sorting algorithms to demonstrate their time complexity and performance differences.",
  },
];

export const experienceTimeLine = [
  {
    title: "Graduate Trainee @ TIAA (current)",
    // desc: "Worked on ELK & CI/CD",
    time: "July 2025 - Present",
    type: "work",
  },
  {
    title: "Summer Intern @ Barclays",
    desc: "Automated Jenkins pipelines and environment configs",
    time: "June 2024 - July 2024",
    type: "work",
  },
  {
    title: "DevOps Intern @ Rhythmflows Solutions",
    desc: "Built Jenkins CI/CD workflows and Dockerized apps",
    time: "Jan 2024 - April 2024",
    type: "work",
  },
  {
    title: "DevOps Intern @ LightBeam.ai",
    desc: "Set up Prometheus monitoring and Kubernetes logging",
    time: "June 2023 - July 2023",
    type: "work",
  },
  {
    title: "Pune Institute of Computer Technology",
    desc: "B.E. in Electronics & Telecommunication Eng.",
    time: "2021 - 2025",
    type: "education",
    grade: "8.1 CGPA",
  },
];

export const experience = [
  {
    title: "Graduate Trainee",
    company: "TIAA",
    time: "July 2025 - Current",
    descBullets: [
      "Developed client-facing demo applications using Java, Spring Boot, and Angular to simulate retirement and investment workflows for stakeholder demonstrations.",
      "Built mock backend services with Redis and ElastiCache to decouple demos from production data, enabling stable and concurrent sales presentations."
    ],
    image: "tiaa_logo.svg",
  },
  {
    title: "Technology Summer Intern",
    company: "Barclays",
    time: "June 2024 - July 2024",
    descBullets: [
      "Designed Jenkins CI/CD pipelines with file-diff-driven triggers to execute jobs only on specific merge events, reducing unnecessary pipeline runs.",
      "Automated environment-specific configurations across Dev, SIT, NFT, and PROD to minimize configuration drift and deployment errors.",
    ],
    image: "barclays.png",
  },
  {
    title: "DevOps Intern",
    company: "RhythmFlows Solutions",
    time: "Jan 2024 - April 2024",
    descBullets: [
      "Created standardized Docker images for Angular frontends and Django REST APIs, ensuring consistent builds across local and production environments.",
      "Automated build and deployment stages using Jenkins CI/CD pipelines, reducing manual intervention and improving release reliability.",
    ],
    image: "rhythmflows.jpeg",
  },
  {
    title: "DevOps Intern",
    company: "LightBeam.ai",
    time: "June 2023 - July 2023",
    descBullets: [
      "Integrated Prometheus and Alertmanager with Slack notifications to improve system health visibility and accelerate issue detection.",
      "Centralized Kubernetes event logging using Elasticsearch and Kubernetes Events Exporter for unified observability and cluster debugging.",
    ],
    image: "lightbeam.png",
  },
];

export const techSkills = {
  languages: ["CPP", "JAVA", "JAVASCRIPT", "Python"],
  frontend: ["HTML", "CSS", "REACT", "redux", "tailwind"],
  backend: ["express", "mongodb", "mysql", "nodejs"],
  devOps: ["Docker", "Kubernetes", "Linux", "git", "jenkins"],
};

export const socialLinks = [
  { title: "github", link: "https://github.com/shabbirflow" },
  {
    title: "geeksforgeeks",
    link: "https://auth.geeksforgeeks.org/user/kadercode",
  },
  { title: "leetcode", link: "https://leetcode.com/kaderishabbir/" },
  { title: "linkedin", link: "https://www.linkedin.com/in/kaderishabbir/" },
  {
    title: "spotify",
    link: "https://open.spotify.com/user/hkw3hf97191gukdvft49gq328?si=b923c599d2d34db0",
  },

  // email: "kaderishabbir@gmail.com",
];

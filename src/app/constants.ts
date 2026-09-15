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
    liveURL: "https://youtu.be/B2qUnOyspUQ",
    description:
      "A Vercel-style deployment platform for React/TypeScript sites: 3 independently scalable services on GKE, Redis build queues, and a reverse proxy that serves every deployment on its own subdomain.",
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
    title: "Software Engineer @ TIAA (current)",
    // desc: "Worked on ELK & CI/CD",
    time: "July 2025 - Present",
    type: "work",
  },
  {
    title: "Technology Summer Intern @ Barclays",
    desc: "Automated Jenkins pipelines and environment configs",
    time: "June 2024 - July 2024",
    type: "work",
  },
  {
    title: "Software Engineer Intern @ Rhythmflows Solutions",
    desc: "Built Jenkins CI/CD workflows and Dockerized apps",
    time: "Jan 2024 - April 2024",
    type: "work",
  },
  {
    title: "Software Developer Intern @ LightBeam.ai",
    desc: "Set up Prometheus monitoring and Kubernetes logging",
    time: "June 2023 - July 2023",
    type: "work",
  },
  {
    title: "Pune Institute of Computer Technology",
    desc: "B.E. in Electronics & Telecommunication Eng.",
    time: "2021 - 2025",
    type: "education",
    grade: "8.45 CGPA",
  },
];

export const experience = [
  {
    title: "Software Engineer",
    company: "TIAA",
    time: "July 2025 - Current",
    descBullets: [
      "Work on a service-virtualization platform running 25+ TIAA retirement apps end to end for 60+ client demos.",
      "Designed and built REST controllers and services in Java 17 / Spring Boot microservices (API gateway, service-virtualization API) for request routing, URL rewriting, OAuth token issuance, and session handling.",
      "Sole engineer on 3 app integrations (fund transfers, contributions, investment exchange), extending a Redis data layer of 1,000+ responses across 11 personas and building allocation charts with error fallbacks.",
      "Owned production support for 3 AWS EC2 Linux servers: root-caused an outage the team was stuck on for days (saving a full re-integration) and fixed Redis connection failures, HTTP 500s, and expired TLS certificates.",
      "Drive the technical build of interactive product tours for TIAA's retirement & investment suites, turning Figma designs into HTML/CSS/JavaScript and creating the team's reusable templates and build guide.",
    ],
    image: "tiaa_logo.svg",
  },
  {
    title: "Technology Summer Intern",
    company: "Barclays",
    time: "June 2024 - July 2024",
    descBullets: [
      "Built change-aware Jenkins CI/CD pipelines that diff each merge and run only the jobs for modules that changed, replacing full pipeline runs on every merge and speeding up CI feedback.",
      "Automated environment-specific configuration across Dev, SIT, NFT, and PROD with shell scripts, removing manual config edits and a common source of deployment errors in enterprise releases.",
    ],
    image: "barclays.png",
  },
  {
    title: "Software Engineer Intern",
    company: "RhythmFlows Solutions",
    time: "Jan 2024 - April 2024",
    descBullets: [
      "Designed and built the startup's first CI/CD pipeline in Jenkins with the tech lead (code quality, build, test, deploy, verify), replacing manual deployments and cutting manual release steps by 80%.",
      "Dockerized Angular frontends and Django REST APIs, so development and production ran identical builds.",
    ],
    image: "rhythmflows.jpeg",
  },
  {
    title: "Software Developer Intern",
    company: "LightBeam.ai",
    time: "June 2023 - July 2023",
    descBullets: [
      "Integrated Prometheus Alertmanager into the Kubernetes monitoring stack, routing alerts for crash-looping and failed pods to Slack and email so failures surfaced in real time.",
      "Centralized Kubernetes events in Elasticsearch with Kubernetes Events Exporter, keeping event history past Kubernetes' default 1-hour retention and cutting cluster-debugging time by 40%.",
    ],
    image: "lightbeam.png",
  },
];

export const techSkills = {
  languages: ["JAVA", "CPP", "JAVASCRIPT", "TYPESCRIPT", "Python"],
  frontend: ["REACT", "redux", "tailwind"],
  backend: ["nodejs", "express", "mysql", "mongodb"],
  devOps: ["Docker", "Kubernetes", "jenkins", "Linux", "git"],
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

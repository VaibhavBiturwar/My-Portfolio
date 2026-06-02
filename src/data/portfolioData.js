// Portfolio data based on resume and LinkedIn profile
export const portfolioData = {
  personal: {
    name: "Vaibhav Biturwar",
    title: "React Native Developer",
    email: "vaibhavbiturwar@gmail.com",
    phone: "+91-7000839146",
    linkedin: "https://www.linkedin.com/in/vaibhav-biturwar/",
    github: "https://github.com/VaibhavBiturwar",
    portfolio: "https://vaibhavbiturwar.github.io/My-Portfolio/",
    summary:
      "Senior Software Engineer with 5+ years building scalable React Native and React applications across FinTech, AI, and social platforms. Delivered production apps including an open-source Bitcoin wallet, an AI-powered sports platform, and a geospatial social media app. Strong focus on performance, security, and clean architecture, from development to CI/CD and releases.",
  },
  experience: [
    {
      title: "Senior Software Engineer",
      company: "CakeSoft Technologies Pvt. Ltd.",
      location: "Pune, M.H.",
      period: "08/2024 - Present",
      description: [
        "Contributing to the development of an open-source Bitcoin wallet (Bitcoin Keeper) with a strong focus on mobile functionality using React Native",
        "Implemented core features including Zendesk Concierge for In-app support, Remote Transaction Signing and more",
        "Built core Bitcoin wallet features (crypto swaps, hardware signer support, remote signing), improving transaction usability and security for end users, by integrating third-party exchange APIs and secure signing flows",
        "Led mobile app deployment and backend, collaborated on releases, ensuring seamless production rollouts, by aligning CI/CD and release processes",
        "Enhanced app performance and responsiveness, reducing latency in transaction flows, by optimizing state management and API interactions",
        "Implemented Zendesk Concierge integration, improving in-app support accessibility, by embedding real-time customer support workflows",
      ],
    },
    {
      title: "React Native Developer",
      company: "Valere Labs. Pvt. Ltd.",
      location: "Pune, M.H.",
      period: "06/2022 - 08/2024",
      description: [
        "Developed and maintained high-performance mobile applications using React Native for both iOS and Android platforms",
        "Focused on scalability, UI/UX, and third-party integrations",
        "Collaborated with backend teams to develop and integrate RESTful APIs",
        "Optimized app performance and implemented efficient state management solutions using TypeScript and React Native",
      ],
    },
    {
      title: "Assistant System Engineer",
      company: "Tata Consultancy Services",
      location: "Pune, M.H.",
      period: "11/2020 - 05/2022",
      description: [
        "Developed and maintained enterprise-level applications",
        "Participated in full software development lifecycle",
        "Collaborated with team members to deliver projects on time",
        "Gained experience in large-scale software development practices",
      ],
    },
  ],
  skills: {
    frontend: [
      "React",
      "React Native",
      "JavaScript",
      "TypeScript",
      "Redux",
      "Zustand",
      "React Navigation",
      "Redux-Saga",
      "React Hooks",
    ],
    backend: ["NodeJs", "Express", "RESTful APIs", "API Development"],
    database: ["MongoDB", "MySql", "RealmDB", "Firebase"],
    mobile: [
      "iOS Development",
      "Android Development",
      "Push Notifications",
      "FastLane CI/CD",
      "App Store Deployment",
    ],
    tools: ["Git", "GitHub", "Github Actions", "Figma", "Photoshop", "VS Code"],
    other: [
      "NFC Integration",
      "Hardware Wallet Integration",
      "Video Processing",
      "Image Caching",
      "Performance Optimization",
    ],
  },
  projects: [
    {
      id: 0,
      name: "Orbis1 – RGB Asset Infrastructure & Merchant Platform",
      platform: "Android & iOS",
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Tanstack-Query",
        "Web Push Notifications",
        "Web Workers",
        "CI/CD",
        "Github Actions",
      ],
      description:
        "Worked on two core components of the Orbis1 ecosystem focused on enabling scalable and user-friendly RGB asset transactions on Bitcoin: Orbis1 Accounts (MERN Stack) & Watchtower Service (Rust)",
      achievements: [
        "Developed a merchant-facing web platform to enable acceptance of RGB-based USDT payments (in progress).",
        "Built frontend using React and backend using Node.js with MongoDB.",
        "Designed to provide merchants with a simple interface for managing payments and accounts.",
        "Built a standalone watchtower service in Rust to perform client-side validation for RGB asset transfers.",
        "Eliminates the requirement for receivers to remain online during asset transfers by validating transactions asynchronously on their behalf.",
        "Improved reliability and usability of RGB-based transfers by handling validation off-device.",
      ],
      links: [
        {
          text: "View Website",
          url: "https://accounts.orbis1.io/",
          type: "primary",
        },
      ],
    },
    {
      id: 1,
      name: "Bitcoin Keeper",
      platform: "Android & iOS",
      skills: [
        "Bitcoin",
        "React-Native",
        "NodeJS",
        "Redux-Saga",
        "RealmDB",
        "Push Notifications",
        "NFC",
        "FastLane CI/CD",
      ],
      description:
        "Bitcoin Keeper is a self-custodial wallet focused on empowering users with secure and intuitive Bitcoin management. It's a self-custody Bitcoin wallet with collaborative recovery features, built on Bitcoin ethos, industrial standards, and cutting-edge UX.",
      achievements: [
        "Built encrypted cloud backup/restore and multi-user support for enhanced accessibility and security.",
        "Integrated hardware wallet support (TwentyTwo Portal, Krux, Coldcard Q) with remote key sharing and message signing.",
        "Developed concierge service integration and Bitcoin-based subscription features.",
        "Enabled crypto swaps functionality via LetsExchange integration.",
        "Managed app releases and developed APIs with backend service deployment.",
        "Implemented collaborative recovery features for secure key management.",
        "Handled react native version upgrades",
      ],
      links: [
        {
          text: "View Website",
          url: "https://bitcoinkeeper.app",
          type: "primary",
        },
      ],
    },
    {
      id: 2,
      name: "AthesAI",
      platform: "Android & iOS",
      skills: [
        "React Navigation",
        "Zustand",
        "Push Notifications",
        "React Native FFMPEG",
        "SSE",
        "React Native FS",
        "MixPanel",
      ],
      description:
        "This app delivers curated sports and skills-based videos to athletes and an AI-powered chatbot that offers personalized assistance and insights tailored to individual sports interests.",
      achievements: [
        "Implemented SSO login for seamless authentication.",
        "Enhanced performance with image and video caching",
        "Optimized video upload speeds to achieve 60% of Instagram's performance benchmark.",
        "Integrated mixPanel for user activity tracking",
        "Integrated AI chatbot using SSE.",
        "Developed an Instagram-inspired video tile layout.",
      ],
      links: [
        {
          text: "View on App Store",
          url: "https://apps.apple.com/in/app/athesai/id6451111993",
          type: "primary",
        },
      ],
    },
    {
      id: 3,
      name: "HypeX",
      platform: "iOS",
      skills: [
        "React Navigation",
        "Redux",
        "Thunk",
        "Apple Maps",
        "React Native Vision Camera",
      ],
      description:
        "A social media application, reminiscent of Instagram, encompasses the following key features:",
      achievements: [
        "The app boasts a geospatial mapping feature that empowers users to explore posts from designated geographic regions, utilizing immersive 3D iOS maps for an enriched experience.",
        "Users can indulge in a full-screen video reels view, providing an immersive and captivating way to engage with multimedia content.",
        "The application incorporates a robust Firebase authentication workflow, ensuring secure and efficient user registration and login processes.",
      ],
      links: [
        {
          text: "View on App Store",
          url: "https://apps.apple.com/in/app/hype-x/id1640549458",
          type: "primary",
        },
      ],
    },
    {
      id: 4,
      name: "FastGate System",
      platform: "Desktop & Android",
      skills: ["Python", "OpenCV", "MySQL", "Fast2SMS API", "Firebase"],
      description:
        "A Parking system that constitutes an Android application and a desktop application that communicates with each other using Google's Firebase(NoSQL) database. The desktop application captures the vehicle license plate number with the aid of the CCTV camera and sends a notification to the android application informing about the vehicle. This system can be implemented to increase security in society premises.",
      links: [
        {
          text: "View Android App",
          url: "https://github.com/VaibhavBiturwar/FastGate-App",
          type: "primary",
        },
        {
          text: "View Desktop App",
          url: "https://github.com/VaibhavBiturwar/Auto-Gate-Online",
          type: "secondary",
        },
      ],
      video: "https://www.youtube.com/embed/hQdBhI3XqTs",
    },
    {
      id: 5,
      name: "BMI Calculator App",
      platform: "Android",
      skills: ["Flutter", "Dart", "Android Development"],
      description:
        "A simple application that takes gender, age, height, and weight as input to calculate Body Mass Index(BMI) and suggest a workout schedule to maintain the BMI if it exceeds the normal range.",
      links: [
        {
          text: "View on Play Store",
          url: "https://play.google.com/store/apps/details?id=com.camen.bmicalculator",
          type: "primary",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Employee of the Quarter",
      description: "Received employee of the quarter award for Q3 2022-2023.",
      company: "Valere Labs",
      period: "Q3 2022-2023",
    },
    {
      title: "Magic Moments Award",
      description:
        "For exceptional delivery of the HypeX app. Available on Apple app store.",
      company: "Valere Labs",
      period: "2023",
    },
  ],
  recommendations: [
    {
      name: "Niket Jadhav",
      title: "SDE | Backend developer | Node.js | DevOps | TypeScript",
      date: "August 3, 2024",
      relationship: "Worked together",
      text: "Vaibhav is an exceptional React Native developer with strong technical skills and a collaborative approach. His expertise in mobile app development and dedication to delivering high-quality solutions makes him a valuable team member.",
    },
    {
      name: "Ritesh Patil",
      title: "Senior Data Scientist | Generative AI | MLOps | Agents",
      date: "August 22, 2024",
      relationship: "Worked together",
      text: "Vaibhav demonstrates excellent problem-solving abilities and technical proficiency in React Native development. His attention to detail and commitment to excellence contribute significantly to project success.",
    },
  ],
  education: [
    {
      degree: "BTech",
      field: "Computer Science Engineering",
      year: "2020",
      percentage: "75.57%",
      institution:
        "Shri Shankaracharya Institute of Professional Management & Technology, Raipur",
    },
    {
      degree: "12TH",
      board: "CBSE",
      year: "2016",
      percentage: "79.87%",
      institution: "SRI CHAITANYA VIDHYA NIKETAN, VIZAG",
    },
  ],
  certifications: [
    {
      title: "The Complete React Native in 2022: Zero to Mastery(with Hooks)",
      instructor: "Andrei Neagole, Mo Binni",
      platform: "Udemy",
      image: "/images/cert/rn.jpg",
    },
    {
      title: "The Complete 2021 Flutter Development Bootcamp with Dart",
      instructor: "Dr. Algela Yu",
      platform: "Udemy",
      image: "/images/cert/fllutter.jpg",
    },
    {
      title: "The Complete Android Kotlin Developer Course",
      instructor: "Dr. Hussein Alrubaye",
      platform: "Udemy",
      image: "/images/cert/kotlin.jpg",
    },
    {
      title: "The Complete Web Developer Course 2.0",
      instructor: "Rob Percival",
      platform: "Udemy",
      image: "/images/cert/web.jpg",
    },
    {
      title: "Training in Core Java(J2SE)",
      instructor: "Mr. Abhijeet Ramani",
      platform: "Feasible Research & Technologies Private Limited",
      image: "/images/cert/feasible/java.jpg",
    },
    {
      title: "Training in C++",
      instructor: "Mr. Abhijeet Ramani",
      platform: "Feasible Research & Technologies Private Limited",
      image: "/images/cert/feasible/cpp.jpg",
    },
    {
      title: "Training in C Language",
      instructor: "Mr. Abhijeet Ramani",
      platform: "Feasible Research & Technologies Private Limited",
      image: "/images/cert/feasible/c.jpg",
    },
    {
      title: "HTML Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/html.jpg",
    },
    {
      title: "CSS Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/css.jpg",
    },
    {
      title: "Javascript Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/js.jpg",
    },
    {
      title: "jQuery Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/jquery.jpg",
    },
    {
      title: "MySQL Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/mysql.jpg",
    },
    {
      title: "PHP Level 1",
      instructor: "Rob Percival",
      platform: "Cambridge Certification Authority",
      image: "/images/cert/webdev/php.jpg",
    },
    {
      title: "Krack D Code",
      coordinator: "Prof. Tansen Patel",
      platform: "SSIPMT, Raipur",
      image: "/images/cert/misc/krackdcode.jpg",
    },
    {
      title: "Data Science Workshop",
      coordinator:
        "Dr. Pavan Kumar Mishra, Dr. Saikat Majumdar, Dr. Rakesh Tripathi",
      platform: "NIT, Raipur",
      image: "/images/cert/misc/datascience.jpg",
    },
    {
      title: "Extempore Competetion",
      coordinator: "Mrs. Aparna Mukherjee",
      platform: "SSIPMT, Raipur",
      image: "/images/cert/misc/extempore.jpg",
    },
  ],
  social: {
    linkedin: "https://in.linkedin.com/in/vaibhav-biturwar-b97b3a169",
    github: "https://github.com/VaibhavBiturwar",
    twitter: "https://x.com/vaibhavbiturwar",
    email: "vaibhavbiturwar@gmail.com",
  },
};

export const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      category: "Backend & DevOps",
      items: ["Node.js", "Express.js", "Docker", "AWS (S3, ECR, ECS)", "JWT", "REST APIs"],
    },
    {
      category: "Databases & ORM",
      items: ["MongoDB", "PostgreSQL", "Prisma"],
    },
    {
      category: "Tools & Practices",
      items: ["Git", "Postman", "Shadcn", "VS Code"],
    },
  ];


  export const projectsData = [
    {
      id: 1,
      name: "Vercel Clone",
      description:
        "Built a Vercel-like deployment platform with GitHub integration, Docker-based builds, and static hosting via AWS S3. Used AWS ECS/ECR to run isolated containerized builds and serve outputs through a secure reverse proxy setup.",
      githubLink: "https://github.com/niks-nikhil-anand/vercel-clone",
      techStack: ["Node.js", "Express.js", "Docker", "AWS ECS", "AWS S3", "AWS ECR"],
    },
    {
      id: 2,
      name: "LiveDocs | Real-Time Collaboration Tool",
      description:
        "Developed a scalable, real-time collaborative document editor using Next.js and Liveblocks, supporting simultaneous editing, live commenting, and real-time reactions for seamless teamwork.",
      githubLink: "https://github.com/niks-nikhil-anand/LiveDocs",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Liveblocks"],
    },
  ];
  

  export const freelanceProjectsData = [
    {
      id: 1,
      name: "Cleanveda | E-commerce Website with Admin Panel",
      description:
        "Developed a complete e-commerce platform using Next.js and MongoDB with features like cookie-based authentication, dynamic cart system, category-wise product filtering, a custom CMS for content management, and secure payments integrated with Razorpay.",
      githubLink: "https://github.com/niks-nikhil-anand/Ecommerce_blushbelle",
      liveLink: "https://www.cleanveda.com/",
      techStack: ["React", "Next.js", "Shadcn", "Tailwind CSS", "MongoDB"],
    },
    {
      id: 2,
      name: "FlyingAlpha | Hotel Booking Platform",
      description:
        "Built a full-stack hotel booking system using Next.js and MongoDB featuring JWT authentication, dynamic booking and user management, a detailed admin dashboard (earnings, statistics), secure payment integration with Razorpay, and email notifications using Resend API.",
      githubLink: "https://github.com/flyingalphahotel-2025/FlyingAlpha_hotel",
      liveLink: "https://www.flyingalpha.in/",
      techStack: ["Next.js", "MongoDB", "Shadcn", "Tailwind CSS"],
    },
  ];
  
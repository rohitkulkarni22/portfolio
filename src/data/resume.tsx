import { Icons } from "@/components/icons";
import { Code, CodeIcon, HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rohit Kulkarni",
  initials: "RK",
  url: "https://dumbbelldoor.netlify.app/",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Software Engineer based out of Pune, India. Experienced in Full stack development. I love building things and I'm always open for new opportunities.",
  summary:
    "I'm currently working as a freelance developer. In my previous organization, I worked as a Full Stack Developer and interned at a fast-paced startup. I pursued a bachelor's degree in Computer Engineering and have a wide range of skills in my tech stack arsenal, including both development and design.",
  avatarUrl: "/rohit.jpg",
  skills: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Javascript",
    "UI/UX",
    "Figma",
    "React",
    "Redux",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Docker",
    "MySQL",
    "Java",
    "Git",
    "AWS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#projects", icon: CodeIcon, label: "Projects"},
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "rohit22codes@gmail.com",
    tel: "+91",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rohitkulkarni22",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rohit-kulkarni-4941a2181/",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Rohitkulkarni50",
        icon: Icons.x,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:rohit22codes@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      Resume: {
        name: "Download Resume",
        url: "https://drive.google.com/file/d/1InNoyZ0bmNxJW3pDkm8PfJQUrZ1Cacav/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "TalkValley",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/startup.png",
      start: "April 2024",
      end: "June 2024",
      description: 
        `As a Full stack developer at TalkValley Edtech, I contributed to many projects, my work includes:
          • Backend Design: Architected and implemented the entire backend system for a news aggregator platform.
          • Feature Development: Developed and integrated blog listing functionality for MadAi lab’s website.
          • Proctoring Dashboard: Developed a proctoring dashboard for Mentor Students.org Portal, integrating role-based access control and managing mentor and student profiles. 
          • Added features like user profile management and an anti-cheat proctoring service to ensure fair hiring processes.`,
    },
    {
      company: "OpenGenus Foundation",
      badges: [],
      href: "https://iq.opengenus.org/author/rohit-kulkarni/",
      location: "Remote",
      title: "Software Engineer Intern",
      logoUrl: "/opengenus.jpeg",
      start: "December 2023",
      end: "February 2023",
      description:
        "Contributions: Authored technical articles and blogs, sharing insights on software development and open-source software",
    },
    {
      company: "Powerstrip.io",
      badges: [],
      href: "",
      location: "Remote",
      title: "Frontend Developer Intern",
      logoUrl: "/powerstrip.png",
      start: "August 2023",
      end: "December 2023",
      description:
        `Being a Frontend developer intern I was assigned tasks related to designing UIs and converting it into working react code:
         • Contributed in building the landing page of the Powerstrip platform. 
         • Created and implemented user interfaces focusing on usability and responsiveness.`,
    },
  ],
  education: [
    {
      school: "100xDevs",
      href: "https://app.100xdevs.com/certificate/verify/4ZABJSWF",
      degree: "Full Stack + DevOps",
      logoUrl: "/100xdevs.jpg",
      start: "December 2024",
      end: "June 2024",
    },
    {
      school: "Pesto Tech",
      href: "https://drive.google.com/file/d/1deS-DB9vpicoYLx5qc4g8XUk3cXzY3Jn/view?usp=sharing",
      degree: "Pesto Plus Fellowship - Full Stack Development & Product Engineering",
      logoUrl: "/pesto.png",
      start: "May 2023",
      end: "May 2024",
    },
    {
      school: "JSPM's Imperial College of Engineering & Research - SPPU",
      href: "https://jspmuni.ac.in/",
      degree: "Bachelor's Degree of Computer Engineering",
      logoUrl: "/university.png",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "Dumbbelldoor",
      href: "https://dumbbelldoor.netlify.app/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "DumbbellDoor introduces a pioneering platform facilitating personalized fitness experiences directly to user's homes. By linking individuals with certified trainers, the service offers customized workout sessions tailored to specific needs and goals.",
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "ExpressJS",
        "TailwindCSS",
        "Razorpay API",
        "Material UI",
        "Github Actions",
        "Cloudinary",
        "Render.io",
      ],
      links: [
        {
          type: "Website",
          href: "https://dumbbelldoor.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/shikherjaitly/dumbbellDoor-frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/dumbbelldoor.png",
      video:
        "",
    },
    {
      title: "Splitwise Backend clone",
      href: "https://github.com/rohitkulkarni22/Splitwise-backend-clone",
      dates: "Oct 2023 - Nov 2023",
      active: true,
      description:
        "API Development: Designed and implemented API endpoints to replicate the functionality of Splitwise, enabling users to manage and share expenses seamlessly.",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "RESTful APIs",
        "Razorpay API",
        "JWT Auth",
        "Render.io",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/rohitkulkarni22/Splitwise-backend-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/splitwise-clone.png",
      video: "",
    },
  ],
} as const;

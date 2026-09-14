export const profile = {
  name: "Ahmad Kurniawan",
  role: "Full-Stack Developer",
  location: "Lampung, Indonesia",
  education: "Informatics Engineering at IBI Darmajaya",
  github: "ahkurdev",
  githubUrl: "https://github.com/ahkurdev",
  email: "ah.kurniawan27@gmail.com",
  discord: "allan4u",
  instagram: "hmd.alnk",
  instagramUrl: "https://www.instagram.com/hmd.alnk/",
  linkedin: "https://www.linkedin.com/in/ahmad-kurniawan-0a6b42347/",
} as const;

export const socials = [
  { name: "GitHub", label: profile.github, href: profile.githubUrl },
  {
    name: "Instagram",
    label: profile.instagram,
    href: profile.instagramUrl,
  },
  { name: "LinkedIn", label: "Ahmad Kurniawan", href: profile.linkedin },
] as const;

export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
  technologies: string[];
  href: string;
  linkLabel: string;
  note?: string;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Pekon Sinar Mulyo",
    category: "WEB / PUBLIC INFORMATION",
    summary: "A place for a village to tell its story.",
    detail:
      "A public profile platform bringing Pekon information, government pages, news, a gallery, demographics, and local potential into one website.",
    technologies: ["Village profile", "Public information", "Content platform"],
    href: "https://sinarmulyo.com",
    linkLabel: "Visit live site",
    note: "Live website. Some published content is marked as examples pending confirmation.",
  },
  {
    id: "02",
    title: "Hikalist",
    category: "DESKTOP / MUSIC",
    summary: "Music, with a home on your desktop.",
    detail:
      "A standalone Windows music player with streaming, synchronized lyrics, offline downloads, and collaborative playlists. Local SQLite storage and Supabase sync keep playlist changes moving when connectivity returns.",
    technologies: ["Kotlin", "Compose Desktop", "SQLite", "Supabase", "FFmpeg"],
    href: "https://github.com/ahkurdev/Hikalist",
    linkLabel: "View repository",
  },
  {
    id: "03",
    title: "Caloris",
    category: "MOBILE / HEALTH TRACKING",
    summary: "Everyday tracking. Thoughtful architecture.",
    detail:
      "Food, water, weight, activity, and reminders in a Flutter app. Riverpod separates interface and data logic; a per-user SQLite cache and mutation outbox support offline food diaries. Food-photo estimates stay editable before confirmation.",
    technologies: ["Flutter", "Riverpod", "Supabase", "PostgreSQL", "SQLite"],
    href: "https://github.com/ahkurdev/Calories",
    linkLabel: "View repository",
  },
  {
    id: "04",
    title: "TaskFlow",
    category: "WEB / REAL-TIME SYSTEMS",
    summary: "A Kanban board with a Go backend.",
    detail:
      "Boards, lists, and draggable cards backed by ownership-scoped APIs, transactional reordering, and WebSocket updates across open clients.",
    technologies: ["Go", "React", "TypeScript", "PostgreSQL", "WebSocket"],
    href: "https://github.com/ahkurdev/TaskFlow",
    linkLabel: "View repository",
  },
];

export const stack = [
  {
    category: "Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "Python",
      "Java",
      "C",
      "C++",
      "Lua",
      "Dart",
    ],
  },
  {
    category: "Frameworks & Runtime",
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Vite",
      "PHP",
      "REST API",
      "Node.js",
      "Flutter",
    ],
  },
  {
    category: "Data & Cloud",
    items: [
      "MySQL",
      "MariaDB",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
      "Firebase",
      "Pandas",
    ],
  },
  {
    category: "Security & Scripting",
    items: ["Scapy", "Requests", "BeautifulSoup", "Paramiko", "PyInstaller"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "GitLab", "VS Code", "Postman", "Linux", "Docker"],
  },
];
export const capabilities = [
  {
    title: "Interface engineering",
    description:
      "Responsive web interfaces built with React, Next.js, and TypeScript. Clear interaction states and maintainable components.",
  },
  {
    title: "Backend & data",
    description:
      "REST APIs, authentication, and relational data. Boundaries between application logic, storage, and external services.",
  },
  {
    title: "Mobile & desktop",
    description:
      "Flutter applications and Kotlin desktop software, with local persistence, synchronization, and platform integration.",
  },
  {
    title: "Automation & tooling",
    description:
      "Python scripts for repeatable tasks, network tooling, and security research workflows.",
  },
];

import {
  Code2,
  Coffee,
  Network,
  Globe,
  FileCode,
  LockKeyhole,
  Package,
  Braces,
} from "lucide-react";
import {
  siJavascript,
  siTypescript,
  siKotlin,
  siPython,
  siC,
  siCplusplus,
  siLua,
  siDart,
  siReact,
  siNextdotjs,
  siHtml5,
  siCss,
  siTailwindcss,
  siBootstrap,
  siVite,
  siPhp,
  siNodedotjs,
  siFlutter,
  siMysql,
  siMariadb,
  siMongodb,
  siPostgresql,
  siSupabase,
  siFirebase,
  siPandas,
  siGit,
  siGithub,
  siGitlab,
  siPostman,
  siLinux,
  siDocker,
  type SimpleIcon,
} from "simple-icons";
const brands: Record<string, SimpleIcon> = {
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Kotlin: siKotlin,
  Python: siPython,
  C: siC,
  "C++": siCplusplus,
  Lua: siLua,
  Dart: siDart,
  React: siReact,
  "Next.js": siNextdotjs,
  HTML5: siHtml5,
  CSS3: siCss,
  "Tailwind CSS": siTailwindcss,
  Bootstrap: siBootstrap,
  Vite: siVite,
  PHP: siPhp,
  "Node.js": siNodedotjs,
  Flutter: siFlutter,
  MySQL: siMysql,
  MariaDB: siMariadb,
  MongoDB: siMongodb,
  PostgreSQL: siPostgresql,
  Supabase: siSupabase,
  Firebase: siFirebase,
  Pandas: siPandas,
  Git: siGit,
  GitHub: siGithub,
  GitLab: siGitlab,
  Postman: siPostman,
  Linux: siLinux,
  Docker: siDocker,
};
const utilityIcons = {
  Java: Coffee,
  "REST API": Network,
  Scapy: Network,
  Requests: Globe,
  BeautifulSoup: FileCode,
  Paramiko: LockKeyhole,
  PyInstaller: Package,
  "VS Code": Braces,
};
export default function TechIcon({ name }: { name: string }) {
  const icon = brands[name];
  if (icon)
    return (
      <svg
        aria-hidden="true"
        width="23"
        height="23"
        viewBox="0 0 24 24"
        style={{
          fill:
            icon.hex === "000000" || ["GitHub", "Pandas", "Lua"].includes(name)
              ? "#d7d7df"
              : `#${icon.hex}`,
          filter: "saturate(.8)",
        }}
      >
        <path d={icon.path} />
      </svg>
    );
  const Icon = utilityIcons[name as keyof typeof utilityIcons] || Code2;
  return (
    <Icon
      aria-hidden="true"
      size={23}
      strokeWidth={1.6}
      color={name === "VS Code" ? "#46a8dd" : "#b7b3d9"}
    />
  );
}

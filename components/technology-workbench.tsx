"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { stack, profile } from "@/data/portfolio";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import { StackLoop } from "@/components/interactions";
import TechIcon from "@/components/tech-icon";
const descriptions = [
  "The languages I use across web, mobile, desktop, and scripting.",
  "The building blocks behind my interfaces and application runtime.",
  "Relational and document databases, cloud services, and data processing.",
  "Python tools for network work, HTTP requests, parsing, SSH, and packaging.",
  "My everyday workspace for version control, development, APIs, and containers.",
];
export default function TechnologyWorkbench() {
  const [selected, setSelected] = useState(0);
  const reduced = useMotionPreference();
  return (
    <div className="technology-workbench">
      <div
        className="technology-picker"
        role="group"
        aria-label="Choose a technology category"
      >
        {stack.map((group, index) => (
          <button
            key={group.category}
            aria-pressed={selected === index}
            aria-controls="technology-detail"
            onClick={() => setSelected(index)}
          >
            <span className="mono">0{index + 1}</span>
            <span>{group.category}</span>
            <ArrowUpRight size={18} />
          </button>
        ))}
      </div>
      <motion.div
        id="technology-detail"
        className="technology-detail"
        key={selected}
        initial={false}
        animate={
          reduced ? { opacity: 1, y: 0 } : { opacity: [0.6, 1], y: [14, 0] }
        }
        transition={{ duration: 0.4 }}
      >
        <div className="technology-detail-top">
          <span className="eyebrow">MY TOOLKIT / 0{selected + 1}</span>
          <span className="mono">
            {stack[selected].items.length} TECHNOLOGIES
          </span>
        </div>
        <h3>{stack[selected].category}</h3>
        <p>{descriptions[selected]}</p>
        <ul className="technology-pieces">
          {stack[selected].items.map((item) => (
            <li key={item}>
              <TechIcon name={item} />
              {item}
            </li>
          ))}
        </ul>
        <a
          href={`${profile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
        >
          SEE MY REPOSITORIES
          <ArrowUpRight size={16} />
        </a>
      </motion.div>
      <div className="technology-rail">
        <span className="eyebrow">ACROSS THE STACK</span>
        <StackLoop />
      </div>
    </div>
  );
}

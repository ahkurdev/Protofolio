"use client";
import { motion } from "motion/react";
import { useMotionPreference as useReducedMotion } from "@/hooks/use-motion-preference";
import { motionTokens } from "@/lib/motion";

interface GooeyNavProps {
  items: { label: string; href: string }[];
  active: string;
  onNavigate: () => void;
}
// React Bits GooeyNav adapted to controlled section state and native anchor keyboard behavior.
export default function GooeyNav({ items, active, onNavigate }: GooeyNavProps) {
  const reduced = useReducedMotion();
  return (
    <nav aria-label="Primary navigation" className="gooey-nav">
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={onNavigate}
              aria-current={
                active === item.href.slice(1) ? "location" : undefined
              }
            >
              {active === item.href.slice(1) && (
                <motion.span
                  className="nav-active"
                  layoutId="nav-highlight"
                  transition={{
                    duration: reduced ? 0 : motionTokens.normal,
                    ease: motionTokens.ease,
                  }}
                />
              )}
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

"use client";
import type { CSSProperties, ReactNode } from "react";

interface LogoLoopProps {
  logos: { node: ReactNode; title: string }[];
  speed?: number;
  hoverSpeed?: number;
  logoHeight?: number;
  gap?: number;
  ariaLabel?: string;
}
// React Bits LogoLoop adapted to a compositor-driven loop with an explicit pause state.
export default function LogoLoop({
  logos,
  speed = 30,
  gap = 64,
  ariaLabel = "Technologies",
}: LogoLoopProps) {
  return (
    <div className="logo-loop" role="region" aria-label={ariaLabel}>
      <div
        className="logo-loop-belt"
        style={
          {
            "--loop-gap": `${gap}px`,
            animationPlayState: speed === 0 ? "paused" : "running",
          } as CSSProperties
        }
      >
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {[...logos, ...logos].map((logo, index) => (
              <li
                key={`${logo.title}-${index}`}
                aria-hidden={index >= logos.length}
              >
                {logo.node}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

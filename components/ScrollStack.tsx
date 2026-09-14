"use client";
import { Children, type ReactNode } from "react";

// React Bits ScrollStack adapted to native sticky positioning: no scroll hijack or RAF loop.
export default function ScrollStack({ children }: { children: ReactNode }) {
  return (
    <div className="scroll-stack">
      {Children.map(children, (child, index) => (
        <div className="scroll-stack-card" style={{ top: 96 + index * 12 }}>
          {child}
        </div>
      ))}
    </div>
  );
}

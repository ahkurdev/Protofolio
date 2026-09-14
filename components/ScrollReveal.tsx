"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// React Bits ScrollReveal keeps prose readable throughout and cleans up only this instance.
export default function ScrollReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useMotionPreference();
  useEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 24 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 98%",
            end: "top 80%",
            scrub: true,
          },
        },
      );
    });
    return () => context.revert();
  }, [reduced]);
  return <div ref={ref}>{children}</div>;
}

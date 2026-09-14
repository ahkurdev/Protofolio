"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { useMotionPreference } from "@/hooks/use-motion-preference";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// A restrained React Bits ScrollFloat with semantic children and scoped cleanup.
export default function ScrollFloat({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useMotionPreference();
  useEffect(() => {
    if (reduced) return;
    const context = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { y: 36 },
        {
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 95%",
            end: "top 75%",
            scrub: true,
          },
        },
      );
    });
    return () => context.revert();
  }, [reduced]);
  return (
    <h2 id={id} ref={ref}>
      {children}
    </h2>
  );
}

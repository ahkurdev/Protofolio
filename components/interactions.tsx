"use client";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useInView } from "motion/react";
import { useMotionPreference as useReducedMotion } from "@/hooks/use-motion-preference";
import { Check, Copy, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/SplitText";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";
import ScrollFloat from "@/components/ScrollFloat";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollStack from "@/components/ScrollStack";
import GooeyNav from "@/components/GooeyNav";
import LogoLoop from "@/components/LogoLoop";
import ClickSpark from "@/components/ClickSpark";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { motionTokens } from "@/lib/motion";
import { profile, projects } from "@/data/portfolio";

import type { GitHubStats } from "@/lib/github";
import {
  siNextdotjs,
  siReact,
  siTypescript,
  siFlutter,
  siKotlin,
  siSupabase,
} from "simple-icons";

const Lanyard = dynamic(() => import("@/components/Lanyard"), {
  ssr: false,
  loading: () => (
    <div className="lanyard-loading" role="status">
      Loading interactive card…
    </div>
  ),
});
const navItems = ["Home", "Work", "About", "Stack", "Contact"].map((label) => ({
  label,
  href: `#${label.toLowerCase()}`,
}));

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    const update = () => {
      const current = sections
        .filter(
          (el) => el.getBoundingClientRect().top <= window.innerHeight * 0.45,
        )
        .sort((a, b) => b.offsetTop - a.offsetTop)[0];
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <header
      className="site-header"
      onKeyDown={(e) => {
        if (e.key === "Escape" && open) {
          setOpen(false);
          menuRef.current?.focus();
        }
      }}
    >
      <div className="header-inner wrap">
        <a href="#home" className="wordmark" aria-label="Ahmad Kurniawan home">
          ahkur<span>dev</span>
          <span className="wordmark-period">.</span>
        </a>
        <Button
          ref={menuRef}
          className="mobile-menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
        >
          <span>{open ? "Close" : "Menu"}</span>
          {open ? <X size={18} /> : <Menu size={18} />}
        </Button>
        <div id="navigation" className={`navigation ${open ? "is-open" : ""}`}>
          <GooeyNav
            items={navItems}
            active={active}
            onNavigate={() => setOpen(false)}
          />
        </div>
        <a className="header-contact" href={`mailto:${profile.email}`}>
          Let’s talk <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}

export function HeroWords() {
  const reduced = useReducedMotion();
  return (
    <>
      <div className="hero-role">
        <span className="role-line" aria-hidden="true" />
        <span>{profile.role}</span>
      </div>
      <h1 id="hero-heading">
        <SplitText
          text="AHMAD"
          tag="span"
          textAlign="left"
          delay={22}
          duration={motionTokens.slow}
          from={{ y: 18, opacity: 1 }}
          to={{ y: 0, opacity: 1 }}
        />
        <SplitText
          text="KURNIAWAN"
          tag="span"
          textAlign="left"
          delay={18}
          duration={motionTokens.slow}
          from={{ y: 18, opacity: 1 }}
          to={{ y: 0, opacity: 1 }}
        />
      </h1>
      <div className="hero-discipline mono">
        <span className="discipline-prefix">BUILDING /</span>
        <RotatingText
          texts={[
            "WEB SYSTEMS",
            "MOBILE APPLICATIONS",
            "DESKTOP SOFTWARE",
            "WEB · MOBILE · DESKTOP",
          ]}
          auto={!reduced}
          loop={false}
          rotationInterval={1450}
          splitBy="lines"
          transition={{
            duration: motionTokens.normal,
            ease: motionTokens.ease,
          }}
          mainClassName="rotating-discipline"
        />
      </div>
      <BlurText
        text="I build software for the web, mobile, and desktop. Thoughtful interfaces. Systems that hold together."
        className="hero-statement"
        delay={12}
        stepDuration={motionTokens.fast}
        animationFrom={{ filter: "blur(2px)", opacity: 1, y: 3 }}
        animationTo={[{ filter: "blur(0px)", opacity: 1, y: 0 }]}
      />
    </>
  );
}

export function SectionTitle({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) {
  return <ScrollFloat id={id}>{children}</ScrollFloat>;
}
export function ReadingReveal({ children }: { children: ReactNode }) {
  return <ScrollReveal>{children}</ScrollReveal>;
}
export function ProjectStack({ children }: { children: ReactNode }) {
  return <ScrollStack>{children}</ScrollStack>;
}

function StatNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  return (
    <span ref={ref} className="stat-number">
      <span className={inView && !reduced ? "sr-only" : ""}>{value}</span>
      {inView && !reduced && (
        <span aria-hidden="true">
          <AnimatedNumber
            value={value}
            springOptions={{ bounce: 0, duration: 700 }}
          />
        </span>
      )}
    </span>
  );
}
export function GitHubNumbers({ stats }: { stats: GitHubStats }) {
  return (
    <div className="stat-list">
      {[
        [stats.public_repos, "Public repositories"],
        [stats.followers, "GitHub followers"],
        [projects.length, "Selected projects"],
      ].map(([value, label]) => (
        <div key={label}>
          <StatNumber value={Number(value)} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 3500);
  };
  const button = (
    <Button
      className="copy-button"
      variant="ghost"
      onClick={copy}
      aria-label={label}
    >
      {status === "copied" ? <Check size={17} /> : <Copy size={17} />}
      <span className="copy-status" role="status">
        {status === "copied"
          ? "Copied"
          : status === "error"
            ? "Select text to copy"
            : ""}
      </span>
    </Button>
  );
  return (
    <span className="copy-wrap">
      {reduced ? (
        button
      ) : (
        <ClickSpark sparkCount={4} sparkSize={3} sparkRadius={8} duration={180}>
          {button}
        </ClickSpark>
      )}
    </span>
  );
}

const loopIcons = [
  siNextdotjs,
  siReact,
  siTypescript,
  siFlutter,
  siKotlin,
  siSupabase,
];
const loopLogos = loopIcons.map((icon) => ({
  node: (
    <span className="tech-wordmark">
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        aria-hidden="true"
        style={{
          fill: icon === siNextdotjs ? "#eee" : `#${icon.hex}`,
          filter: "saturate(.65)",
        }}
      >
        <path d={icon.path} />
      </svg>
      {icon.title}
    </span>
  ),
  title: icon.title,
}));
export function StackLoop() {
  const reduced = useReducedMotion();
  return (
    <div className="stack-loop">
      <div className="stack-loop-track">
        {reduced ? (
          <div className="static-logos">
            {loopLogos.map((logo) => (
              <span key={logo.title}>{logo.node}</span>
            ))}
          </div>
        ) : (
          <LogoLoop
            logos={loopLogos}
            speed={30}
            logoHeight={34}
            gap={64}
            ariaLabel="Core technologies"
          />
        )}
      </div>
    </div>
  );
}
function StaticIdentity() {
  return (
    <div className="identity-static">
      <div className="lanyard-strap" aria-hidden="true">
        <span>AHKURDEV / ENGINEERING</span>
      </div>
      <div className="identity-badge">
        <div className="badge-clip" aria-hidden="true" />
        <div className="badge-top mono">
          <span>AHKURDEV</span>
          <span>ID / 01</span>
        </div>
        <div className="badge-photo">
          <Image
            src="/images/ahmad-portrait.jpeg"
            alt="Portrait of Ahmad Kurniawan"
            fill
            sizes="280px"
          />
        </div>
        <div className="badge-details">
          <strong>
            Ahmad
            <br />
            Kurniawan
          </strong>
          <span className="mono">FULL-STACK DEVELOPER</span>
        </div>
        <div className="badge-footer mono">
          <span>LAMPUNG / INDONESIA</span>
          <span>↗</span>
        </div>
      </div>
    </div>
  );
}

class LanyardBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <>
        <StaticIdentity />
        <p role="status">
          Interactive view unavailable. Your profile card is shown above.
        </p>
      </>
    ) : (
      this.props.children
    );
  }
}
export function IdentityCard() {
  const [interactive, setInteractive] = useState(false);
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  return (
    <div ref={ref} className="identity-scene">
      {interactive && !reduced && inView ? (
        <LanyardBoundary>
          <div
            className="lanyard-canvas"
            aria-label="Interactive portrait card"
          >
            <Lanyard
              frontImage="/images/ahmad-portrait.jpeg"
              backImage="/images/ahmad-portrait.jpeg"
            />
          </div>
          <p className="lanyard-caption">
            Ahmad Kurniawan · Full-Stack Developer
          </p>
        </LanyardBoundary>
      ) : (
        <StaticIdentity />
      )}
      {!reduced && (
        <Button
          variant="ghost"
          className="identity-toggle"
          onClick={() => setInteractive(!interactive)}
        >
          {interactive ? "Show static card" : "Try interactive card"}
        </Button>
      )}
    </div>
  );
}

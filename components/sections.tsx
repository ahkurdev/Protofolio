import TechnologyWorkbench from "@/components/technology-workbench";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile, projects, capabilities, socials } from "@/data/portfolio";
import {
  HeroWords,
  SectionTitle,
  ReadingReveal,
  ProjectStack,
  IdentityCard,
  CopyButton,
  GitHubNumbers,
} from "@/components/interactions";
import { ProjectVisual } from "@/components/project-visual";
import { getGitHubStats } from "@/lib/github";

export function Hero() {
  return (
    <section id="home" className="hero wrap" aria-labelledby="hero-heading">
      <div className="hero-kicker mono">
        <span>INDEPENDENT DEVELOPER</span>
        <span>BASED IN LAMPUNG, ID</span>
      </div>
      <div className="hero-composition">
        <div className="hero-copy">
          <HeroWords />
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              View selected work <ArrowDown size={16} />
            </a>
            <a
              className="text-link"
              href={profile.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <Image
            src="/images/ahmad-cutout.png"
            alt="Ahmad Kurniawan wearing a suit"
            fill
            priority
            sizes="(max-width: 720px) 90vw, 54vw"
          />
          <span className="portrait-caption mono">
            AHMAD KURNIAWAN
            <br />
            FULL-STACK DEVELOPER
          </span>
        </div>
      </div>
      <div className="hero-bottom mono">
        <span>
          <i className="status-dot" /> AVAILABLE FOR PROJECTS
        </span>
        <span className="hero-bottom-middle">WEB · MOBILE · DESKTOP</span>
        <a href="#work">
          SCROLL TO EXPLORE <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

export async function Proof() {
  const result = await getGitHubStats();
  return (
    <section className="proof wrap" aria-label="Public GitHub statistics">
      <div className="proof-intro">
        <span className="eyebrow">BUILT IN THE OPEN</span>
        <a
          className="text-link"
          href={profile.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          @{profile.github} <ArrowUpRight size={15} />
        </a>
        <small>
          {result.source === "api"
            ? "GitHub API · refreshed hourly"
            : `GitHub snapshot · ${result.checkedAt}`}
        </small>
      </div>
      <GitHubNumbers stats={result.stats} />
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="work wrap" aria-labelledby="work-heading">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <SectionTitle id="work-heading">Software in practice.</SectionTitle>
        </div>
        <p className="section-aside">
          Different platforms.
          <br />
          The same attention to detail.
        </p>
      </div>
      <ProjectStack>
        {projects.slice(0, 3).map((project) => (
          <article
            className={`project project-${project.id}`}
            key={project.id}
            aria-labelledby={`project-${project.id}`}
          >
            <div className="project-info">
              <div className="project-meta mono">
                <span>/{project.id}</span>
                <span>{project.category}</span>
              </div>
              <h3 id={`project-${project.id}`}>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
              <ReadingReveal>
                <p className="project-detail">{project.detail}</p>
              </ReadingReveal>
              <ul
                className="technology-tags"
                aria-label="Project technologies and scope"
              >
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.linkLabel}: ${project.title}`}
              >
                {project.linkLabel}
                <ArrowUpRight size={18} />
              </a>
              {project.note && <p className="project-note">{project.note}</p>}
            </div>
            <ProjectVisual id={project.id} />
          </article>
        ))}
      </ProjectStack>
      <article className="additional-work">
        <span className="mono">/04</span>
        <div>
          <p className="eyebrow">{projects[3].category}</p>
          <h3>TaskFlow</h3>
        </div>
        <div>
          <p>{projects[3].detail}</p>
          <p className="mono additional-tech">
            {projects[3].technologies.join(" / ")}
          </p>
        </div>
        <a
          className="icon-link"
          href={projects[3].href}
          target="_blank"
          rel="noreferrer"
          aria-label="View TaskFlow repository"
        >
          <ArrowUpRight size={24} />
        </a>
      </article>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-heading">
      <div className="about-card">
        <IdentityCard />
      </div>
      <div className="about-copy">
        <p className="eyebrow">02 / THE PERSON BEHIND THE CODE</p>
        <SectionTitle id="about-heading">
          Across platforms.
          <br />
          Close to the details.
        </SectionTitle>
        <ReadingReveal>
          <p className="about-lead">
            I’m Ahmad, a full-stack developer based in Lampung, Indonesia. I
            build web, mobile, and desktop software, including the services that
            connect them.
          </p>
          <p>
            My current work centers on Next.js, Flutter, and Kotlin with Compose
            Desktop. I’m interested in how software holds together: API
            boundaries, local data, synchronization, and the small decisions
            that make an interface work.
          </p>
          <p>
            Alongside building, I study {profile.education}. I also work with
            Python automation and security tooling.
          </p>
        </ReadingReveal>
        <div className="about-note mono">
          <span>LAMPUNG, INDONESIA</span>
          <span>OPEN TO COLLABORATION</span>
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section
      className="capabilities wrap"
      aria-labelledby="capabilities-heading"
    >
      <div>
        <p className="eyebrow">03 / CAPABILITIES</p>
        <SectionTitle id="capabilities-heading">
          The work
          <br />
          underneath.
        </SectionTitle>
      </div>
      <div className="capability-list">
        {capabilities.map((item, i) => (
          <article key={item.title}>
            <span className="mono">0{i + 1}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section
      id="stack"
      className="stack-section"
      aria-labelledby="stack-heading"
    >
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / TECHNOLOGY</p>
            <SectionTitle id="stack-heading">
              A stack with purpose.
            </SectionTitle>
          </div>
          <p className="section-aside">
            Chosen for the problem.
            <br />
            Used across real projects.
          </p>
        </div>
        <TechnologyWorkbench />
      </div>
    </section>
  );
}

export function OpenSource() {
  return (
    <section className="open-source wrap" aria-labelledby="github-heading">
      <div>
        <p className="eyebrow">05 / OPEN SOURCE</p>
        <h2 id="github-heading">The code is part of the story.</h2>
        <p>
          Read the implementation, follow a project, or look through what I’m
          building next.
        </p>
      </div>
      <a
        className="outlined-action"
        href={`${profile.githubUrl}?tab=repositories`}
        target="_blank"
        rel="noreferrer"
      >
        Browse repositories <ArrowUpRight size={18} />
      </a>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="contact wrap"
      aria-labelledby="contact-heading"
    >
      <p className="eyebrow">06 / GET IN TOUCH</p>
      <div className="contact-title-row">
        <h2 id="contact-heading">
          Have something
          <br />
          in mind<span>?</span>
        </h2>
        <a
          className="contact-arrow"
          href={`mailto:${profile.email}`}
          aria-label="Email Ahmad Kurniawan"
        >
          <ArrowUpRight strokeWidth={1} />
        </a>
      </div>
      <div className="contact-intro">
        <p>
          For a project, a role, or a conversation about software.
          <br />
          I’d like to hear what you’re working on.
        </p>
        <span className="mono">
          <i className="status-dot" /> AVAILABLE FOR PROJECTS
        </span>
      </div>
      <div className="contact-email">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <CopyButton value={profile.email} label="Copy email" />
      </div>
      <div className="socials">
        {socials.map((s) => (
          <a href={s.href} key={s.name} target="_blank" rel="noreferrer">
            <span>{s.name}</span>
            <ArrowUpRight size={18} />
          </a>
        ))}
        <div className="discord-contact">
          <span>
            Discord <small>{profile.discord}</small>
          </span>
          <CopyButton value={profile.discord} label="Copy Discord username" />
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer wrap">
      <span>{profile.name}</span>
      <span className="mono">
        © {new Date().getFullYear()} · LAMPUNG, INDONESIA
      </span>
      <a href="#home">
        Back to top <ArrowUpRight size={15} />
      </a>
    </footer>
  );
}

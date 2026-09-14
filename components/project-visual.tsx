import Image from "next/image";

export function ProjectVisual({ id }: { id: string }) {
  if (id === "01")
    return (
      <figure className="project-visual village-visual">
        <div className="browser-frame">
          <div className="browser-bar">
            <span className="browser-dots" aria-hidden="true">
              ● ● ●
            </span>
            <span>sinarmulyo.com</span>
            <span aria-hidden="true">↗</span>
          </div>
          <Image
            src="/images/sinar-mulyo.png"
            alt="Actual Sinar Mulyo homepage with village profile navigation and public information"
            width={1268}
            height={713}
            sizes="(max-width: 720px) 90vw, 65vw"
          />
        </div>
        <figcaption>LIVE WEBSITE CAPTURE / SEPTEMBER 2026</figcaption>
      </figure>
    );
  if (id === "02")
    return (
      <figure className="project-visual architecture-visual hikalist-visual">
        <div className="architecture-top">
          <span>HIKALIST</span>
          <span>WINDOWS / JVM 21</span>
        </div>
        <div className="hikalist-word">
          Listen.
          <br />
          <span>Even offline.</span>
        </div>
        <div className="system-flow">
          <span>Compose Desktop</span>
          <span aria-hidden="true">↓</span>
          <div>
            <span>Playback + lyrics</span>
            <span>Playlist sync</span>
          </div>
          <span aria-hidden="true">↓</span>
          <div>
            <span>SQLite / FFmpeg</span>
            <span>Supabase</span>
          </div>
        </div>
        <figcaption>
          APPLICATION ARCHITECTURE / FROM THE PROJECT README
        </figcaption>
      </figure>
    );
  return (
    <figure className="project-visual architecture-visual caloris-visual">
      <div className="architecture-top">
        <span>CALORIS</span>
        <span>FLUTTER / DART</span>
      </div>
      <div className="caloris-title">
        Daily habits.
        <br />
        <span>Local first.</span>
      </div>
      <div className="caloris-flow">
        <div>
          <span className="mono">01</span>
          <strong>Interface</strong>
          <small>Flutter + Riverpod</small>
        </div>
        <span aria-hidden="true">↓</span>
        <div>
          <span className="mono">02</span>
          <strong>Local persistence</strong>
          <small>SQLite cache + outbox</small>
        </div>
        <span aria-hidden="true">↓</span>
        <div>
          <span className="mono">03</span>
          <strong>Synchronization</strong>
          <small>Supabase + PostgreSQL</small>
        </div>
      </div>
      <figcaption>DATA FLOW / FROM THE PROJECT README</figcaption>
    </figure>
  );
}

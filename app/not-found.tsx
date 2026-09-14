import Link from "next/link";
export default function NotFound() {
  return (
    <main className="wrap" style={{ paddingBlock: 120 }}>
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1 style={{ fontSize: "clamp(2rem,5vw,4rem)", marginBottom: 30 }}>
        This page isn’t here.
      </h1>
      <Link className="primary-action" href="/">
        Return to the portfolio
      </Link>
    </main>
  );
}

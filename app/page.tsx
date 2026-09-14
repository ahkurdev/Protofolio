import { Suspense } from "react";
import { Navigation } from "@/components/interactions";
import {
  Hero,
  Proof,
  Work,
  About,
  Capabilities,
  Stack,
  OpenSource,
  Contact,
  Footer,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Suspense
          fallback={
            <div className="proof wrap" role="status">
              Loading public GitHub statistics…
            </div>
          }
        >
          <Proof />
        </Suspense>
        <Work />
        <About />
        <Capabilities />
        <Stack />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

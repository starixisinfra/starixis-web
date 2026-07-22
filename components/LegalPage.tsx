import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export type TocItem = { id: string; label: string };

export function TBC({ children }: { children: ReactNode }) {
  return <mark className="tbc">{children}</mark>;
}

export function LegalPage({
  title,
  effectiveDate,
  lastUpdated,
  toc,
  children,
}: {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  toc: TocItem[];
  children: ReactNode;
}) {
  return (
    <>
      <Nav />
      <main className="legal shell">
        <header className="legal-header">
          <p className="eyebrow">Starixis Limited</p>
          <h1>{title}</h1>
          <p className="legal-dates">Effective date: {effectiveDate} · Last updated: {lastUpdated}</p>
          <p className="legal-draft-notice">
            This document is an initial operational draft prepared for internal review. Text highlighted like <TBC>this</TBC> is a placeholder that must be confirmed with accurate company or provider information. This draft has not been reviewed by a qualified UK solicitor or data-protection professional and must not be published or relied upon until that review is complete.
          </p>
        </header>
        <div className="legal-layout">
          <nav className="legal-toc" aria-label="Table of contents">
            <span className="legal-toc-label">On this page</span>
            <ol>
              {toc.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="legal-content">{children}</article>
        </div>
      </main>
      <Footer />
    </>
  );
}

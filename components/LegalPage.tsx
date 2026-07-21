import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function LegalPage({ title }: { title: string }) {
  return (
    <>
      <Nav />
      <main className="legal shell">
        <article>
          <p className="eyebrow">Starixis Limited</p>
          <h1>{title}</h1>
          <p>This page is a placeholder and will be updated with the appropriate legal information before the website launches.</p>
          <p>For questions, contact <a href="mailto:contact@starixis.com">contact@starixis.com</a>.</p>
        </article>
      </main>
      <Footer />
    </>
  );
}

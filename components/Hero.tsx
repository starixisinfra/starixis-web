import { IntelligenceNetwork } from "./IntelligenceNetwork";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="grid-mask" />
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal className="eyebrow">Retail Intelligence Systems</Reveal>
            <Reveal as="h1" delay={80}>Building intelligence for the next era of retail.</Reveal>
            <Reveal as="p" className="hero-lede" delay={160}>Starixis develops connected systems that help retailers understand environments, improve operations, and create more responsive customer experiences.</Reveal>
            <Reveal className="hero-actions" delay={240}>
              <a className="button button-primary" href="#innovation">Explore our work</a>
              <a className="button button-secondary" href="#contact">Talk to Starixis</a>
            </Reveal>
          </div>
          <IntelligenceNetwork />
        </div>
        <div className="hero-tags">
          {['Retail intelligence', 'Connected environments', 'Operational visibility', 'Modern infrastructure'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </header>
  );
}

import { IntelligenceNetwork } from "./IntelligenceNetwork";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="grid-mask" />
      <div className="shell">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal className="eyebrow">Connected Retail Technology</Reveal>
            <Reveal as="h1" delay={80}>Building connected technology for the future of retail.</Reveal>
            <Reveal as="p" className="hero-lede" delay={160}>Starixis builds connected retail technology that helps teams make sense of fragmented information, improve day-to-day operations, and create more responsive customer experiences.</Reveal>
            <Reveal className="hero-actions" delay={240}>
              <a className="button button-primary" href="#innovation">Explore our focus</a>
              <a className="button button-secondary" href="#contact">Talk to Starixis</a>
            </Reveal>
          </div>
          <IntelligenceNetwork />
        </div>
        <div className="hero-tags">
          {['Connected retail', 'Operational understanding', 'Customer experiences', 'Responsible technology'].map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </div>
    </header>
  );
}

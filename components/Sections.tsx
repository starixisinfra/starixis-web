import { Activity, Blend, Box, CircleDashed, Diamond, ScanLine } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./Reveal";

const innovation = [
  { code: "A / Understanding", title: "Operational Understanding", text: "Bring fragmented operational information into clearer context, helping retail teams make better-informed day-to-day decisions.", color: "#4fd6e6", Icon: Box },
  { code: "B / Connected", title: "Connected Retail", text: "Connect stores, digital channels, commerce systems, inventory, teams, and customer interactions so they can work together more effectively.", color: "#7aa8ff", Icon: Blend },
  { code: "C / Visibility", title: "Retail Visibility", text: "Make it easier to understand changing conditions, exceptions, and priorities across retail operations without losing sight of the customer experience.", color: "#9a86ff", Icon: ScanLine },
  { code: "D / Automation", title: "Responsible Automation", text: "Develop automation that improves consistency and reduces avoidable friction while keeping people informed and accountable.", color: "#4fd6e6", Icon: Diamond },
  { code: "E / Experience", title: "Responsive Experiences", text: "Create more relevant customer interactions by helping retail experiences respond to context across physical and digital channels.", color: "#7aa8ff", Icon: CircleDashed },
  { code: "F / Systems", title: "Adaptable Retail Systems", text: "Build flexible technology that can evolve with changing operations, customer expectations, and commerce systems without adding more disconnected tools.", color: "#9a86ff", Icon: Activity },
];

const principles = [
  { number: "01", title: "See retail as a whole", text: "Stores, digital channels, inventory, customer interactions, teams, and commerce systems shape one another.", color: "#4fd6e6" },
  { number: "02", title: "Turn information into context", text: "Information becomes useful when it helps explain what is happening and what deserves attention.", color: "#7aa8ff" },
  { number: "03", title: "Design for daily operations", text: "Technology must work within the complexity, constraints, and pace of real retail operations.", color: "#9a86ff" },
  { number: "04", title: "Keep people in control", text: "Automation should support human judgment and preserve accountability for meaningful decisions.", color: "#4fd6e6" },
];

const capabilities = [
  { title: "Retail inputs", color: "#7aa8ff", items: ["Operational information", "Store and digital signals", "Commerce systems", "Inventory information", "Customer interactions", "Team workflows"] },
  { title: "Connected technology", color: "#4fd6e6", highlight: true, items: ["Contextual understanding", "Pattern recognition", "Decision support", "System coordination", "Responsible automation", "Experience logic"] },
  { title: "Practical outcomes", color: "#9a86ff", items: ["Clearer visibility", "Faster understanding", "More coordinated operations", "Reduced friction", "More relevant experiences", "Better-informed decisions"] },
];

const trust = [
  ["Privacy", "Data handled with restraint and clear purpose."],
  ["Security", "Protection considered from the first design decision."],
  ["Transparency", "Systems that can be explained and understood."],
  ["Human oversight", "People stay accountable for meaningful decisions."],
  ["Accessibility", "Built to be usable across abilities and contexts."],
  ["Reliability", "Dependable operation in real conditions."],
];

export function Manifesto() {
  return (
    <section className="shell section" aria-labelledby="premise-heading">
      <div className="manifesto">
        <Reveal className="eyebrow">The premise</Reveal>
        <Reveal as="h2" id="premise-heading" className="heading">Retail works as one connected system.</Reveal>
        <Reveal className="two-col">
          <p className="body-copy">Stores, digital channels, inventory, retail teams, and customer interactions increasingly shape one another.</p>
          <p className="body-copy">The systems behind them often remain disconnected. Starixis develops the technology that helps those parts work together more effectively.</p>
        </Reveal>
      </div>
    </section>
  );
}

export function InnovationAreas() {
  return (
    <section id="innovation" className="shell section" aria-labelledby="innovation-heading">
      <div className="section-header">
        <div><Reveal className="eyebrow">Innovation Areas / 06</Reveal><Reveal as="h2" id="innovation-heading" className="heading">Where Starixis innovates</Reveal></div>
        <Reveal as="p" className="note">Our work spans six connected areas of retail technology. Together, they reflect how we approach the challenges of modern retail.</Reveal>
      </div>
      <div className="card-grid">
        {innovation.map(({ code, title, text, color, Icon }, index) => (
          <Reveal className="innovation-card" delay={(index % 3) * 80} key={title}>
            <div className="icon-tile"><Icon size={17} strokeWidth={1.5} color={color} aria-hidden="true" /></div>
            <div className="card-label" style={{ color }}>{code}</div>
            <h3>{title}</h3><p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="principles" className="band" aria-labelledby="principles-heading">
      <div className="shell section">
        <Reveal className="eyebrow">How Starixis thinks</Reveal>
        <Reveal as="h2" id="principles-heading" className="heading principles-title">Four principles that shape the systems we develop.</Reveal>
        <div className="principles-wrap">
          <div className="principles-line" aria-hidden="true" />
          <div className="principles-grid">
            {principles.map((item, index) => (
              <Reveal className="principle" delay={index * 90} key={item.number}>
                <div className="principle-number" style={{ borderColor: item.color, color: item.color }}>{item.number}</div>
                <h3>{item.title}</h3><p>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityDiagram() {
  return (
    <section id="capabilities" className="shell section" aria-labelledby="cap-heading">
      <div className="cap-heading">
        <Reveal className="eyebrow">Capability layer</Reveal>
        <Reveal as="h2" id="cap-heading" className="heading">How the pieces work together</Reveal>
        <Reveal as="p" className="caption">A conceptual representation — not a literal product architecture.</Reveal>
      </div>
      <div className="cap-grid">
        {capabilities.map((capability, index) => (
          <div key={capability.title} style={{ display: "contents" }}>
            {index > 0 && <div className="cap-arrow" aria-hidden="true">→</div>}
            <Reveal className={`cap-card${capability.highlight ? " highlight" : ""}`} delay={index * 120}>
              <div className="cap-label" style={{ color: capability.color }}>{capability.title}</div>
              <div className="cap-items">{capability.items.map((item) => <div className="cap-item" key={item}>{item}</div>)}</div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FutureStatement() {
  return (
    <section className="future" aria-labelledby="future-heading">
      <div className="grid-mask" />
      <div className="shell future-inner">
        <Reveal className="eyebrow">The future of retail</Reveal>
        <Reveal as="h2" id="future-heading">The future of retail depends on systems that <span>understand how retail actually works.</span></Reveal>
        <Reveal as="p" className="body-copy">Our work is focused on connecting operational information, commerce systems, retail teams, and customer experiences with a practical, responsible, and long-term approach.</Reveal>
      </div>
    </section>
  );
}

export function ResponsibleInnovation() {
  return (
    <section className="shell section" aria-labelledby="responsible-heading">
      <div className="responsible-grid">
        <div className="responsible-copy">
          <Reveal className="eyebrow">Responsible innovation</Reveal>
          <Reveal as="h2" id="responsible-heading" className="heading">Retail technology should earn trust.</Reveal>
          <Reveal as="p" className="body-copy">Responsibility is considered from the first design decision. The technologies shaping retail should be understandable, secure, dependable, accessible, and respectful of the people they affect.</Reveal>
        </div>
        <Reveal className="trust-grid">
          {trust.map(([title, text]) => <div className="trust-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="band" aria-labelledby="about-heading">
      <div className="shell section about-inner">
        <Reveal className="eyebrow">About Starixis</Reveal>
        <Reveal as="h2" id="about-heading" className="about-lead">Starixis Limited is a retail technology company building systems for more connected, responsive retail. We combine product thinking, engineering, design, and retail understanding to turn complex retail challenges into practical technology.</Reveal>
        <Reveal as="p" className="about-secondary">We take a long-term view: fewer disconnected tools, clearer understanding, and systems designed around how retail actually operates.</Reveal>
        <Reveal as="p" className="about-secondary">We develop our own retail technologies and are interested in selective collaboration with retailers, operators, and technology partners.</Reveal>
      </div>
    </section>
  );
}

export function Founder() {
  return (
    <section className="shell section founder" aria-labelledby="founder-heading">
      <div className="founder-grid">
        <Reveal className="founder-portrait-wrap">
          <div className="founder-glow" aria-hidden="true" />
          <div className="founder-portrait">
            <Image
              src="/yogesh-nagar-founder-starixis.jpg"
              alt="Yogesh Nagar, Founder of Starixis"
              width={1400}
              height={1700}
              sizes="(max-width: 900px) min(86vw, 360px), 360px"
              unoptimized
            />
          </div>
        </Reveal>
        <div className="founder-copy">
          <Reveal className="eyebrow">Founder</Reveal>
          <Reveal as="h2" id="founder-heading" className="founder-name">Yogesh Nagar</Reveal>
          <Reveal as="p" className="founder-role">Founder, Starixis</Reveal>
          <Reveal className="founder-bio">
            <p>Starixis was founded by Yogesh Nagar, a technology consultant and product builder focused on turning complex, fragmented systems into simpler digital experiences.</p>
            <p>After years of working with large-scale technology, Yogesh began exploring how thoughtful engineering and product design could be applied to everyday retail challenges. He created Starixis as a home for building retail technologies that connect operations, information, and customer experiences more effectively.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

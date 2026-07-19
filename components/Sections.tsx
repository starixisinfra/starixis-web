import { Activity, Blend, Box, CircleDashed, Diamond, ScanLine } from "lucide-react";
import { Reveal } from "./Reveal";

const innovation = [
  { code: "A / Intelligence", title: "Retail Intelligence", text: "Transform fragmented operational signals into clearer, more useful understanding. Context that helps teams see what is actually happening.", color: "#4fd6e6", Icon: Box },
  { code: "B / Connected", title: "Connected Environments", text: "Create stronger relationships between physical spaces, digital systems, products, teams, and customer interactions. Fewer gaps between them.", color: "#7aa8ff", Icon: Blend },
  { code: "C / Visibility", title: "Operational Visibility", text: "Help retail organizations understand conditions, exceptions, patterns, and opportunities across their environments as they emerge.", color: "#9a86ff", Icon: ScanLine },
  { code: "D / Automation", title: "Intelligent Automation", text: "Design automation that supports people, improves consistency, and reduces avoidable operational friction — without removing judgment.", color: "#4fd6e6", Icon: Diamond },
  { code: "E / Experience", title: "Adaptive Experiences", text: "Explore experiences that can respond more intelligently to context, intent, environment, and customer needs as they change.", color: "#7aa8ff", Icon: CircleDashed },
  { code: "F / Infrastructure", title: "Modern Retail Infrastructure", text: "Build flexible foundations that allow retail capabilities and systems to evolve without creating more fragmentation over time.", color: "#9a86ff", Icon: Activity },
];

const principles = [
  { number: "01", title: "Observe the whole system", text: "Retail outcomes are shaped by interactions between people, processes, environments, and technology — not any one layer alone.", color: "#4fd6e6" },
  { number: "02", title: "Turn signals into context", text: "Data becomes valuable when it helps explain what is happening and what deserves attention right now.", color: "#7aa8ff" },
  { number: "03", title: "Design for real environments", text: "Technology must work within the complexity, constraints, and pace of real retail operations.", color: "#9a86ff" },
  { number: "04", title: "Keep people in the loop", text: "Intelligence and automation should improve human judgment rather than remove accountability.", color: "#4fd6e6" },
];

const capabilities = [
  { title: "Inputs", color: "#7aa8ff", items: ["Operational data", "Environmental signals", "Commerce systems", "Inventory information", "Customer interactions", "Team workflows"] },
  { title: "Intelligence layer", color: "#4fd6e6", highlight: true, items: ["Contextual analysis", "Pattern recognition", "Decision support", "Orchestration", "Automation", "Experience logic"] },
  { title: "Outcomes", color: "#9a86ff", items: ["Greater visibility", "Faster understanding", "More coordinated operations", "Reduced friction", "More relevant experiences", "Better-informed decisions"] },
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
        <Reveal as="h2" id="premise-heading" className="heading">Retail is no longer a collection of disconnected moments.</Reveal>
        <Reveal className="two-col">
          <p className="body-copy">Modern retail spans stores, digital channels, inventory, teams, customer interactions, and operational systems. Each once ran on its own — today they move together, whether or not the underlying technology does.</p>
          <p className="body-copy">Every retail environment produces signals. The opportunity is not simply to collect more data, but to transform those signals into context, understanding, and useful action. Starixis builds the connective intelligence across those layers.</p>
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
        <Reveal as="p" className="note">Areas of active work, research, and development — not a catalogue of finished products.</Reveal>
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
        <Reveal as="h2" id="principles-heading" className="heading principles-title">Four principles that shape every system we build.</Reveal>
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
        <Reveal as="h2" id="future-heading">The future of retail will not be defined by more software. It will be defined by systems that <span>understand how retail actually works.</span></Reveal>
        <Reveal as="p" className="body-copy">Starixis is focused on connected intelligence, practical implementation, and responsible innovation — building adaptable, long-term infrastructure rather than another layer of disconnected tools.</Reveal>
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
          <Reveal as="h2" id="responsible-heading" className="heading">Intelligence should earn trust.</Reveal>
          <Reveal as="p" className="body-copy">We consider responsibility part of the system design — not an addition made after deployment. The technologies shaping retail should be understandable, secure, dependable, and respectful of the people they affect.</Reveal>
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
        <Reveal as="h2" id="about-heading" className="about-lead">Starixis Inc. is a technology company focused on the systems, intelligence, and infrastructure shaping the future of retail. We combine product thinking, engineering, design, and retail understanding to explore and build more connected ways for retail environments to operate.</Reveal>
        <Reveal as="p" className="about-secondary">We are building with a long-term view: fewer disconnected tools, clearer intelligence, and technology that fits the reality of retail.</Reveal>
      </div>
    </section>
  );
}

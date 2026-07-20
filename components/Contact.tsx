import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="shell section" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-copy">
          <Reveal className="eyebrow">Collaborate</Reveal>
          <Reveal as="h2" id="contact-heading" className="heading">Let&apos;s explore what retail can become.</Reveal>
          <Reveal as="p" className="body-copy">We work with forward-thinking retailers, operators, technology partners, and people who are serious about improving how retail systems work.</Reveal>
          <Reveal className="contact-meta"><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn →</a></div></Reveal>
        </div>
        <Reveal className="email-panel">
          <p className="eyebrow">Get in touch</p>
          <h3>Start a conversation</h3>
          <p>Tell us what you&apos;re exploring, building, or trying to improve.</p>
          <a className="email-link" href="mailto:contact@starixis.com">contact@starixis.com</a>
        </Reveal>
      </div>
    </section>
  );
}

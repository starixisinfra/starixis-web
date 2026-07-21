import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="shell section" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-copy">
          <Reveal className="eyebrow">Collaborate</Reveal>
          <Reveal as="h2" id="contact-heading" className="heading">Tell us what you are trying to connect, understand, or improve.</Reveal>
          <Reveal as="p" className="body-copy">We are interested in selective collaboration with retailers, operators, and technology partners working to make retail systems more connected, understandable, and responsive.</Reveal>
          <Reveal className="contact-meta"><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn →</a></div></Reveal>
        </div>
        <Reveal className="email-panel">
          <p className="eyebrow">Get in touch</p>
          <h3>Start a conversation</h3>
          <p>Share a brief introduction to your work and where our interests may align.</p>
          <a className="email-link" href="mailto:contact@starixis.com">contact@starixis.com</a>
        </Reveal>
      </div>
    </section>
  );
}

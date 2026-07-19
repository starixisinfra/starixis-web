"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "./Reveal";
import { ContactPayload, validateContact } from "@/lib/contact";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload: ContactPayload = {
      name: String(data.get("name") || ""), email: String(data.get("email") || ""),
      company: String(data.get("company") || ""), area: String(data.get("area") || ""),
      message: String(data.get("message") || ""),
    };
    const validationError = validateContact(payload);
    if (validationError) { setSent(false); setError(validationError); return; }

    setSending(true); setError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error || "Please try again.");
      setSent(true); form.reset();
    } catch (submitError) {
      setSent(false); setError(submitError instanceof Error ? submitError.message : "Please try again.");
    } finally { setSending(false); }
  }

  return (
    <section id="contact" className="shell section" aria-labelledby="contact-heading">
      <div className="contact-grid">
        <div className="contact-copy">
          <Reveal className="eyebrow">Collaborate</Reveal>
          <Reveal as="h2" id="contact-heading" className="heading">Let&apos;s explore what retail can become.</Reveal>
          <Reveal as="p" className="body-copy">We work with forward-thinking retailers, operators, technology partners, and people who are serious about improving how retail systems work.</Reveal>
          <Reveal className="contact-meta"><div><a href="mailto:hello@starixis.com">hello@starixis.com</a></div><div><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn →</a></div></Reveal>
        </div>
        <Reveal>
          <form className="form" onSubmit={submit} noValidate>
            <div className="form-row">
              <label className="field"><span>Name</span><input name="name" autoComplete="name" required /></label>
              <label className="field"><span>Work email</span><input type="email" name="email" autoComplete="email" required /></label>
            </div>
            <div className="form-row">
              <label className="field"><span>Company</span><input name="company" autoComplete="organization" /></label>
              <label className="field"><span>Area of interest</span><select name="area" defaultValue="Retail innovation"><option>Retail innovation</option><option>Strategic partnership</option><option>Technology collaboration</option><option>Careers</option><option>General enquiry</option></select></label>
            </div>
            <label className="field"><span>Message</span><textarea name="message" rows={4} required /></label>
            <div className="form-action">
              <button type="submit" className="button button-primary" disabled={sending}>{sending ? "Sending…" : "Start a conversation"}</button>
              <span className="form-status" role="status">{error || (sent ? "Thanks — connect a form service to receive this." : "")}</span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

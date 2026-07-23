import type { Metadata } from "next";
import { LegalPage, type TocItem } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Website Terms of Use — Starixis Limited",
  description: "The terms that apply to accessing and using the starixis.com corporate website operated by Starixis Limited.",
};

const toc: TocItem[] = [
  { id: "about", label: "1. About these terms" },
  { id: "accessing", label: "2. Accessing the website" },
  { id: "informational-purpose", label: "3. Informational purpose" },
  { id: "no-commitment", label: "4. No product or feature commitment" },
  { id: "intellectual-property", label: "5. Intellectual property" },
  { id: "acceptable-use", label: "6. Acceptable use" },
  { id: "linking", label: "7. Linking to Starixis" },
  { id: "third-party-links", label: "8. Third-party links" },
  { id: "accuracy", label: "9. Accuracy and availability" },
  { id: "limitation-of-liability", label: "10. Limitation of liability" },
  { id: "viruses", label: "11. Viruses and security" },
  { id: "privacy-cookies", label: "12. Privacy and cookies" },
  { id: "changes", label: "13. Changes" },
  { id: "governing-law", label: "14. Governing law and jurisdiction" },
  { id: "contact", label: "15. Contact" },
];

export default function Terms() {
  return (
    <LegalPage title="Website Terms of Use" effectiveDate="22 July 2026" lastUpdated="23 July 2026" toc={toc}>
      <section id="about">
        <h2>1. About these terms</h2>
        <p>
          These Website Terms of Use (&ldquo;terms&rdquo;) apply to your access to and use of starixis.com (the &ldquo;website&rdquo;), an informational corporate website operated by <strong>Starixis Limited</strong>, a company registered in England and Wales with company number 17356742, whose registered office is at 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ (&ldquo;Starixis&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
        </p>
        <p>
          These terms cover the informational corporate website only. They are not product terms, marketplace terms, customer account terms, seller terms, mobile-application terms, payment terms, or a software licence agreement. By using the website, you agree to these terms; if you do not agree, please do not use the website.
        </p>
      </section>

      <section id="accessing">
        <h2>2. Accessing the website</h2>
        <p>
          We provide access to the website on a temporary basis. We may change, suspend, withdraw, or restrict availability of all or part of the website without notice, for example for maintenance, security, or business reasons. We will try to give reasonable notice of any planned downtime where practical, but we are not liable to you if the website is unavailable at any time or for any period.
        </p>
        <p>You are responsible for making the arrangements necessary for you to have access to the website, including ensuring that anyone who accesses it through your internet connection or device is aware of these terms.</p>
      </section>

      <section id="informational-purpose">
        <h2>3. Informational purpose</h2>
        <p>
          The content on this website is general corporate and informational material about Starixis, its focus areas, and its approach to retail technology. It is provided for general information purposes only and does not constitute professional, legal, financial, investment, or other specialist advice. You should not rely on the content of this website as the basis for any decision without seeking appropriate independent advice.
        </p>
      </section>

      <section id="no-commitment">
        <h2>4. No product or feature commitment</h2>
        <p>
          This website describes innovation areas, research themes, conceptual capability diagrams, future-facing statements, and descriptions of possible technologies that Starixis is exploring or interested in. These descriptions — including, for example, the capability diagram, which is expressly presented as a conceptual representation rather than a literal product architecture — are provided to illustrate our thinking and direction.
        </p>
        <p>
          None of this content constitutes a promise, contractual commitment, offer, or guarantee that any particular product, feature, service, capability, or timeline will be developed, delivered, or made available, whether in the form described or at all. Any future product or service will be governed by its own separate terms at the time it is made available.
        </p>
      </section>

      <section id="intellectual-property">
        <h2>5. Intellectual property</h2>
        <p>
          The Starixis name, logo, and brand identity, and the design, written content, graphics, illustrations, software, and other materials that make up this website, are owned by or licensed to Starixis and are protected by intellectual property laws, except where stated otherwise. We do not claim ownership of any third-party material that appears on or is linked from the website, which remains the property of its respective owners.
        </p>
        <p>
          You may view, download, and print pages from the website for your own personal, non-commercial use, or for reasonable internal business use (for example, to share with colleagues considering a collaboration with us), provided you keep all copyright and other proprietary notices intact. You must not otherwise copy, reproduce, republish, or exploit any material from the website without our prior written consent.
        </p>
      </section>

      <section id="acceptable-use">
        <h2>6. Acceptable use</h2>
        <p>When using the website, you must not:</p>
        <ul>
          <li>use the website in any way that is unlawful, fraudulent, or has an unlawful or fraudulent purpose or effect;</li>
          <li>attempt to gain unauthorised access to the website, the server on which it is hosted, or any server, computer, or database connected to it;</li>
          <li>introduce viruses, malware, or other technologically harmful material to or via the website;</li>
          <li>attack the website via a denial-of-service attack or a distributed denial-of-service attack;</li>
          <li>interfere with or disrupt the normal operation of the website;</li>
          <li>misrepresent your affiliation with Starixis or impersonate Starixis or any of its staff;</li>
          <li>infringe our intellectual property rights or those of any third party; or</li>
          <li>use automated systems (such as bots or scrapers) in a way that places an unreasonable load on the website, or extract or republish substantial parts of the website&rsquo;s content without permission.</li>
        </ul>
        <p>Nothing in this section prohibits ordinary search-engine indexing of the website or legitimate linking to it as described in <a href="#linking">Section 7</a>.</p>
      </section>

      <section id="linking">
        <h2>7. Linking to Starixis</h2>
        <p>
          You may link to the website&rsquo;s homepage, provided you do so in a way that is fair and lawful and does not damage our reputation or take unfair advantage of it. A link must not suggest any form of association, approval, or endorsement by Starixis where none exists. We reserve the right to withdraw linking permission and request removal of any link that we reasonably consider misleading, harmful, or damaging to Starixis.
        </p>
      </section>

      <section id="third-party-links">
        <h2>8. Third-party links</h2>
        <p>
          Where the website links to third-party sites (for example, our LinkedIn company page), these links are provided for your convenience only. We do not control those sites and are not responsible for their content, availability, or practices, including their privacy practices. Including a link does not imply our endorsement of the linked site.
        </p>
      </section>

      <section id="accuracy">
        <h2>9. Accuracy and availability</h2>
        <p>
          We aim to keep the information on the website accurate and up to date, but we make no representation, warranty, or guarantee, whether express or implied, that any content is complete, accurate, or current at all times. We may change the content of the website at any time without notice. Nothing in this section excludes or limits any liability that cannot lawfully be excluded or limited.
        </p>
      </section>

      <section id="limitation-of-liability">
        <h2>10. Limitation of liability</h2>
        <p>Nothing in these terms excludes or limits our liability for:</p>
        <ul>
          <li>death or personal injury caused by our negligence;</li>
          <li>fraud or fraudulent misrepresentation; or</li>
          <li>any other liability that cannot lawfully be excluded or limited.</li>
        </ul>
        <p>
          Subject to the above, and to the fullest extent permitted by law, Starixis will not be liable to you for any loss or damage arising out of or in connection with your use of, or inability to use, the website, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, except where such loss or damage was reasonably foreseeable and arose because we failed to use reasonable care and skill.
        </p>
        <p>
          If you are a consumer, please note that we only provide this website for domestic and private use. You agree not to use the website for any commercial or business purpose, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity where that loss was not reasonably foreseeable. This does not affect any statutory rights you have as a consumer that cannot lawfully be excluded or limited.
        </p>
      </section>

      <section id="viruses">
        <h2>11. Viruses and security</h2>
        <p>
          We take reasonable precautions to help keep the website safe and free from viruses and other malicious code, but we do not guarantee that the website will always be secure or free from bugs, viruses, or other vulnerabilities. You are responsible for configuring your own information technology, computer programs, and platform to access the website, and for using your own virus-protection software.
        </p>
        <p>You must not misuse the website by knowingly introducing viruses, trojans, worms, logic bombs, or other material that is malicious or technologically harmful (see also <a href="#acceptable-use">Section 6</a>).</p>
      </section>

      <section id="privacy-cookies">
        <h2>12. Privacy and cookies</h2>
        <p>
          Our <a href="/privacy">Website Privacy Notice</a> explains how we handle personal information in connection with the website, including confirmation that the website does not use cookies or similar tracking technologies. By using the website, you acknowledge that processing described in that notice will take place.
        </p>
      </section>

      <section id="changes">
        <h2>13. Changes</h2>
        <p>We may revise these terms and update the website from time to time. The &ldquo;last updated&rdquo; date at the top of this page shows when these terms were last revised. Changes apply from the date they are published on this page; we do not treat undisclosed changes as automatically binding on you retrospectively.</p>
      </section>

      <section id="governing-law">
        <h2>14. Governing law and jurisdiction</h2>
        <p>
          These terms are governed by the laws of England and Wales. If you are a business, the courts of England and Wales will have exclusive jurisdiction over any dispute arising from these terms or your use of the website. If you are a consumer, these terms are governed by the laws of England and Wales, and any dispute may be brought in the courts of England and Wales; however, nothing in this section removes any right you have as a consumer to bring proceedings in, or benefit from mandatory protections of, the courts of the country in which you are resident, where applicable law gives you that right.
        </p>
      </section>

      <section id="contact">
        <h2>15. Contact</h2>
        <p>Questions about these terms can be sent to:</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <tbody>
              <tr><th scope="row">Email</th><td>contact@starixis.com</td></tr>
              <tr><th scope="row">Postal address</th><td>71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </LegalPage>
  );
}

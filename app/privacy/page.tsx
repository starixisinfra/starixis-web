import type { Metadata } from "next";
import { LegalPage, TBC, type TocItem } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Website Privacy Notice — Starixis Limited",
  description: "How Starixis Limited collects, uses, and protects personal information relating to visitors of and enquirers to the starixis.com corporate website.",
};

const toc: TocItem[] = [
  { id: "who-we-are", label: "1. Who we are" },
  { id: "scope", label: "2. Scope of this notice" },
  { id: "information-we-collect", label: "3. Information we collect" },
  { id: "how-and-why", label: "4. How and why we use information" },
  { id: "cookies", label: "5. Cookies and similar technologies" },
  { id: "sharing", label: "6. When we share information" },
  { id: "international-transfers", label: "7. International transfers" },
  { id: "retention", label: "8. Retention" },
  { id: "security", label: "9. Security" },
  { id: "your-rights", label: "10. Your data protection rights" },
  { id: "complaints", label: "11. Complaints" },
  { id: "automated-decisions", label: "12. Automated decision-making" },
  { id: "third-party-links", label: "13. Third-party links" },
  { id: "changes", label: "14. Changes to this notice" },
  { id: "contact", label: "15. Contact" },
];

export default function Privacy() {
  return (
    <LegalPage title="Website Privacy Notice" effectiveDate="22 July 2026" lastUpdated="22 July 2026" toc={toc}>
      <section id="who-we-are">
        <h2>1. Who we are</h2>
        <p>
          This notice explains how <strong>Starixis Limited</strong> collects and uses personal information in connection with the starixis.com corporate website (the &ldquo;website&rdquo;). Starixis Limited is the controller responsible for that personal information.
        </p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <tbody>
              <tr><th scope="row">Legal name</th><td>Starixis Limited</td></tr>
              <tr><th scope="row">Company number</th><td><TBC>Companies House registration number to be confirmed</TBC></td></tr>
              <tr><th scope="row">Registered office</th><td><TBC>registered office address to be confirmed</TBC></td></tr>
              <tr><th scope="row">Principal place of business</th><td><TBC>to be confirmed — presumed the same as the registered office unless notified otherwise</TBC></td></tr>
              <tr><th scope="row">General contact email</th><td>contact@starixis.com</td></tr>
              <tr><th scope="row">Privacy contact email</th><td>contact@starixis.com — <TBC>a dedicated privacy mailbox has not been confirmed; until one is set up, privacy enquiries should be sent to the general contact address above</TBC></td></tr>
              <tr><th scope="row">ICO registration</th><td><TBC>whether Starixis Limited is registered with the UK Information Commissioner&rsquo;s Office, and its registration number if so, has not yet been confirmed</TBC></td></tr>
            </tbody>
          </table>
        </div>
        <p>Starixis Limited is not, and must not be described as, &ldquo;Starixis Inc.&rdquo; or any other entity.</p>
      </section>

      <section id="scope">
        <h2>2. Scope of this notice</h2>
        <p>This notice applies only to:</p>
        <ul>
          <li>visitors to the starixis.com website;</li>
          <li>people who contact Starixis through the website or by email; and</li>
          <li>business contacts and prospective collaborators who correspond with Starixis in connection with the website.</li>
        </ul>
        <p>
          It covers the technical information generated through normal use of the website and the personal information you provide when you get in touch with us.
        </p>
        <p>
          Other Starixis products, applications, or services, if and when they exist, may involve different processing activities and may be covered by their own, separate privacy notices. This notice does not describe or apply to any product, customer, or user data outside the starixis.com corporate website.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>3. Information we collect</h2>
        <p>Based on how the website currently operates, we collect the following categories of information:</p>
        <h3>Information you provide directly</h3>
        <p>
          If you email us using the address published on the website (contact@starixis.com), we receive whatever information you choose to include, which may typically consist of:
        </p>
        <ul>
          <li>your name;</li>
          <li>your email address;</li>
          <li>your company or organisation;</li>
          <li>your job role;</li>
          <li>a telephone number, if you choose to provide one;</li>
          <li>the content of your enquiry; and</li>
          <li>any further communications you send us as the conversation continues.</li>
        </ul>
        <p>
          The website does not run a server-side contact form. The &ldquo;get in touch&rdquo; link opens your own email application and sends your message directly to our mailbox using your own email provider — it does not pass through, or get stored by, our website infrastructure.
        </p>
        <h3>Information generated automatically</h3>
        <p>
          The website does not use cookies, analytics, or any visitor-tracking tool (see <a href="#cookies">Section 5</a>). However, like any website, delivering a page to your browser inherently involves our hosting and content-delivery provider processing limited technical information — for example, your IP address, general browser and device information, and the page requested — for the short period needed to route and serve that request. Starixis does not itself collect, view, or compile this information into visitor profiles, and has not configured a dedicated access-logging or analytics pipeline for the website. Our infrastructure provider may retain minimal operational logs as a standard part of running its service, for example for network security and reliability purposes. <TBC>The exact configuration and retention period of any such logs held by our infrastructure provider has not yet been confirmed and will be added once verified.</TBC>
        </p>
        <p>We do not currently collect cookie identifiers, consent records, or approximate location inferred from your IP address, because none of those technologies are in use.</p>
      </section>

      <section id="how-and-why">
        <h2>4. How and why we use information</h2>
        <p>We only use personal information for the purposes below, on the lawful bases shown. We do not rely on consent as the basis for handling your enquiries — consent is used only where the law specifically requires it, such as for non-essential cookies (which, as explained in <a href="#cookies">Section 5</a>, we do not currently use).</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr><th>Purpose</th><th>Information used</th><th>Lawful basis</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Responding to your enquiry</td>
                <td>Name, email address, company/role (if given), message content</td>
                <td>Legitimate interests — operating a responsive channel for business and corporate enquiries</td>
              </tr>
              <tr>
                <td>Considering prospective partnerships or collaboration</td>
                <td>Name, email address, company/role, message content</td>
                <td>Legitimate interests — pursuing genuine business-development opportunities you have initiated contact about</td>
              </tr>
              <tr>
                <td>Managing business communications and correspondence records</td>
                <td>Name, email address, correspondence history</td>
                <td>Legitimate interests — keeping an accurate record of business communications</td>
              </tr>
              <tr>
                <td>Operating and securing the website</td>
                <td>Technical/connection information (see Section 3)</td>
                <td>Legitimate interests — keeping the website functioning reliably and securely</td>
              </tr>
              <tr>
                <td>Preventing misuse and investigating incidents</td>
                <td>Technical/connection information, correspondence where relevant</td>
                <td>Legitimate interests — protecting Starixis, the website, and its users from abuse or security incidents</td>
              </tr>
              <tr>
                <td>Diagnosing technical problems with the website</td>
                <td>Technical/connection information</td>
                <td>Legitimate interests — maintaining a working, accessible website</td>
              </tr>
              <tr>
                <td>Complying with legal obligations</td>
                <td>Any of the above, as required</td>
                <td>Legal obligation</td>
              </tr>
              <tr>
                <td>Establishing, exercising, or defending legal claims</td>
                <td>Correspondence and related records</td>
                <td>Legitimate interests — protecting Starixis&rsquo;s legal position</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Where we rely on legitimate interests, we have considered that the processing is proportionate, expected in the context of a business enquiry or ordinary website operation, and does not override your own interests or fundamental rights.
        </p>
      </section>

      <section id="cookies">
        <h2>5. Cookies and similar technologies</h2>
        <p>
          <strong>The starixis.com website does not use cookies, local storage, session storage, IndexedDB, tracking pixels, browser fingerprinting, or any other similar storage or access technology.</strong> This was confirmed by a review of the website&rsquo;s source code as part of preparing this notice.
        </p>
        <p>
          Because no cookies or similar technologies are used, we have not published a separate Cookie Notice or cookie-consent banner — doing so would imply a choice that does not actually exist. If this changes in the future (for example, if analytics or a chat tool is introduced), this section will be updated, any non-essential technology will not run before you have given valid consent, and a dedicated Cookie Notice and consent mechanism will be put in place before that happens.
        </p>
      </section>

      <section id="sharing">
        <h2>6. When we share information</h2>
        <p>We do not sell website visitors&rsquo; personal information, and we do not share it with third parties for their own marketing purposes. We do share limited information with the categories of recipient below, where necessary for the purposes described in Section 4:</p>
        <ul>
          <li><strong>Hosting and content-delivery provider</strong> — Amazon Web Services (AWS), which stores the website&rsquo;s files and delivers the website to your browser (see <a href="#international-transfers">Section 7</a>).</li>
          <li><strong>Email/mailbox provider</strong> — the provider that hosts the contact@starixis.com mailbox receives messages you send us. <TBC>The specific email provider has not yet been confirmed.</TBC></li>
          <li><strong>Professional advisers</strong> — such as legal, accountancy, or other advisers, where necessary for the purposes described above.</li>
          <li><strong>Public authorities or regulators</strong> — where we are legally required to disclose information, for example in response to a valid legal request.</li>
        </ul>
        <p>We do not currently use any analytics provider, advertising or retargeting provider, CRM, contact-form backend, or chat tool that would receive website visitors&rsquo; personal information — the audit behind this notice found none in use.</p>
      </section>

      <section id="international-transfers">
        <h2>7. International transfers</h2>
        <p>
          Our hosting and content-delivery provider, AWS, stores the website&rsquo;s files in the AWS London (eu-west-2) region. AWS also uses a global content-delivery network to serve the website faster to visitors; under our current configuration this network uses edge locations in the United Kingdom, the European Union, and North America. As a result, the limited technical/connection information described in <a href="#information-we-collect">Section 3</a> may be processed at edge locations outside the UK, including in the United States, as an ordinary part of how that network routes and delivers requests.
        </p>
        <p>
          Where personal information is transferred outside the UK in this way, we rely on the safeguards our provider makes available for international transfers (for example, the UK International Data Transfer Agreement, the UK Addendum to the EU Standard Contractual Clauses, or another legally recognised safeguard, as applicable). <TBC>The specific safeguard(s) AWS applies to this transfer have not yet been verified against AWS&rsquo;s current data-processing terms and will be confirmed and referenced here.</TBC> We do not claim that all providers store information only in the UK.
        </p>
      </section>

      <section id="retention">
        <h2>8. Retention</h2>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr><th>Category</th><th>Retention</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>General enquiries</td>
                <td><TBC>Proposed: up to 24 months from the last exchange, then deleted or anonymised unless a longer period is needed. This period is pending confirmation against Starixis&rsquo;s internal retention schedule.</TBC></td>
              </tr>
              <tr>
                <td>Prospective commercial discussions</td>
                <td><TBC>Proposed: for the duration of active discussion, plus up to 24 months after the last contact, or longer where discussions lead to a contract. Pending internal confirmation.</TBC></td>
              </tr>
              <tr>
                <td>Security and technical logs (where held by our infrastructure provider)</td>
                <td><TBC>Governed by our infrastructure provider&rsquo;s standard log-retention settings; the exact period has not yet been confirmed, as no bespoke logging pipeline is currently configured.</TBC></td>
              </tr>
              <tr>
                <td>Analytics data</td>
                <td>Not applicable — no analytics tool is in use.</td>
              </tr>
              <tr>
                <td>Cookie-consent records</td>
                <td>Not applicable — no cookies are in use and no consent is sought.</td>
              </tr>
              <tr>
                <td>Legal or dispute records</td>
                <td>Typically retained for up to 6 years after the matter concludes, reflecting standard limitation periods for contract and tort claims in England and Wales.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="security">
        <h2>9. Security</h2>
        <p>
          We take reasonable organisational and technical steps to protect personal information handled in connection with the website. The website is served over HTTPS, is hosted in a private storage bucket that is not directly accessible from the internet, sits behind a content-delivery network configured with standard security response headers, and is deployed through a controlled build pipeline that requires manual approval before changes reach production.
        </p>
        <p>No website or system can be guaranteed to be completely secure, and we cannot promise that the website will always be free of vulnerabilities. If you believe you have identified a security issue, please contact us at contact@starixis.com.</p>
      </section>

      <section id="your-rights">
        <h2>10. Your data protection rights</h2>
        <p>Subject to the circumstances and the lawful basis that applies, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal information we hold about you;</li>
          <li><strong>Correct</strong> inaccurate or incomplete information;</li>
          <li><strong>Erasure</strong> of your information in certain circumstances;</li>
          <li><strong>Restrict</strong> how we use your information in certain circumstances;</li>
          <li><strong>Object</strong> to processing based on legitimate interests;</li>
          <li><strong>Portability</strong> of information you provided to us, where the processing is based on consent or contract and carried out by automated means; and</li>
          <li><strong>Withdraw consent</strong> at any time, where processing is based on consent (this does not affect the lawfulness of processing before withdrawal).</li>
        </ul>
        <p>The website does not carry out any automated decision-making that produces legal or similarly significant effects, so rights relating to automated decision-making are not currently relevant (see <a href="#automated-decisions">Section 12</a>).</p>
        <p>To exercise any of these rights, contact us using the details in <a href="#contact">Section 15</a>. We may need to verify your identity and ask for further information about your request before responding.</p>
      </section>

      <section id="complaints">
        <h2>11. Complaints</h2>
        <p>
          We would welcome the opportunity to address any concerns before you approach a regulator, so please contact us first if you have a complaint about how we handle your personal information. That said, contacting us first is not a legal requirement, and you always have the right to complain directly to the UK Information Commissioner&rsquo;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a> or by calling 0303 123 1113.
        </p>
      </section>

      <section id="automated-decisions">
        <h2>12. Automated decision-making</h2>
        <p>The starixis.com website does not carry out any solely automated decision-making, including profiling, that produces legal or similarly significant effects on individuals.</p>
      </section>

      <section id="third-party-links">
        <h2>13. Third-party links</h2>
        <p>The website links out to the Starixis LinkedIn company page. This is an ordinary hyperlink — it does not embed any LinkedIn widget, script, or tracking pixel on our website. Once you follow that link, or any other third-party link, you leave our website and become subject to that third party&rsquo;s own privacy practices, which we do not control and are not responsible for. We recommend reviewing the privacy notice of any third-party site you visit.</p>
      </section>

      <section id="changes">
        <h2>14. Changes to this notice</h2>
        <p>We may update this notice from time to time, for example to reflect changes to the website or to our providers. The &ldquo;last updated&rdquo; date at the top of this page shows when it was last revised. Where a change is material, we will take reasonable steps to make it clearly visible on the website, for example through a notice on this page.</p>
      </section>

      <section id="contact">
        <h2>15. Contact</h2>
        <p>Questions about this notice or how we handle personal information can be sent to:</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <tbody>
              <tr><th scope="row">Email</th><td>contact@starixis.com</td></tr>
              <tr><th scope="row">Postal address</th><td><TBC>registered office / correspondence address to be confirmed</TBC></td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </LegalPage>
  );
}

import { Brand } from "./Brand";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-inner">
        <div className="footer-top">
          <div><Brand /><p className="footer-positioning">Building connected technology for the future of retail.</p></div>
          <div className="footer-links">
            <div className="footer-column"><span className="footer-label">Explore</span><Link href="/#innovation">Innovation</Link><Link href="/#capabilities">Capabilities</Link><Link href="/#principles">Principles</Link><Link href="/#about">About</Link></div>
            <div className="footer-column"><span className="footer-label">Company</span><Link href="/#contact">Contact</Link><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Starixis Limited. All rights reserved.</span><a className="footer-email" href="mailto:contact@starixis.com">contact@starixis.com</a></div>
      </div>
    </footer>
  );
}

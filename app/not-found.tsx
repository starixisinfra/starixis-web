import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <><Nav /><main className="legal shell"><article><p className="eyebrow">404 / Signal lost</p><h1>That page isn&apos;t connected.</h1><p>The page may have moved or the address may be incomplete.</p><Link className="button button-primary" href="/">Return home</Link></article></main><Footer /></>
  );
}

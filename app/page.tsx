import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { About, CapabilityDiagram, FutureStatement, InnovationAreas, Manifesto, Principles, ResponsibleInnovation } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <InnovationAreas />
        <Principles />
        <CapabilityDiagram />
        <FutureStatement />
        <ResponsibleInnovation />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy — Starixis Inc." };
export default function Privacy() { return <LegalPage title="Privacy" />; }

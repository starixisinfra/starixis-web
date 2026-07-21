import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Privacy — Starixis Limited" };
export default function Privacy() { return <LegalPage title="Privacy" />; }

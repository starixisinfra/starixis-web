import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Terms — Starixis Inc." };
export default function Terms() { return <LegalPage title="Terms" />; }

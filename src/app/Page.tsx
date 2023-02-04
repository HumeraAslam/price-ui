"use client";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";

export default function Page() {
  return (
    <div className="Page">
       <Header />
      <Pricing />
      <Features />
    </div>
  );
}

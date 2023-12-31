import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Hero,
  Navbar,
  Advantage,
  Services,
  Pricing,
  Review,
  Insight,
  Footer,
} from "@/components";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center ${inter.className}`}
    >
      <Navbar />
      <Hero />
      <Advantage />
      <Services />
      <Pricing />
      <Review />
      <Insight />
      <Footer />
    </main>
  );
}

import Head from 'next/head';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Traction } from './components/Traction';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';


export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/50 dark:via-black dark:to-black">
      <Head>
        <title>MemoTag - AI for Dementia Care</title>
      </Head>
      <Hero />
      <Problem />
      <Solution />
      <Traction />
      <CTA />
      <Footer />
    </main>
  );
}
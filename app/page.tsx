"use client"
import About from '@/containers/About';
import Hero from '@/containers/Hero';
import WhatIUse from '@/containers/WhatIUse';
import Works from '@/containers/Works';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import Lenis from 'lenis';

export default function Home() {
  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e: any) => {
      console.log(e);
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  return (
    <main>
      <Hero />
      <About />
      <Works />
      <WhatIUse />
    </main>
  );
}

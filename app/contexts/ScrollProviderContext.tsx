"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Detects route change

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Store instance globally if needed elsewhere
    (window as any).lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.killTweensOf(window);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis && pathname.includes("project/")) {
      lenis.scrollTo(0, { immediate: true }); // or smooth: true for animation
    }
  }, [pathname]); // Runs on each route change

  return <>{children}</>;
}

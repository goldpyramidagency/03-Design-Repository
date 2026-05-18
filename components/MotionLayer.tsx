"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionLayer() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from("[data-hero]", {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out"
      });

      gsap.from("[data-float]", {
        y: 22,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: "power3.out",
        delay: 0.25
      });

      gsap.to("[data-drift='one']", {
        y: -18,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.to("[data-drift='two']", {
        y: 16,
        x: -8,
        duration: 4.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.82,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%"
          }
        });
      });

      gsap.utils.toArray<SVGPathElement>(".motion-draw").forEach((path) => {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: path,
            start: "top 88%"
          }
        });
      });

      gsap.from("[data-path-step]", {
        scale: 0.94,
        opacity: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: "[data-pathway]",
          start: "top 78%"
        }
      });
    });

    return () => context.revert();
  }, []);

  return null;
}

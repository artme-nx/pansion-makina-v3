"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Progressive-enhancement scroll reveal.
 *
 * `.reveal` elements are visible by default (see globals.css) so that
 * no-JS / slow-hydration visitors always see full content. Only once this
 * effect actually runs do we opt elements into the hidden-then-animate-in
 * state via the `data-reveal-ready` attribute, then GSAP animates them
 * back to visible on scroll. This avoids the opacity:0-by-default trap.
 */
export function RevealInit() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const els = gsap.utils.toArray<HTMLElement>(".reveal");
    els.forEach((el) => el.setAttribute("data-reveal-ready", "true"));

    const ctx = gsap.context(() => {
      els.forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}

"use client";
import { useEffect, useState } from "react";
import { event } from "@/data/event";
import { Countdown } from "./Countdown";

/** Persistent conversion pill (bottom-right). Appears after the hero, like the floating CTA on the IIT Guwahati E-Cell site. */
export function FloatingRegister() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 520);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <a
      href={event.registerUrl} target="_blank" rel="noopener noreferrer"
      aria-hidden={!show} tabIndex={show ? 0 : -1}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex flex-col rounded-full bg-accent px-5 py-3 text-accent-fg shadow-[0_8px_30px_rgba(183,74,254,.35)] transition duration-500 md:right-8 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      style={{ transitionTimingFunction: "var(--ease-out-expo)" }}
    >
      <span className="font-display text-sm font-semibold leading-none">Register on Unstop ↗</span>
      <Countdown to={event.rounds[0].end} label="Round 1 closes in" className="mt-1 !text-[10px] [&>span]:!text-accent-fg" />
    </a>
  );
}

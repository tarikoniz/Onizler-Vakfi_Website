"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "fade";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.style.opacity = "1";
      el.style.transform = "translate(0, 0)";
    };

    // If already in (or near) the viewport at mount, reveal right away.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.92 && rect.bottom > 0) {
      setTimeout(reveal, delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(reveal, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);

    // Safety net: never leave content hidden if the observer misfires.
    const safety = setTimeout(reveal, delay + 1200);

    return () => {
      observer.disconnect();
      clearTimeout(safety);
    };
  }, [delay]);

  const initialTransform = {
    up: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    fade: "translateY(0)",
  }[direction];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform,
        transition: "opacity 0.6s ease, transform 0.6s ease",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

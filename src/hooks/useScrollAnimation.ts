// import { useRef } from 'react';

// export const useScrollAnimation = () => {
//   const ref = useRef<HTMLDivElement>(null!);

//   return ref;
// };

import { useEffect, useRef } from "react";

export const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Ensure element starts hidden (if not already)
    if (!el.classList.contains("opacity-0")) {
      el.classList.add("opacity-0", "translate-y-10");
    }

    // Add smooth transition
    el.classList.add("transition-all", "duration-700");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {

          // Remove hidden state
          el.classList.remove("opacity-0", "translate-y-10");

          // Show element
          el.classList.add("opacity-100", "translate-y-0");

          // Support About page animation also
          el.classList.add("animate-fade-up");

          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return ref;
};

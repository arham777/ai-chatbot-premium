import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const animationCompletedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || animationCompletedRef.current) return;

    // Clear existing content
    el.innerHTML = '';

    // Split text into characters or words
    let splitElements: HTMLElement[] = [];
    
    if (splitType.includes("chars")) {
      // Split into characters
      const chars = text.split('');
      chars.forEach((char, index) => {
        const charElement = document.createElement('span');
        charElement.textContent = char === ' ' ? '\u00A0' : char; // Non-breaking space
        charElement.style.display = 'inline-block';
        charElement.style.willChange = 'transform, opacity';
        charElement.dataset.index = index.toString();
        el.appendChild(charElement);
        splitElements.push(charElement);
      });
    } else if (splitType === "words") {
      // Split into words
      const words = text.split(' ');
      words.forEach((word, index) => {
        const wordElement = document.createElement('span');
        wordElement.textContent = word;
        wordElement.style.display = 'inline-block';
        wordElement.style.willChange = 'transform, opacity';
        wordElement.style.marginRight = '0.25em';
        wordElement.dataset.index = index.toString();
        el.appendChild(wordElement);
        splitElements.push(wordElement);
      });
    }

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      onComplete: () => {
        animationCompletedRef.current = true;
        gsap.set(splitElements, {
          ...to,
          clearProps: "willChange",
        });
        onLetterAnimationComplete?.();
      },
    });

    // Set initial state
    gsap.set(splitElements, { ...from, force3D: true });
    
    // Animate to final state
    tl.to(splitElements, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
      gsap.killTweensOf(splitElements);
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    threshold,
    rootMargin,
    onLetterAnimationComplete,
  ]);

  return (
    <p
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        wordWrap: "break-word",
      }}
    >
      {text}
    </p>
  );
};

export default SplitText; 
import { useEffect, useRef, useState } from "react";

/**
 * Reveals `text` one character at a time.
 * @param {string} text
 * @param {number} speed ms per character
 * @param {number} startDelay ms before typing begins
 */
export function useTypewriter(text, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reduceMotion.current) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval;
    setDisplayed("");
    setDone(false);

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

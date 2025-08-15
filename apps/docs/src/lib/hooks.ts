import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

export function useScrambleText(
  finalText: string,
  isActive: boolean,
  duration = 500,
) {
  const [displayText, setDisplayText] = useState(finalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleChars = useMemo(
    () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    [],
  );

  const scramble = useCallback(() => {
    if (!isActive) {
      setDisplayText(finalText);
      return;
    }

    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ];
          })
          .join("");
      });

      if (iteration >= finalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(finalText);
      }

      iteration += 1 / 3;
    }, 30);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(finalText);
    }, duration);
  }, [finalText, isActive, duration, scrambleChars]);

  useEffect(() => {
    if (isActive) {
      scramble();
    } else {
      setDisplayText(finalText);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, finalText, scramble]);

  return displayText;
}

export function useExpandingScrambleText(
  startText: string,
  endText: string,
  isActive: boolean,
  duration = 500,
) {
  const [displayText, setDisplayText] = useState(startText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleChars = useMemo(
    () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    [],
  );

  const scramble = useCallback(() => {
    if (!isActive) {
      setDisplayText(startText);
      return;
    }

    let iteration = 0;
    const maxLength = Math.max(startText.length, endText.length);
    const steps = maxLength * 3;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      const progress = iteration / steps;
      const currentLength = Math.floor(
        startText.length + (endText.length - startText.length) * progress,
      );

      setDisplayText(() => {
        let result = "";

        for (let i = 0; i < currentLength; i++) {
          const startChar = startText[i] || " ";
          const endChar = endText[i] || " ";

          const charStartTransition = (i / maxLength) * steps;
          const charEndTransition = charStartTransition + steps * 0.3;

          if (iteration < charStartTransition) {
            result += startChar;
          } else if (iteration >= charEndTransition) {
            result += endChar;
          } else {
            result +=
              scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
          }
        }

        return result;
      });

      if (iteration >= steps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(endText);
      }

      iteration++;
    }, 20);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(endText);
    }, duration);
  }, [startText, endText, isActive, duration, scrambleChars]);

  useEffect(() => {
    if (isActive) {
      scramble();
    } else {
      setDisplayText(startText);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, startText, endText, scramble]);

  return displayText;
}

/**
 * Debounced version of useScrambleText for better performance when text changes frequently
 */
export function useDebouncedScrambleText(
  finalText: string,
  isActive: boolean,
  duration = 500,
  debounceDelay = 300,
) {
  const [displayText, setDisplayText] = useState(finalText);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleChars = useMemo(
    () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    [],
  );

  const scramble = useCallback(() => {
    if (!isActive) {
      setDisplayText(finalText);
      return;
    }

    let iteration = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(() => {
        return finalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return finalText[index];
            }
            return scrambleChars[
              Math.floor(Math.random() * scrambleChars.length)
            ];
          })
          .join("");
      });

      if (iteration >= finalText.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(finalText);
      }

      iteration += 1 / 3;
    }, 30);

    timeoutRef.current = setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setDisplayText(finalText);
    }, duration);
  }, [finalText, isActive, duration, scrambleChars]);

  const debouncedScramble = useDebounceCallback(scramble, debounceDelay);

  useEffect(() => {
    if (isActive) {
      debouncedScramble();
    } else {
      setDisplayText(finalText);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, finalText, debouncedScramble]);

  return displayText;
}

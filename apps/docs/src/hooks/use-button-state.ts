import { useCallback, useRef, useState } from "react";

type ButtonState =
  | "idle"
  | "loading"
  | "scrambling-to-done"
  | "done"
  | "scrambling-to-idle";

interface UseButtonStateOptions {
  idleText: string;
  loadingText?: string;
  doneText?: string;
  scrambleDuration?: number;
  doneDuration?: number;
}

interface UseButtonStateResult {
  state: ButtonState;
  displayText: string;
  isScrambling: boolean;
  startTransition: () => void;
  reset: () => void;
}

/**
 * Hook for managing button state transitions with scramble animations
 * Follows the pattern: idle -> loading -> scrambling-to-done -> done -> scrambling-to-idle -> idle
 * Now uses native timeouts with proper cleanup instead of custom timeout management
 */
export const useButtonState = (
  options: UseButtonStateOptions,
): UseButtonStateResult => {
  const {
    idleText,
    loadingText = "WAIT",
    doneText = "DONE",
    scrambleDuration = 400,
    doneDuration = 600,
  } = options;

  const [state, setState] = useState<ButtonState>("idle");
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const addTimeout = useCallback((callback: () => void, delay: number) => {
    const timeout = setTimeout(callback, delay);
    timeoutsRef.current.push(timeout);
    return timeout;
  }, []);

  const cleanup = useCallback(() => {
    timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
    timeoutsRef.current = [];
  }, []);

  const getDisplayText = useCallback(
    (currentState: ButtonState): string => {
      switch (currentState) {
        case "loading":
          return loadingText;
        case "scrambling-to-done":
        case "done":
          return doneText;
        default:
          return idleText;
      }
    },
    [idleText, loadingText, doneText],
  );

  const getIsScrambling = useCallback((currentState: ButtonState): boolean => {
    return (
      currentState === "scrambling-to-done" ||
      currentState === "scrambling-to-idle" ||
      currentState === "loading"
    );
  }, []);

  const startTransition = useCallback(() => {
    cleanup();
    setState("loading");

    addTimeout(() => {
      setState("scrambling-to-done");

      addTimeout(() => {
        setState("done");

        addTimeout(() => {
          setState("scrambling-to-idle");

          addTimeout(() => {
            setState("idle");
          }, scrambleDuration);
        }, doneDuration);
      }, scrambleDuration);
    }, 100);
  }, [addTimeout, scrambleDuration, doneDuration, cleanup]);

  const reset = useCallback(() => {
    cleanup();
    setState("idle");
  }, [cleanup]);

  return {
    state,
    displayText: getDisplayText(state),
    isScrambling: getIsScrambling(state),
    startTransition,
    reset,
  };
};

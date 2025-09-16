import { useCallback } from "react";
import { useBoolean, useCopyToClipboard } from "usehooks-ts";

interface UseClipboardOptions {
  onSuccess?: (text: string) => void;
  onError?: (error: Error) => void;
}

interface UseClipboardResult {
  copy: (text: string) => Promise<boolean>;
  isLoading: boolean;
  error: Error | null;
}

export const useClipboard = (
  options: UseClipboardOptions = {},
): UseClipboardResult => {
  const {
    value: isLoading,
    setTrue: startLoading,
    setFalse: stopLoading,
  } = useBoolean(false);
  const [, copyToClipboard] = useCopyToClipboard();

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      startLoading();

      try {
        if (text.trim().startsWith("<svg") && "ClipboardItem" in window) {
          try {
            const blob = new Blob([text], { type: "image/svg+xml" });
            const clipboardItem = new (window as typeof globalThis & { ClipboardItem: typeof ClipboardItem }).ClipboardItem({
              "image/svg+xml": blob,
            });
            await navigator.clipboard.write([clipboardItem]);
            options.onSuccess?.(text);
            return true;
          } catch (richError) {
            console.warn(
              "Rich clipboard copy failed, falling back to text:",
              richError,
            );
          }
        }

        const success = await copyToClipboard(text);

        if (success) {
          options.onSuccess?.(text);
          return true;
        } else {
          const error = new Error("Failed to copy to clipboard");
          options.onError?.(error);
          return false;
        }
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Unknown clipboard error");
        options.onError?.(error);
        return false;
      } finally {
        stopLoading();
      }
    },
    [copyToClipboard, options, startLoading, stopLoading],
  );

  return {
    copy,
    isLoading,
    error: null,
  };
};

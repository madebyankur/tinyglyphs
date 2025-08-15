import { useEffect, useState } from "react";

import { ANIMATION_DELAYS } from "@/lib/constants";

interface UsePageAnimationReturn {
  showPage: boolean;
  showIcons: boolean;
}

export const usePageAnimation = (isReady: boolean): UsePageAnimationReturn => {
  const [showPage, setShowPage] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (!isReady) return;

    const pageTimer = setTimeout(() => {
      setShowPage(true);
    }, ANIMATION_DELAYS.PAGE_FADE);

    const iconsTimer = setTimeout(() => {
      setShowIcons(true);
    }, ANIMATION_DELAYS.ICON_REVEAL);

    return () => {
      clearTimeout(pageTimer);
      clearTimeout(iconsTimer);
    };
  }, [isReady]);

  return { showPage, showIcons };
};

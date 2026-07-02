import { trackPageView } from "@/lib/metaPixel";
import { useEffect } from "react";
import { useLocation } from "react-router";

export function MetaPixelTracker() {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
}
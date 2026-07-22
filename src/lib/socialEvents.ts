
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function trackSocialVisit() {
  const referrer = document.referrer.toLowerCase();

  let platform: string | null = null;

  if (
    referrer.includes("facebook.com") ||
    referrer.includes("m.facebook.com") ||
    referrer.includes("l.facebook.com")
  ) {
    platform = "facebook";
  } else if (referrer.includes("instagram.com")) {
    platform = "instagram";
  }

  if (platform && window.gtag) {
    window.gtag("event", "social_visit", {
      platform,
      referrer,
    });
  }
}
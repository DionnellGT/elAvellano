declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

export function initMetaPixel() {
  if (!PIXEL_ID || window.fbq) return;

  ((f: any, b, e, v, n?: any, t?: any, s?: any) => {
    if (f.fbq) return;

    n = f.fbq = function (...args: any[]) {
      if (n.callMethod) {
        n.callMethod.apply(n, args);
      } else {
        n.queue.push(args);
      }
    };

    if (!f._fbq) f._fbq = n;

    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];

    t = b.createElement(e);
    t.async = true;
    t.src = v;

    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  const fbq = window.fbq as ((...args: any[]) => void) | undefined;
  if (fbq) fbq("init", PIXEL_ID);
}

export function trackPageView() {
  window.fbq?.("track", "PageView");
}

export function trackEvent(event: string, data?: object) {
  window.fbq?.("track", event, data);
}


export const metaEvents = {
  pageView() {
    trackPageView();
  },

  viewProject(proyecto: {
    id: string;
    nombre: string;
  }) {
    trackEvent("ViewContent", {
      content_ids: [proyecto.id],
      content_name: proyecto.nombre,
      content_category: "Proyecto",
      content_type: "product",
    });
  },

  lead(origen = "Formulario Contacto") {
    trackEvent("Lead", {
      source: origen,
    });
  },

  contactWhatsapp() {
    trackEvent("Contact", {
      method: "WhatsApp",
    });
  },

  contactPhone() {
    trackEvent("Contact", {
      method: "Phone",
    });
  },

  contactEmail() {
    trackEvent("Contact", {
      method: "Email",
    });
  },
};

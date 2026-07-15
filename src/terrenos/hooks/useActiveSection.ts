import { useEffect, useState } from "react";
import type { TocSection } from "../../data/terminosycondiciones/types";

export default function useActiveSection(sections: TocSection[]) {
  const [activeSection, setActiveSection] = useState(
    sections[0]?.id ?? ""
  );

  useEffect(() => {
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visibleEntries.length) return;

        const id = visibleEntries[0].target.id;

        setActiveSection((current) =>
          current === id ? current : id
        );
      },
      {
        root: null,
        rootMargin: "-120px 0px -55% 0px",
        threshold: [0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return activeSection;
}
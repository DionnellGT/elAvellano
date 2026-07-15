import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { INITIAL_VISIBLE_ITEMS } from "./constants";
import TableOfContentsItem from "./TableOfContentsItem";
import type { TocSection } from "../../../data/terminosycondiciones/types";
import useActiveSection from "../../hooks/useActiveSection";

interface TableOfContentsProps {
  sections: TocSection[];
}

export default function TableOfContents({
  sections,
}: TableOfContentsProps) {
  const [open, setOpen] = useState(false);

  const activeSection = useActiveSection(sections);

  const visibleSections = useMemo(
    () => sections.slice(0, INITIAL_VISIBLE_ITEMS),
    [sections]
  );

  const hiddenSections = useMemo(
    () => sections.slice(INITIAL_VISIBLE_ITEMS),
    [sections]
  );

  const handleNavigate = (id: string) => {
    setOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const counter = open
    ? `Mostrando los ${sections.length} capítulos`
    : `Mostrando ${Math.min(
        INITIAL_VISIBLE_ITEMS,
        sections.length
      )} de ${sections.length} capítulos`;

  return (
    <aside className="rounded-xl border bg-card p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold">
          Índice
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {counter}
        </p>
      </div>

      <nav
        aria-label="Tabla de contenidos"
        className="space-y-1"
      >
        {visibleSections.map((section) => (
          <TableOfContentsItem
            key={section.id}
            section={section}
            active={activeSection === section.id}
            onClick={handleNavigate}
          />
        ))}

        {hiddenSections.length > 0 && (
          <Collapsible
            open={open}
            onOpenChange={setOpen}
          >
            <CollapsibleContent
              className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
            >
              <div className="mt-1 space-y-1">
                {hiddenSections.map((section) => (
                  <TableOfContentsItem
                    key={section.id}
                    section={section}
                    active={activeSection === section.id}
                    onClick={handleNavigate}
                  />
                ))}
              </div>
            </CollapsibleContent>

            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="mt-5 w-full justify-center gap-2"
            >
              <span>
                {open
                  ? "Ocultar capítulos"
                  : "Mostrar todos los capítulos"}
              </span>

              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  open && "rotate-180"
                )}
              />
            </Button>
          </Collapsible>
        )}
      </nav>
    </aside>
  );
}
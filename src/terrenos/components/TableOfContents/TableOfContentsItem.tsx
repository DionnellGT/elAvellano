import { cn } from "@/lib/utils";
import type { TocSection } from "../../../data/terminosycondiciones/types";

interface TableOfContentsItemProps {
  section: TocSection;
  active: boolean;
  onClick: (id: string) => void;
}

export default function TableOfContentsItem({
  section,
  active,
  onClick,
}: TableOfContentsItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(section.id)}
      aria-current={active ? "location" : undefined}
      className={cn(
        "group flex w-full items-start gap-3 rounded-md border-l-2 py-2 pl-3 pr-2 text-left transition-all duration-200",
        active
          ? "border-primary bg-primary/10 text-primary"
          : "border-transparent text-muted-foreground hover:border-primary/30 hover:bg-muted hover:text-foreground"
      )}
    >
      
      <span
        className={cn(
          "flex-1 text-sm leading-relaxed",
          active && "font-semibold"
        )}
      >
        {section.title}
      </span>
    </button>
  );
}
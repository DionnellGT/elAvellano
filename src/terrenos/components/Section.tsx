import type { TermsSection } from "../../data/terminosycondiciones/types";
import { BlockRenderer } from "./BlockRenderer";

interface Props {
  section: TermsSection;
}

export const Section = ({ section }: Props) => (
  <section
    id={section.id}
    className="scroll-mt-28"
  >
    <h2 className="mb-6 border-b pb-3 text-2xl font-bold text-gray-900">
      {section.title}
    </h2>

    <div className="space-y-5">
      {section.blocks.map((block, index) => (
        <BlockRenderer
          key={index}
          block={block}
        />
      ))}
    </div>
  </section>
);
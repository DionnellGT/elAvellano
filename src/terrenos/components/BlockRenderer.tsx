import clsx from "clsx";
import type { Block } from "../../data/terminosycondiciones/types";

interface Props {
  block: Block;
}

export const BlockRenderer = ({ block }: Props) => {

  switch (block.type) {

    case "paragraph":
      return (
        <p
          className={clsx(
            "leading-8 text-gray-700",
            block.className
          )}
        >
          {block.text}
        </p>
      );

    case "subtitle":
      return (
        <h3 className="pt-3 text-lg font-semibold text-gray-900">
          {block.text}
        </h3>
      );

    case "list":
      return (
        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          {block.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case "note":
      return (
        <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 p-4 text-sm leading-7 text-amber-900">
          {block.text}
        </div>
      );

    case "divider":
      return (
        <hr className="my-8 border-gray-200" />
      );

    default:
      return null;
  }

};
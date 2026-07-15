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

    case "divider":
      return (
        <hr className="my-8 border-gray-200" />
      );

    default:
      return null;
  }

};
import { useState } from "react";
import cn from "../../../../utils/cn";

type TAccordionItem = {
  title: string;
  description: string;
};

type TAccordionProps = {
  items: TAccordionItem[];
  className?: string;
};

export const Accordion1 = ({ items, className }: TAccordionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={cn("border rounded-lg font-sans mx-4", className)}>
      {items?.map((item, index) => (
        <div key={index} className="p-4 border-b">
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center py-4 w-full h-full"
          >
            <h3>{item?.title}</h3>
            <span>
              <svg
                className="fill-blue-500 mr-7 shrink-0 ml-8"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="7"
                  width="16"
                  height="2"
                  rx="1"
                  className={`transform origin-center transition duration-200 ease-out ${
                    open === index && "!rotate-180"
                  }`}
                />
                <rect
                  y="7"
                  width="16"
                  height="2"
                  ry="1"
                  className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                    open === index && "!rotate-180"
                  }`}
                />
              </svg>
            </span>
          </button>
          <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
              open === index
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">{item?.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

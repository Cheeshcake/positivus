import React, { useState } from "react";

const Accordion = ({ title, content, index }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`card p-4 md:p-12 rounded-3xl my-10 ${
        accordionOpen ? "bg-green" : "bg-grey"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-between items-center">
          <h1 className="acc-index">{index}</h1>
          <h3 className="acc-title md:ml-7 pl-10 md:pl-0">{title}</h3>
        </div>
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="h-fit w-fit"
        >
          <svg
            className="rounded-full flex border bg-grey p-1.5 border-black shrink-0 ml-8"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="6"
              width="30"
              height="4"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="6"
              width="30"
              height="4"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
      </div>
      <p
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm  border-t-2 border-t-black ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4 md:pt-7 mt-4 md:mt-7"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{content}</div>
      </p>
    </div>
  );
};

export default Accordion;

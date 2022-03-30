import React from "react";

const Heading = ({ headingTitle }: { headingTitle: string }) => {
  return (
    <div className="relative">
      <h2 className="font-primary text-2xl tracking-wider text-primary">
        {headingTitle}
      </h2>
      <div className="absolute top-0 bottom-0 my-auto -ml-24 h-1 w-[6%] bg-emerald-500" />
    </div>
  );
};

export default Heading;

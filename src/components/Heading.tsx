import React from "react";

const Heading = ({ headingTitle }: { headingTitle: string }) => {
  return (
    <div className="relative">
      <h2 className="font-primary text-2xl tracking-wider text-primary">
        {headingTitle}
      </h2>
      {/* green lines will be hidden on less than 1336px screen; 
        on larger than 1920px the green lines will be not constraint on the left
        NOTE: Find a work around */}
      <div className="absolute top-0 bottom-0 my-auto -ml-72 h-1 w-[14%] bg-emerald-500" />
    </div>
  );
};

export default Heading;

import Heading from "@/components/Heading";
import Image from "next/image";
import React, { useState } from "react";
import { workData } from "@/data";
import { Works } from "@/types/main";

const ProjectCard: React.FC<Works> = ({ imageURL, title, intro }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <div
      className="col-span-4 h-[29rem]"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}>
      <div className="shadow-lg">
        <Image src={imageURL} width={825} height={510} alt={title} />
      </div>
      <div className="px-7">
        <div className="py-5">
          <p className="font-serif text-xl">{title}</p>
          <p className="font-secondary font-light">{intro}</p>
        </div>
        <br />
        {isHover && (
          <div className="space-x-5">
            <button
              type="button"
              className="bg-emerald-500 px-5 py-1 font-primary tracking-wide text-white">
              READ MORE
            </button>
            <button
              type="button"
              className="bg-slate-50 px-5 py-1 font-primary tracking-wide">
              VISIT SITE
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const WorksSection = () => {
  return (
    <section id="work-preview">
      <Heading headingTitle="WORK" />
      <div className="grid grid-cols-12 gap-5">
        {workData.map((work) => {
          return (
            <ProjectCard
              imageURL={work.imageURL}
              title={work.title}
              intro={work.intro}
            />
          );
        })}
        <button
          type="button"
          className="col-span-12 my-20 mx-auto  bg-emerald-500 px-7 py-3 font-primary tracking-wide text-white">
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default WorksSection;

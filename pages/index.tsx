import type { NextPage } from "next";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import { nanoid } from "nanoid";

const Home: NextPage = () => {
  const serviceList: string[] = [
    "Website",
    "Online Stores",
    "Personal Blog Site",
    "Online Booking",
    "Enterprise Software Development",
    "Mobile App Development",
    "Field-Expert Dev Teams",
    "Design & Branding Solutions",
  ];
  return (
    <Layout sectionID="home">
      <NextSeo
        title="Solution by Design &amp; Technology"
        description="Kynatech Website but bootleg :D"
      />
      <div className="space-y-5 pt-56">
        <div className="relative">
          <h2 className="font-primary text-2xl tracking-wider text-primary">
            SOLUTIONS BY DESIGN &amp; TECHNOLOGY
          </h2>
          <div className="absolute top-0 bottom-0 my-auto -ml-24 h-1 w-[6%] bg-emerald-500" />
        </div>
        <h1 className="w-[53%] font-serif text-5xl leading-snug text-primary">
          We focus on human experience in a highly digitized world.
        </h1>
        <div className="w-[50%] font-secondary leading-9 tracking-wider text-neutral-400">
          <ul className="columns-2">
            {serviceList.map((service) => {
              return <li key={nanoid()}>{service}</li>;
            })}
          </ul>
        </div>
        <div className="space-x-6 pt-10 text-lg">
          <button
            type="button"
            className="w-52 bg-emerald-500 py-2 font-primary text-white">
            INQUIRE NOW
          </button>
          <button type="button" className="w-52 py-2 font-primary shadow-xl">
            GET TO KNOW US
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

import React from "react";
import { InsightCard } from "..";

const Insight = () => {
  return (
    <section id="blog" className="h-screen w-full pt-10">
      <div className="h-full w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
        <h2 className="font-semibold text-heading text-4xl w-1/2 mb-16">
          Latest Insight News
        </h2>
        <div className="flex items-center justify-center gap-6">
          <InsightCard
            image={"/assets/insightOne.jpg"}
            caption={"Monthly Meeting"}
            date={"Nov 17 2022"}
            author={"Steve Smithi"}
            title={"Running remote off-sites and onboardings"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam elit enim eget at vitae pellen tesque malesuada et."
            }
          />
          <InsightCard
            image={"/assets/insightTwo.jpg"}
            caption={"Client Demo Training"}
            date={"Apr 2 2023"}
            author={"Margaret Elk"}
            title={"Regular employee client demo training"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At nullam elit enim eget at vitae pellen tesque malesuada et."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Insight;

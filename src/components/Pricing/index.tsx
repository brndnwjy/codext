import React from "react";
import { PricingCard } from "..";

const Pricing = () => {
  return (
    <section id="pricing" className="h-screen w-full pt-10">
      <div className="h-full w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
        <h2 className="font-semibold text-heading text-4xl mb-16">
          Choose your best pricing plan
        </h2>
        <div className="flex items-center justify-center gap-6">
          <PricingCard
            title="Start-up"
            price={10}
            feat={[
              "Easy Customizable",
              "Commercial License",
              "Single user License",
              "Hotline Support 24/7",
            ]}
          />
          <PricingCard
            title="Classic"
            price={30}
            feat={[
              "Easy Customizable",
              "Commercial License",
              "5 users License",
              "Hotline Support 24/7",
            ]}
          />
          <PricingCard
            title="Premium"
            price={49}
            feat={[
              "Easy Customizable",
              "Commercial License",
              "10 users License",
              "Hotline Support 24/7",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

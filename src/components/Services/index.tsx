import React from "react";
import { ServiceCard } from "..";

const Services = () => {
  return (
    <section id="services" className="h-screen w-full pt-10">
      <div className="h-full w-full flex flex-col items-center justify-center text-center max-w-5xl mx-auto px-4">
        <h2 className="font-semibold text-heading text-4xl w-1/2 mb-16">
          We Provides Best Feature for Customer
        </h2>
        <div className="flex items-center justify-center gap-6">
          <ServiceCard title="Clean Code" icon={"/assets/code.png"} iconBg="red-100"/>
          <ServiceCard title="Data Analytic" icon={"/assets/graph.png"} iconBg="amber-100"/>
          <ServiceCard title="Fully Secured" icon={"/assets/secure.png"} iconBg="cyan-100"/>
          <ServiceCard title="24/7 Support" icon={"/assets/continuos.png"} iconBg="indigo-100"/>
        </div>
      </div>
    </section>
  );
};

export default Services;

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="home" className= "h-screen w-full bg-lightBlue pt-10">
      <div className="h-full w-full flex max-w-5xl mx-auto px-4">
        <div className= "w-[48%] flex flex-col items-start justify-center gap-6">
          <h1 className="font-semibold text-6xl">
            Codext one of the best system in{" "}
            <span className="text-primaryBlue">SAAS</span>.
          </h1>
          <p className="text-text text-lg mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla
            nulla etiam turpis quam diam et. Arcu nisi, sed aenean sit nisl.
          </p>
          <button
            type="button"
            className="bg-primaryBlue text-white px-3 py-2.5 rounded uppercase"
          >
            Try a Live Demo
          </button>
        </div>

        <div className= "flex m-auto">
            <Image src={"/assets/hero.png"} alt="Hero" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

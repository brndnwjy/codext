import Image from "next/image";
import React from "react";
import { ArrowPoint } from "..";

const Advantage = () => {
  return (
    <section className="h-screen w-full pt-10">
      <div className="h-full w-full flex max-w-5xl mx-auto px-4">
        <div className="flex m-auto">
          <Image
            src={"/assets/illustration.png"}
            alt="Service"
            width={600}
            height={600}
          />
        </div>
        <div className="w-[52%] flex flex-col items-start justify-center gap-6">
          <h2 className="font-semibold text-heading text-4xl">
            It’s very helpful for operating system
          </h2>
          <ArrowPoint title={"Ultra fast & Secure"} arrow={"/assets/arrowRed.svg"} />
          <ArrowPoint title={"Allows customization"} arrow={"/assets/arrowGreen.svg"} />
          <ArrowPoint title={"Smart contract"} arrow={"/assets/arrowBlue.svg"} />
        </div>
      </div>
    </section>
  );
};

export default Advantage;

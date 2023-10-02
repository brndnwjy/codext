import Image from "next/image";
import React from "react";

const ArrowPoint = ({ title, arrow }: { title: string; arrow: string }) => {
  return (
    <article className="flex items-start gap-4">
      <Image src={arrow} alt="Arrow" width={25} height={25} className="pt-1"/>
      <div>
        <h3 className="font-semibold text-heading text-2xl mb-2.5">{title}</h3>
        <p className="text-text text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. vitae velit
          proin justo, elementum sit. In morbi dolor sodales vestibulum cras.
          Consequat.
        </p>
      </div>
    </article>
  );
};

export default ArrowPoint;

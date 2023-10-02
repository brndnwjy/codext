import Image from "next/image";
import React from "react";

const ServiceCard = ({
  title,
  icon,
  iconBg,
}: {
  title: string;
  icon: string;
  iconBg: string;
}) => {
  return (
    <article className="flex flex-col p-6 rounded-md border border-slate-200 hover:shadow-md hover:shadow-primaryBlue transition-all duration-300 cursor-pointer">
      <div className={`w-fit bg-${iconBg} p-10 rounded-full m-auto mb-12`}>
        <Image
          src={icon}
          alt={title}
          width={50}
          height={50}
          className="aspect-square object-contain object-center"
        />
      </div>
      <h3 className="font-medium text-heading text-2xl mb-2.5">{title}</h3>
      <p className="text-text text-sm mb-5">
        Lorem ipsum dolor sit amet ecte adipiscing elit.
      </p>
      <button type="button" className="m-auto">
        <Image
          src={"/assets/arrowRounded.png"}
          alt="Arrow"
          width={40}
          height={40}
        />
      </button>
    </article>
  );
};

export default ServiceCard;

import React from "react";

const PricingCard = ({
  title,
  price,
  feat,
}: {
  title: string;
  price: number;
  feat: string[];
}) => {
  return (
    <article className="flex flex-col p-6 rounded-b-md border border-slate-200 hover:shadow-md hover:shadow-primaryBlue transition-all duration-300 cursor-pointer group">
      <h3 className="font-medium text-heading text-xl mb-2.5">{title}</h3>
      <h4 className="font-semibold text-3xl mb-10">
        ${price}
        <span className="text-2xl">/mo</span>
      </h4>
      <ul className="mb-10">
        {feat?.map((item, index) => (
          <li key={index} className="text-text text-sm mb-1.5">{item}</li>
        ))}
      </ul>
      <button
        type="button"
        className="font-medium bg-lightBlue text-primaryBlue transition-all duration-300 group-hover:bg-primaryBlue group-hover:text-white px-3 py-2.5 rounded uppercase"
      >
        Try This Package
      </button>
    </article>
  );
};

export default PricingCard;

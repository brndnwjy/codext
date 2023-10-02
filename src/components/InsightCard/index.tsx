import Image from "next/image";
import React from "react";

interface InsightCardProps {
  image: string;
  caption: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const InsightCard = ({
  image,
  caption,
  date,
  author,
  title,
  description,
}: InsightCardProps) => {
  return (
    <article className="p-4">
      <Image
        src={image}
        alt={caption}
        width={100}
        height={100}
        className="w-full h-[280px] object-cover rounded-md border-2 border-primaryBlue mb-7"
      />
      <div className="text-left px-4">
        <h5 className="text-text text-sm mb-2.5">{caption}</h5>
        <div className="flex gap-10 font-semibold text-xs mb-5">
          <span>{date}</span>
          <span>by {author}</span>
        </div>
        <h3 className="text-heading font-semibold text-lg mb-5">{title}</h3>
        <p className="text-text font-light text-sm mb-5">{description}</p>
        <button
          type="button"
          className="bg-primaryBlue text-white px-2 py-1.5 rounded uppercase"
        >
          Continue
        </button>
      </div>
    </article>
  );
};

export default InsightCard;

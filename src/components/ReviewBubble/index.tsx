import Image from "next/image";
import React from "react";

interface ReviewBubbleProps {
  bottom: number;
  left: number;
  image: string;
  width: number;
  height: number;
  fullName: string;
  position: string;
  content: string;
  reverse?: boolean;
}

const ReviewBubble = ({
  bottom,
  left,
  image,
  width,
  height,
  fullName,
  position,
  content,
  reverse,
}: ReviewBubbleProps) => {
  return (
    <article
      className={`absolute bottom-[${bottom}%] left-[${left}%] flex ${
        reverse ? "flex-row-reverse" : ""
      } items-center gap-4`}
    >
      <Image
        src={image}
        alt="user"
        width={width}
        height={height}
        className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
      />
      <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300 z-10">
        <h4 className="reviewQuote mb-4">
          <em>{content}</em>
        </h4>
        <h5 className="text-sm pl-5">{fullName}</h5>
        <small className="font-extralight text-xs pl-5">{position}</small>
      </div>
    </article>
  );
};

export default ReviewBubble;

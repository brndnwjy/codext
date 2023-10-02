import Image from "next/image";
import React from "react";
import { ReviewBubble } from "..";

const Review = () => {
  return (
    <section id="testimonials" className="h-screen w-full pt-10">
      <div className="h-full w-full flex flex-col items-center justify-center text-center">
        <h2 className="font-semibold text-heading text-4xl mb-7">
          Let&apos;s see our User&apos;s Review
        </h2>
        <p className="text-text text-lg mb-2 w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          scelerisque tellus interdum venenatis auctor et nibh. Rhoncus a, sed
          lobortis nisi.
        </p>
        <div className="w-full h-full mapBg relative">
          <ReviewBubble
            bottom={45}
            left={41}
            image={"/assets/userOne.jpg"}
            width={75}
            height={75}
            fullName={"Wilson Bergson"}
            position={"Marketing Manager"}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.`}
          />

          <ReviewBubble
            bottom={25}
            left={29}
            image={"/assets/userTwo.jpg"}
            width={65}
            height={65}
            fullName={"Robert Arnfinn"}
            position={"Creative Director"}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.`}
          />

          <ReviewBubble
            bottom={61}
            left={22}
            image={"/assets/userThree.jpg"}
            width={65}
            height={65}
            fullName={"Susanna Inger"}
            position={"Senior Quality Assurance"}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.`}
          />

          <ReviewBubble
            bottom={61}
            left={66}
            image={"/assets/userFour.jpg"}
            width={65}
            height={65}
            fullName={"Varlam Codrin"}
            position={"HR Specialist"}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.`}
          />

          <ReviewBubble
            bottom={17}
            left={52}
            image={"/assets/userFive.jpg"}
            width={65}
            height={65}
            fullName={"Kamal Bishal"}
            position={"IT Support"}
            content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque.`}
            reverse
          />
        </div>
      </div>
    </section>
  );
};

export default Review;

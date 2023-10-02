import Image from "next/image";
import React from "react";

const Review = () => {
  return (
    <section className="h-screen w-full pt-10">
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
          <article className="absolute bottom-[45%] left-[41%] flex items-center gap-4">
            <Image
              src={"/assets/userOne.jpg"}
              alt="user"
              width={75}
              height={75}
              className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
            />
            <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300">
              <h4 className="reviewQuote mb-4">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque.
                </em>
              </h4>
              <h5 className="text-sm pl-5">Wilson Bergson</h5>
              <small className="font-extralight text-xs pl-5">
                Marketing Manager
              </small>
            </div>
          </article>

          <article className="absolute bottom-[25%] left-[29%] flex items-center gap-4">
            <Image
              src={"/assets/userTwo.jpg"}
              alt="user"
              width={65}
              height={65}
              className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
            />
            <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300">
              <h4 className="reviewQuote mb-4">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque.
                </em>
              </h4>
              <h5 className="text-sm pl-5">Wilson Bergson</h5>
              <small className="font-extralight text-xs pl-5">
                Marketing Manager
              </small>
            </div>
          </article>

          <article className="absolute bottom-[61%] left-[22%] flex items-center gap-4">
            <Image
              src={"/assets/userThree.jpg"}
              alt="user"
              width={65}
              height={65}
              className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
            />
            <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300">
              <h4 className="reviewQuote mb-4">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque.
                </em>
              </h4>
              <h5 className="text-sm pl-5">Wilson Bergson</h5>
              <small className="font-extralight text-xs pl-5">
                Marketing Manager
              </small>
            </div>
          </article>

          <article className="absolute bottom-[61%] left-[66%] flex items-center gap-4">
            <Image
              src={"/assets/userFour.jpg"}
              alt="user"
              width={65}
              height={65}
              className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
            />
            <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300">
              <h4 className="reviewQuote mb-4">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque.
                </em>
              </h4>
              <h5 className="text-sm pl-5">Wilson Bergson</h5>
              <small className="font-extralight text-xs pl-5">
                Marketing Manager
              </small>
            </div>
          </article>

          <article className="absolute bottom-[17%] left-[52%] flex flex-row-reverse items-center gap-4">
            <Image
              src={"/assets/userFive.jpg"}
              alt="user"
              width={65}
              height={65}
              className="rounded-full aspect-square object-cover border-2 border-primaryBlue peer cursor-pointer userReviewAnimate hover:animate-none hover:scale-110 transition-all duration-300"
            />
            <div className="gradientBlue text-white p-4 rounded-lg flex flex-col items-start opacity-0 peer-hover:opacity-100 transition-all duration-300">
              <h4 className="reviewQuote mb-4">
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  scelerisque.
                </em>
              </h4>
              <h5 className="text-sm pl-5">Wilson Bergson</h5>
              <small className="font-extralight text-xs pl-5">
                Marketing Manager
              </small>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Review;

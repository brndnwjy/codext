import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bottom-0 flex items-center justify-center bg-slate-100 mt-36">
      <section className="w-full max-w-5xl flex items-start justify-between px-4 py-20">
        <div className="w-[30%]">
          <Image
            src={"/assets/logo.png"}
            alt="Codext"
            width={100}
            height={100}
            className="mb-7"
          />
          <p className="text-text font-light text-sm">
            Lorem ipsum dolor sit amet, consect etur adipiscing elit.
            Ullamcorper purus eleifend purus faucibus faucibus.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-7">Resources</h3>
          <div className="flex flex-col gap-2 text-text">
            <Link href={"/#services"}>Services</Link>
            <Link href={"/#pricing"}>Pricing</Link>
            <Link href={"/#testimonials"}>Testimonials</Link>
            <Link href={"/#blog"}>Blog</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-7">Useful Links</h3>
          <div className="flex flex-col gap-2 text-text">
            <Link href={"/"}>Terms of Services</Link>
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Cookie Policy</Link>
            <Link href={"/"}>Contact Us</Link>
          </div>
        </div>

        <div className="w-[25%]">
          <h3 className="font-semibold mb-7">Newsletter</h3>
          <p className="text-text font-light font-sm mb-6">
            Sign up and receive the latest news via email.
          </p>
          <div className="flex border border-text rounded justify-between overflow-hidden">
            <input type="email" placeholder="Email address" className="w-3/4 pl-2 outline-none" />
            <button
              type="button"
              className="bg-primaryBlue text-white uppercase px-1.5 py-1"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

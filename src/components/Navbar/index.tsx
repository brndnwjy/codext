import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-24 fixed top-0  flex items-center justify-center backdrop-blur-sm z-20">
      <section className="w-full max-w-5xl flex items-center justify-between px-4">
        <Image src={"/assets/logo.png"} alt="Codext" width={100} height={100} />
        <div className="flex gap-4 items-center">
          <Link href={"/#home"}>Home</Link>
          <Link href={"/#services"}>Services</Link>
          <Link href={"/#pricing"}>Pricing</Link>
          <Link href={"/#testimonials"}>Testimonials</Link>
          <Link href={"/#blog"}>Blog</Link>
          <button type="button" className="bg-primaryBlue text-white px-3 py-2.5 rounded uppercase">
            Free Trial
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

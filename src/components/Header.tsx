import React, { useState } from "react";
import logo from "../assets/img/logo.png";

export default function Header() {
  const [hamburger, setHamburger] = useState<boolean>(false);

  const handleHamburger = function () {
    setHamburger((prevHamburger) => !prevHamburger);
  };

  const hamburgerOn: string =
    "[&>span]:origin-center [&>span:first-child]:rotate-[45deg] [&>span:last-child]:-translate-y-[.25rem] [&>span:first-child]:translate-y-[.5rem] [&>span:nth-child(2)]:opacity-0 [&>span:last-child]:rotate-[-45deg]";

  return (
    <header className="relative z-10">
      <div className="container mx-auto p-4 sm:px-0 font-primary text-white">
        <div className="flex justify-between md:grid md:grid-cols-headingmd items-center [&>nav]:md:static [&>nav]:md:flex [&>nav]:md:justify-between [&>nav]:md:flex-row [&>nav]:md:bg-transparent">
          <a href="/" className="w-[38px] md:w-[76px]">
            <img src={logo} alt="logo" />
          </a>

          <button
            onClick={handleHamburger}
            className={`${
              hamburger && hamburgerOn
            } [&>span]:my-[4px] [&>span]:w-6 [&>span]:h-[2px] md:hidden [&>span]:flex [&>span]:flex-col [&>span]:duration-300 [&>span]:bg-white`}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav
            className={`${
              hamburger ? "flex" : "hidden"
            } absolute bg-primary/90 top-[3rem] w-full md:w-auto items-center flex-col gap-8 md:gap-0 py-[4rem] md:py-0`}
          >
            <ul className="md:static gap-4 lg:gap-8 flex flex-col md:flex-row md:justify-between [&>li>a]:md:block [&>li>a]:md:w-[7rem] [&>li>a]:text-white/40 [&>li>a:hover]:font-semibold [&>li>a:hover]:text-white">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <button className="border py-[.5rem] px-[1.5rem] rounded-md hover:bg-[#3a3a3af4]/50">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

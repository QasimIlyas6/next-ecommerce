'use client'
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";

const Navbar = () => {
  const links = [
    { title: `Electronic`, href: "/electronic" },
    { title: `Mens Fashion`, href: "/men" },
    { title: `Women's Fashion`, href: "/women" },
    { title: `Jewelry`, href: "/jewelry" },
  ];

  const itemsQuantity = useSelector((state) => state?.cart)
 
  return (
    <nav className="fixed px-12 top-0 left-0 right-0 z-10 bg-red-50 bg-opacity-100">
      <div className="flex items-center justify-between py-6 ">
        <div className="logo">
          <Link href="/">Ecommerence</Link>
        </div>
        <div className="links ">
          <ul className="flex items-center justify-between ">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
        <form className="group relative">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 pr-8 ring-1 ring-slate-200 shadow-sm"
            type="text"
            aria-label="Filter projects"
            placeholder="Filter products..."
          />
        </form>
        <div className="cart">
          <Link
            className=" flex items-center justify-center text-white bg-black rounded-lg px-5 py-2 font-light text-sm"
            href="/cart"
          >
            {itemsQuantity?.length}
            <CgShoppingCart className="text-white ms-2" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

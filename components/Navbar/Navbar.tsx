"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { useDispatch, useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
import {searchQuery } from "@/redux/slices/searchSlice";

const Navbar = () => {
  const links = [
    { title: `Electronic`, href: "/electronic" },
    { title: `Mens Fashion`, href: "/men" },
    { title: `Women's Fashion`, href: "/women" },
    { title: `Jewelry`, href: "/jewelry" },
  ];

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const itemsQuantity = useSelector((state) => state?.cart);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchQuery(search));
    setSearch("");;
  };

  return (
    <nav className="fixed px-12 top-0 left-0 right-0 z-10 bg-red-50 bg-opacity-100">
      <div className="flex items-center justify-between py-6 ">
        <div className="logo">
          <Link href="/">Ecommerence</Link>
        </div>
        <div className="links hidden md:block">
          <ul className="flex items-center justify-between ">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
        <form className="group relative" onSubmit={handleSearch}>
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="absolute right-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-red-100"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            />
          </svg>
          <input
            className="focus:ring-2 focus:ring-red-100 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-4 pr-8 ring-1 ring-slate-200 shadow-sm"
            type="text"
            placeholder="Filter products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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

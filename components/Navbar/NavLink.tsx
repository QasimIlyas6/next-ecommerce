import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  title: string;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`mx-2 font-light text-sm ${
        !isActive ? "font-bold" : "font-semibold"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;

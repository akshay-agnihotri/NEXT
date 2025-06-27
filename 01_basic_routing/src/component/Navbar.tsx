"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="px-[2rem] my-[16px]">
      <ul className="flex justify-between content-center">
        <li>
          <h1 className="text-2xl font-medium">LOGO</h1>
        </li>

        <li className="flex gap-2 justify-between content-center">
          <Link href={"/"} className="text-xl">
            Home
          </Link>
          <Link href={"/dashboard"} className="text-xl">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

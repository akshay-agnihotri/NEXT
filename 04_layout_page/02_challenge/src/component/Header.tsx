"use client";

import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-[2rem] rounded-2xl bg-gradient-to-r from-blue-600 to-violet-500">
      <h2 className="font-bold text-white">Logo</h2>
      <ul className="flex gap-2">
        <li className="font-semibold text-white">
          <Link href={"/"}>HomePage</Link>
        </li>
        <li className="font-semibold text-white">
          <Link href={"/about"}>AboutPage</Link>
        </li>
        <li className="font-semibold text-white">
          <Link href={"/contact"}>ContactPage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

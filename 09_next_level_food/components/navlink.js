"use client";
import classes from "./navlink.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  return (
    <Link href={href} className={path.startsWith(href) ? classes.active : ""}>
      Browse Meals
    </Link>
  );
};

export default NavLink;

import Link from "next/link";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href={"/login"}>Login Main</Link>
      </li>
      <li>
        <Link href={"/login/loginuser"}>Login User</Link>
      </li>
      <li>
        <Link href={"/login/loginadmin"}>Login admin</Link>
      </li>
    </ul>
  );
};

export default Navbar;

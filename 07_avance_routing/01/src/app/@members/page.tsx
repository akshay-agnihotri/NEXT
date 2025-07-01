"use client";

import Link from "next/link";

const Members = () => {
  // if (2 < 5) {
  //   throw new Error("error");
  // }
  return (
    <div className="border p-[10rem] w-[30rem] ">
      Members
      <Link href="/salaries">To Salaries</Link>
    </div>
  );
};

export default Members;

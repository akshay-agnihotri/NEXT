"use client";

import Link from "next/link";

const Page1 = () => {
  return (
    <div>
      <h1>Welcome to page 1</h1>
      <Link href="/page2">navigate to page2</Link>
    </div>
  );
};

export default Page1;

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <Link href="/">
          <h1 className="text-5xl font-bold"> THE REAL LOGO</h1>
        </Link>
      </div>
      <div className="flex justify-center gap-4 ">
        <Link className="hover:text-blue-400" href="/">
          Home
        </Link>
        <Link className="hover:text-blue-400" href="/about">
          About
        </Link>
        <Link className="hover:text-blue-400" href="/about/team">
          Our Team
        </Link>
        <Link className="hover:text-blue-400" href="/code/repo">
          Code
        </Link>
      </div>
    </header>
  );
};

export default Header;

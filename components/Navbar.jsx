import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap:"20px"
      }}
    >
      <div>
        <Link href="/">Ayush Kaushik</Link>
        {/* <Link href="/"></Link> */}
        <Link href="/project">Project</Link>
        <Link href="/experience">Experience</Link>
      </div>
      <div>
        {/* <Image width="100" height="100"
          src="https://avatars.githubusercontent.com/u/110036788?v=4"
          alt="Ayush"
        /> */}
      </div>
    </div>
  );
};

export default Navbar;

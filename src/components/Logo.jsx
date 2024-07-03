import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ width = 100, height = 100, ...props }) => {
  return (
    <Link href="/" className="inline-block">
      <Image
        {...props}
        width={width}
        height={height}
        src="/assets/logo/Logo.svg"
        alt="Ananta"
      />
    </Link>
  );
};

export default Logo;

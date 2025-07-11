import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo_sunfil1.png"}
        alt="logo sunfil1"
        width={278.18182373046875}
        height={144}
        unoptimized
      />
    </Link>
  );
};

export default HeaderLogo;

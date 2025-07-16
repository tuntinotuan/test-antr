import Link from "next/link";
import React from "react";

type ButtonQuantityIconProps = {
  quantity?: number;
  href?: string;
  normalIcon: React.ReactNode;
  activeIcon: React.ReactNode;
};

const ButtonQuantityIcon = ({
  quantity = 0,
  href,
  normalIcon,
  activeIcon,
}: ButtonQuantityIconProps) => {
  return (
    <Link href={href || ""} className="relative cursor-pointer">
      <span
        className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-white text-xs transition-all z-20 ${
          quantity > 0 ? "bg-green-600" : ""
        } ${quantity > 9 ? "w-5 h-5" : "w-4 h-4 "} ${
          quantity > 99 ? "text-[10px]" : ""
        }`}
      >
        {quantity < 100 ? quantity : "99+"}
      </span>
      {quantity > 0 ? activeIcon : normalIcon}
    </Link>
  );
};

export default ButtonQuantityIcon;

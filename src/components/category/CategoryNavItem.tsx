import Image from "next/image";
import React from "react";
import ArrowRightIcon from "../icons/arrow/ArrowRightIcon";

type CategoryNavItemProps = {
  src: string;
  alt: string;
  title: string;
  currentTextHover?: string;
  onMouseEnter?: () => void;
};

const CategoryNavItem = ({
  src,
  alt,
  title,
  currentTextHover,
  onMouseEnter,
}: CategoryNavItemProps) => {
  const active = title === currentTextHover;
  return (
    <div
      className={`flex items-center justify-between py-3 px-4 transition-all cursor-pointer border-2 border-transparent ${
        active ? "border-l-[#0D57C6] bg-[#F4F6F8]" : "bg-white"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <div className="flex items-center gap-2">
        <Image src={src} alt={alt} width={40} height={40} unoptimized></Image>
        <p>{title}</p>
      </div>
      <ArrowRightIcon></ArrowRightIcon>
    </div>
  );
};

export default CategoryNavItem;

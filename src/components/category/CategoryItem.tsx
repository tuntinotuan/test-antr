import Image from "next/image";
import React from "react";

type CategoryItemProps = {
  title: string;
  src: string;
  alt: string;
};

const CategoryItem = ({ title, src, alt }: CategoryItemProps) => {
  return (
    <div className="max-13in:w-[316px] w-[342px] h-[94px] flex items-center gap-4 hover:shadow-md bg-white py-3 px-4 rounded-xl cursor-pointer transition-all">
      <Image src={src} alt={alt} width={70} height={70} unoptimized></Image>
      <p>{title}</p>
    </div>
  );
};

export default CategoryItem;

import Image from "next/image";
import React from "react";

type CartItemProps = {
  src: string;
  alt: string;
  title: string;
  price: string;
};

const CartItem = ({ src, alt, title, price }: CartItemProps) => {
  return (
    <div className="flex items-center w-full gap-2 hover:bg-gray-50 border border-gray-50 cursor-pointer transition-all rounded p-2">
      <Image
        src={src}
        alt={alt}
        className="rounded"
        width={60}
        height={60}
        unoptimized
      ></Image>
      <div className="flex flex-col gap-2">
        <p className="truncate max-w-[200px]">{title}</p>
        <span className="font-semibold text-lg text-[#B71D18]">{price}</span>
      </div>
    </div>
  );
};

export default CartItem;

import Image from "next/image";
import React from "react";

type ProductImageProps = {
  src: string;
  alt: string;
};

const ProductImage = ({ src, alt }: ProductImageProps) => {
  return (
    <div className="p-2 cursor-pointer">
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        className="w-full h-[200px]"
        unoptimized
      ></Image>
    </div>
  );
};

export default ProductImage;

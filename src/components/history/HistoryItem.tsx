import { convertNumberToComma } from "@/utils/process.number";
import Image from "next/image";
import React from "react";

type HistoryItemProps = {
  src: string;
  alt: string;
  title: string;
  price: number;
};

const HistoryItem = ({ src, alt, title, price }: HistoryItemProps) => {
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
        <p className="font-bold truncate max-w-[200px]">{title}</p>
        <span className="text-green-600 text-xl font-semibold">
          ₫{convertNumberToComma(price)}
        </span>
      </div>
    </div>
  );
};

export default HistoryItem;

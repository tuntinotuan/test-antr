import React from "react";
import ArrowUpIcon from "../icons/arrow/ArrowUpIcon";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const ButtonScrollToTop = () => {
  const direction = useScrollDirection();
  return (
    <div
      className={`group fixed bottom-[10%] right-[2%] flex items-center justify-center w-10 h-10 rounded-full text-blue800 border-1 border-blue800 hover:bg-white hover:shadow-md z-20 cursor-pointer transition-all ${
        direction === "down" ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpIcon fontSize="medium" className="group-hover:animate-bounce" />
    </div>
  );
};

export default ButtonScrollToTop;

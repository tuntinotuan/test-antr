import React from "react";
import TickIcon from "../icons/TickIcon";

type ButtonFilterProps = {
  children: React.ReactNode;
  currentBtnActive: string;
  onClick: () => void;
};

const ButtonFilter = ({
  children,
  currentBtnActive,
  onClick,
}: ButtonFilterProps) => {
  const active = currentBtnActive === children;
  return (
    <div
      className={`relative bg-white rounded-lg border py-2 px-4 cursor-pointer overflow-hidden transition-all ${
        active
          ? "border-blue500 text-blue500 cursor-wait"
          : "border-transparent"
      }`}
      onClick={active ? () => {} : onClick}
    >
      <p className="font-semibold">{children}</p>
      <div
        className={`absolute -top-[12%] -right-[14%] w-10 h-4 bg-blue500 rotate-45 transition-all ${
          active ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <TickIcon
        className={`absolute top-[2px] right-[2px] ${
          active ? "opacity-100" : "opacity-0"
        }`}
      ></TickIcon>
    </div>
  );
};

export default ButtonFilter;

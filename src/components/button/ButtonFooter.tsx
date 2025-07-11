import React from "react";

type ButtonFooterProps = {
  icon: React.ReactNode;
  smallText: string;
  largerText: string;
  className?: string;
};

const ButtonFooter = ({
  icon,
  smallText,
  largerText,
  className,
}: ButtonFooterProps) => {
  return (
    <button
      className={`w-[230px] flex items-center gap-4 text-white rounded-xl px-5 py-3 my-3 hover:brightness-75 transition-all ${className}`}
    >
      {icon}
      <div className="flex flex-col shrink-0 items-start">
        <p>{smallText}</p>
        <p className="text-base font-semibold">{largerText}</p>
      </div>
    </button>
  );
};

export default ButtonFooter;

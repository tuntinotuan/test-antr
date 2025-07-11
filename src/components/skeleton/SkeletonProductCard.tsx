import React from "react";

const SkeletonProductCard = () => {
  return (
    <>
      {Array(9)
        .fill(null)
        .map((item) => (
          <div
            key={item}
            className="max-13in:w-[230px] w-[252px] h-[495px] flex flex-col gap-2 bg-gray-200 rounded-lg overflow-hidden transition-all animate-pulse"
          ></div>
        ))}
    </>
  );
};

export default SkeletonProductCard;

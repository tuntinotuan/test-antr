import React from "react";

const SkeletonProductCard = () => {
  return (
    <div className="flex items-center flex-wrap justify-center gap-3">
      {Array(8)
        .fill(null)
        .map((item) => (
          <div
            key={item}
            className="max-13in:w-[300px] w-[352px] h-[400px] flex flex-col gap-2 p-2"
          >
            <div className="w-full h-[200px] bg-gray-200 rounded-lg  transition-all animate-pulse"></div>
            <div className="w-3/4 h-[30px] bg-gray-200 rounded-lg  transition-all animate-pulse"></div>
            <div className="w-full h-[20px] bg-gray-200 rounded-lg  transition-all animate-pulse"></div>
            <div className="w-1/2 h-[30px] bg-gray-200 rounded-lg  transition-all animate-pulse"></div>
            <div className="w-full h-[40px] bg-gray-200 rounded-lg  transition-all animate-pulse"></div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonProductCard;

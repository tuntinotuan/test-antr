import Image from "next/image";
import React from "react";

const BannerTop = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/bg-blue-banner.png)`,
        height: 500,
      }}
      className="relative"
    >
      <TagLocal />
      <ContentLocal />
      <ImageLocal />
    </div>
  );
};

const TagLocal = () => {
  return (
    <div className="absolute top-10 left-0 bg-gradient-to-br from-warningLighter to-warningLight text-errDarker font-bold text-2xl uppercase rounded-tr-full rounded-br-full py-[10px] px-12">
      mới cực hot!
    </div>
  );
};
const ContentLocal = () => {
  return (
    <div className="absolute top-1/3 left-10 flex flex-col gap-5 z-10">
      <p className="text-stroke text-[80px] text-white font-bold uppercase mb-10">
        tải app nhận quà
      </p>
      <div className="flex flex-col gap-6 text-[32px] text-primaryYellow">
        <p>
          Tích điểm ngay trên app <span className="font-bold">SUNFIL1</span>
        </p>
        <p>*100K = 10 điểm</p>
      </div>
    </div>
  );
};
const ImageLocal = () => {
  return (
    <>
      <Image
        src={"/yellow-wave.png"}
        alt="yellow-wave"
        width={911.1438361139129}
        height={515.632676989493}
        className="absolute -bottom-[5%] -right-[10%] -rotate-[10deg] scale-90 z-0"
        unoptimized
      ></Image>
      <Image
        src={"/banner-engine.png"}
        alt="banner-engine"
        width={577.7699584960938}
        height={456.1413879394531}
        className="absolute bottom-0 right-[5%] z-10"
        unoptimized
      ></Image>
    </>
  );
};

export default BannerTop;

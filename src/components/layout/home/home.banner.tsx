import React from "react";
import BannerTop from "../banner/banner.top";
import BannerBottom from "../banner/banner.bottom";

const HomeBanner = () => {
  return (
    <div className="bg-blue600 rounded-xl overflow-hidden">
      <BannerTop />
      <BannerBottom />
    </div>
  );
};

export default HomeBanner;

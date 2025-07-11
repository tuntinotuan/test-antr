import ArrowForwardIcon from "@/components/icons/arrow/ArrowForwardIcon";
import MapIcon from "@/components/icons/MapIcon";
import React from "react";

const FooterDependent = () => {
  return (
    <div className="w-full bg-blue50">
      <div className="page-container flex items-center justify-between">
        <div className="flex items-center gap-4 py-9">
          <MapIcon />
          <p className="text-3xl">Xem hệ thống 88 cửa hàng trên toàn quốc</p>
        </div>
        <button className="flex items-center gap-3 text-blue600 bg-white rounded-full py-4 px-6 hover:brightness-95 transition-all">
          <p className="text-2xl">Xem ngay</p>
          <ArrowForwardIcon></ArrowForwardIcon>
        </button>
      </div>
    </div>
  );
};

export default FooterDependent;

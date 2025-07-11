import React from "react";
import SaleIcon from "../../icons/SaleIcon";
import PhoneIcon from "../../icons/PhoneIcon";
import MobileIcon from "../../icons/MobileIcon";

const HeaderSale = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#0D57C6] via-[#37CFFF] to-[#0F5ED6] text-white p-4">
      <div className="page-container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SaleIcon />
          <p>
            Nhập mã <span className="text-primaryYellow">NEWBIE</span> giảm ngay
            10% cho lần đầu mua hàng.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <p>
              Hotline: <span className="text-primaryYellow">0283 760 7607</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MobileIcon />
            <p>Tải ứng dụng</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSale;

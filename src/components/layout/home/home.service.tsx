import DeliveryIcon from "@/components/icons/service/DeliveryIcon";
import MoneyIcon from "@/components/icons/service/MoneyIcon";
import PackageIcon from "@/components/icons/service/PackageIcon";
import SupportIcon from "@/components/icons/service/SupportIcon";
import React from "react";

const HomeService = () => {
  const serviceList = [
    {
      icon: <MoneyIcon />,
      title: "Miễn phí vận chuyển",
      content: "Với hoá đơn từ 1 triệu",
    },
    {
      icon: <SupportIcon />,
      title: "Hỗ trợ 24/7",
      content: "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    },
    {
      icon: <DeliveryIcon />,
      title: "Giao hàng nhanh 2h",
      content: "Trong vòng bán kính 10km nội thành TP HCM",
    },
    {
      icon: <PackageIcon />,
      title: "30 ngày đổi trả",
      content: "Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    },
  ];
  return (
    <div className="page-container max-13in:justify-around flex items-center flex-wrap gap-8 mt-[72px]">
      {serviceList.map((item) => (
        <div
          key={item.title}
          className="!w-[320px] h-[101px] flex items-center gap-4 bg-white rounded-xl shadow-md px-3 py-6"
        >
          <div className="shrink-0">{item.icon}</div>
          <div className="flex flex-col gap-2">
            <p className="font-bold text-base">{item.title}</p>
            <p className="text-textSecondary">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeService;

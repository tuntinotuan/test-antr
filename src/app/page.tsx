"use client";

import FooterDependent from "@/components/layout/footer/footer.dependent";
import FooterLast from "@/components/layout/footer/footer.last";
import HeaderMain from "@/components/layout/header/header.main";
import HeaderSale from "@/components/layout/header/header.sale";
import HomeBanner from "@/components/layout/home/home.banner";
import HomeMenu from "@/components/layout/home/home.menu";
import HomeProduct from "@/components/layout/home/home.product";
import HomeService from "@/components/layout/home/home.service";
import NavPage from "@/components/nav/NavPage";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="">
      <HeaderSale />
      <HeaderMain />
      <HomeMenu />
      <HomeBody />
      <FooterDependent />
      <FooterLast />
    </div>
  );
}

const HomeBody = () => {
  const listNav = [
    { text: "Trang chủ", href: "/" },
    { text: "Sản phẩm", active: true },
  ];
  return (
    <div className="bg-homeBodyBg mt-4">
      <div className="page-container py-6">
        <NavPage listPage={listNav} />
        <HomeBanner />
        <HomeProduct />
        <HomeService />
      </div>
    </div>
  );
};

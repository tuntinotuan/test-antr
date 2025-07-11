import React from "react";
import ArrowRightIcon from "../icons/arrow/ArrowRightIcon";
import Link from "next/link";

type NavPageProps = {
  listPage: { text: string; href?: string; active?: boolean }[];
};

const NavPage = ({ listPage }: NavPageProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      {listPage.map((item, index) => (
        <Link
          href={item.href || ""}
          key={index}
          className="flex items-center gap-4 text-[#919EAB]"
        >
          <p
            className={`transition-all cursor-pointer hover:text-blue700 ${
              item.active ? "font-bold text-blue700" : ""
            }`}
          >
            {item.text}
          </p>
          {listPage.length - 1 !== index && <ArrowRightIcon></ArrowRightIcon>}
        </Link>
      ))}
      {/* <p className="font-bold text-blue700 cursor-pointer">Sản phẩm</p> */}
    </div>
  );
};

export default NavPage;

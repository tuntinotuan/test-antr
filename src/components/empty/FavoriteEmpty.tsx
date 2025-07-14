import Link from "next/link";
import React from "react";

const FavoriteEmpty = () => {
  return (
    <div className="h-[300px] flex flex-col gap-2 items-center justify-center mx-auto">
      <p className="font-bold text-xl">Chưa có sản phẩm yêu thích</p>
      <Link
        href={"/"}
        className="underline transition-all font-bold text-blue-600 hover:text-blue-500"
      >
        Quay về trang chủ
      </Link>
    </div>
  );
};

export default FavoriteEmpty;

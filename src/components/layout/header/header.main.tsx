import React, { useEffect, useState } from "react";
import SearchHeader from "../../search/SearchHeader";
import Image from "next/image";

const HeaderMain = () => {
  const [scrollData, setScrollData] = useState({
    scrollTop: 0,
    scrollHeight: 0,
    clientHeight: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      setScrollData({ scrollTop, scrollHeight, clientHeight });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`sticky top-0 flex items-center justify-center p-1 bg-white bg-opacity-60 backdrop-blur-sm ${
        scrollData.scrollTop > 0 ? "shadow-lg" : ""
      }`}
    >
      <SearchHeader
        placeholder="Tìm kiếm khoá học..."
        width={300}
      ></SearchHeader>
      <div className="absolute top-1 right-1">
        <Image
          src="/avatar-black-umbrella.jpg"
          alt="Avatar Icon"
          width={30}
          height={30}
          priority
          className="border border-green-300 rounded-full"
          unoptimized
        />
      </div>
    </div>
  );
};

export default HeaderMain;

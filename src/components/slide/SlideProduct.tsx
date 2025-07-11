import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../product/ProductCard";
import ArrowLeftIcon from "../icons/arrow/ArrowLeftIcon";
import ArrowRightIcon from "../icons/arrow/ArrowRightIcon";
import { slideProductLists } from "@/api/mock.api";

const SlideProduct = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="relative flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        // slidesPerView={5}
        // centeredSlides={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        {slideProductLists.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductCard imageSrc={item.image}></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom buttons */}
      <button
        ref={prevRef}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-blue100 rounded-full cursor-pointer z-10"
      >
        <ArrowLeftIcon fontSize="medium"></ArrowLeftIcon>
      </button>
      <button
        ref={nextRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 flex items-center justify-center bg-blue100 rounded-full cursor-pointer z-10"
      >
        <ArrowRightIcon fontSize="medium"></ArrowRightIcon>
      </button>
    </div>
  );
};

export default SlideProduct;

import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import CartIcon from "../icons/CartIcon";
import { useHover } from "usehooks-ts";
import CartItem from "../cart/CartItem";

const cartList = [
  {
    img: "/product-image-1.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "299,000 đ",
  },
  {
    img: "/product-image-2.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "299,000 đ",
  },
  {
    img: "/product-image-3.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "299,000 đ",
  },
  {
    img: "/product-image-4.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "299,000 đ",
  },
  {
    img: "/product-image-5.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: "299,000 đ",
  },
];

const ButtonCart = () => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();
  const isHovered = useHover(hoverRef);
  useEffect(() => {
    if (hoverRef.current) {
      setRect(hoverRef.current.getBoundingClientRect());
    }
  }, [isHovered]);
  return (
    <>
      <div ref={hoverRef}>
        <Button className={`${isHovered ? "bg-blue50" : ""} !rounded-full`}>
          <div className="relative">
            <CartIcon />
            <div className="absolute -top-1/2 -right-1/2 w-6 h-6 flex items-center justify-center  rounded-full bg-errMain text-white ">
              12
            </div>
          </div>
          <p className="shrink-0">Giỏ hàng</p>
        </Button>
        <ButtonShowCartContent
          rect={rect}
          isHovered={isHovered}
        ></ButtonShowCartContent>
      </div>
    </>
  );
};

const ButtonShowCartContent = ({
  rect,
  isHovered,
}: {
  rect: any;
  isHovered: boolean;
}) => {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  useEffect(() => {
    if (!rect) return;
    const tooltipOffset = 0; // distance from the element
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let style: React.CSSProperties = {
      position: "absolute",
    };
    const positionRight = rect.left > window.innerWidth / 2;
    style = {
      top: rect.top + scrollY + rect.height - tooltipOffset,
      left: positionRight ? rect.right : rect.left,
      minWidth: rect.width,
      transform: positionRight ? "translate(-100%, 0)" : "",
    };

    setTooltipStyle(style);
  }, [rect, isHovered]);
  return (
    <div
      className={`absolute transition-all z-50 ${
        isHovered ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ ...tooltipStyle }}
    >
      <div className="w-[320px] flex flex-col gap-1 bg-white p-4 rounded-xl border border-gray-100">
        {cartList.map((item) => (
          <CartItem
            key={item.img}
            src={item.img}
            alt={item.title}
            title={item.title}
            price={item.price}
          ></CartItem>
        ))}
        <Button className="bg-[#0154C5] text-white">Go to cart</Button>
      </div>
    </div>
  );
};

export default ButtonCart;

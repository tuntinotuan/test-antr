import React, { useEffect, useRef, useState } from "react";
import ButtonQuantityIcon from "./button.quantity.icon";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Button from "./Button";
import CartItem from "../cart/CartItem";
import { useHover } from "usehooks-ts";
import HistoryItem from "../history/HistoryItem";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import { Id, ProductTypes } from "@/types/product";
import {
  handleGetDetailsData,
  handleShowPopupDetails,
  handleUpdateClickedHistories,
} from "@/store/slices/productSlice";
const cartList = [
  {
    img: "/product-image-1.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
  },
  {
    img: "/product-image-2.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
  },
  {
    img: "/product-image-3.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
  },
  {
    img: "/product-image-4.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
  },
  {
    img: "/product-image-5.png",
    title:
      "Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)",
    price: 299000,
  },
];

const ButtonHistory = ({ quantity = 0 }: { quantity?: number }) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect>();
  const isHovered = useHover(hoverRef);
  useEffect(() => {
    if (hoverRef.current) {
      setRect(hoverRef.current.getBoundingClientRect());
    }
  }, [isHovered]);
  return (
    <div ref={hoverRef}>
      <ButtonQuantityIcon
        quantity={quantity}
        normalIcon={<AssignmentOutlinedIcon />}
        activeIcon={<AssignmentRoundedIcon />}
      ></ButtonQuantityIcon>
      <ShowHistory rect={rect} isHovered={isHovered}></ShowHistory>
    </div>
  );
};

const ShowHistory = ({
  rect,
  isHovered,
}: {
  rect: any;
  isHovered: boolean;
}) => {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const { productList, clickedHistories } = useSelector(
    (state: RootState) => state.product
  );
  const [historyData, setHistoryData] = useState<ProductTypes[]>();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!rect) return;
    const tooltipOffset = 0; // distance from the element
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    let style: React.CSSProperties = {
      position: "absolute",
    };
    // const positionRight = rect.left > window.innerWidth / 2;
    style = {
      top: rect.top + rect.height - tooltipOffset,
      left: rect.left + rect.width,
      minWidth: rect.width,
      transform: "translate(-100%, 0)",
    };

    setTooltipStyle(style);
  }, [rect, isHovered]);
  useEffect(() => {
    if (clickedHistories?.length > 0) {
      let newHistoryData: ProductTypes[] = [];
      for (let index = 0; index < clickedHistories?.length; index++) {
        const newData = productList.find(
          (item) => item.id === clickedHistories[index]
        );
        newData && newHistoryData.push(newData);
      }
      setHistoryData(newHistoryData);
    }
    console.log("historyData", historyData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedHistories]);
  const handleClickViewBtn = (id: Id) => {
    const singleData = productList.find((item) => item.id === id);
    dispatch(handleShowPopupDetails(true));
    dispatch(handleGetDetailsData(singleData));
    //
    const newHistories = clickedHistories.filter((num) => num !== id);
    dispatch(handleUpdateClickedHistories([id, ...newHistories]));
  };
  if (!historyData) return;
  return (
    <div
      className={`fixed transition-all z-50 ${
        isHovered ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      style={{ ...tooltipStyle }}
    >
      <div className="w-[320px] max-h-[350px] flex flex-col gap-1 bg-white p-2 rounded border border-gray-100 shadow-lg overflow-y-auto">
        {historyData?.map((item) => (
          <HistoryItem
            key={item.id}
            id={item.id}
            src={item.image}
            alt={item.name}
            title={item.name}
            price={item.price}
            onClick={handleClickViewBtn}
          ></HistoryItem>
        ))}
      </div>
    </div>
  );
};

export default ButtonHistory;

import React from "react";
import PopupOverlay from "../overlay/popup.overlay";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductImage from "../product/ProductImage";
import { convertNumberToComma } from "@/utils/process.number";
import CloseIcon from "../icons/CloseIcon";

const PopupViewDetails = ({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) => {
  return (
    <PopupOverlay
      show={show}
      onClick={onClose}
      width={900}
      className="bg-white"
    >
      <CloseIcon onClick={onClose} className="absolute top-3 right-3" />
      <LocalBody />
    </PopupOverlay>
  );
};

const LocalBody = () => {
  const { detailsData } = useSelector((state: RootState) => state.product);
  return (
    <div className="w-full flex gap-4">
      <div className="w-1/3 shrink-0">
        <ProductImage
          src={detailsData.image}
          alt={detailsData.name}
        ></ProductImage>
      </div>
      <div>
        <p className="text-xl font-bold">{detailsData.name}</p>
        <p className="text-gray-500 my-3">{detailsData.des}</p>
        <p className="text-green-600 text-xl font-semibold">
          ₫{convertNumberToComma(detailsData.price)}
        </p>
        <p className="underline cursor-pointer">Xem sản phẩm tương tự</p>
      </div>
    </div>
  );
};

export default PopupViewDetails;

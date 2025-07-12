import React from "react";
import PopupOverlay from "../overlay/popup.overlay";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductImage from "../product/ProductImage";

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
      <LocalBody />
    </PopupOverlay>
  );
};

const LocalBody = () => {
  const { detailsData } = useSelector((state: RootState) => state.product);

  return (
    <div className="w-full flex gap-4">
      <div className="w-1/3">
        <ProductImage
          src={detailsData.image}
          alt={detailsData.name}
        ></ProductImage>
      </div>
      <div>
        <p>{detailsData.name}</p>
        <p>{detailsData.des}</p>
        <p>{detailsData.price}</p>
        <p className="underline cursor-pointer">Xem sản phẩm tương tự</p>
      </div>
    </div>
  );
};

export default PopupViewDetails;

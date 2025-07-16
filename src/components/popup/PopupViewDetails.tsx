import React from "react";
import PopupOverlay from "../overlay/popup.overlay";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import ProductImage from "../product/ProductImage";
import { convertNumberToComma } from "@/utils/process.number";
import CloseIcon from "../icons/CloseIcon";
import { useRouter } from "next/navigation";

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
      // width={`70%`}
      className="max-md:w-[95%] w-[70%] bg-white"
    >
      <CloseIcon onClick={onClose} className="absolute top-3 right-3" />
      <LocalBody onClose={onClose} />
    </PopupOverlay>
  );
};

const LocalBody = ({ onClose }: { onClose: any }) => {
  const { detailsData } = useSelector((state: RootState) => state.product);
  const router = useRouter();
  const handleClickSuggestion = (value: string) => {
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    router.push(`?${params.toString()}`);
    onClose();
  };
  return (
    <div className="max-md:flex-col w-full flex gap-4">
      <div className="max-md:w-full w-1/3 shrink-0">
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
        <p
          className="underline cursor-pointer"
          onClick={() => handleClickSuggestion("toeic")}
        >
          Xem sản phẩm tương tự
        </p>
      </div>
    </div>
  );
};

export default PopupViewDetails;

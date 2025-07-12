import React from "react";
import PopupOverlay from "../overlay/popup.overlay";

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
      This is popup view product details
    </PopupOverlay>
  );
};

export default PopupViewDetails;

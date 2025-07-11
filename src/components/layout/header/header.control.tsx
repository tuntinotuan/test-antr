import React from "react";
import Button from "../../button/Button";
import VietnamIcon from "../../icons/VietnamIcon";
import UserIcon from "../../icons/UserIcon";
import ButtonCart from "@/components/button/ButtonCart";

const HeaderControl = () => {
  return (
    <div className="flex items-center gap-8">
      <Button>
        <VietnamIcon />
        <p className="shrink-0">VI</p>
      </Button>
      <ButtonCart />
      <Button>
        <UserIcon />
        <p className="shrink-0">Tài khoản</p>
      </Button>
    </div>
  );
};

export default HeaderControl;

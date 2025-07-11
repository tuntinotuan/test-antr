import React, { useState } from "react";

type FilterCheckItemProps = {
  checked: boolean;
  title: string;
  quantity: number;
};

const FilterCheckItem = ({
  checked,
  title,
  quantity,
}: FilterCheckItemProps) => {
  const [currentChecked, setCurrentChecked] = useState<boolean>(checked);
  const handleOnChange = (e: any) => {
    setCurrentChecked(e.target.checked);
  };
  return (
    <div className="flex items-center gap-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          className="w-5 h-5 accent-blue600"
          checked={currentChecked}
          onChange={handleOnChange}
        />
      </label>
      <p className="font-medium">{title}</p>
      <span className="text-textSecondary">({quantity})</span>
    </div>
  );
};

export default FilterCheckItem;

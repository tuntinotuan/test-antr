import React from "react";

const TickIcon = ({ ...rest }) => {
  return (
    <div {...rest}>
      <svg
        width="8"
        height="7"
        viewBox="0 0 8 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.24663 1.26756C7.40264 1.40377 7.41871 1.64066 7.2825 1.79668L3.35393 6.29668C3.28271 6.37825 3.17972 6.42505 3.07143 6.42505C2.96315 6.42505 2.86015 6.37825 2.78894 6.29668L1.21751 4.49668C1.08131 4.34066 1.09737 4.10377 1.25338 3.96756C1.4094 3.83135 1.64629 3.84742 1.7825 4.00343L3.07143 5.47985L6.71751 1.30343C6.85372 1.14742 7.09061 1.13135 7.24663 1.26756Z"
          fill="white"
          stroke="white"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default TickIcon;

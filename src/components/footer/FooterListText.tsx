import React from "react";

type FooterListTextProps = { title: string };

const FooterListText = ({ title }: FooterListTextProps) => {
  return (
    <h2 className="font-bold text-xl text-blue800 mb-8 uppercase">{title}</h2>
  );
};

export default FooterListText;

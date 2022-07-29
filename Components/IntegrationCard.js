import React from "react";
import Image from "next/image";

const IntegrationCard = ({logo,title,desc}) => {
  return (
    <div className="mt-10">
      <Image src={logo} height={50} width={50}></Image>
      <h3 className="text-xl font-bold text-left mt-2">{title}</h3>
      <p className="text-neutral">{desc}</p>
    </div>
  );
};

export default IntegrationCard;

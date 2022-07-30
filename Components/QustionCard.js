import React from "react";
import Image from "next/image";

const QustionCard = ({logo,title,desc}) => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center gap-5">
        <Image src={logo} width={40} height={40}></Image>
        <h1 className="text-xl font-semibold text-accent">
        {title}
        </h1>
      </div>
      <p className="text-neutral text-left mt-4">
        {desc}
      </p>
    </div>
  );
};

export default QustionCard;

import React from "react";
import Image from "next/image";

const FeaturesCard = ({logo,title,desc}) => {
  return (
    <div className="flex flex-col justify-center items-center border-primary">
      <div className="">
        <Image src={logo} width={50} height={50}></Image>
      </div>
      <h3 className="font-semibold text-center text-xl mt-3">{title}</h3>
      <p className="text-center text-neutral mt-5">{desc}
      </p>
    </div>
  );
};

export default FeaturesCard;

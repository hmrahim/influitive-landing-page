import Image from "next/image";
import React from "react";

const BluBanner = () => {
  return (
    <div className="w-full bg-secondary flex justify-between">
      <div className="md:ml-20" style={{marginBottom:"-55px"}}>
        <Image src="/images/circle-2.svg" width={200} height={200}></Image>
      </div>
      <div className="md:mr-10 z-0" style={{marginTop:"-70px"}}>
        <Image src="/images/circle-1.svg" width={200} height={200}></Image>
      </div>
    </div>
  );
};

export default BluBanner;

import Image from "next/image";
import React from "react";

const SetupCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
      <div  className="flex flex-col justify-center items-center border-r-8  p-3">
        <Image src="/images/download.svg" width={50} height={50}></Image>
        <span className="text-center bg-green-200 text-primary mt-5  px-2 rounded-3xl">
          Step-1
        </span>
        <h3 className="text-center text-accent text-xl mt-3 font-bold">
          Dawonload the app
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center border-r-8  p-3">
        <Image src="/images/invite.svg" width={50} height={50}></Image>
        <span className="text-center bg-green-200 text-primary mt-5  px-2 rounded-3xl">
          Step-2
        </span>
        <h3 className="text-center text-accent text-xl mt-3 font-bold">
        Invite teammates
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center border-r-8  p-3">
        <Image src="/images/workspace.svg" width={50} height={50}></Image>
        <span className="text-center bg-green-200 text-primary mt-5  px-2 rounded-3xl">
          Step-3
        </span>
        <h3 className="text-center text-accent text-xl mt-3 font-bold">
        Create workspace
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center border-r-8  p-3">
        <Image src="/images/performance.svg" width={50} height={50}></Image>
        <span className="text-center bg-green-200 text-primary mt-5  px-2 rounded-3xl">
          Step-4
        </span>
        <h3 className="text-center text-accent text-xl mt-3 font-bold">
        rack performance
        </h3>
      </div>
    </div>
  );
};

export default SetupCard;

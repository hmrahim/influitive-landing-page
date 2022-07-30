import Image from "next/image";
import React from "react";
import IntegrationCard from "./IntegrationCard";

const Business = () => {
  return (
    <div className="flex flex-col justify-center items-center  md:flex-row lg:flex-row w-ful md:w-11/12 lg:w-11/12 mx-auto gap-24 mt-40 ">
      <div className="flex-1">
        <h1 className="text-4xl text-justify text-accent font-bold">
          View Your Business Growth use App
        </h1>
        <p className="text-neutral text-left mt-6">
          nthusiastically administrate robust initiatives quickly unleash
          collaborative with client-focused paradigms. Re-engineer granular
          innovation rather than best-of-breed processes.
        </p>
        <div className="flex gap-5">
          <IntegrationCard
            logo="/images/human_hand.svg"
            title="Humans on hand "
            desc="bjectively productize exceptional via customized."
          />
          <IntegrationCard />
          <IntegrationCard
            logo="/images/privacy.svg"
            title="Strong privacy"
            desc="Interactively integrate extensible 
            users maximizing resource.
            "
          />
          <IntegrationCard />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-14 justify-center items-center">
        <Image src="/images/mobile-3.png" height={600} width={600}></Image>
      </div>
    </div>
  );
};

export default Business;

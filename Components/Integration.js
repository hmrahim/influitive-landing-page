import React from "react";
import Image from "next/image";
import IntegrationCard from "./IntegrationCard";

const Integration = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto gap-24 mt-40 ">
      <div className="flex-1 flex flex-col gap-14 justify-center items-center">
        <h4 className="text-xl font-bold text-justify text-accent">
        We deliver best quality app for 

your business
        </h4>
        <Image src="/images/mobile_2.svg" height={400} width={600}></Image>
      </div>
      <div className="flex-1">
        <h1 className="text-4xl  text-accent font-bold">
          Experience your Product with Integration
        </h1>
        <p className="text-neutral text-left mt-6">
          Conveniently drive stand-alone total linkage for process-centric
          content enthusiastically administrate. Dramatically grow high
          standards in customer service for applications.
        </p>
        <div className="flex gap-5">
          <IntegrationCard
            logo="/images/customer.svg"
            title="Customer analysisa "
            desc="bjectively productize 
            exceptional via customized."
          />
          <IntegrationCard />
          <IntegrationCard
            logo="/images/real_time.svg"
            title="Real time metrics"
            desc="bjectively productize exceptional via customized."
          />
          <IntegrationCard />
        </div>
      </div>
    </div>
  );
};

export default Integration;

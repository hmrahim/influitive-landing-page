import React from "react";
import Image from "next/image";
const Landing = () => {
  return (
    <div className="hero min-h-screen bg-base-200 w-full md:w-11/12 lg:w-11/12 mx-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl flex-1" /> */}
        <Image
          src="/images/mobile.svg"
          width="600"
          height="500"
          className="max-w-sm rounded-lg shadow-2xl flex-1"
        ></Image>
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-primary">
            Build Better App with Influitive Software
          </h1>
          <p className="py-6 text-neutral">
            roactively coordinate quality quality vectors vis-avis supply
            chains. Quickly engage client-centric web services.
          </p>
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Landing;

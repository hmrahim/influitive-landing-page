import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-ful px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto">
      <div className="w-full md:w-3/6 lg:w-3/6 mx-auto">
        <h4 className="text-primary font-bold text-xl text-center">
          Testimonial
        </h4>
        <h1 className="text-4xl font-bold mt-3 text-center text-accent">
          What They Say About Us
        </h1>
        <p className="text-center text-neutral mt-3">
          Uniquely promote adaptive quality vectors rather than stand-alone
          e-markets pontificate alternative architectures with accurate schemas.
        </p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-10 justify-between mt-20">
        <div className="flex flex-col  gap-10">
          <div className="flex  items-center gap-4">
            <div className="avatar">
              <div className="w-10 h-10 rounded">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-accent">
                Mr. Rupan Oberio
              </h4>
              <p className="text-neutral">Founder and CEO at Amaara Herbs</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-accent">
              The Best Template You Got to Have it!
            </h4>
            <p className="text-neutral">
              Globally network long-term high-impact schemas vis-a-vis
              distinctive e-commerce cross-media infrastructures.
            </p>
          </div>
        </div>
        <div className="flex flex-col  gap-10">
        
          <div className="flex  items-center gap-4">
            <div className="avatar">
              <div className="w-10 h-10 rounded">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-xl text-accent">
                Mr. Rupan Oberio
              </h4>
              <p className="text-neutral">Founder and CEO at Amaara Herbs</p>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-accent">
              The Best Template You Got to Have it!
            </h4>
            <p className="text-neutral">
              Globally network long-term high-impact schemas vis-a-vis
              distinctive e-commerce cross-media infrastructures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

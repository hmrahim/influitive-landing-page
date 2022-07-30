import React from "react";
import QustionCard from "./QustionCard";

const Faq = () => {
  return (
    <div className=" w-ful md:w-11/12 lg:w-11/12 mx-auto gap-24 my-40  bg-base-100 ">
      <div className="w-full md:w-2/4 lg:2/4 mx-auto">
        <h4 className="text-xl text-primary text-center mt-4 font-bold">FAQ</h4>
        <h1 className="text-center text-4xl font-bold text-accent my-4">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-neutral ">
          Efficiently network cross-unit paradigms for premier technologies
          scale 24/7 paradigms for process-centric data interoperable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 lg:grid-cols-2">
        <QustionCard
          logo="/images/license.svg"
          title="Which license do I need to use an item in a commercial?"
          desc="Collaboratively iterate high-payoff content via high standards in technology. economically sound methodologies via corporate."
        />
        <QustionCard
          logo="/images/payment.svg"
          title="What payment methods do you accept?"
          desc="Globally e-enable plug-and-play imperatives and seamless emarkets. Intrinsicly negotiate resource maximizing e-tailers after 
          just in time."
        />

        <QustionCard
          logo="/images/to-do.svg"
          title="How does the free trial work and what is included?"
          desc="Economically sound supply chains through distributed strategic 
          theme areas. Appropriately cultivate innovative web-readiness 
          whereas."
        />

        <QustionCard
          logo="/images/mic.svg"
          title="What happens after my free trial ends?"
          desc="Progressively pontificate quality vectors without resource 
          maximizing bandwidth. Conveniently maximize turnkey testing 
          procedures for compelling."
        />
        <QustionCard
          logo="/images/video.svg"
          title="Why do you ask for a video introduction?"
          desc="Maximizing e-enable imperatives and seamless e-markets. 
          Intrinsicly negotiate resource quality vectors without after just in 
          time."
        />
        <QustionCard
          logo="/images/remote_worker.svg"
          title="Can I work from anywhere?"
          desc="Conveniently maximize turnkey sound supply chains through 
          distributed strategic theme areas. Appropriately cultivate 
          innovative web-readiness whereas."
        />
      </div>
    </div>
  );
};

export default Faq;

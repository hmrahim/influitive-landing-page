import React from "react";
import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <div className="w-full md:w-11/12 lg:w-11/12 mx-auto mt-11">
      <div className="w-full md:w-3/6 lg:w-3/6 mx-auto">
        <h4 className="text-xl font-semibold text-primary text-center">
          Build Quality
        </h4>
        <h1 className="text-4xl text-accent text-center font-bold mt-3">
          Our Special Features
        </h1>
        <p className="text-center text-neutral mt-5 leading-8">
          uthoritatively underwhelm excellent methodologies via premium
          expertise competitive than open-source imperatives disseminate
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-24 gap-28">
        <FeaturesCard
          logo="/images/relaibility.svg"
          title="Reliability"
          desc="Assum suavitate ea vel, vero erat doming cu cum. Zril ornatus sea cu. Pro ex integre pertinax. Cu cum harum paulo legendos, mei et quod enim mnesarchum, habeo affert laoreet sea ei."
        />
        <FeaturesCard
        logo="/images/communication.svg"
        title="Communication"
        desc="Ne nam phaedrum consequat, adhuc 
        aliquid ea pri, eum eligendi incorrupte 
        referrentur in. Vix ad senserit salutandi 
        argumentum. Ei eam definiebas 
        reformidans, exerci persecuti no ius"
        
        />
        <FeaturesCard
        logo="/images/Quality.svg"
        title="Quality First"
        desc="Eos tota dicunt democritum no. Has 
        natum gubergren ne. Est viris soleat 
        sadipscing cu. Legere epicuri insolens 
        eu nec, dicit virtute urbanitas id nam, 
        qui in habeo semper eligendi.
        "
         />
      </div>
    </div>
  );
};

export default Features;

import React from "react";

const AffortlessProcess = () => {
  return (
    <div className="w-full bg-secondary mt-10 py-10">
      <div className="w-full md:w-2/3 lg:w-2/3 mx-auto block" >
        <h4 className="text-xl font-bold text-orange-500 text-center mt-10">
          Instant Setup
        </h4>
        <h1 className="text-5xl mt-3 text-center text-base-100 font-bold">
          Simple & Effortless Process
        </h1>
        <p className="text-center text-base-100 text-center mt-4">
          Authoritatively underwhelm excellent methodologies via premium
          expertise competitive than open-source imperatives disseminate.
        </p>
      </div>

      <div style={{marginBottom:"-150px"}} className="bg-base-100 w-3/4 mx-auto rounded-2xl shadow-lg flex justify-center  flex-col md:flex-row lg:flex-row justify-center p-5 mt-10   ">
        <div className="flex-1">
          <ul>
            <li className="text-xl mt-3 ">Unlimited domains</li>
            <li className="text-xl mt-3 ">Unlimited notifications</li>
            <li className="text-xl mt-3 ">10,000 unique visitors</li>
            <li className="text-xl mt-3 ">Conversion analytics</li>
            <li className="text-xl mt-3 ">Conversion analytics</li>
            <li className="text-xl mt-3 ">Live chat support</li>
            <li className="text-xl mt-3 ">Recent activity notification</li>
            <li className="text-xl mt-3 ">Live visitor count notification</li>
            <li className="text-xl mt-3 ">Send data to analytics tools</li>
          </ul>
        </div>
        <div className="flex items-center flex-col flex-1 ">
          <div className=" mt-5 rounded-3xl">
            <button className="bg-secondary p-1 px-2 rounded-tl-xl rounded-bl-xl text-base-100">Monthly</button>
            <button className="bg-gray-400 p-1 px-3 rounded-tr-xl rounded-br-xl text-base-100">Yearly</button>
          </div>
          <h1 className="text-2xl text-accent font-bold mt-3">Pro Monthly</h1>
          <p className="text-center text-neutral mt-4">
            Professionally integrate principle-centered intellectual capital
            whereas equity.
          </p>

          <h1 className="text-4xl font-bold mt-10"> $49 <span className="text-xl font-normal text-neutral"> / Month</span> </h1>

          <button className="btn btn-primary mt-12">Start 14- Days Trial</button>
        </div>
      </div>
    </div>
  );
};

export default AffortlessProcess;

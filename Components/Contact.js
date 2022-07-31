import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row gap-20 w-ful px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto mt-20">
      <div>
        <div>
          <h4 className="text-xl text-primary font-bold">Quick Support</h4>
          <h1 className="text-4xl font-bold text-accent mt-3">
            Get in Touch Today!
          </h1>
          <p className="text-neutral mt-5">
            Proactively deliver seamless core competencies with scalable.
            Completely fabricate transparent paradigms.
          </p>
        </div>
        <div className="flex gap-10 mt-10">
          <div className="mt-10 flex flex-col items-center">
            <Image src="/images/phone.svg" height="30 mt-3" width={30}></Image>
            <h2 className="text-2xl mt-4 font-bold text-accent">Call Us</h2>
            <p className="text-neutral mt-3 text-center">
              Questions about our product or pricing? Call for support
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <Image
              src="/images/communication.svg"
              height="30 mt-3"
              width={30}
            ></Image>
            <h2 className="text-2xl mt-4 font-bold text-accent">Chat Us</h2>
            <p className="text-neutral mt-3 text-center">
              Questions about our product or pricing? Call for support
            </p>
          </div>
        </div>
      </div>
      <div style={{marginBottom:"-80px"}}  className="z-10 bg-base-100 rounded-xl">
        <h1 className="text-2xl font-bold text-accent">
          Fill out the form and we'll be in touch as soon as possible.
        </h1>
        <form
          action=""
          className="p-5"
        >
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-10 gap-5">
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">What is your name?</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Company website</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Work Email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              class="input input-bordered w-full "
            />
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Budget</span>
            </label>
            <select class="select select-bordered w-full ">
              <option disabled selected>
                Select one?
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
          </div>
          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Country</span>
            </label>
            <select class="select select-bordered w-full ">
              <option disabled selected>
                Select one?
              </option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>Pakistan</option>
            </select>
          </div>
         

          </div>
          <div className="mt-5">
            <button className="btn btn-primary w-full">Get Started</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

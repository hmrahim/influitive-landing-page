import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-ful px-4 md:px-0 lg:px-0 md:w-5/6 lg:w-5/6 mx-auto">
      <div className="flex gap-16 flex-col md:flex-row lg:flex-row">
        <div>
          <div className="mt-10">
            <Image src="/images/logo.svg" width={150} height={70}></Image>
            <p className="text-neutral">
              Our latest news, articles, and resources, we will sent to your
              inbox weekly
            </p>
          </div>
          <div className="mt-10 flex gap-2">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-bold text-accent mt-5">
              10/10 Overall rating
            </h4>
            <div class="rating rating-sm">
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-6"
                class="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
          <div className="mt-10">
            <h1 className="text-xl font-bold ">Primary Pages</h1>
            <ul className="mt-10">
              <li className="text-[16px]">Home</li>
              <li className="text-[16px]">About us </li>
              <li className="text-[16px]">Services</li>
              <li className="text-[16px]">Career</li>
              <li className="text-[16px]">Integrations</li>
              <li className="text-[16px]">Integration Single</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-xl font-bold ">Pages</h1>
            <ul className="mt-10">
              <li className="text-[16px]">Pricing</li>
              <li className="text-[16px]">Blog </li>
              <li className="text-[16px]">Blog Details</li>
              <li className="text-[16px]">Contact</li>
              <li className="text-[16px]">Career Single</li>
              <li className="text-[16px]">Services Single</li>
            </ul>
          </div>
          <div className="mt-10">
            <h1 className="text-xl font-bold ">Template</h1>
            <ul className="mt-10">
              <li className="text-[16px]">Contact</li>
              <li className="text-[16px]">Support </li>
              <li className="text-[16px]">Support Single</li>
              <li className="text-[16px]">Our Team</li>
              <li className="text-[16px]">Customer Review</li>
              <li className="text-[16px]">Career Single</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { useNavigate } from "react-router";

const SellerRegistrationScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4.5 mt-7 xl:px-16 xl:mt-10">
        <div className=" border-[1px] border-black px-3 mb-7 xl:border-[1px] xl:px-0 xl:flex xl:items-start xl:mb-10">
          <div className="pt-6 xl:px-8 xl:pt-10 xl:w-[51%]">
            <h1 className=" text-2xl xl:text-[42px] font-semibold text-black leading-7 p-0 tracking-wide">
              Register and Start Selling
            </h1>
            <p className=" leading-5 text-sm mt-2 font-medium xl:mt-4 xl:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div
              onClick={() => navigate("/seller/individual")}
              className=" border-[1px] border-black rounded-lg mt-5 flex items-start justify-between gap-x-3 px-3 py-3 xl:px-6 xl:py-4 xl:items-center xl:gap-x-6">
              <div>
                <img
                  src={require("../assets/new design/businessman_img.png")}
                  alt=""
                  className="w-36 xl:w-32"
                />
              </div>
              <div>
                <h1 className=" text-lg font-semibold text-black xl:text-2xl">
                  Individual
                </h1>
                <p className=" leading-4 text-xs font-medium xl:text-base xl:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div
              onClick={() => navigate("/seller/store")}
              className=" border-[1px] border-black rounded-lg mt-5 mb-10 flex items-start justify-between gap-x-3 px-3 py-3 xl:px-6 xl:py-4 xl:items-center xl:gap-x-6">
              <div>
                <img
                  src={require("../assets/new design/store_img.png")}
                  alt=""
                  className="w-36 xl:w-32"
                />
              </div>
              <div>
                <h1 className=" text-lg font-semibold text-black xl:text-2xl">
                  Store Owner
                </h1>
                <p className=" leading-4 text-xs font-medium xl:text-base xl:mt-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex">
            <img
              src={require("../assets/new design/side_img.png")}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistrationScreen;

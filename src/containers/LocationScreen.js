import React from "react";
import { useNavigate } from "react-router";
import {
  AccessTimeOutlined,
  ArrowBackIos,
  ArrowForwardIos,
  LocationOnOutlined,
  MailOutline,
  Star,
} from "@mui/icons-material";
import DropDown from "../components/DropDown";
import { useState } from "react";
import PreviewCard from "../components/Seller/PreviewCard";

const LocationScreen = () => {
  const navigate = useNavigate();
  const data = [
    {
      title: "Location",
      dropDown: true,
    },
    {
      title: "Select from saved address",
      dropDown: true,
    },
    {
      title: "Address",
      dropDown: false,
    },
    {
      title: "Landmark",
      dropDown: false,
    },
    {
      title: "State",
      dropDown: false,
    },
    {
      title: "City",
      dropDown: false,
    },
    {
      title: "Pincode",
      dropDown: false,
    },
    {
      title: "Available  Pickup Time Slot",
      dropDown: true,
    },
  ];

  const [info, setInfo] = useState({});

  return (
    <div>
      <div className="px-4.5 mt-7 xl:px-16 xl:mt-10">
        <div className=" border-[1px] border-black px-3 mb-7 xl:border-[2px] xl:px-0 xl:flex xl:items-start xl:mb-10">
          <div className=" xl:w-[51%] xl:px-8 ">
            <div className=" flex items-start mt-7 gap-x-3 ">
              <div>
                <img
                  src={require("../assets/new design/Vector.png")}
                  alt=""
                  className="w-9 xl:w-12"
                />
              </div>
              <h1 className=" text-2xl xl:text-4xl font-semibold text-black leading-7 p-0">
                What are you selling today?
              </h1>
            </div>
            <div className="xl:h-[55vh] xl:overflow-y-auto xl:pr-7 xl:no-scrollbar xl:no-scrollbar">
              <div className="mt-6 border-b-[1px] border-black pb-2.5">
                <h1 className=" text-[21px] xl:text-2xl font-semibold text-black">
                  Location & Shipping
                </h1>
              </div>
              <div className="mt-5">
                {data.map((e) => (
                  <div className="mt-5">
                    <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                      {e.title}
                    </h1>
                    {e.dropDown ? (
                      <DropDown setInfo={setInfo} info={info} />
                    ) : (
                      <input
                        type="text"
                        className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                      />
                    )}
                  </div>
                ))}
                <div className=" flex items-center gap-2 mt-5 mb-7 xl:hidden">
                  <button
                    onClick={() => navigate("/sellnow/listing/details")}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold">
                    <ArrowBackIos color="#000" />
                  </button>
                  <button className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold">
                    Save
                  </button>
                  <button
                    onClick={() => navigate("/sellnow/listing/preview")}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold">
                    <ArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
            <div className=" xl:flex items-center justify-between gap-2 mt-5 mb-7 hidden">
              <button
                onClick={() => navigate("/sellnow/listing/details")}
                className="text-[14px] py-3 px-10 rounded-[4px] bg-[#fff] text-black border-[1px] border-sa-border-black font-semibold">
                Previous
              </button>
              <div className="space-x-3">
                <button
                  // onClick={() => productDetailHandler()}
                  className="text-[14px] py-3 px-10 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold">
                  Save
                </button>
                <button
                  onClick={() => navigate("/sellnow/listing/preview")}
                  className="text-[14px] py-3 px-10 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold">
                  Next
                </button>
              </div>
            </div>
          </div>

          <PreviewCard info={info} />
        </div>
      </div>
    </div>
  );
};

export default LocationScreen;

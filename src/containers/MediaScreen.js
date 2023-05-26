import React, { useState } from "react";
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
import PreviewCard from "../components/Seller/PreviewCard";
import { useDispatch, useSelector } from "react-redux";
import { saveProductDetails } from "../redux/actions/product";

const MediaScreen = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
});

  const dispatch = useDispatch();
  const productDetailHandler = () => {
    dispatch(saveProductDetails(info));
    navigate("/sellnow/listing/details");
  };

  return (
    <div>
      <div className="px-4.5 mt-7 md:px-[4vw] md:mt-10">
        <div className="border-[1px] border-black pl-3 max-[768px]:pr-3 mb-7 xl:border-[2px] xl:px-0 md:flex md:items-start md:mb-10">
          <div className="md:w-[51%] md:px-[2vw] lg:w-[51%]">
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
            <div className="4md:h-[40vh] 4md:overflow-y-auto 4md:pr-7 xl:h-[50vh] xl:overflow-y-auto xl:pr-7 md:h-[60vh] md:overflow-y-auto md:pr-7">
              <div className="mt-6 border-b-[1px] border-black pb-2.5">
                <h1 className=" text-[21px] xl:text-2xl font-semibold text-black">
                  Media
                </h1>
              </div>
              <div className="mt-6">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Photos
                  </h1>
                  <p className="mt-1">Please populate each of these sections with at least one photo. Quality photos boost views, prices, and buyer confidence.</p>
                  <div className = "w-full mt-4 py-4 border-[1px] border-dashed border-black pl-2" style = {{background: "#FFFCF8"}}>
                    <h1 className = "text-center" style = {{color: "#005C51"}}>Photos Pool</h1>
                  <label
                    for="file-upload"
                    className="w-32 h-28 outline-none  mt-2 text-center text-[0.6vw] px-2 font-bold flex items-center justify-center border-[1px] border-black rounded cursor-pointer"
                  >
                    Upload Photos
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      className="focus:outline-none"
                    />
                  </label>
                  </div>
                </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
                <div className=" flex items-center gap-2 mt-5 mb-7 xl:hidden">
                  <button
                    onClick={() => navigate("/sellnow/listing/general")}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold"
                  >
                    <ArrowBackIos color="#000" />
                  </button>
                  <button
                    onClick={() => productDetailHandler()}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => productDetailHandler()}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold"
                  >
                    <ArrowForwardIos />
                  </button>
                </div>
              </div>
            </div>
            <div className=" xl:flex items-center justify-between gap-2 mt-5 mb-7 hidden">
              <button
                onClick={() => navigate("/sellnow/listing/general")}
                className="text-[14px] py-3 px-10 rounded-[4px] bg-[#fff] text-black border-[1px] border-sa-border-black font-semibold"
              >
                Previous
              </button>
              <div className="space-x-3">
                <button
                  onClick={() => productDetailHandler()}
                  className="text-[14px] py-3 px-10 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold"
                >
                  Save
                </button>
                <button
                  onClick={() => productDetailHandler()}
                  className="text-[14px] py-3 px-10 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <PreviewCard info={info} width = "25%" />
        </div>
      </div>
    </div>
  );
};

export default MediaScreen

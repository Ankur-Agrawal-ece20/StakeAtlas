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

const DetailsScreen = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
  });

  const dispatch = useDispatch();
  const productDetailHandler = () => {
    dispatch(saveProductDetails(info));
    navigate("/sellnow/listing/location");
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
                  Item Specifics
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-3">
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Make
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Make: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Model
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Model: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Fuel
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Fuel: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Trim
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Trim: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Transmission
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Transmission: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Registration
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, Registration: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Make Year
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, MakeYear: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Registration Year
                    {/* {console.log(e)} */}
                  </h1>
                  {/* <DropDown setInfo={setInfo} info={info} /> */}

                  <textarea
                    onChange={(e1) => setInfo({ ...info, RegistrationYear: e1.target.value })}
                    type="text"
                    className="w-full h-[4vh] rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none resize-none overflow-y-hidden"
                  />
                </div>
                <div className=" flex items-center gap-2 mt-5 mb-7 xl:hidden">
                  <button
                    onClick={() => navigate("/sellnow/listing/media")}
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
                onClick={() => navigate("/sellnow/listing/media")}
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

          <PreviewCard info={info} width = "50%" />
        </div>
      </div>
    </div>
  );
};

export default DetailsScreen;

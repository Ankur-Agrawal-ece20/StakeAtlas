import {
  AccessTimeOutlined,
  LocationOnOutlined,
  MailOutline,
  Star,
} from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import DropDown from "../components/DropDown";
import PreviewCard from "../components/Seller/PreviewCard";
import { useDispatch, useSelector } from "react-redux";
import { saveProductDetails } from "../redux/actions/product";
import NestedFilterDropDown from '../components/NestedFilterDropDown';

const GeneralScreen = () => {
  const navigate = useNavigate();
  const { product } = useSelector((state) => state);
  const [info, setInfo] = useState({
    condition: "",
    title: "",
    price: "",
    description: "",
  });

  const categories = [
    {
      name: "Automobiles",
      subcategories: [
        {
          name: "Parts & Accessories",
          subcategories: [
            {
              name: "Wheels"
            },
            {
              name: "Alloys"
            }
          ]
        },
        {
          name: "Cars & Trucks",
          subcategories: [
            {
              name: "Hatchbacks"
            },
            {
              name: "Sedans"
            },
            {
              name: "Pickups"
            }
          ]
        },
        {
          name: "Motorcycle"
        },
        {
          name: "Other Vehicles"
        }
      ]
    },
    {
      name: "Electronics",
      subcategories: [
        {
          name: "Phones and Computers"
        },
        {
          name: "Electronics Accessories"
        }
      ]
    },
    {
      name: "Collectibles and Art",
    },
    {
      name: "Clothing and Accessories"
    },
    {
      name: "Other Categories"
    }
  ]

  const dispatch = useDispatch();
  const productDetailHandler = () => {
    dispatch(saveProductDetails(info));
    navigate("/sellnow/listing/details");
  };

  return (
    <div>
      <div className="px-4.5 mt-7 md:px-[4vw] md:mt-10">
        <div className=" border-[1px] border-black pl-3 max-[768px]:pr-3 mb-7 xl:border-[2px] xl:px-0 md:flex md:items-start md:mb-10">
          <div className=" md:w-[51%] md:px-[2vw] lg:w-[45%]">
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
            <div className="xl:h-[50vh] xl:overflow-y-auto xl:pr-7 md:h-[60vh] md:overflow-y-auto md:pr-7">
              <div className="mt-6 border-b-[1px] border-black pb-2.5">
                <h1 className=" text-[21px] xl:text-2xl font-semibold text-black">
                  General Description
                </h1>
              </div>
              <div className="mt-5">
                <div>
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Condition
                  </h1>
                  <DropDown setInfo={setInfo} info={info.condition} product={product?.condition} />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Title
                  </h1>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, title: e.target.value })
                    }
                    type="text"
                    value={product?.title}
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none"
                  />
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Price
                  </h1>
                  <input
                    onChange={(e) =>
                      setInfo({ ...info, price: e.target.value })
                    }
                    type="number"
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3 focus:outline-none"
                  />
                  <div className="flex items-center mt-4 gap-x-2">
                    <input type="checkbox" name="" id="" className="focus:outline-none" />
                    <h1 className="text-sm xl:text-base font-semibold text-black">
                      Accept Offers
                    </h1>
                  </div>
                </div>
                <div className="mt-3">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Category
                  </h1>
                  {/* <input
                    type="text"
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5 px-3"
                  /> */}
                  <NestedFilterDropDown categories={categories} />
                </div>
                <div className="mt-6">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Upload Photos
                  </h1>
                  <label
                    for="file-upload"
                    className="w-32 h-28 outline-none  mt-2 text-center px-2 font-light flex items-center justify-center border-2 border-dashed border-black rounded cursor-pointer">
                    Add More Images
                    <input
                      style={{ display: "none" }}
                      id="file-upload"
                      type="file"
                      className="focus:outline-none"
                    />
                  </label>
                </div>
                <div className="mt-5">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                    Description{" "}
                  </h1>
                  <textarea
                    onChange={(e) =>
                      setInfo({ ...info, description: e.target.value })
                    }
                    type="text"
                    className="w-full h-auto rounded border-[1px] border-black mt-1 py-1.5 px-3 focus:outline-none"
                  />
                </div>
                <div className=" flex items-center gap-2 mt-5 mb-7 xl:hidden">
                  <button
                    onClick={() => productDetailHandler()}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold">
                    Save
                  </button>
                  <button
                    onClick={() => productDetailHandler()}
                    className=" w-1/2 text-[14px] py-3 px-3 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold">
                    Next
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden xl:flex items-center justify-end gap-2 mt-5 mb-7">
              <button
                onClick={() => productDetailHandler()}
                className="text-[14px] py-3 px-10 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-semibold">
                Save
              </button>
              <button
                onClick={() => productDetailHandler()}
                className="text-[14px] py-3 px-10 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-semibold">
                Next
              </button>
            </div>
          </div>

          <PreviewCard info={info} />
        </div>
      </div>
    </div>
  );
};

export default GeneralScreen;

import {
  AccessTimeOutlined,
  LocationOnOutlined,
  Star,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import TabMenuListing from "../../components/TabMenuListing";
import { useState } from "react";

const PreviewCard = ({ info }) => {

  const { product } = useSelector((state) => state);

  const tabMenuContent = {
    Description: (
      <div className="flex flex-col space-y-2">
        <p className = "overflow-y-auto">
        {product?.description || info?.description}
        </p>
      </div>
    ),
    "Item Specifics": (
      <div style={{ display: "flex", justifyContent: "space-around"}}>
        <div
          className=" border-x-[1px] border-b-[1px] border-black"
          style={{ width: "50%", background: "#FCF9F4" }}
        >
          {[
            {
              title: "Make",
              value: "BMW",
            },
            {
              title: "Year",
              value: "2012",
            },
            {
              title: "Ownership",
              value: "BMW",
            },
          ].map((e) => (
            <div
              className=" flex flex-row justify-between px-2 py-1 border-t-[1px] border-black"
              style={{}}
            >
              <h1 className="text-[6px] 3md:text-[8px] 4md:text-[10px]">{e.title} : </h1>
              <h1
                className="font-bold text-[6px] 3md:text-[8px] 4md:text-[10px]"
              >
                {e.value}
              </h1>
            </div>
          ))}
        </div>
        <div
          className=" border-x-[1px] border-b-[1px] border-black"
          style={{ width: "50%", marginLeft: "25px", background: "#FCF9F4" }}
        >
          {[
            {
              title: "KM Run",
              value: "25,000/-",
            },
            {
              title: "Color",
              value: "White",
            },
            {
              title: "Registration State",
              value: "Delhi",
            },
          ].map((e) => (
            <div
              className=" flex flex-row justify-between px-2 py-1 border-t-[1px] border-black"
              style={{}}
            >
              <h1 className="text-[6px] 3md:text-[8px] 4md:text-[10px]">{e.title} : </h1>
              <h1
                className=" font-bold text-[6px] 3md:text-[8px] 4md:text-[10px] "
                style={{  }}
              >
                {e.value}
              </h1>
            </div>
          ))}
        </div>
      </div>
    ),
    "Known Flaws": (
      <div className="flex flex-col space-y-2">
        <p>
        </p>
      </div>
    ),
    "Buyers Guide": (
      <div
        className=""
        style={{ fontWeight: "400", fontSize: "12px" }}
      >
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
      </div>
    ),
  };

  const [menu, setMenu] = useState(1);
  
  return (
    <div className=" hidden md:flex md:flex-col flex-1 border-l-[1px] border-black pt-10 2xl:px-8 md:px-4">
      <div className="w-[90%] border-[1px] border-black h-3 mb-8 relative ml-auto mr-auto max-laptop:w-[100%]">
        <div className="w-40 h-3 bg-[#00BEA7] absolute left-0"></div>
      </div>
      <div className="ml-4 mr-4">
        <div className="border-[1px] border-black">
          <div className=" border-b-[1px] border-black">
            <div className=" w-full py-1 bg-yellow-200 px-4 border-black flex items-center justify-between">
              <h1 className=" text-xs font-semibold ">
                Condition: {product?.condition || info?.condition}
              </h1>
            </div>
          </div>
          <div className=" flex items-center justify-between px-5 border-b-[1px] border-black">
            <div className=" py-3.5">
              <h1 className=" text-sm font-semibold">
                {product?.title || info?.title || "...."}
              </h1>
              <div className=" flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 mt-1">
                  <LocationOnOutlined
                    className="text-grey-100"
                    fontSize={"15"}
                  />
                  <h1 className="text-sm font-normal text-grey-100">
                    {"...."}
                  </h1>
                </div>
                <div className="flex items-center justify-start gap-x-1 mt-1">
                  <AccessTimeOutlined
                    className="text-grey-100"
                    fontSize={"10"}
                  />
                  <h1 className="text-[13px] font-medium text-grey-100">
                    {"...."}
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-sm font-bold text-sa-menu-green text-left py-1">
              ₹{product?.price || info?.price || "...."}
            </h1>
          </div>
          <div className="px-3.5 py-3 flex items-center justify-center gap-x-2">
            <div className="md:1/4 xl:w-1/5 ">
              <img
                src={require("../../assets/new design/grey.png")}
                alt=""
                className="w-[100%] h-44 object-cover"
              />
            </div>
            <div className = "md:2/5 xl:w-1/4">
            <div className=" grid grid-cols-2 gap-y-4 gap-x-2">
              {[0, 1, 2, 3].map((e) => (
                <div>
                  <img
                    src={require("../../assets/new design/grey.png")}
                    alt=""
                    className="w-[100%] h-20"
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-start">
          {/* Description  */}
          {/* <div className=" flex-1">
            <div className="h-fit border-l-[1px] border-r-[1px] border-t-[1px] border-black pt-4.5 pb-2">
              <div className=" border-b-[1px] border-black px-4 pb-3 overflow-y-auto">
                <h1 className=" text-sm font-semibold tracking-wide">
                  Description{" "}
                </h1>
                <div className="mt-1">
                  <p className=" break-all text-[17px]">
                    {product?.description || info?.description}
                  </p>
                </div>
              </div>
              <div className=" px-4 pt-5 h-auto">
                <h1 className="text-sm font-semibold">Item Specifics</h1>
                <div className=" my-4 flex items-center flex-wrap justify-between">
                  {[
                    {
                      title: "Make",
                      value: "BMW",
                    },
                    {
                      title: "Year",
                      value: "2012",
                    },
                    {
                      title: "Ownership",
                      value: "BMW",
                    },
                    {
                      title: "KM Run",
                      value: "25,000/-",
                    },
                    {
                      title: "Color",
                      value: "White",
                    },
                    {
                      title: "Registration State",
                      value: "Delhi",
                    },
                    {
                      title: "Insurance",
                      value: "Expired",
                    },
                    {
                      title: "Service Records",
                      value: "Unavailabe",
                    },
                    {
                      title: "Warranty",
                      value: "Unavailabe",
                    },
                  ].map((e) => (
                    <div className=" w-[45%] self-stretch py-2 px-1.5 flex items-start justify-between border-black border-[1px] ">
                      <h1 className=" text-[10px] ">{e.title} : </h1>
                      <h1 className=" text-[10px] font-semibold">{e.value}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div> */}
          <div className = "flex w-2/3 p-2 border-l-[1px] border-r-[1px] border-t-[1px] border-black">
          <TabMenuListing
                  state={menu}
                  setState={setMenu}
                  items={tabMenuContent}
                />
          </div>

          {/* Sold By */}
          <div className="w-1/3 min-h-[100px] h-auto border-r-[1px] border-y-[1px] border-black px-3 py-4.5 ">
            <h1 className=" text-[1vw] font-bold tracking-wide">Sold By</h1>
            <div className="flex items-start justify-between mt-3">
              <div className=" flex items-start gap-x-1">
                <div className=" ">
                  <img
                    src={require("../../assets/new design/user.png")}
                    alt=""
                    className="w-[1.5vw] border-[1px] border-black rounded-full"
                  />
                </div>
                <div>
                  <h1 className="flex justify-left items-center 4md:text-[0.8vw] md:text-[0.7vw] underline lg:underline-offset-[6px] font-bold tracking-wide">
                    Akshat Tripathi
                  </h1>
                  <h1 className="flex justify-left 4md:text-[0.6vw] md:text-[0.5vw] font-semibold text-grey-100 mt-0.5">
                    Member since July 2022
                  </h1>
                </div>
              </div>

              <div className=" flex items-top justify-center">
                <div className=" flex items-center gap-x-0.5">
                  <h1 className=" md:text-[0.7vw] font-bold">4.5</h1>
                  <Star className=" h-2 text-yellow-100 text-[0.8vw]" />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-2">
              <button className=" w-full text-[0.75vw]  py-0.5 xl:py-1.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;

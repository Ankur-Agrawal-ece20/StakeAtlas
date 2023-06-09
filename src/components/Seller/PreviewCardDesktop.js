import {
  AccessTimeOutlined,
  LocationOnOutlined,
  Star,
} from "@mui/icons-material";
import TabMenuListingPreview from "../TabMenuListingPreview.js";
import { useState } from "react";


const PreviewCardDesktop = () => {

  const [menu, setMenu] = useState(1);

  const tabMenuContent = {
    Description: (
      <div className="flex flex-col space-y-2">
        <p className="overflow-y-auto">
          For sale is a 4th generation iPad Air in silver color and 256 GB of
          storage. The tablet is in excellent condition and does not have any
          signs of scratches or marks on the screen. No AppleCare+ included. No
          charger included.
        </p>
      </div>
    ),
    "Item Specifics": (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              title: "Fuel",
              value: "BMW",
            },
            {
              title: "Transmission",
              value: "25,000/-",
            },
            {
              title: "Make Year",
              value: "Delhi",
            },
          ].map((e) => (
            <div
              className=" flex flex-row justify-between px-2 py-1 border-t-[1px] border-black"
              style={{}}
            >
              <h1 className="text-[10px] 3md:text-[12px] 4md:text-[14px]">
                {e.title} :{" "}
              </h1>
              <h1 className="font-bold text-[10px] 3md:text-[12px] 4md:text-[14px]">
                {/* {console.log(e)} */}
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
              title: "Model",
              value: "2012",
            },
            {
              title: "Trim",
              value: "BMW",
            },
            {
              title: "Registration",
              value: "White",
            },
            {
              title: "Registration Year",
              value: "Delhi",
            },
          ].map((e) => (
            <div
              className=" flex flex-row justify-between px-2 py-1 border-t-[1px] border-black"
              style={{}}
            >
              <h1 className="text-[10px] 3md:text-[12px] 4md:text-[14px]">
                {e.title} :{" "}
              </h1>
              <h1
                className=" font-bold text-[10px] 3md:text-[12px] 4md:text-[14px] "
                style={{}}
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
        <p></p>
      </div>
    ),
    "Buyers Guide": (
      <div className="" style={{ fontWeight: "400", fontSize: "16px" }}>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
        <p>This is the Buyers guide</p>
      </div>
    ),
  };

  const carImg = [
    require("../../assets/new design/car/car_img2.png"),
    require("../../assets/new design/car/car_img3.png"),
    require("../../assets/new design/car/car_img4.png"),
    require("../../assets/new design/car/car_img5.png"),
    require("../../assets/new design/car/car_img6.png"),
    require("../../assets/new design/car/car_img7.png"),
    require("../../assets/new design/car/car_img8.png"),
    require("../../assets/new design/car/car_img9.png"),
  ];
  return (
    <div className=" mt-7 hidden xl:flex xl:flex-col">
      <div className=" border-[1px] border-black">
        <div className=" py-1 bg-yellow-200 px-4 border-b-[2px] border-black flex items-center justify-between">
          <h1 className=" text-[19px] font-semibold ">Condition: Used</h1>
        </div>

        <div className=" flex items-center justify-between px-5 border-b-[2px] border-black">
          <div className=" py-3.5">
            <h1 className=" text-4xl font-semibold">Hyundai Venue (2019)</h1>
            <div className=" flex items-center gap-x-4">
              <div className="flex items-center gap-x-1 mt-1">
                <LocationOnOutlined className="text-grey-100" fontSize={"30"} />
                <h1 className="text-sm xl:text-lg font-normal text-grey-100">
                  Rajendra nagar, New Delhi
                </h1>
              </div>
              <div className="flex items-center justify-start gap-x-1 mt-1">
                <AccessTimeOutlined className="text-grey-100" fontSize={"10"} />
                <h1 className="text-[13px] xl:text-lg font-medium text-grey-100">
                  3d 18hrs | Mon, Dec 05
                </h1>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-sa-menu-green text-left py-1">
            ₹4,60,000
          </h1>
        </div>

        <div className=" px-3.5 py-3 flex gap-x-2">
          <div className=" border-[1px] border-black w-fit">
            <img
              src={require("../../assets/new design/car/car_img1.png")}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" grid grid-cols-2">
            {carImg.map((e) => (
              <div className="mb-1.5 mr-1.5">
                <img src={e} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <div className=" mx-1.5 mt-4.5 flex items-start"> */}
      {/* Description  */}
      {/* <div className=" flex-1"> */}
      {/* <div className="h-fit border-[1px] border-black pt-4.5 pb-2"> */}
      {/* <div className=" border-b-[1px] border-black px-5 pb-5">
              <h1 className=" text-[24px] font-semibold tracking-wide">
                Description{" "}
              </h1>
              <div className="mt-1">
                <p className=" text-[17px]">
                  For sale is a 4th generation iPad Air in silver color and 256
                  GB of storage. The tablet is in excellent condition and does
                  not have any signs of scratches or marks on the screen. <br />{" "}
                  <br /> No AppleCare+ included. <br /> No charger included.
                </p>
              </div>
            </div> */}
      {/* <div className="px-5 pt-5">
              <h1 className="text-[22px] font-semibold">Item Specifics</h1>
              <div className=" mb-4 flex items-center flex-wrap mt-4 justify-between">
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
                  <div className=" w-[48%] self-stretch py-2.5 px-2.5 flex items-start justify-between border-black border-[1px] ">
                    <h1 className=" w-[70%] text-base ">{e.title} : </h1>
                    <h1 className=" w-[30%] text-base font-semibold">
                      {e.value}
                    </h1>
                  </div>
                ))}
              </div>
            </div> */}
      {/* </div> */}
      {/* </div> */}

      {/* Sold By */}
      {/* <div className=" w-[36%] min-h-[400px] border-r-[1px]  border-y-[1px] border-black px-5 py-4.5"> */}
      {/* <h1 className=" text-[24px] font-semibold tracking-wide">Sold By</h1> */}
      {/* <div className="flex items-center justify-between mt-4">
            <div className=" flex items-center gap-x-4">
              <div className="w-14 border-[1px] border-black rounded-full">
                <img
                  src={require("../../assets/new design/user.png")}
                  alt=""
                  className=" w-full"
                />
              </div>
              <div>
                <h1 className=" text-xl underline underline-offset-[6px] font-semibold tracking-wide">
                  Akshat Tripathi
                </h1>
                <h1 className="text-base font-normal text-grey-100 mt-0.5">
                  Member since July 2022
                </h1>
              </div>
            </div>

            <div className=" flex items-center">
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" text-2xl font-bold">4.5</h1>
                <Star className=" text-yellow-100 text-xs" />
              </div>
            </div>
          </div>
          <div className=" flex items-cente justify-between mt-7">
            <button className=" w-[47%]  text-[15px] py-3.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
              Add to Cart
            </button>
            <button className=" w-[47%]  text-[15px] py-3.5 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
              Make an Offer
            </button>
          </div> */}
      {/* </div> */}
      {/* </div> */}
      <div className="mt-2.5 flex items-start">
        <div className="flex w-2/3 p-2 border-l-[1px] border-r-[1px] border-t-[1px] border-b-[1px] border-black">
          <TabMenuListingPreview
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
                <h1 className="flex justify-left items-center 4md:text-[1.2vw] md:text-[1vw] underline lg:underline-offset-[6px] font-bold tracking-wide">
                  Akshat Tripathi
                </h1>
                <h1 className="flex justify-left 4md:text-[1.1vw] md:text-[0.9vw] font-semibold text-grey-100 mt-0.5">
                  Member since July 2022
                </h1>
              </div>
            </div>

            <div className=" flex items-top justify-center">
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" md:text-[1vw] font-bold">4.5</h1>
                <Star className=" h-2 text-yellow-100 text-[1vw]" />
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-between mt-2">
            <button className=" w-full text-[1.1vw]  py-0.5 xl:py-1.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black tracking-wider font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCardDesktop;

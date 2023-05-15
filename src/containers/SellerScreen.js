import {
  Bookmark,
  ExpandLess,
  ExpandMore,
  Star,
  StarOutline,
} from "@mui/icons-material";
import { useState } from "react";
import ProductCard from "../components/Home/ProductCard";

const SellerScreen = () => {
  const [expand, setExpand] = useState(false);
  const [activeTab, setActiveTab] = useState("shop");
  return (
    <div>
      <div className="bg-[#005C51] px-16 h-[42vh] border-b-2 border-black relative">
        <div className=" flex items-center gap-x-4 pt-16">
          <div className="w-24 border-[1.5px] border-black rounded-full">
            <img
              src={require("../assets/new design/user.png")}
              alt=""
              className=" w-full aspect-auto"
            />
          </div>
          <div className="flex items-start gap-x-4">
            <div>
              <h1 className=" text-4xl text-white font-semibold tracking-wide">
                @Zubaankesari
              </h1>
              <h1 className=" text-base text-white font-medium tracking-wide mt-1">
                Sarthak Mital
              </h1>
              <h1 className="text-xl font-normal text-sa-primary-yellow">
                Member since July 2022
              </h1>
            </div>
            <div>
              <button className=" w-full text-[12px] py-2 px-2 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                <Bookmark className=" text-xs mr-1 text-sa-primary-yellow" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-start absolute -bottom-[1.5px] gap-x-4 z-10">
          <div
            className={`w-52 py-2 bg-white rounded-t-lg border-x-2 border-t-2 border-b-2  border-black ${
              activeTab == "shop" ? "border-b-white" : "border-b-black"
            }`}
          >
            <button
              onClick={() => setActiveTab("shop")}
              className=" w-full text-[12px] py-2 px-2 rounded-[4px] bg-[#FCF9F4] text-black font-semibold flex items-center justify-center"
            >
              <h1 className="text-[22px] font-semibold text-black underline underline-offset-2">
                Shop
              </h1>
            </button>
          </div>

          <div
            className={`w-52 py-2 bg-white rounded-t-lg border-x-2 border-t-2 border-b-2  border-black ${
              activeTab == "reviewSeller" ? "border-b-white" : "border-b-black"
            }`}
          >
            <button
              onClick={() => setActiveTab("reviewSeller")}
              className=" w-full text-[12px] py-2 px-2 rounded-[4px] bg-[#FCF9F4] text-black font-semibold flex items-center justify-center"
            >
              <h1 className="text-[22px] font-semibold text-black underline underline-offset-2">
                Review as a seller
              </h1>
            </button>
          </div>
          <div
            className={`w-52 py-2 bg-white rounded-t-lg border-x-2 border-t-2 border-b-2  border-black ${
              activeTab == "reviewBuyer" ? "border-b-white" : "border-b-black"
            }`}
          >
            <button
              onClick={() => setActiveTab("reviewBuyer")}
              className=" w-full text-[12px] py-2 px-2 rounded-[4px] bg-[#FCF9F4] text-black font-semibold flex items-center justify-center"
            >
              <h1 className="text-[22px] font-semibold text-black underline underline-offset-2">
                Review as a buyer
              </h1>
            </button>
          </div>
        </div>
      </div>
      {activeTab === "shop" && (
        <div className="pl-16 pr-8 flex items-start pt-9">
          <div className="w-[23%]">
            <div className="w-full border-[1px] border-black rounded py-7 px-3">
              <h1 className="text-sa-menu-green text-[20px] font-bold">
                OUR CATEGORIES
              </h1>
              <div className="mt-4 space-y-3">
                <div className="flex items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src={
                        require("../assets/icons/electronics_icon.svg").default
                      }
                      alt="summary icon"
                    />
                  </div>
                  <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                    Electronics
                  </h1>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src={
                        require("../assets/icons/electronics_icon.svg").default
                      }
                      alt="summary icon"
                    />
                  </div>
                  <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                    Automobiles
                  </h1>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src={
                        require("../assets/icons/electronics_icon.svg").default
                      }
                      alt="summary icon"
                    />
                  </div>
                  <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                    Collectibles & Art
                  </h1>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src={
                        require("../assets/icons/electronics_icon.svg").default
                      }
                      alt="summary icon"
                    />
                  </div>
                  <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                    Musical Instruments & Gear
                  </h1>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center">
                    <img
                      src={
                        require("../assets/icons/electronics_icon.svg").default
                      }
                      alt="summary icon"
                    />
                  </div>
                  <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                    Toys & Hobbies
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full border-[1px] border-black rounded py-7 px-3 mt-4">
              <h1 className="text-sa-menu-green text-[20px] font-bold">
                SHOP BY CATEGORY
              </h1>
              <div className="mt-4 space-y-3">
                <div>
                  <div
                    className="flex items-start justify-between"
                    onClick={() => setExpand(!expand)}
                  >
                    <div className="flex items-start">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../assets/icons/electronics_icon.svg")
                              .default
                          }
                          alt="summary icon"
                        />
                      </div>
                      <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                        Cell Phone & SmartPhones
                      </h1>
                    </div>
                    {expand ? (
                      <ExpandLess className="text-black text-2xl" />
                    ) : (
                      <ExpandMore className="text-black text-2xl" />
                    )}
                  </div>
                  {expand && (
                    <div className="pl-9">
                      <h1
                        className={`text-[16px] font-medium  tracking-wide ml-4 mt-2 block text-[#005C51]`}
                      >
                        Smartwatch Accessories
                      </h1>
                      <h1
                        className={`text-[16px] font-medium  tracking-wide ml-4 mt-2 block text-black`}
                      >
                        Smartwatch parts
                      </h1>
                      <h1
                        className={`text-[16px] font-medium  tracking-wide ml-4 mt-2 block text-black`}
                      >
                        Smartwatches
                      </h1>
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../assets/icons/electronics_icon.svg")
                              .default
                          }
                          alt="summary icon"
                        />
                      </div>
                      <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                        Tablets & Ipads
                      </h1>
                    </div>
                    <ExpandMore className="text-black text-2xl" />
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../assets/icons/electronics_icon.svg")
                              .default
                          }
                          alt="summary icon"
                        />
                      </div>
                      <h1 className="text-[17px] font-semibold text-black tracking-wide ml-2">
                        Computers
                      </h1>
                    </div>
                    <ExpandMore className="text-black text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="pl-12 pt-9 h-[70vh] overflow-y-auto flex items-start flex-wrap gap-x-10 no-scrollbar">
              {[0, 1, 2, 3, 4].map((e) => (
                <div className="w-[30%] mb-10">
                  <ProductCard />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {activeTab === "reviewSeller" && (
        <div className="pl-16 pr-16 flex items-start pt-9 bg-[#FCF9F4]">
          <div className="w-[65.5%] pr-20">
            <h1 className=" text-3xl font-medium">
              Here’s what others have to say about Akshat:
            </h1>
            <div>
              {[0, 1, 2, 3, 4].map((e) => (
                <div className="border-b-[1px] border-black pb-4 mb-3">
                  <div className="flex items-center justify-between">
                    <div className=" flex items-center gap-x-1 mt-3">
                      <h1 className=" text-lg font-bold">@Sart....mk</h1>
                      <div className=" flex items-start">
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <StarOutline className=" " fontSize="medium" />
                        <StarOutline className=" " fontSize="medium" />
                      </div>
                    </div>
                    <h1 className=" text-base font-bold text-[#888888]">
                      2 hours ago
                    </h1>
                  </div>
                  <div>
                    <p className="underline underline-offset-2 font-medium text-base text-blue-100 mt-2">
                      Maruti 800 2004 CNG fit
                    </p>
                    <p className=" text-lg font-normal text-grey-100 mt-2">
                      Check who the seller is very carefully. If it says Loop
                      Mobile then the phone is most definitely used even though
                      they say in the phone specifications that it is a new
                      phone. When you open the box, there is paperwork that
                      specifically states that it is a refurbished phone and
                      that there is no warranty on the phone.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="border-x-[1px] border-y-[1px] border-black rounded-lg bg-white">
              {[
                {
                  title: "Communication",
                  value: "Average",
                },
                {
                  title: "On time shipment",
                  value: "Average",
                },
                {
                  title: "Item as described",
                  value: "Satisfied",
                },
                {
                  title: "Commitment after side",
                  value: "Good",
                },
              ].map((e) => (
                <div className=" flex items-center justify-between px-2 border-b-[1px] border-black">
                  <div className=" w-1/2 border-r-[1px] border-black py-2.5 pl-3">
                    <h1 className="text-base ">{e.title}</h1>
                  </div>
                  <div className=" w-1/2 py-2.5 flex-1 pl-10">
                    <h1 className="text-base font-semibold">{e.value}</h1>
                  </div>
                </div>
              ))}
              <div className="flex items-start">
                <div className=" w-1/2 py-2 flex items-center justify-center flex-col border-r-[1px] border-black">
                  <h1 className="text-xl font-bold text-[#888888]">
                    Items Sold
                  </h1>
                  <h1 className=" text-4xl font-bold">04</h1>
                </div>
                <div className=" w-1/2 py-2 flex items-center justify-center flex-col">
                  <h1 className="text-xl font-bold text-[#888888]">
                    5 Start Reviews
                  </h1>
                  <h1 className=" text-4xl font-bold">02</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "reviewBuyer" && (
        <div className="pl-16 pr-16 flex items-start pt-9 bg-[#FCF9F4]">
          <div className="w-[65.5%] pr-20">
            <h1 className=" text-3xl font-medium">
              Here’s what others have to say about Akshat:
            </h1>
            <div>
              {[0, 1, 2, 3, 4].map((e) => (
                <div className="border-b-[1px] border-black pb-4 mb-3">
                  <div className="flex items-center justify-between">
                    <div className=" flex items-center gap-x-1 mt-3">
                      <h1 className=" text-lg font-bold">@Sart....mk</h1>
                      <div className=" flex items-start">
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <Star className=" text-yellow-100" fontSize="medium" />
                        <StarOutline className=" " fontSize="medium" />
                        <StarOutline className=" " fontSize="medium" />
                      </div>
                    </div>
                    <h1 className=" text-base font-bold text-[#888888]">
                      2 hours ago
                    </h1>
                  </div>
                  <div>
                    <p className="underline underline-offset-2 font-medium text-base text-blue-100 mt-2">
                      Maruti 800 2004 CNG fit
                    </p>
                    <p className=" text-lg font-normal text-grey-100 mt-2">
                      Check who the seller is very carefully. If it says Loop
                      Mobile then the phone is most definitely used even though
                      they say in the phone specifications that it is a new
                      phone. When you open the box, there is paperwork that
                      specifically states that it is a refurbished phone and
                      that there is no warranty on the phone.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="border-x-[1px] border-y-[1px] border-black rounded-lg bg-white">
              {[
                {
                  title: "Communication",
                  value: "Average",
                },
                {
                  title: "On time shipment",
                  value: "Average",
                },
                {
                  title: "Item as described",
                  value: "Satisfied",
                },
                {
                  title: "Commitment after side",
                  value: "Good",
                },
              ].map((e) => (
                <div className=" flex items-center justify-between px-2 border-b-[1px] border-black">
                  <div className=" w-1/2 border-r-[1px] border-black py-2.5 pl-3">
                    <h1 className="text-base ">{e.title}</h1>
                  </div>
                  <div className=" w-1/2 py-2.5 flex-1 pl-10">
                    <h1 className="text-base font-semibold">{e.value}</h1>
                  </div>
                </div>
              ))}
              <div className="flex items-start">
                <div className=" w-1/2 py-2 flex items-center justify-center flex-col border-r-[1px] border-black">
                  <h1 className="text-xl font-bold text-[#888888]">
                    Items Sold
                  </h1>
                  <h1 className=" text-4xl font-bold">04</h1>
                </div>
                <div className=" w-1/2 py-2 flex items-center justify-center flex-col">
                  <h1 className="text-xl font-bold text-[#888888]">
                    5 Start Reviews
                  </h1>
                  <h1 className=" text-4xl font-bold">02</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerScreen;

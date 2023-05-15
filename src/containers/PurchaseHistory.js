import { ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { connect } from "react-redux";
import Accourdion from "../components/Accourdion";
import SideMenu from "../components/Buying/SideMenu";
import TagRibbon from "../components/TagRibbon";
import {
  CONTACT_SELLER_MODAL,
  REPORT_MODAL,
  REVIEW_MODAL,
} from "../extras/constants";
import { showModal } from "../redux/actions/modal";

const PurchaseHistory = ({ showModal }) => {
  const [fontSize, setFontSize] = useState("text-4xl");
  const [activeTab, setActiveTab] = useState("All Purchases");

  const purchaseHistoryTabs = [
    "All Purchases",
    "Shipped",
    "Pending",
    "Returned",
    "Failed",
  ];
  const data = [
    {
      title: "DeepCool PM850D Power Supply Including shipping",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      price: "3,000",
      img: require("../assets/new design/fan_img.png"),
    },
  ];
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    console.log(event.currentTarget.scrollTop);
    if (event.currentTarget.scrollTop > 0) {
      setFontSize("text-xl");
    } else {
      setFontSize("text-4xl");
    }
  };

  return (
    <div>
      {/* desktop */}
      <div className="hidden xl:flex items-start min-h-screen">
        <div className="self-stretch">
          <SideMenu />
        </div>
        <div className="flex-1 bg-[#FCF9F4]">
          <div
            className={`border-b-[1px] border-black pl-12 pr-16 transition-all duration-300 ease-in-out ${
              fontSize === "text-4xl" ? "pt-8 pb-9" : "pt-4 pb-9"
            }`}
          >
            <h1 className={`${fontSize}  font-semibold text-black`}>
              Purchase History
            </h1>
            <div
              className={`${
                fontSize === "text-4xl" ? "mt-5" : "mt-2"
              } transition-all duration-300 ease-in-out flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-4">
                {purchaseHistoryTabs.map(function (e, i) {
                  return (
                    <button
                      onClick={() => setActiveTab(e)}
                      key={i}
                      className={`text-[18px] mt-2.5 py-2 px-5  rounded-md ${
                        activeTab === e
                          ? "bg-white border-[1px] border-sa-border-black"
                          : "bg-[#FCF9F4]  border-[1px] border-[#FCF9F4]"
                      } text-black font-medium flex items-center justify-center`}
                    >
                      {e}
                    </button>
                  );
                })}
                {/* <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Shipped
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Pending
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Returned
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Failed
                </button> */}
              </div>
              <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                Date: All <ExpandMore />
              </button>
            </div>
          </div>
          <div
            className="pl-12 pr-16 pt-9 h-[85vh] overflow-y-auto"
            onScroll={handleScroll}
          >
            {[0, 1, 2].map((e) => (
              <div className="border-[1px] border-black mb-7">
                <div className="py-3 border-b-[1px] border-black px-6 flex items-center justify-between">
                  <div className="flex items-center gap-x-16">
                    <h1 className="text-[17px] font-normal text-black tracking-wide">
                      Order No:{" "}
                      <span className="font-semibold text-[#1E44CD] ml-2 underline underline-offset-2">
                        2023SA20012
                      </span>
                    </h1>
                    <h1 className="text-[17px] font-normal text-black tracking-wide">
                      Purchase Date:
                      <span className="font-semibold text-black ml-2 ">
                        13 March 2023
                      </span>
                    </h1>
                  </div>
                  <h1 className="text-[17px] font-normal text-black tracking-wide">
                    Order Total:
                    <span className="font-semibold text-black ml-2">
                      ₹3,000/-
                    </span>
                  </h1>
                </div>
                <div className="w-full">
                  {data.map((e, index) => (
                    <div
                      key={index}
                      className={`mx-3.5 py-4.5 flex items-start ${
                        data.length - 1 == index ? "" : "border-b-[1.5px]"
                      }   border-black 2xl:mx-4 relative`}
                    >
                      <div className=" absolute top-3">
                        <TagRibbon
                          textClasses={
                            "text-[12px] font-semibold text-black text-center"
                          }
                          tagText="USED"
                          bgColor={"#FFDC25"}
                          customClassesBG={"w-[80px] h-[30px]"}
                          customClasses={"w-[74px] h-[26px]"}
                        />
                      </div>
                      <div className=" w-[21%] border-[2px] border-black rounded-md ">
                        <img
                          src={e.img}
                          alt=""
                          className="w-full aspect-square object-cover h-[10.9rem]"
                        />
                      </div>
                      <div className=" ml-4 self-stretch flex-1 flex flex-col justify-between 2xl:mt-1">
                        <div className="flex items-start justify-between w-full pr-2 h-full">
                          <div className="flex flex-col justify-between self-stretch">
                            <div>
                              <h1 className="text-lg font-medium 2xl:text-[22px]">
                                {e.title}
                              </h1>
                              <h1 className="text-lg font-semibold 2xl:text-[22px]">
                                ₹{e.price}
                              </h1>
                            </div>
                            <div>
                              <button className="bg-sa-success-green text-base px-4 py-1 rounded text-white mb-2.5">
                                Shipped
                              </button>
                              <div className="flex items-center gap-x-12">
                                <h1 className="text-base font-medium text-black">
                                  Status:{" "}
                                  <span className="font-semibold text-black ml-2 ">
                                    Left facility, in t...
                                  </span>
                                </h1>
                                <h1 className="text-base font-medium text-black">
                                  Track ID:{" "}
                                  <span className="font-semibold text-[#1E44CD] ml-2 underline underline-offset-2">
                                    10007363782
                                  </span>
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-between self-stretch">
                            <button
                              onClick={() => {
                                showModal({
                                  modalType: CONTACT_SELLER_MODAL,
                                  modalTitle: ``,
                                  modalSubTitle: "",
                                });
                              }}
                              className="text-[14px] py-3 px-8 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                            >
                              Contact Seller
                            </button>
                            <button
                              onClick={() => {
                                showModal({
                                  modalType: REVIEW_MODAL,
                                  modalTitle: ``,
                                  modalSubTitle: "",
                                });
                              }}
                              className="text-[14px] py-3 px-8 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                            >
                              Leave a review
                            </button>
                            <button
                              onClick={() => {
                                showModal({
                                  modalType: REPORT_MODAL,
                                  modalTitle: ``,
                                  modalSubTitle: "",
                                });
                              }}
                              className="text-[14px] py-3 px-8 rounded-[4px] bg-[#D1503B] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                            >
                              Report a problem
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" mb-28 xl:hidden">
        <h1 className="text-[26px] font-semibold text-black tracking-wide border-b-[1px] border-black pt-9 px-4 pb-3.5">
          Purchase History
        </h1>
        {[0, 1].map((e) => (
          <div>
            <div className=" flex items-center justify-between border-y-2 border-black mt-6 pt-2.5 pb-3.5 px-4">
              <h1 className="text-sm font-normal text-black">
                Order No:{" "}
                <span className="font-semibold text-[#1E44CD] ml-2 underline underline-offset-2">
                  2023SA20012
                </span>
              </h1>
              <h1 className="text-sm font-normal text-black">
                Total:{" "}
                <span className="font-semibold text-black ml-2 tracking-wide">
                  ₹3,000/-
                </span>
              </h1>
            </div>
            <div className=" py-6">
              <div className="mx-4 mb-5">
                <div className=" flex items-start">
                  {/* <TagRibbon
                textClasses={"text-[8px] font-semibold text-black text-center"}
                tagText="USED"
                bgColor={"#FFDC25"}
                customClassesBG={"w-[50px] h-[15px] top-1 -left-1 rounded-sm"}
                customClasses={"w-[46px] h-[12px] right-0.5 rounded-sm"}
              /> */}
                  <div className="border border-black w-[27%] h-[85px] rounded">
                    <img
                      src={require("../assets/new design/car_img.png")}
                      alt=""
                      className="w-full h-full object-cover aspect-square"
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <h1 className="text-[16px] font-semibold text-black leading-5">
                      iPhone 12 128GB White - Apple new phone
                    </h1>
                    <div className="mt-1 flex items-center justify-between">
                      <h1 className="text-[20px] font-bold text-black tracking-wide">
                        ₹60,990.00
                      </h1>
                      <button className="bg-sa-success-green text-[10px] px-4 py-[5px] rounded text-white">
                        Shipped
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full border-black border-y-[1px] flex items-center justify-between mt-3">
                  <div className="border-r-[1px] border-black w-1/2 pt-2 pb-3.5">
                    <h1 className="text-sm font-medium text-black flex items-center justify-start">
                      Left facility, in t...
                    </h1>
                  </div>
                  <div className="flex items-center justify-end w-1/2">
                    <h1 className="text-sm font-medium text-black">
                      Track ID:{" "}
                      <span className="font-semibold text-[#1E44CD] ml-2 underline underline-offset-2">
                        10007363782
                      </span>
                    </h1>
                  </div>
                </div>
                <div className="mt-2.5">
                  <h1 className="text-sm font-medium text-black">
                    Purchase Date:
                    <span className="font-semibold text-black ml-2">
                      13 March 2023
                    </span>
                  </h1>
                  <div className=" px-3 pb-1 border-[1px] rounded border-black mt-4">
                    <Accourdion title={"Contact Information"}>
                      <div className="pb-3">
                        <button
                          onClick={() => {
                            showModal({
                              modalType: CONTACT_SELLER_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                            });
                          }}
                          className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                        >
                          Contact Seller
                        </button>
                        <button
                          onClick={() => {
                            showModal({
                              modalType: REVIEW_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                            });
                          }}
                          className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                        >
                          Leave a review
                        </button>
                        <button
                          onClick={() => {
                            showModal({
                              modalType: REPORT_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                            });
                          }}
                          className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#D1503B] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center"
                        >
                          Report a problem
                        </button>
                      </div>
                    </Accourdion>
                  </div>
                </div>
              </div>
              <div className="mt-2 border-y-[2px] border-black">
                <div className="mx-4 py-6">
                  <div className=" flex items-start">
                    {/* <TagRibbon
                textClasses={"text-[8px] font-semibold text-black text-center"}
                tagText="USED"
                bgColor={"#FFDC25"}
                customClassesBG={"w-[50px] h-[15px] top-1 -left-1 rounded-sm"}
                customClasses={"w-[46px] h-[12px] right-0.5 rounded-sm"}
              /> */}
                    <div className="border border-black w-[27%] h-[85px] rounded">
                      <img
                        src={require("../assets/new design/car_img.png")}
                        alt=""
                        className="w-full h-full object-cover aspect-square"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <h1 className="text-[16px] font-semibold text-black leading-5">
                        iPhone 12 128GB White - Apple new phone
                      </h1>
                      <div className="mt-1 flex items-center justify-between">
                        <h1 className="text-[20px] font-bold text-black tracking-wide">
                          ₹60,990.00
                        </h1>
                        <button className="bg-[#D1503B] text-[10px] px-4 py-[5px] rounded text-white">
                          Failed
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full border-black border-y-[1px] flex items-center justify-between mt-3">
                    <div className="border-r-[1px] border-black w-1/2 pt-2 pb-3.5">
                      <h1 className="text-sm font-medium text-black flex items-center justify-start">
                        Left facility, in t...
                      </h1>
                    </div>
                    <div className="flex items-center justify-end w-1/2">
                      <h1 className="text-sm font-medium text-black">
                        Track ID:{" "}
                        <span className="font-semibold text-[#1E44CD] ml-2 underline underline-offset-2">
                          10007363782
                        </span>
                      </h1>
                    </div>
                  </div>
                  <div className="mt-2.5">
                    <h1 className="text-sm font-medium text-black">
                      Purchase Date:
                      <span className="font-semibold text-black ml-2">
                        13 March 2023
                      </span>
                    </h1>
                    <div className=" px-3 pb-1 border-[1px] rounded border-black mt-4">
                      <Accourdion title={"Contact Information"}>
                        <div className="pb-3">
                          <button className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                            Contact Seller
                          </button>
                          <button className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                            Leave a review
                          </button>
                          <button className=" w-full text-[14px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#D1503B] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                            Report a problem
                          </button>
                        </div>
                      </Accourdion>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button className=" w-full text-base py-2 bg-black text-sa-primary-yellow border-[1px] border-sa-border-black font-medium">
            Purchase History
          </button>
          <button className=" w-full text-base py-2 bg-white text-sa-menu-green border-[1px] border-sa-border-black font-medium">
            Sort: Date All
          </button>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (kind) => dispatch(showModal(kind)),
  };
};

export default connect(null, mapDispatchToProps)(PurchaseHistory);

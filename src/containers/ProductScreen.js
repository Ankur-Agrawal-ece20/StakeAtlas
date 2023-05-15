import {
  AccessTimeOutlined,
  ExpandMore,
  LocationOnOutlined,
  MailOutline,
  Star,
  StarOutline,
  ThumbUp,
  TurnedInNot
} from "@mui/icons-material";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import Accourdion from "../components/Accourdion";
import ProductCard from "../components/Home/ProductCard";
import ProductCardMob from "../components/Home/ProductCardMob";
import ImageGallery from "../components/ImageGallery";
import TabMenu from "../components/TabMenu";
import { useState } from "react";

const tabMenuContent = {
  Description: (
    <div className="flex flex-col space-y-2">
      <p>For sale is a 4th generation iPad Air in silver color and 256 GB of storage. The tablet is in excellent
        condition and does not have any signs of scratches or marks on the screen.
      </p>
      <p>
        No AppleCare+ included.
      </p>
      <p>
        No charger included.
      </p>
    </div >
  ),
  "Item Specifics": (
    <div className=" border-x-[1px] border-b-[1px] border-black">
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
        <div className=" flex items-center justify-between px-2 py-2 border-t-[1px] border-black">
          <h1 className=" w-1/2 text-xs ">{e.title} : </h1>
          <h1 className=" w-1/2 text-xs font-semibold">{e.value}</h1>
        </div>
      ))}
    </div>
  ),
  "Known Flaws": (
    <div className="flex flex-col space-y-2">
      <p>For sale is a 4th generation iPad Air in silver color and 256 GB of storage. The tablet is in excellent
        condition and does not have any signs of scratches or marks on the screen.
      </p>
    </div >
  ),
  "Buyers Guide": (
    <div className="flex flex-col space-y-2">
      <p>This is the Buyers guide</p>
      <p>This is the Buyers guide</p>
      <p>This is the Buyers guide</p>
      <p>This is the Buyers guide</p>
      <p>This is the Buyers guide</p>
      <p>This is the Buyers guide</p>
    </div>
  )
}


const ProductScreen = () => {
  const map = require("../assets/new design/map.png");

  const allImages = [
    require("../assets/new design/car/car_img2.png"),
    require("../assets/new design/car/car_img3.png"),
    require("../assets/new design/car/car_img4.png"),
    require("../assets/new design/car/car_img5.png"),
    require("../assets/new design/car/car_img6.png"),
    require("../assets/new design/car/car_img7.png"),
    require("../assets/new design/car/car_img8.png"),
    require("../assets/new design/car/car_img9.png"),
  ];

  const carImg = {
    interior: [
      require("../assets/new design/car/car_img2.png"),
      require("../assets/new design/car/car_img3.png"),
    ],
    exterior: [
      require("../assets/new design/car/car_img4.png"),
      require("../assets/new design/car/car_img5.png"),
      require("../assets/new design/car/car_img6.png"),
      require("../assets/new design/car/car_img7.png"),
    ],
    images: [
      require("../assets/new design/car/car_img6.png"),
    ],
    main: require("../assets/new design/car/car_img1.png"),
    all: require("../assets/new design/car/car_img7.png"),
  }


  const descData = [
    "Electric power steering",
    "Power windows",
    "Automatic climate control AC with rear vent",
    "Touch screen Android system with Bluetooth and navigation",
    "Steering mount control",
    "Remote control central locking",
    "Fog lamp",
    "DRL with projector LED head lights",
    "LED tail lights",
    "Sun roof",
    "Rail roof",
    "ABS and EBD",
    "Rear defogger",
    "Rear spoiler",
    "Reverse parking sensor with camera",
    "Good condition tyres",
    "Full company service",
    "Insurance current",
    "Finance and exchange facilities available",
    "only interested buyers press call button.",
  ];

  const [menu, setMenu] = useState(0);

  return (
    <div>
      {/* Desktop Version */}
      <div className="px-14 mt-7 hidden xl:flex xl:flex-col">
        <div className=" border-[2px] border-black mx-1.5">
          <div className=" py-1 bg-yellow-200 px-4 border-b-[2px] border-black flex items-center justify-between">
            <h1 className=" text-[19px] font-semibold ">Condition: Used</h1>
            <h1 className=" text-[19px] font-semibold ">
              Sold by:
              <span className="underline">Akshat Tripathi</span>
            </h1>
          </div>

          <div className=" flex items-center justify-between px-5">
            <div className=" py-3.5">
              <h1 className=" text-4xl font-semibold">Hyundai Venue (2019)</h1>
              <div className=" flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 mt-1">
                  <LocationOnOutlined
                    className="text-grey-100"
                    fontSize={"30"}
                  />
                  <h1 className="text-sm xl:text-lg font-normal text-grey-100">
                    Rajendra nagar, New Delhi
                  </h1>
                </div>
                <div className="flex items-center justify-start gap-x-1 mt-1">
                  <AccessTimeOutlined
                    className="text-grey-100"
                    fontSize={"10"}
                  />
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
        </div>

        <div className="px-5 mx-1.5 py-5 border-t-[1px] border-r-[2px] border-l-[2px] border-b-[2px] border-black">
          <ImageGallery images={carImg} imageCount={allImages.length} />
        </div>

        <div className=" mx-1.5 mt-4.5 flex space-x-4 relative items-start">
          {/* Description  */}
          <div className=" flex-1">
            <div className=" border-[1px] border-black px-5 py-3">
              <Accourdion title="Highlights">
                <TabMenu state={menu} setState={setMenu} items={tabMenuContent} />
              </Accourdion>
            </div>
            <div>
              <div className=" border-[1px] border-black px-5 py-3 border-t-transparent">
                <Accourdion title={"Akshat’s Report Card"}>
                  <div className="pb-4">
                    <div className=" flex items-start justify-between">
                      <div className=" w-[60%] border-x-[1px] border-b-[1px] border-black">
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
                          <div className=" flex items-center justify-between px-2 border-t-[1px] border-black">
                            <div className="border-r-[1px] border-black py-2.5 w-[56%]">
                              <h1 className="text-base ">{e.title}</h1>
                            </div>
                            <div className=" w-[44%] py-2.5 flex-1 pl-10">
                              <h1 className="text-base font-semibold">
                                {e.value}
                              </h1>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className=" w-[40%] self-stretch border-y-[1px] border-r-[1px] border-black">
                        <div className=" h-1/2 py-2 pl-10 border-b-[1px] border-black">
                          <h1 className="text-xl font-bold text-[#888888]">
                            Items Sold
                          </h1>
                          <h1 className=" text-4xl font-bold">04</h1>
                        </div>
                        <div className=" h-1/2 py-2 pl-10">
                          <h1 className="text-xl font-bold text-[#888888]">
                            5 Start Reviews
                          </h1>
                          <h1 className=" text-4xl font-bold">02</h1>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4">
                      <h1 className=" text-2xl font-medium">
                        Here’s what others have to say about Akshat:
                      </h1>
                      <div className=" flex items-center gap-x-1 mt-2">
                        <h1 className=" text-lg font-bold">@Sart....mk</h1>
                        <div className=" flex items-start">
                          <Star
                            className=" text-yellow-100"
                            fontSize="medium"
                          />
                          <Star
                            className=" text-yellow-100"
                            fontSize="medium"
                          />
                          <Star
                            className=" text-yellow-100"
                            fontSize="medium"
                          />
                          <StarOutline className=" " fontSize="medium" />
                          <StarOutline className=" " fontSize="medium" />
                        </div>
                      </div>
                      <p className=" text-base font-normal text-grey-100 mt-2">
                        Check who the seller is very carefully. If it says Loop
                        Mobile then the phone is most definitely used even
                        though they say in the phone specifications that it is a
                        new phone. When you open the box, there is paperwork
                        that specifically states that it is a refurbished phone
                        and that there is no warranty on the phone.
                      </p>
                      <div className="underline font-medium text-lg cursor-pointer text-blue-100 mt-2">
                        See All Reviews
                      </div>
                    </div>
                  </div>
                </Accourdion>
              </div>

              <div className="border-[1px] border-t-transparent border-black py-3 px-5">
                <Accourdion title={"Questions about product"}>
                  <div className="pb-3">
                    <div className="border-[1px] border-black rounded overflow-hidden flex items-start bg-lime-500">
                      <input
                        type="text"
                        placeholder="Ask Questions from seller"
                        className=" w-full px-4 py-2.5 text-black outline-none xl:text-xl  3xl:text-xl 4xl:text-[23px]"
                      />
                      <button className=" w-64 py-3 text-[12px] rounded-[2px] bg-sa-primary-yellow text-base text-black border-l-[1px] border-black font-semibold">
                        Submit
                      </button>
                    </div>
                    <div>
                      <div className="flex gap-3 mt-4 mb-3 pb-3 border-b-[1px] border-black">
                        <div className="flex flex-col">
                          <ThumbUp className="text-blue-100" fontSize="large" />
                          <span className="text-black text-bse">04</span>
                        </div>
                        <div>
                          <h1 className="font-medium text-base">
                            Q. I've received a phone and cable. But there is no
                            adapter, is this phone box comes without an adapter?
                          </h1>
                          <h1 className="text-base font-medium mt-1">
                            A. You need to but the adapter separately, the box
                            doesn't contains an adapter.
                          </h1>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-4 mb-3 pb-3">
                        <div className="flex flex-col">
                          <ThumbUp className="text-blue-100" fontSize="large" />
                          <span className="text-black text-bse">04</span>
                        </div>
                        <div>
                          <h1 className="font-medium text-base">
                            Q. I've received a phone and cable. But there is no
                            adapter, is this phone box comes without an adapter?
                          </h1>
                          <h1 className="text-base font-medium mt-1">
                            A. You need to but the adapter separately, the box
                            doesn't contains an adapter.
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="underline underline-offset-4 font-medium text-xl cursor-pointer text-blue-100 mt-2">
                      See all questions
                    </div>
                  </div>
                </Accourdion>
              </div>
            </div>
          </div>

          {/* Sold By */}
          <div className=" w-[41.5%] h-fit border-r-[1px] border-l-[1px] sticky right-0 top-2 border-y-[1px] border-black px-5 py-4.5">
            <h1 className=" text-[24px] font-semibold tracking-wide">
              Sold By
            </h1>
            <div className="flex items-center justify-between mt-4">
              <div className=" flex items-center gap-x-4">
                <div className="w-14 border-[1px] border-black rounded-full">
                  <img
                    src={require("../assets/new design/user.png")}
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

              <div className="flex h-full items-center space-x-2">
                <button className=" w-full text-[12px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                  <TurnedInNot className=" text-xs" />
                </button>
                <button className=" w-full text-[12px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                  <MailOutline className=" text-xs" />
                </button>
                <div className=" flex items-center h-fit space-x-0.5">
                  <h1 className=" text-2xl font-bold">4.5</h1>
                  <Star className=" text-yellow-100 text-xs" />
                </div>
              </div>
            </div>
            <div className=" flex items-cente justify-between mt-7">
              <button className=" w-[47%]  text-[15px] py-3.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
                Pay Deposit
              </button>
              <button className=" w-[47%]  text-[15px] py-3.5 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
                Make an Offer
              </button>
            </div>

            {/* offer history */}
            {/* <div className=" px-3.5 pt-2 pb-1 border-[1px] rounded border-black mt-5">
              <Accourdion title={"Offer History"}>
                <div className="pb-3">
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[18px] text-[#3E3E3E] font-medium leading-[16px]">
                      08 Feb, 03:30 AM
                    </h1>
                    <h1 className="text-[18px] text-black font-semibold leading-[22px]">
                      Sukun Verma
                    </h1>
                    <h1 className="font-italic text-black text-[18px]">
                      Made an offer
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[18px] text-[#3E3E3E] font-medium leading-[16px]">
                      08 Feb, 03:30 AM
                    </h1>
                    <h1 className="text-[18px] text-black font-semibold leading-[22px]">
                      Sukun Verma
                    </h1>
                    <h1 className="font-italic text-black text-[18px]">
                      Made an offer
                    </h1>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <h1 className="text-[18px] text-[#3E3E3E] font-medium leading-[16px]">
                      08 Feb, 03:30 AM
                    </h1>
                    <h1 className="text-[18px] text-black font-semibold leading-[22px]">
                      Sukun Verma
                    </h1>
                    <h1 className="font-italic text-black text-[18px]">
                      Made an offer
                    </h1>
                  </div>
                </div>
              </Accourdion>
            </div> */}

            <div className="px-5 border-[1px] flex flex-col space-y-3 py-3 border-black mt-5 rounded-lg">
              <h2 className="text-xl font-semibold">Location</h2>
              <div className="flex items-center space-x-1 -ml-2">
                <LocationOnOutlined className="text-sa-text-gray" />
                <p className="text-sa-text-gray">Rajendra nagar, New Delhi</p>
              </div>
              <div className="rounded-lg border-[1px] border-black">
                <img src={map} className="object-cover" />
              </div>
            </div>

            {/* Delivery & Returns */}
            {/* <div className=" px-3.5 pb-1 border-[1px] rounded border-black mt-5">
              <Accourdion title={"Delivery & Returns"}>
                <div className="pb-3">
                  <div className=" flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-x-1 ">
                        <LocationOnOutlined fontSize="10" />
                        <h1 className="text-lg font-medium text-sa-text-gray">
                          Delivery to 462016 : FREE
                        </h1>
                      </div>
                      <div className="ml-5 mt-1 space-y-0.5">
                        <p className=" text-base font-normal">
                          ₹520 Standard shipping to other city
                        </p>
                        <p className=" text-base font-normal">
                          Est. delivery Mon, Feb 15-Fri, Feb 18 to 462016
                        </p>
                      </div>
                    </div>
                    <div className=" w-fit underline underline-offset-4 font-semibold text-base cursor-pointer text-blue-100">
                      Change
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mt-2 border-t-[0.5px] border-black pt-4 ">
                    <img
                      src={require("../assets/new design/exchange.png")}
                      className=" w-5 mt-2"
                      alt=""
                    />
                    <h1 className="text-[16px] ">
                      <span className="font-semibold">Returns :</span> Hassle
                      free returns covered by Stake Atlas Guarantee within 14
                      days of delivery
                    </h1>
                  </div>
                </div>
              </Accourdion>
            </div> */}

            {/* questions Have a Question? */}
            {/*<div className=" px-3.5 py-3 border-[1px] rounded border-black mt-5 flex items-center justify-between ">
              <div className=" flex items-center gap-x-2">
                <img
                  src={require("../assets/new design/conversation.png")}
                  className="w-7"
                  alt=""
                />
                <h1 className=" text-lg font-semibold">
                  <span className="text-[#2192FF]"> 2 answered questions</span>{" "}
                  | Have a Question?
                </h1>
              </div>
              <ExpandMore />
        </div> */}
          </div>
        </div>
        <div className="px-14 py-10 hidden xl:flex xl:flex-col border-t-[1px] border-black mt-16">
          <h1 className="text-3xl font-semibold 2xl:text-4xl">
            Recommended Listings
          </h1>
          <p className=" w-[90%] text-sm font-normal leading-5 mt-2 2xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="hidden xl:flex  items-center justify-between mt-10 mb-20 gap-5">
            {[1, 2, 3, 4].map((e) => (
              <ProductCard />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="px-[2.5px] mt-6 xl:hidden">
        <div className="border-[1px] border-black pt-2.5 mb-4">
          <div className="px-1">
            <div>
              <ImageGallery images={carImg} imageCount={allImages.length} />
            </div>

            <div className=" py-1.5 bg-[#4DB041] px-2 border-y-[1.5px] border-black">
              <h1 className=" text-xs font-medium text-white ">
                Condition: Used
              </h1>
            </div>

            <div className="py-2.5">
              <h1 className=" text-[16.3px] font-semibold">
                iPhone 12 128GB White - Apple
              </h1>
              <div className="flex items-center gap-x-1 mt-1">
                <LocationOnOutlined className="text-grey-100" fontSize={"30"} />
                <h1 className="text-sm xl:text-lg font-normal text-grey-100">
                  Rajendra nagar, New Delhi
                </h1>
              </div>
              <div className="flex items-center justify-start gap-x-1 mt-1">
                <AccessTimeOutlined className="text-grey-100" fontSize={"10"} />
                <h1 className="text-[13px] font-medium text-grey-100">
                  3d 18hrs | Mon, Dec 05
                </h1>
              </div>
              <h1 className="text-[21px] font-bold text-sa-menu-green text-left py-1">
                ₹4,60,000
              </h1>
              <div className=" flex items-center gap-2 mt-1">
                <button className=" w-1/2  text-[12px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1.5px] border-sa-border-black font-semibold">
                  Add to Cart
                </button>
                <button className=" w-1/2  text-[12px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1.5px] border-sa-border-black font-semibold">
                  Make an Offer
                </button>
              </div>
            </div>
          </div>

          <div className=" border-t-[1px] border-black mt-2.5 px-3 py-2.5">
            <h1 className=" text-[14px] font-semibold">Sold By</h1>

            <div className="mt-1 flex items-center justify-between">
              <div className="flex items-center gap-x-1.5">
                <div className="w-10">
                  <img
                    src={require("../assets/new design/user.png")}
                    alt=""
                    className=" w-full"
                  />
                </div>
                <div>
                  <h1 className=" text-sm underline font-semibold">
                    Akshat Tripathi
                  </h1>
                  <h1 className="text-xs font-normal text-grey-100">
                    Member since July 2022
                  </h1>
                </div>
              </div>
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" text-2xl font-bold">4.5</h1>
                <Star className=" text-yellow-100 text-xs" />
              </div>
            </div>

            <div>
              <button className=" w-full text-[12px] mt-2.5 py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold flex items-center justify-center">
                <MailOutline className=" text-xs mr-1" />
                Send Message
              </button>
            </div>
            <div className="px-5 border-[1px] flex flex-col space-y-3 py-3 border-black mt-5 rounded-lg">
              <h2 className="text-base font-semibold">Location</h2>
              <div className="flex items-center space-x-0.5 -ml-2">
                <LocationOnOutlined className="text-sa-text-gray h-3 w-3" />
                <p className="text-sa-text-gray text-sm">Rajendra nagar, New Delhi</p>
              </div>
              <div className="rounded-lg w-full md:w-fit mx-auto border-[1px] border-black">
                <img src={map} className="object-cover" />
              </div>
            </div>

          </div>

          <div className=" px-3 py-3 border-t-[1px] border-black flex flex-col space-y-3">
            <h1 className="text-base font-semibold">Highlights</h1>
            <div className="border-[1px] rounded-lg px-3 border-black">
              <Accourdion title={"Description"}>
                <p className=" text-xs font-normal pb-3">
                  For sale is a 4th generation iPad Air in silver color and 256 GB
                  of storage. The tablet is in excellent condition and does not
                  have any signs of scratches or marks on the screen.
                  <br />
                  <br /> No AppleCare+ included. <br />
                  No charger included.
                </p>
              </Accourdion>
            </div>
            <div className=" px-3 rounded-lg border-[1px] border-black">
              <Accourdion title={"Questions about product"}>
                <div className="pb-3">
                  <div className="flex gap-3">
                    <div className="flex flex-col">
                      <ThumbUp className="text-blue-100" fontSize="16" />
                      <span className="text-black text-xs">04</span>
                    </div>
                    <div>
                      <h1 className="font-medium text-xs">
                        Q. I've received a phone and cable. But there is no
                        adapter, is this phone box comes without an adapter?
                      </h1>
                      <h1 className="text-xs font-medium mt-1">
                        A. You need to but the adapter separately, the box doesn't
                        contains an adapter.
                      </h1>
                    </div>
                  </div>
                  <div className="underline font-medium text-xs cursor-pointer text-blue-100 mt-2">
                    See all questions
                  </div>

                  <div className=" mt-3 border-[1px] border-black rounded overflow-hidden">
                    <input
                      type="text"
                      placeholder="Ask Questions from seller"
                      className=" w-full h-10 px-2 text-black outline-none  3xl:text-xl 4xl:text-[23px] mb-3"
                    />
                    <button className=" w-full  text-[12px] py-2 px-3 rounded-[2px] bg-sa-primary-yellow text-black border-x-[0.5px] border-t-[0.5px] border-black font-semibold">
                      Submit
                    </button>
                  </div>
                </div>
              </Accourdion>
            </div>
            <div className=" px-3 rounded-lg border-[1px] border-black mt-1">
              <Accourdion title={"Sellers Ratings"}>
                <div className="pb-4">
                  <div className=" border-x-[1px] border-b-[1px] border-black mr-3.5">
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
                      <div className=" flex items-center justify-between px-2 py-2 border-t-[1px] border-black">
                        <h1 className=" w-[60%] text-xs ">{e.title}</h1>
                        <h1 className=" w-[40%] text-xs font-semibold">
                          {e.value}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <div className=" flex items-center justify-between py-2 border-y-[1px] border-black mt-4">
                    <div className=" w-1/2 flex items-center gap-x-2  ">
                      <h1 className="text-xs font-medium">Items Sold</h1>
                      <h1 className=" text-xl font-bold">04</h1>
                    </div>
                    <div className=" w-1/2 flex items-center gap-x-2  ">
                      <h1 className="text-xs font-medium">5 Start Reviews</h1>
                      <h1 className=" text-xl font-bold">02</h1>
                    </div>
                  </div>
                  <div className=" mt-3">
                    <h1 className=" text-sm font-medium">
                      Here’s what others have to say about Akshat:
                    </h1>
                    <div className=" flex items-center gap-x-1 mt-3">
                      <h1 className=" text-sm font-bold">@Sart....mk</h1>
                      <div className=" flex items-start">
                        <Star className=" text-yellow-100" fontSize="10" />
                        <Star className=" text-yellow-100" fontSize="10" />
                        <Star className=" text-yellow-100" fontSize="10" />
                        <StarOutline className=" " fontSize="10" />
                        <StarOutline className=" " fontSize="10" />
                      </div>
                    </div>
                    <p className=" text-xs font-normal text-grey-100 mt-2">
                      Check who the seller is very carefully. If it says Loop
                      Mobile then the phone is most definitely used even though
                      they say in the phone specifications that it is a new phone.
                      When you open the box, there is paperwork that specifically
                      states that it is a refurbished phone and that there is no
                      warranty on the phone.
                    </p>
                    <div className="underline font-medium text-xs cursor-pointer text-blue-100 mt-2">
                      See All Reviews
                    </div>
                  </div>
                </div>
              </Accourdion>
            </div>
            <div className=" px-3 rounded-lg border-[1px] border-black mt-1">
              <Accourdion title={"Known Flaws"}>
                <p className="text-sm pb-3">Repainted bumper, front passenger door, fender
                  Some scratches on front bumper
                  Dull right headlight</p>
              </Accourdion>
            </div>
          </div>
          <div className="border-t-[1px] border-black py-3 px-3">
            <Accourdion title={<p className="text-base">Akshat's Report Card</p>}>
              <div className="pb-4">
                <div className=" flex flex-col space-y-2 items-start justify-between">
                  <div className=" w-full border-x-[1px] border-b-[1px] border-black">
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
                      <div className=" flex items-center justify-between px-2 border-t-[1px] border-black">
                        <div className="border-r-[1px] border-black py-2.5 w-[56%]">
                          <h1 className="text-base ">{e.title}</h1>
                        </div>
                        <div className=" w-[44%] py-2.5 flex-1 mx-auto">
                          <h1 className="text-base font-semibold text-center">
                            {e.value}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className=" w-full px-2 justify-between border-b-[1px] border-black flex self-stretch">
                    <div className=" py-2 flex items-center space-x-2">
                      <h1 className="text-lg font-bold text-[#888888]">
                        Items Sold
                      </h1>
                      <h1 className=" text-2xl font-bold">04</h1>
                    </div>
                    <div className="flex items-center space-x-2 py-2">
                      <h1 className="text-lg font-bold text-[#888888]">
                        5 Start Reviews
                      </h1>
                      <h1 className=" text-2xl font-bold">02</h1>
                    </div>
                  </div>
                </div>
                <div className=" mt-4">
                  <h1 className=" text-base font-medium">
                    Here’s what others have to say about Akshat:
                  </h1>
                  <div className=" flex items-center gap-x-1 mt-2">
                    <h1 className=" text-base font-bold">@Sart....mk</h1>
                    <div className=" flex items-start">
                      <Star
                        className=" text-yellow-100"
                        fontSize="small"
                      />
                      <Star
                        className=" text-yellow-100"
                        fontSize="small"
                      />
                      <Star
                        className=" text-yellow-100"
                        fontSize="small"
                      />
                      <StarOutline className=" " fontSize="small" />
                      <StarOutline className=" " fontSize="small" />
                    </div>
                  </div>
                  <p className=" text-sm font-normal text-grey-100 mt-2">
                    Check who the seller is very carefully. If it says Loop
                    Mobile then the phone is most definitely used even
                    though they say in the phone specifications that it is a
                    new phone. When you open the box, there is paperwork
                    that specifically states that it is a refurbished phone
                    and that there is no warranty on the phone.
                  </p>
                  <div className="underline font-medium text-base cursor-pointer text-blue-100 mt-2">
                    See All Reviews
                  </div>
                </div>
              </div>
            </Accourdion>
          </div>
          <div className=" px-3 border-t-[1px] border-black mt-1 pb-4 pt-4">
            <h1 className=" text-sm font-semibold">More Products by Akshat</h1>
            <div className=" flex items-center gap-x-4 mt-3">
              {[0, 1].map((e) => (
                <div className="border-[1px] border-black buttonHover rounded relative mb-4">
                  <div className="px-1.5 py-1.5">
                    <div className="w-[60px] h-[28px] bg-bg-smallBookmark bg-no-repeat flex items-center justify-center absolute top-3 -left-2 rounded-sm">
                      <h1 className="text-[10px] font-semibold text-black text-center">
                        USED
                      </h1>
                    </div>
                    <div className="w-[100%] border border-solid border-black rounded">
                      <img
                        src={require("../assets/new design/car_img.png")}
                        alt=""
                        className="w-full aspect-square rounded"
                      />
                    </div>
                    <div className="pt-1 pb-1">
                      <h1 className="text-xs font-semibold text-black">
                        Hyundai Venue(2019)
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" px-3 border-t-[1px] border-black mt-1 pb-4 pt-4">
            <h1 className=" text-sm font-semibold">Recommended Listings</h1>
            <p className=" text-xs font-medium mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <div className="xl:hidden pt-5">
              {[0, 1, 2, 3].map((e) => (
                <ProductCardMob />
              ))}
            </div>
            <div className="xl:hidden w-full flex items-center justify-center">
              <button className="w-full bg-sa-menu-green text-white  py-2 px-6 rounded font-medium text-xs text-center">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProductScreen;

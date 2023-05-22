import { Delete, LocationOnOutlined } from "@mui/icons-material";
import { connect } from "react-redux";
import ProductCard from "../components/Home/ProductCard";
import TagRibbon from "../components/TagRibbon";
import { DELIVERY_LOCATION_MODAL, PAYMENT_MODAL } from "../extras/constants";
import { showModal } from "../redux/actions/modal";
import classNames from "../utils/classNames";
// import { showModal } from '../redux/actions/modal';

const CartScreen = ({ showModal }) => {
  let data = [
    {
      id: 1,
      seller: '@AkshatTripathi',
      title: "DeepCool PM850D Power Supply Including shipping",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      price: "3,000",
      img: require("../assets/new design/car_img.png"),
      shipping: "200.00",
      deliverydate: "12 Dec 2022"
    },
    {
      id: 6,
      seller: '@AkshatTripathi',
      title: "Nvidia RTX 3070 Foundation Edition",
      desc: "Manufacturing Date- December 2021 Purchased Bill Feb 2022. Used for CAD Application.",
      price: "3,000",
      img: require("../assets/new design/car_img.png"),
      shipping: "200.00",
      deliverydate: "12 Dec 2022"
    },
    {
      id: 11,
      seller: '@AkshatTripathi',
      title: "DeepCool PM850D Power Supply Including shipping",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      price: "3,000",
      img: require("../assets/new design/car_img.png"),
      shipping: "200.00",
      deliverydate: "12 Dec 2022"
    },
    {
      id: 21,
      seller: '@RakshitTripathi',
      title: "Nvidia RTX 3070 Foundation Edition",
      desc: "Manufacturing Date- December 2021 Purchased Bill Feb 2022. Used for CAD Application.",
      price: "3,000",
      img: require("../assets/new design/car_img.png"),
      shipping: "200.00",
      deliverydate: "12 Dec 2022"
    },
  ];

  let arr = [];
  let cdata = data.sort((a, b) => a.seller > b.seller);
  for (let i = 0; i < cdata.length; i++) {
    if (i === 0 || cdata[i - 1].seller !== cdata[i].seller) {
      arr.push({ "seller": cdata[i].seller, "items": [cdata[i]] });
    }
    else {
      arr[arr.length - 1].items.push(cdata[i]);
    }
  }
  data = arr;

  return (
    <div>
    <div className="px-1 mt-5 xl:px-12 xl:pt-8 xl:mt-0 xl:bg-[#FFFCF8] xl:pb-20 border-b-2 border-black 2xl:px-[64.5px] 2xl:pt-[3.2rem]">
      <div className=" border-[1px] border-black xl:border-none xl:flex xl:flex-row xl:justify-between">
        <div className=" flex-1">
          <div className="flex-1 xl:bg-white  xl:border-[1px] xl:border-black">
            <div className="px-2.5 py-3 xl:hidden">
              <div className="flex items-center justify-between">
                <h1 className="text-[15px] font-semibold text-black">
                  Delivery to:
                </h1>
                <div
                  onClick={() => {
                    showModal({
                      modalType: DELIVERY_LOCATION_MODAL,
                      modalTitle: ``,
                      modalSubTitle: "",
                    });
                  }}
                  className="underline font-medium text-sm xl:text-xl cursor-pointer text-[#1E44CD] "
                >
                  Change
                </div>
              </div>
              <div className="flex items-start justify-between gap-x-2 mt-2">
                <LocationOnOutlined />
                <p className="text-sm font-normal text-[#2E2E2E] mb-1.5">
                  E-7-52 Arera Colony Bhopal, Madhya Pradesh, 462016
                </p>
              </div>
            </div>
            <div className="px-4 py-3 hidden xl:flex xl:flex-col 2xl:py-5">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-semibold text-black 2xl:text-[20.8px]">
                  Delivery to:
                </h1>
              </div>
              <div className="flex items-start justify-between gap-x-2 mt-2">
                <div className=" flex">
                  <LocationOnOutlined />
                  <p className="text-sm font-normal text-[#2E2E2E] ml-1 2xl:text-base">
                    E-7-52 Arera Colony Bhopal, Madhya Pradesh, 4620161212
                  </p>
                </div>
                <button
                  onClick={() => {
                    showModal({
                      modalType: DELIVERY_LOCATION_MODAL,
                      modalTitle: ``,
                      modalSubTitle: "",
                    });
                    console.log("run");
                  }}
                  className="underline font-medium text-sm cursor-pointer text-[#1E44CD] 2xl:text-base "
                >
                  Change
                </button>
              </div>
            </div>

            <div className="xl:hidden">
              {data.map((item, j) => (
                <div key={j} className="mb-4">
                  <div className="px-2 py-2.5 bg-[#F2FBF6] border-t-2 border-x-2 border-b-[1.5px] border-black flex items-center justify-between">
                    <h1 className="text-xs font-normal text-black">
                      Sold By
                      <span className=" text-sm font-semibold ml-1">
                        {item.seller}
                      </span>
                    </h1>
                    <div className="underline font-medium text-sm cursor-pointer text-[#1E44CD] ">
                      Shop More
                    </div>
                  </div>
                  <div className=" relative mt-1">
                    {item.items.map((product, i) => (
                      <div key={i} className="py-3 px-2 border-b-[1px] border-black">
                        <div className=" flex items-start">
                          <div className="border border-black w-[25%] h-20 rounded">
                            <img
                              src={product.img}
                              alt=""
                              className="w-full h-full object-cover aspect-square"
                            />
                          </div>
                          <div className=" flex-1 pl-2">
                            <h1 className="text-[14px] font-normal text-black leading-4">
                              {product.title} - {product.desc}
                            </h1>
                            <h1 className="text-lg font-semibold text-black mt-1">
                              ₹{product.price}
                            </h1>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2 border-t-[1px] border-b-[1px] border-black">
                          <div className="w-1/2 py-1 border-r-[1px] border-black">
                            <h1 className="text-xs font-normal text-black">
                              Shipping Charges
                            </h1>
                            <h1 className=" text-xs font-semibold ml-1">
                              +₹{product.shipping}
                            </h1>
                          </div>
                          <div className="w-1/2 py-1">
                            <h1 className="text-xs font-normal text-black text-right">
                              Delivered by
                            </h1>
                            <p className=" text-xs font-semibold ml-1 text-right">
                              {product.deliverydate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="underline font-medium text-sm cursor-pointer text-[#1E44CD] ">
                            Save for later
                          </div>
                          <div className="underline font-medium text-sm cursor-pointer text-[#BC0000] ">
                            Remove
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden xl:flex xl:flex-col">
              {data.map((item, j) => (
                <div className=" w-full flex flex-col items-start">
                  <div className=" w-full flex items-center justify-between px-3 py-3 bg-[#F2FBF6] border-2 border-black 2xl:py-3.5 2xl:border-[1.5px] 2xl:mt-1">
                    <h1 className="text-xs font-medium tracking-[0.5px] 2xl:text-base">
                      Sold By{" "}
                      <span className=" text-sm text-black font-semibold 2xl:text-lg">
                        {item.seller}
                      </span>
                    </h1>
                    <h1 className="text-[13.5px] font-semibold text-[#2192FF] underline 2xl:text-base">
                      Shop More from This Seller
                    </h1>
                  </div>

                  <div className="w-full">
                    {item.items.map((e, index) => (
                      <div
                        key={index}
                        className={`mx-3.5 py-4.5 flex items-start ${item.items.length - 1 === index ? "" : "border-b-[1.5px]"
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
                        <div className=" w-[22%] 2xl:w-[22%]  border border-black rounded-md ">
                          <img
                            src={e.img}
                            alt=""
                            className="w-full aspect-square object-cover h-[10rem]"
                          />
                        </div>
                        <div className=" ml-4 self-stretch flex-1 flex flex-col justify-between 2xl:mt-1">
                          <div className="flex items-start justify-between w-full">
                            <div>
                              <h1 className="text-lg font-medium leading-3 2xl:text-[22px]">
                                {e.title}
                              </h1>
                              <h1 className="text-[13px] mt-1.5 italic text-[#5C5C5C] 2xl:mt-2.5 2xl:text-base">
                                “{e.desc}“
                              </h1>
                            </div>
                            <div className="flex justify-end flex-col items-end">
                              <h1 className="text-lg font-semibold leading-3 2xl:text-[22px]">
                                ₹{e.price}
                              </h1>

                              <h1 className="text-[13px] mt-1.5 text-[#5C5C5C] 2xl:text-base 2xl:mt-2.5">
                                Free Shipping
                              </h1>
                            </div>
                          </div>

                          <div className=" flex items-center justify-between">
                            <h1 className="text-[13.5px] font-semibold text-[#2192FF] underline 2xl:text-base 2xl:font-medium">
                              Save for later
                            </h1>
                            <button className="text-[14px] font-semibold ">
                              <Delete style={{ fontSize: "18px" }} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            </div>
            <div className="xl:flex items-center gap-2 mt-2 hidden">
              <img src={require("../assets/new design/exchange.png")} />
              <h1 className="text-[12px] 2xl:text-base">
                <span className="font-semibold">Returns :</span> Hassle free
                returns covered by Stake Atlas Guarantee within 14 days of
                delivery
              </h1>
            </div>
          </div>
          <div className="bg-white xl:w-[33%] 2xl:w-[33%]  xl:h-fit xl:px-2 xl:border-y-[1px] xl:border-r-[1px] border-black">
            <div className="mt-4 flex items-center justify-between rounded px-2 2xl:px-3 2xl:mt-5">
              <input
                type="text"
                placeholder="#Promo Code"
                className={classNames(
                  " rounded-l outline-none font-medium flex-1 py-2 px-2 border-[1px] border-black select-none cursor-not-allowed 2xl:py-[12px]"
                )}
              />
              <button className=" w-24 bg-sa-menu-green text-white px-4 py-2 rounded-r border-[1px] border-black 2xl:py-[12px] 2xl:w-[7.4rem]">
                {"Apply"}
              </button>
            </div>
            <div className="px-3 mb-20 xl:mb-0">
              <div className="mb-2 mt-3 xl:mb-4 2xl:mt-5">
                <h1 className="text-lg xl:text-xl font-semibold 2xl:text-[24px]">
                  Your cart
                  <span className="text-[#0F7975]"> (3 Items)</span>
                </h1>
              </div>
              <div className="border-t-[1px] border-black pt-3 2xl:pb-3 2xl:pt-4">
                <div className="flex items-center justify-between w-full mb-2 2xl:pb-2">
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    Subtotal
                  </h1>
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    ₹1,10,000.00/-
                  </h1>
                </div>
                <div className="flex items-center justify-between w-full 2xl:pb-2">
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    Shipping
                  </h1>
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    ₹200.00/-
                  </h1>
                </div>
              </div>
              <div className="border-t-[1px] border-black pt-3">
                <div className="flex items-center justify-between w-full mb-2 2xl:pb-3 2xl:pt-2">
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    Promo DEAL40
                  </h1>
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px] text-black">
                    -₹2,000.00/-
                  </h1>
                </div>
              </div>
              <div className="border-t-[1px] xl:border-b-[1px]  xl:pb-2 border-black pt-3 pb-4 2xl: 2xl:pb-6">
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    Total Amount
                  </h1>
                  <h1 className="text-sm xl:text-lg font-semibold 2xl:text-[22px]">
                    ₹1,08,200.00/-
                  </h1>
                </div>
              </div>
              <button
                onClick={() => {
                  showModal({
                    modalType: PAYMENT_MODAL,
                    modalTitle: ``,
                    modalSubTitle: "",
                    modalProps: { "cartItems": cdata }
                  });
                  console.log("Pay");
                }}
                className="w-full bg-sa-menu-green my-4 py-2 xl:my-4 xl:mb-4 text-white rounded buttonHover relative z-40 cursor-pointer"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-14 py-10 hidden xl:flex xl:flex-col">
        <h1 className="text-3xl font-semibold 2xl:text-4xl">
          Saved for later
          <span className="text-[#0F7975]">(98)</span>
        </h1>
        <p className=" w-[90%] text-sm font-normal leading-5 mt-2 2xl:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="hidden xl:flex  items-center justify-between mt-10 mb-20">
          {[1, 2, 3, 4].map((e) => (
            <ProductCard />
          ))}
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

export default connect(null, mapDispatchToProps)(CartScreen);

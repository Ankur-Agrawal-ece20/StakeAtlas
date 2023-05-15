import { Delete, ExpandMore, Search, Star } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import SideMenu from "../components/Buying/SideMenu";

const SavedSeller = () => {
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("text-4xl");

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
        <div className="flex-1  bg-[#FCF9F4]">
          <div
            className={`border-b-[1px] border-black pl-12 pr-16 transition-all duration-300 ease-in-out ${
              fontSize === "text-4xl" ? "pt-8 pb-9" : "pt-4 pb-9"
            }`}
          >
            <h1 className={`${fontSize}  font-semibold text-black`}>
              Saved Sellers
            </h1>
            <div
              className={`${
                fontSize === "text-4xl" ? "mt-5" : "mt-2"
              } transition-all duration-300 ease-in-out flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-4">
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#769ED9] text-white border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                  Sellers from India
                </button>
              </div>
              <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                Ratings: High to low <ExpandMore />
              </button>
            </div>
          </div>
          <div
            onScroll={handleScroll}
            className="pl-12 pr-16 pt-9 h-[85vh] overflow-y-auto flex items-start flex-wrap gap-x-[38px]"
          >
            {[0, 1, 3, 4, 4].map((e) => (
              <div
                className="w-[30.8%] mb-10"
                onClick={() => navigate("/sellerShop")}
              >
                <div className="border-[1px] border-black cardHover rounded-md relative">
                  <div className="p-3">
                    <div className="border border-solid border-black rounded-md overflow-hidden">
                      <img
                        src={require("../assets/new design/seller_img.png")}
                        alt=""
                        className="w-full aspect-auto"
                      />
                    </div>
                    <div className="flex items-center my-2">
                      <div className="border-r-[1px] border-black flex-1">
                        <h1 className="text-xl font-semibold text-black">
                          @rakeshphonedukaan
                        </h1>
                        <h1 className="text-lg font-semibold text-[#3A3A3A]">
                          Member since 2022
                        </h1>
                      </div>
                      <div className="ml-4">
                        <div className=" flex items-center gap-x-0.5">
                          <h1 className=" text-[28px] font-bold">4.5</h1>
                          <Star className=" text-yellow-100 text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 gap-3">
                  <button className="buttonHover flex-1 text-sm   py-2 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium">
                    Contact Rakesh
                  </button>
                  <button className="buttonHover text-sm py-1.5 px-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-black font-medium">
                    <Delete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" mb-28 xl:hidden">
        <div className="pt-9 px-4 pb-3.5 border-b-[1px] border-black">
          <h1 className="text-[20px] font-semibold text-sa-menu-green">
            Buying
          </h1>
          <h1 className="text-[26px] font-semibold text-black tracking-wide">
            Saved Sellers
          </h1>
        </div>
        <div className="pt-7 px-4">
          <div className="w-full text-[18px] mb-7 py-2 px-5 rounded-[4px] bg-[#769ED9] flex items-center justify-between border-[1px] border-black">
            <button className="  text-white font-medium text-left flex-1">
              Sellers from India
            </button>
            <Search className=" text-white text-xs" />
          </div>
          {[0, 1, 2].map((e) => (
            <div className="mb-10" onClick={() => navigate("/sellerShop")}>
              <div className="border-[1px] border-black cardHover rounded-md relative">
                <div className="p-3">
                  <div className="border border-solid border-black rounded-md overflow-hidden">
                    <img
                      src={require("../assets/new design/seller_img.png")}
                      alt=""
                      className="w-full aspect-auto"
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <div className="border-r-[1px] border-black flex-1">
                      <h1 className="text-xl font-semibold text-black">
                        @rakeshphonedukaan
                      </h1>
                      <h1 className="text-lg font-semibold text-[#3A3A3A]">
                        Member since 2022
                      </h1>
                    </div>
                    <div className="ml-4">
                      <div className=" flex items-center gap-x-0.5">
                        <h1 className=" text-[28px] font-bold">4.5</h1>
                        <Star className=" text-yellow-100 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 gap-3">
                <button className=" flex-1 text-lg py-2 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium">
                  Contact Rakesh
                </button>
                <button className=" text-lg py-1.5 px-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-black font-medium">
                  <Delete />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button className=" w-full text-base py-2 bg-black text-sa-primary-yellow border-[1px] border-sa-border-black font-medium">
            Saved Seller
          </button>
          <button className=" w-full text-base py-2 bg-white text-sa-menu-green border-[1px] border-sa-border-black font-medium">
            Sort: New to old
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedSeller;

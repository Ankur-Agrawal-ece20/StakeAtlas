import { useNavigate } from "react-router";
import ProductCard from "../components/Home/ProductCard";
import ProductCardMob from "../components/Home/ProductCardMob";
import SideMenu from "../components/Seller/SideMenu";

const CurrentScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* desktop */}
      <div className=" min-h-screen xl:flex hidden">
        <SideMenu />
        <div className=" flex-1">
          <div className=" flex items-center justify-between pl-12 pr-16 pt-12">
            <h1 className=" text-[41px] font-semibold text-black tracking-wide">
              Current
            </h1>
            <button
              onClick={() => navigate("/sellnow/listing/general")}
              className=" text-lg py-3 px-16 rounded-[4px] bg-[#005C51] text-white font-medium buttonHover relative z-40 cursor-pointer"
            >
              Create new listing
            </button>
          </div>
          <div className="hidden xl:flex items-center justify-between py-10 px-10 gap-5">
            {[1, 2, 3].map((e) => (
              <div className="w-[30%]">
                <ProductCard />
                <div className="flex items-center justify-between mt-3">
                  <button className=" w-full text-lg py-2.5 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium">
                    Duplicate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="xl:hidden">
        <div className="px-4 pt-12">
          <div className="">
            <button
              onClick={() => navigate("/sellnow/listing/general")}
              className=" w-full text-lg py-2 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-medium buttonHover relative z-40 cursor-pointer"
            >
              Create new listing
            </button>
            <h1 className="text-lg font-semibold text-black my-4 text-center">
              Or
            </h1>
            <h1 className="text-[26px] font-semibold text-black tracking-wide">
              Current
            </h1>
          </div>
          <div className="xl:hidden pt-5">
            {[0, 1, 2, 3].map((e) => (
              <div className="mb-4">
                <ProductCardMob />
                <div className="flex items-center justify-between mt-3">
                  <button className=" w-full text-base py-2 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium">
                    Duplicate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-10 mt-7">
          <button className=" w-full text-base py-2 bg-white text-sa-menu-green border-[1px] border-sa-border-black font-medium">
            Sell Now Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default CurrentScreen;

import { ExpandMore } from "@mui/icons-material";
import SideMenu from "../components/Buying/SideMenu";
import ProductCard from "../components/Home/ProductCard";
import ProductCardMob from "../components/Home/ProductCardMob";

const WatchlistScreen = () => {
  return (
    <div>
      {/* desktop */}
      <div className="hidden xl:flex items-start min-h-screen">
        <div className=" self-stretch">
          <SideMenu />
        </div>
        <div className="flex-1">
          <div className=" border-b-[1px] border-black pl-12 pr-16 pt-8 pb-9">
            <h1 className="text-4xl font-semibold text-black">Watchlist</h1>
            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center gap-x-4">
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                  All
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Active
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Ended
                </button>
              </div>
              <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                Sort: New to old <ExpandMore />
              </button>
            </div>
          </div>
          <div className="pl-12 pr-16 pt-9 h-[70vh] overflow-y-auto flex items-start flex-wrap gap-x-12">
            <div className=" w-[30%] bg-sa-menu-green rounded-md mb-10 self-stretch flex items-center justify-center flex-col">
              <h1 className="text-xl font-medium text-white text-center w-[60%] mx-auto ">
                Are you sure you want to remove this
              </h1>
              <div className="flex items-center px-2 w-full gap-x-4">
                <button className=" w-1/2 text-sm mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black font-medium flex items-center justify-center border-[1px] border-black">
                  Cancel
                </button>
                <button className=" w-1/2 text-sm mt-2.5 py-2 px-5 rounded-[4px] bg-[#D1503B] text-white font-medium flex items-center justify-center border-[1px] border-black">
                  Remove
                </button>
              </div>
            </div>
            {[0, 1, 2, 3, 4].map((e) => (
              <div className="w-[30%] mb-10">
                <ProductCard />
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
            Watchlist
          </h1>
        </div>
        <div className="pt-7 px-4">
          <div className="bg-sa-menu-green py-10 rounded mb-5">
            <h1 className="text-base font-medium text-white text-center w-[60%] mx-auto ">
              Are you sure you want to remove this
            </h1>
            <div className="flex items-center gap-x-8 px-5">
              <button className=" w-1/2 text-sm mt-2.5 py-1 px-5 rounded-[4px] bg-[#FCF9F4] text-black font-medium flex items-center justify-center border-[1px] border-black">
                Cancel
              </button>
              <button className=" w-1/2 text-sm mt-2.5 py-1 px-5 rounded-[4px] bg-[#D1503B] text-white font-medium flex items-center justify-center border-[1px] border-black">
                Remove
              </button>
            </div>
          </div>
          {[0, 1, 2].map((e) => (
            <div className="mb-5">
              <ProductCardMob />
            </div>
          ))}
        </div>
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

export default WatchlistScreen;

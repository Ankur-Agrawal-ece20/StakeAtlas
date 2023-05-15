import {
  AccessTimeFilledOutlined,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import ProductCard from "../components/Home/ProductCard";
import ProductCardMob from "../components/Home/ProductCardMob";
import SideMenu from "../components/Seller/SideMenu";
import TagRibbon from "../components/TagRibbon";

const PendingScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* desktop */}
      <div className=" min-h-screen xl:flex hidden">
        <SideMenu />
        <div className=" flex-1">
          <div className=" flex items-center justify-between pl-12 pr-16 pt-12">
            <h1 className=" text-[41px] font-semibold text-black tracking-wide">
              Pending - Status of your listings
            </h1>
          </div>
          <div className="hidden xl:flex items-start justify-between py-10 px-10 gap-5">
            <div className="w-[30%] self-stretch">
              <div
                onClick={() => navigate("/product")}
                className="border-[1px] border-black cardHover rounded-md relative"
              >
                <TagRibbon
                  textClasses={
                    "text-[14px] font-semibold text-black text-center"
                  }
                  tagText="USED"
                  bgColor={"#FFDC25"}
                />
                <div className="p-3">
                  <div className="border border-solid border-black rounded-lg">
                    <img
                      src={require("../assets/new design/car_img.png")}
                      alt=""
                      className="w-full aspect-square rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-1 mt-2">
                      <LocationOnOutlined
                        className="text-sa-icon-green"
                        fontSize="10"
                      />
                      <h1 className="text-sm font-medium text-sa-text-gray">
                        Ashok Vihar Delhi
                      </h1>
                    </div>
                    <h1 className="text-xl font-medium text-black">
                      Hyundai Venue(2019)
                    </h1>
                  </div>
                </div>
              </div>
              <div className=" border-[1px] border-black mt-3 px-3.5 py-2 rounded">
                <h1 className=" text-[17px] font-semibold text-black tracking-wide">
                  Suggested changes
                </h1>
                <div className="pl-5 pt-1">
                  <ul className=" list-disc">
                    <li>Title</li>
                    <li>Description</li>
                    <li>Details </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3">
                <button
                  onClick={() => navigate("/sellnow/approval")}
                  className=" w-full text-lg py-2.5 rounded-[4px] bg-black text-white border-[1px] border-sa-border-black font-medium flex items-center justify-center gap-x-2"
                >
                  View Changes
                </button>
              </div>
            </div>
            {[1, 2].map((e) => (
              <div className="w-[30%]">
                <ProductCard />
                <div className="flex items-center justify-between mt-3">
                  <button className=" w-full text-lg py-2.5 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center gap-x-2">
                    Pending Approval
                    <AccessTimeFilledOutlined fontSize="12" />
                    10 Hr
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
              Pending -<span className=" text-lg"> Status of your listing</span>
            </h1>
          </div>
          <div className="xl:hidden pt-5">
            <div className="mb-4">
              <div
                onClick={() => navigate("/product")}
                className="border-[1px] border-black buttonHover rounded relative"
              >
                <div className="pl-1.5 py-1.5 flex">
                  <TagRibbon
                    textClasses={
                      "text-[14px] font-semibold text-black text-center"
                    }
                    tagText="USED"
                    bgColor={"#FFDC25"}
                  />
                  <div className="w-[47%]">
                    <img
                      src={require("../assets/new design/car_img.png")}
                      alt=""
                      className="w-full aspect-square"
                    />
                  </div>
                  <div className=" flex-1 overflow-hidden">
                    <div className="px-1.5">
                      <div className="flex items-center gap-x-1 mt-2">
                        <LocationOnOutlined
                          className="text-sa-icon-green"
                          fontSize="10"
                        />
                        <h1 className="text-[10px] font-medium text-sa-text-gray">
                          Ashok Vihar Delhi
                        </h1>
                      </div>
                      <h1 className="text-sm font-semibold text-black">
                        Hyundai Venue(2019)
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-[1px] border-black mt-3.5 px-3.5 py-2.5 rounded">
                <h1 className=" text-[17px] font-semibold text-black tracking-wide">
                  Suggested changes
                </h1>
                <div className="pl-5 pt-2">
                  <ul className=" list-disc">
                    <li>Title</li>
                    <li>Description</li>
                    <li>Details </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3.5">
                <button
                  onClick={() => navigate("/sellnow/approval")}
                  className=" w-full text-base py-2 rounded-[4px] bg-black text-white border-[1px] border-sa-border-black font-medium flex items-center justify-center gap-x-2"
                >
                  View Changes
                </button>
              </div>
            </div>
            {[0, 1].map((e) => (
              <div className="mb-4">
                <ProductCardMob />
                <div className="flex items-center justify-between mt-3">
                  <button className=" w-full text-base py-2 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center gap-x-2">
                    Pending Approval
                    <AccessTimeFilledOutlined fontSize="12" />
                    10 Hr
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

export default PendingScreen;

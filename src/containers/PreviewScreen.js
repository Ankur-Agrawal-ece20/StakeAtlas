import React from "react";
import { useNavigate } from "react-router";
import {
  AccessTimeOutlined,
  LocationOnOutlined,
  Star,
  MailOutline,
  ExpandMore,
  ThumbUp,
  StarOutline,
} from "@mui/icons-material";
import Accourdion from "../components/Accourdion";
import ProductCardMob from "../components/Home/ProductCardMob";
import ProductCard from "../components/Home/ProductCard";
import PreviewCardMob from "../components/Seller/PreviewCardMob";
import PreviewCardDesktop from "../components/Seller/PreviewCardDesktop";

const PreviewScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fdf8f4]">
      <div className="mt-5  flex items-center justify-center flex-col px-3 xl:mt-10">
        <h1 className=" w-[95%] text-[26px] font-semibold text-black text-center xl:text-[32px]">
          You’ve Successfully Listed your product.
        </h1>
        <p className="text-sm text-center w-[80%] mt-3 xl:w-[30%] xl:text-base">
          Your listing is pending review, we’ll notify you when it gets posted.
          You’ll be redirected to home page in <br />{" "}
          <span className="font-semibold">5sec</span>
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-[14px] py-2.5 px-10 rounded-[4px] bg-yellow-200 text-black border-[1px] border-sa-border-black font-semibold mt-4">
          Go Back Home
        </button>
      </div>

      <div className="px-3 xl:px-40 xl:mb-10">
        {/* mobile */}
        <div className="px-[2.5px] mt-6 xl:hidden">
          <h1 className=" text-xl font-semibold text-black mt-4 mb-2">
            Preview :
          </h1>
          <PreviewCardMob />
        </div>

        {/* desktop */}
        <div className="px-40">
          <PreviewCardDesktop />
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;

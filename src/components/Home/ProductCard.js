import {
  AccessTimeOutlined,
  Favorite,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import TagRibbon from "../TagRibbon";
import { useState } from "react";

const ProductCard = ({ isBuying, data }) => {
  const navigate = useNavigate();
  const [showaccept,setshowaccept]=useState(true);
  const addtocart=()=>{
    // api to save to cart
    navigate("/cart");
  }
  return (
    <div className="border-[1px] border-black cardHover rounded-md relative mb-5">
      {isBuying && (
        <div className="border-b-[1px] border-black flex items-center">
          <div className="border-r-[1px] border-black w-[50%]">
            <h1 className="text-2xl boldFont text-black text-left py-2 pl-3">
              {data.acceptprice}
            </h1>
          </div>
          <div onClick={() => {setshowaccept(!showaccept); }} className="bg-sa-success-green justify-center  w-[50%] text-center">
            <h1 className="text-xl leading-8 underline underline-offset-4 decoration-1 boldFont text-white text-center py-2 pl-3">
              Accepted
            </h1>
            <div className={`absolute w-[50%] z-20 grid grid-cols-[100%] bg-white px-4 rounded-b-lg border-[1px] border-sa-border-black ${showaccept ? "hidden" : ""}`}>
              <button className="text-left py-3 border-b-[1px] border-gray-400" onClick={() => { navigate("/cart",{state:{data:data}}); }}>Pay Now</button>
              <button className="text-left py-3 border-b-[1px] border-gray-400" onClick={() => { addtocart(); }}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
      <div
        className={`flex absolute ${
          isBuying ? "top-14" : "top-3"
        } -left-2 rounded-sm`}
        onClick={() => {showaccept && navigate("/product")}}
      >
        <TagRibbon
          textClasses={"text-[14px] font-semibold text-black text-center"}
          tagText="USED"
          bgColor={"#FFDC25"}
        />
      </div>
      <div className="p-3" onClick={() => {showaccept && navigate("/product")}}>
        <div className="border border-solid border-black rounded-lg">
          <img
            src={data.img}
            alt=""
            className="w-full aspect-square rounded-lg"
          />
        </div>
        <div onClick={() => {showaccept && navigate("/product")}}>
          <div className="flex items-center gap-x-1 mt-2">
            <LocationOnOutlined className="text-sa-icon-green" fontSize="10" />
            <h1 className="text-sm font-medium text-sa-text-gray">
            {data.location}
            </h1>
          </div>
          <h1 className="text-xl font-medium text-black">
          {`${data.title} (${data.year})`}
          </h1>
        </div>
      </div>
      <div onClick={() => {showaccept && navigate("/product")}} className="border-b-[1px] border-black border-t-[1px] flex items-center">
        <div className="border-r-[1px] border-black w-[60%]">
          <h1 className="text-2xl boldFont text-sa-dark-green text-left py-2 pl-3">
            {data.price}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-x-1 w-[40%] text-center">
          <AccessTimeOutlined className="text-black" fontSize={"10"} />
          <h1 className="text-[15px] font-medium text-black">{data.time}</h1>
        </div>
      </div>
      <div onClick={() => {showaccept && navigate("/product")}} className="flex items-center justify-between p-3">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">{data.distance.split(" ")[1]}</h1>
            <h1 className="text-xl font-black text-semibold">{data.distance.split(" ")[0]}</h1>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">
            OWNERSHIP
            </h1>
            <h1 className="text-xl font-black text-semibold">{data.ownership}</h1>
          </div>
        </div>
        <div className="bg-white border-[1px]  border-black buttonHover rounded-md p-2">
          <Favorite className="text-sa-brick-red " />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

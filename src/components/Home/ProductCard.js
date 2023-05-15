import {
  AccessTimeOutlined,
  Favorite,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import TagRibbon from "../TagRibbon";

const ProductCard = ({ isBuying }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product")}
      className="border-[1px] border-black cardHover rounded-md relative mb-5"
    >
      {isBuying && (
        <div className="border-b-[1px] border-black flex items-center">
          <div className="border-r-[1px] border-black w-[50%]">
            <h1 className="text-2xl boldFont text-black text-left py-2 pl-3">
              ₹4,00,000
            </h1>
          </div>
          <div className="bg-sa-success-green justify-center  w-[50%] text-center">
            <h1 className="text-xl leading-8 underline underline-offset-4 decoration-1 boldFont text-white text-center py-2 pl-3">
              Accepted
            </h1>
          </div>
        </div>
      )}
      <div
        className={`flex absolute ${
          isBuying ? "top-14" : "top-3"
        } -left-2 rounded-sm`}
      >
        <TagRibbon
          textClasses={"text-[14px] font-semibold text-black text-center"}
          tagText="USED"
          bgColor={"#FFDC25"}
        />
      </div>
      <div className="p-3">
        <div className="border border-solid border-black rounded-lg">
          <img
            src={require("../../assets/new design/car_img.png")}
            alt=""
            className="w-full aspect-square rounded-lg"
          />
        </div>
        <div>
          <div className="flex items-center gap-x-1 mt-2">
            <LocationOnOutlined className="text-sa-icon-green" fontSize="10" />
            <h1 className="text-sm font-medium text-sa-text-gray">
              Ashok Vihar Delhi
            </h1>
          </div>
          <h1 className="text-xl font-medium text-black">
            Hyundai Venue(2019)
          </h1>
        </div>
      </div>
      <div className="border-b-[1px] border-black border-t-[1px] flex items-center">
        <div className="border-r-[1px] border-black w-[60%]">
          <h1 className="text-2xl boldFont text-sa-dark-green text-left py-2 pl-3">
            ₹4,60,000
          </h1>
        </div>
        <div className="flex items-center justify-center gap-x-1 w-[40%] text-center">
          <AccessTimeOutlined className="text-black" fontSize={"10"} />
          <h1 className="text-[15px] font-medium text-black">02 D 12 Hr</h1>
        </div>
      </div>
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">KMS</h1>
            <h1 className="text-xl font-black text-semibold">5000</h1>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">
              OWNERSHIP
            </h1>
            <h1 className="text-xl font-black text-semibold">1st</h1>
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

import { LocationOnOutlined } from "@mui/icons-material";

const SellerCard = () => {
  return (
    <div className="w-[80%] xl:w-[23%] flex items-center justify-between flex-row">
      <div className="w-screen border-[1px] bg-white  border-black rounded-md relative overflow-hidden">
        <div className="p-3">
          <div>
            <img
              src={require("../../assets/new design/seller_img.png")}
              alt=""
              className="w-full aspect-auto"
            />
          </div>

          <div>
            <h1 className="text-base font-semibold xl:text-xl xl:font-medium text-black mt-3">
              Sellers/Store Name
            </h1>
            <div className="flex items-center gap-x-1">
              <LocationOnOutlined className="text-[#5B5B5B]" fontSize={"30"} />
              <h1 className="text-sm xl:text-lg font-normal text-[#3A3A3A]">
                Rajendra nagar, New Delhi
              </h1>
            </div>
          </div>

          <div className="mt-3">
            <h1 className=" text-xs xl:text-sm font-bold text-sa-light-brown">
              CATEGORIES
            </h1>
            <div className="space-x-2 mt-1 xl:mt-2">
              <button className="py-0.5 px-2 text-xs xl:px-4 xl:py-0.5 bg-sa-primary-yellow rounded-full border-[1px] border-black">
                Cars
              </button>
              <button className="py-0.5 px-2 text-xs xl:px-4 xl:py-0.5 bg-sa-primary-yellow rounded-full border-[1px] border-black">
                Electronics
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#00BEA7] border-t-2 border-black py-2.5 px-3 flex items-center gap-4">
          <h1 className="text-xs xl:text-sm font-semibold text-white">
            MEMBER SINCE
          </h1>
          <h1 className="text-xs  xl:text-lg font-semibold text-black">
            23rd Feb 2022
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SellerCard;

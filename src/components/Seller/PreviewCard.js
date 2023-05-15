import {
  AccessTimeOutlined,
  LocationOnOutlined,
  Star,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const PreviewCard = ({ info }) => {
  const { product } = useSelector((state) => state);
  return (
    <div className=" hidden xl:flex xl:flex-col flex-1 border-l-[1px] border-black pt-10 px-8">
      <div className="w-full border-[1px] border-black h-3 mb-8 relative">
        <div className="w-40 h-3 bg-[#00BEA7] absolute left-0"></div>
      </div>
      <div className="px-14">
        <div className="border-[1px] border-black">
          <div className=" border-[1px] border-black">
            <div className=" w-full py-1 bg-yellow-200 px-4 border-black flex items-center justify-between">
              <h1 className=" text-xs font-semibold ">
                Condition: {product?.condition || info?.condition}
              </h1>
            </div>
          </div>
          <div className=" flex items-center justify-between px-5 border-b-[1px] border-black">
            <div className=" py-3.5">
              <h1 className=" text-sm font-semibold">
                {product?.title || info?.title || "...."}
              </h1>
              <div className=" flex items-center gap-x-4">
                <div className="flex items-center gap-x-1 mt-1">
                  <LocationOnOutlined
                    className="text-grey-100"
                    fontSize={"15"}
                  />
                  <h1 className="text-sm font-normal text-grey-100">
                    {"...."}
                  </h1>
                </div>
                <div className="flex items-center justify-start gap-x-1 mt-1">
                  <AccessTimeOutlined
                    className="text-grey-100"
                    fontSize={"10"}
                  />
                  <h1 className="text-[13px] font-medium text-grey-100">
                    {"...."}
                  </h1>
                </div>
              </div>
            </div>
            <h1 className="text-sm font-bold text-sa-menu-green text-left py-1">
              ₹{product?.price || info?.price || "...."}
            </h1>
          </div>
          <div className=" px-3.5 py-3 flex items-center justify-center gap-x-2">
            <div className="">
              <img
                src={require("../../assets/new design/grey.png")}
                alt=""
                className="w-80 h-40 object-cover"
              />
            </div>
            <div className=" grid grid-cols-2">
              {[0, 1, 2, 3].map((e) => (
                <div className="mb-1.5 mr-1.5">
                  <img
                    src={require("../../assets/new design/grey.png")}
                    alt=""
                    className="h-[75px]"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-2.5 flex items-start">
          {/* Description  */}
          <div className=" flex-1">
            <div className="h-fit border-[1px] border-black pt-4.5 pb-2">
              <div className=" border-b-[1px] border-black px-4 pb-5 min-h-[150px] h-auto">
                <h1 className=" text-sm font-semibold tracking-wide">
                  Description{" "}
                </h1>
                <div className="mt-1">
                  <p className=" break-all text-[17px]">
                    {product?.description || info?.description}
                  </p>
                </div>
              </div>
              <div className=" px-4 pt-5 min-h-[150px] h-auto">
                <h1 className="text-sm font-semibold">Item Specifics</h1>
                <div className=" mb-4 flex items-center flex-wrap mt-4 justify-between">
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
                    <div className=" w-[45%] self-stretch py-2 px-1.5 flex items-start justify-between border-black border-[1px] ">
                      <h1 className=" text-[10px] ">{e.title} : </h1>
                      <h1 className=" text-[10px] font-semibold">{e.value}</h1>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sold By */}
          <div className=" w-[41.5%] min-h-[200px] h-auto border-r-[1px]  border-y-[1px] border-black px-3 py-4.5">
            <h1 className=" text-sm font-semibold tracking-wide">Sold By</h1>
            <div className="flex items-start justify-between mt-4">
              <div className=" flex items-start gap-x-3">
                <div className=" border-[1px] border-black rounded-full">
                  <img
                    src={require("../../assets/new design/user.png")}
                    alt=""
                    className=" w-full"
                  />
                </div>
                <div>
                  <h1 className=" text-[8px] underline underline-offset-[6px] font-semibold tracking-wide">
                    Akshat Tripathi
                  </h1>
                  <h1 className="text-[10px] font-normal text-grey-100 mt-0.5">
                    Member since July 2022
                  </h1>
                </div>
              </div>

              <div className=" flex items-center">
                <div className=" flex items-center gap-x-0.5">
                  <h1 className=" text-[12px] font-bold">4.5</h1>
                  <Star className=" text-yellow-100 text-[8px]" />
                </div>
              </div>
            </div>
            <div className=" flex items-center justify-between mt-2">
              <button className=" w-full text-xs py-1.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black tracking-wider  font-semibold">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;

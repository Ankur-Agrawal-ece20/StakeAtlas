import {
  AccessTimeOutlined,
  LocationOnOutlined,
  Star,
} from "@mui/icons-material";

const PreviewCardMob = () => {
  return (
    <div className="border-[1px] border-black mb-4">
      <div className=" py-1.5 bg-[#4DB041] border-b-[1px] border-black">
        <h1 className=" text-xs font-medium text-white ml-2">
          Condition: Used
        </h1>
      </div>
      <div className="px-3 mt-2.5">
        <div>
          <img src={require("../../assets/new design/product.png")} alt="" />
        </div>

        <div className="py-2.5">
          <h1 className=" text-[16.3px] font-semibold">
            iPhone 12 128GB White - Apple
          </h1>
          <div className="flex items-center gap-x-1 mt-1">
            <LocationOnOutlined className="text-grey-100" fontSize={"30"} />
            <h1 className="text-sm xl:text-lg font-normal text-grey-100">
              Rajendra nagar, New Delhi
            </h1>
          </div>
          <div className="flex items-center justify-start gap-x-1 mt-1">
            <AccessTimeOutlined className="text-grey-100" fontSize={"10"} />
            <h1 className="text-[13px] font-medium text-grey-100">
              3d 18hrs | Mon, Dec 05
            </h1>
          </div>
          <h1 className="text-[21px] font-bold text-sa-menu-green text-left py-1">
            ₹4,60,000
          </h1>
        </div>
      </div>

      <div className=" border-t-[1px] border-black mt-2.5 px-3 py-2.5">
        <h1 className=" text-[14px] font-semibold">Sold By</h1>

        <div className="mt-1 flex items-center justify-between">
          <div className="flex items-center gap-x-1.5">
            <div className="w-10">
              <img
                src={require("../../assets/new design/user.png")}
                alt=""
                className=" w-full"
              />
            </div>
            <div>
              <h1 className=" text-sm underline font-semibold">
                Akshat Tripathi
              </h1>
              <h1 className="text-xs font-normal text-grey-100">
                Member since July 2022
              </h1>
            </div>
          </div>
          <div className=" flex items-center gap-x-0.5">
            <h1 className=" text-2xl font-bold">4.5</h1>
            <Star className=" text-yellow-100 text-xs" />
          </div>
        </div>

        <div className=" flex items-center gap-2 mt-2">
          <button className=" w-1/2  text-[12px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1.5px] border-sa-border-black font-semibold">
            Add to Cart
          </button>
          <button className=" w-1/2  text-[12px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1.5px] border-sa-border-black font-semibold">
            Make an Offer
          </button>
        </div>
      </div>

      <div className=" px-3 border-t-[1px] border-black py-2">
        <h1 className=" text-sm xl:text-[22px] font-semibold">Description </h1>

        <p className=" text-xs font-normal pb-3">
          For sale is a 4th generation iPad Air in silver color and 256 GB of
          storage. The tablet is in excellent condition and does not have any
          signs of scratches or marks on the screen.
          <br />
          <br /> No AppleCare+ included. <br />
          No charger included.
        </p>
      </div>

      <div className=" px-3 border-t-[1px] border-black mt-1">
        <h1 className=" text-sm xl:text-[22px] font-semibold mt-3">
          Item Specifics
        </h1>
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
            <div className=" w-[48%] self-stretch py-2.5 px-2.5 flex items-start justify-between border-black border-[1px] ">
              <h1 className=" text-xs ">{e.title} : </h1>
              <h1 className=" text-xs font-semibold">{e.value}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreviewCardMob;

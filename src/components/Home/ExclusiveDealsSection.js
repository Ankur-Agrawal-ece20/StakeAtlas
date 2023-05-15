import { ArrowForwardIos } from "@mui/icons-material";

const ExclusiveDealsSection = () => {
  return (
    <div>
      <div className="hidden xl:flex items-stretch 3xl:h-[80vh] 4xl:min-h-[95vh]">
        <div className="w-[43%] bg-[#00BEA7] border-r-2 border-black flex items-center justify-center px-16 4xl:px-20">
          <div className="w-full">
            <h1 className="text-[38px] font-medium text-black leading-[43px] 3xl:text-[40px] 4xl:text-[50px] 4xl:leading-[60px]">
              Exclusive Deals at <br /> Our Platform
            </h1>
            <div className="w-[85%] space-y-8 mt-10">
              <div className="w-full bg-sa-primary-yellow rounded-[8px] py-4.5 flex items-center justify-between pl-6 pr-4">
                <h1 className="text-[22px] font-medium 4xl:text-[30px] 4xl:py-3">
                  Products under warranty
                </h1>
                <ArrowForwardIos />
              </div>
              <div className="w-full bg-[#FFF] rounded-[8px] py-4.5 flex items-center justify-between pl-6 pr-4">
                <h1 className="text-[22px] font-medium 4xl:text-[30px] 4xl:py-3">
                  New listings
                </h1>
                <ArrowForwardIos />
              </div>
              <div className="w-full bg-[#FFF] rounded-[8px] py-4.5 flex items-center justify-between pl-6 pr-4">
                <h1 className="text-[22px] font-medium 4xl:text-[30px] 4xl:py-3">
                  Offers near you
                </h1>
                <ArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#0076BE] px-5 py-6 min-h-full flex-1">
          <div className="h-full bg-[#729CE9] rounded-[8px] flex items-center flex-col py-10">
            <h1 className="text-4xl font-bold text-white 3xl:text-5xl 4xl:text-6xl">
              Products under warranty
            </h1>
            <p className="text-xl font-normal text-white w-[90%] text-center mt-4 mb-10 4xl:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim{" "}
            </p>
            <div className="flex items-center justify-center flex-col 3xl:mt-12 4xl:mt-28">
              <img
                src={require("../../assets/new design/product_img.png")}
                alt=""
                className="4xl:scale-125 3xl:scale-110"
              />
              <button className="bg-[#000] text-white  py-3 px-14 rounded-md font-medium text-lg mt-5  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14">
                Visit Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:hidden  bg-[#00BEA7] mt-16 border-t-2 border-black px-2 pb-14">
        <h1 className="text-[30px] font-semibold text-black px-2 pt-12 leading-[35px]">
          Exclusive Deals at <br /> Our Platform
        </h1>
        <div className="bg-[#0076BE] mt-8">
          <h1 className="text-xl font-bold text-white text-center pt-7">
            Products under warranty
          </h1>
          <p className="text-xs font-normal text-white text-center mt-4 mb-10 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
          <div className="flex items-center justify-center flex-col">
            <img
              src={require("../../assets/new design/product_img_mob.png")}
              alt=""
              className="w-52"
            />
            <button className="bg-[#000] text-white  py-2 px-7 rounded-md font-medium text-xs mt-5 mb-10">
              Visit Now
            </button>
          </div>
        </div>
        <div className="bg-[#fff] mt-8">
          <h1 className="text-xl font-bold text-black text-center pt-7">
            New Listings
          </h1>
          <p className="text-xs font-normal text-black text-center mt-4 mb-10 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
          <div className="flex items-center justify-center flex-col">
            <img
              src={require("../../assets/new design/product_img_mob.png")}
              alt=""
              className="w-52"
            />
            <button className="bg-[#000] text-white  py-2 px-7 rounded-md font-medium text-xs mt-5 mb-10">
              Visit Now
            </button>
          </div>
        </div>
        <div className="bg-[#FFE278] mt-8">
          <h1 className="text-xl font-bold text-black text-center pt-7">
            Offers Near You
          </h1>
          <p className="text-xs font-normal text-black text-center mt-4 mb-10 px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim{" "}
          </p>
          <div className="flex items-center justify-center flex-col">
            <img
              src={require("../../assets/new design/product_img_mob.png")}
              alt=""
              className="w-52"
            />
            <button className="bg-[#000] text-white  py-2 px-7 rounded-md font-medium text-xs mt-5 mb-10">
              Visit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveDealsSection;

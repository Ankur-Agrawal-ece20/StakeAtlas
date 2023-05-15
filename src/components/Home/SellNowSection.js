import { AnimationOnScroll } from "react-animation-on-scroll";

const SellNowSection = () => {
  return (
    <div>
      <div className=" flex-col-reverse xl:flex-row border-t-2 border-black flex items-stretch 3xl:h-[68vh] 4xl:min-h-[78vh]">
        <div className="px-4 xl:w-1/2 xl:px-10 border-r-[2px] border-black flex items-start justify-center flex-col 3xl:px-16 4xl:px-20">
          <h1 className=" text-2xl mt-8 mb-2 xl:text-5xl font-bold text-black xl:my-5 3xl:text-[55px] 4xl:text-6xl">
            Sell Anything
          </h1>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-sa-primary-yellow relative z-40 cursor-pointer px-6 py-1.5 rounded border-[1px] text-[14px] font-medium mt-3 mb-10  xl:border-2  buttonHover border-black xl:py-3 xl:px-[58px] xl:rounded-md xl:font-semibold xl:text-lg xl:mt-7 3xl:mt-8 3xl:py-4 3xl:px-[75px]  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14">
            Sell Now
          </button>
        </div>
        <div className=" px-3 xl:w-1/2 min-h-full bg-[#00BEA7]">
          <AnimationOnScroll duration={2} animateIn="animate__zoomIn">
            <img
              src={require("../../assets/new design/Buy_Anything.png")}
              alt=""
              className="xl:translate-x-20 4xl:translate-y-20"
            />
          </AnimationOnScroll>
        </div>
      </div>

      <div className="flex-col xl:flex-row border-t-2 border-black flex items-stretch 3xl:h-[68vh] 4xl:min-h-[78vh]">
        <div className="px-3 xl:w-1/2 min-h-full bg-[#0076BE] border-r-[2px] border-black">
          <AnimationOnScroll duration={2} animateIn="animate__zoomIn">
            <img
              src={require("../../assets/new design/Anyone.png")}
              alt=""
              className="xl:translate-x-20 4xl:translate-y-20 4xl:scale-150 4xl:translate-x-40"
            />
          </AnimationOnScroll>
        </div>
        <div className=" parallax px-4 xl:w-1/2 xl:px-10 flex items-start justify-center flex-col relative 3xl:px-16 4xl:px-20">
          <h1 className="text-2xl mt-8 mb-2 xl:text-5xl font-bold text-black xl:my-5 3xl:text-[55px] 4xl:text-6xl">
            To Anyone
          </h1>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-xs mb-2 xl:text-xl font-normal text-sa-text-gray-2 xl:mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-sa-primary-yellow relative z-40 cursor-pointer px-6 py-1.5 rounded border-[1px] text-[14px] font-medium mt-3 mb-10  xl:border-2  buttonHover border-black xl:py-3 xl:px-[58px] xl:rounded-md xl:font-semibold xl:text-lg xl:mt-7 3xl:mt-8 3xl:py-4 3xl:px-[75px]  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14">
            Sell Now
          </button>

          <div className="-bottom-[180px] right-10  absolute z-10">
            <img
              src={require("../../assets/new design/Earphones.png")}
              alt=""
              className="hidden xl:flex grid-sticker"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellNowSection;

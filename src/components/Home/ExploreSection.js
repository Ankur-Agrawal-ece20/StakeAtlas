import { AnimationOnScroll } from "react-animation-on-scroll";

const ExploreSection = () => {
  return (
    <div className="flex-col-reverse xl:flex-row xl:w-screen px-4 xl:h-[94vh] bg-bg-dot bg-[#00BEA7] flex xl:pl-20 border-t-2 border-black 3xl:h-screen 3xl:px-24 4xl:min-h-[120vh] 4xl:pl-28">
      <div className="xl:w-1/2 xl:mt-36 3xl:mt-32 4xl:mt-36">
        <h1 className="font-bold text-black text-[25px] leading-[30px] xl:tracking-wide  xl:text-[42px] xl:leading-[60px] 3xl:text-[50px] 4xl:text-[60px] 4xl:leading-[70px]">
          Explore Our <br />{" "}
          <span className="text-[25px] xl:text-[56px] 3xl:text-[65px] 4xl:text-[75px]">
            Popular Categories{" "}
          </span>
        </h1>
        <div className=" mt-5 flex gap-x-10 gap-y-4 xl:items-center flex-wrap xl:gap-10  xl:w-[70%] xl:mt-8 3xl:mt-14 3xl:gap-14 4xl:mt-20 4xl:gap-20">
          {[
            require("../../assets/new design/category_img1.png"),
            require("../../assets/new design/category_img2.png"),
            require("../../assets/new design/category_img3.png"),
            require("../../assets/new design/category_img4.png"),
            require("../../assets/new design/category_img5.png"),
          ].map((e) => (
            <img
              src={`${e}`}
              alt=""
              className=" w-14 h-14 xl:w-28 xl:h-28  3xl:scale-110 4xl:scale-125"
            />
          ))}
        </div>
        <button className="bg-[#FFF] py-2 px-6 text-xs mt-8 mb-14  buttonHover text-black border-[1.5px] border-black  xl:py-3 xl:px-14 rounded-md font-medium xl:text-lg xl:mt-20 3xl:mt-16 3xl:text-lg 3xl:font-semibold 3xl:py-4 3xl:px-16 4xl:mt-36 4xl:py-5 4xl:text-xl 4xl:font-semibold 4xl:px-20">
          Our Categories
        </button>
      </div>
      <div className="xl:w-[62%] h-fit flex items-start justify-end overflow-hidden">
        <div className="w-full flex">
          <AnimationOnScroll duration={3} animateIn="animate__slideInUp">
            <img
              src={require("../../assets/new design/phone_img_1.png")}
              alt=""
              className=" -translate-y-40  xl:-translate-y-20 xl:translate-x-10 xl:scale-125"
            />
          </AnimationOnScroll>
        </div>
        <div className="w-full flex">
          <AnimationOnScroll duration={3} animateIn="animate__slideInDown">
            <img
              src={require("../../assets/new design/phone_img_2.png")}
              alt=""
              className=" -translate-y-48  xl:-translate-y-60 xl:translate-x-32 xl:scale-125"
            />
          </AnimationOnScroll>
        </div>
        <div className="w-full flex">
          <AnimationOnScroll duration={3} animateIn="animate__slideInUp">
            <img
              src={require("../../assets/new design/phone_img_3.png")}
              alt=""
              className=" -translate-y-40  xl:-translate-y-40 xl:translate-x-52 xl:scale-125"
            />
          </AnimationOnScroll>
        </div>
      </div>
      {/* <img src={require("../../assets/new design/dotGrid.png")} alt="" /> */}
    </div>
  );
};

export default ExploreSection;

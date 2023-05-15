import { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useNavigate } from "react-router";
import heroMobile from "../assets/heroMobile.svg";
import ExclusiveDealsSection from "../components/Home/ExclusiveDealsSection";
import ListingSection from "../components/Home/ListingSection";
import SellerSection from "../components/Home/SellerSection";

const NewHomeScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let allParallax = document.querySelectorAll(".parallax");
    console.log(allParallax);

    function isScrolledIntoView(el) {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top;
      var elemBottom = rect.bottom;

      var isVisible = elemTop < window.innerHeight && elemBottom >= 0;
      return isVisible;
    }

    window.addEventListener("scroll", function () {
      for (let index = 0; index < allParallax.length; index++) {
        let elem = allParallax[index];

        if (isScrolledIntoView(elem)) {
          let stickers = elem.querySelectorAll(".grid-sticker, .income-coin");
          let antistickers = elem.querySelectorAll(
            ".grid-sticker-anti, .income-coin"
          );

          for (let index = 0; index < stickers.length; index++) {
            let position = (window.scrollY - elem.offsetTop) * -0.2;

            stickers[index].style.transform =
              "translate3d(0px, " + position + "px, 0px)";
          }
          for (let index = 0; index < antistickers.length; index++) {
            let position = (window.scrollY - elem.offsetTop) * 0.2;

            antistickers[index].style.transform =
              "translate3d(0px, " + position + "px, 0px)";
          }
        }
      }
    });
  }, []);

  return (
    <div>
      <div className="flex flex-col-reverse xl:flex-row  xl:flex bg-[#FCF9F4] border border-t-0 border-b-2 border-x-0 border-black xl:pl-12 xl:pb-3 3xl:h-[81vh] 4xl:h-screen 4xl:pl-20 4xl:pb-0">
        <div className="px-4 xl:w-[60%]">
          <h1 className="text-[33px] font-semibold leading-[35px] tracking-wide  mt-5  my-0 py-0 w-[80%]  xl:font-medium xl:text-[76px] xl:leading-[91px] xl:mt-20 3xl:text-[82px] 3xl:leading-[90px] 3xl:mt-24 4xl:text-[100px] 4xl:mt-28 4xl:leading-[115px]">
            Save when you shop used
          </h1>
          <h1 className="text-[14px] leading-[20px] font-medium my-2 xl:text-[26px] xl:leading-[35px] 3xl:text-3xl 3xl:mt-8 4xl:text-[35px] 4xl:mt-5 4xl:leading-[40px]">
            No fakes, excellent quality, great prices. <br /> Buy from verified
            sellers with <span className="font-extrabold">Stake atlas</span>{" "}
            buyer assurance.
          </h1>
          <button
            onClick={() => navigate("/buying/purchaseHistory")}
            className="bg-sa-primary-yellow relative z-40 cursor-pointer px-5 py-1.5 rounded border-[1px] text-[14px]  mt-3 mb-10  xl:border-2  buttonHover border-black xl:py-3 xl:px-[58px] xl:rounded-md  xl:text-lg xl:mt-7 3xl:mt-8 3xl:py-4 3xl:px-[75px]  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14"
          >
            Buy Now
          </button>
        </div>
        <div className="hidden tablet:flex xl:w-1/2 xl:px-4 xl:pt-7 justify-end">
          <img
            src={require("../assets/new design/img.png")}
            alt=""
            className=" mt-4 scale-75 xl:-translate-y-5 xl:translate-x-5 xl:scale-100 4xl:mt-0 4xl:scale-90 4xl:translate-x-9 4xl:-translate-y-5"
          />
        </div>
        <div className="tablet:hidden xl:w-1/2 xl:px-4 xl:pt-7 flex justify-end">
          <img
            src={heroMobile}
            alt=""
            className=" mt-4 scale-90 xl:-translate-y-5 xl:translate-x-5 xl:scale-100 4xl:mt-0 4xl:scale-90 4xl:translate-x-9 4xl:-translate-y-5"
          />
        </div>
        <img
          src={require("../assets/new design/note.png")}
          alt=""
          className="hidden xl:flex absolute top-[42%] left-5 z-10 3xl:top-[53%] 3xl:left-[6%] 3xl:scale-110 4xl:top-[73%] 4xl:scale-125 4xl:left-[8%]"
        />
      </div>

      <div className="w-full parallax bg-sa-primary-yellow relative pt-14 h-[48vh] xl:pt-40 xl:h-[70vh] 3xl:h-[80vh] 3xl:pt-44 4xl:min-h-[94vh]">
        <h1 className=" text-[#977F00] mediumFont text-center text-2xl w-[90%] mx-auto xl:w-[78%] xl:leading-[50px] xl:tracking-wide  xl:text-[42px] 3xl:text-[50px] 3xl:leading-[55px] 4xl:text-[60px] 4xl:leading-[65px]">
          You know all those{" "}
          <span className="text-black mediumFont">great ideas</span> you have?{" "}
          <span className="text-black mediumFont">
            {" "}
            We want you to try them, lots of them,
          </span>{" "}
          and find out what works.
        </h1>
        <div className="-bottom-[110px] absolute hidden xl:flex xl:-left-5">
          {/* <AnimationOnScroll duration={2} animateIn="animate__slideInUp"> */}
          <img
            src={require("../assets/new design/watch.png")}
            alt=""
            className="4xl:scale-125 grid-sticker"
          />
          {/* </AnimationOnScroll> */}
        </div>
      </div>

      <div className="flex-col-reverse xl:flex-row xl:w-screen pl-4 xl:h-[94vh] bg-bg-dot bg-[#00BEA7] flex xl:pl-20 border-t-2 border-black 3xl:h-screen 3xl:px-24 4xl:min-h-[120vh] 4xl:pl-28">
        <div className="xl:min-w-1/2 xl:mt-36 3xl:mt-32 4xl:mt-36">
          <h1 className="font-bold text-black text-[25px] leading-[30px] xl:tracking-wide  xl:text-[42px] xl:leading-[60px] 3xl:text-[50px] 4xl:text-[60px] 4xl:leading-[70px]">
            Explore Our <br />{" "}
            <span className="text-[25px] xl:text-[56px] 3xl:text-[65px] 4xl:text-[75px]">
              Popular Categories{" "}
            </span>
          </h1>
          <div className=" mt-5 flex gap-x-10 gap-y-4 xl:items-center flex-wrap xl:gap-10  xl:w-[70%] xl:mt-8 3xl:mt-14 3xl:gap-14 4xl:mt-20 4xl:gap-20">
            {[
              require("../assets/new design/category_img1.png"),
              require("../assets/new design/category_img2.png"),
              require("../assets/new design/category_img3.png"),
              require("../assets/new design/category_img4.png"),
              require("../assets/new design/category_img5.png"),
            ].map((e) => (
              <img
                src={`${e}`}
                alt=""
                className=" w-20 h-20 xl:w-28 xl:h-28  3xl:scale-110 4xl:scale-125"
              />
            ))}
          </div>
          <button className="bg-[#FFF] py-2 px-6 text-xs mt-8 mb-14  buttonHover text-black border-[1.5px] border-black  xl:py-3 xl:px-14 rounded-md  xl:text-lg xl:mt-20 3xl:mt-16 3xl:text-lg 3xl:py-4 3xl:px-16 4xl:mt-36 4xl:py-5 4xl:text-xl 4xl:font-semibold 4xl:px-20">
            Our Categories
          </button>
        </div>
        <div className="xl:w-[65%] h-fit flex items-start justify-end overflow-hidden parallax">
          <div className="w-[160%] flex">
            <img
              src={require("../assets/new design/phone_img_1.png")}
              alt=""
              className=" -translate-y-40  xl:-translate-y-20 xl:translate-x-10 w-[120%] grid-sticker"
            />
          </div>
          <div className="w-[160%] flex">
            <img
              src={require("../assets/new design/phone_img_2.png")}
              alt=""
              className=" -translate-y-48  xl:-translate-y-60 xl:translate-x-32 w-[120%] grid-sticker-anti"
            />
          </div>
          <div className="w-[160%] flex">
            <img
              src={require("../assets/new design/phone_img_3.png")}
              alt=""
              className=" -translate-y-40  xl:-translate-y-30 xl:translate-x-52 w-[120%] grid-sticker"
            />
          </div>
        </div>
        {/* <img src={require("../../assets/new design/dotGrid.png")} alt="" /> */}
      </div>

      <div className=" relative parallax">
        <ListingSection title={"Recommended Listings"} />
        <div className="-bottom-[200px] absolute">
          <img
            src={require("../assets/new design/phone-straight.png")}
            alt=""
            className="hidden xl:flex grid-sticker"
          />
        </div>
      </div>

      <div>
        <div className=" flex-col-reverse xl:flex-row border-t-2 border-black flex items-stretch 3xl:h-[68vh] 4xl:min-h-[78vh] bg-white">
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
            <button className="bg-sa-primary-yellow relative z-40 cursor-pointer px-6 py-1.5 rounded border-[1px] text-[14px] mt-3 mb-10  xl:border-2  buttonHover border-black xl:py-3 xl:px-[58px] xl:rounded-md  xl:text-lg xl:mt-7 3xl:mt-8 3xl:py-4 3xl:px-[75px]  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14">
              Sell Now
            </button>
          </div>
          <div className=" px-3 xl:w-1/2 min-h-full bg-[#00BEA7]">
            <AnimationOnScroll duration={2} animateIn="animate__zoomIn">
              <img
                src={require("../assets/new design/Buy_Anything.png")}
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
                src={require("../assets/new design/Anyone.png")}
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
            <button className="bg-sa-primary-yellow relative z-40 cursor-pointer px-6 py-1.5 rounded border-[1px] text-[14px] font-medium mt-3 mb-10  xl:border-2  buttonHover border-black xl:py-3 xl:px-[58px] xl:rounded-md  xl:text-lg xl:mt-7 3xl:mt-8 3xl:py-4 3xl:px-[75px]  4xl:text-xl 4xl:px-[80px] 4xl:py-5 4xl:mt-14">
              Sell Now
            </button>

            <div className="-bottom-[180px] right-10  absolute z-10">
              <img
                src={require("../assets/new design/Earphones.png")}
                alt=""
                className="hidden xl:flex grid-sticker"
              />
            </div>
          </div>
        </div>
      </div>

      <ListingSection title={"Recently Viewed"} />

      <SellerSection />

      <div className="bg-[#FCF9F4] pt-20 xl:pt-32 border-t-2 border-black 4xl:min-h-[80vh]">
        <h1 className=" text-[#9B9B9B] text-2xl mediumFont text-center w-[85%] xl:w-[80%] mx-auto xl:text-[45px]  xl:leading-[50px] 3xl:text-[50px] 4xl:text-[58px] 4xl:leading-[60px]">
          You know all those{" "}
          <span className="text-black mediumFont">great ideas</span> you have?{" "}
          <span className="text-black mediumFont">
            {" "}
            We want you to try them, lots of them,
          </span>{" "}
          and find out what works.
        </h1>
        <div className="w-[75%] h-14 xl:w-[44%] xl:h-[14vh] mt-10 rounded-[42px] border-2 border-black bg-[#00BEA7] mx-auto 3xl:mt-14 4xl:h-[15vh] 4xl:mt-20 4xl:mb-10"></div>

        <div className="flex items-end justify-end relative mt-10  4xl:-bottom-12">
          <div className="absolute right-0 -bottom-4  xl:bottom-0 2xl:w-full 3xl:w-full 4xl:w-full 4xl:-bottom-10">
            <img
              src={require("../assets/new design/car_path.png")}
              alt=""
              className="4xl:w-full 3xl:w-full h-7 xl:h-full xl:w-full 2xl:w-full"
            />
          </div>
          <AnimationOnScroll animateIn="animate__fadeInRight">
            <div className="">
              <img
                src={require("../assets/new design/car_only.png")}
                alt=""
                className="w-40 xl:w-full  4xl:scale-150"
              />
            </div>
          </AnimationOnScroll>
        </div>
      </div>

      <ExclusiveDealsSection />
    </div>
  );
};

export default NewHomeScreen;

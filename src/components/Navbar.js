import {
  ExpandLess,
  ExpandMore,
  Menu,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ordersIcon from "../assets/icons/orders_icon_black.svg";
import offersIcon from "../assets/icons/offers_icon_black.svg";
import sellingIcon from "../assets/icons/selling_icon_black.svg";
import messagesIcon from "../assets/icons/messages_icon_black.svg";
import recentIcon from "../assets/icons/recent_icon_black.svg";
import helpIcon from "../assets/icons/help_icon_black.svg";

const NavBar = () => {
  const navigate = useNavigate();
  const [hamBurgerShow, setHamBurgerShow] = useState(false);
  const [expand, setExpand] = useState(false);
  const accountMenuItems = [
    {
      title: "Orders",
      icon: ordersIcon,
      alt: "ordersIcon",
    },
    {
      title: "Offers",
      icon: offersIcon,
      alt: "offersIcon",
    },
    {
      title: "Selling",
      icon: sellingIcon,
      alt: "sellingIcon",
    },
    {
      title: "Messages",
      icon: messagesIcon,
      alt: "messagesIcon",
    },
    {
      title: "Recently Viewed",
      icon: recentIcon,
      alt: "recentIcon",
    },
    {
      title: "Help and Support",
      icon: helpIcon,
      alt: "helpIcon",
    },
  ];
  return (
    <div>
      <div>
        <div className="hidden min-[950px]:flex min-[950px]:w-auto min-[950px]:h-auto flex-1 bg-white border-b-[2px] border-black 4min-[950px]:border-b-2">
          <div
            onClick={() => navigate("/")}
            className="border-r-2 border-black px-[30.7px] cursor-pointer flex items-center justify-center"
          >
            <h1 className="mediumFont text-black text-right min-[950px]:text-4xl line 3min-[950px]:text-[44px]  4min-[950px]:text-5xl">
              Stake Atlas
            </h1>
          </div>
          <div className="border-r-2 border-black min-[950px]:py-4 min-[950px]:px-7 min-[950px]:w-[23.5%]  flex items-center 3min-[950px]:py-5 3min-[950px]:w-[23.2%]  4min-[950px]:py-6 4min-[950px]:w-[23.2%]">
            <div className=" flex-1 flex items-center gap-1">
              <Search />
              <input
                type="text"
                placeholder="iPhone 12 mini, skoda fabia,"
                className=" w-full h-10 px-2 3min-[950px]:text-xl 4min-[950px]:text-[23px] focus:outline-none outline-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-center border-r-2 border-black min-[950px]:py-4 min-[950px]:w-[34.5%] 3min-[950px]:py-5 3min-[950px]:w-[34.8%] 4min-[950px]:py-6 4min-[950px]:w-[34.8%]">
            <div className="flex flex-col-[30%_30%_30%] px-[5%] w-full justify-around">
              <button className="group transition-all w-fit duration-300 ease-in-out font-normal text-black min-[950px]:text-base  3min-[950px]:text-lg 4min-[950px]:text-[22px]">
                <span class="bg-left-bottom  pb-1  bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  Categories
                </span>
              </button>
              <button className="group transition-all w-fit duration-300 ease-in-out font-normal text-black min-[950px]:text-base  3min-[950px]:text-lg 4min-[950px]:text-[22px]">
                <span class="bg-left-bottom  pb-1  bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  Wishlist
                </span>
              </button>
              <Link
                to="/signin/username"
                className=" group w-fit transition-all duration-300 ease-in-out font-normal text-black min-[950px]:text-base  3min-[950px]:text-lg 4min-[950px]:text-[22px] relative h-full"
              >
                <span class="bg-left-bottom pb-1 bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                  Account
                </span>
                <div className="group-hover:block hidden absolute top-0 left-0 mt-[2.5rem] border-[1px] border-black  px-4 pt-5  w-72 bg-white text-black shadow-[4px_4px_18px_rgba(0,0,0,0.18)]">
                  <div className="flex items-center gap-x-3">
                    <div className="w-14 h-14">
                      <img
                        src={require("../assets/new design/user.png")}
                        alt=""
                        className="border-black rounded-full border-[1px] w-full"
                      />
                    </div>
                    <div>
                      <h1 className=" text-2xl font-bold">Hi, Sarthak</h1>
                      <h1 className="text-sm font-normal">
                        Member since July 2022
                      </h1>
                    </div>
                  </div>
                  <div className="my-5 flex flex-col font-medium">
                    {accountMenuItems.map(function (e, i) {
                      return (
                        <div className="outline outline-black outline-[1px] menuHover bg-white hover:rounded text-base flex items-center gap-3 p-4">
                          <img className="w-7 h-7" src={e?.icon} alt={e?.alt} />
                          <p className="text-md font-medium">{e?.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center">
            <Link
              to="/sellnow/drafts"
              className="group transition-all duration-300 ease-in-out  h-full font-medium bg-sa-primary-yellow text-black w-[50%] flex items-center justify-center border-r-[2px] border-black min-[950px]:text-base 3min-[950px]:text-lg 4min-[950px]:text-[22px] "
            >
              <span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                Sell Now
              </span>
            </Link>
            <Link
              to="/cart"
              className="group transition-all duration-300 ease-in-out  h-full font-normal text-black w-[50%] flex items-center justify-center min-[950px]:text-base 3min-[950px]:text-lg 4min-[950px]:text-[22px] "
            >
              <span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
                <ShoppingCartOutlined className="mb-1" />
                Cart
              </span>
            </Link>
          </div>
        </div>

        <div className="min-[950px]:hidden border-t-[1px] border-b-[1px] border-black  flex items-center justify-between px-2">
          <div className="flex items-center">
            <button onClick={() => setHamBurgerShow(!hamBurgerShow)}>
              <Menu />
            </button>
            <div onClick={() => navigate("/")}>
              <h1 className="text-lg ml-3 mt-1">Stake Atlas</h1>
            </div>
          </div>
          <Link to="/cart" className="border-l-[1px] border-black px-2 py-4">
            <ShoppingCartOutlined />
          </Link>
        </div>
      </div>

      <div
        className={`transition-all duration-500 bg-sa-menu-green z-20 fixed h-screen w-screen top-0 z-2 ${
          !hamBurgerShow ? "-left-[100vw] w-[100vw]" : "left-0 w-[100vw]"
        }`}
      >
        <div className="py-3 px-3.5 flex items-center justify-between border-b-[1px] border-white">
          <h1 className="text-white text-xl">Stake Atlas</h1>
          <button onClick={() => setHamBurgerShow(!hamBurgerShow)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="#fff"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="px-3 pt-5">
          <h1 className=" text-base font-normal text-white mb-5">Search</h1>
          <h1 className=" text-base font-normal text-white mb-5">Categories</h1>
          <h1 className=" text-base font-normal text-white mb-5">Wishlist</h1>
          <div className=" flex items-end" onClick={() => setExpand(!expand)}>
            <h1 className=" text-base font-normal text-white">Account</h1>
            {expand ? (
              <ExpandLess className=" text-white" />
            ) : (
              <ExpandMore className=" text-white" />
            )}
          </div>

          {false
            ? expand && (
                <div className="border-[1px] border-white rounded-md px-4 py-5 mt-3">
                  <h1 className=" text-sm text-white font-normal">
                    Login / Sign Up
                  </h1>
                </div>
              )
            : expand && (
                <div className=" border-[1px] border-white rounded-md px-4 pt-5 mt-3">
                  <div className="flex items-center gap-x-3 border-b-[1px] border-slate-400 pb-3">
                    <div className="w-10">
                      <img
                        src={require("../assets/new design/user.png")}
                        alt=""
                        className=" w-full"
                      />
                    </div>
                    <div>
                      <h1 className=" text-sm font-medium text-white">
                        Hii, Akshat Tripathi
                      </h1>
                      <h1 className="text-xs font-normal text-grey-200">
                        Member since July 2022
                      </h1>
                    </div>
                  </div>
                  <div className="mt-3">
                    {[
                      "Orders",
                      "Offers",
                      "Selling",
                      "Messages",
                      "Recently Viewed",
                      "Help and Support",
                    ].map((e) => (
                      <h1 className=" text-base font-normal text-white mb-4">
                        {e}
                      </h1>
                    ))}
                  </div>
                </div>
              )}
        </div>

        <div className="w-full bg-white h-[1px] mt-6"></div>

        <div className=" px-4 mt-4 flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/sellnow/drafts");
              setHamBurgerShow(!hamBurgerShow);
            }}
            className=" w-full  text-[12px] py-2.5 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1.5px] border-sa-border-black font-semibold text-center"
          >
            Sell Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

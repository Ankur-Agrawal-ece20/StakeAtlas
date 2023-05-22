import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import accountIcon from "../../assets/icons/account_icon.svg";
import buyingIcon from "../../assets/icons/buying_icon.svg";
import MessageIcon from "../../assets/icons/message_icon.svg";
import RecentlyView from "../../assets/icons/recent_icon.svg";
import SellingIcon from "../../assets/icons/selling_icon.svg";
import SummaryIcon from "../../assets/icons/summary_icon.svg";
import WatchListIcon from "../../assets/icons/watchList_icon.svg";

const SideMenu = () => {
  const location = useLocation();
  const [expand, setExpand] = useState(false);
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const menuItems = [
    {
      title: "Summary",
      icon: SummaryIcon,
    },
    {
      title: "Buying",
      icon: buyingIcon,
      subItems: [
        { title: "Purchase History", navigation: "/buying/purchaseHistory" },
        { title: "Offers", navigation: "/buying/offers" },
        { title: "Recently Viewed", navigation: "/recent" },
        { title: "Watchlist", navigation: "/watchlist" },
        { title: "Saved Sellers ", navigation: "/buying/savedSeller" },
      ],
    },
    {
      title: "Selling",
      icon: SellingIcon,
    },
    {
      title: "Messages",
      icon: MessageIcon,
    },
    {
      title: "Account",
      icon: accountIcon,
    },
    {
      title: "Community",
      icon: accountIcon,
    },
    {
      title: "Resolution Center",
      icon: accountIcon,
    },
  ];
  return (
    <div className="inline">
      <div
        className={`bg-black border-r-2 border-black h-screen duration-500 ease-in-out overflow-hidden ${open ? "  w-[64px] " : "w-[226px]"
          }`}
      >
        {open ? (
          <div
            className={`bg-white  px-6  py-3 float-left`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={require("../../assets/icons/arrow_left_icon.svg").default}
              alt=""
            />
          </div>
        ) : (
          <div
            className={`bg-white px-5 py-3 float-right`}
            onClick={() => setOpen(!open)}
          >
            <img
              src={require("../../assets/icons/arrow_icon.svg").default}
              alt=""
            />
          </div>
        )}
        <div className={`py-7 ${open ? "pl-4" : "pl-6"}`}>
          {open ? (
            <div className="float-center pt-11 pr-2">
              <img
                src={require("../../assets/icons/user_icon.svg").default}
                alt=""
              />
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-medium text-white tracking-wide w-[226px] overflow-hidden">
                Hi, Sarthak
              </h1>
              <h1 className=" text-lg font-medium text-[#FFDC25]  w-[226px]">
                Member Since Jan 2022
              </h1>
            </>
          )}
        </div>
        {menuItems.map(function (e, i) {
          const hasSubItems =
            e.title === "Buying" && e.subItems && e.subItems.length > 0;

          const isActive =
            location.pathname.includes(e.navigation) ||
            (hasSubItems &&
              e.subItems.some((subItem) =>
                location.pathname.includes(subItem.navigation)
              ));
          const itemClass = `text-[16px] font-medium  tracking-wide  block outline a outline-black outline-[2px]  ${isActive ? "text-[#FFDC25]" : "text-white"
            }`;

          return (
            <div
              className={`py-3.5  w-[226px] border-y-[1px] menuBorder relative ${open ? "pl-5" : "pl-6"
                }`}
            >
              <div
                className="flex items-start justify-start"
                onClick={() =>
                  e.title === "Buying" &&
                  setExpand(!expand) &&
                  setActiveSubItem(null)
                }
              >
                <div
                  className={`flex items-center justify-center ${e.icon === buyingIcon
                      ? `group transition-all  duration-300 ease-in-out font-normal  text-white`
                      : ""
                    }`}
                  onMouseOver={() => {
                    if (e.icon === buyingIcon) {
                      setShowDropdown(true);
                    }
                  }}
                >
                  <img src={e?.icon} alt=" icon" />
                </div>

                <div className="flex justify-start items-center flex-1">
                  <h1
                    className={`text-[17px] font-medium text-white tracking-wide ml-4 pl-3
                  `}
                  >
                    <Link
                      to={e.navigation}
                      className={`${itemClass}`}
                      onClick={() => setActiveSubItem(null)}
                    >
                      {" "}
                      {e?.title}
                    </Link>
                  </h1>
                </div>

                <div className="flex items-end justify-center pr-2">
                  {e.title === "Buying" &&
                    !open &&
                    (!expand ? (
                      <ExpandLess className="text-white text-2xl" />
                    ) : (
                      <ExpandMore className="text-white text-2xl" />
                    ))}
                </div>
              </div>

              {open && e.icon === buyingIcon && (
                <div className={`pl-2 transition-all duration-300 overflow-hidden ease-in-out ${expand ? "max-h-0" : "max-h-50"}`}>
                  {e.subItems.map((subItem, j) => (
                    <abbr title={subItem.title}>
                      <div
                        className="py-1 flex items-center justify-right cursor-pointer"
                        key={j}
                      >
                        <Link
                          to={subItem.navigation}
                          className={`text-[16px] font-medium tracking-wide text-center  ${location.pathname.includes(subItem.navigation)
                              ? "text-[#FFDC25]"
                              : "text-white"
                            }`}
                        >
                          {subItem.title.charAt(0)}
                        </Link>
                      </div>
                    </abbr>
                  ))}
                </div>
              )}

              {/* {e?.icon === buyingIcon && showDropdown && open && (
                <div
                  className={`pl-4 z-20 h-[130px] w-[202px] group-hover:block ml-10 absolute top-0 border-[2px] border-black  bg-black`}
                  onMouseLeave={() => setShowDropdown(false)}
                >
                  {e.subItems.map((subItem, j) => (
                    <div
                      className="flex items-center  justify-start cursor-pointer p-1"
                      key={j}
                    >
                      <Link
                        to={subItem.navigation}
                        className={`text-[16px] font-medium  tracking-wide mt-2 block outline a outline-black outline-[2px] bg-black  text-base
                       
                        ${
                          location.pathname.includes(subItem.navigation)
                            ? "text-[#FFDC25]"
                            : "text-white"
                        }
                       `}
                      >
                        {subItem.title} hover
                      </Link>
                    </div>
                  ))}
                </div>
              )} */}

              {!open && hasSubItems && (
                <div className={`pl-4 overflow-hidden transition-all duration-500 ease-in-out ${expand ? "max-h-0" : "max-h-40"}`}>
                  {e.subItems.map((subItem, j) => (
                    <div className="flex items-center cursor-pointer" key={j}>
                      <Link
                        to={subItem.navigation}
                        className={`text-[16px] font-medium tracking-wide ml-10 mt-2 block
                       
                        ${location.pathname.includes(subItem.navigation)
                            ? "text-[#FFDC25]"
                            : "text-white"
                          }
                       `}
                      >
                        {subItem.title}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideMenu;

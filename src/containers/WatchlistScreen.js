import { ExpandMore, ExpandLess, Cancel } from "@mui/icons-material";
import SideMenu from "../components/Buying/SideMenu";
import ProductCard from "../components/Home/ProductCard";
import ProductCardMob from "../components/Home/ProductCardMob";
import { useState } from "react";

const WatchlistScreen = () => {
  const [fontSize, setFontSize] = useState("text-4xl");
  const [activeTab, setActiveTab] = useState("All");
  const [phonesidenav, showphonesidenav] = useState(true);
  const [showsort, setshowsort] = useState(true);
  const [sorttype, setsorttype] = useState(0);
  const sortarray = ["New to Old", "Old to New", "Recently Added", "Date All"];
  const [data, setdata] = useState([
    {
      id: 1,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st",
      shipping: "200.00",
      deliverydate: "12 Dec 2022"
    },
    {
      id: 2,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      shipping: "200.00",
      deliverydate: "12 Dec 2022",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st"
    },
    {
      id: 3,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      shipping: "200.00",
      deliverydate: "12 Dec 2022",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st"
    },
    {
      id: 4,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      shipping: "200.00",
      deliverydate: "12 Dec 2022",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st"
    },
    {
      id: 5,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      shipping: "200.00",
      deliverydate: "12 Dec 2022",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st"
    },
    {
      id: 6,
      seller: '@AkshatTripathi',
      title: "Hyundai Venue",
      desc: "Interested Buyers Contact Me Shipping All Over India",
      shipping: "200.00",
      deliverydate: "12 Dec 2022",
      price: "₹4,60,000",
      acceptprice: "₹4,00,000",
      img: require("../assets/new design/car_img.png"),
      location: " Ashok Vihar Delhi",
      year: "2019",
      time: "02 D 12 Hr",
      distance: "5000 KMS",
      ownership: "1st"
    },
  ])
  const WishListTabs = [
    "All",
    "Active",
    "Ended",
  ];
  const [remove, setremove] = useState(-1);
  const removeFromWishlist = () => {
    // code to remove from wishlist from backend
    setdata(data.filter(item => item !== remove));
    setremove({ "id": "-1" });
  }
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    console.log(event.currentTarget.scrollTop);
    if (event.currentTarget.scrollTop > 0) {
      setFontSize("text-xl");
    } else {
      setFontSize("text-4xl");
    }
  };
  return (
    <div>
      {/* desktop */}
      <div className="hidden xl:flex items-start min-h-screen">
        <div className=" self-stretch">
          <SideMenu />
        </div>
        <div className="flex-1  bg-[#FCF9F4]">
          <div
            className={`border-b-[1px] border-black pl-12 pr-16 transition-all duration-300 ease-in-out ${fontSize === "text-4xl" ? "pt-8 pb-9" : "pt-4 pb-6"
              }`}
          >
            <h1 className={`${fontSize} transition-all duration-300 ease font-semibold text-black`}>
              Watchlist
            </h1>
            <div
              className={`${fontSize === "text-4xl" ? "mt-5" : "mt-2"
                } transition-all duration-300 ease-in-out flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-4">
                {WishListTabs.map(function (e, i) {
                  return (
                    <button
                      onClick={() => setActiveTab(e)}
                      key={i}
                      className={`text-[18px] mt-2.5 py-2 px-5  rounded-md ${activeTab === e
                        ? "bg-white border-[1px] border-sa-border-black"
                        : "bg-[#FCF9F4]  border-[1px] border-[#FCF9F4]"
                        } text-black font-medium flex items-center justify-center`}
                    >
                      {e}
                    </button>
                  );
                })}
                {/* <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Shipped
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Pending
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Returned
                </button>
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black  font-medium flex items-center justify-center">
                  Failed
                </button> */}
              </div>
              <div className="grid grid-cols-[100%] place-items-center">
                <button onClick={() => { setshowsort(!showsort) }} className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                  Sort: {sortarray[sorttype]} {showsort ? <ExpandMore /> : <ExpandLess />}
                </button>
                <div className={`absolute translate-y-[65%] z-20 grid grid-cols-[100%] bg-white px-4 rounded-lg border-[1px] border-sa-border-black ${showsort ? "hidden" : ""}`}>
                  {sortarray.map((type, i) => (
                    <button className={`text-left py-3 border-b-[1px] border-gray-400 ${i !== sorttype ? "" : "font-bold"}`} onClick={() => { setsorttype(i); setshowsort(!showsort); }}>{type}</button>
                  ))}
                </div>
              </div>
              {/* <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                Date: All <ExpandMore />
              </button> */}
            </div>
          </div>
        <div onScroll={handleScroll} className="pl-12 pr-16 pt-9 h-[70vh] overflow-y-auto flex items-start flex-wrap gap-x-12">
          {data.map((e, i) => (
            (e === remove) ?
              (<div className=" w-[30%] bg-sa-menu-green rounded-md mb-10 self-stretch flex items-center justify-center flex-col">
                <h1 className="text-xl font-medium text-white text-center w-[60%] mx-auto ">
                  Are you sure you want to remove this
                </h1>
                <div className="flex items-center px-2 w-full gap-x-4">
                  <button onClick={() => { setremove(-1) }} className=" w-1/2 text-sm mt-2.5 py-2 px-5 rounded-[4px] bg-[#FCF9F4] text-black font-medium flex items-center justify-center border-[1px] border-black">
                    Cancel
                  </button>
                  <button onClick={() => { removeFromWishlist() }} className=" w-1/2 text-sm mt-2.5 py-2 px-5 rounded-[4px] bg-[#D1503B] text-white font-medium flex items-center justify-center border-[1px] border-black">
                    Remove
                  </button>
                </div>
              </div>) :
              <div className="w-[30%] mb-10">
                <ProductCard data={e} remove={setremove} />
              </div>
          ))}
        </div>
      </div>

      {/* mobile */ }
  <div className=" mb-28 xl:hidden">
    <div className={`fixed z-40 w-full self-stretch transition-all duration-300 ease ${phonesidenav ? "h-0" : "h-full"} overflow-hidden`}>
      <SideMenu />
    </div>
    <div className="pt-9 px-4 pb-3.5 border-b-[1px] border-black">
      <h1 className="text-[20px] font-semibold text-sa-menu-green">
        Buying
      </h1>
      <h1 className="text-[26px] font-semibold text-black tracking-wide">
        Watchlist
      </h1>
    </div>
    <div className="pt-7 px-4">
      {data.map((e, i) => (
        (e === remove) ?
          (<div className="bg-sa-menu-green py-10 rounded mb-5">
            <h1 className="text-base font-medium text-white text-center w-[60%] mx-auto ">
              Are you sure you want to remove this
            </h1>
            <div className="flex items-center gap-x-8 px-5">
              <button onClick={() => { setremove(-1) }} className=" w-1/2 text-sm mt-2.5 py-1 px-5 rounded-[4px] bg-[#FCF9F4] text-black font-medium flex items-center justify-center border-[1px] border-black">
                Cancel
              </button>
              <button onClick={() => { removeFromWishlist() }} className=" w-1/2 text-sm mt-2.5 py-1 px-5 rounded-[4px] bg-[#D1503B] text-white font-medium flex items-center justify-center border-[1px] border-black">
                Remove
              </button>
            </div>
          </div>) :
          (<div className="mb-5">
            <ProductCardMob data={e} remove={setremove} />
          </div>)
      ))}
    </div>
    <div className="fixed  z-50 bottom-0 w-full grid grid-cols-[100%]">
      <div className={`grid grid-cols-[100%] bg-white px-4 py-4 rounded-t-lg border-[2px] border-sa-border-black ${showsort ? "hidden" : ""}`}>
        <h2 className="text-2xl py-t-2 font-bold">Sorting</h2>
        <div
          onClick={() => { setshowsort(!showsort) }}
          className=" absolute top-4 right-3"
        >
          <Cancel className="text-base " />
        </div>
        {sortarray.map((type, i) => (
          <button className={`text-left py-3 border-b-[1px] border-gray-400 ${i !== sorttype ? "" : "font-bold"}`} onClick={() => { setsorttype(i) }}>{type}</button>
        ))}
      </div>
      <div className="grid grid-cols-[50%_50%]">
        <button onClick={() => { showphonesidenav(!phonesidenav) }} className={` w-full text-base py-2 ${phonesidenav ? "bg-black text-sa-primary-yellow" : "bg-sa-primary-yellow text-black"} border-[1px] border-sa-border-black font-medium`}>
          Watchlist
        </button>
        <button onClick={() => { setshowsort(!showsort) }} className=" w-full text-base py-2 bg-white text-sa-menu-green border-[1px] border-sa-border-black font-medium">
          Sort: {sortarray[sorttype]}
        </button>
      </div>
    </div>
  </div>
    </div >
    </div >
  );
};

export default WatchlistScreen;

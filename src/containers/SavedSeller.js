import { ExpandMore, ExpandLess, Cancel, Delete, Search, Star } from "@mui/icons-material";
import SideMenu from "../components/Buying/SideMenu";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { CONTACT_SELLER_MODAL } from "../extras/constants";
import { showModal } from "../redux/actions/modal";

const SavedSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fontSize, setFontSize] = useState("text-4xl");
  const [activeTab, setActiveTab] = useState("All");
  const [phonesidenav, showphonesidenav] = useState(true);
  const [showsort, setshowsort] = useState(false);
  const [sorttype, setsorttype] = useState(0);
  const [navexpand, setnavexpand] = useState(true);
  const sortarray = ["New to Old", "Old to New", "Recently Added", "Date All"];

  const [data, setdata] = useState([
    {
      id: 1,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "Pali, Rajasthan, India"
    },
    {
      id: 2,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "Pali, Rajasthan, India"
    },
    {
      id: 3,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "Panchgani, Maharastra, India"
    },
    {
      id: 4,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "Panchkula, Chandigarh, India"
    },
    {
      id: 5,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "Chennai, Tamil Nadu, India"
    },
    {
      id: 6,
      seller: " @rakeshphonedukaan",
      img: require("../assets/new design/seller_img.png"),
      year: "2022",
      name: "Rakesh",
      location: "LA, USA"
    },
  ])
  const recentlistTabs = [
    "All",
  ];

  const handleScroll = (event) => {
    console.log(event.currentTarget.scrollTop);
    if (event.currentTarget.scrollTop > 0) {
      setFontSize("text-xl");
    } else {
      setFontSize("text-4xl");
    }
  };
  const deleteSavedSeller = (e) => {
    // delete saved seller api
    setdata(data.filter(item => item !== e));
  };
  return (
    <div>
      {/* desktop */}
      <div className="hidden xl:flex items-start min-h-screen">
        <div className=" self-stretch">
          <SideMenu setnavexpand={setnavexpand} />
        </div>
        <div className="flex-1 w-full overflow-hidden bg-[#FCF9F4]">
          <div
            className={`border-b-[1px] border-black pl-12 pr-16 transition-all duration-300 ease-in-out ${fontSize === "text-4xl" ? "pt-8 pb-9" : "pt-4 pb-6"
              }`}
          >
            <h1 className={`${fontSize} transition-all duration-300 ease font-semibold text-black`}>
              Saved Sellers
            </h1>
            <div
              className={`${fontSize === "text-4xl" ? "mt-5" : "mt-2"
                } transition-all duration-300 ease-in-out flex items-center justify-between`}
            >
              <div className="flex items-center gap-x-4">
                <button className=" text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#769ED9] text-white border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                  Sellers from India
                  <Search className="ml-5 text-white text-xs" />
                </button>
              </div>
              <div className="relative z-20 w-max place-items-center">
                <button
                  onClick={() => { setshowsort(!showsort) }}
                  className={`text-[18px] mt-2.5 py-2 px-5 border-[1px] border-sa-border-black
                  ${(showsort) ? "rounded rounded-b-none border-b-0" : "rounded"} 
                  text-black font-medium flex items-center justify-center bg-[#FCF9F4]`}>
                  Sort: {sortarray[sorttype]}  &nbsp;{!showsort ? <ExpandMore /> : <ExpandLess />}
                </button>
                <div className={`flex-col absolute w-full border-[1px] rounded rounded-t-none border-black bg-[#FCF9F4] ${(showsort) ? "flex" : "hidden"}`}>
                  {sortarray.map((type, i) => (
                    <div key={`cat${i}`} onClick={() => { setsorttype(i); setshowsort(!showsort); }} className='relative cursor-pointer py-1.5 font-medium border-b-[1px] last:border-b-[0px] border-black px-3'>
                      <p>{type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            onScroll={handleScroll}
            style={{ width: navexpand ? "100%" : "95vw" }}
            className="transition-all duration-600 ease w-[100%] pl-7 pr-8 pt-9 h-[85vh] overflow-y-auto overflow-x-hidden flex flex-wrap justify-center gap-x-[3%]">
            {data.map((e, i) => (
              <div className="w-min min-w-[300px] mb-10">
                <div  onClick={() => navigate("/sellerShop")} className="border-[1px] border-black cardHover rounded-md relative">
                  <div className="p-3">
                    <div className="border border-solid border-black rounded-md overflow-hidden">
                      <img
                        src={e.img}
                        alt=""
                        className="w-full aspect-auto"
                      />
                    </div>
                    <div className="flex items-center my-2">
                      <div className="border-r-[1px] border-black flex-1">
                        <h1 className="text-xl font-semibold text-black">
                          {e.seller}
                        </h1>
                        <h1 className="text-lg font-semibold text-[#3A3A3A]">
                          Member since {e.year}
                        </h1>
                      </div>
                      <div className="ml-4">
                        <div className=" flex items-center gap-x-0.5">
                          <h1 className=" text-[28px] font-bold">{e.rating}</h1>
                          <Star className=" text-yellow-100 text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 gap-3">
                  <button 
                    onClick={() => {
                      dispatch(
                        showModal({
                          modalType: CONTACT_SELLER_MODAL,
                          modalTitle: ``,
                          modalSubTitle: "",
                        })
                      );
                    }}
                    className="buttonHover flex-1 text-sm   py-2 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium">
                    Contact {e.name}
                  </button>
                  <button onClick={()=>deleteSavedSeller(e)} className="buttonHover text-sm py-1.5 px-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-black font-medium">
                    <Delete />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className=" mb-28 xl:hidden">
        <div className={`fixed z-40 w-full self-stretch transition-all duration-300 ease ${phonesidenav ? "h-0" : "h-full"} overflow-hidden`}>
          <SideMenu />
        </div>
        <div className="pt-9 px-4 pb-3.5 border-b-[1px] border-black">
          <h1 className="text-[20px] font-semibold text-sa-menu-green">
            Buying
          </h1>
          <h1 className="text-[26px] font-semibold text-black tracking-wide">
            Saved Sellers
          </h1>
        </div>
        <div className="pt-7 px-4">
          <div className="w-full text-[18px] mb-7 py-2 px-5 rounded-[4px] bg-[#769ED9] flex items-center justify-between border-[1px] border-black">
            <button className="  text-white font-medium text-left flex-1">
              Sellers from India
            </button>
            <Search className=" text-white text-xs" />
          </div>
          {data.map((e, i) => (
            <div className="mb-10">
              <div  onClick={() => navigate("/sellerShop")} className="border-[1px] border-black cardHover rounded-md relative">
                <div className="p-3">
                  <div className="border border-solid border-black rounded-md overflow-hidden">
                    <img
                      src={e.img}
                      alt=""
                      className="w-full aspect-auto"
                    />
                  </div>
                  <div className="flex items-center my-2">
                    <div className="border-r-[1px] border-black flex-1">
                      <h1 className="text-xl font-semibold text-black">
                        {e.seller}
                      </h1>
                      <h1 className="text-lg font-semibold text-[#3A3A3A]">
                        Member since {e.year}
                      </h1>
                    </div>
                    <div className="ml-4">
                      <div className=" flex items-center gap-x-0.5">
                        <h1 className=" text-[28px] font-bold">{e.rating}</h1>
                        <Star className=" text-yellow-100 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-3 gap-3">
                <button 
                  onClick={() => {
                    dispatch(
                      showModal({
                        modalType: CONTACT_SELLER_MODAL,
                        modalTitle: ``,
                        modalSubTitle: "",
                      })
                    );
                  }}
                  className=" flex-1 text-lg py-2 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium">
                  Contact {e.name}
                </button>
                <button onClick={()=>deleteSavedSeller(e)} className=" text-lg py-1.5 px-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-black font-medium">
                  <Delete />
                </button>
              </div>
            </div>
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
              Saved Seller
            </button>
            <button onClick={() => { setshowsort(!showsort) }} className=" w-full text-base py-2 bg-white text-sa-menu-green border-[1px] border-sa-border-black font-medium">
              Sorting: {sortarray[sorttype]}
            </button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SavedSeller;

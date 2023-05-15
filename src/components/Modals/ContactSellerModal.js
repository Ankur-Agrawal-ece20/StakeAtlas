import { Cancel, Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { CONTACT_SELLER_SUBMIT_MESSAGE_MODAL } from "../../extras/constants";
import { hideModal, showModal } from "../../redux/actions/modal";
import TagRibbon from "../TagRibbon";

const ContactSellerModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="hidden xl:flex">
        <div className="px-4">
          <div className="border-[1px] border-black rounded relative ">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3"
            >
              <Cancel className="text-base text-red-400" />
            </div>
            <div className="flex items-center justify-between bg-[#0076BE] py-4 px-6 rounded-t border-b-[1px] border-black">
              <div className="flex items-center gap-x-1.5">
                <div className="w-30">
                  <img
                    src={require("../../assets/new design/user.png")}
                    alt=""
                    className=" w-full"
                  />
                </div>
                <div>
                  <h1 className=" text-xl underline font-medium text-white">
                    Akshat Tripathi
                  </h1>
                  <h1 className="text-base font-normal text-white">
                    Member since July 2022
                  </h1>
                </div>
              </div>
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" text-2xl font-bold text-white">4.5</h1>
                <Star className=" text-yellow-100 text-xs" />
              </div>
            </div>
            <div className="bg-white px-7 py-5">
              <div className="flex relative items-start">
                <TagRibbon
                  textClasses={
                    "text-[12px] font-semibold text-black text-center"
                  }
                  tagText="USED"
                  bgColor={"#FFDC25"}
                  customClassesBG={"w-[80px] h-[30px]"}
                  customClasses={"w-[74px] h-[26px]"}
                />
                <div className="w-[20%] border-[1px] border-black rounded">
                  <img
                    src={require("../../assets/new design/car_img.png")}
                    alt=""
                    className="w-full aspect-square"
                  />
                </div>
                <div className="ml-3 flex-1 pr-3 flex justify-between flex-col self-stretch">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-xl font-semibold text-black underline underline-offset-4">
                        Hyundai Venue(2019)
                      </h1>
                      <h1 className="font-semibold text-black text-[22px">
                        ₹60,990.00
                      </h1>
                    </div>
                    <button className="bg-sa-success-green text-xs px-4 py-1 rounded text-white border-[1px] border-black">
                      Sold
                    </button>
                  </div>
                  <div className=" w-full  flex items-center mt-3">
                    <div className="flex justify-end flex-col w-1/2 py-1 px-2">
                      <h1 className="text-[9px] font-bold text-[#667085]">
                        Shipping
                      </h1>
                      <h1 className="text-[11px] font-bold text-black">
                        +200.00
                      </h1>
                    </div>
                    <div className="flex items-end justify-end flex-col w-1/2 py-1 px-2">
                      <h1 className="text-[9px] font-medium text-[#667085]">
                        Purchase date
                      </h1>
                      <h1 className="text-[11px] font-bold text-black">
                        07/03/2023
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <textarea
                  placeholder="Ask your question here"
                  type="text"
                  className="w-full rounded border-[1px] border-black mt-1 px-3 xl:mt-1.5 py-1.5 h-36"
                />
              </div>
              <div>
                <p className="text-[13px] leading-4 mt-2 font-medium ">
                  To keep everyone safe on Stake Atlas, we prohibit sharing
                  contact information on messages. Do not share your email,
                  phone number or address as multiple attempts might lead to
                  account suspension. Keep all your conversations on Stake Atlas
                  to avoid scams.
                </p>
                <label
                  for="file-upload"
                  className="w-36 py-7 outline-none mt-3 text-center px-2 font-light flex items-center justify-center border-[1px] border-dashed border-black rounded cursor-pointer"
                >
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src={require("../../assets/new design/file_img.png")}
                      alt=""
                      className="w-7"
                    />
                    <h1 className=" text-xs font-semibold text-black">
                      Add Images
                    </h1>
                    <p className="text-xs">File format: Jpg, Png</p>
                  </div>
                  <input
                    style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                  />
                </label>
                <button
                  onClick={() => {
                    dispatch(
                      showModal({
                        modalType: CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,
                        modalTitle: ``,
                        modalSubTitle: "",
                      })
                    );
                  }}
                  className=" text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen xl:hidden">
        <div className="px-4">
          <div className="border-[1px] border-black rounded relative ">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3"
            >
              <Cancel className="text-base text-red-400" />
            </div>
            <div className="flex items-center justify-between bg-[#0076BE] py-2 px-3 rounded-t border-b-[1px] border-black">
              <div className="flex items-center gap-x-1.5">
                <div className="w-10">
                  <img
                    src={require("../../assets/new design/user.png")}
                    alt=""
                    className=" w-full"
                  />
                </div>
                <div>
                  <h1 className=" text-sm underline font-semibold text-white">
                    Akshat Tripathi
                  </h1>
                  <h1 className="text-xs font-normal text-white">
                    Member since July 2022
                  </h1>
                </div>
              </div>
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" text-2xl font-bold text-white">4.5</h1>
                <Star className=" text-yellow-100 text-xs" />
              </div>
            </div>
            <div className="bg-white px-3 py-5">
              <div className="flex relative">
                {/* <TagRibbon
                textClasses={"text-[14px] font-semibold text-black text-center"}
                tagText="USED"
                bgColor={"#FFDC25"}
              /> */}
                <div className="w-[27%] border-[1px] border-black rounded">
                  <img
                    src={require("../../assets/new design/car_img.png")}
                    alt=""
                    className="w-full aspect-square"
                  />
                </div>
                <div className="ml-3 flex-1 pr-3">
                  <h1 className="text-sm font-semibold text-black">
                    Hyundai Venue(2019)
                  </h1>
                  <div className="flex items-start justify-between">
                    <h1 className="font-semibold text-black text-base">
                      ₹60,990.00
                    </h1>
                    <button className="bg-sa-success-green text-xs px-4 py-1 rounded text-white mb-2.5">
                      Sold
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-full border-y-[1px] border-black flex items-center mt-3">
                <div className="flex justify-end flex-col border-r-[1px] border-black w-1/2 py-1 px-2">
                  <h1 className="text-[9px] font-bold text-[#667085]">
                    Shipping
                  </h1>
                  <h1 className="text-[11px] font-bold text-black">+200.00</h1>
                </div>
                <div className="flex items-end justify-end flex-col w-1/2 py-1 px-2">
                  <h1 className="text-[9px] font-medium text-[#667085]">
                    Purchase date
                  </h1>
                  <h1 className="text-[11px] font-bold text-black">
                    07/03/2023
                  </h1>
                </div>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Ask your question here"
                  type="text"
                  className="w-full rounded border-[1px] border-black mt-1 px-3 xl:mt-1.5 py-1.5"
                />
              </div>
              <div>
                <p className="text-[9px] leading-3 mt-2 font-medium ">
                  To keep everyone safe on Stake Atlas, we prohibit sharing
                  contact information on messages. Do not share your email,
                  phone number or address as multiple attempts might lead to
                  account suspension. Keep all your conversations on Stake Atlas
                  to avoid scams.
                </p>
                <label
                  for="file-upload"
                  className="w-40 py-3 outline-none mt-3 text-center px-2 font-light flex items-center justify-center border-[1px] border-dashed border-black rounded cursor-pointer"
                >
                  <div className="flex items-center justify-center flex-col">
                    <img
                      src={require("../../assets/new design/file_img.png")}
                      alt=""
                      className="w-7"
                    />
                    <h1 className=" text-xs font-semibold text-black">
                      Add Images
                    </h1>
                    <p className="text-xs">File format: Jpg, Png</p>
                  </div>
                  <input
                    style={{ display: "none" }}
                    id="file-upload"
                    type="file"
                  />
                </label>
                <button
                  onClick={() => {
                    dispatch(
                      showModal({
                        modalType: CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,
                        modalTitle: ``,
                        modalSubTitle: "",
                      })
                    );
                  }}
                  className=" text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSellerModal;

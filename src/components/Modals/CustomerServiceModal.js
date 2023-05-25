import { Cancel, Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { CONTACT_SELLER_SUBMIT_MESSAGE_MODAL } from "../../extras/constants";
import { hideModal, showModal } from "../../redux/actions/modal";
import TagRibbon from "../TagRibbon";

const CustomerServiceModal = () => {
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
                  <h1 className=" text-[20px] underline font-medium text-white">
                    Akshat Tripathi
                  </h1>
                  <h1 className="text-[16px] font-normal text-white">
                    Member since July 2022
                  </h1>
                </div>
              </div>
              <div className=" flex items-center gap-x-0.5">
                <h1 className=" text-[32px] font-bold text-white">4.5</h1>
                <Star className=" text-yellow-100 text-xs" />
              </div>
            </div>
            <div className="bg-white px-7 py-5">
              <div className="mt-3">
                <div
                  className={`cardSelect !bg-[#F8FFF8] border-[#139F00] border-[1px] p-2 flex items-start align-center gap-x-3 cardHover rounded-md relative mb-3`}>
                  <p className="text-[20px] ml-2 font-medium text-black xl:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
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
                <p className="text-[12px] leading-4 mt-2 font-medium ">
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
                        modalProps: { "type": "Request Sent", "color": "#0167DE", "msg": "70% buyers accept a counter offer from a seller. Make a counter offer to make a deal!" }
                      })
                    );
                  }}
                  className=" text-[14px] xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5"
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
                  <h1 className=" text-[16px] underline font-semibold text-white">
                    Customer Service
                  </h1>
                </div>
              </div>
            </div>
            <div className="bg-white px-3 py-5">
              <div className="mt-3">
                <div
                  className={`cardSelect !bg-[#F8FFF8] border-[#139F00] border-[1px] p-2 flex items-start align-center gap-x-3 cardHover rounded-md relative mb-3`}>
                  <input checked={true} type="checkbox" name="" id="" className="mt-1 scale-125 accent-[#139F00]" />
                  <p className="text-[16px] font-medium text-black xl:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit.
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <textarea
                  placeholder="Ask your question here"
                  type="text"
                  className="w-full rounded border-[1px] border-black mt-1 px-3 xl:mt-1.5 py-1.5 h-20"
                />
              </div>
              <div>
                <p className="text-[10px] leading-3 mt-2 font-medium ">
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
                        modalProps: { "type": "Request Sent", "color": "#0167DE", "msg": "70% buyers accept a counter offer from a seller. Make a counter offer to make a deal!" }
                      })
                    );
                  }}
                  className=" text-[14px] xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default CustomerServiceModal;

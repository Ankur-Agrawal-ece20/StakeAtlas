import React from "react";
import { Cancel, Star, StarOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions/modal";

const ReviewSubmittedModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hidden xl:flex">
        <div className="px-4">
          <div className="border-[1px] border-black rounded relative ">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3">
              <Cancel
                className="text-base text-red-400"
              />
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
              <div>
                <div className="mb-2">
                  <h1 className="text-[40px] font-semibold text-[#344054] text-center">
                    Great we’ll let akshat know!
                  </h1>
                  <p className="text-[20px] font-medium text-black text-center leading-7 mt-2 w-[80%] mx-auto">
                    As a token of appreciation we have credited ₹100 in your
                    Stake Atlas account towards your next purchase.
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <Star className=" text-yellow-100" fontSize="large" />
                    <StarOutline fontSize="large" />
                    <StarOutline fontSize="large" />
                    <StarOutline fontSize="large" />
                    <StarOutline fontSize="large" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-full xl:hidden">
        <div className="px-4">
          <div className="border-[1px] border-black rounded relative">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3">
              <Cancel
                className="text-base text-red-400"
              />
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
              <div>
                <div className="mb-2">
                  <h1 className="text-2xl font-semibold text-[#344054] text-center">
                    Great we’ll let akshat know!
                  </h1>
                  <p className="text-base font-medium text-black text-center leading-5 mt-2">
                    As a token of appreciation we have credited ₹100 in your
                    Stake Atlas account towards your next purchase.
                  </p>
                  <div className="flex items-center justify-center mt-4">
                    <Star className=" text-yellow-100 text-xs" />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmittedModal;

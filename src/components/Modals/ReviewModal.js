import React, { useState } from "react";
import { Cancel, Star, StarOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { REVIEW_SUBMITTED_MODAL } from "../../extras/constants";
import Ratings from "../Ratings";
import { Rating } from "react-simple-star-rating";
import { hideModal, showModal } from "../../redux/actions/modal";

const ReviewModal = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
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
            <div className="bg-sa-primary-yellow border-y-[1px] border-black py-3.5 flex items-center justify-center gap-x-3">
              <h1 className="text-[18px] font-medium text-black">
                Leave a review and get ₹100 off on your next order
              </h1>
              <p className="text-[18px] text-[#0076BE] underline underline-offset-2">
                View Details
              </p>
            </div>
            <div className="bg-white px-7 py-5">
              <div>
                <h1 className="text-[28px] font-semibold text-[#344054]">
                  How would you rate your experience with Akshat?
                </h1>
                <div className="flex items-center mb-2 mt-3">
                  <h1 className="text-[20px] font-semibold text-[#344054] w-[25%]">
                    Communication
                  </h1>
                  <div className="flex items-center mr-2">
                    <Rating
                      className="flex flex-row justify-center h-9"
                      onClick={handleRating}
                      allowHover={false}
                      disableFillHover={true}
                      readonly={rating === 0}
                      emptyColor="orange"
                    />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                  </div>
                  <h1 className="text-[22px] font-semibold text-black">Bad</h1>
                </div>
                <div className="flex items-center mb-2">
                  <h1 className="text-[20px] font-semibold text-[#344054] w-[25%]">
                    On Time Shipment
                  </h1>
                  <div className="flex items-center mr-2">
                  <Rating
                      className="flex flex-row justify-center h-9"
                      onClick={handleRating}
                      allowHover={false}
                      disableFillHover={true}
                      readonly={rating === 0}
                      emptyColor="orange"
                    />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                  </div>
                  <h1 className="text-[22px] font-semibold text-black">Bad</h1>
                </div>
                <div className="flex items-center mb-2">
                  <h1 className="text-[20px] font-semibold text-[#344054] w-[25%]">
                    Item as described
                  </h1>
                  <div className="flex items-center mr-2">
                  <Rating
                      className="flex flex-row justify-center h-9"
                      onClick={handleRating}
                      allowHover={false}
                      disableFillHover={true}
                      readonly={rating === 0}
                      emptyColor="orange"
                    />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                    <Ratings />
                  </div>
                  <h1 className="text-[22px] font-semibold text-black">Bad</h1>
                </div>
              </div>
              <div className="mt-2">
                <textarea
                  placeholder="Leave a comment"
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
                        modalType: REVIEW_SUBMITTED_MODAL,
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

      {/* mobile */}
      <div className="w-full xl:hidden">
        <div className="px-4">
          <div className="border-[1px] border-black rounded relative">
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
            <div className="bg-sa-primary-yellow border-y-[1px] border-black px-3 py-2">
              <h1 className="text-xs font-medium text-black">
                Leave a review and get ₹100 off on your next order
              </h1>
              <p className="text-xs text-[#0076BE] underline underline-offset-2">
                View Details
              </p>
            </div>
            <div className="bg-white px-3 py-5">
              <div>
                <div className="flex items-center mb-2">
                  <h1 className="text-sm font-semibold text-[#344054] w-[40%]">
                    Communication
                  </h1>
                  <div className="flex items-center mr-2">
                    <Star className=" text-yellow-100 text-xs" />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                  </div>
                  <h1 className="text-xs font-semibold text-black">Bad</h1>
                </div>
                <div className="flex items-center mb-2">
                  <h1 className="text-sm font-semibold text-[#344054] w-[40%]">
                    On Time Shipment
                  </h1>
                  <div className="flex items-center mr-2">
                    <Star className=" text-yellow-100 text-xs" />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                  </div>
                  <h1 className="text-xs font-semibold text-black">Bad</h1>
                </div>
                <div className="flex items-center mb-2">
                  <h1 className="text-sm font-semibold text-[#344054] w-[40%]">
                    Item as described
                  </h1>
                  <div className="flex items-center mr-2">
                    <Star className=" text-yellow-100 text-xs" />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                    <StarOutline />
                  </div>
                  <h1 className="text-xs font-semibold text-black">Bad</h1>
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
                        modalType: REVIEW_SUBMITTED_MODAL,
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

export default ReviewModal;

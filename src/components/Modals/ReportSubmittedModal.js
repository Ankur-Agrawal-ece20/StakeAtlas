import React from "react";
import { Cancel, Star, StarOutline } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../redux/actions/modal";

const ReportSubmittedModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hidden xl:flex w-full">
        <div className="px-4 w-full">
          <div className="border-[1px] border-black rounded relative ">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3">
              <Cancel
                className="text-red-400"
                className="text-base text-red-400"
              />
            </div>
            <div className="bg-white px-7 py-5">
              <div>
                <div className="mb-2">
                  <h1 className="text-[40px] font-semibold text-black text-center">
                    We’re here to resolve your problem
                  </h1>
                  <div className="flex items-center justify-center gap-x-8">
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/contact_icon.svg")
                              .default
                          }
                        />
                      </div>
                      <h1 className="text-lg font-medium text-gray-400 mt-1">
                        Call us at
                      </h1>
                      <h1 className="text-xl font-semibold text-black">
                        +91 85674 83647
                      </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/message_icon_circle.svg")
                              .default
                          }
                        />
                      </div>
                      <h1 className="text-lg font-medium text-gray-400 mt-1">
                        Send a message
                      </h1>
                      <h1 className="text-xl font-semibold text-black">
                        Tell us in detail
                      </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/mail_icon.svg").default
                          }
                        />
                      </div>
                      <h1 className="text-lg font-medium text-gray-400 mt-1">
                        Mail us at
                      </h1>
                      <h1 className="text-xl font-semibold text-black">
                        help@stakeatlas.in
                      </h1>
                    </div>
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
                className="text-red-400"
                className="text-base text-red-400"
              />
            </div>
            <div className="bg-white px-3 py-5">
              <div>
                <div className="mb-2">
                  <h1 className="text-2xl font-semibold text-black text-center">
                    We’re here to resolve your problem
                  </h1>
                  <div>
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/contact_icon.svg")
                              .default
                          }
                          className="w-10"
                        />
                      </div>
                      <h1 className="text-sm font-medium text-gray-400 mt-1">
                        Call us at
                      </h1>
                      <h1 className="text-base font-semibold text-black">
                        +91 85674 83647
                      </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/message_icon_circle.svg")
                              .default
                          }
                          className="w-10"
                        />
                      </div>
                      <h1 className="text-sm font-medium text-gray-400 mt-1">
                        Send a message
                      </h1>
                      <h1 className="text-base font-semibold text-black">
                        Tell us in detail
                      </h1>
                    </div>
                    <div className="flex items-center justify-center flex-col mt-4">
                      <div className="flex items-center justify-center">
                        <img
                          src={
                            require("../../assets/icons/mail_icon.svg").default
                          }
                          className="w-10"
                        />
                      </div>
                      <h1 className="text-sm font-medium text-gray-400 mt-1">
                        Mail us at
                      </h1>
                      <h1 className="text-base font-semibold text-black">
                        help@stakeatlas.in
                      </h1>
                    </div>
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

export default ReportSubmittedModal;

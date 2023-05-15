import { Cancel } from "@mui/icons-material";
import React from "react";
import { hideModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";

const ContactSellerSubmitMessageModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg-white py-1 rounded border-[1px] border-black">
        <div
          onClick={() => dispatch(hideModal())}
          className=" flex items-center justify-end pr-1">
          <Cancel className="text-red-400" fontSize="large" />
        </div>
        <div className=" flex items-center flex-col mb-10">
          <h1 className="text-3xl font-semibold text-black text-center w-[90%] mx-auto">
            Your message has been sent!
          </h1>
          <p className="mt-3">Lorum ipsum dimsum </p>
          <div className="my-5">
            <img
              src={require("../../assets/new design/smile.png")}
              alt=""
              className=" scale-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSellerSubmitMessageModal;

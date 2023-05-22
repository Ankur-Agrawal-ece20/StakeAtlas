import { Cancel } from "@mui/icons-material";
import React from "react";
import { hideModal } from "../../redux/actions/modal";
import { useDispatch } from "react-redux";

const ContactSellerSubmitMessageModal = (props) => {
  const dispatch = useDispatch();
  console.log(props.props.color)

  return (
    <div className="flex justify-center align-center">
      <div className="bg-white py-1 w-[60%] rounded border-[1px] border-black">
        <div
          onClick={() => dispatch(hideModal())}
          className=" flex items-center justify-end pr-1">
          <Cancel className="text-red-400" fontSize="large" />
        </div>
        <div className=" flex items-center flex-col mb-10">
          <h1 className="text-3xl font-semibold text-center w-[90%] mx-auto" style={{color:props.props.color}}>
            {props.props.type}
          </h1>
          <p className="mt-3 px-10 text-center">{props.props.msg}</p>
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

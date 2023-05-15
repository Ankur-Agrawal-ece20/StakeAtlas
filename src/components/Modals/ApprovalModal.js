import { Cancel } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions/modal";

const ApprovalModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-white py-1 rounded border-[1px] border-black">
        <div
          onClick={() => dispatch(hideModal())}
          className=" flex items-center justify-end pr-1"
        >
          <Cancel className="text-red-400" fontSize="large" />
        </div>
        <div className=" flex items-center flex-col mb-10">
          <h1 className="text-3xl font-semibold text-black text-center w-[90%] mx-auto">
            Great! Your ad has now been posted
          </h1>
          <p className="mt-3">You can find it in your active listings</p>
          <div className="my-5">
            <img
              src={require("../../assets/new design/smile.png")}
              alt=""
              className=" scale-90"
            />
          </div>
          <button className=" w-[45%] text-[14px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold">
            View Listings
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;

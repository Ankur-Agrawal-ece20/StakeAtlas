import { Cancel, Delete } from "@mui/icons-material";
import { connect } from "react-redux";
import PreviewCardDesktop from "../components/Seller/PreviewCardDesktop";
import PreviewCardMob from "../components/Seller/PreviewCardMob";
import SideMenu from "../components/Seller/SideMenu";
import { APPROVAL_MODAL } from "../extras/constants";
import { showModal } from "../redux/actions/modal";

const ApprovalScreen = ({ showModal }) => {
  return (
    <div>
      {/* desktop */}
      <div className=" min-h-screen xl:flex hidden">
        <SideMenu />
        <div className=" flex-1 bg-[#00000085] px-10 py-10">
          <div className="bg-white border-[1px] border-black rounded-lg pb-10">
            <div className=" flex items-center justify-end pr-2 pt-2">
              <Cancel className="text-red-400" fontSize={"large"} />
            </div>
            <div className="">
              <h1 className="text-[42px] font-semibold text-black text-center">
                Your listing looks even better now!
              </h1>
              <p className=" text-[22px] font-medium text-center">
                We’ve made some changes to your listing to make it more
                presentable.
              </p>
              <div className=" flex items-center justify-center mt-4 space-x-4">
                <button
                  onClick={() => {
                    showModal({
                      modalType: APPROVAL_MODAL,
                      modalTitle: ``,
                      modalSubTitle: "",
                    });
                  }}
                  className=" text-lg py-2 px-9 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-medium"
                >
                  Approve
                </button>
                <button className=" text-lg py-2 px-9 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-medium">
                  Reject changes and edit listing
                </button>
                <button className=" text-lg py-2 px-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-sa-border-black font-medium">
                  <Delete />
                </button>
              </div>
              <div className="px-4">
                <PreviewCardDesktop />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="border-[1px] border-black mt-8 rounded-lg pt-1 mb-10 xl:hidden">
        <div className=" flex items-center justify-end pr-1">
          <Cancel className="text-red-400" fontSize="large" />
        </div>
        <div className="px-4">
          <h1 className="font-semibold text-[28px] text-black text-center w-[85%] leading-10 mx-auto mt-3">
            Your listing looks even better now!
          </h1>
          <p className=" text-base font-medium text-center w-[90%] mx-auto mt-4 leading-5">
            We’ve made some changes to your listing to make it more presentable
          </p>
          <div className="mt-4">
            <div className=" flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  showModal({
                    modalType: APPROVAL_MODAL,
                    modalTitle: ``,
                    modalSubTitle: "",
                  });
                }}
                className=" w-1/2 text-sm py-3 rounded-[4px] bg-[#00BEA7] text-black border-[1px] border-sa-border-black font-medium"
              >
                Approve
              </button>
              <button className=" w-1/2 text-sm py-3 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-sa-border-black font-medium">
                Delete
              </button>
            </div>
            <button className=" w-full text-sm py-3 mt-4 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-medium">
              Reject changes and edit listing
            </button>
          </div>
          <div className=" border-[1px] border-black mt-6 px-3.5 py-2.5 rounded mb-6">
            <h1 className=" text-[17px] font-semibold text-black tracking-wide">
              Suggested changes
            </h1>
            <div className="pl-5 pt-2">
              <ul className=" list-disc">
                <li>Title</li>
                <li>Description</li>
                <li>Details </li>
              </ul>
            </div>
          </div>
          <PreviewCardMob />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    showModal: (kind) => dispatch(showModal(kind)),
  };
};

export default connect(null, mapDispatchToProps)(ApprovalScreen);

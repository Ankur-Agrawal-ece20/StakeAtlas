import { Cancel } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hideModal, showModal } from "../../redux/actions/modal";
import { REPORT_SUBMITTED_MODAL } from "../../extras/constants";

const ReportModal = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-screen xl:w-full">
        <div className="px-4 xl:px-7">
          <div className="border-[1px] border-black rounded relative">
            <div className=" bg-white px-3 rounded pb-5 xl:px-6">
              <div
                onClick={() => dispatch(hideModal())}
                className=" absolute top-0 right-0">
                <Cancel
                  className="text-red-400"
                  className="text-base text-red-400"
                />
              </div>

              <div className="pt-6">
                <h1 className="text-2xl font-semibold text-black xl:text-4xl">
                  Report a problem
                </h1>
                <div className="mt-3">
                  {[0, 1, 2, 3].map((e) => (
                    <div className="border-[1px] border-black p-2 flex items-start gap-x-3 cardHover rounded-md relative mb-3">
                      <input type="checkbox" name="" id="" className="mt-1" />
                      <p className="text-sm font-medium text-black xl:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  dispatch(
                    showModal({
                      modalType: REPORT_SUBMITTED_MODAL,
                      modalTitle: ``,
                      modalSubTitle: "",
                    })
                  );
                }}
                className=" text-xs xl:text-base py-2.5 px-7 rounded-[4px] bg-[#005C51] text-white border-[1px] border-sa-border-black font-medium mt-2">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;

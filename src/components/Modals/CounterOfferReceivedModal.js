import { Cancel, Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { COUNTER_OFFER_MODAL,APPROVE_OFFER_MODAL,DECLINE_OFFER_MODAL } from "../../extras/constants";
import { hideModal, showModal } from "../../redux/actions/modal";

const CounterOfferReceivedModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="hidden xl:flex">
        <div className="px-4  w-[70%] mx-auto">
          <div className="border-[1px] border-black relative rounded-lg">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3"
            >
              <Cancel className="text-base text-red-400" />
            </div>
            <div className="bg-white px-7 py-5 rounded-lg">
              <div className="mb-2">
                <h1 className="text-[40px] font-semibold text-blue-100 text-center">
                  Counter Offer Received
                </h1>
                <h1 className="text-lg font-semibold text-sa-light-brown">
                  Offer History
                </h1>
                <div className="border-[1px] border-black mt-2">
                  <div className=" flex items-center justify-between px-2 border-black">
                    <div className=" w-1/2 border-r-[1px] border-black py-2.5">
                      <h1 className="text-base text-center ">You</h1>
                    </div>
                    <div className=" w-1/2 py-2.5 flex-1">
                      <h1 className="text-base text-center">@panwadi</h1>
                    </div>
                  </div>
                  <div className=" flex items-center justify-between px-2 border-black border-t-[1px]">
                    <div className=" w-1/2 border-r-[1px] border-black py-2.5 ">
                      <h1 className="text-base text-center font-semibold text-[#037668]">
                        40000
                      </h1>
                    </div>
                    <div className=" w-1/2 py-2.5 flex-1">
                      <h1 className="text-base text-center font-semibold text-[#037668]">
                        45750
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between my-4">
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      From
                    </h1>
                    <h1 className="text-2xl font-semibold text-black">
                      @sellername
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      Rating
                    </h1>
                    <div className=" flex items-center gap-x-0.5">
                      <h1 className=" text-2xl font-bold">4.5</h1>
                      <Star className=" text-yellow-100 text-xs" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      Offer Amount
                    </h1>
                    <h1 className="text-2xl font-semibold text-black">
                      ₹2,20,000/-
                    </h1>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-x-5">
                  <button
                    onClick={() => {
                      dispatch(
                        showModal({
                          modalType: DECLINE_OFFER_MODAL,
                          modalTitle: ``,
                          modalSubTitle: "",
                        })
                      );
                    }}
                   className=" w-1/2 text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-sa-border-black font-medium flex items-center justify-center">
                    Decline
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        showModal({
                          modalType: COUNTER_OFFER_MODAL,
                          modalTitle: ``,
                          modalSubTitle: "",
                        })
                      );
                    }}
                    className=" w-1/2 text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#0167DE] text-white  font-medium flex items-center justify-center"
                  >
                    Counter
                  </button>
                  <button 
                    onClick={() => {
                      dispatch(
                        showModal({
                          modalType: APPROVE_OFFER_MODAL,
                          modalTitle: ``,
                          modalSubTitle: "",
                        })
                      );
                    }}
                    className=" w-1/2 text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-sa-success-green text-white  font-medium flex items-center justify-center">
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="w-screen xl:hidden">
        <div className="px-4">
          <div className="border-[1px] border-black rounded-md relative">
            <div
              onClick={() => dispatch(hideModal())}
              className=" absolute -top-4 -right-3"
            >
              <Cancel className="text-base text-red-400" />
            </div>
            <div className="bg-white px-3 py-5 rounded-md">
              <div>
                <div className="mb-2">
                  <h1 className="text-[28px] font-semibold text-blue-100 text-center">
                    Counter Offer Received
                  </h1>
                  <h1 className="text-base font-semibold text-sa-light-brown mt-3">
                    Offer History
                  </h1>
                  <div className="border-[1px] border-black mt-2">
                    <div className=" flex items-center justify-between px-2 border-black">
                      <div className=" w-1/2 border-r-[1px] border-black py-2.5">
                        <h1 className="text-base text-center ">You</h1>
                      </div>
                      <div className=" w-1/2 py-2.5 flex-1">
                        <h1 className="text-base text-center">@panwadi</h1>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between px-2 border-black border-t-[1px]">
                      <div className=" w-1/2 border-r-[1px] border-black py-2.5 ">
                        <h1 className="text-base text-center font-semibold text-[#037668]">
                          40000
                        </h1>
                      </div>
                      <div className=" w-1/2 py-2.5 flex-1">
                        <h1 className="text-base text-center font-semibold text-[#037668]">
                          45750
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-sm font-semibold text-sa-light-brown">
                          From
                        </h1>
                        <h1 className="text-base font-semibold text-black">
                          @sellername
                        </h1>
                      </div>
                      <div>
                        <h1 className="text-sm font-semibold text-sa-light-brown">
                          Rating
                        </h1>
                        <div className=" flex items-center gap-x-0.5">
                          <h1 className=" text-base font-bold">4.5</h1>
                          <Star className=" text-yellow-100 text-xs" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h1 className="text-sm font-semibold text-sa-light-brown">
                        Offer Amount
                      </h1>
                      <h1 className="text-base font-semibold text-black">
                        ₹2,20,000/-
                      </h1>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-x-5">
                      <button className="w-1/2 text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#D1503B] text-white border-[1px] border-black font-medium flex items-center justify-center">
                        Decline
                      </button>
                      <button
                        onClick={() => {
                          dispatch(
                            showModal({
                              modalType: COUNTER_OFFER_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                            })
                          );
                        }}
                        className="w-1/2 text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-[#0167DE] text-white border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Counter
                      </button>
                    </div>
                    <button className="w-full text-[18px] mt-2.5 py-2 px-5 rounded-[4px] bg-sa-success-green text-white border-[1px] border-black font-medium flex items-center justify-center">
                      Accept
                    </button>
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

export default CounterOfferReceivedModal;

import { Cancel, Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,COUNTER_OFFER_MODAL } from "../../extras/constants";
import { hideModal, showModal } from "../../redux/actions/modal";

const DeclineOfferModal = () => {
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
                <h1 className="text-[40px] font-semibold text-black text-center">
                  Decline Offer
                </h1>
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
                <div>
                  <h3 className="text-sm w-[80%] mx-auto py-2 font-semibold text-center">
                    70% sellers accept a counter offer from a buyer. Make a counter offer to make a deal!
                  </h3>
                  <div className="grid grid-cols-[48%_48%] place-items-center gap-[4%]">
                      <button
                        onClick={() => {
                          dispatch(
                            showModal({
                              modalType: CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                              modalProps: { "type": "Declined", "color": "#D1503B", "msg": "There’s plenty of fish in the sea! On average 90% of the listings receive more than 3 offers." }
                            })
                          );
                        }}
                        f
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-[#D1503B] bg-[#0167DE] text-white border-[1px] border-black font-medium flex items-center justify-center"
                      >
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
                        f
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-[#0167DE] bg-[#0167DE] text-white border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Counter
                      </button>
                    </div>
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
                  <h1 className="text-[28px] font-semibold text-black text-center">
                    Decline Offer
                  </h1>
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
                    <h1 className="text-sm w-[80%] mx-auto font-semibold">
                      70% sellers accept a counter offer from a buyer. Make a counter offer to make a deal!
                    </h1>
                    <div className="grid grid-cols-[48%_48%] place-items-center gap-[4%]">
                      <button
                        onClick={() => {
                          dispatch(
                            showModal({
                              modalType: CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,
                              modalTitle: ``,
                              modalSubTitle: "",
                              modalProps: { "type": "Declined", "color": "#D1503B", "msg": "There’s plenty of fish in the sea! On average 90% of the listings receive more than 3 offers." }
                            })
                          );
                        }}
                        f
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-[#D1503B] bg-[#0167DE] text-white border-[1px] border-black font-medium flex items-center justify-center"
                      >
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
                        f
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-[#0167DE] bg-[#0167DE] text-white border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Counter
                      </button>
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

export default DeclineOfferModal;

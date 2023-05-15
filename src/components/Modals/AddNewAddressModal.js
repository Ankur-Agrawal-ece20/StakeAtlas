import { useDispatch } from "react-redux";
import { DELIVERY_LOCATION_MODAL } from "../../extras/constants";
import { showModal } from "../../redux/actions/modal";

const AddNewAddressModal = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* Desktop */}
      <div className="bg-white px-5 py-7 rounded hidden xl:flex xl:flex-col">
        <h1 className="text-xl font-semibold text-black mb-3">
          Add New Address
        </h1>

        <div className="  px-3 py-3 border-2 border-black bg-[#FCF9F4]  mb-4 rounded-md">
          <div className=" flex items-center justify-between gap-4">
            <div className=" w-1/2">
              <h1 className="text-lg font-semibold text-black">Name</h1>
              <input
                type="text"
                placeholder="Name"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-1/2">
              <h1 className="text-lg font-semibold text-black">
                Contact Number:
              </h1>
              <input
                type="text"
                placeholder="Contact Number"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
          </div>
          <div className=" w-full mt-2">
            <h1 className="text-lg font-semibold text-black">Full Address:</h1>
            <input
              type="text"
              placeholder="Full Address"
              className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
            />
          </div>
          <div className=" flex items-center justify-between gap-4 mt-2 mb-3">
            <div className=" w-1/2">
              <h1 className="text-lg font-semibold text-black">State:</h1>
              <input
                type="text"
                placeholder="State"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-1/2">
              <h1 className="text-lg font-semibold text-black">City:</h1>
              <input
                type="text"
                placeholder="City"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-1/2">
              <h1 className="text-lg font-semibold text-black">Pincode:</h1>
              <input
                type="text"
                placeholder="Pincode"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
          </div>
        </div>
        <div className=" flex items-center gap-2">
          <button
            onClick={() => {
              dispatch(
                showModal({
                  modalType: DELIVERY_LOCATION_MODAL,
                  modalTitle: ``,
                  modalSubTitle: "",
                })
              );
            }}
            className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch(
                showModal({
                  modalType: DELIVERY_LOCATION_MODAL,
                  modalTitle: ``,
                  modalSubTitle: "",
                })
              );
            }}
            className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold"
          >
            Save New Address
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className=" w-screen flex-1 grow bg-white px-2 py-7 rounded xl:hidden">
        <h1 className="text-xl font-semibold text-black mb-3">Add Address</h1>

        <div className=" flex-1 grow  border-2 border-black rounded-md bg-[#FCF9F4]">
          <div className="px-3 py-3 rounded-md">
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">Name</h1>
              <input
                type="text"
                placeholder="Name"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">
                Contact Number:
              </h1>
              <input
                type="text"
                placeholder="Contact Number"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">
                Full Address:
              </h1>
              <input
                type="text"
                placeholder="Full Address"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">State:</h1>
              <input
                type="text"
                placeholder="State"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">City:</h1>
              <input
                type="text"
                placeholder="City"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
            <div className=" w-full mb-2">
              <h1 className="text-sm font-semibold text-black">Pincode:</h1>
              <input
                type="text"
                placeholder="Pincode"
                className=" w-full text-black mt-1 py-1 px-2 rounded-md border-[1px] border-black"
              />
            </div>
          </div>

          <div className=" w-full flex items-center gap-2 px-3 pb-4">
            <button
              onClick={() => {
                dispatch(
                  showModal({
                    modalType: DELIVERY_LOCATION_MODAL,
                    modalTitle: ``,
                    modalSubTitle: "",
                  })
                );
              }}
              className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-[#FCF9F4] text-black border-[1px] border-sa-border-black font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                dispatch(
                  showModal({
                    modalType: DELIVERY_LOCATION_MODAL,
                    modalTitle: ``,
                    modalSubTitle: "",
                  })
                );
              }}
              className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewAddressModal;

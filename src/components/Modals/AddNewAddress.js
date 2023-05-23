import { useDispatch } from "react-redux";
import { ADDRESS_MODAL, EDIT_ADDRESS_MODAL } from "../../extras/constants";
import { showModal } from "../../redux/actions/modal";
import { useState } from "react";

const DeliveryLocationModal = () => {
  const dispatch = useDispatch();
  const [index,setindex] = useState(0);
  const [address,setaddress] = useState([
    {"name":"Sarthak Mittal","contact":"+91 963074643","address":"E-7-52 Arera Colony Bhopal, ``Madhya Pradesh, 462016"},
    {"name":"Sarthak Mittal","contact":"+91 963074643","address":"E-7-52 Arera Colony Bhopal, ``Madhya Pradesh, 462016"},
    {"name":"Sarthak Mittal","contact":"+91 963074643","address":"E-7-52 Arera Colony Bhopal, ``Madhya Pradesh, 462016"},
  ])

  return (
    <div>
      {/* Desktop */}
      <div className="bg-white px-5 py-7 rounded hidden xl:flex xl:flex-col">
        <h1 className="text-xl font-semibold text-black mb-3">
          Delivery Address
        </h1>
        <div className=" h-[42vh] overflow-y-scroll p-1 no-scrollbar">
          {address.map((e,i) => (
            <div 
            onClick={()=>{setindex(i)}}
            className={`px-3 py-3 border-2 border-black transition-all duration-800 ease mb-4 ${i==index?"cardSelect":"cardHover"} rounded-md relative`}
            >
              <div className=" flex items-center">
                <div className=" flex-1 flex items-center">
                  <h1 className=" w-[25%] text-lg font-semibold text-black">
                    Name
                  </h1>
                  <h1 className=" w-[50%] text-lg font-normal text-black ml-4">
                    {e.name}  
                  </h1>
                </div>
                <button
                  onClick={() => {
                    dispatch(
                      showModal({
                        modalType: EDIT_ADDRESS_MODAL,
                        modalTitle: ``,
                        modalSubTitle: "",
                      })
                    );
                  }}
                  className=" text-[14px] py-1.5 px-3 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-semibold"
                >
                  Edit
                </button>
              </div>
              <div className=" flex items-center">
                <h1 className="w-[25%] text-lg font-semibold text-black">
                  Contact No:
                </h1>
                <h1 className=" w-[50%] text-lg font-normal text-black">
                  {e.contact}
                </h1>
              </div>
              <div className=" flex items-center">
                <h1 className="w-[25%] text-lg font-semibold text-black">
                  Address:
                </h1>
                <h1 className=" w-[50%] text-lg font-normal text-black">
                {e.address}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={() => {
              dispatch(
                showModal({
                  modalType: ADDRESS_MODAL,
                  modalTitle: ``,
                  modalSubTitle: "",
                })
              );
            }}
            className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-semibold mt-5"
          >
            Add New Address
          </button>
          <button className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold mt-5">
            Confirm Address
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white px-2 py-7 rounded xl:hidden">
        <h1 className="text-xl font-semibold text-black mb-3">
          Delivery Address
        </h1>
        <div className=" h-[42vh] overflow-y-scroll p-1 no-scrollbar">
          {address.map((e,i) => (
            <div className="px-3 py-3 border-2 border-black hover:bg-[#FCF9F4]  mb-4 cardHover rounded-md relative">
              <div className=" flex items-start mb-1">
                <h1 className=" w-[40%] text-sm font-semibold text-black">
                  Name
                </h1>
                <h1 className=" w-[60%] text-sm font-normal text-black">
                  {e.name}
                </h1>
              </div>
              <div className=" flex items-start mb-1">
                <h1 className=" w-[40%] text-sm font-semibold text-black">
                  Contact No:
                </h1>
                <h1 className=" w-[60%] text-sm font-normal text-black">
                  {e.contact}
                </h1>
              </div>
              <div className=" flex items-start mb-1">
                <h1 className=" w-[40%] text-sm font-semibold text-black">
                  Address:
                </h1>
                <h1 className=" w-[60%] text-sm font-normal text-black">
                  {e.address}
                </h1>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    showModal({
                      modalType: EDIT_ADDRESS_MODAL,
                      modalTitle: ``,
                      modalSubTitle: "",
                    })
                  );
                }}
                className=" w-full text-[14px] py-1.5 px-3 mt-3 rounded-[4px] bg-white text-black border-[1px] border-sa-border-black font-semibold"
              >
                Edit
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            dispatch(
              showModal({
                modalType: ADDRESS_MODAL,
                modalTitle: ``,
                modalSubTitle: "",
              })
            );
          }}
          className=" w-full text-[14px] py-2 px-3 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold mt-5"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default DeliveryLocationModal;

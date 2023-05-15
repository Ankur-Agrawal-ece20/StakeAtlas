import { ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";

const SellerIndividualAddress = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  return (
    <div>
      <div className="px-4.5 mt-7 xl:px-16 xl:mt-10">
        <div className=" border-[1px] border-black px-3 mb-7 xl:border-[1px] xl:px-0 xl:flex xl:items-start xl:mb-10">
          <div className="pt-6 xl:px-8 xl:pt-10 xl:w-[51%]">
            <div className=" flex items-center border-b-[1.5px] border-black pb-3 xl:pb-5">
              <ArrowBackIos color="#000" />
              <h1 className=" text-2xl xl:text-[42px] font-semibold text-black leading-7 p-0 tracking-wide">
                Individual
              </h1>
            </div>
            <div>
              <div>
                <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                  Select from saved address
                </h1>
                <div className="mt-1">
                  <Select
                    options={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                  Address
                </h1>
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                  Landmark
                </h1>
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                  State
                </h1>
                <div className="mt-1">
                  <input
                    type="text"
                    className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                  />
                </div>
              </div>
              <div className=" flex items-center justify-between gap-x-3">
                <div className="w-1/2">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                    City
                  </h1>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                    Pincode
                  </h1>
                  <div className="mt-1">
                    <input
                      type="text"
                      className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-10 flex items-center justify-between gap-x-3">
                <button
                  onClick={() => navigate("/seller/store")}
                  className=" w-1/2 text-[14px] xl:text-base py-3 px-10 rounded-[4px] bg-sa-menu-green text-white border-[1px] border-sa-border-black font-semibold"
                >
                  Previous
                </button>
                <button
                  onClick={() => navigate("/seller/registered")}
                  className=" w-1/2 text-[14px] xl:text-base py-3 px-10 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
          <div className="hidden xl:flex">
            <img
              src={require("../assets/new design/side_img.png")}
              alt=""
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerIndividualAddress;

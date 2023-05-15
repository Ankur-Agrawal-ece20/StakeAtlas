import { ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import Select from "react-select";

const SellerStoreOwner = () => {
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
                Store Owner
              </h1>
            </div>
            <div>
              <div>
                <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                  Choose primary category
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
              <div className="flex items-center justify-between flex-col xl:flex-row">
                <div className=" w-full xl:w-[48%]">
                  <div>
                    <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                      Enter GST No.
                    </h1>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                      Upload Photos
                    </h1>
                    <label
                      for="file-upload"
                      className="w-full h-32 outline-none  mt-2 text-center px-2 font-light flex items-center justify-center border-2 border-dashed border-black rounded cursor-pointer"
                    >
                      <div className="flex items-center justify-center flex-col">
                        <img
                          src={require("../assets/new design/file_img.png")}
                          alt=""
                        />
                        <h1 className=" text-sm font-semibold text-black">
                          Upload Document
                        </h1>
                        <p>File format: pdf, Jpg, Png</p>
                      </div>
                      <input
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                      />
                    </label>
                  </div>
                </div>

                <div className=" w-full xl:w-[48%]">
                  <div>
                    <h1 className="text-sm xl:text-base font-semibold text-blue-900 mt-5">
                      Enter Aadhar No.
                    </h1>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="w-full rounded border-[1px] border-black mt-1 xl:mt-1.5 py-1.5"
                      />
                    </div>
                  </div>
                  <div className="mt-6">
                    <h1 className="text-sm xl:text-base font-semibold text-blue-900">
                      Upload Photos
                    </h1>
                    <label
                      for="file-upload"
                      className="w-full h-32 outline-none  mt-2 text-center px-2 font-light flex items-center justify-center border-2 border-dashed border-black rounded cursor-pointer"
                    >
                      <div className="flex items-center justify-center flex-col">
                        <img
                          src={require("../assets/new design/file_img.png")}
                          alt=""
                        />
                        <h1 className=" text-sm font-semibold text-black">
                          Upload Document
                        </h1>
                        <p>File format: pdf, Jpg, Png</p>
                      </div>
                      <input
                        style={{ display: "none" }}
                        id="file-upload"
                        type="file"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="mt-5 mb-10">
                <button
                  onClick={() => navigate("/seller/store/address")}
                  className=" w-full text-[14px] xl:text-base py-3 px-10 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-sa-border-black font-semibold"
                >
                  Continue
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

export default SellerStoreOwner;

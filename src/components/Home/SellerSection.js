import { useState } from "react";
import SellerCard from "./SellerCard";

const SellerSection = () => {
  const [active, setActive] = useState(0);

  return (
    <div className=" px-3 pt-10 pb-14 border-t-2 border-black bg-[#0076BE] xl:pl-16 xl:pt-28 xl:pr-20 xl:pb-32">
      <div className="flex flex-col xl:items-center xl:flex-row">
        <div className="xl:w-1/2 px-0">
          <h1 className="text-white boldFont text-lg  xl:text-[42px] xl:leading-[60px] 4xl:text-[50px]">
            Our Verified <br />
            <span className="text-2xl xl:text-[56px] 4xl:text-[65px]">
              Recommended Sellers
            </span>
          </h1>
        </div>
        <div className="mt-3 xl:w-[50%] rounded-md 4xl:w-[50%] 4xl:mr-0">
          <div className="flex tablet:rounded-lg bg-black xl:bg-white xl:py-1 xl:px-2  border-[1px] border-black">
            <button
              onClick={() => setActive(0)}
              className={`xl:py-2.5 xl:px-4 uppercase transition-all ease-in duration-75  ${
                active === 0
                  ? "bg-[#FFE278] xl:bg-sa-primary-yellow  text-black xl:rounded-lg border-[1px] border-black"
                  : "text-white bg-black xl:text-black xl:bg-white hover:border-black buttonHover  "
              }  boldFont xl:m-1 py-2 px-1 w-1/2 text-[10px] hover:border-[1px] tablet:rounded-lg  xl:text-lg 4xl:py-5 4xl:text-2xl 4xl:font-semibold`}
            >
              Sellers in your city
            </button>
            <button
              onClick={() => setActive(1)}
              className={`xl:py-2.5 xl:px-4 uppercase  ease-in duration-75 ${
                active === 1
                  ? "bg-[#FFE278] xl:bg-sa-primary-yellow  text-black xl:rounded-lg border-[1px] border-black"
                  : "text-white xl:text-black bg-black xl:bg-white hover:border-black buttonHover  "
              }  boldFont xl:m-1 py-2 px-1 w-1/2 text-[10px] hover:border-[1px] tablet:rounded-lg  xl:text-lg 4xl:py-5 4xl:text-2xl 4xl:font-semibold`}
            >
              Sellers from other city
            </button>
          </div>
        </div>
      </div>

      {active ? (
        <div className="flex w-full overflow-x-auto sm:gap-7 mt-16 gap-5 l no-scrollbar">
          {[0, 1, 2].map((e) => (
            <SellerCard />
          ))}
        </div>
      ) : (
        <div className="flex w-full overflow-x-auto sm:gap-7 mt-16 gap-5 l no-scrollbar">
          {[0, 1, 2, 3].map((e) => (
            <SellerCard />
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerSection;

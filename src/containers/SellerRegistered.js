import { AccessTimeOutlined } from "@mui/icons-material";

const SellerRegistered = () => {
  return (
    <div className="h-[50vh] bg-[#F3CEB4] px-5 py-14 xl:pt-28 xl:h-[60vh]">
      <div className=" border-[1px] border-black bg-white py-12 px-5 xl:w-fit xl:mx-auto xl:px-10 xl:py-12">
        <h1 className="text-3xl font-semibold text-black text-center tracking-wide xl:text-[40px]">
          Great!
        </h1>
        <p className="text-lg font-semibold text-black text-center mt-2 tracking-wide xl:text-[29px] xl:mt-3">
          Please give us 24 hours to verify your identity
        </p>
        <div className="flex items-center justify-center gap-x-12 mt-5 xl:mt-8">
          <h1 className="text-[22px] font-bold tracking-wide text-[#737373] xl:text-[25px]">
            Status
          </h1>
          <div className="flex items-center gap-x-1">
            <AccessTimeOutlined fontSize="small" />
            <h1 className="text-[22px] font-bold tracking-wide text-sa-icon-green xl:text-[25px]">
              Pending
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegistered;

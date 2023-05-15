import ProductCard from "./ProductCard";
import ProductCardMob from "./ProductCardMob";

const ListingSection = ({ title }) => {
  return (
    <div className="border-t-2 border-black bg-[#FCF9F4] relative pb-20">
      <div className="w-[100%] py-5 pl-3 border-r-[1.5px] border-b-[1.5px] xl:w-[48.5%] bg-sa-primary-yellow xl:pl-20 xl:py-10 rounded-br-3xl xl:border-r-2 xl:border-b-2 border-black 3xl:py-12 4xl:py-[50px]">
        <h1 className="text-2xl xl:text-5xl boldFont text-black 3xl:text-[55px] 4xl:text-[65px]">
          {title}
        </h1>
      </div>
      <div className="hidden xl:flex items-center justify-around py-16 px-10">
        {[1, 2, 3, 4].map((e) => (
          <div className="w-[23%]">
            <ProductCard />
          </div>
        ))}
      </div>

      <div className="xl:hidden px-3 pt-5">
        {[0, 1, 2, 3].map((e) => (
          <div className="mb-5">
            <ProductCardMob />
          </div>
        ))}
      </div>

      <div className="xl:hidden w-full flex items-center justify-center mt-10">
        <button className="bg-[#000] text-white  py-2 px-6 rounded-md font-medium text-xs text-center">
          Visit Now
        </button>
      </div>
    </div>
  );
};

export default ListingSection;

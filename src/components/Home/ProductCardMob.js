import { AccessTimeOutlined,Favorite, LocationOnOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router";
import TagRibbon from "../TagRibbon";
import { useDispatch } from "react-redux";
import { ACCEPT_OFFER_MODAL } from "../../extras/constants";
import { showModal } from "../../redux/actions/modal";

const ProductCardMob = ({ isBuying, data, remove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!data) data = {
    id: 1,
    seller: '@AkshatTripathi',
    title: "Hyundai Venue",
    desc: "Interested Buyers Contact Me Shipping All Over India",
    shipping: "200.00",
    deliverydate: "12 Dec 2022",
    price: "₹4,60,000",
    acceptprice: "₹4,00,000",
    img: require("../../assets/new design/car_img.png"),
    location: " Ashok Vihar Delhi",
    year: "2019",
    time: "02 D 12 Hr",
    distance: "5000 KMS",
    ownership: "1st"
  }
  const toggleToWishlist=()=>{
    // code to add to wishlist
  }
  return (
    <div className=" max-w-[662px] bg-white border-[1px] border-black buttonHover rounded relative mb-5">
      {isBuying && (
        <div className="border-b-[1px] border-black flex items-center">
          <div className="border-r-[1px] border-black w-[50%]">
            <h1 className="text-2xl boldFont text-black text-center py-2 pl-3">
              {data.acceptprice}
            </h1>
          </div>
          <div
            onClick={() => {
              dispatch(
                showModal({
                  modalType: ACCEPT_OFFER_MODAL,
                  modalTitle: ``,
                  modalSubTitle: "",
                  modalProps: data
                })
              );
            }}
            className="bg-sa-success-green justify-center  w-[50%] text-center">
            <h1 className="text-md leading-8 underline underline-offset-4 decoration-1 boldFont text-white text-center py-2 pl-3">
              Accepted
            </h1>
          </div>
        </div>
      )}
      <div onClick={() => { if (!remove) navigate("/product") }} className="pl-1.5 py-1.5 flex">
        <div
          className={`flex absolute ${isBuying ? "top-14" : "top-3"
            } -left-2 rounded-sm`}
        >
          <TagRibbon
            textClasses={"text-[10px] font-semibold text-black text-center"}
            tagText="USED"
            bgColor={"#FFDC25"}
          />
        </div>

        <div className="w-[47%] border rounded-sm border-black">
          <img
            src={data.img}
            alt=""
            className="w-full aspect-square rounded-sm"
          />
        </div>
        <div className=" flex-1 overflow-hidden">
          <div className="px-1.5">
            <div className="flex items-center mt-2">
              <LocationOnOutlined
                className="text-sa-icon-green"
                fontSize="10"
              />
              <h1 className="text-[13px] font-medium text-sa-text-gray">
                {data.location}
              </h1>
            </div>
            <h1 className="text-md font-semibold text-black">
              {`${data.title} (${data.year})`}
            </h1>
          </div>
          <div className="ml-1.5  w-full border-l-[1px] border-b-[1px]  border-black border-t-[1px] flex items-center rounded-l mt-2">
            <div className="border-r-[1px] border-black">
              <h1 className="text-[13px] font-bold text-sa-menu-green text-left py-1 pr-2 pl-1">
                {data.price}
              </h1>
            </div>
            <div className="flex items-center justify-center gap-x-1 pl-1">
              <AccessTimeOutlined className="text-black" fontSize={"5"} />
              <h1 className="text-[12px] font-medium text-black">02 D 12 Hr</h1>
            </div>
          </div>
          <div className="flex items-center justify-between p-3">
            <div className="flex w-full items-center gap-2">
              {!remove && <div >
                <h1 className="text-[12px] font-semibold text-sa-light-brown">
                  {data.distance.split(" ")[1]}
                </h1>
                <h1 className="text-sm font-black ">{data.distance.split(" ")[0]}</h1>
              </div>}
              <div>
                <h1 className="text-[12px] font-semibold text-sa-light-brown">
                  OWNERSHIP
                </h1>
                <h1 className="text-sm font-black ">{data.ownership}</h1>
              </div>
              {remove && <div
                onClick={() => {
                  if (remove) remove(data);
                  else toggleToWishlist();
                }}
                className="ml-auto bg-white border-[1px]  border-black buttonHover rounded-md p-2">
                <Favorite className="text-sa-brick-red " />
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardMob;

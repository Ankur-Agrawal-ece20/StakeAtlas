import {
  AccessTimeOutlined,
  Favorite,
  LocationOnOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import TagRibbon from "../TagRibbon";
import { useDispatch } from "react-redux";
import { ACCEPT_OFFER_MODAL } from "../../extras/constants";
import { showModal } from "../../redux/actions/modal";

const ProductCard = ({ isBuying, data, remove }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if(!data) data={
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
  const addToWishlist=()=>{
    // code to add to wishlist
  }
  return (
    <div className="border-[1px] border-black cardHover rounded-md relative mb-5">
      {isBuying && (
        <div className="border-b-[1px] border-black flex items-center">
          <div className="border-r-[1px] border-black w-[50%]">
            <h1 className="text-2xl boldFont text-black text-left py-2 pl-3">
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
            <h1 
            className="text-xl leading-8 underline underline-offset-4 decoration-1 boldFont text-white text-center py-2 pl-3">
              Accepted
            </h1>
          </div>
        </div>
      )}
      <div
        className={`flex absolute ${
          isBuying ? "top-14" : "top-3"
        } -left-2 rounded-sm`}
        onClick={() => {if(!remove) navigate("/product")}}
      >
        {/* <TagRibbon
          textClasses={"text-[14px] font-semibold text-black text-center"}
          tagText="USED"
          bgColor={"#FFDC25"}
        /> */}
        <img src = {require("../../assets/icons/Vector(3).png")} style = {{display: "block", marginTop: "-5px"}}/>
        <h3 className = "font-bold" style = {{marginLeft: "-60px"}}>USED</h3>
      </div>
      <div className="p-3" onClick={() => {if(!remove) navigate("/product")}}>
        <div className="border border-solid border-black rounded-lg">
          <img
            src={data.img}
            alt=""
            className="w-full aspect-square rounded-lg"
          />
        </div>
        <div onClick={() => {if(!remove) navigate("/product")}}>
          <div className="flex items-center gap-x-1 mt-2">
            <LocationOnOutlined className="text-sa-icon-green" fontSize="10" />
            <h1 className="text-sm font-medium text-sa-text-gray">
            {data.location}
            </h1>
          </div>
          <h1 className="text-xl font-medium text-black">
          {`${data.title} (${data.year})`}
          </h1>
        </div>
      </div>
      <div onClick={() => {if(!remove) navigate("/product")}} className="border-b-[1px] border-black border-t-[1px] flex items-center">
        <div className="border-r-[1px] border-black w-[60%]">
          <h1 className="text-2xl boldFont text-sa-dark-green text-left py-2 pl-3">
            {data.price}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-x-1 w-[40%] text-center">
          <AccessTimeOutlined className="text-black" fontSize={"10"} />
          <h1 className="text-[15px] font-medium text-black">{data.time}</h1>
        </div>
      </div>
      <div onClick={() => {if(!remove) navigate("/product")}} className="flex items-center justify-between p-3">
        <div className="flex items-center gap-5">
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">{data.distance.split(" ")[1]}</h1>
            <h1 className="text-xl font-black text-semibold">{data.distance.split(" ")[0]}</h1>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-sa-light-brown">
            OWNERSHIP
            </h1>
            <h1 className="text-xl font-black text-semibold">{data.ownership}</h1>
          </div>
        </div>
        <div 
        onClick={()=>{
          if(remove) remove(data);
          else addToWishlist();
        }}
        className="bg-white border-[1px]  border-black buttonHover rounded-md p-2">
          <Favorite className="text-sa-brick-red " />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

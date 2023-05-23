import { Cancel, Star } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { hideModal } from "../../redux/actions/modal";
import { useNavigate } from "react-router";


const AcceptedOfferModal = (props) => {
  console.log(props.props);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const addtocart=()=>{
    // api to save to cart
    navigate("/cart");
  }

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
                <h1 className="text-[40px] font-semibold text-sa-success-green text-center">
                  Offer Accepted!
                </h1>
                <div className="flex items-center justify-between my-4">
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      From
                    </h1>
                    <h1 className="text-xl font-semibold text-black">
                      {props.props.seller}
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      Rating
                    </h1>
                    <div className=" flex items-center gap-x-0.5">
                      <h1 className=" text-xl font-bold">4.5</h1>
                      <Star className=" text-yellow-100 text-xs" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold text-sa-light-brown">
                      Offer Amount
                    </h1>
                    <h1 className="text-xl font-semibold text-black">
                    {props.props.acceptprice}/-
                    </h1>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm w-[80%] mx-auto py-2 font-semibold text-center">
                    Pay now to get the item shipped at your doorstep. ther e rerbberererere
                  </h3>
                  <div className="grid grid-cols-[48%_48%] place-items-center gap-[4%]">
                      <button
                        onClick={() => {dispatch(hideModal());navigate("/cart",{state:{data:props.props}}); }}
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Pay Now
                      </button>
                      <button
                        onClick={() => {dispatch(hideModal());addtocart();}}
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] text-black border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Add to Cart
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
                  <h1 className="text-[28px] font-semibold text-sa-success-green text-center">
                    Offer Accepted!
                  </h1>
                  <div className="my-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h1 className="text-sm font-semibold text-sa-light-brown">
                          From
                        </h1>
                        <h1 className="text-base font-semibold text-black">
                          {props.props.seller}
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
                      {props.props.acceptprice}/-
                      </h1>
                    </div>
                  </div>
                  <div>
                    <h1 className="text-sm w-[80%] mx-auto font-semibold">
                      Pay now to get the item shipped at your doorstep. ther e rerbberererere
                    </h1>
                    <div className="grid grid-cols-[48%_48%] place-items-center gap-[4%]">
                      <button
                        onClick={() => { navigate("/cart",{state:{data:props.props}}); }}
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] bg-sa-primary-yellow text-black border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Pay Now
                      </button>
                      <button
                        onClick={() => { addtocart();}}
                        className="w-full text-[18px] mt-4 py-2 px-5 rounded-[4px] text-black border-[1px] border-black font-medium flex items-center justify-center"
                      >
                        Add to Cart
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

export default AcceptedOfferModal;

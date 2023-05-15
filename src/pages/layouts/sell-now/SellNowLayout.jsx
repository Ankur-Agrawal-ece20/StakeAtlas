import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";

function SellNowLayout({ children }) {
  const SELLER_REQUEST = {
    NOT_CREATED: "Not created",
    CREATED: "created",
  };
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  const navigate = useNavigate();
  useEffect(() => {
    const { seller_request } = user;
    if (seller_request === SELLER_REQUEST.NOT_CREATED) {
      navigate("/seller/registration/idProof");
    } else if (seller_request === SELLER_REQUEST.CREATED) {
      navigate("/seller/registered");
    }
  }, [user]);

  const BreadCrumbHeadings = [
    {
      label: "Product Details",
      path: "/sellnow/product/details",
    },
    {
      label: "Item Specifics",
      path: "/sellnow/product/specifications/car",
    },
    {
      label: "Location",
      path: "/sellnow/locationdetails",
    },
  ];

  return (
    <div>
      <h1 className="text-[35px] font-semibold text-center mt-20">
        Sell your Product Now
      </h1>
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center gap-9 mt-7">
          {BreadCrumbHeadings.map((h, i) => (
            <div className="flex gap-2 items-start" key={i}>
              <h1 className="text-[18px]  px-3 py-1 h-9 w-9  bg-[#D9D9D9] font-semibold  rounded-full">
                {i + 1}
              </h1>
              <div>
                <button className="text-[19px]  font-semibold">
                  {h.label}
                </button>
                {location.pathname.includes(h.path) && (
                  <div className="h-1 w-full bg-black mt-1"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default SellNowLayout;

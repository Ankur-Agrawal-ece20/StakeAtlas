import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Logo from "../../../assets/Logo.png";
import axiosInstance from "../../../axiosInstance";
import { RAZORPAY_API_KEY } from "../../../utils/envs";
import loadScript from "../../../utils/loadScript";

function useCreateOrder() {
  const [isLoading, setIsLoading] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  async function displayRazorpay(postData) {
    if (isLoading) return;
    setIsLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      setIsLoading(false);
      return;
    }

    // creating a new order
    const result = await axiosInstance.post(`/order/create`, postData);

    if (!result) {
      alert("Server error. Are you online?");
      setIsLoading(false);

      return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data.data;
    const options = {
      key: RAZORPAY_API_KEY,
      amount: amount.toString(),
      currency: currency,
      name: "StakeAtlas",
      description: ` Pay Rs.${amount / 100} to purchase.`,
      image: Logo,
      order_id: order_id,
      // customer_id: auth.user._id,
      remember_customer: true,
      handler: async function (response) {
        const data = {
          razorpayOrderId: response.razorpay_order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axiosInstance.post(`/order/verify`, data);

        if (result.data.success) {
          setIsLoading(false);
          toast.success(result.data.message);
          navigate("/");
        }
        setIsLoading(false);
      },
      prefill: {
        name: auth.user.name,
        email: auth.user.email,
        contact: auth.user.phone,
      },
      modal: {
        ondismiss: () => setIsLoading(false),
      },
      theme: {
        color: "#091F2A",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    paymentObject.on("payment.failed", function (response) {
      console.log("failed");
      setIsLoading(false);
    });
  }

  return { isLoading, displayRazorpay };
}

export default useCreateOrder;

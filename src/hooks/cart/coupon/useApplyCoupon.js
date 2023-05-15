import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../../axiosInstance";
import QUERY_KEYS from "../../../utils/queryKeys";

function useApplyCoupon() {
  const queryClient = useQueryClient();
  const handleMutation = (postData) => {
    return axiosInstance.post(`/cart/coupon/apply`, postData);
  };

  return useMutation(handleMutation, {
    onSuccess(res, variables, context) {
      queryClient.invalidateQueries(QUERY_KEYS.getCart);
      toast.success(res?.data?.message);
    },
    onError(err, variables, context) {
      try {
        const message = err.response.data.error;
        toast.error(message);
      } catch (error) {
        toast.error("Something went wrong");
      }
    },
  });
}

export default useApplyCoupon;

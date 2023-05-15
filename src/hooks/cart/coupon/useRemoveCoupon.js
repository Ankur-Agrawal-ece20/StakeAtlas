import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../../axiosInstance";
import QUERY_KEYS from "../../../utils/queryKeys";

function useRemoveCoupon() {
  const queryClient = useQueryClient();
  const handleMutation = (postData) => {
    return axiosInstance.post(`/cart/coupon/remove`, postData);
  };

  return useMutation(handleMutation, {
    onSuccess(res, variables, context) {
      queryClient.invalidateQueries(QUERY_KEYS.getCart);
      toast.success(res?.data?.message);
    },
    onError(data, variables, context) {
      console.log(data);
    },
  });
}

export default useRemoveCoupon;

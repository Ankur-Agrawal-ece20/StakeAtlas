import { useMutation, useQuery, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useRemoveProductFromCart(params) {
  const queryClient = useQueryClient()
  const handleMutation = (productId) => {
    return axiosInstance.post(`/cart/product/remove/${productId}`);
  };

  return useMutation(handleMutation, {
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(QUERY_KEYS.getCart)
      console.log(data);
      toast.success("Product Remove Successfully");
    },
    onError(data, variables, context) {
      console.log(data);
    },
  });
}

export default useRemoveProductFromCart;

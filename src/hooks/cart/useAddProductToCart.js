import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useAddProductToCart() {
  const queryClient = useQueryClient();
  const handleMutation = (productId) => {
    return axiosInstance.post(`/product/cart/add/${productId}`);
  };

  return useMutation(handleMutation, {
    onSuccess(data, variables, context) {
      queryClient.invalidateQueries(QUERY_KEYS.getCart);
      const { message } = data.data;
      toast.success(message);
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

export default useAddProductToCart;

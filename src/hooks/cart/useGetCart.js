import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useGetCart(params) {
  const getCart = async ({ queryKey }) => {
    const [_key, params] = queryKey;
    const res = await axiosInstance.get("/cart/my", {
      params,
    });
    return res.data.cart;
  };
  return useQuery([QUERY_KEYS.getCart, params], getCart);
}

export default useGetCart;

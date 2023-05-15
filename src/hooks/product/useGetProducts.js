import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useGetProducts(params) {
  const getProducts = async ({ queryKey }) => {
    const [_key, params] = queryKey;
    const res = await axiosInstance.get("/product/all", {
      params,
    });
    return res.data.data;
  };
  return useQuery([QUERY_KEYS.getProducts, params], getProducts, {
    onSuccess: (data) => {},
    onError: (err) => {
      console.log(err);
    },
  });
}

export default useGetProducts;

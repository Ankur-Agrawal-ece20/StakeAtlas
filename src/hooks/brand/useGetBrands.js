import { useQuery } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useGetBrands(params) {
  const getBrands = async ({ queryKey }) => {
    const [_key, params] = queryKey;
    const res = await axiosInstance.get("/auth/brand/all", {
      params,
    });
    return res.data.data;
  };
  return useQuery([QUERY_KEYS.getBrand, params], getBrands, {
    onSuccess: (data) => {
      if (data.length === 0) toast.info("No brand found in selected category");
    },
  });
}

export default useGetBrands;

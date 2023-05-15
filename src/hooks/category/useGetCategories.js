import { useQuery } from "react-query";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useGetCategories(params) {
  const getCategories = async ({ queryKey }) => {
    const [_key, params] = queryKey;
    const res = await axiosInstance.get("/auth/category/all", {
      params,
    });
    return res.data.data;
  };
  return useQuery([QUERY_KEYS.getCategories, params], getCategories);
}

export default useGetCategories;

import { useQuery } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import QUERY_KEYS from "../../utils/queryKeys";

function useGetModels(params, disabled) {
  const getModels = async ({ queryKey }) => {
    const [_key, params] = queryKey;
    const res = await axiosInstance.get("/auth/model/all", {
      params,
    });
    return res.data.data;
  };
  return useQuery([QUERY_KEYS.getModel, params], getModels, {
    onSuccess: (data) => {
      if (data.length === 0) toast.info("No Model found in selected Brand");
    },
    onError: (err) => {
      console.log(err);
    },
    enabled: !disabled,
  });
}

export default useGetModels;

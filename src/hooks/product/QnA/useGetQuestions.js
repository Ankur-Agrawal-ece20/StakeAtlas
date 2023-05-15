import { useQuery } from "react-query";
import axiosInstance from "../../../axiosInstance";
import QUERY_KEYS from "../../../utils/queryKeys";

function useGetQuestions(productId, params) {
  const getQuestions = async ({ queryKey }) => {
    const [_key, productId, params] = queryKey;
    const res = await axiosInstance.get(`/qna/get/${productId}`, {
      params,
    });
    return res.data.data;
  };
  return useQuery([QUERY_KEYS.getQuestions, productId, params], getQuestions, {
    onSuccess: (data) => {},
    onError: (err) => {
      console.log(err);
    },
  });
}

export default useGetQuestions;

import { useMutation } from "react-query";
import axiosInstance from "../../../axiosInstance";

function useSellerRequest() {
  return useMutation((postData) =>
    axiosInstance.post(`/auth/sellerRequest`, postData)
  );
}

export default useSellerRequest;

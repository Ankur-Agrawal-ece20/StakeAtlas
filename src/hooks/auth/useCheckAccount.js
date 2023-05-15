import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";

function useCheckAccount() {
  return useMutation((username) =>
    axiosInstance.post(`/auth/checkAccount/`, username)
  );
}

export default useCheckAccount;

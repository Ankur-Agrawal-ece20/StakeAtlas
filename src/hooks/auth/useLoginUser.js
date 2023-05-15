import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import axiosInstance from "../../axiosInstance";
import { completeLogin } from "../../redux/actions/auth";

function useLoginUser() {
  const dispatch = useDispatch();
  const handleMutation = (loginData) => {
    return axiosInstance.post(`/auth/login`, loginData);
  };

  return useMutation(handleMutation, {
    onSuccess(data, variables, context) {
      dispatch(completeLogin(data.data.token));
    },
    onError(data, variables, context) {
      console.log(data);
    },
  });
}

export default useLoginUser;

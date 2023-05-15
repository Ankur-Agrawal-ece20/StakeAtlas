import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import { getCurrentUser } from "../../redux/actions/auth";

function useRemoveAddress() {
  const dispatch = useDispatch();
  return useMutation(
    (addressId) => axiosInstance.post(`/auth/removeAddress/${addressId}`),
    {
      onSuccess: () => {
        toast.success("Address Removed");
        dispatch(getCurrentUser());
      },
      onError: (err) => {
        try {
          const message = err.response.data.error;
          toast.error(message);
        } catch (error) {
          toast.error("Something went wrong");
        }
      },
    }
  );
}

export default useRemoveAddress;

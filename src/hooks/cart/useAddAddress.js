import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import { getCurrentUser } from "../../redux/actions/auth";

function useAddAddress() {
    const dispatch = useDispatch();
    return useMutation((postData) =>
        axiosInstance.post(`/auth/addAddress`, postData), {
        onSuccess: () => {
            toast.success("Address Added Successfully");
            dispatch(getCurrentUser());
        },
        onError: () => {
            toast.error("Something went wrong");
        },
    }
    )
}

export default useAddAddress;

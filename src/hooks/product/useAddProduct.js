import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axiosInstance from "../../axiosInstance";
import { clearProductDetails } from "../../redux/actions/product";

function useAddProduct() {
  const dispatch = useDispatch();
  const handleMutation = (postData) => {
    return axiosInstance.post(`product/add`, postData);
  };

  return useMutation(handleMutation, {
    onSuccess(data, variables, context) {
      toast.success("Product added successfully");
      dispatch(clearProductDetails());
    },
    onError(data, variables, context) {
      console.log(data);
    },
  });
}

export default useAddProduct;

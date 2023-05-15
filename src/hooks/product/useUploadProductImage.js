import { useMutation } from "react-query";
import axiosInstance from "../../axiosInstance";

function useUploadProductImage() {
  return useMutation(({ productId, img }) =>
    axiosInstance.post(`/product/image/${productId}`, img)
  );
}

export default useUploadProductImage;

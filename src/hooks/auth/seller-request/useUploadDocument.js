import { useMutation } from "react-query";
import { toast } from "react-toastify";
import axiosInstance from "../../../axiosInstance";

function useUploadDocument() {
  return useMutation(
    ({ idNumber, idType, img }) =>
      axiosInstance.post(`/auth/document/upload/${idNumber}/${idType}`, img),
    {
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

export default useUploadDocument;

import { useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logoutUser } from "../../redux/actions/auth";
import QUERY_KEYS from "../../utils/queryKeys";

function useLogOutUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logOutUser = () => {
    dispatch(logoutUser());
    navigate("/");
    queryClient.invalidateQueries(QUERY_KEYS.getCart);
  };
  return logOutUser;
}

export default useLogOutUser;

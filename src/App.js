
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { connect, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./pages/layouts/DefaultLayout";
import LoadingScreen from "./pages/LoadingScreen";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./redux/actions/auth";
import { getTokens } from "./utils/auth/auth";
import Modal from "./containers/Modal";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});

function App({ modal }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // getTokens() && dispatch(getCurrentUser());
    getTokens();
    setTimeout(() => setLoading(false), 2000);
  }, [dispatch]);
  return (
    <>
      {!loading ? (
        <>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              {/* <Toasts /> */}
              <ToastContainer position="top-right" autoClose={2000} />
              <DefaultLayout />
              {modal?.modalType && <Modal modal={modal} />}
            </BrowserRouter>
          </QueryClientProvider>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(App);

import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";
import SmoothScroll from "../../components/SmoothScroll";
import ApprovalScreen from "../../containers/ApprovalScreen";
import CartScreen from "../../containers/CartScreen";
import CurrentScreen from "../../containers/CurrentScreen";
import DetailsScreen from "../../containers/DetailsScreen";
import DraftsScreen from "../../containers/DraftsScreen";
import ExpiredScreen from "../../containers/ExpiredScreen";
import GeneralScreen from "../../containers/GeneralScreen";
import HomeScreen from "../../containers/HomeScreen";
import LocationScreen from "../../containers/LocationScreen";
import OffersScreen from "../../containers/OffersScreen";

import PendingScreen from "../../containers/PendingScreen";
import PreviewScreen from "../../containers/PreviewScreen";
import ProductScreen from "../../containers/ProductScreen";
import PurchaseHistory from "../../containers/PurchaseHistory";
import RecentlyViewedScreen from "../../containers/RecentlyViewedScreen";

import SellerIndividual from "../../containers/SellerIndividual";
import SellerIndividualAddress from "../../containers/SellerIndividualAddress";
import SellerRegistered from "../../containers/SellerRegistered";
import SellerRegistrationScreen from "../../containers/SellerRegistrationScreen";
import SellerStoreOwner from "../../containers/SellerStoreOwner";
import SellerStoreOwnerAddress from "../../containers/SellerStoreOwnerAddress";
import WatchlistScreen from "../../containers/WatchlistScreen";

import SavedSeller from "../../containers/SavedSeller";
import SellerScreen from "../../containers/SellerScreen";
import classNames from "../../utils/classNames";
import Error404 from "../Error404";
import SignUpFormScreen from "../../containers/SignUpFormScreen";
import SignUpPhoneVerification from "../../containers/SignUpPhoneVerification";
import SignInUsernameScreen from "../../containers/SignInUsernameScreen";
import SignInPasswordScreen from "../../containers/SignInPasswordScreen";
import SignInSuccessScreen from "../../containers/SignInSuccessScreen";
import ForgotPasswordScreen from "../../containers/ForgotPasswordScreen";
import ForgotPasswordVerifyOTPScreen from "../../containers/ForgotPasswordVerifyOTPScreen";
import ChangePasswordScreen from "../../containers/ChangePasswordScreen";
import ChangePasswordSuccessScreen from "../../containers/ChangePasswordSuccessScreen";

const DefaultLayout = () => {
  const location = useLocation();
  const [isNavHidden, setIsNavHidden] = useState(false);

  useEffect(() => {
    const hiddenNavRoutes = ["/login",];
    const result = hiddenNavRoutes.includes(location.pathname);
    setIsNavHidden(result);
  }, [location.pathname]);

  return (
    <div className="layout  flex flex-col justify-between ">
      <div className={classNames("navBar", isNavHidden && " hidden")}>
        <NavBar />
      </div>

      <SmoothScroll>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="sellnow">
            <Route path="drafts" element={<DraftsScreen />} />
            <Route path="current" element={<CurrentScreen />} />
            <Route path="expired" element={<ExpiredScreen />} />
            <Route path="pending" element={<PendingScreen />} />
            <Route path="approval" element={<ApprovalScreen />} />
            <Route path="listing">
              <Route path="general" element={<GeneralScreen />} />
              <Route path="details" element={<DetailsScreen />} />
              <Route path="location" element={<LocationScreen />} />
              <Route path="preview" element={<PreviewScreen />} />
            </Route>
          </Route>
          <Route path="seller">
            <Route path="registration" element={<SellerRegistrationScreen />} />
            <Route path="individual" element={<SellerIndividual />} />
            <Route
              path="individual/address"
              element={<SellerIndividualAddress />}
            />
            <Route path="store" element={<SellerStoreOwner />} />
            <Route path="store/address" element={<SellerStoreOwnerAddress />} />
            <Route path="registered" element={<SellerRegistered />} />
          </Route>
          <Route path="buying">
            <Route path="purchaseHistory" element={<PurchaseHistory />} />
            <Route path="offers" element={<OffersScreen />} />
            <Route path="savedSeller" element={<SavedSeller />} />
          </Route>
          <Route path="/watchlist" element={<WatchlistScreen />} />
          <Route path="/recent" element={<RecentlyViewedScreen />} />
          <Route path="/sellerShop" element={<SellerScreen />} />

          <Route path="signin" >
            <Route path="username" element={<SignInUsernameScreen />} />
            <Route path="password" element={<SignInPasswordScreen />} />
            <Route path="success" element={<SignInSuccessScreen />} />
            <Route path="forgotPassword" element={<ForgotPasswordScreen />} />
            <Route path="forgotPassword/verifyOTP" element={<ForgotPasswordVerifyOTPScreen />} />
            <Route path="forgotPassword/change" element={<ChangePasswordScreen />} />
            <Route path="forgotPassword/change/success" element={<ChangePasswordSuccessScreen />} />
          </Route>
          
          <Route path="signup">
            <Route path="" element={<SignUpFormScreen />} />
            <Route path="verify" element={<SignUpPhoneVerification />} />
          </Route>


          <Route path="/404" element={<Error404 />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />} />
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </SmoothScroll>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;

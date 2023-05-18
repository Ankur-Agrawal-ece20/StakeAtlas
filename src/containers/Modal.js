import { connect } from "react-redux";
import DeliveryLocationModal from "../components/Modals/DeliveryLocationModal";
import AddNewAddressModal from "../components/Modals/AddNewAddressModal";
import EditAddressModal from "../components/Modals/EditAddressModal";

import {
  ADDRESS_MODAL,
  APPROVAL_MODAL,
  CONTACT_SELLER_MODAL,
  CONTACT_SELLER_SUBMIT_MESSAGE_MODAL,
  COUNTER_OFFER_MODAL,
  COUNTER_OFFER_RECEIVED_MODAL,
  ADD_NEW_ADDRESS_MODAL,
  DELIVERY_LOCATION_MODEL,
  EDIT_ADDRESS_MODAL,
  REPORT_MODAL,
  REPORT_SUBMITTED_MODAL,
  REVIEW_MODAL,
  REVIEW_SUBMITTED_MODAL,
  SEND_MESSAGE_MODAL,
} from "../extras/constants";
import useClose from "../hooks/useClose";
import { hideModal } from "../redux/actions/modal";
import ApprovalModal from "../components/Modals/ApprovalModal";
import ContactSellerModal from "../components/Modals/ContactSellerModal";
import ReviewModal from "../components/Modals/ReviewModal";
import ReportModal from "../components/Modals/ReportModal";
import ContactSellerSubmitMessageModal from "../components/Modals/ContactSellerSubmitMessageModal";
import ReviewSubmittedModal from "../components/Modals/ReviewSubmittedModal";
import ReportSubmittedModal from "../components/Modals/ReportSubmittedModal";
import CounterOfferReceivedModal from "../components/Modals/CounterOfferReceivedModal";
import CounterOfferModal from "../components/Modals/CounterOfferModal";
import SendMessageModal from "../components/Modals/SendMessageModal";

const Modal = ({ modal, hideModal }) => {
  const ref = useClose(() => hideModal());

  let Component = null;

  switch (modal.modalType) {
    case ADD_NEW_ADDRESS_MODAL:
      Component = AddNewAddressModal;
      break;
    case ADDRESS_MODAL:
      Component = AddNewAddressModal;
      break;
    case EDIT_ADDRESS_MODAL:
      Component = EditAddressModal;
      break;
    case APPROVAL_MODAL:
      Component = ApprovalModal;
      break;
    case CONTACT_SELLER_MODAL:
      Component = ContactSellerModal;
      break;
    case REVIEW_MODAL:
      Component = ReviewModal;
      break;
    case REPORT_MODAL:
      Component = ReportModal;
      break;
    case CONTACT_SELLER_SUBMIT_MESSAGE_MODAL:
      Component = ContactSellerSubmitMessageModal;
      break;
    case REVIEW_SUBMITTED_MODAL:
      Component = ReviewSubmittedModal;
      break;
    case COUNTER_OFFER_RECEIVED_MODAL:
      Component = CounterOfferReceivedModal;
      break;
    case COUNTER_OFFER_MODAL:
      Component = CounterOfferModal;
      break;
    case SEND_MESSAGE_MODAL:
      Component = SendMessageModal;
      break;
    default:
      Component = null;
  }

  return (
    <div className="backdrop fixed h-full top-0 right-0 bottom-0 left-0 z-50 flex bg-gray-800 bg-opacity-50 justify-center items-center">
      <div className="xl:w-[55%]" ref={ref}>
        {!modal.noHeader && (
          <div>
            <div className="flex flex-row items-center ">
              <h3 className="text-base font-semibold">{modal.modalTitle}</h3>
              <p className="text-xs text-gray-500 ml-3">
                {modal.modalSubTitle}
              </p>
            </div>
            <button
              className="block sm:hidden absolute top-5 right-5"
              onClick={() => hideModal()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
        {Component !== null && (
          <Component props={modal.modalProps} hideModal={hideModal} />
        )}
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
  };
};

export default connect(null, mapDispatchToProps)(Modal);

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

// Packages
import { number, object } from "prop-types";

// material Ui components
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Redux Store
import { useDispatch, useSelector } from "react-redux";
import { decrement, showLoader } from "../../../Store/ReducersAndActions";

// Components
import { ConfirmationModal } from "../ConfirmationModal";
import { Event } from "../../../Services/Event";
import { Loader } from "../../../Library/Loader";

const CartItemCard = ({ cartItems, index }) => {
  const {
    title = "", price = 0, thumbnail = "", id = 0
  } = cartItems;

  const ShowLoader = useSelector((state) => state.cart.isLoader);
  const dispatch = useDispatch();
  const [isConfirmationModalPopup, setIsConfimationModalPopup] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  /**
   * Open Confirmation Modal
   */
  const handleDltConfirmationModal = (Index) => {
    setIsConfimationModalPopup(true);
    setCurrentIndex(Index);
  };

  /**
   * Delete Cart Product on confirmation
   */
  const onConfirmation = () => {
    dispatch(showLoader());
    dispatch(decrement(currentIndex));
    Event("toast", "success", "Product Delete Successfully");
    setTimeout(() => {
      dispatch(showLoader());
    }, 1000);
  };

  /**
   * Close Confirmation modal
   */
  const onCancel = () => {
    setIsConfimationModalPopup(false);
    alert("hello")
  };
  return (
    <>
      <div className="flex justify-between items-center my-4" key={id}>
        <div className="flex items-center">
          <div className="mr-4 w-12 h-12 rounded shadow">
            <img
              className="w-full h-full overflow-hidden object-cover object-center rounded"
              src={thumbnail}
              alt="avatar"
            />
          </div>
          <div>
            <h3 className="mb-2 sm:mb-1 text-gray-800 text-base font-normal leading-4">
              {title}
            </h3>
            <p className="text-gray-600 text-xs leading-3">{price}</p>
          </div>
        </div>
        <div
          className="relative font-normal text-xs sm:text-sm flex items-center text-gray-600 hover:bg-slate-300 p-2 rounded-lg"
          onClick={() => handleDltConfirmationModal(index)}
        >
          <DeleteForeverIcon />
        </div>
        <ConfirmationModal
          isPopup={isConfirmationModalPopup}
          confirmationMsg="Are You Sure? You are about to delete product"
          primaryBtn="Cancel"
          secondaryBtn="Confirm"
          handlePrimaryBtn={onCancel}
          handleSecondaryBtn={onConfirmation}
        />
      </div>
      <Loader isLoader={ShowLoader} />
    </>
  );
};

/**
 * Component props Types
 */
CartItemCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  cartItems: object,
  index: number,
};

/**
 * Component Default Props
 */
CartItemCard.defaultProps = {
  cartItems: {},
  index: 0,
};

export { CartItemCard };

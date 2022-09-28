import React from "react";

// Packages
import {
  bool, func, node, oneOfType, string
} from "prop-types";

// material Ui components
import { Popover } from "@mui/material";

// Components
import { CartProductsListing } from "../../../view/products/CartProductsListing";

const CartPopover = ({ anchorEl, handleClose, isOpenPopup }) => (
  <div>
    <Popover
      open={isOpenPopup}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <div className="w-full bg-white rounded shadow-2xl">
        <div className="relative bg-gray-200 rounded-t py-4 px-4 xl:px-8">
          <svg
            className="hidden md:block absolute -ml-5 -mb-10 left-0 bottom-0"
            width="30px"
            height="30px"
            viewBox="0 0 9 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Page-1"
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Tooltips-"
                transform="translate(-874.000000, -1029.000000)"
                fill="#FFFFFF"
              >
                <g
                  id="Group-3-Copy-16"
                  transform="translate(850.000000, 975.000000)"
                >
                  <g id="Group-2" transform="translate(24.000000, 0.000000)">
                    <polygon
                      id="Triangle"
                      transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                      points="4.5 57.5 12.5 66.5 -3.5 66.5"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <svg
            className="absolute top-0 -mt-5 block md:hidden"
            xmlns="http://www.w3.org/2000/svg"
            width={26}
            height={23}
            viewBox="0 0 26 23"
            fill="none"
          >
            <path
              id="Polygon 2"
              d="M13 0L25.9904 22.5H0.00961876L13 0Z"
              fill="#E5E7EB"
            />
          </svg>
          <p className="text-center">CARTS ITEMS</p>
        </div>
        <div className="w-full h-full px-4 xl:px-8 pt-3 pb-5">
          {/* lisiting here */}

          <CartProductsListing />

          <hr className="my-5 border-t border-gray-200" />
          <label htmlFor="link" className="text-gray-600 text-xs font-normal">
            Apply Discount Coupon
          </label>
          <div className="flex items-stretch mt-2">
            <div className="relative w-full">
              <div className="absolute text-gray-500 flex items-center px-2 border-r h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-link"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
              </div>
              <input
                id="link"
                className="pr-24 text-gray-600 bg-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-12 text-sm border-gray-300 rounded border"
                placeholder="Apply Discount Coupon"
              />
              <button
                type="button"
                className="focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-indigo-600 absolute right-0 top-0 transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none bg-indigo-700 rounded-r text-white px-5 h-10 text-sm"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </Popover>
  </div>
);

/**
 * Component props Types
 */
CartPopover.propTypes = {
  anchorEl: oneOfType([node, string]).isRequired,
  handleClose: func,
  isOpenPopup: bool,
};

/**
 * Component Default Props
 */
CartPopover.defaultProps = {
  handleClose: () => {},
  isOpenPopup: false,
};

export { CartPopover };

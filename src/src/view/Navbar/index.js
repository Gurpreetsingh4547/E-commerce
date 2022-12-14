import React, { useState } from "react";

// Packages
import { array } from "prop-types";

// Material UI
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// Store
import { useSelector } from "react-redux";

// Components
import { SvgLogo } from "../../Library";
import { CartPopover } from "../../Components/Common/popover";

// Services
import { ArrayHaveValue, IsArray } from "../../Services/Helper";

/**
 * Navbar
 * @param {Object} props
 * @returns node
 */
const NavBar = ({ links }) => {
  const cartCount = useSelector((state) => state.cart.value);

  // Display slide menu in menu view
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  const [isCartPopoverOpen, setIsCartPopoverOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState("");

  /**
   * Display menubar on click on hamburg button
   */
  const showMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };

  /**
   * Show the list of cart
   * @param {object} event
   */
  const handleCartPopover = (event) => {
    setIsCartPopoverOpen(!isCartPopoverOpen);
    setAnchorEl(event.currentTarget);
  };
  return (
    <nav id="header" className="w-full z-30 top-0 py-1">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden block">
          <SvgLogo
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            id="logo"
            onClick={showMenu}
            path="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
          />

          <input className="hidden" type="checkbox" id="menu-toggle" />
        </label>
        <div
          className={`${
            isVisibleMenu && "hidden"
          } md:flex md:items-center md:w-auto w-full order-3 md:order-1 `}
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              {/* Mapping links */}
              {IsArray(links)
                && ArrayHaveValue(links)
                && links.map((item) => (
                  <li key={item}>
                    <a
                      className="inline-block no-underline hover:text-black hover:underline py-2 px-4"
                      href="/"
                    >
                      {item}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div>
          <a
            className="flex items-center  tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl "
            href="/"
          >
            <SvgLogo
              className="fill-current text-gray-800 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              path="M5,22h14c1.103,0,2-0.897,2-2V9c0-0.553-0.447-1-1-1h-3V7c0-2.757-2.243-5-5-5S7,4.243,7,7v1H4C3.447,8,3,8.447,3,9v11 C3,21.103,3.897,22,5,22z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v1H9V7z M5,10h2v2h2v-2h6v2h2v-2h2l0.002,10H5V10z"
            />
            E Shop
          </a>
        </div>
        <div className="order-2 md:order-3 flex items-center" id="nav-content">
          <a className="inline-block no-underline hover:text-black" href="/">
            <svg
              className="fill-current hover:text-black"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <circle fill="none" cx={12} cy={7} r={3} />
              <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
            </svg>
          </a>

          <IconButton onClick={handleCartPopover}>
            <Badge badgeContent={cartCount} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </div>
      <CartPopover
        isOpenPopup={isCartPopoverOpen}
        anchorEl={anchorEl}
        handleClose={handleCartPopover}
      />
    </nav>
  );
};

/**
 * Components props types
 */
NavBar.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  links: array,
};

/**
 * Components default props
 */
NavBar.defaultProps = {
  links: [],
};

export { NavBar };

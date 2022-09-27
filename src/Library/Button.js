import React from "react";

// Packages
import {
  func, node, oneOfType, string
} from "prop-types";

/**
 * Common button
 * @param {object} props
 * @returns node
 */
const Button = ({ title, externalClass, handleClick }) => (
  <button
    type="button"
    className={`inline-flex items-center justify-center px-6 py-2 text-sm  font-medium text-white transition duration-150 border border-transparent shadow-sm rounded-2xl bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500 ${externalClass}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

/**
 * Components props types
 */
Button.propTypes = {
  title: oneOfType([string, node]).isRequired,
  externalClass: string,
  handleClick: func
};

/**
 * Components default props
 */
Button.defaultProps = {
  externalClass: "",
  handleClick: () => {}
};

export { Button };

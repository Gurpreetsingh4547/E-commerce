import React from "react";

// Packages
import { string } from "prop-types";

/**
 * Common button
 * @param {object} props
 * @returns node
 */
const Button = ({ title, externalClass }) => (
  <button
    type="button"
    className={`inline-flex items-center justify-center px-6 py-2 text-sm  font-medium text-white transition duration-150 border border-transparent shadow-sm rounded-2xl bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cool-indigo-500 ${externalClass}`}
  >
    {title}
  </button>
);

/**
 * Components props types
 */
Button.propTypes = {
  title: string.isRequired,
  externalClass: string
};

/**
 * Components default props
 */
Button.defaultProps = {
  externalClass: ""
};

export { Button };

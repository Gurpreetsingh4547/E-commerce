import React from "react";

// Packages
import { string } from "prop-types";

/**
 * Common Input label
 * @param {Object} props
 * @returns
 */
const Input = ({
  type, name, id, placeholder
}) => (
  <input
    type={type}
    name={name}
    id={id}
    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder={placeholder}
  />
);

/**
 * Components props types
 */
Input.propTypes = {
  type: string,
  name: string,
  id: string,
  placeholder: string,
};

/**
 * Components Default props
 */
Input.defaultProps = {
  type: "",
  name: "",
  id: "",
  placeholder: "",
};

export { Input };

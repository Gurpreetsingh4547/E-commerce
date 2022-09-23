import React from "react";

// Packages
import { string } from "prop-types";

/**
 * Common Input label
 * @param {Object} props
 * @returns
 */
const Checkbox = ({ label }) => (
  <div className="flex items-start">
    <div className="flex items-center h-5">
      <input
        type="checkbox"
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
      />
    </div>
    <div className="ml-3 text-sm">
      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
        {label}
      </label>
    </div>
  </div>
);

/**
 * Components props types
 */
Checkbox.propTypes = {
  label: string,
};

/**
 * Components Default props
 */
Checkbox.defaultProps = {
  label: "",
};

export { Checkbox };

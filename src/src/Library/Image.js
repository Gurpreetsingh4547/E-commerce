import React from "react";

// Packages
import { string } from "prop-types";

/**
 * Image Common Component
 * @param {object} props
 * @returns node
 */
const Image = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

/**
 * Component props type
 */
Image.propTypes = {
  className: string,
  src: string,
  alt: string,
};

/**
 * component default props
 */
Image.defaultProps = {
  className: "",
  src: "",
  alt: "",
};

export { Image };

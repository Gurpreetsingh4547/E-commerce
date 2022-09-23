import React from "react";

// Packages
import { string, number } from "prop-types";

const SvgLogo = ({
  className, width, height, id, xmlns, viewBox, path
}) => (
  <svg
    className={className}
    xmlns={xmlns}
    width={width}
    height={height}
    viewBox={viewBox}
    id={id}
  >
    <path d={path} />
  </svg>
);

/**
 * Components props types
 */
SvgLogo.propTypes = {
  className: string,
  width: number,
  height: number,
  id: string,
  xmlns: string,
  viewBox: string,
  path: string,
};

/**
 * Components default props
 */
SvgLogo.defaultProps = {
  className: "",
  width: 0,
  height: 0,
  id: "",
  xmlns: "",
  viewBox: "",
  path: "",
};

export { SvgLogo };

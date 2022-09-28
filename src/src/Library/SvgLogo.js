import React from "react";

// Packages
import { string, number, func } from "prop-types";

const SvgLogo = ({
  className, width, height, id, xmlns, viewBox, path, onClick
}) => (
  <svg
    className={className}
    xmlns={xmlns}
    width={width}
    height={height}
    viewBox={viewBox}
    id={id}
    onClick={onClick}
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
  onClick: func
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
  onClick: () => {}
};

export { SvgLogo };

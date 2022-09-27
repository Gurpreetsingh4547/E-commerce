import React from "react";

// Packages
import { bool } from "prop-types";
import Loading from "react-fullscreen-loading";

const Loader = ({ isLoader }) => (
  <Loading
    loading={isLoader}
    background="rgba(0,0,0,.4)"
    loaderColor="#3498db"
  />
);

Loader.propTypes = {
  isLoader: bool.isRequired,
};

export { Loader };

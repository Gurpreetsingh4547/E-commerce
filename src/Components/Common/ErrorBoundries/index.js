import React, { Component } from "react";

// Packages
import { node } from "prop-types";

// Component
import { PageNotFound } from "../404Page/404Page";

// Services
import { IsTrue } from "../../../Services/Helper";

class ErrorBoundries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (IsTrue(hasError)) {
      return <PageNotFound />;
    }
    return children;
  }
}

ErrorBoundries.propTypes = {
  children: node.isRequired,
};

export { ErrorBoundries };

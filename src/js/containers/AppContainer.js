import React from "react";
import PropTypes from "prop-types";

const AppContainer = ({ children }) => (
  <div data-testid="app-container">{children}</div>
);

AppContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppContainer;

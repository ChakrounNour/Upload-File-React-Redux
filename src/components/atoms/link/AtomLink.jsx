import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AtomLink({ to, className, children, ...props }) {
  return (
    <Link rel="preload" to={to} className={className} {...props}>
      {children}
    </Link>
  );
}

AtomLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AtomLink;

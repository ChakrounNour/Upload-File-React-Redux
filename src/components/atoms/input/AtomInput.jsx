import React from "react";
import PropTypes from "prop-types";

function AtomInput({ type, id, accept, onChange, className, ...props }) {
  return (
    <input
      type={type}
      accept={accept}
      id={id}
      onChange={onChange}
      className={className}
      {...props}
    />
  );
}

AtomInput.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  accept: PropTypes.string,
  onChange: PropTypes.func,
};

export default AtomInput;

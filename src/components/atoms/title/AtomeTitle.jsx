import React from "react";
import PropTypes from "prop-types";

function AtomeTitle({ level, className, children, ...props }) {
  const TitleComponent = `h${level}`;

  return (
    <TitleComponent className={className} {...props}>
      {children}
    </TitleComponent>
  );
}

AtomeTitle.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AtomeTitle;

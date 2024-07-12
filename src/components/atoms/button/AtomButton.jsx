import React from "react";
import PropTypes from "prop-types";

function AtomButton({
  id,
  className,
  children,
  icon,
  ariaLabel,
  onClick,
  variant,
  ...props
}) {
  const baseClasses =
    "relative cursor-pointer select-none text-center rounded-full";
  let variantClasses = "";

  switch (variant) {
    case "primary":
      variantClasses =
        "w-full px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow-xl";
      break;
    case "blue-outline-border":
      variantClasses =
        "border-2 ring-1 border-dashed border-blue500 bg-blue500 text-white ring-offset-4 ring-inset ring-blue500";
      break;
    case "blueWithoutBorder":
      variantClasses = "text-blue500 underline";
      break;
    default:
      break;
  }

  return (
    <button
      id={id}
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      {...props}
      aria-label={ariaLabel}
    >
      {icon}
      {children}
    </button>
  );
}

AtomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    "primary",
    "blue-outline-border",
    "blueWithoutBorder",
  ]),
  icon: PropTypes.element,
  id: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default AtomButton;

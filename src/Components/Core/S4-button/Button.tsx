import React from "react";

const Button = (props: any) => {
  const {
    title = "",
    variant = "primary",
    size = "md",
    className,
    image,
  } = props || {};

  return (
    <button
      {...props}
      type="button"
      className={`btn ${size} btn-${variant} sp-button ${className} `}
    >
      {image}
      {title}
    </button>
  );
};
export default Button;

import React from "react";

const Image = ({ url, alt }) => (
  <img
    draggable={false}
    style={{
      width: "1%",
      height: "1%",
      position: "relative",
    }}
    src={url}
    alt={alt}
  />
);

export default Image;

// components/FallbackImage.js
"use client";
import React, { useState, useEffect } from "react";

const FallbackImages = ({ src, alt, title, className = "img-fluid" }) => {
  const [imageSrc, setImageSrc] = useState(src || ""); // Default to empty string if src is undefined
  const fallbackSrc = "/assets/no-image/no-found.png";

  useEffect(() => {
    setImageSrc(src || fallbackSrc); // Update imageSrc if src changes
  }, [src]);

  return (
    <img
      className={`${className} rounded-2`} // Apply combined className
      src={imageSrc}
      title={title}
      alt={alt}
      onError={() => {
        setImageSrc(fallbackSrc);
      }}
      style={{ objectFit: "cover" }} // Apply styles
    />
  );
};

export default FallbackImages;

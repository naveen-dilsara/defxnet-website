import React, { useState, useRef } from 'react';

interface ImageMagnifierProps {
  src: string;
  alt: string;
  width?: string;
  className?: string;
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}

export function ImageMagnifier({
  src,
  alt,
  width = "100%",
  className = "",
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 2.5
}: ImageMagnifierProps) {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        height: "fit-content"
      }}
    >
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ width }}
        onMouseEnter={(e) => {
          // Update image size and turn on magnifier
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          // Update cursor position
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();

          // Calculate cursor position on the image
          const x = e.pageX - left - window.scrollX;
          const y = e.pageY - top - window.scrollY;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          setShowMagnifier(false);
        }}
      />

      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          // Prevent magnifier blocks the mouse event of img
          pointerEvents: "none",
          // Set size of magnifier
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          // Move element center to cursor
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          border: "1px solid lightgray",
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          //calculate zoomed image size
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          //calculate position of zoomed image.
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          borderRadius: "50%",
          boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
          zIndex: 99
        }}
      ></div>
    </div>
  );
} 
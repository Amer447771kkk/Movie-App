import React from "react";

function LoaderOverlay({ visible }) {
  if (!visible) return null;

  return (
    <div className="loading-overlay">
      <span className="loader" />
    </div>
  );
}

export default LoaderOverlay;

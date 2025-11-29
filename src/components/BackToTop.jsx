import React from "react";

function BackToTop({ visible }) {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      onClick={handleClick}
    >
      <i className="fa-solid fa-arrow-up-long"></i>
    </button>
  );
}

export default BackToTop;

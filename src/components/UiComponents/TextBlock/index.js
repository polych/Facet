import React from "react";
import "./index.scss";

const TextBlock = ({ text, title, cols }) => {
  const textClass = cols === 6 ? "text_6" : "text_12";
  return (
    <div className={`text_block ${textClass}`}>
      {title && (
        <h4>
          <pre>{title}</pre>
        </h4>
      )}
      <pre>{text}</pre>
    </div>
  );
};

export default TextBlock;

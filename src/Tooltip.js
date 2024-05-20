import React, { useState } from "react";
import "./Tooltip.css";
const Tooltip = (props) => {
  // created show variable and setShow func using useStste hook and assigned it initial value of false
  const [show, setShow] = useState(false);
  // destructure title and direction from props which we pass to Tooltip component
  const { title, direction } = props;

  // show the tooltip by calling function showTooltip and within the function
  // assigned setShow function value of true
  const showTooltip = () => {
    setShow(true);
  };

  // hide the tooltip by calling function hideTooltip and within the function
  // assigned setShow function value of false
  const hideTooltip = () => {
    setShow(false);
  };
  return (
    <div
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      className="tooltip-wrapper"
    >
      {/* created a button with text Hover Over Me */}
      <button className="btn">Hover Over Me</button>
      {/* when show is true then show the tooltip on either 
      top, right, bottom or left position. used and operator with show variable */}
      {show && (
        <>
          <div className={`tool-tip ${direction}`}>
            {title}
            <div className={`tool-tip-arrow ${direction}`}></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Tooltip;

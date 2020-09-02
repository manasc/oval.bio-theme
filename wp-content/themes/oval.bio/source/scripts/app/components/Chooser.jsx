import React from "react";

function Chooser({ action, children, chosenValue, inputName }) {
  if (children != null && children.length > 0) {
    return React.Children.map(children, (child) => {
      return (
        <label
          onClick={(e) => {
            action(e, child.props.value);
          }}
          className={chosenValue == child.props.value ? "active" : null}
        >
          <input
            type="radio"
            name={inputName}
            value={child.props.value}
            id=""
          />
          {child}
        </label>
      );
    });
  } else {
    return "No children specified";
  }
}

export default Chooser;

import React from 'react';

function FillingBox(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon="filling-box"
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      fill="currentColor"
      stroke="currentColor"
      {...props}
    >
      <path fill="none" strokeWidth="4" d="M25 25H75V75H25z">
        <animateTransform
          id="strokeBox"
          attributeName="transform"
          attributeType="XML"
          begin="rectBox.end"
          dur="0.5s"
          from="0 50 50"
          to="180 50 50"
          type="rotate"
        ></animateTransform>
      </path>
      <rect width="50" height="50" y="25" x="25">
        <animate
          id="rectBox"
          fill="freeze"
          attributeName="height"
          attributeType="XML"
          begin="0s;strokeBox.end"
          dur="1.3s"
          from="50"
          to="0"
        ></animate>
      </rect>
    </svg>
  );
}

export default FillingBox;

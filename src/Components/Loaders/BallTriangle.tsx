import React from 'react';
import { ILoaders } from './Loaders';

const BallTriangle = (props: ILoaders): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon="ball-triangle"
      width="1em"
      height="1em"
      stroke="currentColor"
      viewBox="0 0 65 65"
      {...props}
    >
      <g fill="none" fillRule="evenodd" strokeWidth="5" transform="translate(1 1)">
        <circle cx="7" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;7;50;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="7;27;49;7"
          ></animate>
        </circle>
        <circle cx="27" cy="7" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="7"
            repeatCount="indefinite"
            to="7"
            values="7;50;50;7"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="27"
            repeatCount="indefinite"
            to="27"
            values="27;49;7;27"
          ></animate>
        </circle>
        <circle cx="49" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;50;7;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="49"
            repeatCount="indefinite"
            to="49"
            values="49;7;27;49"
          ></animate>
        </circle>
      </g>
    </svg>
  );
};

export default BallTriangle;

import React from 'react';
import { ILoaders } from './Loaders';

const ThreeDots = (props: ILoaders): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon="three-dots"
      width="1em"
      height="1em"
      fill="currentColor"
      viewBox="0 0 140 30"
      {...props}
    >
      <circle cx="30" cy="15" r="20">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="20"
          repeatCount="indefinite"
          to="20"
          values="20;10;20"
        ></animate>
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        ></animate>
      </circle>
      <circle cx="70" cy="15" r="10" fillOpacity="0.3">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="10"
          repeatCount="indefinite"
          to="10"
          values="10;20;10"
        ></animate>
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="0.5"
          repeatCount="indefinite"
          to="0.5"
          values=".5;1;.5"
        ></animate>
      </circle>
      <circle cx="110" cy="15" r="20">
        <animate
          attributeName="r"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="20"
          repeatCount="indefinite"
          to="20"
          values="20;10;20"
        ></animate>
        <animate
          attributeName="fill-opacity"
          begin="0s"
          calcMode="linear"
          dur="0.8s"
          from="1"
          repeatCount="indefinite"
          to="1"
          values="1;.5;1"
        ></animate>
      </circle>
    </svg>
  );
};

export default ThreeDots;

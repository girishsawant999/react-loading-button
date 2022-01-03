import React from 'react';
import { ILoaders } from './Loaders';

const CircularStripes = (props: ILoaders): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-icon="circular-stripes"
      width="1em"
      height="1em"
      viewBox="0 0 64 64"
      stroke="currentColor"
      {...props}
    >
      <g strokeLinecap="round" strokeWidth="4">
        <path d="M0 12L0 20" transform="rotate(180 16 16)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(-150 20.287 11.713)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(-120 25.238 6.762)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(-90 32 0)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(-60 43.713 -11.713)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(-30 75.713 -43.713)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="translate(32 32)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(30 -43.713 75.713)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(60 -11.713 43.713)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(90 0 32)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(120 6.762 25.238)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"
          ></animate>
        </path>
        <path d="M0 12L0 20" transform="rotate(150 11.713 20.287)">
          <animate
            attributeName="stroke-opacity"
            dur="750ms"
            repeatCount="indefinite"
            values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"
          ></animate>
        </path>
      </g>
    </svg>
  );
};

export default CircularStripes;

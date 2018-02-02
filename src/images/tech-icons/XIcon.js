import React, { Component } from 'react';

export const XIcon = props => {
  const { height, width, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      height={height}
      width={width}
      color={color}
    >
      <g>
        <title>X</title>
        <g
          transform="rotate(45 24.99999999999999,25.000001907348636) "
          id="svg_4"
        >
          <rect
            rx="1"
            id="svg_1"
            height="10.869565"
            width="40.338164"
            y="19.565219"
            x="4.830917"
            stroke={color || '#000000'}
            fill={color || '#000000'}
          />
          <rect
            transform="rotate(90 25,25.000001907348636) "
            rx="1"
            id="svg_3"
            height="10.869565"
            width="40.338164"
            y="19.565219"
            x="4.830917"
            stroke={color || '#000000'}
            fill={color || '#000000'}
          />
        </g>
      </g>
    </svg>
  );
};

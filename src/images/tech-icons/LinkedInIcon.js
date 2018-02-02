import React, { Component } from 'react';

export const LinkedInIcon = props => {
  const { height, width, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={height}
      width={width}
    >
      <g id="surface1">
        {/*<polygon fill="white" points="0,0 0,24 24,24 24,0" />*/}
        <path
          style={{ fill: color || '#0288D1' }}
          d="M 20 2 L 4 2 C 2.898438 2 2 2.898438 2 4 L 2 20 C 2 21.101563 2.898438 22 4 22 L 20 22 C 21.101563 22 22 21.101563 22 20 L 22 4 C 22 2.898438 21.101563 2 20 2 Z M 8.101563 18 L 5 18 L 5 9.398438 L 8.101563 9.398438 Z M 6.5 8.398438 C 5.601563 8.398438 5 7.800781 5 7 C 5 6.199219 5.601563 5.601563 6.601563 5.601563 C 7.5 5.601563 8.101563 6.199219 8.101563 7 C 8.101563 7.800781 7.5 8.398438 6.5 8.398438 Z M 19 18 L 15.898438 18 L 15.898438 13.300781 C 15.898438 12 15.101563 11.699219 14.800781 11.699219 C 14.5 11.699219 13.5 11.898438 13.5 13.300781 C 13.5 13.5 13.5 18 13.5 18 L 10.398438 18 L 10.398438 9.398438 L 13.5 9.398438 L 13.5 10.601563 C 13.898438 9.898438 14.699219 9.398438 16.199219 9.398438 C 17.699219 9.398438 18.898438 10.601563 18.898438 13.300781 L 18.898438 18 Z "
        />
      </g>
    </svg>
  );
};

import React, { Component } from 'react';

export const AppStoreIcon = props => {
  const { height, width, color } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="2 2 26 26"
      height={height}
      width={width}
    >
      {/*<polygon fill="white" points="0,0 0,30 30,30 30,0" />*/}
      <path
        style={{ fill: color }}
        d="M15,27c6.627,0,12-5.373,12-12S21.627,3,15,3C8.373,3,3,8.373,3,15S8.373,27,15,27z M9.848,20.53 C9.658,20.833,9.333,21,8.999,21c-0.181,0-0.364-0.049-0.529-0.152c-0.469-0.293-0.611-0.91-0.318-1.378l0.27-0.432 C8.595,19.016,8.782,19,9,19c0.604,0,1.105,0.191,1.526,0.445L9.848,20.53z M9,18c-0.552,0-1-0.448-1-1s0.448-1,1-1h1.321l3.5-5.6 l-1.169-1.87c-0.292-0.468-0.15-1.085,0.318-1.378c0.468-0.292,1.085-0.149,1.378,0.318L15,8.513l0.652-1.043 c0.293-0.469,0.91-0.612,1.378-0.318c0.469,0.293,0.611,0.91,0.318,1.378L12.679,16h3.187c0.255,0.183,0.537,0.467,0.835,0.941 C16.922,17.292,17.03,17.65,17.09,18H9z M21.848,19.47c0.292,0.468,0.15,1.085-0.318,1.378C21.365,20.951,21.182,21,21.001,21 c-0.333,0-0.659-0.167-0.849-0.47l-4.52-7.232c0.08-0.199,0.183-0.413,0.336-0.657c0.277-0.441,0.632-0.748,1.007-0.968L19.679,16 H21c0.552,0,1,0.448,1,1s-0.448,1-1,1h-0.071L21.848,19.47z"
      />
    </svg>
  );
};
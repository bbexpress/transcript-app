// SnowEffect.js
import React from 'react';
import './snowEffect.css';

const SnowEffect = () => {
  return (
    <div className="snowflakes" aria-hidden="true">
      <div className="snowflake"></div>
      <div className="snowflake"></div>
      <div className="snowflake"></div>
      {/* Add more snowflakes as needed */}
    </div>
  );
};

export default SnowEffect;

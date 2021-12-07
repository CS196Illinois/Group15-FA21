import React from "react";
import Chart from 'chart.js/auto';


const ButtonMailto = ({ mailto, label }) => {
  return (
    <a
      href="mailto:iniyam@gmail.com" 
    >
      {label}
    </a>
  );
};

export default ButtonMailto;

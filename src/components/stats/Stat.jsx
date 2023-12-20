import React from 'react';
import './stat.css';

const Stat = ({ style, fontSize, cardTitle, cardText }) => {
  return (
    <div className="stats-card" style={{ "--color": `${style}` }} id="stats-card">
      <h3 className="card-title">
        {cardTitle}
      </h3>
      <p className="card-text">
        <span style={{ fontSize: `${fontSize}px` }}>{cardText}</span>
      </p>
    </div>
  );
};

export default Stat;

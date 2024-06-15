import React, { useState } from "react";
import "./sentimentMeter.css";
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
const SentimentMeter = () => {
  const data = {
    datasets: [
      {
        data: [70, 30], // 70% positive, 30% remaining (for a complete circle)
      },
    ],
  };

  const options = {
    rotation: 270,
    circumference: 180,
    plugins: {
      tooltip: { enabled: false },
    },
  };


  return (
    <>
      <div className="container">
        <div className="sentiment-meter">
          <h1>Sentiment Meter</h1>
          <h4>Overall Rating</h4>
        </div>
        <div className="sentiment-chart-container">
      <div className="chart">
        <Doughnut data={data} options={options} />
        <div className="chart-text">
          <div className="emoji">😊</div>
          <div>Positive</div>
          <div className="percentage">70%</div>
        </div>
      </div>
      <div className="sentiment-details">
        <div className="sentiment-item">
          <div className="emoji">😞</div>
          <div className="percentage">30%</div>
          <div>Negative</div>
        </div>
      </div>
    </div>
      </div>
    </>
  );
};

export default SentimentMeter;

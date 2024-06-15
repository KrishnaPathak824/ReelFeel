import React from "react";
import "./emotionAnalysis.css";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useState } from "react";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const EmotionAnalysiss = () => {

  const [emotionData] = useState({
    Anger: 80,
    Disgust: 15,
    Fear: 30,
    Joy: 25,
    Surprise: 10,
  });


  const data = {
    labels: ['Anger', 'Disgust','Fear','Joy' ,'Suprise'],
    datasets: [
      {
        label: 'Emotions',
        data: [emotionData.Anger, emotionData.Disgust, emotionData.Fear, emotionData.Joy, emotionData.Surprise],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
       display:false,

      },
      title: {
        display: true,
        text: 'Emotion Analysis',
        font: {
          size: 20,
          weight: 'bold',  // Make the title bold
        },
        color: '#000',  // Set color to black
      },
      
    },
      scales: {
        x: {
          grid: {
            display: false, // Disable grid lines on the x-axis
          },
          ticks: {
            font: {
              
              size: 12,
                // Make x-axis labels bold
            },
            color: '#000',  // Set color to black
          },
        },
        y: {
          grid: {
            display: false, // Disable grid lines on the y-axis
          },
          ticks: {
            font: {
              size: 12,
                // Make y-axis labels bold
            },
            color: '#000',  // Set color to black
          },
        },
      },
  };

  return (
    <>
      <div className="middle-card">
        <div classname="upper">
            <h1 className="title">ReelFeel Sentiment Analysis</h1>
            <p className="description">A movie review sentiment analysis application</p>
        </div>
       
        <Bar data={data} options={options} />;
          
        </div>
        
    </>
  );
};

export default EmotionAnalysiss;

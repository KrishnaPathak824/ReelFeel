import React from "react";
import "./wordCloudAnalysis.css";
import WordCloudComponent from "./WordCloudComponent";
const wordCloudAnalysis = () => {
  return (
    <>
      <div className="middle-card">
        <div classname="upper">
            <h1 className="title">ReelFeel Sentiment Analysis</h1>
            <p className="description">A movie review sentiment analysis application</p>
        </div>
        
        <WordCloudComponent/>
        
        </div>
        
    </>
  );
};

export default wordCloudAnalysis;
import React from "react";
import "./testSentimentAnalysis.css";
import SearchBar from './SearchBar.jsx'

const TestSentimentAnalysis = () => {
  return (
    <>
      <div className="middle-card">
        <div classname="upper">
            <h1 className="title">ReelFeel Sentiment Analysis</h1>
            <p className="description">A movie review sentiment analysis application</p>
        </div>
        <div className="middle">
         <SearchBar/>
        </div>
        <button className="analyze-button">Test</button>
        
          
        </div>
        
    </>
  );
};

export default TestSentimentAnalysis;

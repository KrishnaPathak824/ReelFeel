import React from "react";
import "./sentimentAnalysis.css";
import SearchBar from './SearchBar.jsx'
import Friends from "../Assets/Friends.jpg"
import Modernfamily from "../Assets/Modernfamily.webp"
const SentimentAnalysis = () => {
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
        <button className="analyze-button">Analyze</button>
        <div className="reference-reviews">
                    <div className="reference-title">Reference Movie Reviews</div>
                    <div className="reference-movie">
                        <img src={Friends} alt="F.R.I.E.N.D.S" className="movie-image" />
                        <div className="movie-title">F.R.I.E.N.D.S</div>
                        <div className="reviews-count">Reviews: 155000</div>
                    </div>
                    <div className="reference-movie">
                        <img src={Modernfamily} alt="Modern Family" className="movie-image" />
                        <div className="movie-title">Modern Family</div>
                        <div className="reviews-count">Reviews: 105000</div>
                    </div>
                </div>
          
        </div>
        
    </>
  );
};

export default SentimentAnalysis;

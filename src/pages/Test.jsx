import React from 'react';
import TestSentimentMeter from '../components/TestSentimentMeter';
import Navbar from '../components/Navbar';
import TestSentimentAnalysis from '../components/TestSentimentAnalysis';
import "./home.css"

const Test= () => {
    return (
        <section className="main-container">
        <div className='App'>
          <div className='home-container'>
          <Navbar/>
          <div className='cardContainer'>
          <TestSentimentMeter/>
          <TestSentimentAnalysis/> 
          </div>
          </div>
        
      </div>
      </section>
    );
};

export default Test;


import React from 'react';
import SentimentMeter from '../components/SentimentMeter';
import Navbar from '../components/Navbar';
import WordCloudAnalysis from '../components/WordCloudAnalysis';
import RightCard from '../components/RightCard';
import './home.css' 
import WordCloudComponent from '../components/WordCloudComponent';

const WordCloudPage  = () => {
    return (
        <section className="main-container">
        <div className='App'>
          <div className='home-container'>
          <Navbar/>
          <div className='cardContainer'>
          <SentimentMeter/>
          <WordCloudAnalysis/>
          <RightCard/>
          </div>
          </div>
        
      </div>
      </section>
    );
};

export default WordCloudPage;
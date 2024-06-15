import React from 'react';
import SentimentMeter from '../components/SentimentMeter';
import Navbar from '../components/Navbar';
import EmotionAnalysiss from '../components/EmotionAnalysis';
import RightCard from '../components/RightCard';
import './home.css';
import EmotionAnalysis from '../components/EmotionAnalysis';
//import "../styles.css"

const Emotions= () => {
    return (
        <section className="main-container">
        <div className='App'>
          <div className='home-container'>
          <Navbar/>
          <div className='cardContainer'>
          <SentimentMeter/>
          <EmotionAnalysiss/> 
          <RightCard/>
          </div>
          </div>
        
      </div>
      </section>
    );
};

export default Emotions;
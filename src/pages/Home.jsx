import React from 'react';
import SentimentMeter from '../components/SentimentMeter';
import Navbar from '../components/Navbar';
import SentimentAnalysis from '../components/SentimentAnalysis';
import RightCard from '../components/RightCard';
import './home.css';
//import "../styles.css"

const Home = () => {
    return (
        <section className="main-container">
        <div className='App'>
          <div className='home-container'>
          <Navbar/>
          <div className='cardContainer'>
          <SentimentMeter/>
          <SentimentAnalysis/> 
          <RightCard/>
          </div>
          </div>
        
      </div>
      </section>
    );
};

export default Home;
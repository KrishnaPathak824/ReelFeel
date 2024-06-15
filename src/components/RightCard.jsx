import React from 'react'
import './Rightcard.css'
import ReviewsIcon from '@mui/icons-material/Reviews';
import MoodIcon from '@mui/icons-material/Mood';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
const RightCard = () => {
  return (
    <div className='Cardcontainer'>
      <div className='item item-1'>
        
      <div className="icon-container">
        <ReviewsIcon />
      </div>
        <div className="reviews-info">
                <div className="review-count">1.5 M</div>
                <div className="review-text">Word Cloud</div>
            </div>
      </div>
      <div className='item item-2'>
      <div className="icon-container">
        <MoodIcon/>
      </div>
      <div className="reviews-info">
                <div className="review-count">1.5 K</div>
                <div className="review-text">Positive Reviews</div>
            </div>
        
      </div>
      <div className='item item-3'>
      <div className="icon-container">
        <SentimentVeryDissatisfiedIcon/>
      </div>
      <div className="reviews-info">
                <div className="review-count">1 K</div>
                <div className="review-text">Negative Reviews</div>
            </div>
        
      </div>
    </div>
  )
}

export default RightCard

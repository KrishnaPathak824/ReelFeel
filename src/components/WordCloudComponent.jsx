import React from 'react';
import WordCloud from 'react-wordcloud';

const movieReviewWords = [
  { text: 'Great', value: 50 },
  { text: 'Acting', value: 40 },
  { text: 'Story', value: 35 },
  { text: 'Plot', value: 30 },
  { text: 'Characters', value: 25 },
  { text: 'Special Effects', value: 20 },
  { text: 'Direction', value: 18 },
  { text: 'Cinematography', value: 15 },
  { text: 'Performance', value: 12 },
  { text: 'Entertaining', value: 10 },
  
];

const WordCloudComponent = () => {
  return (
    <div>
      
      <WordCloud words={movieReviewWords} />
    </div>
  );
};

export default WordCloudComponent;
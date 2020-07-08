import React from 'react';
  function RandomWord(wordsList){
    let word= wordsList[Math.floor(Math.random() * wordsList.length)];
    return word;
 }
 export default RandomWord
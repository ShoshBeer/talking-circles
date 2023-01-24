import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export function WordList(props) {
  const [targetWord, setTargetWord] = useState('example');
  const [words, setWords] = useState([]);
  
  const selectRandomWord = (language = 'en', difficulty = 'basic') => {
    //provide a random word
    //when fully implemented, it will need to take parameter for the language and the difficulty of the word
    //difficulty would relate to both length/rarity, but also to concrete vs abstract concepts
  }

  useEffect(() => {
    const createWordList = async (targetWord, numOfWords = 5) => {
      const responseTrg = await fetch(`https://api.datamuse.com/words?rel_trg=${targetWord}&max=${numOfWords}`);
      const responseSyn = await fetch(`https://api.datamuse.com/words?rel_syn=${targetWord}&max=${numOfWords}`);
      if (responseTrg.ok) {
        const relatedWords = await responseTrg.json();
        setWords(relatedWords);
      }
      if (responseSyn.ok) {
        const synonyms = await responseSyn.json();
        setWords(listOfWords => listOfWords.concat(synonyms));
      }
      //creates a list of words related to the target word
      //words should be restricted to same difficulty or easier relative to the target word
      //words should be in the target language
      //can modify number of words
      //later feature: add vocabulary word(s) manually and create cards for them (useful for school settings)
    }
    createWordList(targetWord);
  }, [targetWord])

  return (
    <Card>
      <Card.Body>
        <Card.Title>{targetWord}</Card.Title>
        {words.map((word, index) => <Card.Text key={index}>{word.word}</Card.Text>)}
        {/* want to add hover over definitions */}
      </Card.Body>
    </Card>
  )
}
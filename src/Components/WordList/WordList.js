import React from "react";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export function WordList({targetWord, wordDifficulty}) {
  const [words, setWords] = useState([]);
  
  useEffect(() => {
    const createWordList = async (targetWord, numOfWords = 5) => {
      const responseSyn = await fetch(`https://api.datamuse.com/words?rel_syn=${targetWord}&max=${numOfWords}&md=fd&qe=rel_syn`);
      const responseTrg = await fetch(`https://api.datamuse.com/words?rel_trg=${targetWord}&max=${numOfWords}&md=fd`);
      if (responseSyn.ok) {
        const relatedWords = await responseSyn.json();
        setWords(relatedWords);
      }
      if (responseTrg.ok) {
        const synonyms = await responseTrg.json();
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
      <Card.Header as="h2" className={wordDifficulty}>{targetWord}</Card.Header>
      <Card.Body>
        {words.slice(1,6).map((word, index) => <Card.Text key={index} style={{}}>{word.word}</Card.Text>)}
        {/* want to add hover over definitions */}
      </Card.Body>
    </Card>
  )
}
import React from "react";

export function WordList(props) {

    const selectRandomWord = (language = 'en', difficulty = 'basic') => {
        //provide a random word
        //when fully implemented, it will need to take parameter for the language and the difficulty of the word
        //difficulty would relate to both length/rarity, but also to concrete vs abstract concepts
    }

    const targetWord = selectRandomWord();

    const createWordList = (targetWord, numOfWords = 5) => {
        //creates a list of words related to the target word
        //words should be restricted to same difficulty or easier relative to the target word
        //words should be in the target language
        //can modify number of words
        //later feature: add vocabulary word(s) manually and create cards for them (useful for school settings)
    }

    return (
        <div className="word-list">
            {listOfWords.map(word, index => <Word word={word} key={index} />)}
            {/* Word components rendered instead of listing the words here for styling and for potential to add hover over definitions */}
        </div>
    )
}
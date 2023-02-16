import wordDictionary from '../../Resources/english_words_frequencies__dict_v2.json';
import { useSelector } from 'react-redux';

export function RandomWord({easy, med, hard}) {

  const wordsOfSelectedDifficulty = (easy, med, hard, dictionary) => {
    const keys = [];
    for (const key in dictionary) {
      if (easy && dictionary[key]["frequency"] < 0.00126 && dictionary[key]["frequency"] >= 0.0001) {
        keys.push(key);
      }
      else if (med && dictionary[key]["frequency"] < 0.0001 && dictionary[key]["frequency"] >= 0.00001) {
        keys.push(key);
      }
      else if (hard && dictionary[key]["frequency"] < 0.00001) {
        keys.push(key);
      }
    }
    return keys;
  }

  const randomWordPicker = (dictionary, keys) => {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    return dictionary[randomKey];
  }

  const randomWord = randomWordPicker(wordDictionary, wordsOfSelectedDifficulty(false, false, true, wordDictionary));

  return (
    <div>
      <h2>Random Word test</h2>
      <p>{randomWord["word"]}</p>
    </div>
  )
}
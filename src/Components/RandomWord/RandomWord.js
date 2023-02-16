import wordDictionary from '../../Resources/english_words_frequencies__dict_v2.json'
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
    // const keys = Object.keys(dictionary);
    // return dictionary[keys[ keys.length * Math.random() << 0]];
  }

  const randomWord = randomWordPicker(wordDictionary, wordsOfSelectedDifficulty(false, false, true, wordDictionary));

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '',
  //     'X-RapidAPI-Host': 'lexicala1.p.rapidapi.com'
  //   }
  // };

  // const getInfoFromLexicala = async() => {
  //   const response = await fetch('https://lexicala1.p.rapidapi.com/senses/EN_SE00001278', options);
  //   const jsonResponse = await response.json();
  //   return jsonResponse;
  // }

  // const getInfoFromEducalingo = async() => {
  //   const response = await fetch('https://educalingo.com/en/dic-en/test', {headers: {mode: 'no-cors'}});
  //   const jsonResponse = await response.json();
  //   return jsonResponse;
  // }

  return (
    <div>
      <h2>Random Word test</h2>
      {console.log(randomWord)}
    </div>
  )
}
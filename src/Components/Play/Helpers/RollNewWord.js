export function RollNewWord (wordDictionary, includeEasy, includeMed, includeHard) {
  const keys = []
  for (const key in wordDictionary) {
    if (includeEasy && wordDictionary[key].frequency < 0.00126 && wordDictionary[key].frequency >= 0.0001) {
      keys.push(key)
    } else if (includeMed && wordDictionary[key].frequency < 0.0001 && wordDictionary[key].frequency >= 0.00001) {
      keys.push(key)
    } else if (includeHard && wordDictionary[key].frequency < 0.00001) {
      keys.push(key)
    }
  }
  const chosenWord = wordDictionary[keys[Math.floor(Math.random() * keys.length)]]

  if (chosenWord.frequency >= 0.0001) {
    return [chosenWord, 'text-success']
  } else if (chosenWord.frequency >= 0.00001) {
    return [chosenWord, 'text-warning']
  } else {
    return [chosenWord, 'text-danger']
  }
}
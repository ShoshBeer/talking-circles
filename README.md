
# Talking in Circles - (Play [Here!](https://shoshbeer.github.io/talking-circles/))

## About

This is a game to be played with two or more people to help practise crucial language fluency skills. Players will take turns speaking to communicate a secret word to the other player(s). Specifically: 
 - Verbal skills are developed by forming sentences and communicating ideas.
 - Listening comprehension is utilized to understand the clues and solve the word.
 - Vocabulary is increased by using new words creatively, which helps cement them in long-term memory.

*Note: Vulgar, derogatory, and offensive words have been filtered out. However, it is still possbile to encounter inappropriate words. If you do, please open an issue and include the word you encountered and the language.*

## Supported Languages

Current supported languages include:
 - English
 - German
 - French
 - Spanish
 - Italian
 - Portuguese

 More to come!

## How to Play

1. One person is designated to be the first clue-giver.
2. The clue giver [opens the game](https://shoshbeer.github.io/talking-circles/) on a device. The players may [adjust the settings](https://shoshbeer.github.io/talking-circles/#/settings) to their desired language and difficulty level.
3. Without letting other players see the screen, the clue giver will navigate to the [Play](https://shoshbeer.github.io/talking-circles/#/play) tab and the game begins!
4. Play rounds for a set amount of time or a set number of rounds. One round is played like so:
   - The clue giver will see a card with the target word at the top and 0-5 related words below. If the clue giver doesn't know a word on the card, they can click the word to see its definition. 
   - The clue-giver must speak in the selected language to get the other players to figure out the target word. 
     - This can be done by describing the meaning of the word, or providing synonyms, or telling stories where the word might fit. Be creative!
     - The clue giver is not allowed to say the target word or any of the related words in any form.
   - Once the other players figure out the word and say it out loud, the clue giver scores the word.
5. Choose someone else to be the clue giver and play some more!
   - You can pass the same device to the next clue giver, or use separate devices to track individual scores.

## License

This work is licensed under a [Creative Commons Attribution Share-Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/).

## Data Sources and Citations

Many thanks to the authors of the freely-available data tools that allowed me to build this app! 

Using the following resources, I created [LearningDictionaries](https://github.com/ShoshBeer/LearningDictionaries), a free tool that can be used to create dictionaries in different languages with frequency and related word metadata.

Dictionary data for all languages comes from https://kaikki.org/dictionary/, which includes a list of words and phrases in that language, definitions in English for every sense, and related words for some words.

> Tatu Ylonen: Wiktextract: Wiktionary as Machine-Readable Structured Data, Proceedings of the 13th Conference on Language Resources and Evaluation (LREC), pp. 1317-1325, Marseille, 20-25 June 2022.

---

Word freqeuncy data for all languages comes from [wordfreq](https://zenodo.org/record/7199437), a very useful tool that I used to obtain the frequency score of a word and a list of the most common words in a specified language.

> Robyn Speer. (2022). rspeer/wordfreq: v3.0 (v3.0.2). Zenodo. https://doi.org/10.5281/zenodo.7199437

---

Extra synonyms for all languages are sourced from PyMultiDictionary, which was useful for getting related words for each target word.

> Pablo R. Pizarro. (2023). PyMultiDictionary: v1.2.1. PyPi. https://pypi.org/project/PyMultiDictionary/

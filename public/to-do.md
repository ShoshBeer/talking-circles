
# Ongoing Improvements

---

## Features Wishlist

### General

 - Add more languages supported by Educalingo
 - Add languages supported by wordfreq but not Educalingo
 - Add references before deploying!!
 - Remove NSFW words

### Controls

 - Make timer display optional
 - Make definitions display on click optional
 - Make option for definitions to be in native or learning language
   - Definitions in languages other than English will be taken from Lexicala

### Related Words

 - Remove duplicate English related words and make sure there are defs for displaced related words

### Target Words

 - Add field to input target word manually
 - Add way to upload list of vocabulary words to use as source for target words
 - Filter duplicate words on list with different forms
    - E.g. answer and answers, economize and economise

---

## Bug Reports

 - Word "huge" has related word "vast." must know why punctuation and strip if not a fluke
 - Spanish: some related words are not in smooth dict and don't have definitions
 - Target word definition popup should close when new word is rolled and when clicking elsewhere

---

## Completed!

 - Add instructions
 - Filter related words to remove words containing target word
   - E.g. 'daughter' has related word 'granddaughter'
 - Add click or hover over definitions for target word
 - Add control for number of related words
 - Make popover definition for target word responsive
   - Changed to bottom position
 - Display timer that logs the time the card was displayed
 - Users can indicate if they were successful for a given word and the card (or score) gets saved for viewing later (with react router?)
 - Minimize help by default on widths < 992px (md and smaller)
   - Not necessary with React-Router
 - Make related words from new dictionary
   - Display definitions for new related words
 - Filter related words to same difficulty or easier as target word
   - Not done explicitly, but related words are narrowed to "medium" difficulty (freqeuncy of 1/10,000)
 - Change the list generator to get better related words
   - Related words are collected from Kaikki dictionary, and some entries have synonyms, hyponyms, hypernyms, meronyms, and related words plus synonyms from Educalingo
 - Added German
 - Resolved bug: `Cannot read properties of undefined (reading 'map')` pretty frequently when choosing a new random word by switching to the new dictionary implementation
 - Improve error page to include return to home screen button
   - Error page is rendered below the nav bar so can still navigate to other parts of the page
 - Roll new word when navigating to Play instead of starting on 'Example'
 - Set maximum time for card before it's added to miss and new word is rolled
 - Customize maximum time per word
 - Make only one accordion tab open at a time
 - Make better styling for related word definitions
 - Resolved bug: accordion tabs stay open when word is changed
 - Scroll bar resets position when accordion tab is reopened
 - Make sure there are 5 related words
 - Fixed not enough related words because some related words aren't in the main dictionary by adding definitions from draft dict to the RW array if it isn't in the smooth dict
 - Minimize navbar to hamburger menu at smaller widths
 
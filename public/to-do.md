
# Ongoing Improvements

---

## Features Wishlist

### General

 - Add language selector
   - Perhaps Spanish to start because wordmuse API already supports it
 - Set maximum time for card before it's added to miss and new word is rolled
 - Minimize navbar to hamburger menu at smaller widths

### Controls

 - Make timer display optional
 - Make definitions display on click optional

### Related Words

 - Filter related words to same difficulty or easier as target word
 - Change the list generator to get better related words
    - maybe collect trigger words and synonyms and then sort by score or frequency

### Target Words

 - Add field to input target word manually
 - Add way to upload list of vocabulary words to use as source for target words
 - Make sure there are 10 related words
 - Filter duplicate words on list with different forms
    - E.g. answer and answers, economize and economise
 - Make only one definition accordion tab open at a time

---

## Bug Reports

 - Throws `Cannot read properties of undefined (reading 'map')` pretty frequently when choosing a new random word
   - Has happened with *yeah*, *inform*, *else*, *folks*

---

## Completed!

 - Add instructions
 - Filter related words to remove words containing target word
   - E.g. 'daughter' has related word 'granddaughter'
 - Add click or hover over definitions for target word and related words 
 - Add control for number of related words
 - Make popover definition for target word responsive
   - Changed to bottom position
 - Option to display timer that logs the time the card was displayed
 - Users can indicate if they were successful for a given word and the card (or score) gets saved for viewing later (with react router?)
 - Minimize help by default on widths < 992px (md and smaller)
   - Not necessary with React-Router
"use strict";
function showMagicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function makeGreat(magicians) {
    // Create a new array with modified magician names
    const greatMagicians = magicians.map(magician => magician + ' the Great');
    return greatMagicians;
}
// Array of magician names
const magicianNames = ['Merlin', 'Houdini', 'David Copperfield', 'Gandalf'];
// Create a copy of the original array
const originalMagicians = magicianNames.slice();
// Call makeGreat with the copy to avoid modifying the original array
const greatMagicians = makeGreat(magicianNames);
// Call showMagicians with the original and modified arrays
console.log('Original Magicians:');
showMagicians(originalMagicians);
console.log('\nGreat Magicians:');
showMagicians(greatMagicians);

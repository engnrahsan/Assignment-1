// Q42:Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    // Create a new array with modified magician names
    const greatMagicians = magicians.map(magician => magician + ' the Great');
    return greatMagicians;
}

// Array of magician names
const magicianNames: string[] = ['Merlin', 'Houdini', 'David Copperfield', 'Gandalf'];

// Call makeGreat to modify the array
const greatMagicians = makeGreat(magicianNames);

// Call showMagicians to see the modified list
showMagicians(greatMagicians);
export{}
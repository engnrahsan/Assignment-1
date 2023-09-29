// Define the array of places
const placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

// Print the original order
console.log("Original order:", placesToVisit);

// Print in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array to show it's still in the original order
console.log("Still in original order:", placesToVisit);

// Print in reverse alphabetical order without modifying the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in the original order
console.log("Still in original order:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order again to get back to the original order
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.reverse()
console.log("Sorted in reverse alphabetical order:", placesToVisit);

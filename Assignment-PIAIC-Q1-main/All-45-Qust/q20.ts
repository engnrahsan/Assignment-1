// Think of something you could store in a array. For example, you could make a list of
//  mountains, rivers, countries, cities, languages, or anything else you’d like.
//   Write a program that creates a list containing these items.


let mountains = [
  "Mount Everest",
  "K2",
  "Kangchenjunga",
  "Lhotse",
  "Makalu"
];

console.log("List of mountains:");
for (let mountain of mountains) {
  console.log(mountain);
}
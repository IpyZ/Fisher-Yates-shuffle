const shuffle = require ('./index');

var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stringArray = ["JavaScript", "Java", "C#", "C++", "Delphi", "TypeScript"];
var objectArray = [{name: "Adam", surname: "Kowalski"}, {name: "Marek", surname: "Przybylski"}, {name: "Maria", surname: "Kowalska"}, {name: "Agata", surname: "Przybylska"}];

console.log ("Orginal arrays: ");
console.log (numberArray);
console.log (stringArray);
console.log (objectArray);

console.log ();

console.log ("Shuffled arrays: ");
console.log (shuffle (numberArray));
console.log (shuffle (stringArray));
console.log (shuffle (objectArray));
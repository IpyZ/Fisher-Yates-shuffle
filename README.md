# Shuffle
This is implementation of the Fisher-Yates shuffle algorithm in JavaScript. It's puts all items of given array in random order.

### Installation

```
npm install fisher-yates-shuffle
```

### Usage
```js
const shuffle = require ('fisher-yates-shuffle');

var exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var shuffledArray = shuffle (exampleArray);

console.log (shuffledArray)
```
Example output:
```
[
  5, 7, 10, 9, 4,
  3, 2,  1, 6, 8
]
```

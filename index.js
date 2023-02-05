// Implementation of Fisher-Yates shuffle algorithm
//
//
// Algorithm (source: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)
//
//
// 1. Write down the numbers from 1 through N.
// 2. Pick a random number k between one and the number of unstruck numbers remaining (inclusive).
// 3. Counting from the low end, strike out the kth number not yet struck out, and write it down at the end of a separate list.
// 4. Repeat from step 2 until all the numbers have been struck out.
// 5. The sequence of numbers written down in step 3 is now a random permutation of the original numbers.
//
//
//
// Created by Filip Śliwa © 2023 under MIT license

/**
 * Shuffles given array
 * @param {Array} array An array of any type that you want to shuffle
 * @returns {Array} Shuffled array
 */
function shuffle (array) {

    var arrayOrginalSize = array.length;

    var shuffledArray = [];

    for (let i = 0; i < arrayOrginalSize; i++) {
        let random = Math.random ();
        let k = parseInt (random * array.length);

        shuffledArray.push (array.splice (k, 1)[0]);
    }

    return shuffledArray;
}

module.exports = shuffle;
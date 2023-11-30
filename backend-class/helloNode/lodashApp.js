var _ = require('lodash');

let words = ['sky', 'wood', 'forest', 'falcon',
    'pear', 'ocean', 'universe'];

let word = _.sample(words);
console.log(`Random word: ${word}`);

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.nth(nums, 3));
console.log(_.nth(nums, -3));


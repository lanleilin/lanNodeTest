// var name = 'world';

// var s = `hello,${name}!`;

// console.log(s);

'use strict';

var name = 'Node.js';
var s = `Hello, ${name}!`;

console.log(s);

var fs = require('fs');

var data = 'Hello, Node.js';
fs.writeFile('output.txt', data, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
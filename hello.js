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


var ws1 = fs.createWriteStream('output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

var ws2 = fs.createWriteStream('output2.txt');
ws2.write(new Buffer('使用Stream写入二进制数据...\n', 'utf-8'));
ws2.write(new Buffer('END.', 'utf-8'));
ws2.end();
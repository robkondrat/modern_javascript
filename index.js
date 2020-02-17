var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JS");

var datetime = moment().startOf('Day').fromNow();
console.log(datetime);

var number = 144;

console.log("Ch Ch Ch Changes");
var square_root = math.sqrt(number);


var name = 'Bob';
console.log(`Whatup ${name}, the day started ${datetime}. The square root of ${number} is ${square_root}.`);


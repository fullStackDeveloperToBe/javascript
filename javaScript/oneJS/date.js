var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
console.log(`Today is ${dayList[day]}`);
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var millisecond = today.getMilliseconds();
var amPM = hour >= 12 ? 'PM' : 'AM';
hour = hour > 12 ? hour -12 : hour;
console.log(`Current Time is ${hour}:${minute}:${second}:${millisecond} ${amPM}`);
console.log(hour);

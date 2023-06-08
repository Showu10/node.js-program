const fs = require('fs');

let str = fs.readFileSync('./example.txt').toString();
str = str.toLowerCase();
while(str.includes(",", "  ")) {
    str = str.replace(",", " ");
    str = str.replace("  ", " ");
}
let word = String(process.argv.slice(2));
word = word.toLowerCase();
while(word.includes(",", "  ")) {
    word = word.replace(",", " ");
    word = word.replace("  ", " ");
}
if (str.includes(word)) {
    console.log("True");
} else {
    console.log("False");
}
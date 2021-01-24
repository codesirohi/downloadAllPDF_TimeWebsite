const fs = require('fs');



   
var text = fs.readFileSync("test.txt", "utf-8");
var textByLine = text.split("\n");



//console.log(typeof textByLine[0]);

var count= Object.keys(textByLine).length; 

for(let i=0; i<count; i++){
    
        textByLine[i] = textByLine[i].replace(textByLine[i].substring(31,72),""); 
}

console.log(textByLine);

// var str = 'https://www.time4education.com/' //31
// var str1 = 'pdf.js-gh-pages/web/viewer.php?file=../../'
// console.log(str1.length);
 


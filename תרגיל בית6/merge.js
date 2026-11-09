// Bayan khatib 326107646
// אמיר חרירי
// תז: 327679049

const fs = require('fs');


let lines1 = fs.readFileSync('file1.txt', 'utf-8').split('\n');
let lines2 = fs.readFileSync('file2.txt', 'utf-8').split('\n');
let lines3 = fs.readFileSync('file3.txt', 'utf-8').split('\n');

let output = [];
let i = 1;


let index1 = 0;
let index2 = 0;
let index3 = 0;

while (index1 < lines1.length || index2 < lines2.length || index3 < lines3.length) {
  for (let j = 0; j < i; j++) {
      if (index1 < lines1.length) {
            output.push(lines1[index1]);
            index1++;
      }
  } 
for (let j = 0; j < i; j++) {
      if (index2 < lines2.length) {
            output.push(lines2[index2]);
            index2++;
      }
}


  for (let j = 0; j < i; j++) {
      if (index3 < lines3.length) {
            output.push(lines3[index3]);
            index3++;
      } 
  }

  i++;
}

fs.writeFileSync('merged_output.txt', output.join('\n'));


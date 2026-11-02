// Bayan khatib 326107646
// אמיר חרירי
// תז: 327679049

const fs = require('fs');

const inputFiles = [
    "file1.txt", "file2.txt", "file3.txt", "file4.txt", "file5.txt",
    "file6.txt", "file7.txt", "file8.txt", "file9.txt", "file10.txt"
];
const outputFile = "output.txt";


let finalLines = [];

for (let i = 0; i < inputFiles.length; i++) {
    const filename = inputFiles[i];
    const linesNeeded = i + 1; 

    
    if (fs.existsSync(filename)) {
        
        const fileContent = fs.readFileSync(filename, 'utf8');
        
      
        const lines = fileContent.split('\n');

       
        for (let j = 0; j < linesNeeded; j++) {
           
            if (j >= lines.length) {
                break;
            }
            finalLines.push(lines[j]);
        }
    } else {
        console.log("Could not find " + filename + ", skipping it.");
    }
}


fs.writeFileSync(outputFile, finalLines.join('\n'), 'utf8');

console.log("Done! Check the " + outputFile + " file.");
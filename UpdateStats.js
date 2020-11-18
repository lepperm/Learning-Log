/**
  * @fileoverview Node.js script to update generated data files for Learning Log
  */
const fs = require('fs');

console.log("Updating data files...\n");

try {
  fs.copyFileSync('./_site/assets/js/skills.json','./_data/skills.json');
  fs.copyFileSync('./_site/assets/js/search.json','./_data/search.json');
}
catch (err) {
  console.error(`Encountered an error: ${err.message}.`);
  process.exit(1);
}

console.log("Success!");
process.exit(0);
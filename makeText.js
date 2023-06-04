const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { MarkovMachine } = require('./markov');

/** Generate Markov text from a file or URL */

function generateText(text) {
  let mm = new MarkovMachine(text);
  console.log(mm.makeText());
}

/** Read file and generate text from it */

function readFromFile(path) {
  fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      generateText(data);
    }
  });
}

/** Fetch URL and generate text from it */

async function readFromURL(url) {
  try {
    let response = await axios.get(url);
    generateText(response.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

/** Determine if argument is a file path or URL and call appropriate function */

let [method, path] = process.argv.slice(2);

if (method === 'file') {
  readFromFile(path);
} else if (method === 'url') {
  readFromURL(path);
} else {
  console.error(`Invalid method: ${method}`);
  process.exit(1);
}

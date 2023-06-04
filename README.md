# Node.js Markov Chain

This is a Node.js project that generates random text using a Markov Chain algorithm.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the dependencies by running the following command:



## Usage

To generate random text from a file or URL, use the following command:


- `source` can be either `file` or `url`.
- `input` should be the path to the file or the URL.

Examples:


- `source` can be either `file` or `url`.
- `input` should be the path to the file or the URL.

Examples:


The generated text will be printed to the console.

## Further Study

The project can be extended in several ways to improve its functionality:

- Algorithmic improvements: Consider starting the generated text only with capitalized words or words that start a sentence. You can also modify the behavior to stop at a period while respecting the maximum number of words.
- Markov chain enhancements: Currently, the Markov chain operates on single words. Consider implementing bigrams (two words at a time) for more realistic output text.
- Node.js practices: Explore libraries that can strip HTML content from URLs and incorporate them into the project. Allow users to pass multiple files and/or URLs and mix the text together.
- JavaScript generator functions: Research and implement generator functions to generate text on demand, word-by-word, instead of generating all the text at once.

Feel free to experiment and enhance the project based on your preferences and requirements.

## License

This project is licensed under the [MIT License](LICENSE).

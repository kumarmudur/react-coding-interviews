// find longest word in sentence

function findLongestWord(sentence) {
    let words = sentence.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    console.log(longestWord);
}

findLongestWord('I love coding in JavaScript');




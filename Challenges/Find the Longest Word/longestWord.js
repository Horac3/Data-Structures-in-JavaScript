longestWord = (str) => {
    let longestWord = "";
    let words = str.split(" ");
    for (let word of words) {
        if (word.length> longestWord.length){
            longestWord = word;
        }
    }
    console.log(longestWord);
    return longestWord;
}

longestWord("I woke up early today");
longestWord("I went straight to the beach");
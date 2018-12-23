// Get a random word
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function incrementWinCounter() {

}


document.onkeyup = function (event) {

    document.getElementById('guessed-letters').innerHTML = event.key;
    return event.key;


};
/**
 *
 * @param {string} guessedWord
 */
function drawGuessedWord(guessedWord) {
    document.getElementById('guessed-word').innerHTML = guessedWord;

}
/**
 * Makes underscores given a word.
 * @param {string} word
 * @returns {string}
 */
function generateUnderscores(word) {

    var underscores = "";
    for (var i = 0; i < word.length; i++) {
        underscores += '_';
    }
    return underscores;

}
/**
 * @returns {string}
 */
var randomWordResult = (function getRandomWord() {
    var words = ['Ella Fitzgerald', 'Billie Holiday', 'Blah'];
    var randomIndex = Math.floor(Math.random() * words.length);

    console.log(words[randomIndex]);


    return words[randomIndex];

})();

if (alphabet.indexOf(randomWordResult) === false) {
    console.log("please type a LETTER");
}


/**
 * Initialize the app.
 */
function init(searchElement, fromIndex) {
    // Generate and show underscores for it, using the number of letters.
    // Show number of guesses remaining.
    // Show letters already guessed (empty at first)
    drawGuessedWord(generateUnderscores(randomWordResult));


}

// TODO: Run init when ready event fired.
document.addEventListener('DOMContentLoaded', function (event) {
    init();
});
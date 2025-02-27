//psuedocode?
//filter the array from all items that aren't letters or numbers! such as spaces, commas or exclamation marks ' ',',' and '!'
//next we use map, to make it all to lower case? (on the letters not the numbers so have an if number {to lower?})
//finally we use reduce to somehow do magic ? 

function removePunctuation(text) {
    var punctuation = /[\.,?! ]/g;
    var newText = text.replace(punctuation, "");
    return newText;
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

const palindromes = function (string) {
    
    const filteredstring = removePunctuation(string); //should filter and keep only letters and numbers
    const lowerString = filteredstring.toLowerCase();
    const straightString = lowerString;
    const flippedString = reverseString(lowerString);
    if (straightString == flippedString){
        return true;
    } else {return false;}



};






// Do not edit below this line
module.exports = palindromes;

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  //convert all characters to unicode;
  function convertToUnicode(alphabet) {
    
    //loop through alphabet characters;
    return alphabet.map((char) => {
      
      //ignore case sensitivity; convert each character to unicode;
      const number = char.toLowerCase().charCodeAt();
      
      //ensure characters are within given shift constraints;
      return number <= 122 && number >= 97 ? number : char;
    });
  }

  
  function caesar(input, shift, encode = true) {
    
    //create variable to store separated characters from user input message
     let separatedChars = input.split("");
    
     //check to see cypher direction; either encode or decode;
    if (encode === false) {
      //if decode then multiply shift by negative 1 to switch direction;
      shift = shift * -1;
    }
    
     // ensure that shift exists;
    if (!shift) {
      return false;
    }
    
    //ensure shift is within given alphabet restraints;
    if (shift > 25 || shift < -25) {
      return false;
    }
   
    //convert the individual characters from the user message to unicode characters;
    let unicodeChars = convertToUnicode(separatedChars);

    // loop through all characters;
    let unicodeShift = unicodeChars.map((char) => {
      // ensure all characters are valid numbers; exclude all empty spaces;
      return typeof char === "number" ? char + shift : char;
    });

    // error handling to ensure shifting cannot go outside of given alphabet/number restraints
    let errorFreeChars = unicodeShift.map((number) => {
      //ensure character is a valid number
      if (typeof number === "number") {
        //if number is beyond restraints add or subtract accordingly
        if (number > 122) return number -26;
        if (number < 97) return number +26;
      }
      //return the new array of valid cyphered numbers
      return number;
    });

    //loop through the new, error-free array;
    let cipheredResult = errorFreeChars.map((char) => {
      //change numbers back into characters/string;
      return typeof char === "number" ? String.fromCharCode(char) : char;
    });
    
    //return ciphered results array as a string;
    return cipheredResult.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

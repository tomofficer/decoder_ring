// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  //create an alphabet, split individual characters
  let myAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  //create empty array to store final cyphered results
let cypheredOutput = [];

  
  function substitution(input, alphabet, encode = true) {
    
    //check if alphabet exists and is within length restraints
    if (!alphabet || alphabet.length !== 26) return false;
    
    //
    let duplicateTest = new Set(alphabet)
    
    //check to ensure correct length
    if ([...duplicateTest].length !== 26) return false;
    
    //separate characters
    alphabet.split('');
    
    //check direction of cypher...if direction is encode
    if (encode) {
      
      //loop through alphabet; substitute cyphered alphabet to encode
      for (let i = 0; i < 25; i++) {
        cypheredOutput[myAlphabet[i]] =  alphabet[i]
      }
    } 
    
    //if direction is decode
    else {
      
      //loop through alphabet; substitute opposite accordingly
      for (let i = 0; i < 25; i++) {
        cypheredOutput[alphabet[i]] =  myAlphabet[i]
      }
    }
    
    //loop through user input; ignore case sensitivity; separate characters; retain spaces;
    let result = input.toLowerCase().split("").map((char) => {
      if (char === " ") return " ";
      return cypheredOutput[char];
    });
    
    //return final cyphered results (cypheredOutput array) as a string
    return result.join('');
    
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

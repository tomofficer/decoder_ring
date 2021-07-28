// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //polybius square template for encoding
  const encoder = { 'a':'11', 'b':'21', 'c':'31', 'd':'41', 'e':'51',
    'f':'12', 'g':'22', 'h':'32', 'i':'42', 'j':'42', 'k':'52',
    'l':'13', 'm':'23', 'n':'33', 'o':'43', 'p':'53',
    'q':'14', 'r':'24', 's':'34', 't':'44', 'u':'54',
    'v':'15', 'w':'25', 'x':'35', 'y':'45', 'z':'55' };
  
  //polybius square template for decoding
  const decoder = { '11':'a', '21':'b', '31':'c', '41':'d', '51':'e',
    '12':'f', '22':'g', '32':'h', '42':'(i/j)', '52':'k',
    '13':'l', '23':'m', '33':'n', '43':'o', '53':'p',
    '14':'q', '24':'r', '34':'s', '44':'t', '54':'u',
    '15':'v', '25':'w', '35':'x', '45':'y', '55':'z' };
  

  function polybius(input, encode = true) { 
    
    //set a condition to check which direction cypher is running
    if (encode) {
      
      //ignore all capital letters from user input
      let ignoreCapital = input.toLowerCase();
      
      //loop through the input characters
      let lowerCase = [...ignoreCapital].map((index) => {

        //for each character ensure that the input is within alphabet restraints; and if so character will be added to new array
        if (97 > index.charCodeAt() || 122 < index.charCodeAt()) return index;return encoder[index];
      });
      
      //return the new array without spaces or commas
      return lowerCase.join("");
    }
  
    //if cypher direction is running to decode
    else {
      
      //check to make sure input's length is not an odd number
      if (Math.abs(input.split(" ").join("").length % 2) === 1) return false;
      
      //create an empty array to retain spaces
      const newArray = [];
      
      //loop through input characters checking for spaces
      for (index = 0; index < input.length; index+=2) {
        let currentChar = input[index];
        let followingChar = input[index + 1];
        //if empty spaces, retain and push spaces to empty array
        if (currentChar === " ") {
          newArray.push(currentChar);
          index-=1;
        }
        
        else {
          //push all characters from user input to the new array
          newArray.push(`${currentChar}${followingChar}`);
        };
      };
      
      //store all characters and spaces for final output
      let cipheredOutput = newArray.map((index) => {
        if (index === ' ') return index;
          return decoder[index];
      });
      
      //return final output as a string
      return cipheredOutput.join('')
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

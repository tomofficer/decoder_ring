// Write your tests here!
const caesar = require("../src/caesar");
const expect = require("chai").expect;


describe("caesar", () => {
    it("returns false if shift value equals 0", () => {
      const expected = false;
      const actual = caesar.caesar("science", 0);
      expect(actual).to.equal(expected);
    })
    
    it("returns false if shift value is greater than 25", () => {
      const expected = false;
      const actual = caesar.caesar("weather", 27);
      expect(actual).to.equal(expected);
    })
  
    it("returns false if shift value is less than -25", () => {
      const expected = false;
      const actual = caesar.caesar("earth", -27);
      expect(actual).to.equal(expected);
    })
  
    it("ignores capital letters", () => {
      const expected = "dbqjubm";
      const actual = caesar.caesar("CaPiTaL", 1);
      expect(actual).to.equal(expected);
    })

    it("handles shifts that go past the end of the alphabet", () => {
      const expected = "gvv";
      const actual = caesar.caesar("zoo", 7);
      expect(actual).to.equal(expected);
    })
  
    it("maintains space and other nonalpha symbols in the message", () => {
      const expected = "shh";
      const actual = caesar.caesar("zoo", -7);
      expect(actual).to.equal(expected);
    })
}) 

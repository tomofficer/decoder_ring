// Write your tests here!
const polybius = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius", () => {
    it("when encoding, translates i and j to 42", () => {
        const expected = "42";
        const actual = polybius.polybius("i");
        expect(actual).to.equal(expected);
    })

    it("when decoding, translates 42 to i and j", () => {
        const expected = "(i/j)";
        const actual = polybius.polybius("42", false);
        expect(actual).to.equal(expected);
    })

    it("ignores capital letters", () => {
        const expected = "34314251333151";
        const actual = polybius.polybius("ScIeNcE");
        expect(actual).to.equal(expected);
        })
    
    it("maintains spaces in the message, before and after", () => {
        const expected = "34314251333151";
        const actual = polybius.polybius("science");
        expect(actual).to.equal(expected);
        })
})

// Write your tests here!
const substitution = require("../src/substitution");
const expect = require("chai").expect;


describe("substitution", () => {

        it("returns false if the given alphabet isn't 26 char long", () => {
            const expected = false;
            const actual = substitution.substitution("science")
        })

        it("correctly translates the given phrase, based on the given alphabet", () => {
            const expected = "vtqzitk";
            const actual = substitution.substitution("weather", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })

        it("returns false if any duplicate characters in the given alphabet exist", () => {
            const expected = false;
            const actual = substitution.substitution("aaaaaaaaaaaaaaaaaaaaaaaaaa");
            expect(actual).to.equal(expected);
        })

        it("maintains spaces in the message, before and after encoding or decoding", () => {
            const expected = "leotfet vtqzitk tqkzi";
            const actual = substitution.substitution("science weather earth", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })

        it("ignores capital letters", () => {
            const expected = "tqkzi";
            const actual = substitution.substitution("EaRtH", "qwertyuiopasdfghjklzxcvbnm");
            expect(actual).to.equal(expected);
        })
}) 

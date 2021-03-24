import { getRgbFromIndex } from "../src/helper.js";

describe("Testing the color generator app", () =>{

    let index = 0;
    let step = 8;

    it("Should starts at R: index 0, G: index 0, B: index 0", ()=>{
        expect(getRgbFromIndex(index,step)).toEqual({"blue": 0, "green": 0, "red": 0});
    });

    it("Should ends at R: index 31, G: index 31, B: index 31", ()=>{
        index = 32767;
        expect(getRgbFromIndex(index,step)).toEqual({"blue": 31, "green": 31, "red": 31});
    });
});

/* eslint-disable no-undef */
const { it } = require("node:test");
const nameExoplanet = require ("../testNameExoplanet");

describe("test exoplanetName before adding" , () =>{

    it(" test1: should return true" , () =>{
        expect(nameExoplanet()).toBe(true);

    });

    it("test2 : should return false" , () => {
        expect(nameExoplanet().toBe(false))
    });

    it()

});



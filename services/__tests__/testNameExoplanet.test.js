/* eslint-disable no-undef */
const checkPlanetName  = require ("../testNameExoplanet");

describe("test exoplanetName before adding" , () =>{

    it("test1: should return false if name is empty" , () =>{
        expect(checkPlanetName()).toBe(false);

    });

    it("test2: should return true if name is in uppercase" , () =>{
        expect(checkPlanetName('EXOPLANETNAME')).toBe(true);
    });

    it("test3: should return false if name is not in uppercase" , () =>{
        expect(checkPlanetName('exoplanetname')).toBe(false);
    });
   
});



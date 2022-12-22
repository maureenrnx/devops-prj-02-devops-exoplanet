const {nameExoplanet} = require ("../testNameExoplanet");

describe("test exoplanetName before adding" , () =>{

    it(" test1: should return true" , () =>{
        expect(nameExoplanet()).toBe(true);

    });

});



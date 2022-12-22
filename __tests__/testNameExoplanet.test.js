const {nameExoplanet} = require ("../models/Exoplanet");

describe("test exoplanetName before adding" , () =>{

    test(" test1: should return true" , () =>{
        expect(nameExoplanet("name")).toBe(true);

    });

});



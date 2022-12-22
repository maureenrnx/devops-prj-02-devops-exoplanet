/* eslint-disable no-undef */
const nameExoplanet = require ("../testNameExoplanet");

describe("test exoplanetName before adding" , () =>{

    it("test1: should return true if name is in uppercase" , () =>{
        expect(nameExoplanet('EXOPLANETNAME')).toBe(true);

    });

    it("test2 : should return false if name is not in uppercase" , () => {
        expect(nameExoplanet('exoplanetName').toBe(false))
    })

});



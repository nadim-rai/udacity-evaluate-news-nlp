const { validUrl } = require("../js/validUrl")

describe('validUrl', ()=> {
    test('expect strings to be false', () => {
        expect( validUrl("url")).toBeFalsy();
    })
    
    test('expect urls to be true', () => {
        expect( validUrl("https://www.udacity.com/")).toBeTruthy();
    })

    test('expect empty string to be false', () => {
        expect( validUrl("")).toBeFalsy();
    })
})
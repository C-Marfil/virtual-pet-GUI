const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })
    it('checks initial age of pet', () => {
        const pet = new Pet('Fido', 0);
        expect(pet.age).toBe(0);
    })
});

describe('test the growUp function', () => {
    it('increments age of the pet by numberOfYears', () => {
        const pet = new Pet('Fido', 0);
        
        pet.growUp(5);

        expect(pet.age).toEqual(5);
    })
})
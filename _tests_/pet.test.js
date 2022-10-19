const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    })
    it('checks initial age of pet', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
    })
});
describe('test the growUp function', () => {
    it('increments age of the pet by numberOfYears', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    })
    it('checks the fitness increments', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(7);
        expect(pet.hunger).toEqual(5);
        pet.growUp();
        expect(pet.fitness).toEqual(4);
        expect(pet.hunger).toEqual(10);
    })
});
describe('The use of the walk function', () => {
    it('increases fitness and should not be over 10', () => {
        const pet = new Pet('Fido')
        pet.growUp();
        expect(pet.fitness).toEqual(7);
        pet.walk();
        expect(pet.fitness).toEqual(10);
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(5);
        pet.walk();
        pet.walk();
        pet.walk();
        pet.walk();
        expect(pet.fitness).toEqual(10);
    })
});


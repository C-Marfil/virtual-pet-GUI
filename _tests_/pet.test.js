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
describe('The use of the feedASnack function', () => {
    it('Checks that a snack lowers hunger by 3 and is never below 0', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.growUp();
        pet.feedASnack();
        expect(pet.hunger).toEqual(12);
        pet.feedASnack();
        pet.feedASnack();
        pet.feedASnack();
        pet.feedASnack();
        pet.feedASnack();
        expect(pet.hunger).toEqual(0);
    })
})
describe('The use of the checkup function', () => {
    it('It tells you when it is hungry, low fitness, both or ok', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.growUp();
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
        const pet1 = new Pet('Fido');
        pet1.growUp();
        pet1.growUp();
        pet1.feedASnack();
        pet1.feedASnack();
        pet1.feedASnack();
        pet1.feedASnack();
        expect(pet1.checkUp()).toBe('I need a walk')
        const pet2 = new Pet('Fido');
        pet2.growUp();
        expect(pet2.checkUp()).toBe('I am hungry')
        const pet3 = new Pet('Fido');
        pet3.feedASnack();
        expect(pet3.checkUp()).toBe('I feel great!')


    })
})
describe('The getter isAlive', () => {
    it('returns if pet is alive', () => {
        const pet = new Pet('fido');
        expect(pet.isAlive).toBe(true);
        const pet1 = new Pet('Poo');
        pet1.age = 30;
        pet1.feedAPizza();
        pet1.PTSession();
        expect(pet1.isAlive).toBe(false);
        const pet2 = new Pet('Sorra')
        pet2.age = 20;
        pet2.fitness = 0;
        pet2.feedAPizza();
        expect(pet2.isAlive).toBe(false);
        const pet3 = new Pet('Luju');
        pet3.age = 29;
        pet3.hunger = 10;
        pet3.PTSession();
        expect(pet3.isAlive).toBe(false);
    })
})

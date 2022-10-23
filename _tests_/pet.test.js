const Pet = require('./src/pet');

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
    });
    it('Throws an error if dead', () =>{
        const pet1 = new Pet('lola');
        pet1.age = 30;
        expect(() => pet1.PTSession()).toThrow('Your pet is no longer alive BIATCH');
    });
});
describe('The use of the feedASnack & feedAPizza functions', () => {
    it('Checks that a snack lowers hunger by 3 and is never below 0', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
        pet.feedAPizza();
        pet.feedASnack();
        expect(pet.hunger).toEqual(0);
    });
    it('Checks the feedAPizza function', () => {
        const pet = new Pet('difo');
        pet.growUp();
        pet.feedAPizza();
        expect(pet.hunger).toBe(0);
    });
    it('Throws an error if dead', () =>{
        const pet = new Pet('lola');
        pet.age = 30;
        expect(() => pet.feedASnack()).toThrow('Your pet is no longer alive BIATCH');
    });
});
describe('The use of the checkup function', () => {
    it('It tells you when it is hungry, low fitness, both or ok', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.fitness = 5;
        expect(pet.checkUp()).toBe('I am hungry AND I need a walk')
        const pet1 = new Pet('Fido');
        pet1.age = 15;
        pet1.hunger = 0;
        pet1.fitness = 3;
        expect(pet1.checkUp()).toBe('I need a walk')
        const pet2 = new Pet('Fido');
        pet2.growUp();
        expect(pet2.checkUp()).toBe('I am hungry')
        const pet3 = new Pet('Fido');
        pet3.feedASnack();
        expect(pet3.checkUp()).toBe('I feel great!')
    })
    it('expects a dead err message if biatch is ded', () => {
        const biatch = new Pet('Biatch');
        biatch.age = 30;
        expect(() => biatch.checkUp()).toThrow('Your pet is no longer alive BIATCH')
    })
});
describe('The getter isAlive', () => {
    it('returns if pet is alive', () => {
        const pet = new Pet('fido');
        expect(pet.isAlive).toBe(true);
        const pet1 = new Pet('Poo');
        pet1.age = 30;
        expect(pet1.isAlive).toBe(false);
        const pet2 = new Pet('Sorra')
        pet2.age = 20;
        pet2.fitness = 0;
        expect(pet2.isAlive).toBe(false);
        const pet3 = new Pet('Luju');
        pet3.age = 29;
        pet3.PTSession();
        pet3.hunger = 10;
        expect(pet3.isAlive).toBe(false);
    })
});
describe('The act of having babies', () => {
    it('ADOPTION: Creates a new pet and adopts it as a child', () => {
        const parent = new Pet('Dave');
        const child = new Pet('Pololo');
        
        parent.adoptChild('Pololo');

        expect(parent.children).toBe('Pololo');
    })
    it('PREGNANCY: Actually has a baby', () =>{
        const parent = new Pet('Parent');

        parent.haveBaby('Polola');

        expect(parent.children[0].name).toBe('Polola');
        expect(parent.children[0]).toBeInstanceOf(Object);
    })
})

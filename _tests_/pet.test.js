const Pet = require('../src/pet');


describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('checks initial age of pet', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toBe(0);
    });
});
    describe('Declare Pets', () => {
        let pet;
        let parent;
        let child;
        beforeEach(() => {
            pet = new Pet('Fido');
            parent = new Pet('Pal');
            child = new Pet('Pololo');
        });
    describe('test the growUp function', () => {
        it('increments age of the pet by 1', () => {
            pet.growUp();
            
            expect(pet.age).toEqual(1);
        });
        it('checks how growUp modifies fitness and hunger', () => {
            pet.growUp();
            
            expect(pet.fitness).toEqual(7);
            expect(pet.hunger).toEqual(5);
           
            pet.growUp();
            
            expect(pet.fitness).toEqual(4);
            expect(pet.hunger).toEqual(10);
        });
    });
    describe('The use of the walk function', () => {
        it('increases fitness and should not be over 10', () => {
            pet.fitness = 10;
            pet.walk();
            expect(pet.fitness).toEqual(10);
        });
        it('Throws an error if dead', () =>{
            pet.age = 30;
            expect(() => pet.PTSession()).toThrow('Your pet is no longer alive!');
        });
    });
    describe('The use of the feedASnack & feedAPizza functions', () => {
        it('Checks that a snack lowers hunger by 3', () => {
            pet.hunger = 5;
            
            pet.feedASnack();
            
            expect(pet.hunger).toEqual(2);
        });
        it('feedAPizza method, which reduces hunger completely and can never be below 0', () => {
            pet.hunger = 5;
            
            pet.feedAPizza();
            
            expect(pet.hunger).toBe(0);
            
            pet.feedAPizza();

            expect(pet.hunger).toBe(0);
        });
        it('Throws an error if dead', () =>{
            pet.age = 30;

            expect(() => pet.feedASnack()).toThrow('Your pet is no longer alive!');
        });
    });
    describe('The use of the checkup function', () => {
        it('It tells you when it is hungry, low fitness, both or ok', () => {
            pet.fitness = 5;
            pet.hunger = 3;
            
            expect(pet.checkUp()).toBe('I am hungry AND I need a walk');
            
            pet.age = 15;
            pet.hunger = 0;
            pet.fitness = 3;
            
            expect(pet.checkUp()).toBe('I need a walk');
            
            pet.age = 0;
            pet.hunger = 5;
            pet.fitness = 10;

            expect(pet.checkUp()).toBe('I am hungry');
            
            pet.hunger = 0;
            pet.fitness = 10;

            expect(pet.checkUp()).toBe('I feel great!');
        });
        it('expects a dead err message if pet is dead', () => {
            pet.age = 30;

            expect(() => pet.checkUp()).toThrow('Your pet is no longer alive!');
        });
    });
    describe('The getter isAlive', () => {
        it('returns if pet is alive', () => {
            expect(pet.isAlive).toBe(true);
    
            pet.age = 30;
            
            expect(pet.isAlive).toBe(false);
            
            pet.age = 20;
            pet.fitness = 0;

            expect(pet.isAlive).toBe(false);

            pet.age = 29;
            pet.fitness = 10;
            pet.hunger = 10;

            expect(pet.isAlive).toBe(false);
        });
    });
    describe('The act of having babies', () => {
        it('ADOPTION: Creates a new pet and adopts it as a child', () => {
            parent.adoptChild('Pololo');

            expect(parent.children).toBe('Pololo');
        });
        it('PREGNANCY: Actually generates a baby', () =>{

            parent.haveBaby('Polola');

            expect(parent.children[0].name).toBe('Polola');
            expect(parent.children[0]).toBeInstanceOf(Object);
        });
    });
});
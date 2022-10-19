function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};
const A_YEAR = 1;
const SOFA_TIME = 3;
const FASTING = 5;

Pet.prototype.growUp = function(){
    this.age += A_YEAR;
    this.fitness -= SOFA_TIME;
    this.hunger += FASTING;
}
const MAXIMUM_FITNESS = 10;
const A_WORKOUT = 4;

Pet.prototype.walk = function(){
    this.fitness += A_WORKOUT;
    if(this.fitness > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    }
}

const pet = new Pet('Fido')

module.exports =  Pet;
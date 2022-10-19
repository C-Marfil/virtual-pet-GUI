// CONSTRUCTOR FOR PET OBJECTS //

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

// PROTOTYPE METHODS FOR PET OBJECTS //
//GROWING UP: It adds years and hunger. It reduces fitness.//

const A_YEAR = 1;
const SOFA_TIME = 3;
const FASTING = 5;

Pet.prototype.growUp = function(){
    this.age += A_YEAR;
    this.fitness -= SOFA_TIME;
    this.hunger += FASTING;
}

//WALK: It increases fitness up to 10 //

const MAXIMUM_FITNESS = 10;
const A_WORKOUT = 4;

Pet.prototype.walk = function(){
    this.fitness += A_WORKOUT;
    if(this.fitness > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    }
}

//FEEDASNACK: Reduces hunger by 3//

const MINIMUM_HUNGER = 0;
const A_SNACK = 3;

Pet.prototype.feedASnack = function(){
    this.hunger -= A_SNACK;
    if(this.hunger < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    }
}

const pet = new Pet('Fido')

module.exports =  Pet;
// CONSTRUCTOR FOR PET OBJECTS //

function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

//GETTERS//
//ISALIVE: Checks states to determine if pet is alive//

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  }

// PROTOTYPE METHODS FOR PET OBJECTS //
//GROWING UP: It adds years and hunger. It reduces fitness.//

const A_YEAR = 1;
const SOFA_TIME = 3;
const FASTING = 5;

Pet.prototype.growUp = function(){
    this.age += A_YEAR;
    this.fitness -= SOFA_TIME;
    this.hunger += FASTING;
    if(this.fitness <= 0) {
        this.fitness = 0;
    }
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
Pet.prototype.PTSession = function(){
    this.fitness = MAXIMUM_FITNESS;
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
Pet.prototype.feedAPizza = function(){
    this.hunger = MINIMUM_HUNGER;
}

//CHECKUP: Tells you if your pet needs food, a walk or if it's ok//

const HUNGER_DANGER = 3;
const FITNESS_DANGER = 5;

Pet.prototype.checkUp = function(){
    if(this.fitness <= FITNESS_DANGER && this.hunger >= HUNGER_DANGER) {
        return 'I am hungry AND I need a walk';
    } else if(this.fitness <= FITNESS_DANGER) {
        return 'I need a walk';
    } else if(this.hunger >= HUNGER_DANGER) {
        return 'I am hungry';
    } else { 
        return 'I feel great!';
    }
}


module.exports =  Pet;
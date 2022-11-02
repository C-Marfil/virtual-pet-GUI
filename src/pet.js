// CONSTRUCTOR FOR PET OBJECTS //
const PET_IS_BORN = 0;
const MAXIMUM_HUNGER = 10;
const MINIMUM_FITNESS = 0;

function Pet(name) {
    this.name = name;
    this.age = PET_IS_BORN;
    this.hunger = MINIMUM_HUNGER;
    this.fitness = MAXIMUM_FITNESS;
    this.children = [];
};
//GETTERS//
//ISALIVE: Checks states to determine if pet is alive//

const LIFESPAN = 30;

Pet.prototype = {
    get isAlive() {
      return this.age < LIFESPAN && this.hunger < MAXIMUM_HUNGER && this.fitness > MINIMUM_FITNESS;
    },
  };

// PROTOTYPE METHODS FOR PET OBJECTS //
//GROWING UP: It adds years and hunger. It reduces fitness.//

const A_YEAR = 1;
const SOFA_TIME = 3;
const FASTING = 5;

Pet.prototype.growUp = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    this.age += A_YEAR;
    this.fitness -= SOFA_TIME;
    this.hunger += FASTING;
    if(this.fitness <= MINIMUM_FITNESS) {
        this.fitness = MINIMUM_FITNESS;
    };
};

//WALK: It increases fitness up to 10 //

const MAXIMUM_FITNESS = 10;
const A_WORKOUT = 4;

Pet.prototype.walk = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    this.fitness += A_WORKOUT;
    if(this.fitness > MAXIMUM_FITNESS) {
        this.fitness = MAXIMUM_FITNESS;
    };
}
Pet.prototype.PTSession = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    this.fitness = MAXIMUM_FITNESS;
};

/* FEEDASNACK: Reduces hunger by 3
FEEDAPIZZA: Reduces hunger to 0 */

const MINIMUM_HUNGER = 0;
const A_SNACK = 3;

Pet.prototype.feedASnack = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    this.hunger -= A_SNACK;
    if(this.hunger < MINIMUM_HUNGER) {
        this.hunger = MINIMUM_HUNGER;
    };
};

Pet.prototype.feedAPizza = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    this.hunger = MINIMUM_HUNGER;
};

//CHECKUP: Tells you if your pet needs food, a walk or if it's ok//

const HUNGER_DANGER = 3;
const FITNESS_DANGER = 5;

Pet.prototype.checkUp = function(){
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive!');
    };

    if(this.fitness <= FITNESS_DANGER && this.hunger >= HUNGER_DANGER) {
        return 'I am hungry AND I need a walk';
    } else if(this.fitness <= FITNESS_DANGER) {
        return 'I need a walk';
    } else if(this.hunger >= HUNGER_DANGER) {
        return 'I am hungry';
    } else { 
        return 'I feel great!';
    };
};

//ADOPT A CHILD: The parent pet adopts another existing pet. //

Pet.prototype.adoptChild = function(childToBe) {
    this.children += childToBe;
};

//PREGNANCY: Actually have a baby that is the same instance as parent. //

Pet.prototype.haveBaby = function(name) {
     this.children.push(new Pet(name));
};

module.exports =  Pet;
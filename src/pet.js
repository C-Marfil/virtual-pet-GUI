function Pet(name) {
    this.name = name;
    this.age = 0;
};

Pet.prototype.growUp = function(numberOfYears){
    this.age += numberOfYears;
}

const pet = new Pet('Fido', 0)

module.exports =  Pet;
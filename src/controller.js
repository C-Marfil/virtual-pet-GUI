(function exportController() {
    function Controller (pet) {
        this.pet = pet;
        
};
Controller.prototype = {
    lowerFitness() {
        const getFitness = document.getElementById('fitness');
        let getFitnessStyle = getFitness.style;
        
        if (this.pet.fitness === 10) {
            getFitnessStyle.backgroundImage = `url('../images/10fitness.png')`;
        };
        if (this.pet.fitness === 7) {
            getFitnessStyle.backgroundImage = `url('../images/7fitness.png')`;
        };
        if (this.pet.fitness === 4) {
            getFitnessStyle.backgroundImage = `url('../images/4fitness.png')`;
        };
        if (this.pet.fitness === 1) {
            getFitnessStyle.backgroundImage = `url('../images/1fitness.png')`;
        };
        if (this.pet.isAlive === false) {
            getFitnessStyle.backgroundImage = `url('../images/death.png')`;
            getFitnessStyle.backgroundSize = '100%';
        };
        },

    lowerHunger() {
        const getHunger = document.getElementById('hunger');
        let getHungerStyle = getHunger.style;
        if (this.pet.hunger === 0) {
                getHungerStyle.backgroundImage = `url('../images/0hunger.png')`;
        };
        if (this.pet.hunger === 3) {
                getHungerStyle.backgroundImage = `url('../images/3hunger.png')`;
        };
        if (this.pet.hunger === 6) {
                getHungerStyle.backgroundImage = `url('../images/6hunger.png')`;
        };
        if (this.pet.hunger === 9) {
                getHungerStyle.backgroundImage = `url('../images/9hunger.png')`;
        };
        if (this.pet.isAlive === false) {
                getHungerStyle.backgroundImage = `url('../images/death.png')`;
                getHungerStyle.backgroundSize = '100%';
        };
        },

    renderMessage(message) {
        const newMessageElement = document.createElement('div');
        const divMessage = document.querySelector('#divMessage');
        newMessageElement.id = 'message';
        newMessageElement.innerHTML = message;

        divMessage.appendChild(newMessageElement);
        setTimeout(() => {
            divMessage.removeChild(newMessageElement);
        }, 3000);
    },

initialisePet() {
const pet = this.pet;
const intervalGrow = window.setInterval(() => {
    if(pet.isAlive === false){
        window.clearInterval(intervalGrow);
    };
    console.log('I am growing');
    this.renderMessage(`Your pet is now ${pet.age} years old!`);
    pet.growUp();
    this.lowerFitness();
    this.lowerHunger();
}, 5000);
},
};
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
    } else {
     window.Controller = Controller;
    };
}());





// const sprites = [
//     'images/pet.png',
//     'images/pet0.png',
// ];
// let backgroundIndex = 0;
// const pet = this.pet;
// const newPetElement = document.createElement('div');
// const newDivPet = document.querySelector('#divPet');
// newPetElement.id = 'pet';

// newDivPet.appendChild(newPetElement);

// document.querySelector('#pet').style.backgroundImage = `url('${sprites[backgroundIndex % sprites.length]}')`;
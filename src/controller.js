(function exportController() {
    function Controller (pet) {
        this.pet = pet;
        this.initialisePet();
        
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
    this.pet.growUp();
    this.lowerFitness();
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
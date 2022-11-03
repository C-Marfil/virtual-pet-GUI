(function exportController() {
    function Controller (pet) {
        this.pet = pet;

        document.querySelector('#feed-button').addEventListener('click', () => {
            let getPetImg = document.getElementById('pet');

            this.pet.feedASnack();
            this.lowerHunger();
            if (this.pet.evolved === true) {
            getPetImg.src = 'images/EvoFood.png';
            };
            if (this.pet.evolved === false) {
            getPetImg.src = 'images/SnackPet.png';
            };
        });
        document.querySelector('#exercise-button').addEventListener('click', () => {
            let getPetImg = document.getElementById('pet');
            
            this.pet.PTSession();
            this.lowerFitness();
            
            if (this.pet.evolved === false) {
            getPetImg.src = 'images/PTPet.png';
            };
            if (this.pet.evolved === true) {
            getPetImg.src = 'images/EvoPT.png';
            };
        });
        document.querySelector('#feed-pizza').addEventListener('click', () => {
            let getPetImg = document.getElementById('pet');
            
            this.pet.feedAPizza();
            this.lowerHunger();

            if (this.pet.evolved === true) {
            getPetImg.src = 'images/EvoFood.png';
            };
            if (this.pet.evolved === false) {
            getPetImg.src = 'images/PizzaPet.png';
            };
        });
        document.querySelector('#train').addEventListener('click', () => {
            let getPetImg = document.getElementById('pet');
            
            this.pet.walk();
            this.lowerFitness();
            
            if (this.pet.evolved === false) {
            getPetImg.src = 'images/SportPet.png';
            };
            if (this.pet.evolved === true) {
            getPetImg.src = 'images/EvoPT.png';
            };
        });
        document.querySelector('#evolve').addEventListener('click', () => {
            let getPetImg = document.getElementById('pet');

            if(this.pet.age < 15) {
                this.renderMessage(`Your pet is too young!`)
            };
            if (this.pet.age >= 15) {
                getPetImg.src = 'images/Evolution.png';
                this.pet.isEvolved;
            };
        });
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
        
        console.log('I am growing');
        this.renderMessage(`Your pet is now ${pet.age} years old!`);
        pet.growUp();
        this.lowerFitness();
        this.lowerHunger();
        if(pet.isAlive === false){
            window.clearInterval(intervalGrow);
            this.renderMessage(`Your pet JUST DROPPED DEAD!`);
        };
    }, 5000);
    },
    };
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
    } else {
     window.Controller = Controller;
    };
}());
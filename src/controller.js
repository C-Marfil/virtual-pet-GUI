(function exportController() {
  let nightMode = false;

  class Controller {
    constructor(pet) {
      this.pet = pet;

      document.querySelector("#button-snack").addEventListener("click", () => {
        let getPetImg = document.getElementById("pet");

        this.pet.feedASnack();
        this.lowerHunger();

        if (this.pet.evolved === true) {
          getPetImg.src = "images/EvoFood.png";
        }
        if (this.pet.evolved === false) {
          getPetImg.src = "images/SnackPet.png";
        }
      });

      document.querySelector("#button-pt").addEventListener("click", () => {
        let getPetImg = document.getElementById("pet");

        this.pet.PTSession();
        this.lowerFitness();

        if (this.pet.evolved === false) {
          getPetImg.src = "images/PTPet.png";
        }
        if (this.pet.evolved === true) {
          getPetImg.src = "images/EvoPT.png";
        }
      });

      document.querySelector("#button-pizza").addEventListener("click", () => {
        let getPetImg = document.getElementById("pet");

        this.pet.feedAPizza();
        this.lowerHunger();

        if (this.pet.evolved === true) {
          getPetImg.src = "images/EvoFood.png";
        }
        if (this.pet.evolved === false) {
          getPetImg.src = "images/PizzaPet.png";
        }
      });

      document.querySelector("#button-exercise").addEventListener("click", () => {
        let getPetImg = document.getElementById("pet");

        this.pet.walk();
        this.lowerFitness();

        if (this.pet.evolved === false) {
          getPetImg.src = "images/SportPet.png";
        }
        if (this.pet.evolved === true) {
          getPetImg.src = "images/EvoPT.png";
        }
      });

      document.querySelector("#button-evo").addEventListener("click", () => {
        let getPetImg = document.getElementById("pet");

        if (this.pet.age < 15) {
          this.renderMessage(`Your pet is too young!`);
        }
        if (this.pet.age >= 15) {
          getPetImg.src = "images/Evolution.png";
          this.pet.isEvolved;
        }
      });

      document
        .querySelector("#button-nightmode")
        .addEventListener("click", (event) => {
          const getComputer = document.querySelector("#computer");
          const getButton = document.querySelector("#button-nightmode");

          if (!nightMode) {
            getComputer.src = `images/nightTimeComputer.png`;
            getButton.innerHTML = "ZZZ";
            nightMode = true;
          } else {
            getComputer.src = `images/dayTimeComputer.png`;
            getButton.innerHTML = "DAY";
            nightMode = false;
          }
        });
    }
    
    lowerFitness() {
      const getFitness = document.getElementById("fitness");
      const getFitnessStyle = getFitness.style;
      const { fitness, isAlive } = this.pet;
    
      const fitnessImages = {
        10: `url('../images/10fitness.png')`,
        7: `url('../images/7fitness.png')`,
        4: `url('../images/4fitness.png')`,
        1: `url('../images/1fitness.png')`,
      };
    
      if (fitnessImages[fitness]) {
        getFitnessStyle.backgroundImage = fitnessImages[fitness];
      }
    
      if (isAlive === false) {
        getFitnessStyle.backgroundImage = `url('../images/death.png')`;
        getFitnessStyle.backgroundSize = "100%";
      }
    }
  
    lowerHunger() {
      const getHunger = document.getElementById("hunger");
      let getHungerStyle = getHunger.style;

      if (this.pet.hunger === 0) {
        getHungerStyle.backgroundImage = `url('../images/0hunger.png')`;
      }
      if (this.pet.hunger === 3) {
        getHungerStyle.backgroundImage = `url('../images/3hunger.png')`;
      }
      if (this.pet.hunger === 6) {
        getHungerStyle.backgroundImage = `url('../images/6hunger.png')`;
      }
      if (this.pet.hunger === 9) {
        getHungerStyle.backgroundImage = `url('../images/9hunger.png')`;
      }
      if (this.pet.isAlive === false) {
        getHungerStyle.backgroundImage = `url('../images/death.png')`;
        getHungerStyle.backgroundSize = "100%";
      }
    }

    renderMessage(message) {
      const newMessageElement = document.createElement("div");
      const divMessage = document.querySelector("#divMessage");

      newMessageElement.id = "message";
      newMessageElement.innerHTML = message;
      divMessage.appendChild(newMessageElement);

      setTimeout(() => {
        divMessage.removeChild(newMessageElement);
      }, 3000);
    }

    initialisePet() {
      const pet = this.pet;
      let getPetImg = document.getElementById("pet");
      const intervalGrow = window.setInterval(() => {
        if (pet.age === 1) {
          this.renderMessage(`Your pet is now ${pet.age} year old!`);
        } else if (pet.age === 0) {
          this.renderMessage(`Your pet is ALIVE!`);
        } else {
          this.renderMessage(`Your pet is now ${pet.age} years old!`);
        }

        pet.growUp();
        this.lowerFitness();
        this.lowerHunger();

        if (pet.isAlive === false) {
          window.clearInterval(intervalGrow);
          getPetImg.src = "images/death.png";
          this.renderMessage(`Your pet JUST DROPPED DEAD!`);
          getPetImg.style.width = "40%";
        }
      }, 5000);
    }
  }


  if (typeof module !== "undefined" && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
})();

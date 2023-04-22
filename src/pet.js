(function exportPet() {
  const STARTING_AGE = 0;
  const LIFESPAN = 30;
  const MAXIMUM_FITNESS = 10;
  const MAXIMUM_HUNGER = 10;
  const MINIMUM_HUNGER = 0;
  const MINIMUM_FITNESS = 0;
  const HUNGER_DANGER = 3;
  const FITNESS_DANGER = 5;
  const FITNESS_REDUCED_BY_GROWTH = 3;
  const HUNGER_INCREASED_BY_GROWTH = 3;
  const SMALL_FITNESS_INCREASE = 4;

  class Pet {
    constructor(name) {
      this.name = name;
      this.age = STARTING_AGE;
      this.hunger = MINIMUM_HUNGER;
      this.fitness = MAXIMUM_FITNESS;
      this.children = [];
      this.evolved = false;
    }
    get isAlive() {
      return (
        this.age < LIFESPAN &&
        this.hunger < MAXIMUM_HUNGER &&
        this.fitness > MINIMUM_FITNESS
      );
    }
    get isEvolved() {
      return (this.evolved = true);
    }

    growUp() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      this.age += 1;
      this.hunger = Math.max(
        (this.hunger += HUNGER_INCREASED_BY_GROWTH),
        MINIMUM_HUNGER
      );
      this.fitness = Math.max(
        (this.fitness -= FITNESS_REDUCED_BY_GROWTH),
        MINIMUM_FITNESS
      );
    }
    walk() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      this.fitness = Math.min(
        (this.fitness += SMALL_FITNESS_INCREASE),
        MAXIMUM_FITNESS
      );
    }
    PTSession() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      this.fitness = MAXIMUM_FITNESS;
    }
    feedASnack() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      this.hunger = Math.min(
        (this.hunger -= HUNGER_INCREASED_BY_GROWTH),
        MAXIMUM_HUNGER
      );
    }
    feedAPizza() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      this.hunger = MINIMUM_HUNGER;
    }
    checkUp() {
      if (!this.isAlive) {
        throw new Error("Your pet is no longer alive!");
      }

      if (this.fitness <= FITNESS_DANGER && this.hunger >= HUNGER_DANGER) {
        return "I am hungry AND I need a walk";
      } else if (this.fitness <= FITNESS_DANGER) {
        return "I need a walk";
      } else if (this.hunger >= HUNGER_DANGER) {
        return "I am hungry";
      } else {
        return "I feel great!";
      }
    }
    adoptChild(childToBe) {
      this.children += childToBe;
    }
    haveBaby(name) {
      this.children.push(new Pet(name));
    }
  }










  if (typeof module !== "undefined" && module.exports) {
    module.exports = Pet;
  } else {
    window.Pet = Pet;
  }
})();

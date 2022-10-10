class SmartHike {
  constructor(username) {
    this.username = username;
    this.goals = {};
    this.listOfHikes = [];
    this.resources = 100;
  }
  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      this.goals[peak] = altitude;
      return `${peak} has already been added to your goals`;
    } else {
      this.goals[peak] = altitude;
      return `You have successfully added a new goal - ${peak}`;
    }
  }
  hike(peak, time, difficultyLevel) {
    this.time = Number(time);

    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }
    if (this.goals.hasOwnProperty(peak) && this.resources == 0) {
      throw new Error("You don't have enough resources to start the hike");
    }
    let percentage = time * 10;
    let difference = (this.resources - percentage) * 10;
    difference -= percentage;
    this.resources -= percentage;

    if (difference < 0) {
      return "You don't have enough resources to complete the hike";
    } else {
      this.listOfHikes.push({ peak, time, difficultyLevel });
      return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
    }
  }
  rest(time) {
    time = Number(time);
    let restTime = time * 10;
    this.resources += restTime;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    } else {
      return `You have rested for ${time} hours and gained ${
        time * 10
      }% resources`;
    }
  }
  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }
    if (criteria === "all") {
      this.listOfHikes.forEach((el) => {
        console.log("All hiking records:");
        `${this.username} hiked ${el[0]} for ${el[1]} hours`;
      });
    }
  }
}

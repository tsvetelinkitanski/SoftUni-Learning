class SummerCamp {
  constructor(organizer, location) {
    this.organizer = organizer;
    this.location = location;
    this.priceForTheCamp = {
      child: 150,
      student: 300,
      collegian: 500,
    };
    this.listOfParticipants = [];
  }

  registerParticipant(name, condition, money) {
    if (
      condition !== "child" &&
      condition !== "student" &&
      condition !== "collegian"
    ) {
      throw new Error("Unsuccessful registration at the camp.");
    }

    let currItem = this.listOfParticipants.find((v) => v.name === name);

    if (!currItem) {
      if (money < this.priceForTheCamp[condition]) {
        return `The money is not enough to pay the stay at the camp.`;
      } else {
        this.listOfParticipants.push({
          name,
          condition,
          power: 100,
          wins: 0,
        });
        return `The ${name} was successfully registered.`;
      }
    } else {
      return `The ${name} is already registered at the camp.`;
    }
  }
  unregisterParticipant(name) {
    let currName = this.listOfParticipants.find((p) => p.name === name);

    if (!currName) {
      throw new Error(`The ${name} is not registered in the camp.`);
    }

    this.listOfParticipants = this.listOfParticipants.filter(
      (p) => p.name !== name
    );

    return `The ${name} removed successfully.`;
  }
  timeToPlay(typeOfGame, participant1, participant2) {
    if (typeOfGame === "WaterBalloonFights") {
      let firstPlayer = this.listOfParticipants.find(
        (p) => p.name === participant1
      );
      let secondPlayer = this.listOfParticipants.find(
        (p) => p.name === participant2
      );

      if (!firstPlayer || !secondPlayer) {
        throw new Error(`Invalid entered name/s.`);
      } else {
        if (firstPlayer.condition !== secondPlayer.condition) {
          throw new Error(`Choose players with equal condition.`);
        }
      }
      if (firstPlayer.power > secondPlayer.power) {
        firstPlayer.wins++;
        return `The ${firstPlayer.name} is winner in the game ${typeOfGame}.`;
      } else if (secondPlayer.power > firstPlayer.power) {
        secondPlayer.wins++;
        return `The ${secondPlayer.name} is winner in the game ${typeOfGame}.`;
      } else {
        return `There is no winner.`;
      }
    } else if (typeOfGame === "Battleship") {
      let player = this.listOfParticipants.find((p) => p.name === participant1);
      if (!player) {
        throw new Error(`Invalid entered name/s.`);
      }
      player.power += 20;
      return `The ${player.name} successfully completed the game ${typeOfGame}.`;
    }
  }
  toString() {
    let buff = [];
    buff.push(
      `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
    );
    this.listOfParticipants
      .sort((a, b) => b.wins - a.wins)
      .forEach((p) => {
        buff.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`);
      });
    return buff.join("\n");
  }
}

const summerCamp = new SummerCamp(
  "Jane Austen",
  "Pancharevo Sofia 1137, Bulgaria"
);
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(
//   summerCamp.timeToPlay(
//     "WaterBalloonFights",
//     "Petar Petarson",
//     "Sara Dickinson"
//   )
// );
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(
  summerCamp.timeToPlay(
    "WaterBalloonFights",
    "Petar Petarson",
    "Dimitur Kostov"
  )
);

console.log(summerCamp.toString());

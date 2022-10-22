class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let splittedPlayers = [];
    for (const player of footballPlayers) {
      splittedPlayers.push(player);
    }
    splittedPlayers.forEach((p) => {
      let [name, age, playerValue] = p.split("/");
      let currPlayer = this.invitedPlayers.find((v) => v.name === name);

      if (!currPlayer) {
        this.invitedPlayers.push({
          name,
          age: Number(age),
          playerValue: Number(playerValue),
        });
      } else {
        if (playerValue > currPlayer.playerValue) {
          currPlayer.playerValue += playerValue;
        }
      }
    });
    let buff = [];
    this.invitedPlayers.forEach((player) => {
      if (!buff.includes(player.name)) {
        buff.push(player.name);
      }
    });

    return `You successfully invite ${buff.join(", ")}.`;
  }
  signContract(selectedPlayer) {
    let splittedStr = selectedPlayer.split("/");
    let name = splittedStr[0];
    let playerOffer = splittedStr[1];
    let currPlayer = this.invitedPlayers.find((v) => v.name === name);

    if (!currPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (playerOffer < currPlayer.playerValue) {
      let priceDifference = currPlayer.playerValue - playerOffer;
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`
      );
    }
    if (playerOffer > currPlayer.playerValue) {
      currPlayer.playerValue = "Bought";
      return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`;
    }
  }
  ageLimit(name, age) {
    let currPlayer = this.invitedPlayers.find((v) => v.name === name);
    if (!currPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }
    if (currPlayer && currPlayer.age < age) {
      let dif = age - currPlayer.age;
      if (dif < 5) {
        return `${name} will sign a contract for ${dif} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else if (currPlayer.age > age) {
      return `${name} is above age limit!`;
    }
  }
  transferWindowResult() {
    let buff = [];
    buff.push("Players list:");

    this.invitedPlayers
      .sort((a, b) => a.name.localeCompare(b))
      .forEach((player) => {
        buff.push(`Player ${player.name}-${player.playerValue}`);
      });
    return buff.join("\n");
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(
  fTeam.newAdditions([
    "Kylian Mbappé/23/160",
    "Lionel Messi/35/50",
    "Pau Torres/25/52",
  ])
);
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

function song(data) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = data.shift();
  let typeOfSong = data.pop();

  data.forEach((el) => {
    let [type, name, time] = el.split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  });
  if (typeOfSong === "all") {
    songs.forEach((el) => console.log(el.name));
  } else {
    let filtered = songs.filter((el) => el.type === typeOfSong);
    filtered.forEach((el) => console.log(el.name));
  }
}
song([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

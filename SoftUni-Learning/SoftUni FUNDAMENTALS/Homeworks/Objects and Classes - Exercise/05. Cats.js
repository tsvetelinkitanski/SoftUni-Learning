function cat(data) {
  let cats = [];
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  data.forEach((element) => {
    let [name, age] = element.split(" ");
    let myCat = new Cat(name, age);
    // cats.push(new Cat(name, age));
    cats.push(myCat);
  });
  cats.forEach((el) => {
    el.meow();
  });

}
cat(["Mellow 2", "Tom 5"]);

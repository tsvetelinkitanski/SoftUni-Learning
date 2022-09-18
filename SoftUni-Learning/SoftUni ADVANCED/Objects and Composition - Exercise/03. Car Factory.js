function carFactory(obj) {
  if (obj.carriage === "hatchback") {
    obj.carriage = { type: "hatchback", color: obj.color };
    delete obj.color;
  } else if (obj.carriage === "coupe") {
    obj.carriage = { type: "coupe", color: obj.color };
    delete obj.color;
  }
  obj.engine = {};
  if (obj.power > 0 && obj.power <= 90) {
    (obj.engine.power = obj.engine.power = 90), (obj.engine.volume = 1800);
  } else if (obj.power > 90 && obj.power <= 120) {
    (obj.engine.power = obj.engine.power = 120), (obj.engine.volume = 2400);
  } else if (obj.power > 120 && obj.power <= 200) {
    (obj.engine.power = obj.engine.power = 200), (obj.engine.volume = 3500);
  }
  delete obj.power;

  let size = Number(obj.wheelsize);
  if (size % 2 === 0) {
    size -= 1;
  }
  delete obj.wheelsize;
  obj.wheels = [];
  for (let index = 0; index < 4; index++) {
    obj.wheels.push(size);
  }

  return obj;
}
console.table(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);

console.log("00000000");

console.table(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

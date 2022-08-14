function personInfo(name, lastName, age) {
  let info = {
    firstName: name,
    lastName,
    age: +age,
  };

  return info;
}
personInfo("Peter", "Pan", "20");

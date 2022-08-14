function convertToJson(firstName, lastName, hairColor) {
  let personType = {
   name: firstName,
    lastName,
    hairColor,
  };
  console.log(JSON.stringify(personType));
}
convertToJson("George", "Jones", "Brown");

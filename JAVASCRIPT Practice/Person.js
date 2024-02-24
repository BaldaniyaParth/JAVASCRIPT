let person = {
    name : "Parth",
    age : 22,
    city : "Surat"
}

console.log(person.name);
console.log(person["age"]);
console.log(person.city);

console.log(person);


person.city = "New York";
person.country = "United States";

console.log(person.city);
console.log(person.country);

console.log(person);
let one = {
    name : "Parth",
    age : 22
}

let two = {
    email : "parthbaldaniya35678",
    password : "parth123"
}

let margeObject = (obj1 , obj2) => ({
    ...obj1, ...obj2
})

console.log(margeObject(one, two));

let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

// function getAge(pet) {
//     pets new Date().getFullYear()-bornOn;
//   }


const getAge = pet => new Date().getFullYear() - pet.bornOn;

// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   pet.age = getAge(pet);

//   petsWithAge.push(pet);
// }



// const petsWithAge = pets.map(pet =>{age:getAge(pet).pet});


// console.log(petsWithAge);


let petsWithAge = [];
pets.forEach(pet => {
    pet.age = getAge(pet)


    petsWithAge.push(pet)
});
// an other change lets commit
console.log(petsWithAge);

// let dogs = [];
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.type === "dog") {
//     dogs.push(pet);
//   }
// }
// console.log(dogs);

let dog = pets.filter(pet => pet.type === 'dog');

console.log(dog);

// var jasper;
// for (var i = 0; i < pets.length; i++) {
//   var pet = pets[i];
//   if (pet.name === "Jasper") {
//     jasper = pet;
//   }
// }


let jasper = pets.find(pet => pet.name === 'Jasper');

console.log(`Jasper is ${jasper.age} years old`);

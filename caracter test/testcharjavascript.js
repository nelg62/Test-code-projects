// person details object
let person = {
   firstName: '',
   lastName: '',
   age: '',
   animal: '',
   diceroll: '',
}

// firstname input text store to person object 
function personname() {
   Object.defineProperty(person, 'firstName', { value: document.getElementById('personnameinput').value });
}

// lastname input text store to person object
function lastname() {
   Object.defineProperty(person, 'lastName', { value: document.getElementById('lastnameinput').value });
}

// when button 2 pressed call Person object lastname
function namebutton() {
   document.getElementById('nameofperson').innerHTML = `Welcome: ${person.firstName} ${person.lastName}`;
   document.getElementById('chooseanimalsection').style.display = 'block'
}

// choose an animal
function chosenanimal() {
   Object.defineProperty(person, 'animal', { value: document.getElementById('chooseanimal').value })
}

function animalbutton() {
   document.getElementById('animalchoice').innerHTML = `You have chosen: ${person.animal}`;
   document.getElementById('Dicerollsection').style.display = 'block'
}

// roll a dice get a random number between 1 and 6
function randomnumber() {
   Object.defineProperty(person, 'diceroll', { value: Math.floor(Math.random() * 6) + 1 });
   document.getElementById('dicevalue').innerHTML = person.diceroll
}
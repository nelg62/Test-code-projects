// data from from into variable
const form = document.querySelector('form');

// variable for id number
let itmlgth = 1

// create a constructor for person object 
class Person {
    constructor(first, last, animal, food) {
        this.first = first
        this.last = last
        this.animal = animal
        this.food = food
    }
}

// container object for person constructor 
const newPeople = []

// when data from from is submited 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);


    // add the data from from to ul with ID addItems
    document.querySelector('#addItems').innerHTML += 
    `<li class="listitem">
    <div>${itmlgth++}</div>
    <div>First Name: ${formData.get("firstName")}</div> 
    <div>Last Name: ${formData.get("lastName")}</div> 
    <div>Animal: ${formData.get("animalchoice")}</div>
    <div>Food: ${formData.getAll("foodoption")}</div>
    <button onclick="removecurrentitem(this)">Remove</button>
    </li>`

    // push data from form into newPeople object 
   newPeople.push(new Person(formData.get("firstName"), formData.get("lastName"), formData.get("animalchoice"), formData.getAll("foodoption")))

    console.log(newPeople)

})


// function to remove current item when clicking remove button 
function removecurrentitem(e) {
    e.parentNode.parentNode.removeChild(e.parentNode)
}
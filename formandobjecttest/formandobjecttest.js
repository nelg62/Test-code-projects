// find the form and link to variable form
const form = document.querySelector('form');


// function for listening to clicking submit button in form 
form.addEventListener('submit', (e) => {
    e.preventDefault();                              //prevent default action of button refreshing page 
    const formData = new FormData(form);

    let foodchoice = [];                              //create object for checkboxes

    // find checkboxes by name and add them to the object foodchoice
    document.querySelectorAll('[name="foodoption"]').forEach(item => {
        if (item.checked === true) {
            foodchoice.push(item.value);
        }
    })

    // stringafy foodcoice object and append to formData object with key FoodChoices
    formData.append('FoodChoices', JSON.stringify(foodchoice))

    // make from array of arrays to object
    const obj = Object.fromEntries(formData);

    console.log(obj)
    console.log(Array.from(formData))


    // get amout of options chosen from checkbox 
    foodobjleng = JSON.parse(obj.FoodChoices).length


    // create HTML elements withobjects data
    document.getElementById('userdata').innerHTML = `
    <p>your name is ${obj.fname} ${obj.lname}</p>
    <p>your password is ${obj.pwd}</p>
    <p>your email is ${obj.eml}</p>
    <p>you have chosen ${obj.animalchoice}</p>
    <p>your meals will be</p>
    <ul id="foodlist">
    </ul>`

    // create list items in HTML based on what is selected 
    for (let i = 0; i < foodobjleng; i++) {
        document.getElementById('foodlist').innerHTML += `
        <li>${JSON.parse(obj.FoodChoices)[i]}</li>`
    }
})


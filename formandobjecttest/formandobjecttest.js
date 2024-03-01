const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    let foodchoice = [];

    document.querySelectorAll('[name="foodoption"]').forEach(item => {
        if (item.checked === true) {
            foodchoice.push(item.value);
        }
    })
    
    formData.append('FoodChoices', JSON.stringify(foodchoice))
    
    const obj = Object.fromEntries(formData);

    console.log(obj)
    console.log(Array.from(formData))

    document.getElementById('userdata').innerHTML = `
    <p>your name is ${obj.fname} ${obj.lname}</p>
    <p>your password is ${obj.pwd}</p>
    <p>your email is ${obj.eml}</p>
    <p>you have chosen ${obj.animalchoice}</p>
    <p>your meals will be ${JSON.parse(obj.FoodChoices)}</p>`
})


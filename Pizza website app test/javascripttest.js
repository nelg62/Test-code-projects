const form = document.querySelector('#makepizzaoptions');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fd = new FormData(form);

    let topping = [];
    let drinks = [];
    let side = [];
    let dessert = [];

    document.querySelectorAll('[name="topping"]').forEach(item => {

        if(item.checked === true) {
            topping.push(item.value);
        }
    })

    document.querySelectorAll('[name="side"]').forEach(item => {

        if(item.checked === true) {
            side.push(item.value);
        }
    })

    document.querySelectorAll('[name="drink"]').forEach(item => {

        if(item.checked === true) {
            drinks.push(item.value);
        }
    })

    document.querySelectorAll('[name="dessert"]').forEach(item => {

        if(item.checked === true) {
            dessert.push(item.value);
        }
    })

    fd.append('toppings', JSON.stringify(topping));

    fd.append('sides', JSON.stringify(side));

    fd.append('drinks', JSON.stringify(drinks));

    fd.append('desserts', JSON.stringify(dessert));

    console.log(Object.fromEntries(fd));

    console.log(Array.from(fd));
})





// ref https://openjavascript.info/2022/12/13/get-checked-checkbox-values-from-html-form-with-javascript/
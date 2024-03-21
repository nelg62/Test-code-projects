const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    document.querySelector('#addItems').innerHTML += `<li class="listitem">First Name: ${formData.get("firstName")} Last Name: ${formData.get("lastName")} <button onclick="removecurrentitem(this)">Remove</button></li>`

})



function removecurrentitem(e) {
    e.parentNode.parentNode.removeChild(e.parentNode)
}
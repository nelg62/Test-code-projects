const form = document.querySelector('form');

let itmlgth = 1

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    
    
    document.querySelector('#addItems').innerHTML += 
    `<li class="listitem">
    <div>${itmlgth++}</div>
    <div>First Name: ${formData.get("firstName")}</div> 
    <div>Last Name: ${formData.get("lastName")}</div> 
    <button onclick="removecurrentitem(this)">Remove</button>
    </li>`


})



function removecurrentitem(e) {
    e.parentNode.parentNode.removeChild(e.parentNode)
}
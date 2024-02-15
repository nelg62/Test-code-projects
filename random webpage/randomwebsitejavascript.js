let picture = 'stone.png'

const listitems = ["listitem1", "listitem2", "listitem3", "listitem4"];

let list = document.getElementById("org-orglist");
let fragList = document.createDocumentFragment();
listitems.forEach(function (item) {
    let li = document.createElement('li');
    li.textContent = item;
    fragList.appendChild(li);
});
list.appendChild(li);

function showdate() {
document.getElementById("fs-h1").innerHTML = Date()
}

function addparagraph() {
    document.getElementById("fs-p").innerHTML = "this is a parapraph"
}

function showimg() {
    document.getElementById("fs-img").src = picture
}

function figcap() {
    document.getElementById("fs-figcap").innerHTML = 'this is a picture'
}
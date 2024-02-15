function datetimebtn() {
    document.getElementById("textdisplay").innerHTML = Date()
    document.getElementById("button1").innerText = "Press to change text"
    document.getElementById("button1").onclick = changetxt
};

function changetxt() {
    document.getElementById("textdisplay").innerHTML = "this has been changed"
    document.getElementById("button1").innerText = "Press to add image"
    document.getElementById("button1").onclick = addimg
}

function addimg() {
    document.getElementById("testimg").src = "search-interface-symbol.png"    
    document.getElementById("textdisplay").innerHTML = ""
    document.getElementById("button1").innerText = "Press to change image"
    document.getElementById("button1").onclick = changeimg
}

function changeimg() {
    document.getElementById("testimg").src = "user.png"
    document.getElementById("button1").innerText = "Press to remove image"
    document.getElementById("button1").onclick = removeimg
}

function removeimg () {
    document.getElementById("testimg").src = ""
    document.getElementById("button1").innerText = "Press to add text"
    document.getElementById("button1").onclick = addtxt
}

function addtxt () {
    document.getElementById("button1").innerText = "Press to make text bigger"
    document.getElementById("textdisplay").innerHTML = "Welcome back text"
    document.getElementById("button1").onclick = txtbigger
}

function txtbigger() {
    document.getElementById("textdisplay").style.fontSize = "35px"
}

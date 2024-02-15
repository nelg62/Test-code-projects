// date and time button
function showDateAndTime() {
  document.getElementById('timetext').innerHTML = Date()
}

// change text button
function changeText() {
  document.getElementById('texttochange').innerHTML = 'Hi there'
}

// choose image button
function changeImgUser() {
  document.getElementById('changeimg').src = 'user.png'
}

function changeSearchImg() {
  document.getElementById('changeimg').src = 'search-interface-symbol.png'
}

// change font size button
function changeFontSize() {
  document.getElementById('fontsizetext').style.fontSize = '35px'
}

// remove text button
function removeText() {
  document.getElementById('removetext').style.display = 'none'
}

// show hidden text
function showHiddenText() {
  document.getElementById('hiddentext').style.display = 'block'
}
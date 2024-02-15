let calcVal = ""

// function get value from onclick action add value to calcVal
function writeToH(value) {
    if (calcVal == "") {
        calcVal = value
        document.getElementById("calctext").innerHTML = calcVal
    } else if (calcVal != "") {
        calcVal = `${calcVal}${value}`
        document.getElementById("calctext").innerHTML = calcVal

    }
}

// Function to clear calVal
function clearCalc() {
    calcVal = ""
    document.getElementById("calctext").innerHTML = calcVal
}

// function to add all together in calcVal
function equalsbtn() {
    document.getElementById("calctext").innerHTML = eval(calcVal)
}
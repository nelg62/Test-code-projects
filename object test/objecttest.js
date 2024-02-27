const userObj = {
    firstName: "Glen",
    lastName: "Harding",
    randomNumber: Math.floor(Math.random() * 10) + 1,
    item: ["apple","laptop","book"],
    userimg: "user.png",
}

document.getElementById('userlisttop').innerHTML = `<li>${userObj.firstName}</li>
<li>${userObj.lastName}</li> <li>${userObj.randomNumber}</li> <li>${userObj.item}</li>
<img src="${userObj.userimg}" style="height: 100px; width: 100px;">`
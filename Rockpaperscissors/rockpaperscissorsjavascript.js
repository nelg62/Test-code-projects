let win = 0
let tie = 0
let lose = 0

let opponenthand

function highestnumber() {
let higlight = Math.max(win, tie, lose);
document.getElementById('testingtext').innerHTML = `${higlight}`
}


// get random number
function getrandomnumber() {
    return Math.floor(Math.random() * 3) + 1
}

const playerimage = document.getElementById('playerimage');
const opponentimage = document.getElementById('opponentimage');

// rockbutton
function rockbuttonfun() {
    getrandomnumber().call;
    document.getElementById('playerchoice').innerHTML = 'You have chosen rock',
        playerimage.src = "stone.png"
    switch (getrandomnumber()) {
        case 1:
            opponenthand = 'rock';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen rock'
            opponentimage.src = "stone.png"
            document.getElementById('result').innerHTML = 'Tie'
            tie++
            document.getElementById('totaltie').innerHTML = `Tie: ${tie}`
            highestnumber().call
            break;
        case 2:
            opponenthand = 'paper';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen paper'
            opponentimage.src = "paper.png"
            document.getElementById('result').innerHTML = 'Lose'
            lose++
            document.getElementById('totalloss').innerHTML = `Lose: ${lose}`
            highestnumber().call
            break;
        case 3:
            opponenthand = 'scissors';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen scissors'
            opponentimage.src = "scissors.png"
            document.getElementById('result').innerHTML = 'Win'
            win++
            document.getElementById('totalwins').innerHTML = `Win: ${win}`
            highestnumber().call
            break;
    }
}

// paper button
function paperbuttonfun() {
    getrandomnumber().call;
    document.getElementById('playerchoice').innerHTML = 'You have chosen paper'
    playerimage.src = "paper.png"
    switch (getrandomnumber()) {
        case 1:
            opponenthand = 'rock';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen rock'
            opponentimage.src = "stone.png"
            document.getElementById('result').innerHTML = 'Win'
            win++
            document.getElementById('totalwins').innerHTML = `Win: ${win}`
            highestnumber().call
            break;
        case 2:
            opponenthand = 'paper';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen paper'
            opponentimage.src = "paper.png"
            document.getElementById('result').innerHTML = 'Tie'
            tie++
            document.getElementById('totaltie').innerHTML = `Tie: ${tie}`
            highestnumber().call
            break;
        case 3:
            opponenthand = 'scissors';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen scissors'
            opponentimage.src = "scissors.png"
            document.getElementById('result').innerHTML = 'Lose'
            lose++
            document.getElementById('totalloss').innerHTML = `Lose: ${lose}`
            highestnumber().call
            break;
    }
}

// scossors button 
function scissorsbuttonfun() {
    getrandomnumber().call;
    playerimage.src = "scissors.png"
    document.getElementById('playerchoice').innerHTML = 'You have chosen scissors'
    switch (getrandomnumber()) {
        case 1:
            opponenthand = 'rock';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen rock'
            opponentimage.src = "stone.png"
            document.getElementById('result').innerHTML = 'Lose'
            lose++
            document.getElementById('totalloss').innerHTML = `Lose: ${lose}`
            highestnumber().call
            break;
        case 2:
            opponenthand = 'paper';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen paper'
            opponentimage.src = "paper.png"
            document.getElementById('result').innerHTML = 'Win'
            win++
            document.getElementById('totalwins').innerHTML = `Win: ${win}`
            highestnumber().call
            break;
        case 3:
            opponenthand = 'scissors';
            document.getElementById('opponentchoice').innerHTML = 'the opponent has chosen scissors'
            opponentimage.src = "scissors.png"
            document.getElementById('result').innerHTML = 'Tie'
            tie++
            document.getElementById('totaltie').innerHTML = `Tie: ${tie}`
            highestnumber().call
            break;
    }
}


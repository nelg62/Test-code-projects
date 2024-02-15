// player object
const Player = {
    firstName: '',
    lastName: '',
    currentHealth: 100,
    maxHealth: 100,
    currentMana: 80,
    maxMana: 100,
    weapon: '',
    attack: '',
}

// enemy object
const enemy = {
    firstName: '',
    currentHealth: 100,
    maxHealth: 100,
    attack: '',
}

let handoption
let enemyhandoption

function startbuttonfun() {
    document.getElementById('rockbutton').style.display = 'block';
    document.getElementById('paperbutton').style.display = 'block';
    document.getElementById('scissorsbutton').style.display = 'block';
    document.getElementById('startbutton').style.display = 'none';
}

// get random number between 1 and 3 
function randomnumber3() {
    return Math.floor(Math.random() * 3) + 1
}


// when clicking rockbutton
function rockbuttonfun() {
    // random number call
    randomnumber3().call;
    // enemy hand
    switch (randomnumber3()) {
        case 1:
            enemyhandoption = 'rock';
            break;
        case 2:
            enemyhandoption = 'paper';
            break;
        case 3:
            enemyhandoption = 'scissors';
            break;
    }
    // senarios of win and loose options
    switch (enemyhandoption) {
        case 'rock':
            document.getElementById('texttest').innerHTML = 'Tie'
            break;
        case 'paper':
            document.getElementById('texttest').innerHTML = 'Lose'
            enemyattack().call
            break;
        case 'scissors':
            document.getElementById('texttest').innerHTML = 'Win'
            attack().call
            heal().call
            break;
    }
}

// when clicking paper button
function paperbuttonfun() {
    // random number call
    randomnumber3().call;
    // enemy hand
    switch (randomnumber3()) {
        case 1:
            enemyhandoption = 'rock';
            break;
        case 2:
            enemyhandoption = 'paper';
            break;
        case 3:
            enemyhandoption = 'scissors';
            break;
    }
    // senarios of win and loose options
    switch (enemyhandoption) {
        case 'rock':
            document.getElementById('testtext2').innerHTML = 'Win'
            attack().call
            heal().call
            break;
        case 'paper':
            document.getElementById('testtext2').innerHTML = 'Tie'
            break;
        case 'scissors':
            document.getElementById('testtext2').innerHTML = 'Lose'
            enemyattack().call
            break;
    }
}

// when clicking scissor button
function scissorsbuttonfun() {
    // random number call
    randomnumber3().call;
    // enemy hand
    switch (randomnumber3()) {
        case 1:
            enemyhandoption = 'rock';
            break;
        case 2:
            enemyhandoption = 'paper';
            break;
        case 3:
            enemyhandoption = 'scissors';
            break;
    }
    // senarios of win and loose options
    switch (enemyhandoption) {
        case 'rock':
            document.getElementById('testtext3').innerHTML = 'Lose';
            enemyattack().call
            break;
        case 'paper':
            document.getElementById('testtext3').innerHTML = 'Win'
            attack().call
            heal().call
            break;
        case 'scissors':
            document.getElementById('testtext3').innerHTML = 'Tie'
            break;
    }
}

// display player health current and max
document.getElementById('health').innerHTML = `${Player.currentHealth} / ${Player.maxHealth}`;

// healthbar current for bar
document.getElementById('healthbar').style.width = `${Player.currentHealth}%`;

// button for -10 heath
function enemyattack() {
    Object.defineProperty(Player, 'currentHealth', { value: Player.currentHealth - 10 });
    document.getElementById('healthbar').style.width = `${Player.currentHealth}%`
    document.getElementById('health').innerHTML = `${Player.currentHealth} / ${Player.maxHealth}`
}

function attack() {
    Object.defineProperty(enemy, 'currentHealth', { value: enemy.currentHealth - 10 });
    document.getElementById('enemyhealthbar').style.width = `${enemy.currentHealth}%`
    document.getElementById('enemyhealth').innerHTML = `${enemy.currentHealth} / ${enemy.maxHealth}`
}

// button for +10 health
function heal() {
    Object.defineProperty(Player, 'currentHealth', { value: Player.currentHealth + 10 });
    document.getElementById('healthbar').style.width = `${Player.currentHealth}%`
    document.getElementById('health').innerHTML = `${Player.currentHealth} / ${Player.maxHealth}`
}

// display player mana current and max
document.getElementById('mana').innerHTML = `${Player.currentMana} / ${Player.maxMana}`;

// manabar current for bar 
document.getElementById('manabar').style.width = `${Player.currentMana}%`;


// display enemy health and max health 
document.getElementById('enemyhealth').innerHTML = `${enemy.currentHealth} / ${enemy.maxHealth}`;
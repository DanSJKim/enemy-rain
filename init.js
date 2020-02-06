let bg = document.querySelector('#bg');
let scoreElem = document.querySelector('.game-score');

// 게임 진행 유무
let isStart = true;
let score = 0;

// 히어로 생성
let heroElem = document.querySelector('#hero');
let heroPosition = heroElem.offsetLeft+10;
let hero = new Hero(heroPosition, heroElem);

// 적 생성
let createEnemy = () => {
    console.log('enemy is created');

    let enemy = new Enemy();
    enemy.moveBottom();
}

// 적 주기적으로 생성
let createEnemies = setInterval(function() {
    createEnemy();
}, 1500);


// 게임 오버 체크
let gameOverCheck = setInterval(function() {
    if (isStart === false) {
        clearInterval(createEnemies);
    }
}, 500);

createEnemy();
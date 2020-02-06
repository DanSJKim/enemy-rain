class Enemy {
    constructor() {
        this.enemy = document.createElement('div');
        this.createEnemy();
    }

    createEnemy = () => {

        // 랜덤 위치 값 생성
        this.randomNum = Math.floor(Math.random() * 755) + 1;
        this.enemy.classList.add('enemy');
        this.enemy.style.left = this.randomNum+'px';
        this.enemy.classList.add('enemy-live');
        bg.appendChild(this.enemy);
    }

    // 아래로 이동
    moveBottom = () => {
        let count = 0;
        
        let falling = setInterval(() => {
            count += 1;
            //console.log('top:', this.enemy.offsetTop);

            // 히어로와 에너미 충돌
            if (heroPosition >= this.randomNum - 27 && this.randomNum + 27 > heroPosition && this.enemy.offsetTop >= 500) {
                this.enemyDie(falling);
                console.log('충돌!!!!!!!!!!');

                // 점수++
                score += 1;
                scoreElem.innerHTML = score;
            }
        
            this.enemy.style.top = count+'px';
            
            // 게임오버 되었을 경우
            if(isStart === false){

                clearInterval(falling);
                let gameOverText = document.createElement('div');
                gameOverText.className = 'game-over';
                gameOverText.innerHTML = 'Game Over';
                bg.appendChild(gameOverText);
            }

            // 바닥에 떨어졌을 경우
            if (count == 546) {
                
                console.log('is 546')
                isStart = false;
                this.enemyDie(falling);
                clearInterval(falling);
            }
        }, 2);
    }

    // 에너미 사망
    enemyDie = (falling) => {
        this.enemy.classList.remove('enemy-live');
        this.enemy.classList.add('enemy-die');
        clearInterval(falling);

        // 죽은 지 3초 후 사라짐
        setTimeout(() => {
            console.log('finish!!!!!!!!');
            this.enemy.classList.remove('enemy-die');
            this.enemy.remove();
         }, 3000);
    }

}
class Hero {
    constructor(leftPos, hero) {
        console.log('hero created: ', hero);
        console.log('leftPos: ' + leftPos);
        this.leftPos = leftPos;
        this.hero = hero;

        this.isLeft = false;
        this.isRight = false;

        // 이동
        setInterval(function() {
            if (this.isLeft === true) {

                console.log(hero.offsetLeft);
                console.log('left: ', hero.offsetLeft);
                if (hero.offsetLeft > 0){
                    leftPos = leftPos - 10;
                }
                hero.style.left = leftPos+"px";
                hero.className = 'left-face';
                heroPosition = hero.offsetLeft;
            }else if(this.isRight === true) {

                console.log(hero.offsetLeft);
                console.log('right ', hero.offsetLeft);
                if (hero.offsetLeft < 765){
                    leftPos =leftPos + 10;
                }
                hero.style.left = leftPos+"px";
                hero.className = 'right-face';
                heroPosition = hero.offsetLeft;
            }
        }, 20);
    }

    // moveLeft = () => {
    //     this.leftPos = this.leftPos - 10;
    //     this.hero.style.left = this.leftPos+"px";
    //     this.hero.className = 'left-face';
    //     heroPosition = this.hero.offsetLeft;
    //     console.log(this.hero.offsetLeft);
    // }

    // moveRight = () => {
    //     this.leftPos = this.leftPos + 10;
    //     this.hero.style.left = this.leftPos+"px";
    //     this.hero.className = 'right-face';
    //     heroPosition = this.hero.offsetLeft;
    //     console.log(this.hero.offsetLeft);
    // }
}

// 전역 키보드 입력 리스너
window.addEventListener('keydown', e => {
    console.log('key: ', e.key);
    switch (e.key) {
        case "ArrowLeft":
            //hero.moveLeft();
            this.isRight = false;
            this.isLeft = true;
            break;
        case "ArrowRight":
            //hero.moveRight();
            this.isLeft = false;
            this.isRight = true;
            break;
        default:
            break;
    }
});

window.addEventListener('keyup', e => {
    console.log('key: ', e.key);
    this.isRight = false;
    this.isLeft = false;
});
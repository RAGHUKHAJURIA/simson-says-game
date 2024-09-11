let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "blue"];

let statred = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (statred == false) {
        console.log("game started");
        statred = true;
    }

    levelUp();

});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200);

}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash")
    }, 200);

}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randonmColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randonmColor}`);
    gameSeq.push(randonmColor);
    console.log(gameSeq);
    gameFlash(randomBtn);

}

function checkAns(idx) {

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}<b> <br> press any key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150)
        reset();
    }


}

function btnPress() {

    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);

}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    statred = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}


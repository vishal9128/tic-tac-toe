let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".btn");
let newBtn = document.querySelector(".newBtn");
let mesCon = document.querySelector(".mes-con");
let mes = document.querySelector(".mes");

let turnO = true; // Player O starts

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    mesCon.classList.add("hide");
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
            } else {
                box.innerText = "X";
            }
            box.disabled = true;
            turnO = !turnO; // Toggle turns
            checkWinner();
        }
    });
});

const showWinner = (winner) => {
    mes.innerText = `Congratulations! Winner is ${winner}`;
    mesCon.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
};

const checkWinner = () => {
    for (let pattern of win) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
        }
    }
};

newBtn.addEventListener("click", resetGame);
btn.addEventListener("click", resetGame);
let Boxes = document.querySelectorAll(".box");
let Reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; 
let count = 0;


const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

    Boxes.forEach((box) => {
    box.addEventListener("click", ()  => {
       if(turnO){
        box.innerText = "O";
        turnO = false;

       }else{
        box.innerText = "X";
        turnO = true;
       }
       box.disabled = true;
       count++;

      let isWinner = checkWinner();

      if(count === 9 && !isWinner){
      draw();
      }
    });

});


const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();



};



const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = Boxes[pattern[0]].innerText;
        let pos2val = Boxes[pattern[1]].innerText;
        let pos3val = Boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val == pos2val && pos2val == pos3val) {
                showWinner(pos1val);
                return true;
            }

        }

    }

};

const disableBoxes = () => {
    for(let box of Boxes){
        box.disabled = true;

    }

};

  const enableBoxes = () => {
    for(let box of Boxes){
        box.disabled = false;
        box.innerText = "";

    }

};

const resetGame = () => {
    turnO =true;
    enableBoxes();
    count = 0;
    msgContainer.classList.add("hide");
};

const draw = () => {
   msg.innerText = `Game Draw`;
   msgContainer.classList.remove("hide");
   disableBoxes();


};

newGameBtn.addEventListener("click", resetGame);
Reset.addEventListener("click",resetGame);




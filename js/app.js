document.addEventListener("DOMContentLoaded", function() {

    const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    // const colors = ["red", "blue", "yellow"];
    const colors = ["red"];

    const level2 = ["red"];
    const level3 = ["red"];
    // const level4 = ["white"];
    // const level5 = ["hotpink"];

    const button = document.querySelector(".check");
    const result = document.querySelector(".result");
    const middleSq = document.querySelector(".middle");
    const miniBoard = document.querySelector(".miniBoard");
    const miniSquare = document.querySelectorAll(".miniBoard div");

    let level = 1;
    result.innerHTML = level;


    //kolorowanie divów przez event
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", function() {
            event.preventDefault();
            let index = Math.floor(Math.random() * colors.length);
            this.style.backgroundColor = colors[index];
            this.setAttribute("color", colors[index]);
            let x = this.getAttribute("color");
        })
    }

    //reset kolorowania po zakońćzonej rozgrywce
    function reset() {
        for (let i = 0; i < square.length; i++) {
            square[i].style.backgroundColor = "black";
        }
    }

    //change Color
    function changeColor() {
        middleSq.style.backgroundColor = "white";
        middleSq.setAttribute("color", "white");
    }

    //miniBoard randomColor
    function colorMiniBoard() {
        const miniArr = [];
        for (let i = 0; i < miniSquare.length; i++) {
            let index = Math.floor(Math.random() * colors.length);
            miniSquare[i].style.backgroundColor = colors[index];
            miniSquare[i].setAttribute("color", colors[index]);
            let miniSquareColor = miniSquare[i].getAttribute("color");
            miniArr.push(miniSquareColor);
        }
        return miniArr;
    }

    colorMiniBoard();
    const miniColorSet = colorMiniBoard();

    function gameOver() {
        board.style.opacity = ".4";
        button.disabled = true;
        //message pops out "go to work!"

    }

    // main game function
    function game() {
        const arr = [];

        for (let i = 0; i < square.length; i++) {
            let color = square[i].getAttribute("color");
            arr.push(color);
        }

        if (level === 2) {
            colors.push.apply(colors,level2);
        }else if (level === 3) {
            colors.push.apply(colors,level3);
        // }else if (level === 4) {
        //     colors.push.apply(colors,level4);
        // }else if (level === 5) {
        //     colors.push.apply(colors, level5);
    }else if (level > 3 && level <= 6){
            miniBoard.style.visibility = "visible";
            equal();
            reset();
            changeColor();
            colorMiniBoard();
            console.log(level + " level od 3 wzwyż");
        }else if (level === 7){
            gameOver();
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]
                && arr[0] === arr[4] && arr[0] === arr[5] && arr[0] === arr[6]
                && arr[0] === arr[7] && arr[0] === arr[8]){
                reset();
                changeColor();
            }else{
                return false;
            }
        }
        level++;
        result.innerHTML = level;

        //rules from upper level up
        function equal(){
            for(let i = 0 ; i < arr.length; i++){
                for(let j = 0; j < miniColorSet.length; j++){
                    if( arr[i] === miniColorSet[i]){
                        console.log("hiphip!");
                    }else{
                        return false;
                    }
                }
            }
        }
    return arr;
    }

    //main event
    button.addEventListener("click", function(event) {
        event.preventDefault();
        game();
        console.log(level + " level w buttonie po kliknięciu check");
    });
    const bigColorSet = game();


});

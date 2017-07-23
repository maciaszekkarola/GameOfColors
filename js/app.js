document.addEventListener("DOMContentLoaded", function() {

    const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    // const colors = ["red", "blue", "yellow"];
    const colors = ["red"];

    const level2 = ["blue"];
    const level3 = ["green"];
    const level4 = ["white"];
    const level5 = ["hotpink"];

    const button = document.querySelector(".check");
    const result = document.querySelector(".result");
    const middleSq = document.querySelector(".middle");
    const miniBoard = document.querySelector(".miniBoard");
    const miniSquare = document.querySelectorAll(".miniBoard div");

    let level = 0;
    update();
    function update() {
        result.innerHTML = level;
    }


    //modal
    const close = document.querySelector(".close");
    const modal = document.querySelector(".modal");


    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })
    close.addEventListener("click", function() {
        modal.style.display = "none";
    })



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

    //reset colors
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
        modal.style.display = "block";
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
        }else if (level === 4) {
            colors.push.apply(colors,level4);
        }else if (level === 5) {
            colors.push.apply(colors, level5);
        }else if (level > 3 && level <= 6){
            miniBoard.style.visibility = "visible";
            equal();
            reset();
            changeColor();
            colorMiniBoard();
        }else if (level === 8){
            gameOver();
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]
                && arr[0] === arr[4] && arr[0] === arr[5] && arr[0] === arr[6]
                && arr[0] === arr[7] && arr[0] === arr[8]){
                reset();
                changeColor();
                update();
            }else{
                return false;
            }
        }
        level++;
        update()

        // rules from upper level up
        function equal(){
            // level++;
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
        // level++; nie!
    });
    const bigColorSet = game();


});

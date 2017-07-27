document.addEventListener("DOMContentLoaded", function() {

    const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    const colors = ["#ff6666", "#6373ff", "#fcf262"]; //red, blue, yellow

    const level3 = ["#71fcf3"]; //lightblue
    const level4 = ["#f0e8fc"]; //white
    const level5 = ["#b0ff56"]; //green
    const level6 = ["#ff70b7"]; //pink

    const button = document.querySelector(".check");
    const result = document.querySelector(".result");
    const middleSq = document.querySelector(".middle");
    const extraColor = document.querySelector(".extraColor");

    let level = 1;
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
            square[i].style.backgroundColor = "#202021";
        }
        changeColor();
    }

    //change Color
    function changeColor() {
        middleSq.style.backgroundColor = "white";
        middleSq.setAttribute("color", "white");
    }


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

        //when you are on level
        if (level === 2) {
            colors.push.apply(colors,level3);
            extraColor.style.backgroundColor = level3[0];
        }else if (level === 3) {
            colors.push.apply(colors,level4);
            extraColor.style.backgroundColor = level4[0];
        }else if (level === 4) {
            colors.push.apply(colors,level5);
            extraColor.style.backgroundColor = level5[0];
        }else if (level === 5) {
            colors.push.apply(colors, level6);
            extraColor.style.backgroundColor = level6[0];
        }else if (level === 6 ){
            gameOver();
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]
                && arr[0] === arr[4] && arr[0] === arr[5] && arr[0] === arr[6]
                && arr[0] === arr[7] && arr[0] === arr[8]){
                reset();
                update();
            }else{
                return false;
            }
        }
        level++;
        update()
    }

    //main event
    button.addEventListener("click", function(event) {
        event.preventDefault();
        game();
    });


});

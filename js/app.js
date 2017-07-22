document.addEventListener("DOMContentLoaded", function() {

    // const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    //basic board
    const colors = ["red", "blue", "yellow"];
    const levelUp = ["purple", "green", "white", "hotpink"];
    const button = document.querySelector(".check");

    let level = 1;

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

    //change backgroundColor
    function changeColor() {
        const html = document.querySelector("html");
        html.style.backgroundColor = "navy";
    }

    //check if it is correct
    button.addEventListener("click", function() {
        event.preventDefault();
            const arr = [];
            for (let i = 0; i < square.length; i++) {
                let color = square[i].getAttribute("color");
                arr.push(color);
            }

            for (let i = 0; i < arr.length; i++) {

                if (arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]
                    && arr[0] === arr[4] && arr[0] === arr[5] && arr[0] === arr[6]
                    && arr[0] === arr[7] && arr[0] === arr[8]){
                    //add color and increase level if board is finished
                    colors.push.apply(colors,levelUp);
                    reset();
                    changeColor();
                }else{
                    return false;
                }
            }
            // level++;
            console.log(level, "level po buttonie");
            const result = document.querySelector(".result");
            level = level + 1;
            result.innerHTML = level;

            return level;
    });












});

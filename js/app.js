document.addEventListener("DOMContentLoaded", function() {

    // const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    //basic board
    const colors = ["red", "blue", "yellow"];
    const level2 = ["purple"];
    const level3 = ["green"];
    const level4 = ["white"];
    const level5 = ["hotpink"];

    const button = document.querySelector(".check");
    const result = document.querySelector(".result");
    const middleSq = document.querySelector(".middle");

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

    //change backgroundColor
    function changeColor() {
        const html = document.querySelector("html");
        html.style.backgroundColor = "navy";
        middleSq.style.backgroundColor = "white";
        middleSq.setAttribute("color", "white");

    }

    button.addEventListener("click", function(event) {
        event.preventDefault();
            const arr = [];
            for (let i = 0; i < square.length; i++) {
                let color = square[i].getAttribute("color");
                arr.push(color);
            }

            if (level === 1) {
                colors.push.apply(colors,level2);
            }else if (level === 2) {
                colors.push.apply(colors,level3);
            }else if (level === 3) {
                colors.push.apply(colors,level4);
            }else if (level === 4) {
                colors.push("hotpink");
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
            console.log(colors);
            level++;
            result.innerHTML = level;

            return level;
    });












});

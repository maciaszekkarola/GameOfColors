document.addEventListener("DOMContentLoaded", function() {

    // const board = document.querySelector(".board");
    const square = document.querySelectorAll(".board div");
    const colors = ["red", "blue", "yellow", "green", "white", "hotpink"];

    //
    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", function() {
            let index = Math.floor(Math.random() * colors.length);
            this.style.backgroundColor = colors[index];
            this.setAttribute("color", colors[index]);
            let x = this.getAttribute("color");
            // console.log(this , x);
        })
    }

    const scoreBoard = document.querySelector(".scoreBoard");
    const button = document.querySelector(".check");

    button.addEventListener("click", function() {
        const arr = [];
        for (let i = 0; i < square.length; i++) {
            let col = square[i].getAttribute("color");
            arr.push(col);
        }
        console.log(arr);


        function changeColor() {
            const html = document.querySelector("html");
            html.style.backgroundColor = "navy";
        }

        for (let i = 0; i < arr.length; i++) {
            if ( arr[0] === arr[1] && arr[0] === arr[2] && arr[0] === arr[3]
                && arr[0] === arr[4] && arr[0] === arr[5] && arr[0] === arr[6]
                && arr[0] === arr[7] && arr[0] === arr[8]){
                return changeColor();
            }else{
                return false;
            }
        }



    })








});

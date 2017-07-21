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

        for (let i = 0; i < arr.length; i++) {
            if (arr[0] === "red" || arr[1] === "red") {
                alert("wszystkie czerwone");
            }else{
                false;
            }
        }


    })








});

document.addEventListener("DOMContentLoaded", function() {


    const square = document.querySelectorAll(".board div");
    const colors = ["red", "blue", "yellow", "green", "white", "hotpink"];

    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", function() {
            let index = Math.floor(Math.random() * colors.length);
            console.log(index);
            this.style.backgroundColor = colors[index];
        })
    }

    const scoreBoard = document.querySelector(".scoreBoard");
    const button = document.querySelector(".check");
    console.log(button);

    button.addEventListener("click", function() {
        console.log(this);
    })




});

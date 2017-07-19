document.addEventListener("DOMContentLoaded", function() {

    const square = document.querySelectorAll(".board div");

    const colors = ["red", "blue", "yellow", "green"];


    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener("mouseover", function() {
            let index = Math.floor(Math.random() * 3) + 1;
            this.style.backgroundColor = colors[index];
        })
    }





});

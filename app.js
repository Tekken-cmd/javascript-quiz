var container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

var title = document.createElement("h1");
title.innerText = "Counter";
title.id = "myTitle"
container.appendChild(title);

var count = document.createElement("h1");
count.innerText = 0;
count.id = "myCount";
container.appendChild(count);

var decreaseBtn = document.createElement("button");
decreaseBtn.innerText = "Decrease";
decreaseBtn.id = "decreaseBtn";
container.appendChild(decreaseBtn);

var increaseBtn = document.createElement("button");
increaseBtn.innerText = "Increase";
increaseBtn.id = "increaseBtn";
container.appendChild(increaseBtn);

var resetBtn = document.createElement("button");
resetBtn.innerText = "Reset";
resetBtn.id = "resetBtn";
container.appendChild(resetBtn);

increaseBtn.addEventListener("click", function() {
    count.innerText = parseInt(count.innerText) + 1;
    count.classList.add("green");
    count.classList.remove("red");
})

decreaseBtn.addEventListener("click", function(){
    count.innerText = parseInt(count.innerText) - 1;
    count.classList.add("red");
    count.classList.remove("green");
})

resetBtn.addEventListener("click", function() {
    count.innerText = 0;
    count.classList.remove("red");
    count.classList.remove("green");
})
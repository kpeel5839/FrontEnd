const title = document.querySelector(".js-title");
const upBtn = document.querySelector(".js-upBtn");
const downBtn = document.querySelector(".js-downBtn");
//js title 이라고 class name 을 추가해주는 이유는 js적용과 css 적용을 나눠주어서 가시성을 높이려고 하는 것이다.
let number = 0;

function checkEven(){
    if (number % 2 == 0){ 
        title.classList.add("even"); //class List 는 굉장히 안전함
    }else{
        title.classList.remove("even");
    }
}

function init(){
    upBtn.addEventListener("click" , onClickUpBtn);
    downBtn.addEventListener("click", onClickDownBtn);
    
    checkEven();
}
function onClickDownBtn(){
    console.log("Down");
    number--;
    title.innerHTML = number;

    checkEven();
}
function onClickUpBtn(){
    console.log("Up");
    number++;
    title.innerHTML = number;

    checkEven();
}
init();

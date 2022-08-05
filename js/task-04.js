"use strict";

let addCounterBtn = document.querySelector("[data-action='increment']");
let RemoveCounterBtn = document.querySelector("[data-action='decrement']");
let counterSumValue = document.querySelector("#value");

let counterValue = 0;

addCounterBtn.addEventListener("click",()=>{
    counterValue += 1;
    newValue();
}) ;

RemoveCounterBtn.addEventListener("click",()=>{
    counterValue -= 1;
    newValue();
});

function newValue(){
    counterSumValue.innerHTML = counterValue;
};

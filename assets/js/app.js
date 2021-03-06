"use strict";
// < ===== FORM ===== >
const amountInput = document.getElementById("amount");
const form = document.getElementById("amount-form");
let amountValue = 0; // <= Store Amount
const handleSubmit = (evt) => {
    evt.preventDefault(); // Prevent Default Submit Form
    amountValue = Number(amountInput.value);
    amountInput.value = String(0); // Reset Input Value
    handleCounter(0);
};
// < ===== /FORM ===== >
// < ===== COUNTER ===== >
let counterValue = 0; // <= Store Counter
const counter = document.getElementById("counter-value"); // select container of value
const controller = document.getElementById('controller');
controller.innerText = `0`;
const handleController = () => {
    const res = amountValue - counterValue;
    res > 0
        ? controller.innerText = `${res}`
        : controller.innerText = `0`;
};
const handleCounter = (num) => {
    num != 0 ? (counterValue += num) : (counterValue = 0);
    counter.innerText = `${counterValue}`; // Render countValue
    if ((counterValue >= amountValue) && (amountValue !== 0)) {
        counter.classList.replace('text-dark', "text-info");
    }
    else {
        (counter.classList.replace("text-info", 'text-dark'));
    }
    handleController();
};
// Get Buttons from the DOM
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
// < ===== /COUNTER ===== >
// Controler
const main = () => {
    counter.innerText = `0`; // Render countValue
    form === null || form === void 0 ? void 0 : form.addEventListener("submit", handleSubmit);
    increase.addEventListener('click', () => handleCounter(1));
    reset.addEventListener('click', () => handleCounter(0));
    decrease.addEventListener('click', () => handleCounter(-1));
};
main();

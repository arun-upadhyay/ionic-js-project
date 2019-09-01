const amount = document.querySelector("#input-amount");
const reasonTxt = document.querySelector("#input-reason");
const amountTxt = document.querySelector("#input-amount");
const btnAdd = document.querySelector("#btn-add");
const btnClear = document.querySelector("#btn-clear");
const listItems = document.querySelector("#item-content");
const expensesTotalPara = document.querySelector("#total-expenses");

let totalExpenses = 0;
// add button
btnAdd.addEventListener('click', () => {
    const reason = reasonTxt.value;
    const amount = amountTxt.value;
    if (reason.trim().length <= 0 || amount.trim().length <= 0) {
        return;
    }
    const newItem = document.createElement('ion-item');
    const formattedResult = reason + ":  $ " + amount;
    newItem.textContent = formattedResult;
    totalExpenses += parseFloat(amount);
    expensesTotalPara.textContent = "Total : " + totalExpenses;
    listItems.appendChild(newItem);

});
// clear button
btnClear.addEventListener('click', () => {
    reasonTxt.value = "";
    amountTxt.value = "";
});





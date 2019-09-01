const amount = document.querySelector("#input-amount");
const reasonTxt = document.querySelector("#input-reason");
const amountTxt = document.querySelector("#input-amount");
const btnAdd = document.querySelector("#btn-add");
const btnClear = document.querySelector("#btn-clear");
const listItems = document.querySelector("#item-content");
const expensesTotalPara = document.querySelector("#total-expenses");
const alertContr = document.querySelector('ion-alert-controller');


let totalExpenses = 0;
// add button
btnAdd.addEventListener('click', () => {
    const reason = reasonTxt.value;
    const amount = amountTxt.value;
    if (reason.trim().length <= 0 || amount.trim().length <= 0) {
        alertContr.create({
            message: 'Please enter valid inputs!',
            header: 'Invalid inputs',
            buttons: ['Okay']
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    const newItem = document.createElement('ion-item');
    const formattedResult = reason + ":  $ " + amount;
    newItem.textContent = formattedResult;
    totalExpenses += parseFloat(amount);
    expensesTotalPara.textContent = "Total : $ " + totalExpenses;
    listItems.appendChild(newItem);
    clearInput();

});
clearInput = () => {
    reasonTxt.value = "";
    amountTxt.value = "";
}
// clear button
btnClear.addEventListener('click', () => {
    clearInput();
});





function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name=amount-input]");
    let amountNumber = parseInt(amountInput.value);
    let showAmount = document.querySelector("strong.show-amount");

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if ( amountNumber > 10 ) {
        alert("Max 10 Hambi vásárolható");
    } else if ( amountNumber < 1 ) {
        alert("Min 1 Hambit kell venned");
    } else {    
    let amount = parseInt(amountInput.value) * price;      
    showAmount.innerHTML = amount;
    }

}
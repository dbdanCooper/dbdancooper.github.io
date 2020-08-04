function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name=amount-input]");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
    }

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("strong.show-amount");
    if ( amountNumber > 10 ) {
        alert("Max 10 Hambi vásárolható");
    } else if ( amountNumber < 1 ) {
        alert("Min 1 Hambit kell venned");
    } else {    
        let amount = amountNumber * price;      
        showAmount.innerHTML = amount;
    }
}

// Add helpTex.
let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Mit szeretnél?";

// Kiválasztás
let parent = document.querySelector("div.form-group:nth-child(1)");
// Hozzáadás (aktív)
parent.appendChild(helpText);
// Eltávolítás: parent.removeChild(helpText);

// Esemény
let sendButton = document.querySelector("form .btn.btn-primary");
/* b varia
sendButton.onclick = function() {
    alert("Hi JS");
}
kövi a c varia, az aktív 
sendButton.addEventListener("click", function(){
    alert("Hi JS");
} )
*/


// Űrlap események
let oForm = document.querySelector("#oForm");
oForm.addEventListener("submit", function(ev) {
    ev.preventDefault();  

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value; 
    }
    console.log( values )  
});

// Parent element kezelése
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction); 
}

// Select elemek.
let toppings = [ 
    "Zab", 
    "Korpa", 
    "Szója", 
    "Tejföl"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length) {
  let option = document.createElement("option");
  option.value = index;
  option.innerHTML = toppings[index];
  toppingSelect.appendChild(option);
  index++;
}

// kalkuláció
function calcAmountAlap() {
    let price = 1000;
    let amountInput = document.querySelector("input[name=amount-input]");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    showSumPrice(price, amountNumber);
    }    

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("strong.show-amount");
        if ( amountNumber > 10 ) {
        alert("Ennyit nem bírsz megenni (max 10)");
    } else if ( amountNumber < 1 ) {
        alert("Ne szórakozz velem");
    } else {    
        let amount = amountNumber * price;   
        showAmount.innerHTML = amount;
        } 
        let kod3 = document.getElementById("topInput3").value;
        let topkod3 = parseInt(kod3) 
        let showamount31 = document.querySelector("strong.showamount31");        
        if ( topkod3 == 1 ) {
            showamount31.innerHTML = 5000;                        
        } else if ( topkod3 == 2 ) {
            showamount31.innerHTML = -500;                    
        } else {    
            showamount31.innerHTML = "Jó meggondoltad? Az anyjával lakik, macskája van és babettával viszi a cuccot! 0"     
        }               
}           
          
// Űrlap események
let oForm = document.querySelector("#oForm");
oForm.addEventListener("submit", function(ev) {
    ev.preventDefault();  
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value; 
    } 
});

// Parent element kezelése (felső szines abklak)
let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction); 
}

// Select elemek.
let toppings1 = [ 
    "Gombás (nem konzervízű) Hamburget", 
    "HotDogot kevés mustárral", 
    "HotDogot sok ketchuppal"
];
let toppingSelect1 = document.querySelector("#topInput1");
let index1 = 0;
while(index1 < toppings1.length) {
  let option = document.createElement("option");
  option.value = index1;
  option.innerHTML = toppings1[index1];
  toppingSelect1.appendChild(option);
  index1++;
}

let toppings2 = [ 
    "10 Bubis vizet", 
    "5 Bubis vizet", 
    "1 Bubis vizet"
];
let toppingSelect2 = document.querySelector("#topInput2");
let index2 = 0;
while(index2 < toppings2.length) {
  let option = document.createElement("option");
  option.value = index2;
  option.innerHTML = toppings2[index2];
  toppingSelect2.appendChild(option);
  index2++;
}

let toppings3 = [ 
    "Csoki a Babettával",
    "Lali az Impalával - 5000 Ft felár!", 
    "Sanyika gyalog - 500 Ft kedvezmény!"
];
let toppingSelect3 = document.querySelector("#topInput3");
let index3 = 0;
while(index3 < toppings3.length) {
  let option = document.createElement("option");
  option.value = index3;
  option.innerHTML = toppings3[index3];
  toppingSelect3.appendChild(option);
  index3++;
}

 
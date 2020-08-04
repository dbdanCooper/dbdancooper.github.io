/* Összegzési algoritmus */
let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++){
     sum += numericArray [i];
}
console.log("Sum: ", sum);

/* Számlálási algoritmus */
let db = 0;
for (let i = 0; i < numericArray.length; i++){
    if (numericArray[i] % 2 == 0){
         db++;
    }
}
console.log("Páros számok: ", db);

/* Szélsőérték algoritmus */
let biggest = numericArray [0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray [i] > biggest) {
        biggest = numericArray [i];
    }
}
console.log("Legnagyobb szám: ", biggest);

/* Eldöntési algoritmus */
let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 5) {
        contains = true;
    }
}
console.log("Tartalmazza az 5-öt: ", contains);

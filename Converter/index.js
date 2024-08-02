let convert1El = document.getElementById("convert1-el")
let convert2El = document.getElementById("convert2-el")
let convert3El = document.getElementById("convert3-el")
let input1El = document.getElementById("num1-el")
let input2El = document.getElementById("num2-el")
let input3El = document.getElementById("num3-el")
let massEl = document.getElementById("mass-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")

const  MeterToFeet = 3.281 
const  LiterToGallon = 0.264 
const  KilogramToPound = 2.204


convert1El.addEventListener("click", function() {
    let baseValue = input1El.value
    
    massEl.textContent = `${baseValue} kilo = ${baseValue * KilogramToPound} pound` 
})

convert2El.addEventListener("click", function() {
    let baseValue = input2El.value
    
    lengthEl.textContent = `${baseValue} meter = ${baseValue * MeterToFeet} feet` 
})

convert3El.addEventListener("click", function() {
    let baseValue = input3El.value
    
    volumeEl.textContent = `${baseValue} Liter = ${baseValue * LiterToGallon} Gallon` 
})


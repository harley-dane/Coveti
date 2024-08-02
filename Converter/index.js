const convert1El = document.getElementById("convert1-el")
const convert2El = document.getElementById("convert2-el")
const convert3El = document.getElementById("convert3-el")
const input1El = document.getElementById("num1-el")
const input2El = document.getElementById("num2-el")
const input3El = document.getElementById("num3-el")
const massEl = document.getElementById("mass-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")

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


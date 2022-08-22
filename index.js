/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn= document.getElementById("convert-btn")
const lengthResult=document.getElementById("length-result")
const volumeResult = document.getElementById("volume-result")
const massResult = document.getElementById("mass-result")
const inputNumber = document.getElementById("input-number")

convertBtn.addEventListener("click",function(){
    const number = inputNumber.value
    // console.log(number)
    let meter,feet,lit,gal,kilo,pound
    feet = (number*3.281).toFixed(2)
    meter = (number/3.281).toFixed(2)
    lit=(number/0.264).toFixed(2)
    gal=(number*0.264).toFixed(2)
    kilo=(number/2.204).toFixed(2)
    pound=(number*2.204).toFixed(2)
    lengthResult.textContent = `${number} meter = ${feet}feet / ${number}feet = ${meter}meter`
    volumeResult.textContent = `${number} liters = ${gal}gallons / ${number}gallon = ${lit}liters`
    massResult.textContent = `${number} kilograms = ${pound}pound / ${number}pound = ${kilo}kilograms`
    
})
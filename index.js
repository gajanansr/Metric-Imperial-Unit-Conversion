let convertBtn = document.getElementById("convert-btn")
let input = document.getElementById("inp")
let lengthStr = document.getElementById("length")
let volumeStr = document.getElementById("volume")
let massStr = document.getElementById("mass")



convertBtn.addEventListener("click", function(){
    let inputValue = input.value
    lengthStr.textContent = `${inputValue} meters = ${(inputValue*3.281).toFixed(2)} feet | ${inputValue} feet = ${(inputValue/3.281).toFixed(2)} meters`
    volumeStr.textContent = `${inputValue} liters = ${(inputValue*0.264).toFixed(2)} gallons | ${inputValue} gallons = ${(inputValue/0.264).toFixed(2)} liters`
    massStr.textContent = ` ${inputValue} kilos = ${(inputValue*2.204).toFixed(2)} Pounds | ${inputValue} pounds = ${(inputValue/2.204).toFixed(2)} Kilograms`
})
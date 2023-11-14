let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')


function roundNumber(number){
    return Math.round(number*100)/100
}

celsiusInput.addEventListener('input', function(){
    let cTt = parseFloat(celsiusInput.value)
    let fTt = (cTt*(9/5)) + 32
    let kTt = cTt + 273.15

    fahrenheitInput.value = roundNumber(fTt)
    kelvinInput.value = roundNumber(kTt)
})

fahrenheitInput.addEventListener('input', function(){
    let fTt = parseFloat(fahrenheitInput.value)
    let cTt = (fTt - 32) * (5/9)
    let kTt = (fTt-32) * (5/9) + 273.15

    celsiusInput.value = roundNumber(cTt)
    kelvinInput.value = roundNumber(kTt)
})

kelvinInput.addEventListener('input', function(){
    let kTt = parseFloat(kelvinInput.value)
    let cTt= kTt - 273.15
    let fTt = (kTt - 273.15) * (9/5) + 32

    celsiusInput.value = roundNumber(cTt)
    fahrenheitInput.value = roundNumber(fTt)
})

btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
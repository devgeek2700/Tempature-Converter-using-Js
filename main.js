let text_cel = document.getElementById('text_cel');
let text_far = document.getElementById('text_far');
let text_kel = document.getElementById('text_kel');
let text_cel2 = document.getElementById('text_cel2');

// Celsius to Fahrenheit

function celTofar(){
    let outputfar = (parseFloat(text_cel.value)*9/5) + 32;

    text_far.value = parseFloat(outputfar.toFixed(2));
    console.log(outputfar);
}

// Celsius to Kelvin

function celToKel(){
    let outputkel = (parseFloat(text_cel2.value)) + 273.15;

    text_kel.value = parseFloat(outputkel.toFixed(2));
    console.log(outputkel);
}

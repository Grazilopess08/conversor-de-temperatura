let celsius = document.getElementById('celsius');
let kelvin = document.getElementById('kelvin');
let fahrenheit = document.getElementById('fahrenheit');
let rankine = document.getElementById('rankine');

celsius.oninput = () => {
    let converter1 = (parseFloat(celsius.value) + 273.15);
    kelvin.value = parseFloat (converter1.toFixed(3));
    let converter2 = (parseFloat(celsius.value) * 9 / 5 + 32);
    fahrenheit.value = parseFloat (converter2.toFixed(3));
    let converter3 = (parseFloat(celsius.value) * 9 / 5 + 491.67);
    rankine.value = parseFloat (converter3.toFixed(3));
}

kelvin.oninput = () => {
    let converter1 = (parseFloat(kelvin.value) - 273.15);
    celsius.value = parseFloat (converter1.toFixed(3));
    let converter2 = (parseFloat(kelvin.value) -273.15 * 9 / 5 + 32);/*()*/
    fahrenheit.value = parseFloat (converter2.toFixed(3));
    let converter3 = (parseFloat(kelvin.value) * 1.8);
    rankine.value = parseFloat (converter3.toFixed(3));
}

fahrenheit.oninput = () => {
    let converter1 = (parseFloat(fahrenheit.value) - 32 * 5 / 9);/*()*/
    celsius.value = parseFloat (converter1.toFixed(3));
    let converter2 = (parseFloat(fahrenheit.value) - 32 * 5 / 9 + 273.15);/*()*/
    kelvin.value = parseFloat (converter2.toFixed(3));
    let converter3 = (parseFloat(fahrenheit.value) + 459.67);
    rankine.value = parseFloat (converter3.toFixed(3));
}

rankine.oninput = () => {
    let converter1 = (parseFloat(rankine.value) - 491.67 * 5 / 9);/*()*/
    celsius.value = parseFloat (converter1.toFixed(3));
    let converter2 = (parseFloat(rankine.value) * 5 / 9);
    kelvin.value = parseFloat (converter2.toFixed(3));
    let converter3 = (parseFloat(rankine.value) - 459.67);
    fahrenheit.value = parseFloat (converter3.toFixed(3));
}
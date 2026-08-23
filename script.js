const titelInput = document.getElementById("titel");
const datumInput = document.getElementById("datum");
const uhrzeitInput = document.getElementById("uhrzeit");
const speichernButton = document.getElementById("speichern");



speichernButton.addEventListener("click", function (){
    
const titel = titelInput.value;
const datum = datumInput.value;
const uhrzeit = uhrzeitInput.value;

console.log(titel);
console.log(datum);
console.log(uhrzeit);



});
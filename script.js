//Modell
let app = document.getElementById("app");
let randomAnswer = [
    "Nei",
    "Ja",
    "Kanskje",
    "Hvorfor vil du vite det...",
    "Slutt å spør",
    "Prøv noe annet",
];
let svar = "";

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <h1>Spør meg</h1>
        <input/>
        <button class="knapp" onclick="answer()"></button>
        <div>${svar}</div>
    `;
}

//Controller
function answer() {
    randomIndex = Math.floor(Math.random() * (randomAnswer.length - 1));
    let splicedAnswer = randomAnswer.splice(randomIndex, 1)[0];
    randomAnswer.push(splicedAnswer);
    svar = splicedAnswer;
    console.log(randomIndex);
    updateView();
}

//Modell
let app = document.getElementById("app");
let randomAnswer = [
    "𝐍𝐞𝐢",
    "𝐉𝐚",
    "𝐊𝐚𝐧𝐬𝐤𝐣𝐞",
    "𝐇𝐯𝐨𝐫𝐟𝐨𝐫 𝐯𝐢𝐥 𝐝𝐮 𝐯𝐢𝐭𝐞 𝐝𝐞𝐭...",
    "𝐒𝐥𝐮𝐭𝐭 å 𝐬𝐩ø𝐫!",
    "𝐏𝐫ø𝐯 𝐧𝐨𝐞 𝐚𝐧𝐧𝐞𝐭",
    "𝐃𝐮 𝐝𝐫ø𝐦𝐦𝐞𝐫",
];
let svar = "";

//View
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <h1 class="tittel">Ⓢⓟøⓡ ⓜⓔⓖ</h1>
        <input class="input"/>
        <button class="knapp" onclick="answer()">✘</button>
        <div class="svar">${svar}</div>
    `;
}

//Controller
function answer() {
    randomIndex = Math.floor(Math.random() * (randomAnswer.length - 1));
    let splicedAnswer = randomAnswer.splice(randomIndex, 1)[0];
    randomAnswer.push(splicedAnswer);
    svar = splicedAnswer;
    updateView();
}

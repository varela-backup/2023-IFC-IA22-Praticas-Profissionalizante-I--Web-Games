// window.addEventListener("gamestarted", ev => console.log("gamestarted"))
// window.addEventListener("letter", ev => console.log("letter"))
// window.addEventListener("correctletter", ev => console.log("correctletter"))
// window.addEventListener("wrongletter", ev => console.log("wrongletter"))
// window.addEventListener("word", ev => console.log("word"))
// window.addEventListener("correctword", ev => console.log("correctword"))
// window.addEventListener("wrongword", ev => console.log("wrongword"))
// window.addEventListener("endgame", ev => console.log("endgame"))

const score = document.querySelector("main div.score")
const corretTypedLetters = document.createElement("span")
let couterCorrectTypedWords = 0

score.append(corretTypedLetters)

window.addEventListener("correctletter", ev => {
  couterCorrectTypedWords++
  corretTypedLetters.innerText = couterCorrectTypedWords + " letras corretas"
})
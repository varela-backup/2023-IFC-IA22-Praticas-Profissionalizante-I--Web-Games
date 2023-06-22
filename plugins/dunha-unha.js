



const score = document.querySelector("main div.score")
const corretTypedLetters = document.createElement("span")

let counterCorrectTypedWords = 0
score.append(corretTypedLetters)






window.addEventListener("correctword", ev => {
  counterCorrectTypedWords++
  corretTypedLetters.innerText = counterCorrectTypedWords + " palavras corretas"
})
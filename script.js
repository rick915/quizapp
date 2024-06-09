import { trocarTema, verificarTema } from "./helpers/tema-helper.js"

 

const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")
botaotema.addEventListener("click", () => {
    trocarTema(body, botaotema)
})

verificarTema(body, botaotema)
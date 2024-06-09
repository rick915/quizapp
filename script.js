import { trocarTema, verificarTema } from "./helpers/tema-helper.js"


const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")
botaotema.addEventListener("click", () => {
    trocarTema(body, botaotema)
})

verificarTema(body, botaotema)

const botoesAssunto = document.querySelectorAll(".assuntos button")
botoesAssunto.forEach(botao => {
    botao.addEventListener("click", selecionarAssunto)
})

function selecionarAssunto(evento){
    const assunto = evento.target.innerText
    localStorage.setItem("assunto", assunto)
    window.location.href = "./pages/quiz/quiz.html"
}


import { trocarTema, verificarTema } from "../../helpers/tema-helper.js"

const botaotema = document.querySelector(".tema button")
const body = document.querySelector("body")

botaotema.addEventListener("click", () => {
    trocarTema(body, botaotema)
})

verificarTema(body, botaotema)

const assunto = localStorage.getItem("assunto")


function alterarAssunto(){
    const divIcone = document.querySelector(".assunto_icone")
    const iconeImg = document.querySelector(".assunto_icone img")
    const assuntoTitulo = document.querySelector(".assunto h1")

    divIcone.classList.add(assunto.toLowerCase())
    iconeImg.setAttribute("src", `../../assets/images/icon-${assunto.toLowerCase()}.svg`)
    iconeImg.setAttribute("alt", `icone de ${assunto}`)
    assuntoTitulo.innerText = assunto
}

alterarAssunto()
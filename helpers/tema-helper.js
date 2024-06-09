let tema ="claro"

export function trocarTema(body, botaotema){
    if(localStorage.getItem("tema")){
        tema = localStorage.getItem("tema")
    }
    
    

    if (tema === "claro"){
        body.classList.add("escuro")
        localStorage.setItem("tema", "escuro")
        botaotema.style.justifyContent = "flex-end"
    } else{
        body.classList.remove("escuro")
        localStorage.setItem("tema", "claro")
        botaotema.style.justifyContent = "flex-start"
    }
}

export function verificarTema(body, botaotema){
    if(localStorage.getItem("tema")){
        tema= localStorage.getItem("tema")
    }

    if (tema === "escuro"){
        body.classList.add("escuro")
        botaotema.style.justifyContent = "flex-end"
    }
}

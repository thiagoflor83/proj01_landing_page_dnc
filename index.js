var seta_dir = window.document.getElementById('seta')
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var set_esq = window.document.getElementById('seta_esq')

function RolarParaDireita(){
    leonardo.style = 'display:none'
    bruna.style ='display:flex'
    set_esq.style ='display:flex;margin-top:55px'
    seta_dir.style ='display:none'
}

function RolarParaEsquerda(){
    leonardo.style = 'display:flex'
    bruna.style ='display:none'
    set_esq.style ='display:none'
    seta_dir.style ='display:flex;margin-top:55px'
}

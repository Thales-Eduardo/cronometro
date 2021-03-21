const tempo = document.querySelector('.tempo')
let horas = 0
let minutos = 0
let segundos = 0

let cronometro

function iniciar() {
    cronometro = setInterval(() => {
        time()
    }, 1000)
}
function parar() {
    clearInterval(cronometro)
}
function zerar() {
    clearInterval(cronometro)
    horas = 0
    minutos = 0
    segundos = 0
    tempo.innerHTML = '00:00:00'
}
function time() {
    segundos++
    if(segundos == 60){
        segundos = 0
        minutos++
    }
    if(minutos == 60){
        minutos = 0
        horas++
    }
    let formato = 
    (horas < 10 ? "0" + horas : horas) + ":" + (minutos < 10 ? "0" + minutos : minutos) + ":" + (segundos < 10 ? "0" + segundos : segundos)
    tempo.innerHTML = formato
}
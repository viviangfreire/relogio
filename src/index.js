const elementoHoras = document.getElementById('horas')
const elementoMinutos = document.getElementById('minutos')
const elementoSegundos = document.getElementById('segundos')


function newTime(){

    const date = new Date();

    const horas = date.getHours()
    const minutos = date.getMinutes()
    const segundos = date.getSeconds()

    elementoHoras.textContent = horas;
    elementoMinutos.textContent = minutos;
    elementoSegundos.textContent = segundos;

}

newTime()
setInterval(newTime,1000)
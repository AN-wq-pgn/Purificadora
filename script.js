function actualizarHora() {
    const horaActualElemento = document.getElementById("hora-actual");
    const estadoElemento = document.getElementById("estado-negocio");

    const ahora = new Date();
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();

    // Formato 12h
    const ampm = horas >= 12 ? "PM" : "AM";
    horas = horas % 12 || 12;
    minutos = minutos < 10 ? "0" + minutos : minutos;

    horaActualElemento.textContent = `Hora actual: ${horas}:${minutos} ${ampm}`;

    // Horario de atención
    const horaApertura = 8;  // 8 AM
    const horaCierre = 19;   // 7 PM (hora 24hr)

    const hora24 = ahora.getHours();
    const isOpen = hora24 >= horaApertura && hora24 < horaCierre;
    if ( isOpen) {
        estadoElemento.textContent = "Estado:  Abierto";
        estadoElemento.style.color = "green";
        return;
    } 
      
     estadoElemento.textContent = "Estado:  Cerrado";
        estadoElemento.style.color = "red";
}

setInterval(actualizarHora, 1000); 
// TODO:  limpiar intervalo
actualizarHora();

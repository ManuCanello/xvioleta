const frase = document.getElementById("xdias");
frase.textContent = calcularDias();

function calcularDias(){
  const hoy = new Date(); // Fecha actual
  const objetivo = new Date("2025-06-14"); // Fecha objetivo (formato YYYY-MM-DD)

  // Normalizar la fecha actual y la fecha objetivo a solo año/mes/día (sin hora)
  const hoyStr = hoy.toISOString().split("T")[0];
  const objetivoStr = objetivo.toISOString().split("T")[0];

  // Verificar si la fecha actual es igual a la fecha objetivo
  if (hoyStr === objetivoStr) {
    return "NOS VEMOS ESTA NOCHE";
  } else {
    const diferenciaMs = objetivo - hoy;
    const diasRestantes = Math.ceil(diferenciaMs / (1000 * 60 * 60 * 24));

    return "Nos vemos dentro de " + diasRestantes + " dias"; 
  }

}

const wpp = document.getElementById("enviar");
wpp.addEventListener("click",mandarWpp.bind(null));

function mandarWpp(){
  const numero = '543492649064';
  const mensaje = 'Hola, este es un mensaje de prueba';
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}





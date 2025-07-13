fetch("horarios.json")
  .then(response => response.json())
  .then(data => {
    const castro = data.castro;

    renderSeccion("❄️ Horario de invierno", castro.invierno);
    renderSeccion("☀️ Horario de verano", castro.verano);
    renderSeccion("🎉 Horario días feriados", castro.feriados);
  });

function renderSeccion(titulo, items) {
  const contenedor = document.querySelector(".horario-container");

  const seccion = document.createElement("div");
  seccion.className = "seccion-horarios";

  const tituloEl = document.createElement("h4");
  tituloEl.className = "titulo-seccion";
  tituloEl.textContent = titulo;

  const tabla = document.createElement("div");
  tabla.className = "tabla-horarios";

  const cabecera = document.createElement("div");
  cabecera.className = "cabecera-horario";
  cabecera.innerHTML = `
    <span class="etiqueta-lugar"></span>
    <span class="etiqueta-hora">Hora de salida - Hora de llegada</span>
  `;
  tabla.appendChild(cabecera);

  items.forEach(item => {
    const fila = document.createElement("div");
    fila.className = "item-horario";
    fila.innerHTML = `<strong>${item.trayecto}</strong><span>${item.horario}</span>`;
    tabla.appendChild(fila);
  });

  seccion.appendChild(tituloEl);
  seccion.appendChild(tabla);
  contenedor.insertBefore(seccion, document.querySelector(".volver-inicio"));
}

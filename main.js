// Escucha cambios en el input con id "quantity"
document.getElementById("quantity").addEventListener("input", (event) => {
  // Inicializa una cadena vacía para almacenar el contenido HTML de los invitados
  let content = "";

  // Obtiene la cantidad ingresada por el usuario
  const quantity = event.target.value;

  // Genera el HTML para cada invitado basado en la cantidad ingresada
  for (let i = 0; i < quantity; i++) {
    content += `<div>
        <label>Invitado ${i + 1}</label>
        <input type="text" id="name[${i}]" >
        <label>Email ${i + 1}</label>
        <input type="email" id="email[${i}]" >
        </div>`;
  }

  // Inserta el HTML generado en el elemento con id "divGuests"
  document.getElementById("divGuests").innerHTML = content;
});

// Escucha el evento "submit" del formulario con id "myForm"
document.getElementById("myForm").addEventListener("submit", (event) => {
  // Evita que se recargue la página al enviar el formulario
  event.preventDefault();

  // Obtiene la cantidad de invitados ingresada por el usuario
  const quantity = document.getElementById("quantity").value;

  // Obtiene los datos del formulario
  const formData = new FormData(event.target);

  // Convierte los datos del formulario a un objeto JavaScript
  const data = Object.fromEntries(formData.entries());

  // Inicializa un array para almacenar los datos de los invitados
  data.guest = [];

  // Recorre los campos de nombre y correo electrónico de cada invitado
  for (let i = 0; i < quantity; i++) {
    // Crea un objeto para almacenar los datos de cada invitado
    const guest = {};

    // Obtiene el nombre del invitado desde el campo correspondiente
    guest.name = document.getElementById(`name[${i}]`).value;

    // Obtiene el correo electrónico del invitado desde el campo correspondiente
    guest.email = document.getElementById(`email[${i}]`).value;

    // Agrega el objeto del invitado al array "guest" en el objeto "data"
    data.guest.push(guest);
  }

  // Configura las opciones para la solicitud fetch
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  // Realiza la solicitud POST a una API y muestra la respuesta en la consola
  fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data));
});

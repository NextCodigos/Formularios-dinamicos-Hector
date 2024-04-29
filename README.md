# Formulario de Invitados

Este es un formulario simple que permite a los usuarios ingresar información sobre un evento y los invitados al mismo.

## Archivos Incluidos

- `index.html`: Contiene la estructura del formulario HTML.
- `main.js`: Contiene el código JavaScript que maneja la generación dinámica de campos de invitados y el envío del formulario.

## Detalles del Código HTML

El archivo `index.html` contiene la estructura del formulario y sus componentes:

- `<form>`: Inicia el formulario principal.
- `<input type="text">`: Campo de texto para ingresar el nombre del responsable del evento.
- `<input type="number">`: Campo numérico para ingresar la cantidad de invitados.
- `<div id="divGuests">`: Contenedor donde se generarán dinámicamente los campos de nombre y correo electrónico para cada invitado.
- `<button type="submit">`: Botón para enviar el formulario.

## Detalles del Código JavaScript

El archivo `main.js` contiene el código JavaScript que agrega funcionalidad al formulario:

- **Generación dinámica de campos de invitados**: Escucha cambios en el campo de cantidad de invitados y genera dinámicamente campos de nombre y correo electrónico para cada invitado.
- **Envío del formulario**: Maneja el evento de envío del formulario, recopila los datos de todos los invitados y los envía a través de una solicitud POST a una API de prueba (JSONPlaceholder).

## Uso

1. Abre el archivo `index.html` en un navegador web.
2. Ingresa el nombre del responsable del evento.
3. Ingresa la cantidad de invitados.
4. Para cada invitado, ingresa su nombre y correo electrónico.
5. Haz clic en el botón "Guardar" para enviar el formulario.

## Notas Adicionales

- El código utiliza HTML5 y JavaScript moderno para crear una experiencia interactiva para el usuario.
- Se utiliza la API `fetch()` para realizar una solicitud POST a una URL de prueba proporcionada por JSONPlaceholder. Esto simula el envío de datos del formulario a un servidor real.

¡Disfruta del formulario de invitados!

document.getElementById("quantity").addEventListener("input", (event) => {
  let content = "";

  const quantity = event.target.value;

  for (let i = 0; i < quantity; i++) {
    content += `<div>
        <label>Invitado ${i + 1}</label>
        <input type="text" id="name[${i}]" >
        <label>Email ${i + 1}</label>
        <input type="email" id="email[${i}]" >
        </div>`;
  }

  document.getElementById("divGuests").innerHTML = content;
});

document.getElementById("myForm").addEventListener("submit", (event) => {
  // No recargue pagina
  event.preventDefault();

  const quantity = document.getElementById("quantity").value;

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData.entries());
  //   console.log(data);

  data.guest = [];
  for (let i = 0; i < quantity; i++) {
    const guest = {};
    guest.name = document.getElementById(`name[${i}]`).value;
    guest.email = document.getElementById(`email[${i}]`).value;

    data.guest.push(guest);
  }
  console.log(data);
});

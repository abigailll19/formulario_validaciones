function agregarCliente() {
  // obtener valores de los campos
  const nombre   = document.getElementById("nombre").value.trim();
  const correo   = document.getElementById("correo").value.trim();
  const telefono = document.getElementById("telefono").value.trim();
  const cedula   = document.getElementById("cedula").value.trim();
  const pais     = document.getElementById("pais").value;

  // validar campos vacíos
  if (nombre === "" || correo === "" || telefono === "" || cedula === "" || pais === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

    // Validar nombre: mínimo 3 letras
  if (nombre.length < 3) {
    alert("El nombre debe tener al menos 2 caracteres.");
    document.getElementById("nombre").focus();
    retur
  }
  // validar correo electrónico con expresión regular
  const regexCorreo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,4}$/;
  if (!regexCorreo.test(correo)) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  // validar teléfono: solo números, entre 7 y 15 dígitos
  if (!/^\d{7,15}$/.test(telefono)) {
    alert("El teléfono debe contener entre 7 y 15 dígitos numéricos.");
    return;
  }

  // validar cédula: solo números, exactamente 10 dígitos
  if (!/^\d{10}$/.test(cedula)) {
    alert("La cédula debe contener exactamente 10 dígitos numéricos.");
    return;
  }

  // insertar nueva fila en la tabla
  const tabla = document.getElementById("tablaClientes").getElementsByTagName("tbody")[0];
  const nuevaFila = tabla.insertRow();

  nuevaFila.innerHTML = `
    <td>${nombre}</td>
    <td>${correo}</td>
    <td>${telefono}</td>
    <td>${cedula}</td>
    <td>${pais}</td>
  `;

  // limpiar campos
  document.getElementById("nombre").value   = "";
  document.getElementById("correo").value   = "";
  document.getElementById("telefono").value = "";
  document.getElementById("cedula").value   = "";
  document.getElementById("pais").value     = "";
}

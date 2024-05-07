
var cuentas = [
    { nombre: 'Mali', saldo: 200 , pass: '12345'},
    { nombre: 'Gera', saldo: 290 , pass: '010220'},
    { nombre: 'Maui', saldo: 67 , pass: '1234567890'}
  ];

  var usuarioActual;

  function login(form) {
    var usuario = form.usuario.value;
    var password = form.password.value;

    console.log("Usuario:", usuario);
    console.log("Contraseña:", password);
  
    // Verificar si el usuario existe en el array de cuentas
    var usuarioEncontrado = cuentas.find(function(cuenta) {
      return cuenta.nombre === usuario && cuenta.pass === password;
    });
  
    if (usuarioEncontrado) {
      // Guardar el usuario encontrado en la variable global usuarioActual
      usuarioActual = usuario;
      
      // Redireccionar a la página principal
      location = "principal.html";
    } else {
      // Si el usuario y/o contraseña son incorrectos, mostrar un mensaje de error
      alert("Usuario y/o contraseña incorrectos");
    }
  }

  function transferir(idEmisor, idReceptor){
    var CantidadT=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById(idEmisor).value);
    var Cantidad2=parseInt(document.getElementById(idReceptor).value);

    document.getElementById(idEmisor).value = (Cantidad1 - CantidadT);
    document.getElementById(idReceptor).value = (Cantidad2 + CantidadT);
}

function depositar(idReceptor){
    var CantidadD=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById(idReceptor).value);

    document.getElementById(idReceptor).value = (Cantidad1 + CantidadD);
}

function retirar(idReceptor){
    var CantidadD=parseInt(document.getElementById('cant').value);
    var Cantidad1=parseInt(document.getElementById(idReceptor).value);

    document.getElementById(idReceptor).value = (Cantidad1 - CantidadD);
}


document.addEventListener("DOMContentLoaded", function() {
    // Obtén el elemento HTML donde deseas mostrar el saldo
    var nomUsuario = document.getElementById("NomUsuario");

    console.log(usuarioActual);

    // Actualiza el contenido de ese elemento con el valor de la variable saldo
    nomUsuario.textContent = usuarioActual;
});
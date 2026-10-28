function validarContrasena () {
    let contrasena = document.getElementById("contrasena");
    let confirmar = document.getElementById("confirmar");
    if (contrasena.value !== "" && confirmar.value !== "") {
        if (contrasena.value == confirmar.value) {
            alert("Registro exitoso");
            return true;
        } else {
            alert("Las contraseñas no coinciden");
            return false;
        }
    } else {
        alert("Los campos están vacíos");
        return false;
    }
}
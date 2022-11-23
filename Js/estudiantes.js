const boton_iniciar_sesion = document.querySelector('#iniciar_sesion')
const boton_registrarse = document.querySelector('#registrarse')
const div_ingresar = document.querySelector('#ingresar')
let estudiantes = []


boton_iniciar_sesion.onclick = () => {
    console.log('haosdf')
    div_ingresar.innerHTML = `
    <h2>Inicia sesion.</h2>
    <label for="email">Email: </label><input type="text" name="email">
    <label for="password">Contraseña: </label><input type="text" name="password">
    `
}

boton_registrarse.onclick = () => {
    div_ingresar.innerHTML = `
    <h2>Registrate.</h2>
    <label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre">
    <label for="apellido">Apellido: </label><input type="text" name="apellido" id="apellido">
    <label for="DNI">DNI: </label><input type="number" name="DNI" id="dni">
    <label for="email">Email: </label><input type="email" name="email" id="email">
    <label for="password">Contraseña: </label><input type="password" name="password" id="password">
    <button type="submit" id="enviar">Registrarte</button>
    `
    const input_nombre = document.querySelector('#nombre')
    const input_nombre = document.querySelector('#nombre')
    const input_nombre = document.querySelector('#nombre')
    const input_nombre = document.querySelector('#nombre')
    
    const enviar_registro = document.querySelector('#enviar')
    enviar_registro.onclick = () => {
        input_nombre.value
    }
    
}



/* const user = {
    'nombre': input_nombre.
}

console.log(user) */
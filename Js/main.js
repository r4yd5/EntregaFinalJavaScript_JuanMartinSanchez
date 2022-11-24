const estudiantes = [];
const profesores = [];
const cursos = [
    {'nombre':'JavaScript','img':'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'},
    {'nombre':'Python','img':'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d2e8896750899.5eb54f3381452.png'},
    {'nombre':'Django','img':'https://theaveragenz.com/wp-content/uploads/2018/01/1_1OBwwxzJksMv0YDD-XmyBw.png'},
    {'nombre':'NodeJs','img':'https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png'},
    {'nombre':'React','img':'https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png'},
    {'nombre':'Java','img':'https://st3.depositphotos.com/13803186/19300/v/450/depositphotos_193009322-stock-illustration-java-source-trademark-logo-design.jpg'},
    {'nombre':'CSS','img':'https://soydigital.com/wp-content/uploads/2020/05/CSS3.jpg'}

]

function principal() {

    const div_principal = document.querySelector('#div_principal')
    const boton_cursos = document.querySelector('#boton_cursos')
    const boton_estudiantes = document.querySelector('#boton_estudiantes')
    const boton_profesores = document.querySelector('#boton_profesores')

    function volver_al_inicio(boton, div) {
        boton.onclick = () => {
            div.innerHTML = `
            <div id="inicio">
            <h1>Bienvenido a la plataforma Daeffe</h1>
            <h2>La plataforma de cursos sobre programacion</h2>
                <ul>
                    <li><button id="boton_cursos">Cursos</button></li>
                    <li><button id="boton_estudiantes">Estudiantes</button></li>
                    <li><button id="boton_profesores">Profesores</button></li>
                </ul>
            </div>
        `
            principal()
        }
    }

    boton_cursos.onclick = () => {
        div_principal.innerHTML = `
        <h2>Elige el curso al que quieres inscribirte</h2>
        <button id="boton_volver_inicio">Volver al inicio</button>`
        cursos.forEach(i => {
            div_principal.innerHTML +=
            `<div class="card " style="width:18rem; margin:4px">
            <img class="card-img-top" src="${i['img']}" alt="Card image cap">
            <h5 class="card-title">Curso de ${i['nombre']}</h5>
            <button id="boton" class="btn btn-primary botones_inscribirse">Inscribirse</button>
            </div>`
        }
        )
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)
    }

    boton_estudiantes.onclick = () => {
        div_principal.innerHTML = 
        `<h1>Bienvenid@ al apartado de estudiantes</h1>
        <h2>Inicia sesion o Registrate</h2>
        <ul>
            <li><button id="boton_iniciar_sesion">Iniciar Sesion</button></li>
            <li><button id="boton_registrarse">Registrarse</button></li>
            <li><button id="boton_volver_inicio">Volver al inicio</button></li>
        </ul>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)

        

        const boton_iniciar_sesion = document.querySelector('#boton_iniciar_sesion')
        const boton_registrarse = document.querySelector('#boton_registrarse')

        boton_iniciar_sesion.onclick = () => {
            div_principal.innerHTML =
            `<h2>Inicia sesion.</h2>
            <label for="email">Email: </label><input type="text" name="email">
            <label for="password">Contraseña: </label><input type="text" name="password">
            <button type="submit" id="enviar">Registrarte</button>
            <button id="boton_volver_inicio">Volver al inicio</button>`
            const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
            volver_al_inicio(boton_volver_inicio, div_principal)
                
        }


        boton_registrarse.onclick = () => {
            div_principal.innerHTML =
                `<h2>Registrate.</h2>
                <label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre">
                <label for="apellido">Apellido: </label><input type="text" name="apellido" id="apellido">
                <label for="DNI">DNI: </label><input type="number" name="DNI" id="dni">
                <label for="email">Email: </label><input type="email" name="email" id="email">
                <label for="password">Contraseña: </label><input type="password" name="password" id="password">
                <button type="submit" id="enviar">Registrarte</button>
                <button id="boton_volver_inicio">Volver al inicio</button>`
                const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
                volver_al_inicio(boton_volver_inicio, div_principal)
                
                const input_nombre = document.querySelector('#nombre')
                const input_apellido = document.querySelector('#apellido')
                const input_dni = document.querySelector('#dni')
                const input_email = document.querySelector('#email')
                const input_password = document.querySelector('#password')
                const enviar_registro = document.querySelector('#enviar')
    
                enviar_registro.onclick = () => {
                    const user = {
                        'nombre':input_nombre.value,
                        'apellido':input_apellido.value,
                        'dni':input_dni.value,
                        'email':input_email.value,
                        'password':input_password.value
                    }
    
                estudiantes.push(user)
        }

    }

    }

    boton_profesores.onclick = () => {
    
            div_principal.innerHTML =
            `<h1>Bienvenid@ al apartado de profesores</h1>
            <h2>Inicia sesion.</h2>
            <label for="email">Email: </label><input type="text" name="email">
            <label for="password">Contraseña: </label><input type="text" name="password">
            <button type="submit" id="enviar">Registrarte</button>
            <button id="boton_volver_inicio">Volver al inicio</button>`
            const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
            volver_al_inicio(boton_volver_inicio, div_principal)
                
        
    }


}
principal()











class Profesor {
    constructor(nombre_apellido, username, password) {
        this.nombre_apellido = nombre_apellido;
        this.username = username;
        this.password = password;
    }

    cargar_notas(v1) {
        if (v1.length !== 0) {
            v1.forEach(i => {
                alert(`Alumno: ${i['nombre_apellido']}. Ingrese sus notas.`)
                i['nota_1'] = parseFloat(prompt('Primer parcial: '))
                i['nota_2'] = parseFloat(prompt('Segundo parcial: '))
                i['nota_final'] = parseFloat(prompt('Final: '))
            });
        } else {
            alert('No hay alumnos en el sistema aun.')
        }
    }

    ver_notas_globales(v1) {
        if (v1.length !== 0) {
            v1.forEach(i => {
                alert(`Alumno: ${i['nombre_apellido']}. Parcial 1: ${i['nota_1']}. Parcial 2: ${i['nota_2']}. Final: ${i['nota_final']}`)
            });
        } else {
            alert('No hay alumnos en el sistema aun.')
        }
    }

    ver_promedio_curso(v1) {
        if (v1.length !== 0) {
            let acum = 0
            let prom = 0
            v1.forEach(i => {
                acum += (i['nota_1'] + i['nota_2'] + i['nota_final']) / 3
            });
            prom = acum / v1.length
            alert(`El promedio general del curso es: ${prom}`)
        } else {
            alert('No hay alumnos en el sistema aun.')
        }
    }

}






















































/* 
class Alumno extends Profesor {
    nota_1 = 0
    nota_2 = 0
    nota_final = 0
    constructor(nombre_apellido,username,password){
        super(nombre_apellido,username,password)
    }

    ver_notas(){
        alert(`Primer parcial: ${this.nota_1}, Segundo parcial: ${this.nota_2}, Nota del final: ${this.nota_final}`)
    }


}
    
const registrarse = (v1,clase) => {
    let flag = true

    while (flag){        
        nombre_apellido = prompt('Ingrese su nombre y apellido.');
        username = prompt('Ingrese un nombre de usuario.');
        password = prompt('Ingrese una contraseña.');
        flag = v1.some((i) => i['username'] == username)
        if (flag === true){
            alert('El nombre de usuario ya esta en uso. Prueba con otro.')
        }
        else{
            v1.push(new clase(nombre_apellido,username,password))
            break
        }
    }
}

const iniciar_sesion = (v1) => {
    const username = prompt('Ingrese su nombre de usuario.');
    const password = prompt('Ingrese su contraseña.');
    for (const i of v1){
        if (i['username'] == username && i['password'] == password){
            return i
        }else{
            alert('Usuario no encontrado.')
        }
    }
}
        

 */
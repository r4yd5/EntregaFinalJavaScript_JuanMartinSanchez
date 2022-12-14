let estudiantes = [];

class Estudiante extends Profesor {

    constructor(nombre, apellido, email, password, dni, cursos_inscriptos) {
        super(nombre, apellido, email, password, dni)
        this.cursos_inscriptos = cursos_inscriptos
    }

    ver_mis_notas(div) {
        if (this.cursos_inscriptos.length == 0) {
            div.innerHTML = `<h3>No te has inscripto a ningun curso aun.</h3>`
        } else {
            div.innerHTML = ''
            this.cursos_inscriptos.forEach(e => {
                div.innerHTML +=
                    `<h3>${e['nombre']}</h3>   
                <ul>
                    <li><p>Nota 1: ${e['nota1'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota 2: ${e['nota2'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota Final: ${e['nota3'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota Final (promedio): ${e['promedio'] || 'La notas no se pueden promediar porque no se cargaron todas las notas.'}</p></li>
                </ul>
                `
            })
        }

        div.innerHTML += `<button id="boton_volver_inicio">Volver al inicio</button>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div)
    }

    ver_mis_cursos(div) {
        if (this.cursos_inscriptos.length == 0) {
            div.innerHTML = `<h3>No te has inscripto a ningun curso aun.</h3>`
        } else {
            div.innerHTML =
                `<h3>Tus cursos son: </h3>
                <ul id="lista_cursos"></ul>`
            const lista_cursos = document.getElementById('lista_cursos')
            this.cursos_inscriptos.forEach(e => {
                const elemento_lista = document.createElement('li')
                elemento_lista.setAttribute('id', 'elemento_lista')
                elemento_lista.insertAdjacentText('afterbegin', `Nombre: ${e['nombre']} - Profesor: ${e['profesor']}`)
                lista_cursos.append(elemento_lista)
            })

        }
        div.innerHTML += `<button id="boton_volver_inicio">Volver al inicio</button>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div)
    }

    inscribirse_curso(nombre, profesor) {
        const curso_a_agregar = new Cursos(nombre, profesor)
        this.cursos_inscriptos.push(curso_a_agregar)
        return curso_a_agregar
    }

    cerrar_sesion() {
        localStorage.removeItem('estudiante_iniciado')
        Swal.fire({
            text: 'Se ha cerrado la sesion.',
            icon: 'info',
            confirmButtonText: 'Confirmar'
        })
            .then(function () {
                location.reload()
            })
    }

}

const apartado_estudiantes_logueados = (estudiante_iniciado) => {

    div_principal.innerHTML =
        `<div id="inicio">
            <h1>Bienvenid@ ${estudiante_iniciado['nombre']} ${estudiante_iniciado['apellido']}</h1>
            <h2>Selecciona una opcion</h2>
                <ul>
                    <li><button id="boton_cursos">Cursos</button></li>
                    <li><button id="boton_mis_notas">Mis notas</button></li>
                    <li><button id="boton_mis_cursos">Mis cursos</button></li>
                    <li><button id="boton_cerrar_sesion">Cerrar sesion</button></li>
                </ul>
            </div>`

    apartado_cursos(estudiante_iniciado)
    const boton_mis_notas = document.querySelector('#boton_mis_notas')
    const boton_mis_cursos = document.querySelector('#boton_mis_cursos')
    const boton_cerrar_sesion = document.querySelector('#boton_cerrar_sesion')

    boton_mis_notas.onclick = () => {
        estudiante_iniciado.ver_mis_notas(div_principal)

    }

    boton_mis_cursos.onclick = () => {
        estudiante_iniciado.ver_mis_cursos(div_principal)
    }

    boton_cerrar_sesion.onclick = () => {
        estudiante_iniciado.cerrar_sesion()
    }


}

const apartado_estudiantes_visitantes = () => {
    boton_estudiantes.onclick = () => {
        div_principal.innerHTML =
            `<h1>Apartado de estudiantes</h1>
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
            <label for="email">Email: </label><input type="email" name="email" id="email">
            <label for="password">Contraseña: </label><input type="password" name="password" id="password">
            <button type="submit" id="enviar_login">Iniciar sesion</button>
            <button id="boton_volver_inicio">Volver al inicio</button>`

            const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
            volver_al_inicio(boton_volver_inicio, div_principal)

            const input_email = document.querySelector('#email')
            const input_password = document.querySelector('#password')
            const enviar_login = document.querySelector('#enviar_login')

            enviar_login.onclick = () => {
                iniciar_sesion(JSON.parse(localStorage.getItem('estudiantes')), input_email.value, input_password.value, 'estudiante_iniciado')
                return
            }

        }
        boton_registrarse.onclick = () => {

            div_principal.innerHTML =
                `<h2>Registrate.</h2>                
                <label for="nombre">Nombre: </label><input type="text" name="nombre" id="nombre" required>
                <label for="apellido">Apellido: </label><input type="text" name="apellido" id="apellido">
                <label for="DNI">DNI: </label><input type="number" name="DNI" id="dni">
                <label for="email">Email: </label><input type="email" name="email" id="email">
                <label for="password">Contraseña: </label><input type="password" name="password" id="password">
                <button type="submit" id="enviar">Registrarte</button>
                <button id="boton_volver_inicio">Volver al inicio</button>
                `

            const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
            volver_al_inicio(boton_volver_inicio, div_principal)

            const input_nombre = document.querySelector('#nombre')
            const input_apellido = document.querySelector('#apellido')
            const input_dni = document.querySelector('#dni')
            const input_email = document.querySelector('#email')
            const input_password = document.querySelector('#password')
            const enviar_registro = document.querySelector('#enviar')



            enviar_registro.onclick = () => {
                estudiantes = JSON.parse(localStorage.getItem('estudiantes'))
                estudiantes == null ? estudiantes = [] : {}
                if (input_nombre.value && input_apellido.value && input_dni.value && input_email.value && input_password.value) {
                    if (estudiantes.some((i) => i['email'] == input_email.value)) {
                        Swal.fire({
                            text: 'La direccion de correo electronico ya pertenece a otro usuario. Prueba con otro.',
                            icon: 'error',
                            confirmButtonText: 'Confirmar'
                        })
                    } else {
                        const user = new Estudiante(input_nombre.value, input_apellido.value, input_dni.value, input_email.value, input_password.value, [])
                        estudiantes.push(user)
                        localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
                        Swal.fire({
                            text: 'Estudiante registrado.',
                            icon: 'success',
                            confirmButtonText: 'Confirmar'
                        })
                            .then(function () {
                                location.reload()
                            })
                    }
                } else {
                    Swal.fire({
                        text: 'Se requiere que se rellenen todos los campos.',
                        icon: 'info',
                        confirmButtonText: 'Confirmar'
                    })
                }
            }
        }
    }
}
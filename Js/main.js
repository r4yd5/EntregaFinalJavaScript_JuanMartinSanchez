

const div_principal = document.querySelector('#div_principal')

const recargar_pagina = () => location.reload()

const iniciar_sesion = (array, email, password, usuario) => {

    let flag = false

    for (let i of array) {
        if (i['email'] == email && i['password'] == password) {
            localStorage.setItem(usuario, JSON.stringify(i))
            flag = true
            break
        } else {
            flag = false
        }

    }
    if (flag) {
        Swal.fire({
            text: "Inicio de sesion valido.",
            icon: 'success',
            confirmButtonText: 'Confirmar'
        })
            .then(function () {
                location.reload()
            })
    } else {
        Swal.fire({
            text: "Usuario no encontrado.",
            icon: 'error',
            confirmButtonText: 'Confirmar'
        })
    }

}

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

function principal() {

    if (localStorage['estudiante_iniciado']) {
        let estudiante_iniciado = JSON.parse(localStorage.getItem('estudiante_iniciado'))
        estudiante_iniciado = new Estudiante(estudiante_iniciado['nombre'], estudiante_iniciado['apellido'], estudiante_iniciado['email'], estudiante_iniciado['password'], estudiante_iniciado['dni'], estudiante_iniciado['cursos_inscriptos'])

        apartado_estudiantes_logueados(estudiante_iniciado)

    } else if (localStorage['profesor_iniciado']) {
        let profesor_iniciado = JSON.parse(localStorage.getItem('profesor_iniciado'))
        profesor_iniciado = new Profesor(profesor_iniciado['nombre'], profesor_iniciado['apellido'], profesor_iniciado['email'], profesor_iniciado['password'], profesor_iniciado['dni'], profesor_iniciado['curso'])

        apartado_profesores_logueados(profesor_iniciado)

    } else {

        apartado_cursos()

        apartado_estudiantes_visitantes()

        apartado_profesores_visitantes()

    }

}

principal()



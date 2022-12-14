const datos_profesores = async () => {
    const response = await fetch('../JSON/profesores.json')
    const profesores = await response.json()
    return profesores
}

datos_profesores().then(profesores => {
    localStorage.setItem('profesores', JSON.stringify(profesores))
})

class Profesor {
    constructor(nombre, apellido, email, password, dni, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.dni = dni;
        this.curso = curso;
    }

    cargar_notas(div, array_estudiantes, funcion = null) {
        div.innerHTML = ''
        let flag = false
        if (localStorage.getItem('estudiantes')) {

            if (array_estudiantes.length !== 0) {
                
                for (let i = 0; i < array_estudiantes.length; i++) {
                    for (const curso of array_estudiantes[i]['cursos_inscriptos']) {
                        if (curso['nombre'] == this.curso && funcion == null) {
    
                            div.innerHTML +=
                                `<h2>Ingrese la nota de ${array_estudiantes[i]['nombre']}</h2>
                            <label for="nota1">Nota 1</label><input type="number" name="nota1" class="nota1">
                            <label for="nota1">Nota 2</label><input type="number" name="nota2" class="nota2">
                            <label for="nota1">Nota 3</label><input type="number" name="nota3" class="nota3">`
                            flag = true
    
                        } if (funcion != null) {
                            funcion(i, curso, div, array_estudiantes)
                            flag = 'ver_notas'
                        }
                    }
                }
                if (flag == true) {
                    
                    div.innerHTML +=
                        `<button id="cargar_notas">Cargar</button>
                    <button id="boton_volver">Volver</button>`
                    const cargar_notas = document.querySelector('#cargar_notas')
                    const boton_volver = document.querySelector('#boton_volver')
                    volver_al_inicio(boton_volver, div)
                    cargar_notas.onclick = () => {
                        debugger
    
                        const input_nota1 = document.querySelectorAll('.nota1')
                        const input_nota2 = document.querySelectorAll('.nota2')
                        const input_nota3 = document.querySelectorAll('.nota3')
    
                        for (let i = 0; i < array_estudiantes.length; i++) {
                            for (const curso of array_estudiantes[i]['cursos_inscriptos']) {
                                if (curso['nombre'] == this.curso) {
                                    curso['nota1'] = input_nota1[i].value
                                    curso['nota2'] = input_nota2[i].value
                                    curso['nota3'] = input_nota3[i].value
                                    curso['promedio'] = ((parseFloat(curso['nota1']) + parseFloat(curso['nota2']) + parseFloat(curso['nota3'])) / 3)
                                }
                            }
                        }
                        localStorage.setItem('estudiantes', JSON.stringify(array_estudiantes))
                        Swal.fire({
                            text: 'Notas cargadas.',
                            icon: 'success',
                            confirmButtonText: 'Confirmar'
                        })
                            .then(function () {
                                location.reload()
                            })
                    }
                } else if (flag == 'ver_notas') {
                    div.innerHTML += `<button id="boton_volver">Volver</button>`
                    const boton_volver = document.querySelector('#boton_volver')
                    volver_al_inicio(boton_volver, div)
                } else {
                    this.no_estudiantes(div)
                }
            } else {
                this.no_estudiantes(div)
            }
        } else{
            this.no_estudiantes(div)
        }

    }

    ver_notas(div, array_estudiantes) {

        const mostrar_notas = (i, curso, div, array_estudiantes) => {

            div.innerHTML +=
                `<h2>Las notas del estudiante: ${array_estudiantes[i]['nombre']}</h2>
            <ul>
                <li><p>Nota 1: ${curso['nota1'] || 'Las notas no han sido cargadas aun.'} </p></li>
                <li><p>Nota 2: ${curso['nota2'] || 'Las notas no han sido cargadas aun.'} </p></li>
                <li><p>Nota 3: ${curso['nota3'] || 'Las notas no han sido cargadas aun.'}</p></li>
                <li><p>Nota final (promedio): ${curso['promedio'] || 'No se puede promediar porque faltan cargar notas.'} </p></li>
            </ul>`
        }
        this.cargar_notas(div, array_estudiantes, mostrar_notas)
    }

    cerrar_sesion() {
        localStorage.removeItem('profesor_iniciado')
        Swal.fire({
            text: 'Se ha cerrado la sesion.',
            icon: 'info',
            confirmButtonText: 'Confirmar'
        })
            .then(function () {
                location.reload()
            })
    }

    no_estudiantes(div) {
        div.innerHTML =
            `<h1>No hay estudiantes de ${this.curso} inscriptos aun.</h1>
        <button id="boton_volver">Volver</button>`
        const boton_volver = document.querySelector('#boton_volver')
        volver_al_inicio(boton_volver, div)
    }
}

const apartado_profesores_logueados = (profesor_iniciado) => {
    div_principal.innerHTML = `<h1>Bienvenid@ ${profesor_iniciado['nombre']} ${profesor_iniciado['apellido']}</h1>
    <h2>Selecciona una opcion</h2>
    <ul>
        <li><button id="boton_cargar_notas">Cargar notas</button></li>
        <li><button id="boton_ver_notas">Ver notas</button></li>
        <li><button id="boton_cerrar_sesion">Cerrar sesion</button></li>
    </ul>`

    const boton_cargar_notas = document.querySelector('#boton_cargar_notas')
    const boton_ver_notas = document.querySelector('#boton_ver_notas')
    const boton_cerrar_sesion = document.querySelector('#boton_cerrar_sesion')
    estudiantes = JSON.parse(localStorage.getItem('estudiantes'))

    boton_cargar_notas.onclick = () => {
        profesor_iniciado.cargar_notas(div_principal, estudiantes)
    }

    boton_ver_notas.onclick = () => {
        profesor_iniciado.ver_notas(div_principal, estudiantes)
    }

    boton_cerrar_sesion.onclick = () => {
        profesor_iniciado.cerrar_sesion()
    }
}

const apartado_profesores_visitantes = () => {
    boton_profesores.onclick = () => {

        div_principal.innerHTML =
            `<h1>Apartado de profesores</h1>
        <h2>Inicia sesion.</h2>
        <label for="email">Email: </label><input type="text" name="email" id="input_email">
        <label for="password">Contraseña: </label><input type="password" name="password" id="input_password">
        <button type="submit" id="enviar_login">Iniciar sesion</button>
        <button id="boton_volver_inicio">Volver al inicio</button>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)

        const input_email = document.querySelector('#input_email')
        const input_password = document.querySelector('#input_password')
        const enviar_login = document.querySelector('#enviar_login')

        enviar_login.onclick = () => {
            iniciar_sesion(JSON.parse(localStorage.getItem('profesores')), input_email.value, input_password.value, 'profesor_iniciado')
            return
        }

    }
}
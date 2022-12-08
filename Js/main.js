

let estudiantes = [];

const profesores = [
    new Profesor('Maury', 'Wadforth', 'profesor1@gmail.com', 'pdYjWc', 11111111, 'JavaScript'),
    new Profesor('Evelyn', 'Maddock', 'profesor2@gmail.com', '1Uy7shv6', 22222222, 'Python'),
    new Profesor('Viviana', 'Armytage', 'profesor3@gmail.com', 'ZhKcibBT8ju', 33333333, 'CSS'),
    new Profesor('Alphonse', 'Fass', 'profesor4@gmail.com', 'FqocJGBy', 44444444, 'Django'),
    new Profesor('Pen', 'Gresswood', 'profesor5@gmail.com', 'sQJhqHeMQrq3', 55555555, 'Java'),
    new Profesor('Sherm', 'Terne', 'profesor6@gmail.com', 'NkE3fn59LuQn', 66666666, 'React'),
    new Profesor('Nolana', 'MacRedmond', 'profesor7@gmail.com', 'aSnxjgc', 77777777, 'NodeJs'),
];

localStorage.setItem('profesores', JSON.stringify(profesores))

const cursos = [
    { 'nombre': 'JavaScript', 'img': 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { 'nombre': 'Python', 'img': 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/9d2e8896750899.5eb54f3381452.png' },
    { 'nombre': 'Django', 'img': 'https://theaveragenz.com/wp-content/uploads/2018/01/1_1OBwwxzJksMv0YDD-XmyBw.png' },
    { 'nombre': 'NodeJs', 'img': 'https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png' },
    { 'nombre': 'React', 'img': 'https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png' },
    { 'nombre': 'Java', 'img': 'https://st3.depositphotos.com/13803186/19300/v/450/depositphotos_193009322-stock-illustration-java-source-trademark-logo-design.jpg' },
    { 'nombre': 'CSS', 'img': 'https://soydigital.com/wp-content/uploads/2020/05/CSS3.jpg' }
]
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

    flag == false ? alert('Usuario no encontrado.') :
        alert('Inicio de sesion valido.')
    recargar_pagina()


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

const apartado_cursos = (estudiante_iniciado) => {
    boton_cursos.onclick = () => {
        div_principal.innerHTML =
            `<h2>Elige el curso al que quieres inscribirte</h2>
                    <button id="boton_volver_inicio">Volver al inicio</button>`
        e = 0
        cursos.forEach(i => {
            div_principal.innerHTML +=
                `<div class="card" id="${e}" style="width:18rem; heigth:18rem; margin:4px">
                    <img class="card-img-top" src="${i['img']}" alt="Card image cap">
                    <h5 class="card-title">Curso de ${i['nombre']}</h5>
                    <button id="" class="btn btn-primary botones_inscribirse">Inscribirse</button>
                </div>`
            e++
        }
        )
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)
        const botones = document.querySelectorAll(".botones_inscribirse");

        for (let i = 0; i < botones.length; i++) {
            botones[i].onclick = () => {
                if (estudiante_iniciado) {
                    const flag = estudiante_iniciado.cursos_inscriptos.find(e => {
                        return e.nombre === cursos[i]['nombre']
                    })
                    if (flag) {
                        alert('Ya te has inscripto a ese curso.')

                    } else {

                        estudiantes = JSON.parse(localStorage.getItem('estudiantes'))
                        for (let e = 0; e < estudiantes.length; e++) {
                            if (estudiantes[e]['email'] == estudiante_iniciado['email']) {
                                estudiantes[e]['cursos_inscriptos'].push(estudiante_iniciado.inscribirse_curso(cursos[i]['nombre']))
                            }
                        }
                        alert(`Te has inscripto con exito al curso de ${cursos[i]['nombre']}.`)
                        localStorage.setItem('estudiante_iniciado', JSON.stringify(estudiante_iniciado))
                        localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
                    }
                } else {
                    alert('Registrate o inicia sesion como estudiante.')
                    div_principal.innerHTML = `
                        <div id="inicio">
                            <h1>Bienvenido a la plataforma Daeffe</h1>
                            <h2>La plataforma de cursos sobre programacion</h2>
                            <ul>
                                <li><button id="boton_cursos">Cursos</button></li>
                                <li><button id="boton_estudiantes">Estudiantes</button></li>
                                <li><button id="boton_profesores">Profesores</button></li>
                            </ul>
                        </div>`
                    principal()
                }
            }
        }
    }
}

const apartado_estudiantes_logueados = (estudiante_iniciado) => {

    div_principal.innerHTML =
        `<div id="inicio">
            <h1>Bienvenid@ ${estudiante_iniciado['nombre']}</h1>
            <h2>Elige una opcion</h2>
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
        if (estudiante_iniciado.cursos_inscriptos.length == 0) {
            div_principal.innerHTML = `<h3>No te has inscripto a ningun curso aun.</h3>`
        } else {
            div_principal.innerHTML = ''
            estudiante_iniciado.cursos_inscriptos.forEach(e => {
                div_principal.innerHTML +=
                    `<h3>${e['nombre']}</h3>   
                <ul>
                    <li><p>Nota 1: ${e['nota1'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota 2: ${e['nota2'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota Final: ${e['nota3'] || 'La nota aun no ha sido cargada.'}</p></li>
                    <li><p>Nota Final (promedio): ${e['promedio'] || 'La notas no se pueden promediar porque no se cargaron todas las notas,'}</p></li>
                </ul>
                `
            })
        }

        div_principal.innerHTML += `<button id="boton_volver_inicio">Volver al inicio</button>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)

    }

    boton_mis_cursos.onclick = () => {
        if (estudiante_iniciado.cursos_inscriptos.length == 0) {
            div_principal.innerHTML = `<h3>No te has inscripto a ningun curso aun.</h3>`
        } else {
            div_principal.innerHTML =
                `<h3>Tus cursos son: </h3>
            <ul id="lista_cursos"></ul>
            `
            lista_cursos = document.querySelector('#lista_cursos')
            estudiante_iniciado.cursos_inscriptos.forEach(e => {
                const elemento_lista = document.createElement('li')
                elemento_lista.setAttribute('id', 'elemento_lista')
                elemento_lista.insertAdjacentText('afterbegin', `${e['nombre']}`)
                lista_cursos.append(elemento_lista)
            })

        }
        div_principal.innerHTML += `<button id="boton_volver_inicio">Volver al inicio</button>`
        const boton_volver_inicio = document.querySelector('#boton_volver_inicio')
        volver_al_inicio(boton_volver_inicio, div_principal)
    }

    boton_cerrar_sesion.onclick = () => {
        localStorage.removeItem('estudiante_iniciado')
        alert('Se ha cerrado la sesion.')
        recargar_pagina()
    }


}

const apartado_profesores_logueados = (profesor_iniciado) => {
    div_principal.innerHTML = `<h1>Bienvenid@ al apartado de profesores</h1>
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
        profesor_iniciado.cargar_notas(div_principal,estudiantes)

    }

    boton_ver_notas.onclick = () => {
        if (estudiantes.length == 0) {
            div_principal.innerHTML = ''

            for (let e = 0; e < estudiantes.length; e++) {
                for (let j = 0; j < estudiantes[e]['cursos_inscriptos'].length; j++) {
                    if (estudiantes[e]['cursos_inscriptos'][j]['nombre'] == profesor_iniciado.curso) {

                        div_principal.innerHTML +=
                            `<h2>Las notas del estudiante: ${estudiantes[e]['nombre']}</h2>
                            <ul>
                                <li><p>Nota 1: ${estudiantes[e]['cursos_inscriptos'][j]['nota1']}</p></li>
                                <li><p>Nota 2: ${estudiantes[e]['cursos_inscriptos'][j]['nota2']}</p></li>
                                <li><p>Nota 3: ${estudiantes[e]['cursos_inscriptos'][j]['nota3']}</p></li>
    
                                <li><p>Nota final (promedio): ${estudiantes[e]['cursos_inscriptos'][j]['promedio']}</p></li>
                            </ul>`
                    }
                }
            }
            div_principal.innerHTML += `<button id="boton_volver">Volver</button>`
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div_principal)
        }
        else {
            div_principal.innerHTML = ``
            div_principal.innerHTML +=
                `<h1>No hay estudiantes registrados aun.</h1>
            <button id="boton_volver">Volver</button>`
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div_principal)
        }

    }
    boton_cerrar_sesion.onclick = () => {
        localStorage.removeItem('profesor_iniciado')
        alert('Se ha cerrado la sesion.')
        recargar_pagina()
    }
}

const apartado_estudiantes_visitantes = () => {
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
                recargar_pagina()
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
                if (input_nombre.value && input_apellido.value && input_dni.value && input_email.value && input_password.value) {
                    if (estudiantes.some((i) => i['email'] == input_email.value)) {
                        alert('La direccion de correo electronico ya pertenece a otro usuario. Prueba con otro.')
                    } else {
                        if (localStorage['estudiantes']) {
                            estudiantes = JSON.parse(localStorage.getItem('estudiantes'))
                        }
                        const user = new Estudiante(input_nombre.value, input_apellido.value, input_dni.value, input_email.value, input_password.value, [])
                        estudiantes.push(user)
                        localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
                        alert('Estudiante registrado.')
                    }
                } else {
                    alert('Se requiere que todos los campos se rellenen.')
                }
            }

        }

    }

}

const apartado_profesores_visitantes = () => {
    boton_profesores.onclick = () => {

        div_principal.innerHTML =
            `<h1>Bienvenid@ al apartado de profesores</h1>
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
            recargar_pagina()
            return
        }

    }
}

class Estudiante extends Profesor {

    constructor(nombre, apellido, email, password, dni, cursos_inscriptos) {
        super(nombre, apellido, email, password, dni)
        this.cursos_inscriptos = cursos_inscriptos
    }

    ver_notas() {
        alert(`Primer parcial: ${this.nota_1}, Segundo parcial: ${this.nota_2}, Nota del final: ${this.nota_final}`)
    }

    inscribirse_curso(nombre) {
        const curso_a_agregar = new Cursos(nombre)
        this.cursos_inscriptos.push(curso_a_agregar)
        return curso_a_agregar
    }

}

class Cursos {
    nota1 = 0
    nota2 = 0
    nota3 = 0
    promedio = 0
    constructor(nombre) {
        this.nombre = nombre
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



const datos_cursos = async () => {
    const response = await fetch('../JSON/cursos.json')
    const cursos = await response.json()
    return cursos
}

class Cursos {
    nota1 = 0
    nota2 = 0
    nota3 = 0
    promedio = 0
    constructor(nombre, profesor) {
        this.nombre = nombre
        this.profesor = profesor
    }
}

const apartado_cursos = (estudiante_iniciado) => {
    boton_cursos.onclick = () => {
        datos_cursos().then(cursos => {
            div_principal.innerHTML =
                `<h2>Elige el curso al que quieres inscribirte</h2>
                    <button id="boton_volver_inicio">Volver al inicio</button>`
            e = 0
            cursos.forEach(i => {
                div_principal.innerHTML +=
                    `<div class="card" id="${e}" style="width:18rem; heigth:18rem; margin:4px">
                        <img class="card-img-top" src="../img/${i['img']}" alt="Card image cap">
                        <h5 class="card-title">Curso de: ${i['nombre']}</h5>
                        <h5 class="card-title">Profesor: ${i['profesor']}</h5>
                        <button id="" class="btn btn-primary botones_inscribirse">Inscribirse</button>
                    </div>`
                e++
            })

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
                            Swal.fire({
                                text: 'Ya te has inscripto a ese curso.',
                                icon: 'info',
                                confirmButtonText: 'Confirmar'
                            })
                        } else {
                            estudiantes = JSON.parse(localStorage.getItem('estudiantes'))
                            for (let e = 0; e < estudiantes.length; e++) {
                                if (estudiantes[e]['email'] == estudiante_iniciado['email']) {
                                    estudiantes[e]['cursos_inscriptos'].push(estudiante_iniciado.inscribirse_curso(cursos[i]['nombre'], cursos[i]['profesor']))
                                }
                            }
                            Swal.fire({
                                text: `Te has inscripto con exito al curso de ${cursos[i]['nombre']}.`,
                                icon: 'success',
                                confirmButtonText: 'Confirmar'
                            })
                            localStorage.setItem('estudiante_iniciado', JSON.stringify(estudiante_iniciado))
                            localStorage.setItem('estudiantes', JSON.stringify(estudiantes))
                        }
                    } else {
                        Swal.fire({
                            text: 'Registrate o inicia sesion como estudiante.',
                            icon: 'info',
                            confirmButtonText: 'Confirmar'
                        })
                            .then(function () {
                                location.reload()
                            })
                    }
                }
            }
        })
    }
}


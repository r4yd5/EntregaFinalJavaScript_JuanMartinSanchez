class Profesor {
    constructor(nombre, apellido, email, password, dni, curso) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.dni = dni;
        this.curso = curso;
    }

    cargar_notas(div,array_estudiantes){
            
        if (array_estudiantes.length !== 0) {
            div.innerHTML = ''
            for (let i = 0; i < array_estudiantes.length; i++) {
                for (let j = 0; j < array_estudiantes[i]['cursos_inscriptos'].length; j++) {
                    if (array_estudiantes[i]['cursos_inscriptos'][j]['nombre'] == this.curso) {
                        div.innerHTML +=
                            `<h2>Ingrese la nota de ${array_estudiantes[i]['nombre']}</h2>
                    <label for="nota1">Nota 1</label><input type="number" name="nota1" class="nota1">
                    <label for="nota1">Nota 2</label><input type="number" name="nota2" class="nota2">
                    <label for="nota1">Nota 3</label><input type="number" name="nota3" class="nota3">
                    <button id="cargar_notas">Cargar</button>
                    <button id="boton_volver">Volver</button>`
                    }else{
                        div.innerHTML = `
                        <h1>No hay estudiantes registrados en el curso de JavaScript aun.</h1>
                        <button id="boton_volver">Volver</button>`
                    }
                }
            }
            

            const cargar_notas = document.querySelector('#cargar_notas')
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div)

            cargar_notas.onclick = () => {

                const input_nota1 = document.querySelectorAll('.nota1')
                const input_nota2 = document.querySelectorAll('.nota2')
                const input_nota3 = document.querySelectorAll('.nota3')

                for (let i = 0; i < array_estudiantes.length; i++) {
                    for (let j = 0; j < array_estudiantes[i]['cursos_inscriptos'].length; j++) {
                        if (array_estudiantes[i]['cursos_inscriptos'][j]['nombre'] == profesor_iniciado.curso) {

                            array_estudiantes[i]['cursos_inscriptos'][j]['nota1'] = input_nota1[i].value
                            array_estudiantes[i]['cursos_inscriptos'][j]['nota2'] = input_nota2[i].value
                            array_estudiantes[i]['cursos_inscriptos'][j]['nota3'] = input_nota3[i].value
                            array_estudiantes[i]['cursos_inscriptos'][j]['promedio'] = ((parseFloat(array_estudiantes[i]['cursos_inscriptos'][j]['nota1']) + parseFloat(array_estudiantes[i]['cursos_inscriptos'][j]['nota2']) + parseFloat(array_estudiantes[i]['cursos_inscriptos'][j]['nota3'])) / 3) || 'No se puede promediar porque faltan cargar notas.'
                        }
                    }
                }
                localStorage.setItem('array_estudiantes', JSON.stringify(array_estudiantes))
                alert('Notas cargadas')
                recargar_pagina()
            }
        } else {
            div.innerHTML = ``
            div.innerHTML +=
                `<h1>No hay estudiantes registrados aun.</h1>
            <button id="boton_volver">Volver</button>`
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div)
        }
    }

    ver_notas(div,array_estudiantes){
        if (array_estudiantes.length == 0) {
            div.innerHTML = ''

            for (let i = 0; i < array_estudiantes.length; i++) {
                for (let j = 0; j < array_estudiantes[i]['cursos_inscriptos'].length; j++) {
                    if (array_estudiantes[i]['cursos_inscriptos'][j]['nombre'] == profesor_iniciado.curso) {

                        div.innerHTML +=
                            `<h2>Las notas del estudiante: ${array_estudiantes[i]['nombre']}</h2>
                            <ul>
                                <li><p>Nota 1: ${array_estudiantes[i]['cursos_inscriptos'][j]['nota1']}</p></li>
                                <li><p>Nota 2: ${array_estudiantes[i]['cursos_inscriptos'][j]['nota2']}</p></li>
                                <li><p>Nota 3: ${array_estudiantes[i]['cursos_inscriptos'][j]['nota3']}</p></li>
    
                                <li><p>Nota final (promedio): ${array_estudiantes[i]['cursos_inscriptos'][j]['promedio']}</p></li>
                            </ul>`
                    }
                }
            }
            div.innerHTML += `<button id="boton_volver">Volver</button>`
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div)
        }
        else {
            div.innerHTML = ``
            div.innerHTML +=
                `<h1>No hay array_estudiantes registrados aun.</h1>
            <button id="boton_volver">Volver</button>`
            const boton_volver = document.querySelector('#boton_volver')
            volver_al_inicio(boton_volver, div)
        }
    }
}
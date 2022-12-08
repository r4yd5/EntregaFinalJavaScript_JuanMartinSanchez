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
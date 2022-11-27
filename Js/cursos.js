class Cursos{
    nota1 = 0
    nota2 = 0
    nota_final = 0
    constructor(nombre){
        this.nombre = nombre
    }
}

class Estudiante{
	cursos_inscriptos = []
    constructor(){
    }

    inscribirse_curso(nombre){
        const curso_a_agregar = new Cursos(nombre)
        this.cursos_inscriptos.push(curso_a_agregar)
    }
}

const estudiante_nuevo = new Estudiante()

estudiante_nuevo.inscribirse_curso('javascript')
estudiante_nuevo.inscribirse_curso('python')
estudiante_nuevo.inscribirse_curso('django')


console.log(estudiante_nuevo)

const resultado = estudiante_nuevo.cursos_inscriptos.find(e =>{
	return e.nombre === 'django'
})

console.log(resultado.nombre)

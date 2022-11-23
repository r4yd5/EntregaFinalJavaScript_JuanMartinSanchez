




/* 
let alumnos = [];
let profesores = [];

class Profesor {
    constructor(nombre_apellido, username, password){
        this.nombre_apellido = nombre_apellido;
        this.username = username;
        this.password = password;
        }

    cargar_notas(v1){
        if (v1.length !== 0){
            v1.forEach(i => {
                alert(`Alumno: ${i['nombre_apellido']}. Ingrese sus notas.`)
                i['nota_1'] = parseFloat(prompt('Primer parcial: '))
                i['nota_2'] = parseFloat(prompt('Segundo parcial: '))
                i['nota_final'] = parseFloat(prompt('Final: '))
            });
        }else{
            alert('No hay alumnos en el sistema aun.')
        }
    }

    ver_notas_globales(v1){
        if (v1.length !== 0){
            v1.forEach(i => {
                alert(`Alumno: ${i['nombre_apellido']}. Parcial 1: ${i['nota_1']}. Parcial 2: ${i['nota_2']}. Final: ${i['nota_final']}`)
            });
        }else{
        alert('No hay alumnos en el sistema aun.')
        }
    }

    ver_promedio_curso(v1){
        if (v1.length !== 0){
            let acum = 0
            let prom = 0
            v1.forEach(i => {
                acum += (i['nota_1'] + i['nota_2'] + i['nota_final']) / 3
            });
            prom = acum / v1.length
            alert(`El promedio general del curso es: ${prom}`)
        }else{
            alert('No hay alumnos en el sistema aun.')
        }
    }

}

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
        

alert('Bienvenid@ al sistema de alumnos y maestros.')
while (true){
    alumno_o_profesor = parseInt(prompt('1.Alumno.\n2.Profesor.\n3.Salir'));
    if (alumno_o_profesor == 1){
        let opc_menu1 = parseInt(prompt('1.Iniciar sesion.\n2.Registrarse.'));
        if (opc_menu1 == 1){
            const alumno_inciado = iniciar_sesion(alumnos)
            if (alumno_inciado !== undefined){
                while (true){
                    const opc_menu2 = parseInt(prompt('1.Ver notas.\n2.Volver'));
                    if (opc_menu2 === 1){
                        alumno_inciado.ver_notas();
                    } else if (opc_menu2 === 2){
                        break    
                    }else{
                        alert('Ingrese una opcion correcta.');
                    }
                }
            }
        }else if (opc_menu1 == 2) {
            registrarse(alumnos, Alumno)
        }else{
            alert('Ingrese una opcion correcta.')
        }

    }else if (alumno_o_profesor == 2){
        let opc_menu1 = parseInt(prompt('1.Iniciar sesion.\n2.Registrarse.'));
        if (opc_menu1 == 1){
            const profesor_iniciado = iniciar_sesion(profesores)
            if (profesor_iniciado !== undefined){
                while (true){
                    const opc_menu2 = parseInt(prompt('1.Cargar notas.\n2.Ver notas del curso.\n3.Ver promedio del curso.\n4.Volver.'));
                    if (opc_menu2 === 1){
                        profesor_iniciado.cargar_notas(alumnos);
                    }else if (opc_menu2 === 2){
                        profesor_iniciado.ver_notas_globales(alumnos)
                    }else if (opc_menu2 === 3){
                        profesor_iniciado.ver_promedio_curso(alumnos)
                    }else if (opc_menu2 === 4){
                        break
                    }else{
                        alert('Ingrese una opcion correcta.') 
                    }
                }
            }
        }else if (opc_menu1 == 2) {
            registrarse(profesores, Profesor)
        }else{
            alert('Ingrese una opcion correcta.')
        }
    }else if (alumno_o_profesor == 3){
        break
    }else{
        alert('Ingrese una opcion correcta.')
    }
}


 */
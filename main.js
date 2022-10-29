let flag = true
const nombre = prompt('Bienvenid@ al sistema de alumnos y maestros. Ingrese su nombre:');
alert(`Hola ${nombre}.`);
let notas = [];
let nombres = [];

while(flag){
    let opc = parseInt(prompt('Ingrese una opcion.\n--------------------------\n1. Es alumno.\n2. Es maestro.\n3. Salir.\n--------------------------'));
    switch (opc) {
        case 1:
            alert('Ingreso al apartado de alumnos');
            while (true){
                opc = parseInt(prompt('1.Ver notas.\n2.Volver'));
                if (opc === 1){
                    ver_notas(notas,nombres);
                } else if (opc === 2){
                    break    
                }else{
                    alert('Ingrese una opcion correcta.');
                }
            }
            break;
        case 2:
            alert('Ingreso al apartado de maestros.');
            while (true){
                opc = parseInt(prompt('1.Cargar notas.\n2.Ver promedio de notas.\n3.Volver.'));
                if (opc === 1){
                    let cantidad_alumnos = parseInt(prompt('Ingresee la cantidad de alumnos: '));
                    cargar_notas(notas,nombres,cantidad_alumnos);
                }else if (opc === 2){
                    ver_promedio(notas);
                }else if (opc === 3){
                    break
                }else{
                    alert('Ingrese una opcion correcta.');
                }
            }
            break;
        case 3:
            alert('Hasta pronto :)');
            flag = false;
            break;
        default:
            alert('Ingrese una opcion correcta.');
            break;
        }
}

function cargar_notas(v1,v2,tope){
    alert('Ingrese el nombre del alumno y su nota.');
    for (let i = 0; i < tope ; i++) {
        v2[i] = prompt('Ingrese nombre: ');
        v1[i] = parseFloat(prompt('Ingrese nota: '));
    }
}

function ver_promedio(v1){
    let acum = 0;
    if (v1.length === 0){
        alert('Las notas no han sido cargadas.');
    }else{
        for (let i = 0; i < v1.length; i++){
            acum += v1[i];
        }
        return alert(`El promedio general de las notas es: ${acum / v1.length}`) ;
    }
}

function ver_notas(v1,v2){
    if (v1.length === 0){
        alert('Las notas no han sido cargadas.');
    }else{
        for (let i = 0; i < v1.length; i++){
            alert(`Alumno: ${v2[i]}. Nota: ${v1[i]}`);
        }
    }
}

const cursos = [   
	{'nombre':'JavaScript', 'img':'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png'},
	{'nombre':'Python', 'img':'https://wallpapercave.com/wp/wp8042506.jpg'},
	{'nombre':'Java', 'img':'http://ejemplocodigo.com/wp-content/uploads/2016/07/logo-java-BIG.jpg'},
	{'nombre':'CSS', 'img':'https://pixelmechanics.com.sg/wp-content/uploads/2019/04/css.jpg'},
	{'nombre':'NodeJs', 'img':'https://www.muylinux.com/wp-content/uploads/2022/04/nodejs.png'},
	{'nombre':'React', 'img':'https://blog.digital-pineapple.com.mx/wp-content/uploads/2021/01/0_oZLL-N4dGNlBe4Oh.png'},
	{'nombre':'Django', 'img':'https://i.pinimg.com/originals/e7/4d/f4/e74df443367d268a22b14bd068068778.png'}
	
]


const div_prueba = document.querySelector('#divv')

cursos.forEach(e => {
div_prueba.innerHTML += `
	<div class="card prueba">
		<img class="card-img-top" src="${e['img']}" alt="Card image cap">
		<h5 class="card-title">Curso de ${e['nombre']}</h5>
		<button id="boton" class="btn btn-primary botones_inscribirse">Inscribirse</button>
	</div>
`
}
)

const botones = document.querySelector(".botones_inscribirse");
for (let i = 0; i < botones.length; i++) {
	botones[i].onclick = () => {
		console.log('haosdf')
		if (localStorage.getItem('user')){
			alert('Te has inscripto')
		}else{
			alert('Tienes que registrarte como alumno')
			location.href="estudiantes.html"
		}
	}
	
}




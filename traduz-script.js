var menu1 = document.getElementById('menuli1')
var menu2 = document.getElementById('menuli2')
var menu3 = document.getElementById('menuli3')
var menu4 = document.getElementById('menuli4')
var idioma = document.getElementById('idioma')

document.getElementById("spanish").addEventListener('click', traduzspanish)
document.getElementById("english").addEventListener("click", traduzeng)
document.getElementById("port").addEventListener("click", traduzport)

function traduzspanish(){
    menu1.innerHTML = '<a class="list" href="index.html">Inicio</a>';
    menu2.innerHTML = '<a class="list" href="projects.html">Projectos</a>';
    menu3.innerHTML = '<a class="list" href="contact.html">Contacto</a>';
    menu4.innerHTML = '<a class="list" href="about.html">Sobre mí</a>';
    idioma.innerHTML = "Cambiar Lengua:";
}

function traduzeng(){
    menu1.innerHTML = '<a class="list" href="index.html">Home</a>';
    menu2.innerHTML = '<a class="list" href="projects.html">Projects</a>';
    menu3.innerHTML = '<a class="list" href="contact.html">Contact</a>';
    menu4.innerHTML = '<a class="list" href="about.html">About</a>';
    idioma.innerHTML = "Change Language:";
}

function traduzport(){
    menu1.innerHTML = '<a class="list" href="index.html">Inicio</a>';
    menu2.innerHTML = '<a class="list" href="projects.html">Projetos</a>';
    menu3.innerHTML = '<a class="list" href="contact.html">Contato</a>';
    menu4.innerHTML = '<a class="list" href="index.html">Sobre</a>';
    idioma.innerHTML = "Alterar Idioma:";
}
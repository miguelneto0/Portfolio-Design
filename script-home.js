var out1 = document.getElementById("out1")
var out2 = document.getElementById('out2')
var out3 = document.getElementById('out3')

document.getElementById("spanish").addEventListener('click', traduzspanish)
document.getElementById("english").addEventListener("click", traduzeng)
document.getElementById("port").addEventListener("click", traduzport)

function traduzspanish(){
    document.getElementById("descripthome").innerHTML = '<p>&emsp;&emsp;&emsp;Soy estudiante de computacción, con pesquisa en la área de Redes de Sensores Inalambricos, y trabajo con Designer y Marketing para Empresas desde 2009, cuando adentré en el mundo de la tecnologia. Para conhecer algunos de los mi trabajos y conocerme más, el <strong>outline</strong> abajo demuenstra los links deste portfolio. </p>';
    document.getElementById("whowelc").innerHTML = "Bienvenido a mi Portfolio";
    out1.innerHTML = 'Para mais informacciones sobre mi carrera academica y como freelancer, mira la página <a href="about.html">Sobre mí</a>.';
    out2.innerHTML = 'Algunos de los principales projectos desarollados en los últimos años les son presentados en <a href="projects.html">Projectos</a>. En esta página és possible tener accesso a algunos trabajos completos, así como papers escritos ao longo de mi pesquisa como cientista de computacción.';
}

function traduzeng(){
    document.getElementById("descripthome").innerHTML = '<p>&emsp;&emsp;&emsp;I am a computer student, with research in Wireless Sensor Networks, and developing Designer and Marketing works for Companies since 2009, when I started technology world. For know more about some my works and my carreer, the <strong>outline</strong> below details the links of this portfolio. </p>';
    document.getElementById("whowelc").innerHTML = "Welcome to my Portfolio";
    out1.innerHTML = 'For more information about my academic and freelancer carreer, look the <a href="about.html">About</a> page.';
    out2.innerHTML = 'Few of the main projects developed in recent years are presented in <a href="projects.html">Projects</a>. In this page is possible to access complete works through links, as well as some papers published along of my research as computer scientist.';
}

function traduzport(){
    document.getElementById("descripthome").innerHTML = '<p>&emsp;&emsp;&emsp;Sou estudante de computação, com pesquisa na área de Redes de Sensores Sem Fio, e trabalho com Designer e Marketing para Empresas desde 2009, quando adentrei no mundo da tecnologia. Para conhecer alguns dos meus trabalhos e saber mais sobre mim, o <strong>outline</strong> abaixo detalha os links deste portfolio. </p>';
    document.getElementById("whowelc").innerHTML = "Bem-vindo ao meu Portfolio";
    out1.innerHTML = 'Para mais informações sobre a minha carreira acadêmica e de freelancer, visite a página <a href="about.html">Sobre mim</a>.';
    out2.innerHTML = 'Alguns dos principais projetos desenvolvidos nos últimos anos são apresentados em <a href="projects.html">Projetos</a>. Nesta página é possível ter acesso alguns trabalhos completos, assim como papers escritos ao longo da minha pesquisa como cientista da computação.';
}

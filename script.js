function carregar(){
    var msg = window.document.getElementById('msg') 
    var img = window.document.getElementById('img')

    var img = window.document.getElementById('img')
}

$(document).ready(function(){
    $(".carreerb").click(function(){
        $("div.baixo").slideToggle("slow", function(){
            if($("div.baixo").is(":visible")){
                window.scrollBy(0,500);
            }
        });
     });
    // $(".carreerc").click(function(){
    //     $("div.cima").slideToggle();
    //  });
});

$(document).ready(function(){
    $(".carreerc").click(function(){
        $("div.cima").slideToggle();
     });
});
//document.getElementById("spanish").addEventListener("click", traduz)

//document.getElementsByClassName("descript").addEventListener("onmouseover", traduz)

document.getElementById("spanish").addEventListener("click", traduzspanish)
document.getElementById("english").addEventListener("click", traduzeng)
document.getElementById("port").addEventListener("click", traduzport)

function traduzspanish(){
    document.getElementById("descript").innerHTML = "&emsp;&emsp;&emsp;Soy estudiante en el área de Redes de Computadoras, he trabajado con el Diseñador y Marketing para Empresas desde 2009, además de ser un amante de la tecnología. Graduado en Ciencias de la Computación y con una maestría en Redes de sensores inalámbricos (ambos de UFPI, 2017 y 2019), soy originario de Pedreiras-MA pero me fui la patria hace unos 9 años para vivir en Teresina-PI. Actualmente, me mudé a Florianópolis-SC, donde tengo la intención de establecerme continuando investigador de carrera e ingreso al sector privado con los conocimientos que obtuve durante estos años.";
    document.getElementById("who").innerHTML = "¿Quién eres?";
}

function traduzeng(){
    document.getElementById("descript").innerHTML = "&emsp;&emsp;&emsp;I am a student in the area of Computer Networks, working with Designer and Marketing for Companies since 2009, in addition to being a lover of technology. Graduated in Computer Science and with a master's degree in Wireless Sensor Networks (both from UFPI, 2017 and 2019), I'm a native of Pedreiras-MA but I left the homeland about 9 years ago to live in Teresina-PI. Currently, I moved to Florianopolis-SC, where I intend to settle by continuing researcher career and enter the private sector with the knowledge I obtained during these years.";
    document.getElementById("who").innerHTML = "Who am I?";
}

function traduzport(){
    document.getElementById("descript").innerHTML = "&emsp;&emsp;&emsp;Sou estudante na área de Redes de Computadores, trabalho com Designer e Marketing para Empresas desde 2009, além de ser um amante da tecnologia. Graduado em Ciência da computação e com mestrado em Redes de Sensores Sem Fio (ambos pela UFPI, 2017 e 2019), sou natural de Pedreiras-MA mas deixei a terra natal a cerca de 9 anos para morar em Teresina-PI. Atualmente, mudei para Florianopolis-SC, onde pretendo me fixar dando continuidade à carreira de pesquisador e ingressar na iniciativa privada com o conhecimento que obtive durante estes anos.";
    document.getElementById("who").innerHTML = "Quem é?";
}

function show_hide(){
    var click = document.getElementById("cima")
    
    if (click.style.display === "none"){
        click.style.display = "block";
    }else{
        click.style.display = "none";
    }
}

function show_hide2(){
    var click2 = document.getElementById("baixo")
    
    if (click2.style.display == "block"){
        click2.style.display = "none";
    }else{
        click2.style.display = "block";
    }
}

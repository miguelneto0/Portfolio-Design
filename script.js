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


document.getElementById('carreerc').addEventListener('click', gira)
document.getElementById('carreerb').addEventListener('click', girab)

var y = 0
function gira(){
    var seta = document.getElementById('icon-setac')
    var x = 180 + y;
    // var divc = document.getElementById('cima')
    // if(divc.style.display == 'none'){
    //     seta.style.transform = 'rotate(0deg)';
    //     seta.style.transition = 'transform .8s ease-in-out'
    // }else{
        seta.style.transform = 'rotate('+x+'deg)'
        seta.style.transition = 'transform .8s ease-in-out'
    y+=180;
        //     seta.style.transition = 'transform .8s ease-in-out'
    // }
}


w = 0
function girab(){
    var seta = document.getElementById('icon-setab')
    var x = 180 + w;
        seta.style.transform = 'rotate('+x+'deg)'
        seta.style.transition = 'transform .8s ease-in-out'
    w+=180;
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

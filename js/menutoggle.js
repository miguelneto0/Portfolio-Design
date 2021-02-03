function toggleMenu(){
    console.log('menu clicado')
    var lis = document.getElementsByClassName('menuli')
    console.log(lis)
    for(let i=0;i<lis.length;i++)
        lis[i].classList.toggle("showli")
}
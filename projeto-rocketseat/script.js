function toggleMode(){
    var html = document.documentElement
    /*
    if(html.classList.contains('light')){
        html.classList.remove('light');
    } else {
        html.classList.add('light')
    }
    */
    html.classList.toggle('light');
    var img = document.querySelector('#profile img')

    if(html.classList.contains('light')){
       img.setAttribute("src", "arquivos/avatar-light.png") 
    } else {
         img.setAttribute("src", "arquivos/avatar.png")
    }
}
    var corpodoBtn = document.querySelector('#switch')
    var bolinhadoBtn = document.querySelector('button')
    function seta(){
        corpodoBtn.style.cursor = 'pointer'
        bolinhadoBtn.style.cursor = 'pointer'
    }
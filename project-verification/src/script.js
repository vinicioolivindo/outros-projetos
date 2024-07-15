let nuns = document.querySelectorAll('.number')
nuns.forEach(num => {
  num.addEventListener('keydown', function (e) {
    // Permite as teclas de controle (backspace, delete, setas, etc.)
    if ([8, 9, 37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
      return;
    }

    if (e.target.value.length >= 1 && !isNaN(e.key)) {
      e.preventDefault();
    }
  });
  num.addEventListener('click', function(){
    num.value = ' '
    num.focus()
    num.style.color = '#B1B9D8'
  })
})
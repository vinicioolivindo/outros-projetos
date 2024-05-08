'use strict'
/*
    1 - quando o usuario clicar no botao de mostra mais deve abrir os projetos que estao escondido em HTML

        1.1 - para isso precisa pegar o botao mostrar masi em JS pra poder verificar quando o usuario clicar em cima dele

        1.2 - identificar o clique do botao

        1.3 - adicionar a classe 'ativo' nos projetos escondidos

    2 - esconder o botao de mostrar mais 
    
        2.1 - pegar o botao e esconder ele
*/

// 1 - quando o usuario clicar no botao de mostra mais deve abrir os projetos que estao escondido em HTML 1.1 - para isso precisa pegar o botao mostrar masi em JS pra poder verificar quando o usuario clicar em cima dele

const botaoMostarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostarProjetos.addEventListener('click', function() {
    // adicionar a classe 'ativo' nos projetos escondidos
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.toggle('ativo');
    });

    // 2 - esconder o botao de mostrar mais ou mostrar menos conforme necessário
    if (botaoMostarProjetos.textContent === 'Mostrar menos') {
        botaoMostarProjetos.textContent = 'Mostrar mais';
    } else {
        botaoMostarProjetos.textContent = 'Mostrar menos';
    }
});

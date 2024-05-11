let containerNoti = document.querySelector("#noti");
let timeoutID;
let tempoRestante = 0;

function clique(nameImg, nameText, colorBox) {
    let liContainer = document.createElement("li");
    liContainer.classList.add("notific");

    let img = document.createElement("img");
    img.src = `src/img/vetor-${nameImg}.png`;
    let p = document.createElement("p");
    p.textContent = `${nameText} toast notification`;

    let imgX = document.createElement("img");
    imgX.src = "src/img/vetor-X.png";
    imgX.style.width = "14px";
    imgX.style.marginLeft = "auto";

    let border = document.createElement("div");
    border.classList.add("borda");
    border.style.width = '275px'
    border.style.backgroundColor = `${colorBox}`;

    /* adicionando texto e imagem */
    liContainer.appendChild(img);
    liContainer.appendChild(p);
    liContainer.appendChild(imgX);
    liContainer.appendChild(border)
    /* adiconando classes */
    containerNoti.appendChild(liContainer);
    liContainer.style.marginBottom = "10px";
    
    /* adicionando as funcoes do X */
    imgX.onmouseenter = function () {
        imgX.style.cursor = "pointer";
    };
    function notiSaindo() {
        liContainer.classList.add("escondido");
        clearTimeout(timeoutID); // Limpa o setTimeout quando a notificação é fechada
        setTimeout(function () {
            liContainer.style.display = "none";
        }, 500);
    };
    setTimeout(function() {
      border.style.width = "0";
    }, 0);

    let inicio = Date.now();
    /* condicoes para a notificacao sumir */
    timeoutID = setTimeout(notiSaindo, 3000);
    imgX.onclick = notiSaindo;

    liContainer.addEventListener('mouseover', function() {
        clearTimeout(timeoutID); // Pausa o setTimeout quando o mouse está sobre a notificação
        tempoRestante = 3000 - (Date.now() - inicio);
        border.style.width = "275px"; // Faz a borda voltar ao tamanho original quando o mouse entra
    });

    liContainer.addEventListener('mouseout', function() {
        inicio = Date.now();
        timeoutID = setTimeout(notiSaindo, tempoRestante); // Reseta o setTimeout quando o mouse sai da notificação
        border.style.width = "0"; // Continua diminuindo a borda quando o mouse sai
    });
}

function box1() {
    clique("success", "Success", "#22C55E");
}
function box2() {
    clique("info", "Info", "#3B82F6");
}
function box3() {
    clique("warning", "Warning", "#F97316");
}
function box4() {
    clique("error", "Error", "#EF4444");
}

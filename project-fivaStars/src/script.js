const elementos = document.querySelectorAll('.StarAtiva');
let text = document.querySelector('#text')

// Itera sobre cada elemento selecionado
elementos.forEach(function (elemento, indice) {
    // Adiciona um Event Listener para o evento de clique em cada elemento
    elemento.addEventListener('click', function () {
        elementos.forEach(star => {
            star.classList.add('oculta')
        })
        for (let i = 0; i <= indice; i++) {
            elementos[i].classList.toggle('oculta');
        }
        switch (indice) {
            case 0:
                text.textContent = `We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.`
                break
            case 1:
                text.textContent = `We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.`
                break
            case 2:
                text.textContent = `We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.`
                break
            case 3:
                text.textContent = `Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.`
                break
            case 4:
                text.textContent = `Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.`
                break
            case 5:
                text.textContent = `Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform`
                break
        }
    });
});
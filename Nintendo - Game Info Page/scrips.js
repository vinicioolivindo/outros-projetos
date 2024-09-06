
document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.previous');
    const radios = document.querySelectorAll('input[name="radio-btn"]');

    let currentIndex = 0;

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % radios.length;
        radios[currentIndex].checked = true;
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + radios.length) % radios.length;
        radios[currentIndex].checked = true;
    });

    // Atualizar currentIndex quando os rádios são selecionados manualmente
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            currentIndex = index;
        });
    });
});

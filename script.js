const roleta = document.getElementById('roleta');
const girarBtn = document.getElementById('girarBtn');
const segmentos = document.querySelectorAll('.segmento');
let isSpinning = false;

function girarRoleta() {
    if (isSpinning) return;
    
    isSpinning = true;
    
    // Aleatoriedade entre 0 e 360 graus
    const giroAleatorio = Math.floor(Math.random() * 360) + 1800;  // A roleta girará pelo menos 5 vezes (1800 graus)

    // Girar a roleta
    roleta.style.transform = `rotate(${giroAleatorio}deg)`;
    
    // Esperar o fim da animação para determinar o vencedor
    setTimeout(() => {
        const resultado = giroAleatorio % 360;

        if (resultado < 180) {
            // Caiu no "Hétero"
            dispararFoguetes();
        } else {
            // Caiu no "GAY"
            dispararConfetes();
        }

        isSpinning = false;
    }, 3000);  // A animação dura 3 segundos
}

function dispararFoguetes() {
    alert("🎉 Foguetes! Você caiu no HÉTERO! 🎉");
    // Aqui você pode adicionar a lógica para exibir foguetes na tela
}

function dispararConfetes() {
    alert("🎉 Confetes coloridos! Você caiu no GAY! 🎉");
    // Aqui você pode adicionar a lógica para exibir confetes coloridos na tela
}

// Adiciona o evento de clique no botão
girarBtn.addEventListener('click', girarRoleta);

function dispararFoguetes() {
    // Exibe uma animação de foguetes
    for (let i = 0; i < 10; i++) {
        const foguete = document.createElement('div');
        foguete.classList.add('foguete');
        document.body.appendChild(foguete);

        // Movimentação aleatória dos foguetes
        foguete.style.left = `${Math.random() * window.innerWidth}px`;
        foguete.style.animation = `fogueteAnimacao 1s ease-out forwards`;

        // Remove o foguete após a animação
        setTimeout(() => {
            foguete.remove();
        }, 1000);
    }
}

function dispararConfetes() {
    // Exibe confetes coloridos
    for (let i = 0; i < 50; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        document.body.appendChild(confete);

        // Movimentação aleatória dos confetes
        confete.style.left = `${Math.random() * window.innerWidth}px`;
        confete.style.top = `${Math.random() * window.innerHeight}px`;

        // Animar confete
        confete.style.animation = `confeteAnimacao 2s ease-out forwards`;

        // Remove o confete após a animação
        setTimeout(() => {
            confete.remove();
        }, 2000);
    }
}

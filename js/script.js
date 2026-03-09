function toggleMenu() {
    const menu = document.getElementById("menu-laterale");
    // .toggle aggiunge la classe se non c'è, e la toglie se c'è
    menu.classList.toggle("active");
}

// Questo server per la funzione nella home del carosello.
const nastro = document.querySelector('.carosello-nastro');
const btnAvanti = document.querySelector('.tasto-next');
const btnIndietro = document.querySelector('.tasto-prev');

let counter = 0;

btnAvanti.addEventListener('click', () => {
    if (counter >= 8) {
        counter = 0;
    } else {
        counter++;
    }
    muovicarosello();
});

btnIndietro.addEventListener('click', () => {
    if (counter <= 0) {
        counter = 8;
    } else {
        counter--;
    }
    muovicarosello();
});

function muovicarosello() {
    nastro.style.transform ='translateX(' + (-100 * counter) + '%)';
}


/* ===== Turns the hamburguer into a x ===== */
const menuhamburguer = document.querySelector('.menu-hamburguer')
menuhamburguer.addEventListener('click', ( ) =>{
    toogleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuhamburguer.classList.toggle('change');

    if(menuhamburguer.classList.contains('change')) {
        nav.style.display = 'block';
        else{
            nav.style.display = 'none';
            
        }
    }
}
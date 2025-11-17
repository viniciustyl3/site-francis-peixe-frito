// Pega os elementos do HTML
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');

// Função que será chamada ao clicar
function toggleMenu() {
    // toggle() adiciona a classe 'active' se ela não existir
    // e remove se ela já existir.
    nav.classList.toggle('active');
}

// Adiciona o "ouvinte de evento" de clique ao botão
btnMobile.addEventListener('click', toggleMenu);
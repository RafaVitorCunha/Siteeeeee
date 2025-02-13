function carregaArquivo(container, arquivo) {
    fetch(arquivo)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${arquivo}: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            let element = document.getElementById(container);
            if (element) {
                element.innerHTML = html;
            } else {
                console.warn(`Elemento ${container} não encontrado.`);
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
    carregaArquivo('container-sidebar', 'sidebar.html');
    carregaArquivo('container-navbar', 'navbar.html');
});

document.getElementById('profileImg').addEventListener('click', function () {
    let menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

const qs = q => document.querySelector(q)

window.onload = function(){
    let body = qs('body');
    let h1 = qs('h1.moviesListTitulo');
    let logo = document.querySelector('#logo');

    let modoOscuro = prompt('¿Desea modo oscuro?');

    if(modoOscuro){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }

    h1.innerHTML = 'LISTADO DE PELÍCULAS';
    h1.style.color ='white';
    h1.style.backgroundColor = 'teal';
    h1.style.padding = '20px'; 

}
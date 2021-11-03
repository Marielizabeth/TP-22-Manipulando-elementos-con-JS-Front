const qs = q => document.querySelector(q)

window.onload = () => { 
    let h1 = qs('h1.moviesAddTitulo');
    let section = qs('#formulario');
    let article = qs('article');
    
    h1.innerHTML = 'AGREGAR PELÍCULAS';
    h1.classList.add('titulo');
    article.classList.add('fondoTransparente');
    section.classList.add('fondoCRUD');
    
}

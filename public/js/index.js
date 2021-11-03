const qs = q => document.querySelector(q)

window.onload = () => {
    let main = qs('main');
    let h2 = qs('.subtitulo');
    let a = qs('a');
    let parrafos = document.querySelectorAll('p');

    let nombre = prompt('Ingresá tu nombre')

    if(nombre){
        h2.innerText += ' ' + nombre        

    }else{
        h2.innerText += ' invitado'
    }

    h2.style.textTransform = 'uppercase';
    a.style.color = '#E51B3E';

    let response = confirm('​¿Desea colocar un fondo de pantalla?');

    if(response){
        document.body.classList.add('fondo')
    }

    for (let i = 0; i < parrafos.length; i++) {
        if(i%2==0){
            parrafos[i].classList.add('destacadoPar')
        }else{
            parrafos[i].classList.add('destacadoImpar')

        }
        
        
    }

    main.style.display= 'block'


}





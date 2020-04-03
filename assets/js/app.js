//variables

const listaTweets = document.getElementById('lista-tweets');


//funciones

const agregarTweet = (e) => {

  e.preventDefault();

  const tweet = document.getElementById('tweet').value;

  const botonBorrar = document.createElement('a');
  botonBorrar.classList = 'mx-3 text-danger font-weight-bold';   
  botonBorrar.id = 'borrar-tweet'
  botonBorrar.innerText = 'X';

  const li = document.createElement('li');  
  li.innerText = tweet;  
  li.classList = 'li-grid py-2'

  li.appendChild(botonBorrar);
  listaTweets.appendChild(li);     

} 

const borrarTweet = (e) => {

  e.preventDefault;  

  if(e.target.id == 'borrar-tweet') {
    
    e.target.parentElement.remove();
    
  }  

}

//eventListener

const listeners = () => {

  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', agregarTweet);

  listaTweets.addEventListener('click', borrarTweet);
  
};

listeners();
//app
//variables
const listaTweets = document.getElementById('lista-tweets');

//funciones
const agregarTweet = (e) => {

  e.preventDefault();

  const tweet = document.getElementById('tweet').value;

  if (tweet == '') {
    alert('escriba un tweet');
  }else{
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'mx-3 text-danger font-weight-bold';   
    botonBorrar.id = 'borrar-tweet'
    botonBorrar.innerText = 'X';

    const li = document.createElement('li');  
    li.innerText = tweet;  
    li.classList = 'li-grid py-2'
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);    

    agregarTweetLocalStorage(tweet);
  } 

}

const borrarTweet = (e) => {

  e.preventDefault;  

  if(e.target.id === 'borrar-tweet') {    

    e.target.parentElement.remove();
    borrarTweetLocalStorage(e.target.parentElement.innerText);        
  }  
}

//localStorage
//funciones
const localStorageReady = () => {

  let tweets;
  tweets = obtenerTweetsLocalStorage();  

  tweets.forEach( (tweet) => {

    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'mx-3 text-danger font-weight-bold';   
    botonBorrar.id = 'borrar-tweet'
    botonBorrar.innerText = 'X';

    const li = document.createElement('li');  
    li.innerText = tweet;  
    li.classList = 'li-grid py-2'
    li.appendChild(botonBorrar);
    listaTweets.appendChild(li);  

  });
  
}

const agregarTweetLocalStorage = (tweet) =>{

  let tweets;
  tweets = obtenerTweetsLocalStorage();
  tweets.push(tweet);

  localStorage.setItem('tweets', JSON.stringify(tweets) ); 

};

const obtenerTweetsLocalStorage = () =>{

  let tweets;

  if (localStorage.getItem('tweets') === null){    
    tweets = [];    
  }else{
    tweets = JSON.parse( localStorage.getItem('tweets') );
  }

  return tweets;

};

borrarTweetLocalStorage = (tweet) => {

  let  tweets,
       borrarTweet;

  tweets = obtenerTweetsLocalStorage ();  
  borrarTweet = tweet.substring(0, tweet.length - 1);

  tweets.forEach( (tweet, i) => {    
    
    if(borrarTweet === tweet){
      tweets.splice(i, 1);
    }
  }); 
  localStorage.setItem('tweets', JSON.stringify(tweets) );    
}

//eventListener
const listeners = () => {

  const formulario = document.getElementById('formulario');

  formulario.addEventListener('submit', agregarTweet);
  listaTweets.addEventListener('click', borrarTweet); 
  document.addEventListener('DOMContentLoaded', localStorageReady);
  
};

listeners();
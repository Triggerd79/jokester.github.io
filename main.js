//initialisation 
const jokeArea = document.getElementById('joke-area')
const getJoke = document.getElementById('get-joke');

// function to get jokes 
getJoke.addEventListener('click', async () => {
    
     {
      try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        jokeArea.innerHTML = `<p>${joke.setup}</p><p>${joke.punchline}</p>`;
      } catch (error) {
        console.error(error); 
      }
    }
})
const randomNum = (max) =>{
  return  Math.floor(Math.random()* max)
}

const API_URL = `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${randomNum(1281)}`
console.log(API_URL)

const randomPokemon = async () => {
    try {
        const poke = await axios.get(API_URL) 
        const pokeImg = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke.data.results[0].name}`) 
        document.body.innerHTML = `<h2>${poke.data.results[0].name}</h2> <img src= ${pokeImg.data.sprites.front_shiny}></img>`
    } catch (error) {
        console.error(error);
    }
}
randomPokemon()

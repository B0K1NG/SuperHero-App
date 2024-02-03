// https://superheroapi.com/api/access-token/character-id

/* We do api.php only for superHero app, on others not needed
EXAMPLE:Line 41
  */

  /* if we use id = base_url/id
   json.image.url
   EXAMPLE:Line 54
   */

/* If I want to grap the image url from the fetch in json use:
json.image.url
EXAMPLE:Line 70
  */

  /* if we use search = base_url/search/batman
   json.results[0].image.url
  EXAMPLE:Line 85
  */

/* WHEN USING IN heroImageDiv.innerHTML = or += <img.... in base CODE ONLY!!! IF SEPERATE NOT NEEDED
    using += adds to what is already there
    using = removes what is already there and replaces with what is added
EXAMPLE:Line NaN   
    */

/* Using object.keys to get an array of all powerstats and then using .map to loop through the array and return the powerstats in html format
EXAMPLE:Line 72 
    */

/* Going into the object and pulling out the value using [stat] possibility to do any name like [bap]
EXAMPLE:Line 72-74   
    */

/* Using join to join the array into a string
EXAMPLE:Line 74  
    */

const SUPERHERO_TOKEN = '1131280088012743';
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const newHeroButton = document.getElementById('newHeroButton')
const heroImageDiv = document.getElementById('heroImage')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('searchInput')
const heroName = document.getElementById('heroName')
const powerStats = document.getElementById('powerStats')

  const getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
      .then(json => {
        const superHero = json;
        showHeroInfo(superHero)
    })
}

const statToEmoji = {
  intelligence: '🧠',
  strength: '🦍',
  speed: '💨',
  durability: '🏋🏽',
  power: '💥',
  combat: '⚔️',
}

const showHeroInfo = (character) => {
const name = `<h1>${character.name}</h1>`
const img = `<img src='${character.image.url}' height=200 width=200/>`;
  
const stats = Object.keys(character.powerstats).map(stat => {
  return `<p>${statToEmoji[stat]}${stat.toUpperCase()}: ${character.powerstats[stat]}`
}).join('')

  heroImageDiv.innerHTML = `${name}${img}${stats}`
  }

const getSearchSuperHero = (name) => {
  console.log(searchInput.value)
    fetch(`${BASE_URL}/search/${name}`)
      .then(response => response.json())
      .then(json => {

        const hero = json.results[0]
        showHeroInfo(hero)
      })
}

const randomHero = () => {
  const numberOfHeroes = 731
  return Math.floor(Math.random() * numberOfHeroes) + 1
}

newHeroButton.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)
const container = document.querySelector('#container')

const newImg = document.createElement('img')
newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png'

container.appendChild(newImg)

console.log(newImg)
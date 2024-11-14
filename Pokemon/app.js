const container = document.querySelector('#container')

const newImg = document.createElement('img')
newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png'
container.appendChild(newImg)

console.log(newImg)

for (i=1; 1 <=10; i++) {
    const newImg = document.createElement('img')
    newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png'
    container.appendChild(newImg);
}
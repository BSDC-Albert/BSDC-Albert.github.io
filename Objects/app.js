const cars = [
    {type:"Fiat", model:"500", colour:"white"},
    {type:"BMW", model:"500", colour:"blue"},
    {type:"BMW", model:"500", colour:"silver"},
    {type:"BMW", model:"500", colour:"white"},
    {type:"Fiat", model:"500", colour:"white"},
    {type:"Fiat", model:"500", colour:"white"},
    {type:"Fiat", model:"500", colour:"white"},
    {type:"Fiat", model:"500", colour:"white"},
    {type:"Fiat", model:"500", colour:"white"},
];
const carsSection = document.getElementById('cars');
console.log(carsSection)
const newCar = document.createElement('tr');
newCar.innerHTML = `<td>${carList[0].type}</td><td>${carList[0].model}</td><td>${carList[0].colour}/<td>`
carsTable.appendChild(newcar)

for (i=1;i<carList.length;i++);
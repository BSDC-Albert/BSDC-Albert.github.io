const carList = [
    {type:"Fiat", model:"500", colour:"white"},
    {type:"BMW", model:"316", colour:"silver"},
    {type:"BMW", model:"316", colour:"blue"},
    {type:"Ford", model:"ka", colour:"white"},
    {type:"Audi", model:"A4", colour:"red"},
    {type:"Renault", model:"Clio", colour:"red"},
    {type:"Peugeot", model:"Expert", colour:"blue"},
    {type:"Skoda", model:"Octavia", colour:"red"},
];
const carsTable = document.getElementById('carsTable');
console.log(carsTable.innerHTML);
for (i=0;i<carList.length;i++) {
    const newCar = document.createElement('tr');
    newCar.innerHTML = `
    <td>${carList[i].type}</td>
    <td>${carList[i].model}</td>
    <td>${carList[i].colour}</td>
    <button>button</button>`;

    console.log(newCar)
    
    carsTable.appendChild(newCar);
    };

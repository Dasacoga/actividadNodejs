const animaljson=require("./animaljson.json")

console.log(animaljson)

const animal={
    "especie": "Ailuropoda melanoleuca",
    "crias": 2,
    "tamaño": "mediano",
    "habitat":"bosque",
    "habito":"diurno" 
}
const cadenaanimal=JSON.stringify(animal)
console.log(cadenaanimal)

const objetoanimal=JSON.parse(cadenaanimal)
console.log(objetoanimal)
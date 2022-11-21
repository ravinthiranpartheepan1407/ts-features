const drink = {
    color: "Brown",
    carbonated: true,
    sugar: 40
}

//tuples contains multiple types in a single array or json

//type alias
type Drink = [string, boolean, number]

const soda: Drink = ["brown", true, 40]
const tea: Drink = ["Clear", false, 50]

// Tuples cannot be used to model a record

const carSpecs: [number, number] = [400, 3500]

const carStats: {horsePower: number, weight: number} = {
    horsePower: 400,
    weight: 3500
}
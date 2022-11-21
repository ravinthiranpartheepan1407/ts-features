//interface should start with Caps

// Any types we can define inside interface

interface FruitZ{
    name: string,
    quantity: number,
    fresh: boolean,
    package(): string
}


const apple = {
    name: "Apple",
    quantity: 50,
    fresh: true,
    package(): string {
        return `Package contains ${this.name} with quantities of ${this.quantity}`
    }
}

const printFruit = (fruitType: FruitZ): void => {
    console.log(`Name: ${fruitType.name}`)
    console.log(`Quantity: ${fruitType.quantity}`)
    console.log(`Is it fresh: ${fruitType.fresh}`)

    console.log(fruitType.package())
}

printFruit(apple)

interface Print{
    summary(): string
}

const drinkable = {
    color: "Blue",
    carbonated: true,
    sugar: 50,
    summary(): string {
        return `This drink color ${this.color} contains ${this.carbontaed} and ${this.sugar}`
    }
}

const printSummary = (item: Print): void => {
    console.log(item.summary())
}



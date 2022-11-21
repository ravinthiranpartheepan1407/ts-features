const add = (a: number, b: number): number => {
    return a + b;
}

const strings = (c: string, d: number): string | number => {
    return `${c} Quantity of ${d}`
}

function divide (a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number  {
    return a * b;
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message)
}

const throwerrorVoid = (message: string): void => {
    if(!message){
        throw new Error(message)
    }
}

const forecast: {date: Date, weather: string} = {
    date: new Date(),
    weather: "Sunny"
}


const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}
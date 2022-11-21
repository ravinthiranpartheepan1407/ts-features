const cards: string [] = ["Poker", "Poker New"]
const cars: any [] = ["Ford", 25, "Baleno"]
const dates: Date[] = [new Date(), new Date()]

const carsDouble: string[][] = [
    ["Ford"],
    ["Baleno"],
    ["TaTa"],
    ["Mauruti"]
]

// Help with interfernce when extracting values

const carZ = carsDouble[0]

carsDouble.push(["Toyota"])


//Hep with Map
carsDouble.map((car: string[]): string[] => {
    return car
})

const schedule: (Date | string) [] = [
    new Date(),
    '27-11-2022'
]

schedule.push('11-11-2022')
schedule.push(new Date())
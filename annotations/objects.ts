const profile: {name: string, age: number, cords: {name: string, city: string}} = {
    name: "Emily",
    age: 25,
    cords: {
        name: "Portugal",
        city: "Lisbon"
    },
}

const { age }: {age: number} = profile
const { cords }: {cords: {name: string, city: string}} = profile;

function setAge(age: number): void {
    this.age = age
}

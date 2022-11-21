class Vehicles {
    drive(): void{
        console.log("Started")
    }
    honk(): void{
        console.log("Honk Honk")
    }
}

// We can oveeride the method on child calss

// Can inherit the parent class method from child class using extends keyword

class Cars extends Vehicles {
    drive(): void {
        console.log("Vroom Vroom")
    }
}


const carz = new Cars()
carz.drive()

const vehicle = new Vehicles()
vehicle.drive()
vehicle.honk()
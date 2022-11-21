// Protected can be accessed within the class or could be accessible from child class but cannot be called out of the classes
// Public can be accessed from anywhere at any time
// Private can be accessed only with the class.. In order to access the private the create a public func and call the private func inside it
// Modifier declaration should be same across all the classes for listed func types
// Modifiers can also applied to fields and methods
// Super used to inherit a constructor (Field) property from another contructor field
// 

class Data {
    constructor (public color: string) {}
    protected datascience(): void {
        console.log("Machine Learning")
    }

    public blockchain(): void{
        console.log("Ethereum")
    }

    private backend(): void{
        console.log("Microservices")
    }

    public appendbackend(): void{
        this.backend()
    }
}

class Out extends Data {
    constructor(public jobs: number, color: string){
        super("Orange")
    }
    protected datascience(): void {
        console.log("Neural Networks")
    }

    public appendbackend(): void {
        console.log("Monolith")
    }

    public blockchain(): void {
        console.log("Web3")
    }
}

const results = new Out(5, "Red")
// const sent = new Data("Orange")
// console.log(sent.color)
results.appendbackend()
results.blockchain()
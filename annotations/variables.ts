//type annontation
const apples: number = 5;
const color: string = "Blue";
const result: boolean = false

let speed:string = "Fast"
let nothingMuch: null = null;
let nothing:undefined = undefined;


//Built-in objects
let now: Date = new Date()


//arrays

let colors:string[] = ["Red", "Green", "Blue"]
let fruits:string[] = ["Apple", "Orange"]
let numbers:number[] = [1, 3, 4]
let out:boolean[] = [false, true, false]


//class
//classes can be denoted by Firts letter Uppercase


class Car{

}

let car: Car = new Car()


//object literal

let point: { x:number, y:number } = {
    x: 10,
    y: 20
};




//****************************************************************Functions*************************************************************/



//Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}




//*********************************************************When to use Annotations*****************************************************/

// When to use annotations
//case 1: When we have a func that returns any type

const json = '{"X": 10, "Y": 20. "output": "Occupied"}';
const coordinates: {x: number, y: number, output: string} = JSON.parse(json);
console.log(coordinates)

//Case 2: When we declare a variable on one line
//And initailized later

let words: string[] = ["Red", "Blue"]
let foundWords: boolean = false;

for (let i=0; i < words.length; i++){
    if(words[i] == "Blue"){
        foundWords = true;
    }
}

//Case 3: Variable of those types cannot be interferred

let numberSigns:number[] = [10, -1, -30]
let numberAboveZero: boolean | number = false

for (let i=0; i < numberSigns.length; i++){
    if(numberAboveZero[i] > 0){
        numberAboveZero = numberSigns[i]
    }
}
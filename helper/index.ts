export const addPerson = <T extends {occupation: string}>(object: T) => {
    const id = Math.floor(Math.random() *100)
    return {...object, id}
}

interface EmployeeInterFace {
    name: string, 
    age: number
    register() : string
}

export class Employee implements EmployeeInterFace {
    name : string
    age: number

    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    register() {
        return `${this.name} is now registered in our company's system`
    }
}


export class ParTimer extends Employee {
    postion: string

    constructor (name: string, age: number, position: string) {
        super(name,age)
        this.postion = position
    }

}
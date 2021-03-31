class Person {
    group: string
    name: string

    constructor(group: string, name:string, public marks:number, public isTopper:boolean ){
        this.group = group;
        this.name = name;
    }

    printPerson() {
        return `This Person name is ${this.name} and belongs to the ${this.group} group`;
    }

    printGrade(){
        if(this.marks>90)
        return `This Person score ${this.marks} and got Grade A`;
        else
        return `This Person soored ${this.marks} and got Grade B`;
    }

    printTopper(){
        return `THis Person ${this.isTopper ? 'is' : 'is not'} topper`
    }
}

interface Grade{
    marks : number
    printGrade(): string;
}

interface Topper extends Grade{
    isTopper: boolean
    printTopper(): string;
}

const person = new Person('Java Script', 'Gowtham',90,true);
console.log(person.printPerson())
console.log(person.printGrade())
console.log(person.printTopper())
class Person implements Grade{
    group: string
    name: string

    constructor(group: string, name:string, public marks:number, public isTopper: boolean){
        this.group = group;
        this.name = name;
    }

    printPerson() {
        return `This Person name is ${this.name} and belongs to the ${this.group} group`;
    }

    printGrade(){
        if(this.marks>90 && this.marks<=95){
        return `This Person scored ${this.marks} and got Grade A`;
        }else if(this.marks>95){
        return `This Person scored ${this.marks} and got Grade S and he ${this.isTopper ? 'is' : 'is not'} the topper of section`
        }else{
        return `This Person soored ${this.marks} and got Grade B`;
        }
    }

    printMarks() : void{
        console.log(this.marks)
    }
}

interface Grade extends Topper{
    marks : number
    printGrade(): string
    printMarks(): void;
}

interface Topper{
    isTopper: boolean
}

const person = new Person('Java Script', 'Gowtham',97,false);
console.log(person.printPerson())
console.log(person.printGrade())
person.printMarks()

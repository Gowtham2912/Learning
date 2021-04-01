var Person = /** @class */ (function () {
    function Person(group, name, marks, isTopper) {
        this.marks = marks;
        this.isTopper = isTopper;
        this.group = group;
        this.name = name;
    }
    Person.prototype.printPerson = function () {
        return "This Person name is " + this.name + " and belongs to the " + this.group + " group";
    };
    Person.prototype.printGrade = function () {
        if (this.marks > 90 && this.marks <= 95) {
            return "This Person scored " + this.marks + " and got Grade A";
        }
        else if (this.marks > 95) {
            return "This Person scored " + this.marks + " and got Grade S and he " + (this.isTopper ? 'is' : 'is not') + " the topper of section";
        }
        else {
            return "This Person soored " + this.marks + " and got Grade B";
        }
    };
    Person.prototype.printMarks = function () {
        console.log(this.marks);
    };
    return Person;
}());
var person = new Person('Java Script', 'Gowtham', 97, false);
console.log(person.printPerson());
console.log(person.printGrade());
person.printMarks();

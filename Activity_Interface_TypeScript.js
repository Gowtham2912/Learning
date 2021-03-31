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
        if (this.marks > 90)
            return "This Person score " + this.marks + " and got Grade A";
        else
            return "This Person soored " + this.marks + " and got Grade B";
    };
    Person.prototype.printTopper = function () {
        return "THis Person " + (this.isTopper ? 'is' : 'is not') + " topper";
    };
    return Person;
}());
var person = new Person('Java Script', 'Gowtham', 90, true);
console.log(person.printPerson());
console.log(person.printGrade());
console.log(person.printTopper());

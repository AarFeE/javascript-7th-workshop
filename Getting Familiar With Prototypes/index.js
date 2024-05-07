function Person(firstName, lastName, age, occupation, hobbies) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.occupation = occupation;
    this.hobbies = hobbies;
}

Person.prototype.greet = function () {
    return `Hello! My name is ${this.firstName}`;
};

function Student(firstName, lastName, age, occupation = "Student", hobbies, average, courses) {
    Person.call(this, firstName, lastName, age, occupation, hobbies);
    this.average = average;
    this.courses = courses;
}

Student.prototype = Object.create(Person.prototype); /*The Student class inherits from Person
class by changing its prototype to Person.prototype*/
Student.prototype.constructor = Student;

let testStudent = new Student('Andres', 'Jimenez', 22, 'Student',
    ['play videogames', 'listen to music', 'cooking food'], 4.7, ['Math II', 'Biology IV', 'Greek Literature']);

console.log(testStudent.greet()); //Now Student can access to its inherited function greet()

Student.prototype.takeTest = function () {
    return "Presenting an exam!";
};

Person.prototype.greet = function () { //We modify the greet() function in the Person class
    return `Hello! My name is ${this.firstName} ${this.lastName}` +
        ` and I'm ${this.age} years old`
}
//The Student's class greet() function also changes, because we modified its father's prototype's greet() function 
console.log(testStudent.greet())

Student.prototype.greet = function () { //Now we override the greet() function in the child class Student
    return `${Person.prototype.greet.call(this)} From the Student Object`;
}

console.log(testStudent.greet());


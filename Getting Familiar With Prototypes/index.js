let Person = {
    firstName: 'Andres',
    lastName: 'Jimenez',
    age: 22,
    occupation: 'Student',
    hobbies: ['play videogames', 'listen to music', 'cooking food'],
    greet: function () {
        return `Hello! My name is ${this.firstName}`
    }
}

let Student = {
    gradesAvg: 4.2,
    courses: ['Linear Mathematics', 'Biology III', 'Art Appreciation'],
    takeTest: function () {
        return "Presenting an exam!"
    }
}

Object.setPrototypeOf(Student, Person) //The Student object inherits from Person object by changing its prototype to Object.prototype.Person()

console.log(Student.greet()) //Now Student can access to its inherited function greet()

//We modify the greet() function in the Person object
Person.greet = function () {
    return `Hello! My name is ${this.firstName} ${this.lastName}` +
        ` and I'm ${this.age} years old`
}

//The Student's object greet() function also changes, because by altering the father's greet() function we modified its prototype's greet() function too
console.log(Student.greet())

//Now we override the greet() function in the child object Student
Student.greet = function () {
    return `${Person.greet.call(this)} From the Student Object`;
}

console.log(Student.greet())

console.log(Object.getPrototypeOf(Student))


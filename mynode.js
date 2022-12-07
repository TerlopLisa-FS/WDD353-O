// Importing library.
const readline = require("readline");

// Creating readline functionality.
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});

// Class Grader
class Grader {
    constructor() {
        // Properties
        this.name = null;
        this.course = null;
        this.gradeValue = null;
        this.letterGrade = null;

        // Running this method when a class is created.
        this.nameQuestion();
    }

    // Student name question method.
    nameQuestion() {
        rl.question("What is the student's name? ", (name) => {
           if(this.stringValidation(name) === true) {
               this.name = name;
               this.courseQuestion();
           } else {
               this.nameQuestion();
           }
        });
    }

    // Grade question method.
    courseQuestion() {
        rl.question('What is the assignment name? ', (course) => {
            if(this.stringValidation(course) === true) {
                this.course = course;
                this.gradeQuestion();
            } else {
                this.courseQuestion();
            }
        });
    }

    // Grade question method.
    gradeQuestion() {
        rl.question('What was the grade value? Please enter a value from 0 - 100 ', (gradeValue) => {
            if(this.intValidation(gradeValue) === true) {
                this.gradeValue = gradeValue;
                this.letterGradeAssigner(this.gradeValue);
            } else {
                this.gradeQuestion();
            }
        });
    }

    // Grade assigner method.
    letterGradeAssigner(num) {
        num = parseInt(num)

        if(num <= 59 && num >= 0) {
            this.letterGrade = "'F'";
        } else if(num <= 69 && num >= 60) {
            this.letterGrade = "'D'";
        } else if(num <= 79 && num >= 70) {
            this.letterGrade = "'C'";
        } else if(num <= 89 && num >= 80) {
            this.letterGrade = "'B'";
        } else {
            this.letterGrade = "'A'";
        }
        this.outputPrompt();
    }

    // Output final prompt method.
    outputPrompt() {
        console.log(`${this.name}'s grade in ${this.course} was a(n) ${this.gradeValue} which is a(n) ${this.letterGrade}!`);
        rl.close();
    }

    // String validation method.
    stringValidation(string) {
        if (string.trim().length > 0) {
           return true
        } else {
            console.log('Please enter a valid value and/or do not leave blank!');
            return false
        }
    }

    // num validation method.
    intValidation(num) {
        num = parseFloat(num);

        if(num !== isNaN) {
            if(num >= 0 && num <= 100) {
                return true
            } else {
                console.log('Please enter a value between 0 - 100');
                return false
            }
        } else {
            console.log('Please enter a valid value and/or do not leave blank!');
            return false
        }
    }

}
// Creating new grader object
let grader = new Grader();
# Importing library.
import math

# Class Grader
class Grader():
    # Constructor
    def __init__(self):
        # Properties
        self.name = self
        self.course = self
        self.grade = self
        self.letterGrade = self

        # Calling class methods to run when creating the class
        self.nameQuestion()

    # Class methods
    # Student name question method
    def nameQuestion(self):
        self.name = raw_input("What is the student's name? If the student's name is more than 1 word use '_' to connect them. ")

        if(self.stringValidation(self.name) == True):
            self.courseQuestion()
        else:
            self.nameQuestion()

    # Course question method
    def courseQuestion(self):
        self.course = raw_input("What is the assignment name? If the assignment name is more than 1 word use '_' to connect them. ")

        if(self.stringValidation(self.course) == True):
            self.gradeQuestion()
        else:
            self.courseQuestion()

    # Grade question method
    def gradeQuestion(self):
        self.grade = raw_input("What was the grade value? Please enter a value from 0 - 100 ")

        if(self.floatValidation(self.grade) == True):
            self.letterGradeAssigner(self.grade)
        else:
            self.gradeQuestion()

    # Output final prompt method
    def outputPrompt(self):
        print(self.name + "'s " + "grade in " + self.course + " was a(n) " + self.grade + " which is a(n) " + self.letterGrade + "!")

    # String validation method
    def stringValidation(self, string):
        if(string.isalpha() == True):
            return True
        else:
            print('Please enter a valid value and/or do not leave blank!')
            return False

    # Integer validation method
    def floatValidation(self, num):
        try:
            num = float(num)

            if(num >= 0 and num <= 100):
                return True
            else:
                print('Please enter a value between 0 - 100')
                return False
        except:
            print('Please enter a valid value and/or do not leave blank!')
            return False

    # Grade assigner method
    def letterGradeAssigner(self, num):
        num = float(num)
        num = math.trunc(num)

        if(num <= 59 and num >= 0):
            self.letterGrade = "'F'"
        elif(num <= 69 and num >= 60):
            self.letterGrade = "'D'"
        elif(num <= 79 and num >= 70):
            self.letterGrade = "'C'"
        elif(num <= 89 and num >= 80):
            self.letterGrade = "'B'"
        else:
            self.letterGrade = "'A'"

        self.outputPrompt()

# Creating new grader object
newGrader = Grader();
class Grader
    # Constructor
    def initialize()
      # Properties
      @name
      @course
      @gradeValue
      @letterGrade
  
      # Calling class methods to run when creating the class
      nameQuestion()
    end
  
      # Class methods
      # Student name question method
      def nameQuestion()
          puts "What is the student's name?"
          @name = gets.chomp
  
          if stringValidation(@name) == true
              courseQuestion()
          else
              nameQuestion()
          end
      end
  
          # Course question method
          def courseQuestion()
  
              puts "What is the assignment name?"
              @course = gets.chomp
  
              if self.stringValidation(@course) == true
                  gradeQuestion()
              else
                  courseQuestion()
              end
          end
  
          # Grade question method
          def gradeQuestion()
  
              puts "What was the grade value? Please enter a value from 0 - 100: "
              @gradeValue = gets.chomp
  
              if floatValidation(@gradeValue) == true
                  letterGradeAssigner(@gradeValue)
              else
                  gradeQuestion()
              end
          end
  
          # Output final prompt method
          def outputPrompt()
              puts "#{@name}'s grade in #{@course} was a(n) #{@gradeValue} which is a(n) #{@letterGrade}!"
          end
  
          # String validation method
          def stringValidation(string)
  
              if string.to_s.strip.length == 0 or string.empty?
                  puts 'Please enter a valid value and/or do not leave blank!'
                  return false
              else
                  return true
              end
          end
  
          # Integer validation method
          def floatValidation(num)
              begin
                  Float(num) != nil
              rescue
                  puts 'Please enter a value between 0 - 100'
                  return false
              else
                  if Float(num) >= 0 and Float(num) <= 100
                      return true
                  else
                      puts 'Please enter a value between 0 - 100'
                      return false
                   end
              end
          end
  
          # Grade assigner method
          def letterGradeAssigner(num)
              num = Float(num)
              num = Integer(num)
  
              if num <= 59 and num >= 0
                  @letterGrade = "'F'"
              elsif num <= 69 and num >= 60
                  @letterGrade = "'D'"
              elsif num <= 79 and num >= 70
                  @letterGrade = "'C'"
              elsif num <= 89 and num >= 80
                  @letterGrade = "'B'"
              else
                  @letterGrade = "'A'"
              end
              outputPrompt()
          end
  end
  
  # Creating new grader object
  grader_obj = Grader.new
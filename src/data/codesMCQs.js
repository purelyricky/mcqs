const codesMCQsHtml = [
  {
    id: 'scq1',
    question: 'What is the output of the following code snippet?',
    code: `Stack stk;
stk.push(10);
stk.push(20);
stk.pop();
cout << stk.top();`,
    options: [
      { id: 'A', text: '10' },
      { id: 'B', text: '20' },
      { id: 'C', text: 'Error' },
      { id: 'D', text: 'None of the above' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq2',
    question: 'Fill in the blank: The header file in C++ typically ends with the extension _____.',
    options: [
      { id: 'A', text: '.cpp' },
      { id: 'B', text: '.h' },
      { id: 'C', text: '.txt' },
      { id: 'D', text: '.exe' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq3',
    question: 'Which keyword is used to define a function outside the class definition in C++?',
    options: [
      { id: 'A', text: 'inline' },
      { id: 'B', text: 'extern' },
      { id: 'C', text: '::' },
      { id: 'D', text: 'public' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'scq4',
    question: 'What is the purpose of a getter method in Objective-C?',
    options: [
      { id: 'A', text: 'To modify the value of a private member variable.' },
      { id: 'B', text: 'To access the value of a private member variable.' },
      { id: 'C', text: 'To define a new class.' },
      { id: 'D', text: 'To create an instance of a class.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq5',
    question: 'What is the purpose of the @synthesize directive in Objective-C?',
    options: [
      { id: 'A', text: 'To define properties for instance variables.' },
      { id: 'B', text: 'To automatically generate getter and setter methods for properties.' },
      { id: 'C', text: 'To declare a new class.' },
      { id: 'D', text: 'To import external libraries.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq6',
    question: 'In Objective-C, what keyword is used to define a class property?',
    options: [
      { id: 'A', text: '@property' },
      { id: 'B', text: '@public' },
      { id: 'C', text: '@private' },
      { id: 'D', text: '@interface' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq7',
    question: 'What is the keyword used to define an interface in Objective-C?',
    options: [
      { id: 'A', text: '@interface' },
      { id: 'B', text: '@class' },
      { id: 'C', text: '@protocol' },
      { id: 'D', text: '@implementation' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq8',
    question: 'What is the purpose of the @implementation directive in Objective-C?',
    options: [
      { id: 'A', text: 'To declare the interface of a class.' },
      { id: 'B', text: 'To define the implementation of a class.' },
      { id: 'C', text: 'To import external libraries.' },
      { id: 'D', text: 'To create an instance of a class.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq9',
    question: 'In Java, what does the public keyword mean when applied to a class?',
    options: [
      { id: 'A', text: 'The class can only be accessed within the same package.' },
      { id: 'B', text: 'The class can be accessed from any other class.' },
      { id: 'C', text: 'The class cannot be instantiated.' },
      { id: 'D', text: 'The class is final and cannot be subclassed.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq10',
    question: 'What is the purpose of the static keyword when applied to a method in Java?',
    options: [
      { id: 'A', text: 'The method can only be called from within the same class.' },
      { id: 'B', text: 'The method can be called without creating an instance of the class.' },
      { id: 'C', text: 'The method cannot be overridden in subclasses.' },
      { id: 'D', text: 'The method is automatically synchronized.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq11',
    question: 'In Java, what is the keyword used to create a new instance of a class?',
    options: [
      { id: 'A', text: 'create' },
      { id: 'B', text: 'instance' },
      { id: 'C', text: 'new' },
      { id: 'D', text: 'init' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'scq12',
    question: 'What is the purpose of a constructor in Java?',
    options: [
      { id: 'A', text: 'To destroy an object when it is no longer needed.' },
      { id: 'B', text: 'To initialize the instance variables of an object.' },
      { id: 'C', text: 'To define the methods of a class.' },
      { id: 'D', text: 'To declare the inheritance hierarchy of a class.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq13',
    question: 'In C#, what is the keyword used to define a namespace?',
    options: [
      { id: 'A', text: 'package' },
      { id: 'B', text: 'module' },
      { id: 'C', text: 'namespace' },
      { id: 'D', text: 'using' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'scq14',
    question: 'What is the purpose of the using keyword in C#?',
    options: [
      { id: 'A', text: 'To define a new namespace.' },
      { id: 'B', text: 'To import types from a namespace into the current file.' },
      { id: 'C', text: 'To declare a variable.' },
      { id: 'D', text: 'To create an instance of a class.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq15',
    question: 'In C#, what is the keyword used to define a property?',
    options: [
      { id: 'A', text: 'property' },
      { id: 'B', text: 'get' },
      { id: 'C', text: 'set' },
      { id: 'D', text: 'No specific keyword; properties are defined using get and set accessors' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'scq16',
    question: 'What does the virtual keyword indicate in C#?',
    options: [
      { id: 'A', text: 'The method cannot be overridden in derived classes.' },
      { id: 'B', text: 'The method can be overridden in derived classes.' },
      { id: 'C', text: 'The method is static.' },
      { id: 'D', text: 'The method is abstract.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq17',
    question: 'In C#, what is the keyword used to override a virtual method from a base class?',
    options: [
      { id: 'A', text: 'virtual' },
      { id: 'B', text: 'override' },
      { id: 'C', text: 'new' },
      { id: 'D', text: 'base' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq18',
    question: 'What is the purpose of the base keyword in C#?',
    options: [
      { id: 'A', text: 'To call a method from the base class.' },
      { id: 'B', text: 'To define a base class.' },
      { id: 'C', text: 'To create an instance of the base class.' },
      { id: 'D', text: 'To declare inheritance.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq19',
    question: 'In Ruby, what keyword is used to define a class?',
    options: [
      { id: 'A', text: 'class' },
      { id: 'B', text: 'def' },
      { id: 'C', text: 'module' },
      { id: 'D', text: 'begin' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq20',
    question: 'What is the purpose of the initialize method in Ruby?',
    options: [
      { id: 'A', text: 'To define a class method.' },
      { id: 'B', text: 'To serve as the constructor for a class.' },
      { id: 'C', text: 'To create an instance variable.' },
      { id: 'D', text: 'To import a module.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq21',
    question: 'In Ruby, what symbol is used to denote an instance variable?',
    options: [
      { id: 'A', text: '$' },
      { id: 'B', text: '@' },
      { id: 'C', text: '@@' },
      { id: 'D', text: '#' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq22',
    question: 'What is the purpose of attr_accessor in Ruby?',
    options: [
      { id: 'A', text: 'To define a class variable.' },
      { id: 'B', text: 'To automatically create getter and setter methods for instance variables.' },
      { id: 'C', text: 'To declare a constant.' },
      { id: 'D', text: 'To define a module.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'scq23',
    question: 'How many base classes does class C inherit from?',
    code: `class B {
public:
  int b;
  virtual void sum() { /* ... */ } 
};

class C : public A, public B { 
public:
  int c;
  virtual void fun() { /* ... */ } 
  virtual void dud() { /* ... */ } 
};`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'scq24',
    question: 'What is the purpose of the getMethod() method in the Reflect class?',
    options: [
      { id: 'A', text: 'To get the name of the class.' },
      { id: 'B', text: 'To create a new instance of the class.' },
      { id: 'C', text: 'To get a reference to a method of the class.' },
      { id: 'D', text: 'To execute a method of the class.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'scq25',
    question: 'What is the namespace used for reflection in C#?',
    options: [
      { id: 'A', text: 'System.Reflection' },
      { id: 'B', text: 'System.Type' },
      { id: 'C', text: 'System.Method' },
      { id: 'D', text: 'System.Dynamic' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq26',
    question: 'What is the exception handler used for handling division by zero in this Ada code snippet?',
    code: `void example() {
  average = sum / total;
  return;

  when zero_divide {
    average = 0;
    printf("Error–divisor (total) is zero\n");
  } 
}`,
    options: [
      { id: 'A', text: 'when zero_divide' },
      { id: 'B', text: 'catch (DivisionByZeroException)' },
      { id: 'C', text: 'except ZeroDivisionError:' },
      { id: 'D', text: 'Ada does not have built-in exception handling' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq27',
    question: 'Which keyword is used to define a block of code that might throw an exception in C++?',
    options: [
      { id: 'A', text: 'try' },
      { id: 'B', text: 'catch' },
      { id: 'C', text: 'throw' },
      { id: 'D', text: 'finally' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'scq28',
    question: 'What type of exception is thrown when the user inputs a negative number?',
    code: `#include <iostream>
using namespace std;

int main() { 
  int new_grade, index, freq[10] = {0};

  while (true) {
    cout << "Please input a grade: ";
    cin >> new_grade;
    if (new_grade < 0) break;

    index = new_grade / 10;
    if (index > 9) {
      cout << "Error: grade out of range" << endl;
      continue;
    }
    freq[index]++;
  }

  for (index = 0; index < 10; index++) {
    cout << "Grades " << index * 10 << "-" << (index + 1) * 10 - 1 << ": " << freq[index] << endl;
  }
  return 0;
}`,
    options: [
      { id: 'A', text: 'std::exception' },
      { id: 'B', text: 'int' },
      { id: 'C', text: 'NegativeInputException' },
      { id: 'D', text: 'No exception is thrown' }
    ],
    correctAnswers: ['D']
  }
];

export default codesMCQsHtml;

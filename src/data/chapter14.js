const chapter14Html = [
  {
    id: 's14q1',
    question: 'What is an exception in programming?',
    options: [
      { id: 'A', text: 'A syntax error detected during compilation.' },
      { id: 'B', text: 'An unusual event, erroneous or not, detectable by hardware or software, requiring special processing.' },
      { id: 'C', text: 'A variable declared with an incorrect data type.' },
      { id: 'D', text: 'A logical error in the program\'s algorithm.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q2',
    question: 'How was exception handling typically addressed in early programming languages?',
    options: [
      { id: 'A', text: 'By using exception handling constructs.' },
      { id: 'B', text: 'The program would terminate, and the operating system would display a diagnostic message.' },
      { id: 'C', text: 'Exceptions were ignored, and the program continued execution.' },
      { id: 'D', text: 'Specialized libraries handled all exceptions.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q3',
    question: 'What is a key benefit of incorporating exception handling directly into a programming language?',
    options: [
      { id: 'A', text: 'It eliminates the need for error checking in the code.' },
      { id: 'B', text: 'It significantly reduces the amount of code dedicated to error detection, making the program cleaner.' },
      { id: 'C', text: 'It forces programmers to handle all possible exceptions.' },
      { id: 'D', text: 'It improves the program\'s overall execution speed.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q4',
    question: 'What is a common reason for some programming languages to exclude exception handling features?',
    options: [
      { id: 'A', text: 'Exception handling is considered an outdated programming practice.' },
      { id: 'B', text: 'Modern hardware is capable of preventing all exceptions.' },
      { id: 'C', text: 'Adding exception handling mechanisms can introduce complexity to the language.' },
      { id: 'D', text: 'Exception handling is only relevant for specific application domains.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q5',
    question: 'Provide an example of an error that hardware cannot typically detect, but a Java compiler can detect and generate code to check for.',
    options: [
      { id: 'A', text: 'Division by zero.' },
      { id: 'B', text: 'Stack overflow.' },
      { id: 'C', text: 'Array subscript out of range.' },
      { id: 'D', text: 'Memory access violation.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q6',
    question: 'What is the purpose of label parameters in Fortran?',
    options: [
      { id: 'A', text: 'To define the starting and ending points of loops.' },
      { id: 'B', text: 'To allow a called subprogram to return to a different point in the caller if an exception occurs.' },
      { id: 'C', text: 'To mark specific lines of code for debugging purposes.' },
      { id: 'D', text: 'To assign symbolic names to memory addresses.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q7',
    question: 'How does exception propagation function in Java?',
    options: [
      { id: 'A', text: 'Exceptions are always handled in the method where they are thrown.' },
      { id: 'B', text: 'If an exception isn\'t handled locally, it\'s passed up the call stack to enclosing `try` blocks or the caller.' },
      { id: 'C', text: 'Java uses a global exception handler for all uncaught exceptions.' },
      { id: 'D', text: 'Exception propagation is not supported in Java.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q8',
    question: 'How does a `throw` statement without an operand work in C++?',
    options: [
      { id: 'A', text: 'It throws a generic exception object.' },
      { id: 'B', text: 'It indicates that the method does not throw any exceptions.' },
      { id: 'C', text: 'It re-throws the currently handled exception, propagating it further.' },
      { id: 'D', text: 'It terminates the program immediately.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q9',
    question: 'How can you write an exception handler in C++ to handle any type of exception?',
    options: [
      { id: 'A', text: 'By using a `try` block without any `catch` handlers.' },
      { id: 'B', text: 'By using a `catch` handler with a generic `Object` parameter.' },
      { id: 'C', text: 'By using a `catch` handler with an ellipsis (`...`) as its parameter.' },
      { id: 'D', text: 'By defining a custom exception class that inherits from all other exception classes.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q10',
    question: 'What constraint does a function face when overriding a function with a `throw` clause?',
    options: [
      { id: 'A', text: 'The overriding function must have an identical `throw` clause.' },
      { id: 'B', text: 'The overriding function cannot have a `throw` clause.' },
      { id: 'C', text: 'The overriding function cannot specify more exceptions in its `throw` clause than the overridden function.' },
      { id: 'D', text: 'The overriding function can throw any exception regardless of the overridden function\'s `throw` clause.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q11',
    question: 'Does Java have built-in exceptions?',
    options: [
      { id: 'A', text: 'No, Java only supports user-defined exceptions.' },
      { id: 'B', text: 'Yes, Java includes a hierarchy of predefined exception classes.' },
      { id: 'C', text: 'Java exceptions are solely provided by external libraries.' },
      { id: 'D', text: 'Java only handles hardware-detectable exceptions.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q12',
    question: 'Which library functions in C++ can throw the `overflow_error` exception?',
    options: [
      { id: 'A', text: 'Input/output functions like `cin` and `cout`.' },
      { id: 'B', text: 'String manipulation functions like `strlen` and `strcpy`.' },
      { id: 'C', text: 'Mathematical functions in the math library.' },
      { id: 'D', text: 'Memory allocation functions like `malloc` and `free`.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q13',
    question: 'What are the two direct system-defined subclasses of the `Throwable` class in Java?',
    options: [
      { id: 'A', text: '`Exception` and `RuntimeException`' },
      { id: 'B', text: '`CheckedException` and `UncheckedException`' },
      { id: 'C', text: '`IOException` and `IndexOutOfBoundsException`' },
      { id: 'D', text: '`Error` and `Exception`' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's14q14',
    question: 'In which Java package is the `ArrayIndexOutOfBoundsException` class located?',
    options: [
      { id: 'A', text: '`java.lang`' },
      { id: 'B', text: '`java.io`' },
      { id: 'C', text: '`java.util`' },
      { id: 'D', text: '`java.math`' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's14q15',
    question: 'How can you write an exception handler in Java to handle any exception?',
    options: [
      { id: 'A', text: 'By omitting the `catch` block altogether.' },
      { id: 'B', text: 'By using a `catch` handler with an `Exception` type parameter.' },
      { id: 'C', text: 'By using a `catch` handler with a generic `Object` parameter.' },
      { id: 'D', text: 'By using a `try` block with only a `finally` clause.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q16',
    question: 'What distinguishes C++ exception handlers from Java exception handlers?',
    options: [
      { id: 'A', text: 'C++ uses `try` and `catch` while Java uses `try` and `except`.' },
      { id: 'B', text: 'Java exception handlers can only catch checked exceptions.' },
      { id: 'C', text: 'C++ exception handlers cannot re-throw exceptions.' },
      { id: 'D', text: 'Java requires all `catch` handlers to have a parameter, while C++ allows for parameterless handlers.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's14q17',
    question: 'What differentiates Java exception handlers from Python exception handlers?',
    options: [
      { id: 'A', text: 'Python uses `try` and `except` while Java uses `try` and `catch`.' },
      { id: 'B', text: 'Java exception handlers can re-throw exceptions, while Python cannot.' },
      { id: 'C', text: 'Python allows an `else` block in the `try` construct, which is absent in Java.' },
      { id: 'D', text: 'Java exception handlers can only handle a single exception type, unlike Python.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q18',
    question: 'How can a method handle exceptions received from a called method that lists a specific checked exception in its `throw` clause?',
    options: [
      { id: 'A', text: 'It can ignore the exception, allowing the program to crash.' },
      { id: 'B', text: 'It has three choices: handle the exception, catch and re-throw a different exception, or propagate the exception by declaring it in its own `throws` clause.' },
      { id: 'C', text: 'It must define its own exception handler with the same exception type as the called method.' },
      { id: 'D', text: 'It can suppress the exception using the `@SuppressWarnings` annotation.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q19',
    question: 'In Java, when would a `try` clause have only a `finally` clause and no exception handlers?',
    options: [
      { id: 'A', text: 'When the code in the `try` block is guaranteed to never throw an exception.' },
      { id: 'B', text: 'When actions in the `finally` block need execution regardless of exceptions, often involving cleanup like closing resources.' },
      { id: 'C', text: 'When the program is designed to terminate upon any exception.' },
      { id: 'D', text: 'This scenario is syntactically invalid in Java.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q20',
    question: 'What clause should a Java method include to propagate any checked exception?',
    options: [
      { id: 'A', text: 'A `catch` clause with an `Exception` parameter.' },
      { id: 'B', text: 'A `finally` clause with cleanup code.' },
      { id: 'C', text: 'A `throws` clause listing the checked exceptions.' },
      { id: 'D', text: 'A `throw` statement with a generic exception object.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q21',
    question: 'Explain the function of an `else` block in a Python `try` construct.',
    options: [
      { id: 'A', text: 'It handles exceptions not caught by any preceding `except` clauses.' },
      { id: 'B', text: 'It executes only if no exception is raised within the `try` block.' },
      { id: 'C', text: 'It specifies cleanup actions to be performed after the `try` block.' },
      { id: 'D', text: 'It re-throws the caught exception for further handling.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q22',
    question: 'What are the advantages of using `assert` statements?',
    options: [
      { id: 'A', text: 'They guarantee that the program will never throw exceptions.' },
      { id: 'B', text: 'They improve the program\'s runtime performance.' },
      { id: 'C', text: 'They allow for embedded debugging checks that can be easily enabled or disabled.' },
      { id: 'D', text: 'They eliminate the need for exception handling altogether.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q23',
    question: 'What happens when an `assert` statement evaluates to `false`?',
    options: [
      { id: 'A', text: 'The program continues execution without any effect.' },
      { id: 'B', text: 'An `AssertionError` exception is thrown.' },
      { id: 'C', text: 'The program terminates immediately.' },
      { id: 'D', text: 'A warning message is displayed to the user.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's14q24',
    question: 'What does the `message` method of Ruby\'s `StandardError` class do?',
    options: [
      { id: 'A', text: 'It prints a detailed stack trace of the exception.' },
      { id: 'B', text: 'It allows for setting a custom message for the exception.' },
      { id: 'C', text: 'It returns the human-readable error message associated with the exception.' },
      { id: 'D', text: 'It logs the exception details to a file.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q25',
    question: 'What transpires when a `raise` statement with a string parameter is executed in Ruby?',
    options: [
      { id: 'A', text: 'A generic exception is thrown with the string as its message.' },
      { id: 'B', text: 'The program terminates with an error message.' },
      { id: 'C', text: 'The string is displayed to the user as a warning.' },
      { id: 'D', text: 'A new `RuntimeError` object is raised, containing the string as its message.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's14q26',
    question: 'What is the function of the `__debug__` flag in Python?',
    options: [
      { id: 'A', text: 'It enables detailed debugging output for all exceptions.' },
      { id: 'B', text: 'It controls the logging level for exception messages.' },
      { id: 'C', text: 'It determines whether `assert` statements are evaluated.' },
      { id: 'D', text: 'It activates a step-by-step debugger for exception handling.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's14q27',
    question: 'How are exception handling and event handling related?',
    options: [
      { id: 'A', text: 'They are completely unrelated concepts.' },
      { id: 'B', text: 'Exception handling is a specific type of event handling.' },
      { id: 'C', text: 'Event handling is used to handle program errors.' },
      { id: 'D', text: 'Both involve handlers invoked by certain occurrences, but exceptions are often errors while events are external actions.' }
    ],
    correctAnswers: ['D']
  }
];

export default chapter14Html;

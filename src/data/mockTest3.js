const mockTest3 = [
  {
    id: 'mt3q1',
    question: 'Composition represents:',
    options: [
      { id: 'A', text: 'HAS-A relationship.' },
      { id: 'B', text: 'IS-A relationship.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q2',
    question: 'What kind of variables a class can consist of?',
    options: [
      { id: 'A', text: 'class variables, instance variables' },
      { id: 'B', text: 'class variables, local variables, instance variables' },
      { id: 'C', text: 'class variables' },
      { id: 'D', text: 'class variables, local variables' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q3',
    question: 'What is an applet?',
    options: [
      { id: 'A', text: 'An applet is a Java program that runs in a Web browser.' },
      { id: 'B', text: 'Applet is a standalone java program.' },
      { id: 'C', text: 'Applet is a tool.' },
      { id: 'D', text: 'Applet is a run time environment.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q4',
    question: 'What is Set Interface?',
    options: [
      { id: 'A', text: 'Set is a collection of element which contains elements along with their key.' },
      { id: 'B', text: 'Set is a collection of element which contains hashcode of elements.' },
      { id: 'C', text: 'Set is a collection of element which cannot contain duplicate elements.' },
      { id: 'D', text: 'Set is a collection of element which can contain duplicate elements.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt3q5',
    question: 'What is TreeSet Interface?',
    options: [
      { id: 'A', text: 'It is a Set implemented when we want elements in a tree based order.' },
      { id: 'B', text: 'It is a Set implemented when we want elements in a sorted order.' },
      { id: 'C', text: 'It is a Set implemented when we want elements in a binary tree format.' },
      { id: 'D', text: 'It is a Set implemented when we want elements in a hiearchical order.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q6',
    question: 'What is JRE?',
    options: [
      { id: 'A', text: 'JRE is a java based GUI application.' },
      { id: 'B', text: 'JRE is an application development framework.' },
      { id: 'C', text: 'JRE is an implementation of the Java Virtual Machine which executes Java programs.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt3q7',
    question: 'What is JIT compiler?',
    options: [
      { id: 'A', text: 'JIT improves the runtime performance of computer programs based on bytecode.' },
      { id: 'B', text: 'JIT is an application development framework.' },
      { id: 'C', text: 'JIT is an implementation of the Java Virtual Machine which executes Java programs.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q8',
    question: 'Can a constructor be made final?',
    options: [
      { id: 'A', text: 'True.' },
      { id: 'B', text: 'False.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q9',
    question: 'Can a constructor be made private?',
    options: [
      { id: 'A', text: 'True.' },
      { id: 'B', text: 'False.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q10',
    question: 'What is static block?',
    options: [
      { id: 'A', text: 'It is used to create syncronized code.' },
      { id: 'B', text: 'There is no such block.' },
      { id: 'C', text: 'It is used to initialize the static data member. It is executed before main method at the time of class loading.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt3q11',
    question: 'What is composition?',
    options: [
      { id: 'A', text: 'Composition is a data structure.' },
      { id: 'B', text: 'Composition is a way to create an object.' },
      { id: 'C', text: 'Holding the reference of the other class within some other class is known as composition.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt3q12',
    question: 'What is function overloading?',
    options: [
      { id: 'A', text: 'Methods with same name but different parameters.' },
      { id: 'B', text: 'Methods with same name but different return types.' },
      { id: 'C', text: 'Methods with same name, same parameter types but different parameter names.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q13',
    question: 'What is function overriding?',
    options: [
      { id: 'A', text: 'If a subclass uses a method that is already provided by its parent class, it is known as Method Overriding.' },
      { id: 'B', text: 'If a subclass provides a specific implementation of a method that is already provided by its parent class, it is known as Method Overriding.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q14',
    question: 'When does static binding occur?',
    options: [
      { id: 'A', text: 'Static binding occurs during Compile time.' },
      { id: 'B', text: 'Static binding occurs during load time.' },
      { id: 'C', text: 'Static binding occurs during runtime.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q15',
    question: 'Method Overloading is an example of:',
    options: [
      { id: 'A', text: 'Static Binding.' },
      { id: 'B', text: 'Dynamic Binding.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q16',
    question: 'Static binding uses which information for binding?',
    options: [
      { id: 'A', text: 'type.' },
      { id: 'B', text: 'object.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q17',
    question: 'Dynamic binding uses which information for binding?',
    options: [
      { id: 'A', text: 'type.' },
      { id: 'B', text: 'object.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q18',
    question: 'Method Overriding is an example of:',
    options: [
      { id: 'A', text: 'Static Binding.' },
      { id: 'B', text: 'Dynamic Binding.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q19',
    question: 'What is true about a final class?',
    options: [
      { id: 'A', text: 'class declared final is a final class.' },
      { id: 'B', text: 'Final classes are created so the methods implemented by that class cannot be overridden.' },
      { id: 'C', text: 'It can\'t be inherited.' },
      { id: 'D', text: 'All of the above.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt3q20',
    question: 'What is NullPointerException?',
    options: [
      { id: 'A', text: 'A NullPointerException is thrown when calling the instance method of a null object or modifying/accessing field of a null object.' },
      { id: 'B', text: 'A NullPointerException is thrown when object is set as null.' },
      { id: 'C', text: 'A NullPointerException is thrown when object property is set as null.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q21',
    question: 'Which is the way in which a thread can enter the waiting state?',
    options: [
      { id: 'A', text: 'Invoke its sleep method.' },
      { id: 'B', text: 'invoke object\'s wait method.' },
      { id: 'C', text: 'Invoke its suspend method.' },
      { id: 'D', text: 'All of the above.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt3q22',
    question: 'What invokes a thread\'s run method?',
    options: [
      { id: 'A', text: 'JVM invokes the thread\'s run method when the thread is initially executed.' },
      { id: 'B', text: 'Main application running the thread.' },
      { id: 'C', text: 'start method of the thread class.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q23',
    question: 'What happens when thread\'s yield method is called?',
    options: [
      { id: 'A', text: 'Thread returns to the ready state.' },
      { id: 'B', text: 'Thread returns to the waiting state.' },
      { id: 'C', text: 'Thread starts running.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt3q24',
    question: 'What happens when thread\'s sleep method is called?',
    options: [
      { id: 'A', text: 'Thread returns to the ready state.' },
      { id: 'B', text: 'Thread returns to the waiting state.' },
      { id: 'C', text: 'Thread starts running.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt3q25',
    question: 'What are Wrapper classes?',
    options: [
      { id: 'A', text: 'These are classes that allow primitive types to be accessed as objects.' },
      { id: 'B', text: 'These are classes that wraps functionality of an existing class.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['A']
  }
];

export default mockTest3;

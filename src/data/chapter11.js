const chapter11Html = [
  {
    id: 's11q1',
    question: 'What is an abstraction?',
    options: [
      { id: 'A', text: 'An abstraction is a view or representation of an entity that includes only the most significant attributes.' },
      { id: 'B', text: 'A simplified view that ignores significant attributes.' },
      { id: 'C', text: 'An instance representation without any attributes.' },
      { id: 'D', text: 'A detailed view of an entity showing all attributes.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q2',
    question: 'Define object.',
    options: [
      { id: 'A', text: 'An object is an instance of an abstract data type.' },
      { id: 'B', text: 'A template for creating methods.' },
      { id: 'C', text: 'A variable that contains multiple data types.' },
      { id: 'D', text: 'A class definition in a programming language.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q3',
    question: 'What is the standard for floating-point number representation?',
    options: [
      { id: 'A', text: 'ASCII' },
      { id: 'B', text: 'UNICODE' },
      { id: 'C', text: 'IEEE 754' },
      { id: 'D', text: 'EBCDIC' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q4',
    question: 'Which of these are accessor methods that allow indirect access to hidden data?',
    options: [
      { id: 'A', text: 'Constructors and Destructors' },
      { id: 'B', text: 'Public data members' },
      { id: 'C', text: 'Getters and Setters' },
      { id: 'D', text: 'Friend functions' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q5',
    question: 'What are the languages that support abstract data types?',
    options: [
      { id: 'A', text: 'C, C++, and Java' },
      { id: 'B', text: 'C++, Objective-C, Java, C#, and Ruby' },
      { id: 'C', text: 'Python and JavaScript' },
      { id: 'D', text: 'FORTRAN and COBOL' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q6',
    question: 'What is the function of a C++ destructor?',
    options: [
      { id: 'A', text: 'To create and initialize a class object.' },
      { id: 'B', text: 'To define the interface of a class.' },
      { id: 'C', text: 'To deallocate memory and perform cleanup when an object\'s lifetime ends.' },
      { id: 'D', text: 'To overload operators for custom data types.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q7',
    question: 'What are constructors called in Objective-C?',
    options: [
      { id: 'A', text: 'Accessors' },
      { id: 'B', text: 'Delegates' },
      { id: 'C', text: 'Initializers' },
      { id: 'D', text: 'Properties' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q8',
    question: 'How does Objective-C utilize information-hiding directives?',
    options: [
      { id: 'A', text: 'By using keywords like \'hidden\' and \'visible\'.' },
      { id: 'B', text: 'By using directives like \'@private\' and \'@public\'.' },
      { id: 'C', text: 'By defining access levels within method signatures.' },
      { id: 'D', text: 'Objective-C does not support information hiding.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q9',
    question: 'What is an advantage of Java\'s classes over those of Objective-C?',
    options: [
      { id: 'A', text: 'Java classes allow for multiple inheritance.' },
      { id: 'B', text: 'Java classes support operator overloading.' },
      { id: 'C', text: 'Java classes use implicit garbage collection, simplifying memory management.' },
      { id: 'D', text: 'Java classes are compiled to native code, resulting in faster execution.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q10',
    question: 'What is a similarity between class instances in Java and C#?',
    options: [
      { id: 'A', text: 'Both support multiple inheritance.' },
      { id: 'B', text: 'Both use stack-based memory allocation.' },
      { id: 'C', text: 'Both are allocated from the heap.' },
      { id: 'D', text: 'Both allow direct manipulation of memory addresses.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q11',
    question: 'How many predefined generic collections are there in C# 2005?',
    options: [
      { id: 'A', text: 'Three' },
      { id: 'B', text: 'Five' },
      { id: 'C', text: 'Seven' },
      { id: 'D', text: 'Nine' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q12',
    question: 'What is a C# assembly?',
    options: [
      { id: 'A', text: 'A collection of source code files.' },
      { id: 'B', text: 'A set of guidelines for coding conventions.' },
      { id: 'C', text: 'A unit of deployment containing CIL code, metadata, and dependencies.' },
      { id: 'D', text: 'A virtual machine for executing C# programs.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q13',
    question: 'Are Objective-C classes types?',
    options: [
      { id: 'A', text: 'Yes' },
      { id: 'B', text: 'No' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q14',
    question: 'What is a Ruby module?',
    options: [
      { id: 'A', text: 'A type of class that supports multiple inheritance.' },
      { id: 'B', text: 'A collection of variables shared across different classes.' },
      { id: 'C', text: 'A naming encapsulation for methods and constants, preventing name conflicts' },
      { id: 'D', text: 'A template for creating generic data structures.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q15',
    question: 'What is the function of a C# destructor?',
    options: [
      { id: 'A', text: 'To initialize class members upon object creation.' },
      { id: 'B', text: 'To define the public interface of a class.' },
      { id: 'C', text: 'To perform cleanup tasks, although they are less frequently needed in C# due to garbage collection.' },
      { id: 'D', text: 'To convert objects to string representations.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q16',
    question: 'When are constructors implicitly called in Objective-C?',
    options: [
      { id: 'A', text: 'Never. They are always explicitly called.' },
      { id: 'B', text: 'When an object is created using the \'new\' keyword.' },
      { id: 'C', text: 'When a subclass inherits from a superclass.' },
      { id: 'D', text: 'When a method is invoked on a class instance.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q17',
    question: 'Why are classes in Ruby referred to as dynamic?',
    options: [
      { id: 'A', text: 'Because members can be added or removed during runtime.' },
      { id: 'B', text: 'Because their memory allocation is managed dynamically.' },
      { id: 'C', text: 'Because they support operator overloading, changing their behavior.' },
      { id: 'D', text: 'Because they can be inherited from, creating dynamic relationships.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q18',
    question: 'Why are stacks in Ruby considered more flexible than those in C++ and Java?',
    options: [
      { id: 'A', text: 'Because Ruby stacks allow storing primitive data types.' },
      { id: 'B', text: 'Because Ruby stacks use a different underlying data structure.' },
      { id: 'C', text: 'Because Ruby\'s dynamic typing allows a stack to hold objects of different types.' },
      { id: 'D', text: 'Because Ruby stacks automatically adjust their size as needed.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q19',
    question: 'What is a drawback of user-defined generic classes?',
    options: [
      { id: 'A', text: 'They cannot be used to implement abstract data types.' },
      { id: 'B', text: 'They require complex syntax, making code less readable.' },
      { id: 'C', text: 'They often cannot store primitive data types directly.' },
      { id: 'D', text: 'They introduce significant runtime overhead due to type checking.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q20',
    question: 'What is a dynamic link library (DLL)?',
    options: [
      { id: 'A', text: 'A static library linked during the compilation process.' },
      { id: 'B', text: 'A collection of code linked to an executing program when needed.' },
      { id: 'C', text: 'A file format for storing program source code.' },
      { id: 'D', text: 'A set of instructions for the operating system kernel.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q21',
    question: 'Where are Java classes allocated?',
    options: [
      { id: 'A', text: 'On the stack' },
      { id: 'B', text: 'On the heap' },
      { id: 'C', text: 'In static memory' },
      { id: 'D', text: 'In the processor cache' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q22',
    question: 'Why are destructors less frequently needed in Java compared to C++?',
    options: [
      { id: 'A', text: 'Java does not support the concept of destructors.' },
      { id: 'B', text: 'Java\'s automatic garbage collection handles memory deallocation, making explicit destruction less necessary.' },
      { id: 'C', text: 'Java objects have a fixed lifespan, eliminating the need for destruction.' },
      { id: 'D', text: 'Java relies on the operating system to manage memory deallocation.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q23',
    question: 'What are friend functions and friend classes?',
    options: [
      { id: 'A', text: 'Functions and classes that have only public members.' },
      { id: 'B', text: 'Functions and classes that cannot access private data of other classes.' },
      { id: 'C', text: 'Non-member functions and classes granted access to private members of a specific class.' },
      { id: 'D', text: 'Functions and classes that are defined within the same namespace.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q24',
    question: 'Why doesn\'t Java have friend functions or friend classes?',
    options: [
      { id: 'A', text: 'Because Java emphasizes strong encapsulation and restricts access to class members.' },
      { id: 'B', text: 'Because Java\'s package system provides sufficient access control between types within the same package.' },
      { id: 'C', text: 'Because Java\'s dynamic typing makes friend relationships unnecessary.' },
      { id: 'D', text: 'Because Java\'s garbage collection handles memory management, eliminating the need for friend relationships.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q25',
    question: 'What are the fundamental differences between C# structs and classes?',
    options: [
      { id: 'A', text: 'Structs are used for defining abstract data types, while classes define concrete implementations.' },
      { id: 'B', text: 'Structs are value types allocated on the stack and do not support inheritance, while classes are reference types allocated on the heap and support inheritance.' },
      { id: 'C', text: 'Structs are immutable, meaning their values cannot be changed after creation, while classes allow modification.' },
      { id: 'D', text: 'Structs can only contain data members, while classes can contain both data members and methods.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q26',
    question: 'How is a struct object created in C#?',
    options: [
      { id: 'A', text: 'Only by using the \'new\' keyword and a constructor.' },
      { id: 'B', text: 'Only by declaring it like primitive data types.' },
      { id: 'C', text: 'Both by declaring it like primitive data types and by using the \'new\' keyword with a constructor.' },
      { id: 'D', text: 'By using the \'create\' keyword followed by the struct name.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q27',
    question: 'What are the benefits of using accessors (getters and setters) for private types over making them public?',
    options: [
      { id: 'A', text: 'Accessors expose the internal implementation details of a class, making code easier to understand.' },
      { id: 'B', text: 'Accessors provide controlled access, enabling read-only properties, data validation, and implementation changes without affecting clients.' },
      { id: 'C', text: 'Accessors increase code complexity and reduce execution speed due to function call overhead.' },
      { id: 'D', text: 'Accessors make it impossible to change the data members of a class, ensuring data integrity.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q28',
    question: 'What are the differences between a C++ struct and a C# struct?',
    options: [
      { id: 'A', text: 'C++ structs are nearly identical to classes, with public member access by default, while C# structs are lightweight, do not support inheritance, and have private member access by default.' },
      { id: 'B', text: 'C++ structs can only hold data members, while C# structs can have both data members and methods.' },
      { id: 'C', text: 'C++ structs are allocated on the heap, while C# structs are allocated on the stack.' },
      { id: 'D', text: 'C++ structs do not have constructors, while C# structs do.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q29',
    question: 'What is the name of all constructors in Ruby?',
    options: [
      { id: 'A', text: 'New' },
      { id: 'B', text: 'Create' },
      { id: 'C', text: 'Construct' },
      { id: 'D', text: 'initialize' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's11q30',
    question: 'What is the fundamental difference between classes in Ruby and those in C++ and Java?',
    options: [
      { id: 'A', text: 'Ruby classes are dynamic, allowing modification of members during runtime, while C++ and Java classes have a fixed structure determined at compile time.' },
      { id: 'B', text: 'Ruby classes support multiple inheritance, while C++ and Java classes only allow single inheritance.' },
      { id: 'C', text: 'Ruby classes are allocated on the stack, while C++ and Java classes are allocated on the heap.' },
      { id: 'D', text: 'Ruby classes do not have constructors, while C++ and Java classes do.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q31',
    question: 'How are instances of C++ template classes created?',
    options: [
      { id: 'A', text: 'At compile time' },
      { id: 'B', text: 'At runtime' },
      { id: 'C', text: 'Using the \'instantiate\' keyword' },
      { id: 'D', text: 'By manually allocating memory and initializing data members' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q32',
    question: 'What challenges in large-scale program development led to the creation of encapsulation constructs?',
    options: [
      { id: 'A', text: 'The limitations of primitive data types in representing complex data.' },
      { id: 'B', text: 'The need for faster code execution speeds and optimized memory usage.' },
      { id: 'C', text: 'The difficulty of managing large codebases and the high cost of recompiling entire programs after modifications.' },
      { id: 'D', text: 'The lack of standardized coding conventions and the prevalence of platform-dependent code.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q33',
    question: 'What potential issues can arise when using C to simulate abstract data types?',
    options: [
      { id: 'A', text: 'C compilers do not allow the use of structs, making data encapsulation impossible.' },
      { id: 'B', text: 'C\'s reliance on header files and manual inclusion can lead to inconsistencies and potential errors when managing dependencies.' },
      { id: 'C', text: 'C does not support the concept of functions, making it impossible to define operations on data.' },
      { id: 'D', text: 'C requires all data members to be public, preventing information hiding.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's11q34',
    question: 'What is the benefit of using C++ namespaces?',
    options: [
      { id: 'A', text: 'To enforce object-oriented programming principles, such as encapsulation and inheritance.' },
      { id: 'B', text: 'To optimize code execution by grouping related functions together.' },
      { id: 'C', text: 'To manage the global namespace and prevent name collisions between libraries and program components.' },
      { id: 'D', text: 'To define new data types and operations, extending the capabilities of the language.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q35',
    question: 'What is a Java package and its purpose?',
    options: [
      { id: 'A', text: 'A collection of compiled code ready for deployment.' },
      { id: 'B', text: 'A set of tools for debugging and profiling Java programs.' },
      { id: 'C', text: 'A naming encapsulation that groups related types, providing controlled access and preventing name conflicts.' },
      { id: 'D', text: 'A mechanism for implementing multiple inheritance in Java.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q36',
    question: 'Describe a .NET assembly.',
    options: [
      { id: 'A', text: 'A collection of human-readable documentation for a .NET application.' },
      { id: 'B', text: 'A set of guidelines for designing .NET applications.' },
      { id: 'C', text: 'A virtual machine responsible for executing .NET code.' },
      { id: 'D', text: 'A self-contained unit of deployment containing CIL code, metadata, dependencies, and a version number.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's11q37',
    question: 'What elements can appear in a Ruby module?',
    options: [
      { id: 'A', text: 'Modules can be instantiated directly.' },
      { id: 'B', text: 'They contain class constructors only.' },
      { id: 'C', text: 'Modules store runtime objects.' },
      { id: 'D', text: 'Ruby modules contain methods and constants, providing encapsulation and preventing name conflicts.' }
    ],
    correctAnswers: ['D']
  }
];

export default chapter11Html;

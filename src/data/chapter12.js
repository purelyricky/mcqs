const chapter12Html = [
  {
    id: 's12q1',
    question: 'Are you ready?',
    options: [
      { id: 'A', text: 'no' },
      { id: 'B', text: 'no' }
    ],  
    correctAnswers: ['A']
  },
  {
    id: 's12q2',
    question: 'Which of the following statements about Smalltalk is false?',
    options: [
      { id: 'A', text: 'Smalltalk supports dynamic polymorphism.' },
      { id: 'B', text: 'Smalltalk does not support multiple inheritance.' },
      { id: 'C', text: 'Smalltalk allows the programmer to choose between static and dynamic binding.' },
      { id: 'D', text: 'Smalltalk treats everything as an object.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q3',
    question: 'In C++, which access specifier allows members of a base class to be visible to subclasses but not to clients?',
    options: [
      { id: 'A', text: 'private' },
      { id: 'B', text: 'public' },
      { id: 'C', text: 'protected' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q4',
    question: 'Which of the following features of Objective-C offers functionality similar to multiple inheritance without the associated issues like naming collisions?',
    options: [
      { id: 'A', text: 'Categories' },
      { id: 'B', text: 'Protocols' },
      { id: 'C', text: 'Destructors' },
      { id: 'D', text: 'Dynamic typing' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q5',
    question: 'Which statement best characterises the relationship between subclasses and subtypes in Java?',
    options: [
      { id: 'A', text: 'All subclasses are subtypes.' },
      { id: 'B', text: 'All subtypes are subclasses.' },
      { id: 'C', text: 'Subclasses and subtypes are entirely unrelated concepts.' },
      { id: 'D', text: 'Subclasses can be subtypes, but not all are.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q6',
    question: 'Ruby employs a unique approach to access control for instance variables. Which statement accurately describes this?',
    options: [
      { id: 'A', text: 'Instance variables have public access by default.' },
      { id: 'B', text: 'Getters and setters are automatically generated for all instance variables.' },
      { id: 'C', text: 'Instance variables have private access by default, and accessor methods must be explicitly defined.' },
      { id: 'D', text: 'Ruby does not support any form of access control for instance variables.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q7',
    question: 'What is the function of an abstract method in object-oriented programming?',
    options: [
      { id: 'A', text: 'It provides a concrete implementation that can be directly used by objects.' },
      { id: 'B', text: 'It declares a method\'s interface without a body, requiring subclasses to provide the implementation.' },
      { id: 'C', text: 'It defines a method that can only be accessed within the class it is declared.' },
      { id: 'D', text: 'It creates a method that cannot be overridden in subclasses.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q8',
    question: 'Which of the following statements regarding the allocation and deallocation of objects in C++ is true?',
    options: [
      { id: 'A', text: 'All objects are always allocated on the heap.' },
      { id: 'B', text: 'C++ uses garbage collection for automatic deallocation of objects.' },
      { id: 'C', text: 'Objects can be allocated on the stack, heap, or statically, with deallocation for heap-dynamic objects being explicit.' },
      { id: 'D', text: 'C++ only supports stack-dynamic allocation of objects.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q9',
    question: 'How does the concept of polymorphism manifest in Smalltalk?',
    options: [
      { id: 'A', text: 'Through the use of virtual functions and pointers.' },
      { id: 'B', text: 'By using type casting and runtime type identification.' },
      { id: 'C', text: 'Since all variables are essentially typeless references to objects, all code is inherently generic and supports dynamic polymorphism.' },
      { id: 'D', text: 'Smalltalk does not support polymorphism.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q10',
    question: 'What is the purpose of the `super` keyword in a Java subclass constructor?',
    options: [
      { id: 'A', text: 'It calls the garbage collector to deallocate the superclass object.' },
      { id: 'B', text: 'It creates a new instance of the superclass.' },
      { id: 'C', text: 'It allows access to a hidden method of the superclass.' },
      { id: 'D', text: 'It invokes the constructor of the superclass, ensuring proper initialisation of inherited members.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's12q11',
    question: 'What is the key distinction between C++ abstract classes and Java interfaces?',
    options: [
      { id: 'A', text: 'C++ abstract classes can have instance variables, while Java interfaces cannot.' },
      { id: 'B', text: 'Java interfaces allow multiple inheritance, while C++ abstract classes do not.' },
      { id: 'C', text: 'C++ abstract classes must have at least one pure virtual function, while Java interfaces can have all methods declared without bodies.' },
      { id: 'D', text: 'C++ abstract classes can be instantiated, while Java interfaces cannot.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q12',
    question: 'How does Ruby handle the potential for naming conflicts in multiple inheritance scenarios?',
    options: [
      { id: 'A', text: 'Ruby resolves naming conflicts by prioritising methods from the class listed first in the inheritance chain.' },
      { id: 'B', text: 'It uses a namespace resolution operator (::) to differentiate between conflicting methods.' },
      { id: 'C', text: 'Ruby prevents naming conflicts entirely by not supporting multiple inheritance.' },
      { id: 'D', text: 'It raises an exception at runtime if a naming conflict is encountered.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q13',
    question: 'Which statement accurately describes object slicing in C++?',
    options: [
      { id: 'A', text: 'It refers to the process of dividing an object into smaller parts for efficient memory management.' },
      { id: 'B', text: 'It occurs when a derived class object is assigned to a base class object, potentially losing data specific to the derived class.' },
      { id: 'C', text: 'It is a technique used to dynamically allocate memory for objects at runtime.' },
      { id: 'D', text: 'It is a method for serialising objects to a file.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q14',
    question: 'In C#, how are methods that override virtual methods in a base class designated?',
    options: [
      { id: 'A', text: 'By using the `virtual` keyword.' },
      { id: 'B', text: 'By using the `new` keyword.' },
      { id: 'C', text: 'By using the `override` keyword.' },
      { id: 'D', text: 'By using the `abstract` keyword.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q15',
    question: 'Which of the following features of reflection in C# distinguishes it from Java?',
    options: [
      { id: 'A', text: 'The ability to introspect class modifiers such as public, static, and final.' },
      { id: 'B', text: 'The capability to discover the names of formal parameters of methods.' },
      { id: 'C', text: 'Support for dynamically creating CIL code and assemblies using the System.Reflection.Emit namespace.' },
      { id: 'D', text: 'The use of the typeof operator to retrieve the class of an instance.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q16',
    question: 'What is a key benefit of nested classes in Java?',
    options: [
      { id: 'A', text: 'They enhance code readability by grouping related classes together.' },
      { id: 'B', text: 'They allow inner classes to directly access private members of the outer class.' },
      { id: 'C', text: 'They enable the creation of objects that can exist independently of the outer class.' },
      { id: 'D', text: 'They facilitate the implementation of multiple inheritance.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q17',
    question: 'What is a polymorphic variable in object-oriented programming?',
    options: [
      { id: 'A', text: 'A variable that can hold values of different data types.' },
      { id: 'B', text: 'A variable that can reference objects of different classes within an inheritance hierarchy.' },
      { id: 'C', text: 'A variable that can only be declared within a class definition.' },
      { id: 'D', text: 'A variable that stores a constant value that cannot be modified.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q18',
    question: 'Which statement accurately portrays the distinction between methods and subprograms in object-oriented programming?',
    options: [
      { id: 'A', text: 'Methods and subprograms are essentially synonymous terms, referring to the same concept.' },
      { id: 'B', text: 'Methods operate on objects and encapsulate their behaviour, while subprograms are independent procedures that process data passed to them.' },
      { id: 'C', text: 'Methods are only defined within classes, while subprograms can exist outside of any class.' },
      { id: 'D', text: 'Methods cannot return values, while subprograms can.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q19',
    question: 'How do instance variables and class variables differ in object-oriented programming?',
    options: [
      { id: 'A', text: 'Instance variables are associated with individual objects of a class, while class variables are shared by all objects of that class.' },
      { id: 'B', text: 'Instance variables are accessible only within the class definition, while class variables can be accessed globally.' },
      { id: 'C', text: 'Instance variables are declared with the `static` keyword, while class variables are not.' },
      { id: 'D', text: 'Instance variables hold constant values, while class variables can store changing values.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q20',
    question: 'Which of the following is NOT a category of changes that a subclass can make to its parent class?',
    options: [
      { id: 'A', text: 'Adding new instance variables.' },
      { id: 'B', text: 'Adding new methods.' },
      { id: 'C', text: 'Overriding inherited methods.' },
      { id: 'D', text: 'Making private members of the parent class public.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's12q21',
    question: 'What is the primary advantage of dynamic binding in object-oriented programming?',
    options: [
      { id: 'A', text: 'It allows method calls to be resolved at compile time, improving program efficiency.' },
      { id: 'B', text: 'It enables code to operate on objects of different classes interchangeably, promoting flexibility and extensibility.' },
      { id: 'C', text: 'It enforces stricter type checking, reducing runtime errors.' },
      { id: 'D', text: 'It simplifies memory management by automatically deallocating objects.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q22',
    question: 'In Java, what is the purpose of the `final` keyword when applied to a method?',
    options: [
      { id: 'A', text: 'It designates the method as the last method to be called before an object is destroyed.' },
      { id: 'B', text: 'It indicates that the method cannot be overridden in any subclasses.' },
      { id: 'C', text: 'It makes the method accessible only within the class it is defined.' },
      { id: 'D', text: 'It marks the method for optimisation by the compiler, potentially improving execution speed.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q23',
    question: 'What is a key advantage of using interfaces in Java?',
    options: [
      { id: 'A', text: 'They allow classes to inherit implementation details from multiple parent classes.' },
      { id: 'B', text: 'They reduce code duplication by providing default implementations for common methods.' },
      { id: 'C', text: 'They provide a way to achieve a form of multiple inheritance by specifying a set of methods that a class must implement.' },
      { id: 'D', text: 'They improve program efficiency by enabling static binding of method calls.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q24',
    question: 'C++ allows programmers to declare standalone functions, member functions, and classes as friends of a class. What is the rationale behind this concept?',
    options: [
      { id: 'A', text: 'To allow these entities to access private members of the class they are friends with.' },
      { id: 'B', text: 'To establish an inheritance relationship between the friend entities and the class.' },
      { id: 'C', text: 'To enable friend entities to override methods of the class.' },
      { id: 'D', text: 'To improve code organisation by grouping related functions and classes together.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q25',
    question: 'Which statement correctly describes the purpose of a destructor method in a C++ class?',
    options: [
      { id: 'A', text: 'It initialises the data members of an object when it is created.' },
      { id: 'B', text: 'It defines the operations that can be performed on an object.' },
      { id: 'C', text: 'It performs cleanup tasks, such as deallocating heap-allocated memory, before an object is destroyed.' },
      { id: 'D', text: 'It controls access to the members of a class, specifying which members are visible outside the class.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q26',
    question: 'How does Ruby implement primitive types, such as integers and floating-point numbers?',
    options: [
      { id: 'A', text: 'As special keywords within the language.' },
      { id: 'B', text: 'As structs that hold the raw data values.' },
      { id: 'C', text: 'As objects with their own classes and methods.' },
      { id: 'D', text: 'Ruby does not support primitive types; everything is an object.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's12q27',
    question: 'What is multiple inheritance?',
    options: [
      { id: 'A', text: 'A feature that allows a class to have multiple instances.' },
      { id: 'B', text: 'A feature that allows a class to inherit from more than one parent class.' },
      { id: 'C', text: 'A feature that allows a class to define multiple constructors.' },
      { id: 'D', text: 'A feature that allows a class to have multiple methods with the same name but different parameters.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q28',
    question: 'In C++, how are parameters sent to a superclass\'s constructor?',
    options: [
      { id: 'A', text: 'Using the `super` keyword followed by the parameter list.' },
      { id: 'B', text: 'By directly calling the superclass constructor within the subclass constructor.' },
      { id: 'C', text: 'By passing the parameters in the subclass constructor\'s initialisation list.' },
      { id: 'D', text: 'C++ does not allow passing parameters to superclass constructors.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q29',
    question: 'What is the single most important practical difference between Smalltalk and C++?',
    options: [
      { id: 'A', text: 'Smalltalk is a dynamically typed language, while C++ is statically typed.' },
      { id: 'B', text: 'Smalltalk uses message passing for all computation, while C++ allows both procedural and object-oriented styles.' },
      { id: 'C', text: 'Smalltalk supports single inheritance, while C++ supports multiple inheritance.' },
      { id: 'D', text: 'Smalltalk is typically interpreted, leading to slower execution compared to the compiled nature of C++.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's12q30',
    question: 'What is the purpose of an abstract class in object-oriented programming?',
    options: [
      { id: 'A', text: 'To define a template for creating objects, but not to be instantiated itself.' },
      { id: 'B', text: 'To encapsulate data and methods that are shared by multiple classes.' },
      { id: 'C', text: 'To represent a concrete entity in the problem domain.' },
      { id: 'D', text: 'To provide a mechanism for overloading operators.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q31',
    question: 'What does reflection allow a program to do?',
    options: [
      { id: 'A', text: 'Access and manipulate private members of other classes.' },
      { id: 'B', text: 'Create new classes at run time.' },
      { id: 'C', text: 'Examine its own structure and metadata at run time.' },
      { id: 'D', text: 'Override the behaviour of inherited methods.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q32',
    question: 'In the context of reflection, what is metadata?',
    options: [
      { id: 'A', text: 'Data about the data, such as its size, type, and structure.' },
      { id: 'B', text: 'Hidden data that is not accessible to the program.' },
      { id: 'C', text: 'Code comments that provide documentation about a program.' },
      { id: 'D', text: 'Temporary data that is used during program execution.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q33',
    question: 'What is introspection in the context of reflection?',
    options: [
      { id: 'A', text: 'The process of modifying a program\'s behaviour at run time.' },
      { id: 'B', text: 'The ability of a program to examine its own structure and metadata.' },
      { id: 'C', text: 'The mechanism for creating new objects dynamically.' },
      { id: 'D', text: 'The technique for intercepting method calls and altering their execution flow.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q34',
    question: 'What is the purpose of an Objective-C category?',
    options: [
      { id: 'A', text: 'To define a new class that inherits from an existing class.' },
      { id: 'B', text: 'To group related classes together into a namespace.' },
      { id: 'C', text: 'To add methods to an existing class without subclassing.' },
      { id: 'D', text: 'To create an abstract class that cannot be instantiated.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q35',
    question: 'What is the purpose of an Objective-C protocol?',
    options: [
      { id: 'A', text: 'To define a set of methods that a class must implement.' },
      { id: 'B', text: 'To specify the order in which methods should be called.' },
      { id: 'C', text: 'To control access to the members of a class.' },
      { id: 'D', text: 'To handle exceptions that occur during program execution.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q36',
    question: 'If an Objective-C method returns nothing, what return type is indicated in its header?',
    options: [
      { id: 'A', text: 'null' },
      { id: 'B', text: 'void' },
      { id: 'C', text: 'empty' },
      { id: 'D', text: 'nil' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q37',
    question: 'How is the type system of Java different from that of C++?',
    options: [
      { id: 'A', text: 'Java is a dynamically typed language, while C++ is statically typed.' },
      { id: 'B', text: 'Java only supports primitive types, while C++ supports both primitive types and objects.' },
      { id: 'C', text: 'Java does not support pointers, while C++ does.' },
      { id: 'D', text: 'Java uses garbage collection for memory management, while C++ relies on manual deallocation.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q38',
    question: 'From where can Java objects be allocated?',
    options: [
      { id: 'A', text: 'Stack' },
      { id: 'B', text: 'Heap' },
      { id: 'C', text: 'Static memory' },
      { id: 'D', text: 'Both stack and heap' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q39',
    question: 'What is boxing?',
    options: [
      { id: 'A', text: 'Converting a primitive type to its corresponding wrapper class object.' },
      { id: 'B', text: 'Encapsulating data and methods within a class.' },
      { id: 'C', text: 'Restricting access to class members.' },
      { id: 'D', text: 'Defining a method that can handle different data types.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q40',
    question: 'How are Java objects deallocated?',
    options: [
      { id: 'A', text: 'Manually using the `delete` keyword.' },
      { id: 'B', text: 'Automatically by the garbage collector.' },
      { id: 'C', text: 'Using destructors.' },
      { id: 'D', text: 'Java objects are never deallocated.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q41',
    question: 'Are all Java subclasses subtypes?',
    options: [
      { id: 'A', text: 'Yes, always.' },
      { id: 'B', text: 'No, never.' },
      { id: 'C', text: 'Only if the subclass overrides all methods of the superclass.' },
      { id: 'D', text: 'Only if the subclass does not introduce any new methods.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q42',
    question: 'How are superclass constructors called in Java?',
    options: [
      { id: 'A', text: 'Using the `super` keyword within the subclass constructor.' },
      { id: 'B', text: 'By directly calling the superclass constructor by its name.' },
      { id: 'C', text: 'Superclass constructors are automatically called before the subclass constructor.' },
      { id: 'D', text: 'Java does not allow calling superclass constructors.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q43',
    question: 'Under what circumstances is a Java method call statically bound to a method?',
    options: [
      { id: 'A', text: 'When the method is declared `final`.' },
      { id: 'B', text: 'When the method is declared `private`.' },
      { id: 'C', text: 'When the method is declared `static`.' },
      { id: 'D', text: 'All of the above.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's12q44',
    question: 'What is a polymorphic variable?',
    options: [
      { id: 'A', text: 'A variable that can hold values of different data types.' },
      { id: 'B', text: 'A variable that can reference objects of different classes within an inheritance hierarchy.' },
      { id: 'C', text: 'A variable whose type can change at run time.' },
      { id: 'D', text: 'A variable that can be declared multiple times with different types.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q45',
    question: 'What is an overriding method?',
    options: [
      { id: 'A', text: 'A method that has the same name and parameters as a method in its superclass, but provides a different implementation.' },
      { id: 'B', text: 'A method that extends the functionality of a method in its superclass.' },
      { id: 'C', text: 'A method that calls a method in its superclass.' },
      { id: 'D', text: 'A method that has the same name but different parameters as a method in its superclass.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q46',
    question: 'What is the difference between a class variable and an instance variable?',
    options: [
      { id: 'A', text: 'Class variables are declared outside of any methods, while instance variables are declared within methods.' },
      { id: 'B', text: 'Class variables are shared by all instances of a class, while each instance has its own copy of instance variables.' },
      { id: 'C', text: 'Class variables can only be accessed by static methods, while instance variables can be accessed by both static and non-static methods.' },
      { id: 'D', text: 'Class variables are declared using the `static` keyword, while instance variables are not.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q47',
    question: 'In what way do overriding methods in C# syntactically differ from their counterparts in C++?',
    options: [
      { id: 'A', text: 'In C#, overriding methods must be marked with the `override` keyword, while in C++, they are marked with `virtual`.' },
      { id: 'B', text: 'In C#, overriding methods must have the same return type as the overridden method, while in C++ they can have different return types.' },
      { id: 'C', text: 'In C#, overriding methods can change the access modifier of the overridden method, while in C++, they cannot.' },
      { id: 'D', text: 'In C#, overriding methods can throw additional exceptions that are not declared by the overridden method, while in C++, they cannot.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's12q48',
    question: 'How can the parent version of an inherited method that is overridden in a subclass be called in that subclass in C#?',
    options: [
      { id: 'A', text: 'Using the `super` keyword.' },
      { id: 'B', text: 'Using the `parent` keyword.' },
      { id: 'C', text: 'Using the `base` keyword.' },
      { id: 'D', text: 'C# does not provide a way to call the parent version of an overridden method.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q49',
    question: 'How does Ruby implement primitive types, such as those for integer and floating-point data?',
    options: [
      { id: 'A', text: 'Ruby has special keywords for primitive types.' },
      { id: 'B', text: 'Primitive types in Ruby are represented as objects.' },
      { id: 'C', text: 'Ruby uses structures for primitive types.' },
      { id: 'D', text: 'Ruby does not have primitive types.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q50',
    question: 'How are getter methods defined in a Ruby class?',
    options: [
      { id: 'A', text: 'By using the `get` keyword followed by the variable name.' },
      { id: 'B', text: 'By using the variable name directly as the method name.' },
      { id: 'C', text: 'By using the `attr_reader` function.' },
      { id: 'D', text: 'Getter methods are not supported in Ruby.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q51',
    question: 'What access controls does Ruby support for instance variables?',
    options: [
      { id: 'A', text: 'Public, private, protected' },
      { id: 'B', text: 'Public, private' },
      { id: 'C', text: 'Private only' },
      { id: 'D', text: 'Ruby does not support access controls for instance variables.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q52',
    question: 'What access controls does Ruby support for methods?',
    options: [
      { id: 'A', text: 'Public, private, protected' },
      { id: 'B', text: 'Public, private' },
      { id: 'C', text: 'Private only' },
      { id: 'D', text: 'Ruby does not support access controls for methods.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q53',
    question: 'Are all Ruby subclasses subtypes?',
    options: [
      { id: 'A', text: 'Yes, always.' },
      { id: 'B', text: 'No, never.' },
      { id: 'C', text: 'Only if the subclass overrides all methods of the superclass.' },
      { id: 'D', text: 'Only if the subclass does not introduce any new methods.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q54',
    question: 'Does Ruby support multiple inheritance?',
    options: [
      { id: 'A', text: 'Yes.' },
      { id: 'B', text: 'No.' },
      { id: 'C', text: 'Ruby supports multiple inheritance through interfaces.' },
      { id: 'D', text: 'Ruby supports multiple inheritance through mixins.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's12q55',
    question: 'What does reflection allow a program to do?',
    options: [
      { id: 'A', text: 'Execute code in reverse order.' },
      { id: 'B', text: 'Create copies of itself.' },
      { id: 'C', text: 'Access and modify its own structure and behaviour at run time.' },
      { id: 'D', text: 'Communicate with other programs.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's12q56',
    question: 'In the context of reflection, what is metadata?',
    options: [
      { id: 'A', text: 'Data about data.' },
      { id: 'B', text: 'Hidden data within a program.' },
      { id: 'C', text: 'Data stored in a database.' },
      { id: 'D', text: 'Encrypted data.' }
    ],
    correctAnswers: ['A']
  }
];

export default chapter12Html;

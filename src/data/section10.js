const section10 = [
  {
    id: 's10q1',
    question: 'You need to create a class that will store unique object elements. You do not need to sort these elements but they must be unique. What interface might be most suitable to meet this need?',
    options: [
      { id: 'A', text: 'Set' },
      { id: 'B', text: 'List' },
      { id: 'C', text: 'Map' },
      { id: 'D', text: 'Vector' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's10q2',
    question: 'Which of the following will successfully create an instance of the Vector class and add an element?',
    options: [
      { id: 'A', text: 'Vector v=new Vector(99); v[1]=99;' },
      { id: 'B', text: 'Vector v=new Vector(); v.addElement(99);' },
      { id: 'C', text: 'Vector v=new Vector(); v.add(99);' },
      { id: 'D', text: 'Vector v=new Vector(100); v.addElement("99");' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's10q3',
    question: 'Which of the following most closely describes a bitset collection?',
    options: [
      { id: 'A', text: 'A class that contains groups of unique sequences of bits' },
      { id: 'B', text: 'A method for flipping individual bits in instance of a primitive type' },
      { id: 'C', text: 'An array of boolean primitives that indicate zeros or ones' },
      { id: 'D', text: 'A collection for storing bits as on-off information, like a vector of bits' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's10q4',
    question: 'Which of these are core interfaces in the collection framework?',
    options: [
      { id: 'A', text: 'Set' },
      { id: 'B', text: 'Bag' },
      { id: 'C', text: 'LinkedList' },
      { id: 'D', text: 'Collection' },
      { id: 'E', text: 'Map' }
    ],
    correctAnswers: ['A', 'B', 'E']
  },
  {
    id: 's10q5',
    question: 'Which of these implementations are provided by the java.util package?',
    options: [
      { id: 'A', text: 'HashList' },
      { id: 'B', text: 'HashMap' },
      { id: 'C', text: 'ArraySet' },
      { id: 'D', text: 'ArrayMap' },
      { id: 'E', text: 'TreeMap' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's10q6',
    question: 'What is the name of the interface used to represent collections that maintain non-unique elements in order?',
    options: [
      { id: 'A', text: 'Collection' },
      { id: 'B', text: 'Set' },
      { id: 'C', text: 'SortedSet' },
      { id: 'D', text: 'List' },
      { id: 'E', text: 'Sequence' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's10q7',
    question: 'Which of these statements concerning the use of collection operations are true?',
    options: [
      { id: 'A', text: 'Some operations may throw an UnsupportedOperationException.' },
      { id: 'B', text: 'Methods using some operations must either catch UnsupportedOperationException or declare that they throw such exceptions.' },
      { id: 'C', text: 'Collection classes implementing List can have duplicate elements.' },
      { id: 'D', text: 'ArrayList can only accommodate a fixed number of elements.' },
      { id: 'E', text: 'The Collection interface contains a method named get.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's10q8',
    question: 'Which of these methods from the Collection interface return the value true if the collection object was modified during the operation?',
    options: [
      { id: 'A', text: 'contains()' },
      { id: 'B', text: 'add()' },
      { id: 'C', text: 'containsAll()' },
      { id: 'D', text: 'retainAll()' },
      { id: 'E', text: 'clear()' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's10q9',
    question: 'Which of these collection implementations are thread-safe?',
    options: [
      { id: 'A', text: 'ArrayList' },
      { id: 'B', text: 'HashSet' },
      { id: 'C', text: 'Vector' },
      { id: 'D', text: 'TreeSet' },
      { id: 'E', text: 'LinkedList' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's10q10',
    question: 'Which of these classes has a comparator() method?',
    options: [
      { id: 'A', text: 'ArrayList' },
      { id: 'B', text: 'HashMap' },
      { id: 'C', text: 'TreeSet' },
      { id: 'D', text: 'HashSet' },
      { id: 'E', text: 'Treemap' }
    ],
    correctAnswers: ['C', 'E']
  },
  {
    id: 's10q11',
    question: 'Which most closely matches a description of a Java Map?',
    options: [
      { id: 'A', text: 'A vector of arrays for a 2D geographic representation' },
      { id: 'B', text: 'A class for containing unique array elements' },
      { id: 'C', text: 'A class for containing unique vector elements' },
      { id: 'D', text: 'An interface that ensures that implementing classes cannot contain duplicate keys' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's10q12',
    question: 'How does the set collection deal with duplicate elements?',
    options: [
      { id: 'A', text: 'An exception is thrown if you attempt to add an element with a duplicate value' },
      { id: 'B', text: 'The add method returns false if you attempt to add an element with a duplicate value' },
      { id: 'C', text: 'A set may contain elements that return duplicate values from a call to the equals method' },
      { id: 'D', text: 'Duplicate values will cause an error at compile time' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's10q13',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'At the root of the collection hierarchy is a class called Collection' },
      { id: 'B', text: 'The collection interface contains a method called enumerator' },
      { id: 'C', text: 'The iterator method returns an instance of the Vector class' },
      { id: 'D', text: 'The set interface is designed for unique elements' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's10q14',
    question: 'Which of the following methods are members of the Vector class and allow you to input a new element?',
    options: [
      { id: 'A', text: 'addElement' },
      { id: 'B', text: 'insert' },
      { id: 'C', text: 'append' },
      { id: 'D', text: 'addItem' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's10q15',
    question: 'Which of the following are methods of the Collection interface?',
    options: [
      { id: 'A', text: 'iterator' },
      { id: 'B', text: 'isEmpty' },
      { id: 'C', text: 'toArray' },
      { id: 'D', text: 'setText' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's10q16',
    question: 'What will happen if you compile/run the following lines of code?',
    code: `1:  Vector a = new Vector();
2:
3:  a.addElement(10);
4:
5:  System.out.println(a.elementAt(0));`,
    options: [
      { id: 'A', text: 'Prints 10.' },
      { id: 'B', text: 'Prints 11.' },
      { id: 'C', text: 'Compilation error at line 3.' },
      { id: 'D', text: 'Prints some garbage.' }
    ],
    correctAnswers: ['C']
  }
];

export default section10;
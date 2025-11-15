const onlineTest = [
  {
    id: 'ot1',
    question: 'What is the name of the Collection interface used to represent elements in a sequence (in a particular order)? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Collection' },
      { id: 'B', text: 'Set' },
      { id: 'C', text: 'List' },
      { id: 'D', text: 'Map' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'ot2',
    question: 'Which of these classes implement the Collection interface SortedMap? Select the one correct answer.',
    options: [
      { id: 'A', text: 'TreeMap' },
      { id: 'B', text: 'HashMap' },
      { id: 'C', text: 'Hashtable' },
      { id: 'D', text: 'HashSet' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'ot3',
    question: 'Which statement is true?',
    options: [
      { id: 'A', text: 'ArrayList is a sub class of Vector' },
      { id: 'B', text: 'HashTable is a sub class of Dictionary' },
      { id: 'C', text: 'LinkedList is a subclass of ArrayList' },
      { id: 'D', text: 'Vector is a subclass of Stack' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'ot4',
    question: 'What happens when the following program is compiled and run? Select the one correct answer.',
    code: `public class example
{
  int i[] = {0};
  public static void main(String args[])
  {
    int i[] = {1};
    change_i(i);
    System.out.println(i[0]);
  }
  public static void change_i(int i[])
  {
    int j[] = {2};
    i = j;
  }
}`,
    options: [
      { id: 'A', text: 'The program prints 0.' },
      { id: 'B', text: 'The program prints 2.' },
      { id: 'C', text: 'The program prints 1.' },
      { id: 'D', text: 'The program prints 4.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'ot5',
    question: 'Which all lines are part of the output when the following code is compiled and run? Select the three correct answers.',
    code: `public class test
{
  public static void main(String args[])
  {
    outer :
    for(int i = 0; i < 3; i++)
    {
      for(int j = 3; j >= 0; j--)
      {
        if(i == j) break outer;
        System.out.println(i + " " + j);
      }
    }
  }
}`,
    options: [
      { id: 'A', text: '0 0' },
      { id: 'B', text: '0 1' },
      { id: 'C', text: '0 2' },
      { id: 'D', text: '0 3' },
      { id: 'E', text: '1 0' }
    ],
    correctAnswers: ['B', 'C', 'D']
  },
  {
    id: 'ot6',
    question: 'Which of these statements is true?',
    options: [
      { id: 'A', text: 'TreeSet extends AbstractList' },
      { id: 'B', text: 'AbstractSet extends SortedSet' },
      { id: 'C', text: 'TreeMap implements SortedMap' },
      { id: 'D', text: 'HashSet extends AbstractSet' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'ot7',
    question: 'Which of the following are true about interfaces? Select the two correct answers.',
    options: [
      { id: 'A', text: 'Methods declared in interfaces are implicitly private.' },
      { id: 'B', text: 'Variables declared in interfaces are implicitly public, static, and final.' },
      { id: 'C', text: 'An interface can extend any number of interfaces.' },
      { id: 'D', text: 'The keyword implements indicate that an interface inherits from another.' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 'ot8',
    question: 'Assume that class A extends class B, which extends class C. Also all the three classes implement the method test(). How can a method in a class A invoke the test() method defined in class C (without creating a new instance of class C)? Select the one correct answer.',
    options: [
      { id: 'A', text: 'test();' },
      { id: 'B', text: 'super.test();' },
      { id: 'C', text: 'C.test();' },
      { id: 'D', text: 'It is not possible to invoke test() method defined in C from a method in A.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'ot9',
    question: 'By which class we can read object from stream?',
    options: [
      { id: 'A', text: 'Reader' },
      { id: 'B', text: 'ObjectInputStream' },
      { id: 'C', text: 'ObjectReader' },
      { id: 'D', text: 'File' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'ot10',
    question: 'By using which modifier we can prevent from overridden?',
    options: [
      { id: 'A', text: 'final' },
      { id: 'B', text: 'static' },
      { id: 'C', text: 'we cant prevent' },
      { id: 'D', text: 'by default it provides' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'ot11',
    question: 'Which are true in case of interface?',
    options: [
      { id: 'A', text: 'we can create object implementation to an interface' },
      { id: 'B', text: 'all type of modifiers are allowed to an interface' },
      { id: 'C', text: 'we instantiate an interface directly' },
      { id: 'D', text: 'we can mark interface as final' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'ot12',
    question: 'What gets written on the screen when the following program is compiled and run? Select the one right answer.',
    code: `public class test {
  public static void main(String args[]) {
    int i;
    float f = 2.3f;
    double d = 2.7;
    i = ((int)Math.ceil(f)) * ((int)Math.round(d));
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '9' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'ot13',
    question: 'Which of these statements are true? Select the two correct answers.',
    options: [
      { id: 'A', text: 'For each try block there must be at least one catch block defined.' },
      { id: 'B', text: 'A try block may be followed by any number of finally blocks.' },
      { id: 'C', text: 'A try block must be followed by at least one finally or catch block.' },
      { id: 'D', text: 'If both catch and finally blocks are defined, catch block must precede the finally block.' }
    ],
    correctAnswers: ['C', 'D']
  },
  {
    id: 'ot14',
    question: 'What is the result of compiling and running the following program?',
    code: `public class test {
  public static void main(String args[]) {
    String str1="abc";
    String str2="def";
    String str3=str1.concat(str2);
    str1.concat(str2);
    System.out.println(str1);
  }
}`,
    options: [
      { id: 'A', text: 'def' },
      { id: 'B', text: 'abc' },
      { id: 'C', text: 'abcabc' },
      { id: 'D', text: 'abcdef' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'ot15',
    question: 'What are the things we have to follow while creating annotations?',
    options: [
      { id: 'A', text: 'methods must not have any throws clauses' },
      { id: 'B', text: 'methods must not have any parameters' },
      { id: 'C', text: 'method should return any one of primitive data types' },
      { id: 'D', text: 'All the above' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'ot16',
    question: 'Why we use @Override annotation?',
    options: [
      { id: 'A', text: 'To check whether the subclass method is overrides from the superclass or not' },
      { id: 'B', text: 'To say to the compiler not to execute this override method.' },
      { id: 'C', text: 'To say to compiler that this method is deprecated' },
      { id: 'D', text: 'None of the above' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'ot17',
    question: 'When we go for thread synchronization?',
    options: [
      { id: 'A', text: 'to remove the lock on the thread' },
      { id: 'B', text: 'when there is a single thread' },
      { id: 'C', text: 'to make a thread in sleep mode' },
      { id: 'D', text: 'when we want to prevent any other multiple thread to act an same object' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'ot18',
    question: 'Why @SupressWarning Annotation is used?',
    options: [
      { id: 'A', text: 'To suppress exception issued by compiler' },
      { id: 'B', text: 'To show warnings' },
      { id: 'C', text: 'To show exceptions' },
      { id: 'D', text: 'To suppress exception issued by compiler' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'ot19',
    question: 'What happens if sleep() and wait() executes in synchronized block?',
    options: [
      { id: 'A', text: 'The object still under lock in both the cases' },
      { id: 'B', text: 'sleep() the lock is removed ,wait() still under lock' },
      { id: 'C', text: 'sleep() still under lock ,wait() the lock is removed' },
      { id: 'D', text: 'Sleep() and wait(),for both the method lock is removed' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'ot20',
    question: 'Which are true among below cases?',
    options: [
      { id: 'A', text: 'If programmer want to use several threads then he have to use StringBuffer' },
      { id: 'B', text: 'StringBuffer Class is synchronized and StringBuilder is not synchronized' },
      { id: 'C', text: 'String class is immutable, StringBuffer and StringBuilder are mutable' },
      { id: 'D', text: 'All the above' }
    ],
    correctAnswers: ['D']
  }
];

export default onlineTest;

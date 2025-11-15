const section3 = [
  {
    id: 's3q1',
    question: 'How many objects are eligible for garbage collection once execution has reached the line labeled Line A?',
    code: `String name;
String newName = "Nick";
newName = "Jason";
name = "Frieda";

String newestName = name;

name = null;
//Line A`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's3q2',
    question: 'Which of the following statements about Java\'s garbage collection are true?',
    options: [
      { id: 'A', text: 'The garbage collector can be invoked explicitly using a Runtime object.' },
      { id: 'B', text: 'The finalize method is always called before an object is garbage collected.' },
      { id: 'C', text: 'Any class that includes a finalize method should invoke its superclass\' finalize method.' },
      { id: 'D', text: 'Garbage collection behavior is very predictable.' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's3q3',
    question: 'You are concerned that your program may attempt to use more memory than is available. To avoid this situation you want to ensure that the Java Virtual Machine will run its garbage collection just before you start a complex routine. What can you do to be certain that garbage collection will run when you want?',
    options: [
      { id: 'A', text: 'You cannot be certain when garbage collection will run' },
      { id: 'B', text: 'Use the Runtime.gc() method to force garbage collection' },
      { id: 'C', text: 'Ensure that all the variables you require to be garbage collected are set to null' },
      { id: 'D', text: 'Use the System.gc() method to force garbage collection' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's3q4',
    question: 'Which of these statements are true?',
    options: [
      { id: 'A', text: 'Objects can be explicitly destroyed using the keyword delete.' },
      { id: 'B', text: 'An object will be garbage collected immediately after the last reference to the object is removed.' },
      { id: 'C', text: 'If object obj1 is accessible from object obj2 and object obj2 is accessible from obj1, then obj1 and obj2 are not eligible for garbage collection.' },
      { id: 'D', text: 'Once an object has become eligible for garbage collection, it will remain eligible until it is destroyed.' },
      { id: 'E', text: 'If an object obj1 can access an object obbj2 that is eligible for garbage collection, then obj1 is also eligible for garbage collection.' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's3q5',
    question: 'Identify the position in the following program where the object, initially referenced with arg1, becomes eligible for garbage collection.',
    code: `public class MyClass {
    public static void main(String args[]) {
        String msg;
        String pre = "This program was called with";
        String post = " as first argument.";
        String arg1 = new String((args.length > 0) ? "'" + args[0] + "'": "<no argument>");

        msg = arg1;
        arg1 = null;        //(1)
        msg = pre + msg+post;   //(2)
        pre   = null;       //(3)

        System.out.println(msg);

        msg = null;         // (4)
        post = null;            // (5)
        args = null;            // (6)
    }
}`,
    options: [
      { id: 'A', text: 'After the line labeled (1)' },
      { id: 'B', text: 'After the line labeled (2)' },
      { id: 'C', text: 'After the line labeled (3)' },
      { id: 'D', text: 'After the line labeled (4)' },
      { id: 'E', text: 'After the line labeled (5)' },
      { id: 'F', text: 'After the line labeled (6)' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's3q6',
    question: 'Which of these statements are true?',
    options: [
      { id: 'A', text: 'If an exception is thrown during execution of the finalize method of an object, then the exception is ignored and the object is destroyed.' },
      { id: 'B', text: 'All Objects have a finalize method.' },
      { id: 'C', text: 'Objects can be explicitly destroyed by explicitly calling the finalize method.' },
      { id: 'D', text: 'The finalize method can be declared with any accessibility' },
      { id: 'E', text: 'The compiler will fail to compile code that defines an overriding finalize method that does not explicitly call the overridden method finalize method inherited from the superclass.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's3q7',
    question: 'Which of these statements are true?',
    options: [
      { id: 'A', text: 'The compiler will fail to compile code that explicitly tries to call the finalize method.' },
      { id: 'B', text: 'The finalize method must be declared with protected visibility.' },
      { id: 'C', text: 'An overriding finalize method in any class can always throw checked exceptions.' },
      { id: 'D', text: 'The compiler will allow code that overloads the finalize method name.' },
      { id: 'E', text: 'The body of the finalize method can only access other objects that are eligible for garbage collection.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's3q8',
    question: 'Which statements describe guaranteed behavior of the garbage collector and finalization mechanisms?',
    options: [
      { id: 'A', text: 'Objects will not be destroyed until they have no references to them.' },
      { id: 'B', text: 'The finalize method will never be called more than once on an object.' },
      { id: 'C', text: 'An object eligible for garbage collection will eventually be destroyed by the garbage collector.' },
      { id: 'D', text: 'If object A became eligible for garbage collection before object B, then object A will be destroyed before object B' },
      { id: 'E', text: 'An object once eligible for garbage collection can never become accessible from an active part of the program.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's3q9',
    question: 'Which of the following is the correct syntax for suggesting that the JVM performs garbage collection?',
    options: [
      { id: 'A', text: 'System.free();' },
      { id: 'B', text: 'System.setGarbageCollection();' },
      { id: 'C', text: 'System.out.gc();' },
      { id: 'D', text: 'System.gc();' }
    ],
    correctAnswers: ['D']
  }
];

export default section3;
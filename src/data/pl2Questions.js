const pl2Questions = [
  {
    id: 'pl2q1',
    question: 'Which of the following are correct?',
    options: [
      { id: 'A', text: 'The native keyword indicates that the method is implemented in another language like C/C++' },
      { id: 'B', text: 'The only statements that can appear before an import statement in a Java file are comments.' },
      { id: 'C', text: 'The method definitions inside interfaces are public and abstract. They cannot be private or protected.' },
      { id: 'D', text: 'A class constructor may have public or protected keyword before them, nothing else.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 'pl2q2',
    question: 'Which of the following are valid definitions of an application\'s main() method?',
    options: [
      { id: 'A', text: 'public static void main();' },
      { id: 'B', text: 'public static void main ( String args );' },
      { id: 'C', text: 'public static void main ( String args[ ] );' },
      { id: 'D', text: 'public static void main ( Graphics g );' },
      { id: 'E', text: 'public static boolean main ( String args [ ] );' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'pl2q3',
    question: 'Abstract class cannot have final methods. True or false?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'pl2q4',
    question: 'Name the keyword that makes a variable belong to a class, rather than being defined for each instance of the class.',
    options: [
      { id: 'A', text: 'static' },
      { id: 'B', text: 'final' },
      { id: 'C', text: 'abstract' },
      { id: 'D', text: 'native' },
      { id: 'E', text: 'volatile' },
      { id: 'F', text: 'transient' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'pl2q5',
    question: 'Method Overriding is an example of',
    options: [
      { id: 'A', text: 'Static Binding.' },
      { id: 'B', text: 'Dynamic Binding.' },
      { id: 'C', text: 'Both of the above.' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'pl2q6',
    question: 'Can we have multiple classes in same java file?',
    options: [
      { id: 'A', text: 'true' },
      { id: 'B', text: 'false' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'pl2q7',
    question: 'Assume that class A extends class B, which extends class C. Also all three classes implement the method test(). How can a method in class A invoke the test() method defined in class C (without creating a new instance of class C)?',
    options: [
      { id: 'A', text: 'test();' },
      { id: 'B', text: 'super.test();' },
      { id: 'C', text: 'super.super.test();' },
      { id: 'D', text: '::test();' },
      { id: 'E', text: 'C.test();' },
      { id: 'F', text: 'It is not possible to invoke test() method defined in C from a method in A.' }
    ],
    correctAnswers: ['F']
  },
  {
    id: 'pl2q8',
    question: 'Given the following code, what will be printed?',
    code: `void func( ) {
String str = null;
try {
if( str.length( ) == 0 ) {
System.out.print("The");
}
System.out.print(" Cow");
} catch (Exception e) {
System.out.print(" and");
System.exit(0);
} finally {
System.out.print(" Chicken");
}
System.out.println(" show");
}`,
    options: [
      { id: 'A', text: 'The' },
      { id: 'B', text: 'Cow' },
      { id: 'C', text: 'and' },
      { id: 'D', text: 'Chicken' },
      { id: 'E', text: 'show' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'pl2q9',
    question: 'When finally block gets executed?',
    options: [
      { id: 'A', text: 'Always when try block get executed, no matter exception occurred or not.' },
      { id: 'B', text: 'Always when a method is executed, no matter exception occurred or not.' },
      { id: 'C', text: 'Always when a try block get executed, if exception do not occur.' },
      { id: 'D', text: 'Only when exception occurs in try block code.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'pl2q10',
    question: 'Consider the code below. What all printed to standard output if fragile() throws an IllegalArgumentException?',
    code: `void myMethod( ) 
{
try 
{
fragile( );
} 
catch ( NullPointerException npex) 
{
System.out.println( "NullPointerException thrown");
} 
catch ( Exception ex) 
{
System.out.println( "Exception thrown ");
}
finally 
{
System.out.println( "Done with exceptions ");
}
System.out.println( "myMethod is done");
}`,
    options: [
      { id: 'A', text: '"NullPointerException thrown"' },
      { id: 'B', text: '"Exception thrown"' },
      { id: 'C', text: '"Done with exceptions"' },
      { id: 'D', text: '"myMethod is done"' },
      { id: 'E', text: 'Nothing is printed' }
    ],
    correctAnswers: ['B', 'C', 'D']
  },
  {
    id: 'pl2q11',
    question: 'Which of the following are Java keywords?',
    options: [
      { id: 'A', text: 'array' },
      { id: 'B', text: 'boolean' },
      { id: 'C', text: 'integer' },
      { id: 'D', text: 'protect' },
      { id: 'E', text: 'super' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 'pl2q12',
    question: 'What of the following is the default value of an instance variable?',
    options: [
      { id: 'A', text: 'null' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'Depends upon the type of variable.' },
      { id: 'D', text: 'Not assigned.' }
    ],
    correctAnswers: ['C']
  }
]

export default pl2Questions

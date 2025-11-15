const sampleQuestions = [
  {
    id: 's1q1',
    question: 'If you want subclasses to access, but not to override a superclass member method, what keyword should precede the name of the superclass method?',
    options: [
      { id: 'A', text: 'final' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q2',
    question: 'What will happen when you compile and run the following code?',
    code: `public class MyClass{ 
    static int i; 
    public static void main(String argv[]){ 
        System.out.println(i); 
    } 
}`,
    options: [
      { id: 'A', text: 'Error Variable i may not have been initialized' },
      { id: 'B', text: 'null' },
      { id: 'C', text: '1' },
      { id: 'D', text: '0' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q3',
    question: 'What will be the result of attempting to compile and run the following code?',
    code: `abstract class MineBase { 
    abstract void amethod(); 
    static int i; 
}
public class Mine extends MineBase { 
    public static void main(String argv[]){ 
        int[] ar=new int[5]; 
        for(i=0;i < ar.length;i++) 
            System.out.println(ar[i]); 
    } 
}`,
    options: [
      { id: 'A', text: 'a sequence of 5 0\'s will be printed' },
      { id: 'B', text: 'Error: ar is used before it is initialized' },
      { id: 'C', text: 'Error Mine must be declared abstract' },
      { id: 'D', text: 'IndexOutOfBoundes Error' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q4',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `class Base{
public final void amethod(){
    System.out.println("amethod");
    }
}
public class Fin extends Base{
public static void main(String argv[]){
    Base b = new Base();
    b.amethod();
    }
}`,
    options: [
      { id: 'A', text: 'Compile time error indicating that a class with any final methods must be declared final itself' },
      { id: 'B', text: 'Compile time error indicating that you cannot inherit from a class with final methods' },
      { id: 'C', text: 'Run time error indicating that Base is not defined as final' },
      { id: 'D', text: 'Success in compilation and output of "amethod" at run time.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q5',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `public class Mod{
public static void main(String argv[]){
    }
    public static native void amethod();
}`,
    options: [
      { id: 'A', text: 'Error at compilation: native method cannot be static' },
      { id: 'B', text: 'Error at compilation native method must return value' },
      { id: 'C', text: 'Compilation but error at run time unless you have made code containing native amethod available' },
      { id: 'D', text: 'Compilation and execution without error' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q6',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'An inner class may be defined as static' },
      { id: 'B', text: 'An inner class may NOT be define as private' },
      { id: 'C', text: 'An anonymous class may have only one constructor' },
      { id: 'D', text: 'An inner class may extend another class' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's1q7',
    question: 'What exception might a wait() method throw?',
    options: [
      { id: 'A', text: 'InterruptedException' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q8',
    question: 'For the code: Which of the following are printed to standard output?',
    code: `m = 0;
while( m++ < 2 )
   System.out.println( m );`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: 'Nothing and an exception is thrown' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q9',
    question: 'Consider the code fragment below: Which of the following would be printed to standard output?',
    code: `outer: for( int i = 1; i <3; i++ )
   {  inner: for( j = 1; j < 3; j++ )
      {  if( j==2 )
            continue outer;
            System.out.println( "i = " +i ", j = " + j );
      }
   }`,
    options: [
      { id: 'A', text: 'i = 1, j = 1' },
      { id: 'B', text: 'i = 1, j = 2' },
      { id: 'C', text: 'i = 1, j = 3' },
      { id: 'D', text: 'i = 2, j = 1' },
      { id: 'E', text: 'i = 2, j = 2' },
      { id: 'F', text: 'i = 2, j = 3' },
      { id: 'G', text: 'i = 3, j = 1' },
      { id: 'H', text: 'i = 3, j = 2' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's1q10',
    question: 'What will be output by the following code?',
    code: `public class MyFor{
public static void main(String argv[]){ 
    int i; 
    int j; 
    outer: 
    for (i=1;i <3;i++) 
        inner: 
         for(j=1; j<3; j++) { 
                    if (j==2) 
                    continue outer; 
                    System.out.println("Value for i=" + i + " Value for j=" +j); 
                    } 
        } 
}`,
    options: [
      { id: 'A', text: 'Value for i=1 value for j=1' },
      { id: 'B', text: 'Value for i=2 value for j=1' },
      { id: 'C', text: 'Value for i=2 value for j=2' },
      { id: 'D', text: 'Value for i=3 value for j=1' }
    ],
    correctAnswers: ['A', 'B']
  },
  {
    id: 's1q11',
    question: 'What code placed after the comment //For loop would populate the elements of the array ia[] with values of the variable i?',
    code: `public class Lin{
public static void main(String argv[]){
    Lin l = new Lin();
    l.amethod(); 
    }
    public void amethod(){
    int ia[] = new int[4];
                //Start For loop        
                {
       ia[i]=i;
       System.out.println(ia[i]);
       }
    }
}`,
    options: [
      { id: 'A', text: 'for(int i=0; i < ia.length() -1; i++)' },
      { id: 'B', text: 'for (int i=0; i< ia.length(); i++)' },
      { id: 'C', text: 'for(int i=1; i < 4; i++)' },
      { id: 'D', text: 'for(int i=0; i< ia.length;i++)' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q12',
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
    id: 's1q13',
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
    id: 's1q14',
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
    id: 's1q15',
    question: 'Identify the position in the following program where the object, initially referenced with arg1, eligible for garbage collection.',
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
    id: 's1q16',
    question: 'Which of the following is the correct syntax for suggesting that the JVM performs garbage collection?',
    options: [
      { id: 'A', text: 'System.free();' },
      { id: 'B', text: 'System.setGarbageCollection();' },
      { id: 'C', text: 'System.out.gc();' },
      { id: 'D', text: 'System.gc();' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q17',
    question: 'Which of the following statements assigns "Hello Java" to the String variable s?',
    options: [
      { id: 'A', text: 'String s = "Hello Java";' },
      { id: 'B', text: 'String s[] = "Hello Java";' },
      { id: 'C', text: 'new String s = "Hello Java";' },
      { id: 'D', text: 'String s = new String("Hello Java");' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's1q18',
    question: 'An integer, x has a binary value (using 1 byte) of 10011100. What is the binary value of z after these statements?',
    code: `int y = 1 << 7;
int z = x & y;`,
    options: [
      { id: 'A', text: '1000 0001' },
      { id: 'B', text: '1000 0000' },
      { id: 'C', text: '0000 0001' },
      { id: 'D', text: '1001 1101' },
      { id: 'E', text: '1001 1100' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q19',
    question: 'Which of the following are legal identifiers?',
    options: [
      { id: 'A', text: '2variable' },
      { id: 'B', text: 'variable2' },
      { id: 'C', text: '_whatavariable' },
      { id: 'D', text: '_3_' },
      { id: 'E', text: '$anothervar' },
      { id: 'F', text: '#myvar' }
    ],
    correctAnswers: ['B', 'C', 'D', 'E']
  },
  {
    id: 's1q20',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `public class MyMain{
public static void main(String argv){
    System.out.println("Hello cruel world");
    }
}`,
    options: [
      { id: 'A', text: 'The compiler will complain that main is a reserved word and cannot be used for a class' },
      { id: 'B', text: 'The code will compile and when run will print out "Hello cruel world"' },
      { id: 'C', text: 'The code will compile but will complain at run time that no constructor is defined' },
      { id: 'D', text: 'The code will compile but will complain at run time that main is not correctly defined' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q21',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class MyAr{
public static void main(String argv[]){ 
    int[] i = new int[5];
    System.out.println(i[5]);
    }
}`,
    options: [
      { id: 'A', text: 'An error at compile time' },
      { id: 'B', text: 'An error at run time' },
      { id: 'C', text: 'The value 0 will be output' },
      { id: 'D', text: 'The string "null" will be output' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q22',
    question: 'What will be the result when you attempt to compile and run the following code?',
    code: `class Base {}

class Sub extends Base {}

class Sub2 extends Base {}

public class CEx{
    public static void main(String argv[]){
        Base b=new Base();
        Sub s=(Sub) b;
    }
}`,
    options: [
      { id: 'A', text: 'Compile and run without error' },
      { id: 'B', text: 'Compile time Exception' },
      { id: 'C', text: 'Runtime Exception' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q23',
    question: 'What will be output by the following code?',
    code: `public class MyFor{
    public static void main(String argv[]){
        int i;
        int j;
        outer:
        for (i=1;i <3;i++)
            inner:
            for(j=1; j<3; j++) {
                if (j==2)
                    continue outer;
                System.out.println("Value for i=" + i + " Value for j=" +j);
            }
    }
}`,
    options: [
      { id: 'A', text: 'Value for i=1 Value for j=1' },
      { id: 'B', text: 'Value for i=2 Value for j=1' },
      { id: 'C', text: 'Value for i=2 Value for j=2' },
      { id: 'D', text: 'Value for i=3 Value for j=1' }
    ],
    correctAnswers: ['A', 'B']
  },
  {
    id: 's1q24',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'The String class is implemented as a char array, elements are addressed using the stringname[] convention' },
      { id: 'B', text: 'Strings are a primitive type in Java that overloads the + operator for concatenation' },
      { id: 'C', text: 'Strings are a primitive type in Java and the StringBuffer is used as the matching wrapper type' },
      { id: 'D', text: 'The size of a string can be retrieved using the length property.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q25',
    question: 'What will be output by the following code?',
    code: `public class Birdie{
    public static void main(String argv[]){
        int iBase=0;
        int iMask=10;
        iBase|=iMask;
        System.out.println(iBase);
    }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '10' },
      { id: 'C', text: '2' },
      { id: 'D', text: '1' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q26',
    question: 'What will be displayed when you attempt to compile and run the following code?',
    code: `class Base{
    abstract public void myfunc();
    public void another(){
        System.out.println("Another method");
    }
}

public class Abs extends Base{
    public static void main(String argv[]){
        Abs a = new Abs();
        a.amethod();
    }
    public void myfunc(){
        System.out.println("My func");
    }
    public void amethod(){
        myfunc();
    }
}`,
    options: [
      { id: 'A', text: 'The code will not compile because the Base class is not declared as abstract' },
      { id: 'B', text: 'The code will not compile because the Base class has an abstract method which means the class must also be abstract' },
      { id: 'C', text: 'The code will compile and run, printing out the words "My func"' },
      { id: 'D', text: 'The code will compile but will complain at run time that the Base class has non abstract methods' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q27',
    question: 'What will the following code print out?',
    code: `public class Upton{
    public static void main(String argv[]){
        Upton u = new Upton();
        u.amethod();
    }

    public void amethod(){
        short s1=1;
        s1=(short) s1 + 1;
        System.out.println(s1);
    }
}`,
    options: [
      { id: 'A', text: 'Will not compile because of the cast' },
      { id: 'B', text: 'Compile and print out 2' },
      { id: 'C', text: 'Compile and print out 1' },
      { id: 'D', text: 'Compile time error because of loss of precision' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q28',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'Constructors are synchronized' },
      { id: 'B', text: 'Constructors cannot be synchronized' },
      { id: 'C', text: 'A constructor can only be called from within a constructor' },
      { id: 'D', text: 'A constructor name must match the name of its class' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's1q29',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `void mymethod(int i, String s){
    switch (s){
        default:
            System.out.println("Default");
        case "one":
            System.out.println("One");
        case "two":
            System.out.println("two");
    }
}`,
    options: [
      { id: 'A', text: 'Compilation and output of "Default" followed by "one" and then "two"' },
      { id: 'B', text: 'Compilation and output of  "Default"' },
      { id: 'C', text: 'Compilation and no output at runtime' },
      { id: 'D', text: 'Compile time error, you cannot use a string in a switch statement' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q30',
    question: 'What will happen when you compile and run the following application?',
    code: `class Base{
    public final void amethod(){
        System.out.println("amethod");
    }
}

public class Fin extends Base{
    public static void main(String argv[]){
        Base b = new Base();
        b.amethod();
    }
}`,
    options: [
      { id: 'A', text: 'Compile time error indicating that a class with any final methods must be declared final itself' },
      { id: 'B', text: 'Compile time error indicating that you cannot inherit from a class with final methods' },
      { id: 'C', text: 'Compilation and output at run time of "amethod"' },
      { id: 'D', text: 'Compilation and no output at runtime' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q31',
    question: 'When does execution of a thread end?',
    options: [
      { id: 'A', text: 'when the sleep method is called' },
      { id: 'B', text: 'when the wait method is called' },
      { id: 'C', text: 'when the stop method is called' },
      { id: 'D', text: 'when the run method ends' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q32',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `class Base {
    abstract public void myfunc();
    public void another(){
        System.out.println("Another method");
    }
}

public class Abs extends Base{
    public static void main(String argv[]){
        Abs a = new Abs();
        a.amethod();
    }
    public void myfunc(){
        System.out.println("My func");
    }
    public void amethod(){
        myfunc();
    }
}`,
    options: [
      { id: 'A', text: 'The code will not compile because the Base class has no constructors' },
      { id: 'B', text: 'The code will not compile because the Base class is not declared as abstract' },
      { id: 'C', text: 'The code will compile and run, printing out the words "My func"' },
      { id: 'D', text: 'The code will compile but will complain at run time that the Base class has non abstract methods' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q33',
    question: 'Which methods can be legally applied to a string object?',
    options: [
      { id: 'A', text: 'equals(String)' },
      { id: 'B', text: 'equals(Object)' },
      { id: 'C', text: '+=  ' },
      { id: 'D', text: 'toUpperCase' }
    ],
    correctAnswers: ['A', 'B', 'D']
  },
  {
    id: 's1q34',
    question: 'Which of the following are methods of the ThreadDeath class?',
    options: [
      { id: 'A', text: 'none' },
      { id: 'B', text: 'stop()' },
      { id: 'C', text: 'Killed()' },
      { id: 'D', text: 'dead()' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q35',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'AWT uses native peer components and Swing uses lightweight 100% java components' },
      { id: 'B', text: 'AWT uses lightweight 100% java components and Swing uses native peer components' },
      { id: 'C', text: 'AWT can run on any platform that supports Java' },
      { id: 'D', text: 'Swing can run on any platform that supports Java' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's1q36',
    question: 'In which package does the Runnable interface reside?',
    options: [
      { id: 'A', text: 'java.lang' },
      { id: 'B', text: 'java.thread' },
      { id: 'C', text: 'java.util' },
      { id: 'D', text: 'java.awt' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q37',
    question: 'Which of the following are valid statements?',
    options: [
      { id: 'A', text: 'public class MyCalc extends Math' },
      { id: 'B', text: 'Math.max(s);' },
      { id: 'C', text: 'Math.round(9.99,1);' },
      { id: 'D', text: 'Math.mod(4,10);' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q38',
    question: 'Which of the following can be found in the java.awt package?',
    options: [
      { id: 'A', text: 'button' },
      { id: 'B', text: 'list' },
      { id: 'C', text: 'window' },
      { id: 'D', text: 'textarea' },
      { id: 'E', text: 'container that contains this container' }
    ],
    correctAnswers: ['C', 'E']
  },
  {
    id: 's1q39',
    question: 'Of the following AWT classes, which one(s) are responsible for implementing the components layout?',
    options: [
      { id: 'A', text: 'LayoutManager' },
      { id: 'B', text: 'GridBagLayout' },
      { id: 'C', text: 'ActionListener' },
      { id: 'D', text: 'WindowAdapter' },
      { id: 'E', text: 'FlowLayout' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's1q40',
    question: 'A component that should resize vertically but not horizontally should be placed in a:',
    options: [
      { id: 'A', text: 'BorderLayout in the North or South location' },
      { id: 'B', text: 'FlowLayout as the first component' },
      { id: 'C', text: 'BorderLayout in the East or West location' },
      { id: 'D', text: 'BorderLayout in the Center location' },
      { id: 'E', text: 'GridLayout' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q41',
    question: 'You have created an applet that draws lines. You have overriden the paint operation and used the graphics drawLine method, and increase one of its parameters to multiple lines across the screen. When you first test the applet you find that the new lines are redrawn, but the old lines are erased. How can you modify your code to allow the old lines to stay on the screen instead of being cleared?',
    options: [
      { id: 'A', text: 'Override repaint thus: public void repaint(Graphics g){ paint(g); }' },
      { id: 'B', text: 'Override update thus: public void update(Graphics g) { paint(g); }' },
      { id: 'C', text: 'turn off clearing with the method setClear();' },
      { id: 'D', text: 'Remove the drawing from the paint Method and place in the calling code' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q42',
    question: 'What best describes the appearance of an application with the following code?',
    code: `import java.awt.*;

public class FlowAp extends Frame{

public static void main(String argv[]){
    FlowAp fa=new FlowAp();
    fa.setSize(400,300);
    fa.setVisible(true);
}
FlowAp(){
    add(new Button("One"));
    add(new Button("Two"));
    add(new Button("Three"));
    add(new Button("Four"));
    }//End of constructor

}//End of Application`,
    options: [
      { id: 'A', text: 'A Frame with buttons marked One to Four placed on each edge.' },
      { id: 'B', text: 'A Frame with buttons marked One to four running from the top to bottom' },
      { id: 'C', text: 'A Frame with one large button marked Four in the Centre' },
      { id: 'D', text: 'An Error at run time indicating you have not set a LayoutManager' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q43',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `//Demonstration of event handling
import java.awt.event.*;
import java.awt.*;

public class MyWc extends Frame implements WindowListener{
public static void main(String argv[]){
    MyWc mwc = new MyWc();
    }
    public void windowClosing(WindowEvent we){
        System.exit(0);
        }//End of windowClosing

  public void  MyWc(){
    setSize(300,300);
    setVisible(true);
    }
}//End of class`,
    options: [
      { id: 'A', text: 'Error at compile time' },
      { id: 'B', text: 'Visible Frame created that that can be closed' },
      { id: 'C', text: 'Compilation but no output at run time' },
      { id: 'D', text: 'Error at compile time because of comment before import statements' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q44',
    question: 'Which of the following will output -4.0?',
    options: [
      { id: 'A', text: 'System.out.println(Math.floor(-4.7));' },
      { id: 'B', text: 'System.out.println(Math.round(-4.7));' },
      { id: 'C', text: 'System.out.println(Math.ceil(-4.7));' },
      { id: 'D', text: 'System.out.println(Math.Min(-4.7));' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q45',
    question: 'If you run the code below, what gets printed out?',
    code: `String s=new String("Bicycle"); 
int iBegin=1; 
char iEnd=3; 
System.out.println(s.substring(iBegin,iEnd));`,
    options: [
      { id: 'A', text: 'Bic' },
      { id: 'B', text: 'ic' },
      { id: 'C', text: 'icy' },
      { id: 'D', text: 'error: no method matching substring(int,char)' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q46',
    question: 'If you wanted to find out where the position of the letter v (ie return 2) in the string s containing "Java", which of the following could you use?',
    options: [
      { id: 'A', text: 'mid(2,s);' },
      { id: 'B', text: 'charAt(2);' },
      { id: 'C', text: 's.indexOf(\'v\');' },
      { id: 'D', text: 'indexOf(s,\'v\');' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q47',
    question: 'What will be the result when you attempt to compile and run the following code?',
    code: `public class Conv{
    public static void main(String argv[]){ 
        Conv c=new Conv(); 
        String s=new String("ello"); 
        c.amethod(s); 
    } 
public void amethod(String s){ 
    char c='H'; 
    c+=s; 
    System.out.println(c); 
    } 
}`,
    options: [
      { id: 'A', text: 'Compilation and output the string "Hello"' },
      { id: 'B', text: 'Compilation and output the string "ello"' },
      { id: 'C', text: 'Compilation and output the string elloH' },
      { id: 'D', text: 'Compile time error' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q48',
    question: 'What will be output by the following line?',
    code: `System.out.println(Math.floor(-2.1));`,
    options: [
      { id: 'A', text: '-2' },
      { id: 'B', text: '2.0' },
      { id: 'C', text: '-3' },
      { id: 'D', text: '-3.0' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q49',
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
    id: 's1q50',
    question: 'Which of these statements concerning the use of collection operations are true?',
    options: [
      { id: 'A', text: 'Some operations may throw an UnsupportedOperationException.' },
      { id: 'B', text: 'Methods using some operations must either catch UnsupportedOperationException or declare that they throw such exceptions.' },
      { id: 'C', text: 'Collection classes implementing List can have duplicate elements.' },
      { id: 'D', text: 'ArrayList can only accomodate a fixed number of elements.' },
      { id: 'E', text: 'The Collection interface contains a method named get.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q51',
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
    id: 's1q52',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'At the root of the collection hierarchy is a class called Collection' },
      { id: 'B', text: 'The collection interface contains a method called enumerator' },
      { id: 'C', text: 'The interator method returns an instance of the Vector class' },
      { id: 'D', text: 'The set interface is designed for unique elements' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q53',
    question: 'What will happen if you compile/run the folowing lines of code?',
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
  },
  {
    id: 's1q54',
    question: 'A directory can be created using a method from the class(es):',
    options: [
      { id: 'A', text: 'File' },
      { id: 'B', text: 'DataOutput' },
      { id: 'C', text: 'Directory' },
      { id: 'D', text: 'FileDescriptor' },
      { id: 'E', text: 'FileOutputStream' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q55',
    question: 'Given the following code, what would be most likely for the body of the ioCall method?',
    code: `import java.io.*;
public class Th{
    public static void main(String argv[]){
    Th t = new Th();
    t.amethod();
    }
    public void amethod(){
        try{
        ioCall();
        }catch(IOException ioe){}
    }
    
}`,
    options: [
      { id: 'A', text: 'public void ioCall ()throws IOException{ DataInputStream din = new DataInputStream(System.in); din.readChar(); }' },
      { id: 'B', text: 'public void ioCall ()throw IOException{ DataInputStream din = new DataInputStream(System.in); din.readChar(); }' },
      { id: 'C', text: 'public void ioCall (){ DataInputStream din = new DataInputStream(System.in); din.readChar(); }' },
      { id: 'D', text: 'public void ioCall throws IOException(){ DataInputStream din = new DataInputStream(System.in); din.readChar(); }' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q56',
    question: 'Which of the following can you perform using the File class?',
    options: [
      { id: 'A', text: 'Change the current directory' },
      { id: 'B', text: 'Return the name of the parent directory' },
      { id: 'C', text: 'Delete a file' },
      { id: 'D', text: 'Find if a file contains text or binary information' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q57',
    question: 'You have these files in the same directory. What will happen when you attempt to compile and run Class1.java if you have not already compiled Base.java?',
    code: `//Base.java
package Base;
class Base{
    protected void amethod(){
        System.out.println("amethod");
    }//End of amethod
}//End of class base
package Class1;
//Class1.java
public class Class1 extends Base{

public static void main(String argv[]){
            Base b = new Base();
            b.amethod();
           }//End of main
}//End of Class1`,
    options: [
      { id: 'A', text: 'Compile Error: Methods in Base not found' },
      { id: 'B', text: 'Compile Error: Unable to access protected method in base class' },
      { id: 'C', text: 'Compilation followed by the output "amethod"' },
      { id: 'D', text: 'Compile error: Superclass Class1.Base of class Class1.Class1 not found' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q58',
    question: 'Which of the following will compile without error?',
    options: [
      { id: 'A', text: 'File f = new File("/","autoexec.bat");' },
      { id: 'B', text: 'DataInputStream d = new DataInputStream(System.in);' },
      { id: 'C', text: 'OutputStreamWriter o = new OutputStreamWriter(System.out);' },
      { id: 'D', text: 'RandomAccessFile r = new RandomAccessFile("OutFile");' }
    ],
    correctAnswers: ['A', 'B', 'C']
  }
]

export default sampleQuestions

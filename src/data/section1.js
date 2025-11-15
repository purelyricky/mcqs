const section1 = [
  {
    id: 's1q1',
    question: 'Which of the following are valid definitions of an application\'s main() method?',
    options: [
      { id: 'A', text: 'public static void main();' },
      { id: 'B', text: 'public static void main( String args );' },
      { id: 'C', text: 'public static void main( String args[] );' },
      { id: 'D', text: 'public static void main( Graphics g );' },
      { id: 'E', text: 'public static boolean main( String args[] );' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q2',
    question: 'Which statement below, when inserted as the body of the for loop, would print the number of values in each row?',
    code: `arr[0] = new int[4];
arr[1] = new int[3];
arr[2] = new int[2];
arr[3] = new int[1];
for( int n = 0; n < 4; n++ )
    System.out.println( /* what goes here? */ );`,
    options: [
      { id: 'A', text: 'arr[n].length();' },
      { id: 'B', text: 'arr.size;' },
      { id: 'C', text: 'arr.size -1;' },
      { id: 'D', text: 'arr[n][size];' },
      { id: 'E', text: 'arr[n].length;' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q3',
    question: 'Which of the following are correct methods for initializing the array "dayhigh" with 7 values?',
    options: [
      { id: 'A', text: 'int dayhigh = { 24, 23, 24, 25, 25, 23, 21 };' },
      { id: 'B', text: 'int dayhigh[] = { 24, 23, 24, 25, 25, 23, 21 };' },
      { id: 'C', text: 'int[] dayhigh = { 24, 23, 24, 25, 25, 23, 21 };' },
      { id: 'D', text: 'int dayhigh [] = new int[24, 23, 24, 25, 25, 23, 21];' },
      { id: 'E', text: 'int dayhigh = new[24, 23, 24, 25, 25, 23, 21];' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q4',
    question: 'If you want subclasses to access, but not to override a superclass member method, what keyword should precede the name of the superclass method?',
    options: [
      { id: 'A', text: 'final' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q5',
    question: 'If you want a member variable to not be accessible outside the current class at all, what keyword should precede the name of the variable when declaring it?',
    options: [
      { id: 'A', text: 'private' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q6',
    question: 'What will happen if you try to compile and run the following code?',
    code: `public class MyClass { 
    public static void main(String arguments[]) { 
        amethod(arguments); 
    } 
    public void amethod(String[] arguments) { 
        System.out.println(arguments); 
        System.out.println(arguments[1]); 
    } 
}`,
    options: [
      { id: 'A', text: 'error Can\'t make static reference to void amethod.' },
      { id: 'B', text: 'error method main not correct' },
      { id: 'C', text: 'error array must include parameter' },
      { id: 'D', text: 'amethod must be declared with String' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q7',
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
    id: 's1q8',
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
    id: 's1q9',
    question: 'Which of the following methods can be legally inserted in place of the comment //Method Here?',
    code: `class Base{ 
    public void amethod(int i) {  }
} 
public class Scope extends Base{
    public static void main(String argv[]){
    } 
    //Method Here
}`,
    options: [
      { id: 'A', text: 'void amethod(int i) throws Exception {}' },
      { id: 'B', text: 'void amethod(long i)throws Exception {}' },
      { id: 'C', text: 'void amethod(long i){}' },
      { id: 'D', text: 'public void amethod(int i) throws Exception {}' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q10',
    question: 'What modifiers would be legal at XX in the following code?',
    code: `public class MyClass1 {
    public static void main(String argv[]){ } 
    /*Modifier at XX */ class MyInner {}
}`,
    options: [
      { id: 'A', text: 'public' },
      { id: 'B', text: 'private' },
      { id: 'C', text: 'static' },
      { id: 'D', text: 'friend' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's1q11',
    question: 'What will happen when you compile and run the following code?',
    code: `public class Scope{
    private int i;
    public static void main(String argv[]){
        Scope s = new Scope();
        s.amethod();
    }//End of main
    public static void amethod(){
        System.out.println(i);
    }//end of amethod
}//End of class`,
    options: [
      { id: 'A', text: 'A value of 0 will be printed out' },
      { id: 'B', text: 'Nothing will be printed out' },
      { id: 'C', text: 'A compile time error' },
      { id: 'D', text: 'A compile time error complaining of the scope of the variable i' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q12',
    question: 'What will be the result of attempting to compile and run the following code?',
    code: `public class MyClass {
    public static void main(String args[]) {
        Outer objRef = new Outer();
        System.out.println(objRef.createInner().getSecret());
    }
}

class Outer {
    private int secret;
    Outer() { secret = 123; }

    class Inner {
        int getSecret() { return secret; }
    }

    Inner createInner() { return new Inner(); }
}`,
    options: [
      { id: 'A', text: 'The code will fail to compile, since the class Inner cannot be declared within the class Outer.' },
      { id: 'B', text: 'The code will fail to compile, since the method createInner() cannot be allowed to pass objects of the inner class Inner to methods outside of the class Outer.' },
      { id: 'C', text: 'The code will fail to compile, since the secret variable is not accessible from the method getSecret().' },
      { id: 'D', text: 'The code will fail to compile, since the method getSecret() is not visible from the main() method in the class MyClass.' },
      { id: 'E', text: 'The code will compile without error and will print 123 when run.' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q13',
    question: 'Which of these statements concerning nested classes are true?',
    options: [
      { id: 'A', text: 'An instance of a top-level class has an inherent outside instance.' },
      { id: 'B', text: 'A top-level nested class can contain non-static member variables.' },
      { id: 'C', text: 'A top-level nested interface can contain non-static member variables.' },
      { id: 'D', text: 'A top-level nested interface has an inherent outer instance.' },
      { id: 'E', text: 'For each instance of the outer class, there can exist many instances of a non-static inner class.' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's1q14',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'Non-static inner classes must have either default or public accessibility.' },
      { id: 'B', text: 'All nested classes can contain other top-level nested classes.' },
      { id: 'C', text: 'Methods in all nested classes can be declared static.' },
      { id: 'D', text: 'All nested classes can be declared static.' },
      { id: 'E', text: 'Top-level nested classes can contain non-static methods.' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q15',
    question: 'Which of the following lines will compile without warning or error?',
    options: [
      { id: 'A', text: 'float f=1.3;' },
      { id: 'B', text: 'char c="a";' },
      { id: 'C', text: 'byte b=257;' },
      { id: 'D', text: 'boolean b=null;' },
      { id: 'E', text: 'int i=10;' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q16',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `abstract class Base{
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
      { id: 'A', text: 'The code will compile and run, printing out the words "My Func"' },
      { id: 'B', text: 'The compiler will complain that the Base class has non abstract methods' },
      { id: 'C', text: 'The code will compile but complain at run time that the Base class has non abstract methods' },
      { id: 'D', text: 'The compiler will complain that the method myfunc in the base class has no body, nobody at all to looove it' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q17',
    question: 'What will happen when you attempt to compile and run this code?',
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
      { id: 'A', text: 'The code will compile and run, printing out the words "My Func"' },
      { id: 'B', text: 'The compiler will complain that the Base class is not declared as abstract.' },
      { id: 'C', text: 'The code will compile but complain at run time that the Base class has non abstract methods' },
      { id: 'D', text: 'The compiler will complain that the method myfunc in the base class has no body, nobody at all to looove it' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q18',
    question: 'Why might you define a method as native?',
    options: [
      { id: 'A', text: 'To get to access hardware that Java does not know about' },
      { id: 'B', text: 'To define a new data type such as an unsigned integer' },
      { id: 'C', text: 'To write optimised code for performance in a language such as C/C++' },
      { id: 'D', text: 'To overcome the limitation of the private scope of a method' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q19',
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
    id: 's1q20',
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
    id: 's1q21',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `private class Base{}
public class Vis{
    transient int iVal;
    public static void main(String elephant[]){
    }
}`,
    options: [
      { id: 'A', text: 'Compile time error: Base cannot be private' },
      { id: 'B', text: 'Compile time error indicating that an integer cannot be transient' },
      { id: 'C', text: 'Compile time error transient not a data type' },
      { id: 'D', text: 'Compile time error malformed main method' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q22',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class Hope{
    public static void main(String argv[]){
        Hope h = new Hope();
    }
    protected Hope(){
        for(int i =0; i <10; i ++){
            System.out.println(i);
        }
    }
}`,
    options: [
      { id: 'A', text: 'Compilation error: Constructors cannot be declared protected' },
      { id: 'B', text: 'Run time error: Constructors cannot be declared protected' },
      { id: 'C', text: 'Compilation and running with output 0 to 10' },
      { id: 'D', text: 'Compilation and running with output 0 to 9' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q23',
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
    id: 's1q24',
    question: 'What is the output of the following code?',
    code: `public class Q8
{
    int i = 20;
    static 
    {
        int i = 10;
    }
    public static void main(String[] args)
    {
        Q8 a = new Q8();
        System.out.println(a.i);
    }
}`,
    options: [
      { id: 'A', text: 'Compilation error, variable "i" declared twice.' },
      { id: 'B', text: 'Compilation error, static initializers for initialization purpose only.' },
      { id: 'C', text: 'Prints 10.' },
      { id: 'D', text: 'Prints 20.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q25',
    question: 'What will happen if you compile/run the following code?',
    code: `public class Q11
{
    static String str1 = "main method with String[] args";
    static String str2 = "main method with int[] args";

    public static void main(String[] args)
    {
        System.out.println(str1);
    }
    
    public static void main(int[] args)
    {
        System.out.println(str2);
    }        
}`,
    options: [
      { id: 'A', text: 'Duplicate method main(), compilation error at line 6.' },
      { id: 'B', text: 'Duplicate method main(), compilation error at line 11.' },
      { id: 'C', text: 'Prints "main method with main String[] args".' },
      { id: 'D', text: 'Prints "main method with main int[] args".' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q26',
    question: 'What is the output of the following code?',
    code: `class Test
{
    Test(int i)
    {
        System.out.println("Test(" +i +")");
    }
}

public class Q12
{
    static Test t1 = new Test(1);
    Test t2 = new Test(2);
    static Test t3 = new Test(3);

    public static void main(String[] args)
    {    
        Q12 Q = new Q12();
    }
}`,
    options: [
      { id: 'A', text: 'Test(1) Test(2) Test(3)' },
      { id: 'B', text: 'Test(3) Test(2) Test(1)' },
      { id: 'C', text: 'Test(2) Test(1) Test(3)' },
      { id: 'D', text: 'Test(1) Test(3) Test(2)' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q27',
    question: 'What will happen if you compile/run the following code?',
    code: `public class Q21
{
    int maxElements;
   
    void Q21()
    {
        maxElements = 100;
        System.out.println(maxElements);
    }
    
    Q21(int i)
    {
        maxElements = i;
        System.out.println(maxElements);
    }

    public static void main(String[] args)
    {
        Q21 a = new Q21();
        Q21 b = new Q21(999);
    }
}`,
    options: [
      { id: 'A', text: 'Prints 100 and 999.' },
      { id: 'B', text: 'Prints 999 and 100.' },
      { id: 'C', text: 'Compilation error at line 3, variable maxElements was not initialized.' },
      { id: 'D', text: 'Compillation error at line 19.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q28',
    question: 'Which of the following are valid array declarations/definitions?',
    code: `int iArray1[10];
int iArray2[];
int iArray3[]   = new int[10];
int iArray4[10] = new int[10];
int []iArray5   = new int[10];
int iArray6[]   = new int[]; 
int iArray7[]   = null;`,
    options: [
      { id: 'A', text: '1.' },
      { id: 'B', text: '2.' },
      { id: 'C', text: '3.' },
      { id: 'D', text: '4.' },
      { id: 'E', text: '5.' },
      { id: 'F', text: '6.' },
      { id: 'G', text: '7.' }
    ],
    correctAnswers: ['B', 'C', 'E', 'G']
  }
];

export default section1;
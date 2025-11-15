const section4 = [
  {
    id: 's4q1',
    question: 'Which of the following are Java keywords?',
    options: [
      { id: 'A', text: 'array' },
      { id: 'B', text: 'boolean' },
      { id: 'C', text: 'Integer' },
      { id: 'D', text: 'protect' },
      { id: 'E', text: 'super' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's4q2',
    question: 'After the declaration char[] c = new char[100];, what is the value of c[50]?',
    options: [
      { id: 'A', text: '50' },
      { id: 'B', text: '49' },
      { id: 'C', text: '\'\\u0000\'' },
      { id: 'D', text: '\'\\u0020\'' },
      { id: 'E', text: '" "' },
      { id: 'F', text: 'cannot be determined' },
      { id: 'G', text: 'always null until a value is assigned' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q3',
    question: 'After the declaration int x;, the range of x is:',
    options: [
      { id: 'A', text: '-2^(31) to 2^(31-1)' },
      { id: 'B', text: '-2^(16) to 2^(16-1)' },
      { id: 'C', text: '-2^(32) to 2^(32)' },
      { id: 'D', text: '-2^(16) to 2^(16)' },
      { id: 'E', text: 'cannot be determined; it depends on the machine' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q4',
    question: 'Which identifiers are valid?',
    options: [
      { id: 'A', text: '_xpoints' },
      { id: 'B', text: 'r2d2' },
      { id: 'C', text: 'bBb$' },
      { id: 'D', text: 'set-flow' },
      { id: 'E', text: 'thisisCrazy' }
    ],
    correctAnswers: ['A', 'B', 'C', 'E']
  },
  {
    id: 's4q5',
    question: 'Represent the number 6 as a hexadecimal literal.',
    options: [
      { id: 'A', text: '0x6 or 0X6' },
      { id: 'B', text: '0x06 or 0X06' },
      { id: 'C', text: 'Any of: 0x6, 0X6, 0x06, 0X06' },
      { id: 'D', text: '6h' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q6',
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
    id: 's4q7',
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
    id: 's4q8',
    question: 'Which statements are accurate?',
    options: [
      { id: 'A', text: '>> performs signed shift while >>> performs an unsigned shift.' },
      { id: 'B', text: '>>> performs a signed shift while >> performs an unsigned shift.' },
      { id: 'C', text: '<< performs a signed shift while <<< performs an insigned shift.' },
      { id: 'D', text: '<<< performs a signed shift while << performs an unsigned shift.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q9',
    question: 'To declare an array of 31 floating point numbers representing snowfall for each day of March in Gnome, Alaska, which declarations would be valid?',
    options: [
      { id: 'A', text: 'double snow[] = new double[31];' },
      { id: 'B', text: 'double snow[31] = new array[31];' },
      { id: 'C', text: 'double snow[31] = new array;' },
      { id: 'D', text: 'double[] snow = new double[31];' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's4q10',
    question: 'If MyProg.java were compiled as an application and then run from the command line as: java MyProg I like tests, what would be the value of args[1] inside the main() method?',
    options: [
      { id: 'A', text: 'MyProg' },
      { id: 'B', text: '"I"' },
      { id: 'C', text: '"like"' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' },
      { id: 'F', text: 'null until a value is assigned' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q11',
    question: 'Which of the following are legal declarations of a two-dimensional array of integers?',
    options: [
      { id: 'A', text: 'int[5][5]a = new int[][];' },
      { id: 'B', text: 'int a = new int[5,5];' },
      { id: 'C', text: 'int[]a[] = new int[5][5];' },
      { id: 'D', text: 'int[][]a = new[5]int[5];' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q12',
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
    id: 's4q13',
    question: 'Which of the following will compile without error?',
    options: [
      { id: 'A', text: 'import java.awt.*; package Mypackage; class Myclass {}' },
      { id: 'B', text: 'package MyPackage; import java.awt.*; class MyClass{}' },
      { id: 'C', text: '/*This is a comment */ package MyPackage; import java.awt.*; class MyClass{}' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's4q14',
    question: 'A byte can be of what size?',
    options: [
      { id: 'A', text: '-128 to 127' },
      { id: 'B', text: '(-2 power 8 )-1 to 2 power 8' },
      { id: 'C', text: '-255 to 256' },
      { id: 'D', text: 'depends on the particular implementation of the Java Virtual machine' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q15',
    question: 'What will be printed out if this code is run with the following command line: java myprog good morning?',
    code: `public class myprog{ 
public static void main(String argv[])
{ 
System.out.println(argv[2]) 
}
}`,
    options: [
      { id: 'A', text: 'myprog' },
      { id: 'B', text: 'good' },
      { id: 'C', text: 'morning' },
      { id: 'D', text: 'Exception raised: "java.lang.ArrayIndexOutOfBoundsException: 2"' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q16',
    question: 'Which of the following are Java keywords?',
    options: [
      { id: 'A', text: 'if' },
      { id: 'B', text: 'then' },
      { id: 'C', text: 'goto' },
      { id: 'D', text: 'while' },
      { id: 'E', text: 'case' }
    ],
    correctAnswers: ['A', 'C', 'D', 'E']
  },
  {
    id: 's4q17',
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
    id: 's4q18',
    question: 'What will happen if you try to compile and run the following code?',
    code: `public class Q { 
        public static void main(String argv[]){ 
                int anar[]=new int[]{1,2,3};
                System.out.println(anar[1]); 
                } 
}`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: 'Error anar is referenced before it is initialized' },
      { id: 'C', text: '2' },
      { id: 'D', text: 'Error: size of array must be defined' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q19',
    question: 'What will happen if you try to compile and run the following code?',
    code: `public class Q { 
        public static void main(String argv[]){ 
                int anar[]=new int[5];
                System.out.println(anar[0]); 
                } 
}`,
    options: [
      { id: 'A', text: 'Error: anar is referenced before it is initialized' },
      { id: 'B', text: 'null' },
      { id: 'C', text: '0' },
      { id: 'D', text: '5' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q20',
    question: 'What tags are mandatory when creating HTML to display an applet?',
    options: [
      { id: 'A', text: 'name, height, width' },
      { id: 'B', text: 'code, name' },
      { id: 'C', text: 'codebase, height, width' },
      { id: 'D', text: 'code, height, width' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q21',
    question: 'If the following HTML code is used to display the applet in the code MgAp what will be displayed at the console?',
    code: `<applet name=MgAp code=MgAp.class height=400 width=400 parameter HowOld=30 > 
</applet> 

import java.applet.*; 
import java.awt.*; 
public class MgAp extends Applet{
        public void init(){ 
                System.out.println(getParameter("age")); 
                } 
}`,
    options: [
      { id: 'A', text: 'Error: no such parameter' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: '30' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q22',
    question: 'What will happen if you attempt to compile and run the following code?',
    code: `Integer ten=new Integer(10); 
Long nine=new Long (9);
System.out.println(ten + nine); 
int i=1;
System.out.println(i + ten);`,
    options: [
      { id: 'A', text: '19 followed by 20' },
      { id: 'B', text: '19 followed by 11' },
      { id: 'C', text: 'Error: Can\'t convert java lang Integer' },
      { id: 'D', text: '10 followed by 1' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q23',
    question: 'What is the result of the following operation?',
    code: `System.out.println(4 | 3);`,
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '0' },
      { id: 'C', text: '1' },
      { id: 'D', text: '7' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q24',
    question: 'What will the following code print out?',
    code: `public class Oct{
public static void main(String argv[]){
        Oct o = new Oct();
        o.amethod();
        }
        public void amethod(){
        int oi= 012;
        System.out.println(oi);
        }
}`,
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '012' },
      { id: 'C', text: '10' },
      { id: 'D', text: '10.0' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q25',
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
    id: 's4q26',
    question: 'Which of the following are Java modifiers?',
    options: [
      { id: 'A', text: 'public' },
      { id: 'B', text: 'private' },
      { id: 'C', text: 'friendly' },
      { id: 'D', text: 'transient' },
      { id: 'E', text: 'vagrant' }
    ],
    correctAnswers: ['A', 'B', 'D']
  },
  {
    id: 's4q27',
    question: 'What happens when you attempt to compile and run these two files in the same directory?',
    code: `//File P1.java
package MyPackage;
class P1{
void afancymethod(){
        System.out.println("What a fancy method");
        }
}

//File P2.java
public class P2 extends P1{
afancymethod();
}`,
    options: [
      { id: 'A', text: 'Both compile and P2 outputs "What a fancy method" when run' },
      { id: 'B', text: 'Neither will compile' },
      { id: 'C', text: 'Both compile but P2 has an error at run time' },
      { id: 'D', text: 'P1 compiles cleanly but P2 has an error at compile time' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q28',
    question: 'You want to find out the value of the last element of an array. You write the following code. What will happen when you compile and run it?',
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
    id: 's4q29',
    question: 'You want to loop through an array and stop when you come to the last element. Being a good java programmer and forgetting everything you ever knew about C/C++ you know that arrays contain information about their size. Which of the following can you use?',
    options: [
      { id: 'A', text: 'myarray.length();' },
      { id: 'B', text: 'myarray.length;' },
      { id: 'C', text: 'myarray.size' },
      { id: 'D', text: 'myarray.size();' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's4q30',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class As{
int i = 10;
int j;
char z= 1;
boolean b;
public static void main(String argv[]){
                As a = new As();
                a.amethod();
        }
        public void amethod(){
        System.out.println(j);
        System.out.println(b);                
        }
}`,
    options: [
      { id: 'A', text: 'Compilation succeeds and at run time an output of 0 and false' },
      { id: 'B', text: 'Compilation succeeds and at run time an output of 0 and true' },
      { id: 'C', text: 'Compile time error b is not initialised' },
      { id: 'D', text: 'Compile time error z must be assigned a char value' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q31',
    question: 'What will happen when you attempt to compile and run the following code with the command line "hello there"?',
    code: `public class Arg{
String[] MyArg;
        public static void main(String argv[]){
        MyArg=argv;
        }
        public void amethod(){
                System.out.println(argv[1]);
        }
}`,
    options: [
      { id: 'A', text: 'Compile time error' },
      { id: 'B', text: 'Compilation and output of "hello"' },
      { id: 'C', text: 'Compilation and output of "there"' },
      { id: 'D', text: 'None of the above' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q32',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class MyAr{
public static void main(String argv[]) {
        MyAr m = new MyAr();
        m.amethod();
        }
        public void amethod(){
        static int i;
        System.out.println(i);
        }
}`,
    options: [
      { id: 'A', text: 'Compilation and output of the value 0' },
      { id: 'B', text: 'Compile time error because i has not been initialized' },
      { id: 'C', text: 'Compilation and output of null' },
      { id: 'D', text: 'Compile time error' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q33',
    question: 'Which of the following will compile correctly?',
    options: [
      { id: 'A', text: 'short myshort = 99S;' },
      { id: 'B', text: 'String name = \'Excellent tutorial Mr Green\';' },
      { id: 'C', text: 'char c = 17c;' },
      { id: 'D', text: 'int z = 015;' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q34',
    question: 'Which of the following are Java keywords?',
    options: [
      { id: 'A', text: 'double' },
      { id: 'B', text: 'Switch' },
      { id: 'C', text: 'then' },
      { id: 'D', text: 'instanceof' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's4q35',
    question: 'Given the following main method in a class called Cycle and a command line of "java Cycle one two", what will be output?',
    code: `public static void main(String bicycle[]){
	System.out.println(bicycle[0]);
}`,
    options: [
      { id: 'A', text: 'None of these options' },
      { id: 'B', text: 'cycle' },
      { id: 'C', text: 'one' },
      { id: 'D', text: 'two' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q36',
    question: 'Given the following variables, which of the following lines will compile without error?',
    code: `String s = "Hello";
long l = 99;
double d = 1.11;
int i = 1;
int j = 0;`,
    options: [
      { id: 'A', text: 'j= i <<s;' },
      { id: 'B', text: 'j= i<<j;' },
      { id: 'C', text: 'j=i<<d;' },
      { id: 'D', text: 'j=i<<l;' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's4q37',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'Adding more classes via import statements will cause a performance overhead, only import classes you actually use.' },
      { id: 'B', text: 'Under no circumstances can a class be defined with the private modifier' },
      { id: 'C', text: 'An inner class can be defined with the protected modifier' },
      { id: 'D', text: 'An interface cannot be instantiated' }
    ],
    correctAnswers: ['C', 'D']
  },
  {
    id: 's4q38',
    question: 'The following code will print:',
    code: `1:    int i = 1;
2:    i <<= 31;
3:    i >>= 31;
4:    i >>= 1;
5:
6:    int j = 1;
7:    j <<= 31;
8:    j >>= 31;
9:      
10:    System.out.println("i = " +i );
11:    System.out.println("j = " +j);`,
    options: [
      { id: 'A', text: 'i = 1\nj = 1' },
      { id: 'B', text: 'i = -1\nj = 1' },
      { id: 'C', text: 'i = 1\nj = -1' },
      { id: 'D', text: 'i = -1\nj = -1' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q39',
    question: 'The following code will print:',
    code: `1:    Double a = new Double(Double.NaN);
2:    Double b = new Double(Double.NaN);
3:              
4:    if( Double.NaN == Double.NaN )
5:  System.out.println("True");
6:    else
7:  System.out.println("False");
8:          
9:    if( a.equals(b) )
10: System.out.println("True");
11:   else
12: System.out.println("False");`,
    options: [
      { id: 'A', text: 'True\nTrue' },
      { id: 'B', text: 'True\nFalse' },
      { id: 'C', text: 'False\nTrue' },
      { id: 'D', text: 'False\nFalse' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q40',
    question: 'What will the following code print?',
    code: `1:    if( new Boolean("true") == new Boolean("true")) 
2:        System.out.println("True");
3:    else
4:        System.out.println("False");`,
    options: [
      { id: 'A', text: 'Compilation error.' },
      { id: 'B', text: 'No compilation error, but runtime exception.' },
      { id: 'C', text: 'Prints "True".' },
      { id: 'D', text: 'Prints "False".' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q41',
    question: 'The following code will give:',
    code: `1:     Byte b1 = new Byte("127");
2:
3:     if(b1.toString() == b1.toString())
4:        System.out.println("True");
5:    else
6:        System.out.println("False");`,
    options: [
      { id: 'A', text: 'Compilation error, toString() is not available for Byte.' },
      { id: 'B', text: 'Prints "True".' },
      { id: 'C', text: 'Prints "False".' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q42',
    question: 'What is the output of the following code?',
    code: `1:    int i = 16;
2:    int j = 17;
3:        
4:    System.out.println("i >> 1  =  " + (i >> 1));
5:	System.out.println("j >> 1  =  " + (j >> 1));`,
    options: [
      { id: 'A', text: 'Prints "i >> 1 = 8"\n"j >> 1 = 8"' },
      { id: 'B', text: 'Prints "i >> 1 = 7"\n"j >> 1 = 7"' },
      { id: 'C', text: 'Prints "i >> 1 = 8"\n"j >> 1 = 9"' },
      { id: 'D', text: 'Prints "i >> 1 = 7"\n"j >> 1 = 8"' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q43',
    question: 'What is the output of the following code?',
    code: `1:    int i = 45678;
2:    int j = ~i;
3:
4:    System.out.println(j);`,
    options: [
      { id: 'A', text: 'Compilation error at line 2. ~ operator applicable to boolean values only.' },
      { id: 'B', text: 'Prints 45677.' },
      { id: 'C', text: 'Prints -45677.' },
      { id: 'D', text: 'Prints -45679.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's4q44',
    question: 'What will happen if you run the following code?',
    code: `1:	Boolean[] b1 = new Boolean[10];
2:
3:	boolean[] b2 = new boolean[10];
4:  
6:	System.out.println("The value of b1[1] = " +b1[1]);
7:	System.out.println("The value of b2[1] = " +b2[1]);`,
    options: [
      { id: 'A', text: 'Prints "The value of b1[1] = false"\n"The value of b2[1] = false".' },
      { id: 'B', text: 'Prints "The value of b1[1] = null"\n"The value of b2[1] = null".' },
      { id: 'C', text: 'Prints "The value of b1[1] = null"\n"The value of b2[1] = false".' },
      { id: 'D', text: 'Prints "The value of b1[1] = false"\n"The value of b2[1] = null".' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q45',
    question: 'What is the output for the following lines of code?',
    code: `1:  System.out.println(" " +2 + 3); 
2:  System.out.println(2 + 3); 
3:  System.out.println(2 + 3 +"");
4:  System.out.println(2 + "" +3);`,
    options: [
      { id: 'A', text: 'Compilation error at line 3' },
      { id: 'B', text: 'Prints 23, 5, 5 and 23.' },
      { id: 'C', text: 'Prints 5, 5, 5 and 23.' },
      { id: 'D', text: 'Prints 23, 5, 23 and 23.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's4q46',
    question: 'The following declaration (as a member variable) is legal: static final transient int maxElements = 100;',
    options: [
      { id: 'A', text: 'True.' },
      { id: 'B', text: 'False.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's4q47',
    question: 'What will happen if you compile/run the following lines of code?',
    code: `1:  int[] iArray = new int[10];
2:
3:  iArray.length = 15;
4:
5:  System.out.println(iArray.length);`,
    options: [
      { id: 'A', text: 'Prints 10.' },
      { id: 'B', text: 'Prints 15.' },
      { id: 'C', text: 'Compilation error, you can\'t change the length of an array.' },
      { id: 'D', text: 'Runtime exception at line 3.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's4q48',
    question: 'What will happen if you compile/run this code?',
    code: `1:  int i = 012;
2:  int j = 034;
3:  int k = 056;
4:  int l = 078;
5:
6:  System.out.println(i);
7:  System.out.println(j);
8:  System.out.println(k);`,
    options: [
      { id: 'A', text: 'Prints 12,34 and 56.' },
      { id: 'B', text: 'Prints 24,68 and 112.' },
      { id: 'C', text: 'Prints 10, 28 and 46.' },
      { id: 'D', text: 'Compilation error.' }
    ],
    correctAnswers: ['D']
  }
];

export default section4;
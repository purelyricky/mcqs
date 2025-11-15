const section5 = [
  {
    id: 's5q1',
    question: 'If you compile and execute an application with the following code in its main() method, what happens?',
    code: `String s = new String( "Computer" );

if( s == "Computer" )
	System.out.println( "Equal A" );
if( s.equals( "Computer" ) )
	System.out.println( "Equal B" );`,
    options: [
      { id: 'A', text: 'It will not compile because the String class does not support the == operator.' },
      { id: 'B', text: 'It will compile and run, but nothing is printed.' },
      { id: 'C', text: '"Equal A" is the only thing that is printed.' },
      { id: 'D', text: '"Equal B" is the only thing that is printed.' },
      { id: 'E', text: 'Both "Equal A" and "Equal B" are printed.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's5q2',
    question: 'The statement String s = "Hello" + "Java"; yields the same value for s as the following code?',
    code: `String s = "Hello";
String s2= "Java";
s.concat( s2 );`,
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's5q3',
    question: 'Consider the two statements: 1. boolean passingScore = false && grade == 70; and 2. boolean passingScore = false & grade == 70;. The expression "grade == 70" is evaluated:',
    options: [
      { id: 'A', text: 'in both 1 and 2' },
      { id: 'B', text: 'in neither 1 nor 2' },
      { id: 'C', text: 'in 1 but not 2' },
      { id: 'D', text: 'in 2 but not 1' },
      { id: 'E', text: 'invalid because false should be FALSE' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's5q4',
    question: 'Given the variable declarations below, which of the following assignments would need an explicit cast?',
    code: `byte myByte;
int myInt;
long myLong;
char myChar;
float myFloat;
double myDouble;`,
    options: [
      { id: 'A', text: 'myInt = myByte;' },
      { id: 'B', text: 'myInt = myLong;' },
      { id: 'C', text: 'myByte = 3;' },
      { id: 'D', text: 'myInt = myChar;' },
      { id: 'E', text: 'myFloat = myDouble;' },
      { id: 'F', text: 'myFloat = 3;' },
      { id: 'G', text: 'myDouble = 3.0;' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's5q5',
    question: 'Consider this class example. What is printed to standard output if myMethod() is executed?',
    code: `class MyPoint 
{  void myMethod() 
   {  int x, y;
      x = 5; y = 3;
      System.out.print( " ( " + x + ", " + y + " ) " );
      switchCoords( x, y );
      System.out.print( " ( " + x + ", " + y + " ) " );
   }
   void switchCoords( int x, int y ) 
   {  int temp;
      temp = x;
      x = y;
      y = temp;
      System.out.print( " ( " + x + ", " + y + " ) " );
   }
}`,
    options: [
      { id: 'A', text: '(5, 3) (5, 3) (5, 3)' },
      { id: 'B', text: '(5, 3) (3, 5) (3, 5)' },
      { id: 'C', text: '(5, 3) (3, 5) (5, 3)' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's5q6',
    question: 'If arr[] contains only positive integer values, what does this function do?',
    code: `public int guessWhat( int arr[] )
{  int x= 0;
   for( int i = 0; i < arr.length; i++ )
      x = x < arr[i] ? arr[i] : x;
   return x;
}`,
    options: [
      { id: 'A', text: 'Returns the index of the highest element in the array' },
      { id: 'B', text: 'Returns true/false if there are any elements that repeat in the array' },
      { id: 'C', text: 'Returns how many even numbers are in the array' },
      { id: 'D', text: 'Returns the highest element in the array' },
      { id: 'E', text: 'Returns the number of question marks in the array' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's5q7',
    question: 'Given the following code, what will be output?',
    code: `public class Pass{
static int j=20;
public static void main(String argv[]){
        int i=10;
        Pass p = new Pass();
        p.amethod(i);
        System.out.println(i);
        System.out.println(j);
        }
        public void amethod(int x){
        x=x*2;
        j=j*2;
        }
}`,
    options: [
      { id: 'A', text: 'Error: amethod parameter does not match variable' },
      { id: 'B', text: '20 and 40' },
      { id: 'C', text: '10 and 40' },
      { id: 'D', text: '10, and 20' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's5q8',
    question: 'What will happen when you try compiling and running this code?',
    code: `public class Ref{
public static void main(String argv[]){
          Ref r = new Ref();
          r.amethod(r);
          }
          public void amethod(Ref r){
          int i=99;
          multi(r);
          System.out.println(i);
          }
          public void multi(Ref r){
          r.i = r.i*2;
          }
}`,
    options: [
      { id: 'A', text: 'Error at compile time' },
      { id: 'B', text: 'An output of 99' },
      { id: 'C', text: 'An output of 198' },
      { id: 'D', text: 'An error at runtime' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's5q9',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class StrEq{

public static void main(String argv[]){
        StrEq s = new StrEq();
        }
        private StrEq(){
                String s = "Marcus";
                String s2 = new String("Marcus");
                if(s == s2){
                        System.out.println("we have a match");
                        }else{
                        System.out.println("Not equal");
                }
       }
}`,
    options: [
      { id: 'A', text: 'Compile time error caused by private constructor' },
      { id: 'B', text: 'Output of "we have a match"' },
      { id: 'C', text: 'Output of "Not equal"' },
      { id: 'D', text: 'Compile time error by attempting to compare strings using ==' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's5q10',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `int Output=10;
boolean b1 = false;
if((b1==true) && ((Output+=10)==20)){
    System.out.println("We are equal "+Output);
    }else
    {
    System.out.println("Not equal! "+Output);
}`,
    options: [
      { id: 'A', text: 'Compile error, attempting to perform binary comparison on logical data type' },
      { id: 'B', text: 'Compilation and output of "We are equal 10"' },
      { id: 'C', text: 'Compilation and output of "Not equal! 20"' },
      { id: 'D', text: 'Compilation and output of "Not equal! 10"' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's5q11',
    question: 'What will be output by the following line of code?',
    code: `System.out.println(010|4);`,
    options: [
      { id: 'A', text: '14' },
      { id: 'B', text: '0' },
      { id: 'C', text: '6' },
      { id: 'D', text: '12' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's5q12',
    question: 'Given the following variables, which of the following will compile without error?',
    code: `char c = 'c';
int i = 10;
double d = 10;
long l = 1;
String s = "Hello";`,
    options: [
      { id: 'A', text: 'c=c+i;' },
      { id: 'B', text: 's+=i;' },
      { id: 'C', text: 'i+=s;' },
      { id: 'D', text: 'c+=s;' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's5q13',
    question: 'What will happen if you compile/run this code?',
    code: `1:    public class Q10
2:    {
3:      public static void main(String[] args)
4:      {
5:          int i = 10;
6:          int j = 10;
7:          boolean b = false;
8:          
9:          if( b = i == j)
10:            System.out.println("True");
11:         else
12:        System.out.println("False");
13: }
14:    }`,
    options: [
      { id: 'A', text: 'Compilation error at line 9.' },
      { id: 'B', text: 'Runtime error exception at line 9.' },
      { id: 'C', text: 'Prints "True".' },
      { id: 'D', text: 'Prints "False".' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's5q14',
    question: 'What is the output of the following code?',
    code: `1:    class MyClass
2:    {
3:        static int maxElements;
4:    
5:        MyClass(int maxElements)
6:        {
7:            this.maxElements = maxElements;
8:        }
9:    
10:    }
11:
12:    public class Q19
13:    {
14:        public static void main(String[] args)
15:        {
16:    
17:            MyClass a = new MyClass(100);
18:            MyClass b = new MyClass(100);
19:        
20:            if(a.equals(b))
21:                System.out.println("Objects have the same values");
22:            else
23:                System.out.println("Objects have different values");
24:        }
25:    }`,
    options: [
      { id: 'A', text: 'Compilation error at line 20. equals() method was not defined.' },
      { id: 'B', text: 'Compiles fine, runtime exception at line 20.' },
      { id: 'C', text: 'Prints "Objects have the same values".' },
      { id: 'D', text: 'Prints "Objects have different values";' }
    ],
    correctAnswers: ['D']
  }
];

export default section5;
const section6 = [
  {
    id: 's6q1',
    question: 'Consider the following code sample. Select all choices that will be printed:',
    code: `class Tree{}
class Pine extends Tree{}
class Oak extends Tree{}
public class Forest 
{  public static void main( String[] args ) 
   {  Tree tree = new Pine();

      if( tree instanceof Pine )
      System.out.println( "Pine" );

      if( tree instanceof Tree )
      System.out.println( "Tree" );

      if( tree instanceof Oak )
      System.out.println( "Oak" );

      else System.out.println( "Oops" );
   }
}`,
    options: [
      { id: 'A', text: 'Pine' },
      { id: 'B', text: 'Tree' },
      { id: 'C', text: 'Forest' },
      { id: 'D', text: 'Oops' },
      { id: 'E', text: '(nothing printed)' }
    ],
    correctAnswers: ['A', 'B', 'D']
  },
  {
    id: 's6q2',
    question: 'Consider the classes defined below. Which of the following are legal method declarations to add to the class Sub? Assume that each method is the only one being added.',
    code: `import java.io.*;
class Super 
{
	int methodOne( int a, long b ) throws IOException 
	{ // code that performs some calculations
    }
	float methodTwo( char a, int b )
	{ // code that performs other calculations
    }
}
public class Sub extends Super
{

}`,
    options: [
      { id: 'A', text: 'public static void main( String args[] ){}' },
      { id: 'B', text: 'float methodTwo(){}' },
      { id: 'C', text: 'long methodOne( int c, long d ){}' },
      { id: 'D', text: 'int methodOne( int c, long d ) throws ArithmeticException{}' },
      { id: 'E', text: 'int methodOne( int c, long d ) throws FileNotFoundException{}' }
    ],
    correctAnswers: ['A', 'B', 'E']
  },
  {
    id: 's6q3',
    question: 'Assume that Sub1 and Sub2 are both subclasses of class Super. Given the declarations: Super super = new Super(); Sub1 sub1 = new Sub1(); Sub2 sub2 = new Sub2(); Which statement best describes the result of attempting to compile and execute the following statement: super = sub1;',
    options: [
      { id: 'A', text: 'Compiles and definitely legal at runtime' },
      { id: 'B', text: 'Does not compile' },
      { id: 'C', text: 'Compiles and may be illegal at runtime' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's6q4',
    question: 'For the following code, what will be printed to standard output?',
    code: `class Super 
{  int index = 5;
   public void printVal() 
      {  System.out.println( "Super" );
      }
}
class Sub extends Super
{  int index = 2;
   public void printVal() 
   {  System.out.println( "Sub" );
   }
}
public class Runner 
{  public static void main( String argv[] ) 
   {  Super sup = new Sub();
      System.out.print( sup.index + "," );
      sup.printVal();
   }
}`,
    options: [
      { id: 'A', text: 'The code will not compile.' },
      { id: 'B', text: 'The code compiles and "5, Super" is printed to standard output.' },
      { id: 'C', text: 'The code compiles and "5, Sub" is printed to standard output.' },
      { id: 'D', text: 'The code compiles and "2, Super" is printed to standard output.' },
      { id: 'E', text: 'The code compiles and "2, Sub" is printed to standard output.' },
      { id: 'F', text: 'The code compiles, but throws an exception.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's6q5',
    question: 'What will happen if you attempt to compile and run the following code?',
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
    id: 's6q6',
    question: 'Given the following code how could you invoke the Base constructor that will print out the string "base constructor"?',
    code: `class Base{
        Base(int i){
        System.out.println("base constructor");
        }
        Base(){
        }
}
public class Sup extends Base{
        public static void main(String argv[]){
             Sup s= new Sup();
        //One
        }
        Sup()
        {
            //Two
        }
        public void derived()
        {
            //Three
        }
}`,
    options: [
      { id: 'A', text: 'On the line After //One put Base(10);' },
      { id: 'B', text: 'On the line After //One put super(10);' },
      { id: 'C', text: 'On the line After //Two put super(10);' },
      { id: 'D', text: 'On the line After //Three put super(10);' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's6q7',
    question: 'What will be the result when you try to compile and run the following code?',
    code: `private class Base{
Base(){
     int i = 100;     
     System.out.println(i);
     }
}
public class Pri extends Base{
static int i = 200;
public static void main(String argv[]){
        Pri p = new Pri();
        System.out.println(i);
        }
}`,
    options: [
      { id: 'A', text: 'Error at compile time' },
      { id: 'B', text: '200' },
      { id: 'C', text: '100 followed by 200' },
      { id: 'D', text: '100' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's6q8',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `class Base{
private void amethod(int iBase){
        System.out.println("Base.amethod");
        }
}

class Over extends Base{


public static void main(String argv[]){
        Over o = new Over();
        int iBase=0;
        o.amethod(iBase);
        }
        public void amethod(int iOver){
                System.out.println("Over.amethod");
        }

}`,
    options: [
      { id: 'A', text: 'Compile time error complaining that Base.amethod is private' },
      { id: 'B', text: 'Runtime error complaining that Base.amethod is private' },
      { id: 'C', text: 'Output of Base.amethod' },
      { id: 'D', text: 'Output of Over.amethod()' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q9',
    question: 'For a class defined inside a method, what rule governs access to the variables of the enclosing method?',
    options: [
      { id: 'A', text: 'The class can access any variable' },
      { id: 'B', text: 'The class can only access static variables' },
      { id: 'C', text: 'The class can only access transient variables' },
      { id: 'D', text: 'The class can only access final variables' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q10',
    question: 'What will happen when you attempt to compile and run this program?',
    code: `public class Outer{
public String name = "Outer";
public static void main(String argv[]){
        Inner i = new Inner();
        i.showName();
    }//End of main

        private class Inner{
        String name =new String("Inner");
                void showName(){
                        System.out.println(name);
                }
        }//End of Inner class

}`,
    options: [
      { id: 'A', text: 'Compile and run with output of "Outer"' },
      { id: 'B', text: 'Compile and run with output of "Inner"' },
      { id: 'C', text: 'Compile time error because Inner is declared as private' },
      { id: 'D', text: 'Compile time error because of the line creating the instance of Inner' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q11',
    question: 'Given the following code, which of the following, if inserted at the comment //Here will allow the code to compile and run without error?',
    code: `class Base{}

public class MyCast extends Base{
static boolean b1=false;
static int i = -1;
static double d = 10.1;

public static void main(String argv[]){
        MyCast m = new MyCast();
        Base b = new Base();
	//Here
        }
}`,
    options: [
      { id: 'A', text: 'b=m;' },
      { id: 'B', text: 'm=b;' },
      { id: 'C', text: 'd =i;' },
      { id: 'D', text: 'b1 =i;' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's6q12',
    question: 'Your chief Software designer has shown you a sketch of the new Computer parts system she is about to create. At the top of the hierarchy is a Class called Computer and under this are two child classes. One is called LinuxPC and one is called WindowsPC. The main difference between the two is that one runs the Linux operating System and the other runs the Windows System. Under the WindowsPC are two Sub classes one called Server and one Called Workstation. How might you appraise your designers work?',
    options: [
      { id: 'A', text: 'Give the goahead for further design using the current scheme' },
      { id: 'B', text: 'Ask for a re-design of the hierarchy with changing the Operating System to a field rather than Class type' },
      { id: 'C', text: 'Ask for the option of WindowsPC to be removed as it will soon be obsolete' },
      { id: 'D', text: 'Change the hierarchy to remove the need for the superfluous Computer Class.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's6q13',
    question: 'Given the following classes, which of the following will compile without error?',
    code: `interface IFace{}
class CFace implements IFace{}
class Base{}

public class ObRef extends Base{
public static void main(String argv[]){
        ObRef ob = new ObRef();
        Base b = new Base();
        Object o1 = new Object();
        IFace o2 = new CFace();
        }
}`,
    options: [
      { id: 'A', text: 'o1=o2;' },
      { id: 'B', text: 'b=ob;' },
      { id: 'C', text: 'ob=b;' },
      { id: 'D', text: 'o1=b;' }
    ],
    correctAnswers: ['A', 'B', 'D']
  },
  {
    id: 's6q14',
    question: 'Given the following code what will be the output?',
    code: `class ValHold{
        public int i = 10;
}
public class ObParm{
public static void main(String argv[]){
        ObParm o = new ObParm();
        o.amethod();
        }
        public void amethod(){
                int i = 99;
                ValHold v = new ValHold();
                v.i=30;
                another(v,i);
                System.out.println(v.i);

        }//End of amethod

        public void another(ValHold v, int i){
                i=0;
                v.i = 20;
                ValHold vh = new ValHold();
                v =  vh;
                System.out.println(v.i+ " "+i);
        }//End of another
}`,
    options: [
      { id: 'A', text: '10,0, 30' },
      { id: 'B', text: '20,0,30' },
      { id: 'C', text: '20,99,30' },
      { id: 'D', text: '10,0,20' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q15',
    question: 'Given the following class definition, which of the following methods could be legally placed after the comment //Here?',
    code: `public class Rid{
        public void amethod(int i, String s){}
	//Here
}`,
    options: [
      { id: 'A', text: 'public void amethod(String s, int i){}' },
      { id: 'B', text: 'public int amethod(int i, String s){}' },
      { id: 'C', text: 'public void amethod(int i, String mystring){}' },
      { id: 'D', text: 'public void Amethod(int i, String s) {}' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's6q16',
    question: 'Given the following class definition, which of the following can be legally placed after the comment line //Here?',
    code: `class Base{
public Base(int i){}
}

public class MyOver extends Base{
public static void main(String arg[]){
                MyOver m = new MyOver(10);
                }
        MyOver(int i){
                super(i);
        }
        MyOver(String s, int i){
                this(i);
			 //Here
               
        }
}`,
    options: [
      { id: 'A', text: 'MyOver m = new MyOver();' },
      { id: 'B', text: 'super();' },
      { id: 'C', text: 'this("Hello",10);' },
      { id: 'D', text: 'Base b = new Base(10);' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q17',
    question: 'Given the following class definition, which of the following statements would be legal after the comment //Here?',
    code: `class InOut{
String s= new String("Between");


        public void amethod(final int iArgs){
        int iam;
               class Bicycle{
                        public void sayHello(){
						//Here
                        }//End of bicycle class
                }
        }//End of amethod
       public void another(){
       int iOther;
       }
}`,
    options: [
      { id: 'A', text: 'System.out.println(s);' },
      { id: 'B', text: 'System.out.println(iOther);' },
      { id: 'C', text: 'System.out.println(iam);' },
      { id: 'D', text: 'System.out.println(iArgs);' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's6q18',
    question: 'What will happen if you compile/run the following code?',
    code: `1:    class Test
2:    {
3:  static void show()
4:  {
5:      System.out.println("Show method in Test class");
6:  }
7:}
8:
9:    public class Q2 extends Test
10:   {
11: static void show()
12: {
13:     System.out.println("Show method in Q2 class");
14: }
15: public static void main(String[] args)
16: {
17:     Test t = new Test();
18:     t.show();
19:     Q2 q = new Q2();
20:     q.show();
21:     
22:     t = q; 
23:     t.show();
24:
25:     q = t; 
26:     q.show();
27: }
28: }`,
    options: [
      { id: 'A', text: 'prints "Show method in Test class"\n"Show method in Q2 class"\n"Show method in Q2 class"\n"Show method in Q2 class"' },
      { id: 'B', text: 'prints "Show method in Test class"\n"Show method in Q2 class"\n"Show method in Test class"\n"Show method in Test class"' },
      { id: 'C', text: 'prints "Show method in Test class"\n"Show method in Q2 class"\n"Show method in Test class"\n"Show method in Q2 class"' },
      { id: 'D', text: 'Compilation error.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's6q19',
    question: 'The following code will give:',
    code: `1:    class Test
2:    {
3:      void show()
4:      {
5:      System.out.println("non-static method in Test");
6:  }
7:    }
8:    public class Q3 extends Test
9:    {
10:     static void show()
11: {
12:     System.out.println("Overridden non-static method in Q3");
13: }
14:            
15:       public static void main(String[] args)
16:       {
17:              Q3 a = new Q3();
18:        }
19:    }`,
    options: [
      { id: 'A', text: 'Compilation error at line 3.' },
      { id: 'B', text: 'Compilation error at line 10.' },
      { id: 'C', text: 'No compilation error, but runtime exception at line 3.' },
      { id: 'D', text: 'No compilation error, but runtime exception at line 10.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's6q20',
    question: 'The following code will give:',
    code: `1:    class Test
2:    {
3:      static void show()
4:      {
5:          System.out.println("Static method in Test");
6:      }
7:    }
8:    public class Q4 extends Test
9:    {
10:     void show()
11: {
12:     System.out.println("Overridden static method in Q4");
13: }
14: public static void main(String[] args)
15: {
16: }
17:    }`,
    options: [
      { id: 'A', text: 'Compilation error at line 3.' },
      { id: 'B', text: 'Compilation error at line 10.' },
      { id: 'C', text: 'No compilation error, but runtime exception at line 3.' },
      { id: 'D', text: 'No compilation error, but runtime exception at line 10.' }
    ],
    correctAnswers: ['B']
  }
];

export default section6;
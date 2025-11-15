const section2 = [
  {
    id: 's2q1',
    question: 'If size = 4, triArray looks like:',
    code: `int[][] makeArray( int size ) 
{  int[][] triArray = new int[size] [];
   int val=1;
   for( int i = 0; i < triArray.length; i++ ) 
   {  triArray[i] = new int[i+1];
      for( int j=0; j < triArray[i].length; j++ )
      {  triArray[i][j] = val++;
      }
   }
   return triArray;
}`,
    options: [
      { id: 'A', text: '1 2 3 4\n5 6 7\n8 9\n10' },
      { id: 'B', text: '1 4 9 16' },
      { id: 'C', text: '1 2 3 4' },
      { id: 'D', text: '1 2 3 4\n5 6 7 8\n9 10 11 12\n13 14 15 16' },
      { id: 'E', text: '1\n2 3\n4 5 6\n7 8 9 10' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q2',
    question: 'Given the variables defined below, which of the following are valid?',
    code: `int one = 1;
int two = 2;
char initial = '2';
boolean flag = true;`,
    options: [
      { id: 'A', text: 'if( one ){}' },
      { id: 'B', text: 'if( one = two ){}' },
      { id: 'C', text: 'if( one == two ){}' },
      { id: 'D', text: 'if( flag ){}' },
      { id: 'E', text: 'switch( one ){}' },
      { id: 'F', text: 'switch( flag ){}' },
      { id: 'G', text: 'switch( initial ){}' }
    ],
    correctAnswers: ['C', 'D', 'E', 'G']
  },
  {
    id: 's2q3',
    question: 'If val = 1 in the code below, which values would be printed?',
    code: `switch( val ) 
{  case 1: System.out.print( "P" );
   case 2: 
   case 3: System.out.print( "Q" );
      break;
   case 4: System.out.print( "R" );
   default: System.out.print( "S" );
}`,
    options: [
      { id: 'A', text: 'P' },
      { id: 'B', text: 'Q' },
      { id: 'C', text: 'R' },
      { id: 'D', text: 'S' }
    ],
    correctAnswers: ['A', 'B']
  },
  {
    id: 's2q4',
    question: 'Assume that val has been defined as an int for the code below. Which values of val will result in "Test C" being printed?',
    code: `if( val > 4 ) 
{  System.out.println( "Test A" );
}
else if( val > 9 ) 
{  System.out.println( "Test B" );
}
else System.out.println( "Test C" );`,
    options: [
      { id: 'A', text: 'val < 0' },
      { id: 'B', text: 'val between 0 and 4' },
      { id: 'C', text: 'val between 4 and 9' },
      { id: 'D', text: 'val > 9' },
      { id: 'E', text: 'val = 0' },
      { id: 'F', text: 'no values for val will be satisfactory' }
    ],
    correctAnswers: ['A', 'B', 'E']
  },
  {
    id: 's2q5',
    question: 'What exception might a wait() method throw?',
    options: [
      { id: 'A', text: 'InterruptedException' },
      { id: 'B', text: 'IOException' },
      { id: 'C', text: 'RuntimeException' },
      { id: 'D', text: 'NullPointerException' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q6',
    question: 'For the code below, which of the following are printed to standard output?',
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
    id: 's2q7',
    question: 'Consider the code fragment below. Which of the following would be printed to standard output?',
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
    id: 's2q8',
    question: 'Consider the code below. What is printed to standard output if fragile() throws an IllegalArgumentException?',
    code: `void myMethod() 
{  try 
   {  
      fragile();
   }
   catch( NullPointerException npex ) 
   {  
      System.out.println( "NullPointerException thrown " );
   }
   catch( Exception ex ) 
      {  
         System.out.println( "Exception thrown " );
      }
   finally 
   {  
      System.out.println( "Done with exceptions " ); 
   }
   System.out.println( "myMethod is done" );
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
    id: 's2q9',
    question: 'What will be printed out if you attempt to compile and run the following code?',
    code: `int i=1; 
        switch (i) { 
                case 0: 
                System.out.println("zero"); 
        break; 
        case 1: 
                System.out.println("one"); 
        case 2: 
                System.out.println("two"); 
        default: 
                System.out.println("default"); 
        }`,
    options: [
      { id: 'A', text: 'one' },
      { id: 'B', text: 'one, default' },
      { id: 'C', text: 'one, two, default' },
      { id: 'D', text: 'default' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's2q10',
    question: 'What will be printed out if you attempt to compile and run the following code?',
    code: `int i=9; 
switch (i) { 
        default: 
        System.out.println("default"); 
                case 0: 
        System.out.println("zero"); 
                break; 
        case 1: 
                System.out.println("one"); 
        case 2: 
        System.out.println("two"); 
}`,
    options: [
      { id: 'A', text: 'default' },
      { id: 'B', text: 'default, zero' },
      { id: 'C', text: 'error default clause not defined' },
      { id: 'D', text: 'no output displayed' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's2q11',
    question: 'Which of the following lines of code will compile without error?',
    options: [
      { id: 'A', text: 'int i=0; if(i) { System.out.println("Hello"); }' },
      { id: 'B', text: 'boolean b=true; boolean b2=true; if(b==b2) { System.out.println("So true"); }' },
      { id: 'C', text: 'int i=1; int j=2; if(i==1|| j==2) System.out.println("OK");' },
      { id: 'D', text: 'int i=1; int j=2; if(i==1 &| j==2) System.out.println("OK");' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's2q12',
    question: 'What will be output if you try to compile and run the following code, but there is no file called Hello.txt in the current directory?',
    code: `import java.io.*; 
public class Mine { 
        public static void main(String argv[]){
        Mine m=new Mine(); 
        System.out.println(m.amethod()); 
}
public int amethod() { 
        try {
                FileInputStream dis=new FileInputStream("Hello.txt"); 
                }catch (FileNotFoundException fne) { 
                        System.out.println("No such file found"); 
                        return -1; 
                        }catch(IOException ioe) { 
                        } finally{ 
        System.out.println("Doing finally"); 
        } 
        return 0; 
        } 
}`,
    options: [
      { id: 'A', text: 'No such file found' },
      { id: 'B', text: 'No such file found ,-1' },
      { id: 'C', text: 'No such file found, Doing finally, -1' },
      { id: 'D', text: '0' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's2q13',
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
    id: 's2q14',
    question: 'What code placed after the comment //Start For loop would populate the elements of the array ia[] with values of the variable i?',
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
    id: 's2q15',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class MySwitch{

public static void main(String argv[]){
    MySwitch ms= new MySwitch();
    ms.amethod();
    }

public void amethod(){

    int k=10; 
        switch(k){ 
        default: //Put the default at the bottom, not here
            System.out.println("This is the default output"); 
            break; 
         case 10: 
            System.out.println("ten");
         case 20: 
            System.out.println("twenty"); 
        break; 
       }
    }
}`,
    options: [
      { id: 'A', text: 'None of these options' },
      { id: 'B', text: 'Compile time errror target of switch must be an integral type' },
      { id: 'C', text: 'Compile and run with output "This is the default output"' },
      { id: 'D', text: 'Compile and run with output "ten"' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q16',
    question: 'What will happen when you invoke the following method?',
    code: `1:    void infiniteLoop()
2:    {
3:        byte b = 1;
4:        
5:        while ( ++b > 0 )
6:            ;
7:        System.out.println("Welcome to Java");
8:    }`,
    options: [
      { id: 'A', text: 'The loop never ends(infiniteLoop).' },
      { id: 'B', text: 'Prints "Welcome to Java".' },
      { id: 'C', text: 'Compilation error at line 5. ++ operator should not be used for byte type variables.' },
      { id: 'D', text: 'Prints nothing.' }
    ],
    correctAnswers: ['B']
  }
];

export default section2;
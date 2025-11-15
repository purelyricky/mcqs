const section9 = [
  {
    id: 's9q1',
    question: 'Consider the code below. What will happen when you attempt to compile and run this code?',
    code: `public static void main( String args[] )
{  int a = 5;
   System.out.println( cube( a ) );
}
int cube( int theNum )
{
   return theNum * theNum * theNum;
}`,
    options: [
      { id: 'A', text: 'It will not compile because cube is already defined in the java.lang.Math class.' },
      { id: 'B', text: 'It will not compile because cube is not static.' },
      { id: 'C', text: 'It will compile, but throw an arithmetic exception.' },
      { id: 'D', text: 'It will run perfectly and print "125" to standard output.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's9q2',
    question: 'Which method below can change a String object, s?',
    options: [
      { id: 'A', text: 'equals( s )' },
      { id: 'B', text: 'substring( s )' },
      { id: 'C', text: 'concat( s )' },
      { id: 'D', text: 'toUpperCase( s )' },
      { id: 'E', text: 'none of the above will change s' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's9q3',
    question: 'If s1 is declared as: String s1 = "phenobarbital";, what will be the value of s2 after the following line of code: String s2 = s1.substring( 3, 5 );?',
    options: [
      { id: 'A', text: 'null' },
      { id: 'B', text: '"eno"' },
      { id: 'C', text: '"enoba"' },
      { id: 'D', text: '"no"' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's9q4',
    question: 'What method(s) from the java.lang.Math class might method() be if the statement method( -4.4 ) == -4; is true?',
    options: [
      { id: 'A', text: 'round()' },
      { id: 'B', text: 'min()' },
      { id: 'C', text: 'trunc()' },
      { id: 'D', text: 'abs()' },
      { id: 'E', text: 'floor()' },
      { id: 'F', text: 'ceil()' }
    ],
    correctAnswers: ['A', 'F']
  },
  {
    id: 's9q5',
    question: 'Which methods does java.lang.Math include for trigonometric computations?',
    options: [
      { id: 'A', text: 'sin()' },
      { id: 'B', text: 'cos()' },
      { id: 'C', text: 'tan()' },
      { id: 'D', text: 'aSin()' },
      { id: 'E', text: 'aCos()' },
      { id: 'F', text: 'aTan()' },
      { id: 'G', text: 'toDegree()' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's9q6',
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
    id: 's9q7',
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
    id: 's9q8',
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
    id: 's9q9',
    question: 'Given the following declarations, which of the following are legal operations?',
    code: `String s1=new String("Hello") 
String s2=new String("there"); 
String s3=new String();`,
    options: [
      { id: 'A', text: 's3=s1 + s2;' },
      { id: 'B', text: 's3=s1-s2;' },
      { id: 'C', text: 's3=s1 & s2' },
      { id: 'D', text: 's3=s1 && s2' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's9q10',
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
    id: 's9q11',
    question: 'Given the following code, what test would you need to put in place of the comment line? //place test here to result in an output of Equal?',
    code: `public class EqTest{ 
    public static void main(String argv[]){ 
    EqTest e=new EqTest(); 
    }
EqTest(){ 
    String s="Java"; 
    String s2="java"; 
    //place test here {
        System.out.println("Equal"); 
        }else 
        { 
        System.out.println("Not equal"); 
        }
     } 
}`,
    options: [
      { id: 'A', text: 'if(s==s2)' },
      { id: 'B', text: 'if(s.equals(s2)' },
      { id: 'C', text: 'if(s.equalsIgnoreCase(s2))' },
      { id: 'D', text: 'if(s.noCaseMatch(s2))' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's9q12',
    question: 'What will be the result when you attempt to compile this program?',
    code: `public class Rand{
public static void main(String argv[]){
        int iRand;
        iRand = Math.random();
        System.out.println(iRand);
        }
}`,
    options: [
      { id: 'A', text: 'Compile time error referring to a cast problem' },
      { id: 'B', text: 'A random number between 1 and 10' },
      { id: 'C', text: 'A random number between 0 and 1' },
      { id: 'D', text: 'A compile time error about random being an unrecognised method' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's9q13',
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
    id: 's9q14',
    question: 'What is the output of the following code?',
    code: `1:    String str = "Welcome";
2:
3:    str.concat(" to Java!");
4:
5:    System.out.println(str);`,
    options: [
      { id: 'A', text: 'Strings are immutable, compilation error at line 3.' },
      { id: 'B', text: 'Strings are immutable, runtime exception at line 3.' },
      { id: 'C', text: 'Prints "Welcome".' },
      { id: 'D', text: 'Prints "Welcome to Java!".' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's9q15',
    question: 'What will happen if you invoke the following method?',
    code: `1:  public void check()
2:  {
3:      System.out.println(Math.min(-0.0,+0.0));
4:      System.out.println(Math.max(-0.0,+0.0));
5:	   System.out.println(Math.min(-0.0,+0.0) == Math.max(0.0,+0.0));
6:  }`,
    options: [
      { id: 'A', text: 'prints -0.0, +0.0 and false.' },
      { id: 'B', text: 'prints -0.0, +0.0 and true.' },
      { id: 'C', text: 'prints 0.0, 0.0 and false.' },
      { id: 'D', text: 'prints 0.0, 0.0 and true.' }
    ],
    correctAnswers: ['B']
  }
];

export default section9;
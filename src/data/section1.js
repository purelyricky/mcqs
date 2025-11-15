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
    question: 'Consider the code below. Which statement, when inserted as the body of the for loop, would print the number of values in each row?',
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
      { id: 'A', text: 'final' },
      { id: 'B', text: 'static' },
      { id: 'C', text: 'protected' },
      { id: 'D', text: 'private' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q5',
    question: 'If you want a member variable to not be accessible outside the current class at all, what keyword should precede the name of the variable when declaring it?',
    options: [
      { id: 'A', text: 'final' },
      { id: 'B', text: 'static' },
      { id: 'C', text: 'protected' },
      { id: 'D', text: 'private' }
    ],
    correctAnswers: ['D']
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
    public void amethod(int i) { }
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
  }
]

export default section1
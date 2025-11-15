const sampleTest2 = [
  {
    id: 's2q1',
    question: 'Which of the following are Java keywords? Select the three correct answers.',
    options: [
      { id: 'A', text: 'external' },
      { id: 'B', text: 'implement' },
      { id: 'C', text: 'throw' },
      { id: 'D', text: 'void' },
      { id: 'E', text: 'integer' },
      { id: 'F', text: 'private' },
      { id: 'G', text: 'synchronize' },
      { id: 'H', text: 'unsigned' }
    ],
    correctAnswers: ['C', 'D', 'F']
  },
  {
    id: 's2q2',
    question: 'Which of the following are legal definitions of the main method that can be used to execute a class? Select the one correct answer.',
    options: [
      { id: 'A', text: 'public void main(String args)' },
      { id: 'B', text: 'public static int main(String args[])' },
      { id: 'C', text: 'public static void main(String args[])' },
      { id: 'D', text: 'static public void MAIN(String args[])' },
      { id: 'E', text: 'public static void main(string args[])' },
      { id: 'F', text: 'public static void main(String *args)' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's2q3',
    question: 'Which of these are legal array declarations or definitions? Select the two correct answers.',
    options: [
      { id: 'A', text: 'int[] []x[];' },
      { id: 'B', text: 'int *x;' },
      { id: 'C', text: 'int x[5];' },
      { id: 'D', text: 'int[] x = {1,2,3};' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's2q4',
    question: 'Name the collection interface used to represent a sequence of numbers in a fixed order.',
    options: [
      { id: 'A', text: 'List' },
      { id: 'B', text: 'Set' },
      { id: 'C', text: 'Map' },
      { id: 'D', text: 'Collection' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q5',
    question: 'The class Hashtable is used to implement which collection interface? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Table' },
      { id: 'B', text: 'List' },
      { id: 'C', text: 'Set' },
      { id: 'D', text: 'SortedSet' },
      { id: 'E', text: 'Map' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q6',
    question: 'What gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `class test {
  public static void main(String args[]) {
    int i;
    do {
      i++;
    }
    while(i < 0);
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: 'The program does not compile as i is not initialized.' },
      { id: 'B', text: 'The program compiles but does not run.' },
      { id: 'C', text: 'The program compiles and runs but does not print anything.' },
      { id: 'D', text: 'The program prints 0.' },
      { id: 'E', text: 'The program prints 1.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q7',
    question: 'What gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `class xyz {
  static int i;
  public static void main(String args[]) {
    while (i < 0) {
      i--;
    }
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: 'The program does not compile as i is not initialized.' },
      { id: 'B', text: 'The program compiles but does not run.' },
      { id: 'C', text: 'The program compiles and runs but does not print anything.' },
      { id: 'D', text: 'The program prints 0.' },
      { id: 'E', text: 'The program prints 1.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's2q8',
    question: 'What gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `class xyz {
  public static void main(String args[]) {
    int i,j,k;
    for (i = 0; i < 3; i++) {
      for(j=1; j < 4; j++) {
        for(k=2; k<5; k++) {
          if((i == j) && (j==k))
            System.out.println(i);
        }
      }
    }
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's2q9',
    question: 'Using up to four characters what is the Java representation of the number 23 in hex?',
    options: [
      { id: 'A', text: '0x17' },
      { id: 'B', text: '0X17' },
      { id: 'C', text: '17' },
      { id: 'D', text: '23' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q10',
    question: 'What gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `class test {
  static boolean check;
  public static void main(String args[]) {
    int i;
    if(check == true)
      i=1;
    else
      i=2;
    if(i=2) i=i+2;
    else i = i + 4;
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: '3' },
      { id: 'B', text: '4' },
      { id: 'C', text: '5' },
      { id: 'D', text: '6' },
      { id: 'E', text: 'The program does not compile because of the statement if(i=2)' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q11',
    question: 'Select the one correct answer. The smallest number that can be represented using short primitive type in Java is:',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '-127' },
      { id: 'C', text: '-128' },
      { id: 'D', text: '-16384' },
      { id: 'E', text: '-32768' },
      { id: 'F', text: 'The smallest number is compiler dependent.' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q12',
    question: 'Given the following declarations, which of the assignments given in the options below would compile? Select the two correct answers.',
    code: `int i = 5;
boolean t = true;
float f = 2.3F;
double d = 2.3;`,
    options: [
      { id: 'A', text: 't = (boolean) i;' },
      { id: 'B', text: 'f = d;' },
      { id: 'C', text: 'd = i;' },
      { id: 'D', text: 'i = 5;' },
      { id: 'E', text: 'f = 2.8;' }
    ],
    correctAnswers: ['C', 'D']
  },
  {
    id: 's2q13',
    question: 'What gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `public class incr {
  public static void main(String args[]) {
    int i , j;
    i = j = 3;
    int n = 2 * ++i;
    int m = 2 * j++;
    System.out.println(i + " " + j + " " + n + " " + m);
  }
}`,
    options: [
      { id: 'A', text: '4 4 8 6' },
      { id: 'B', text: '4 4 8 8' },
      { id: 'C', text: '4 4 6 6' },
      { id: 'D', text: '4 3 8 6' },
      { id: 'E', text: '4 3 8 8' },
      { id: 'F', text: '4 4 6 8' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q14',
    question: 'Given two non-negative integers a and b and a String str, what is the number of characters in the expression str.substring(a,b)? Select the one correct answer.',
    options: [
      { id: 'A', text: 'a + b' },
      { id: 'B', text: 'a – b' },
      { id: 'C', text: 'b – a – 1' },
      { id: 'D', text: 'b – a + 1' },
      { id: 'E', text: 'b – a' },
      { id: 'F', text: 'b' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q15',
    question: 'What is the result of compiling and running the following program? Select the one correct answer.',
    code: `class test {
  public static void main(String args[]) {
    char ch;
    String test2 = "abcd";
    String test = new String("abcd");
    if(test.equals(test2)) {
      if(test == test2)
        ch = test.charAt(0);
      else
        ch = test.charAt(1);
    }
    else {
      if(test == test2)
        ch = test.charAt(2);
      else
        ch = test.charAt(3);
    }
    System.out.println(ch);
  }
}`,
    options: [
      { id: 'A', text: 'a' },
      { id: 'B', text: 'b' },
      { id: 'C', text: 'c' },
      { id: 'D', text: 'd' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's2q16',
    question: 'What is the result of compiling and running the following program? Select the one correct answer.',
    code: `class test {
  public static void main(String args[]) {
    int i,j=0;
    for(i=10;i<0;i--) { j++; }
    switch(j) {
      case (0) :
        j=j+1;
      case(1):
        j=j+2;
        break;
      case (2) :
        j=j+3;
        break;
      case (10) :
        j=j+10;
        break;
      default :
        break;
    }
    System.out.println(j);
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '10' },
      { id: 'F', text: '20' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's2q17',
    question: 'What is the number displayed when the following program is compiled and run?',
    code: `class test {
  public static void main(String args[]) {
    test test1 = new test();
    System.out.println(test1.xyz(100));
  }
  public int xyz(int num) {
    if(num == 1) return 1;
    else return(xyz(num-1) + num);
  }
}`,
    options: [
      { id: 'A', text: '100' },
      { id: 'B', text: '5050' },
      { id: 'C', text: '4950' },
      { id: 'D', text: '101' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's2q18',
    question: 'Which of the following statements are true? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Arrays in Java are essentially objects.' },
      { id: 'B', text: 'It is not possible to assign one array to another. Individual elements of array can however be assigned.' },
      { id: 'C', text: 'Array elements are indexed from 1 to size of array.' },
      { id: 'D', text: 'If a method tries to access an array element beyond its range, a compile warning is generated.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q19',
    question: 'Which expression can be used to access the last element of an array? Select the one correct answer.',
    options: [
      { id: 'A', text: 'array[array.length()]' },
      { id: 'B', text: 'array[array.length() – 1]' },
      { id: 'C', text: 'array[array.length]' },
      { id: 'D', text: 'array[array.length – 1]' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's2q20',
    question: 'What is the result of compiling and running the following program? Select the one correct answer.',
    code: `class test {
  public static void main(String args[]) {
    int[] arr = {1,2,3,4};
    call_array(arr[0], arr);
    System.out.println(arr[0] + "," + arr[1]);
  }
  static void call_array(int i, int arr[]) {
    arr[i] = 6;
    i = 5;
  }
}`,
    options: [
      { id: 'A', text: '1,2' },
      { id: 'B', text: '5,2' },
      { id: 'C', text: '1,6' },
      { id: 'D', text: '5,6' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's2q21',
    question: 'Which of the following statements are correct? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Each Java file must have exactly one package statement to specify where the class is stored.' },
      { id: 'B', text: 'If a Java file has both import and package statement, the import statement must come before package statement.' },
      { id: 'C', text: 'A Java file has at least one class defined.' },
      { id: 'D', text: 'If a Java file has a package statement, it must be the first statement (except comments).' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's2q22',
    question: 'What happens when the following program is compiled and then the command "java check it out" is executed? Select the one correct answer.',
    code: `class check {
  public static void main(String args[]) {
    System.out.println(args[args.length-2]);
  }
}`,
    options: [
      { id: 'A', text: 'The program does not compile.' },
      { id: 'B', text: 'The program compiles but generates ArrayIndexOutOfBoundsException exception.' },
      { id: 'C', text: 'The program prints java' },
      { id: 'D', text: 'The program prints check' },
      { id: 'E', text: 'The program prints it' },
      { id: 'F', text: 'The program prints out' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q23',
    question: 'What all gets printed when the following code is compiled and run? Select the three correct answers.',
    code: `class test {
  public static void main(String args[]) {
    int i[] = {0,1};
    try {
      i[2] = i[0] + i[1];
    }
    catch(ArrayIndexOutOfBoundsException e1) {
      System.out.println("1");
    }
    catch(Exception e2) {
      System.out.println("2");
    }
    finally {
      System.out.println(3);
    }
    System.out.println("4");
  }
}`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswers: ['A', 'C', 'D']
  },
  {
    id: 's2q24',
    question: 'A program needs to store the name, salary, and age of employees in years. Which of the following data types should be used to create the Employee class? Select the three correct answers.',
    options: [
      { id: 'A', text: 'char' },
      { id: 'B', text: 'boolean' },
      { id: 'C', text: 'Boolean' },
      { id: 'D', text: 'String' },
      { id: 'E', text: 'int' },
      { id: 'F', text: 'double' }
    ],
    correctAnswers: ['D', 'E', 'F']
  },
  {
    id: 's2q25',
    question: 'To make a variable defined in a class accessible only to methods defined in the classes in same package, which of the following keyword should be used? Select the one correct answer.',
    options: [
      { id: 'A', text: 'By using the keyword package before the variable.' },
      { id: 'B', text: 'By using the keyword private before the variable.' },
      { id: 'C', text: 'By using the keyword protected before the variable.' },
      { id: 'D', text: 'By using the keyword public before the variable.' },
      { id: 'E', text: 'The variable should not be preceded by any of the above mentioned keywords.' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's2q26',
    question: 'In implementing two classes Employee and Manager, such that each Manager is an Employee, what should be the relationship between these classes? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Employee should be the base class of Manager class.' },
      { id: 'B', text: 'Manager should be the base class of Employee class.' },
      { id: 'C', text: 'Manager class should include the Employee class as a data member.' },
      { id: 'D', text: 'Employee class should include Manager class as a data member.' },
      { id: 'E', text: 'The Manager and Employee should not have any relationship.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's2q27',
    question: 'Select the one most appropriate answer. What is the purpose of method parseInt defined in Integer class?',
    options: [
      { id: 'A', text: 'The method converts an integer to a String.' },
      { id: 'B', text: 'The method is used to convert String to an integer, assuming that the String represents an integer.' },
      { id: 'C', text: 'The method is used to convert String to Integer class, assuming that the String represents an integer.' },
      { id: 'D', text: 'The method converts the Integer object to a String.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's2q28',
    question: 'What should be done to invoke the run() method on a thread for an object derived from the Thread class? Select the one correct answer.',
    options: [
      { id: 'A', text: 'The run() method should be directly invoked on the Object.' },
      { id: 'B', text: 'The start() method should be directly invoked on the Object.' },
      { id: 'C', text: 'The init() method should be directly invoked on the Object.' },
      { id: 'D', text: 'The creation of the object using the new operator would create a new thread and invoke its run() method.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's2q29',
    question: 'What is the default priority of a newly created thread?',
    options: [
      { id: 'A', text: 'MIN_PRIORITY (which is defined as 1 in the Thread class.)' },
      { id: 'B', text: 'NORM_PRIORITY (which is defined as 5 in the Thread class.)' },
      { id: 'C', text: 'MAX_PRIORITY (which is defined as 10 in the Thread class.)' },
      { id: 'D', text: 'A thread inherits the priority of its parent thread.' }
    ],
    correctAnswers: ['D']
  }
];

export default sampleTest2;

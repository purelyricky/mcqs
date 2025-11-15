const sampleTest1 = [
  {
    id: 's1q1',
    question: 'Which declaration of the main method below would allow a class to be started as a standalone program? Select the one correct answer.',
    options: [
      { id: 'A', text: 'public static int main(char args[])' },
      { id: 'B', text: 'public static void main(String args[])' },
      { id: 'C', text: 'public static void MAIN(String args[])' },
      { id: 'D', text: 'public static void main(String args)' },
      { id: 'E', text: 'public static void main(char args[])' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q2',
    question: 'What all gets printed when the following code is compiled and run? Select the three correct answers.',
    code: `public class xyz {
  public static void main(String args[]) {
    for(int i = 0; i < 2; i++) {
      for(int j = 2; j>= 0; j--) {
        if(i == j) break;
        System.out.println("i=" + i + " j="+j);
      }
    }
  }
}`,
    options: [
      { id: 'A', text: 'i=0 j=0' },
      { id: 'B', text: 'i=0 j=1' },
      { id: 'C', text: 'i=0 j=2' },
      { id: 'D', text: 'i=1 j=0' },
      { id: 'E', text: 'i=1 j=1' },
      { id: 'F', text: 'i=1 j=2' },
      { id: 'G', text: 'i=2 j=0' },
      { id: 'H', text: 'i=2 j=1' },
      { id: 'I', text: 'i=2 j=2' }
    ],
    correctAnswers: ['B', 'C', 'F']
  },
  {
    id: 's1q3',
    question: 'What gets printed when the following code is compiled and run with the following command: java test 2? Select the one correct answer.',
    code: `public class test {
  public static void main(String args[]) {
    Integer intObj=Integer.valueOf(args[args.length-1]);
    int i = intObj.intValue();
    if(args.length > 1)
      System.out.println(i);
    if(args.length > 0)
      System.out.println(i - 1);
    else
      System.out.println(i - 2);
  }
}`,
    options: [
      { id: 'A', text: 'test' },
      { id: 'B', text: 'test -1' },
      { id: 'C', text: '0' },
      { id: 'D', text: '1' },
      { id: 'E', text: '2' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q4',
    question: 'In Java technology what expression can be used to represent number of elements in an array named arr?',
    options: [
      { id: 'A', text: 'arr.length' },
      { id: 'B', text: 'arr.length()' },
      { id: 'C', text: 'arr.size' },
      { id: 'D', text: 'arr.size()' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q5',
    question: 'How would the number 5 be represented in hex using up-to four characters?',
    options: [
      { id: 'A', text: '0x5' },
      { id: 'B', text: '0x05' },
      { id: 'C', text: '0X05' },
      { id: 'D', text: '0X5' },
      { id: 'E', text: 'Any of the above' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q6',
    question: 'Which of the following is a Java keyword? Select the four correct answers.',
    options: [
      { id: 'A', text: 'extern' },
      { id: 'B', text: 'synchronized' },
      { id: 'C', text: 'volatile' },
      { id: 'D', text: 'friend' },
      { id: 'E', text: 'friendly' },
      { id: 'F', text: 'transient' },
      { id: 'G', text: 'this' },
      { id: 'H', text: 'then' }
    ],
    correctAnswers: ['B', 'C', 'F', 'G']
  },
  {
    id: 's1q7',
    question: 'Is the following statement true or false? The constructor of a class must not have a return type.',
    options: [
      { id: 'A', text: 'true' },
      { id: 'B', text: 'false' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q8',
    question: 'What is the number of bytes used by Java primitive long? Select the one correct answer.',
    options: [
      { id: 'A', text: 'The number of bytes is compiler dependent.' },
      { id: 'B', text: '2' },
      { id: 'C', text: '4' },
      { id: 'D', text: '8' },
      { id: 'E', text: '64' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q9',
    question: 'What is returned when the method substring(2, 4) is invoked on the string "example"? Include the answer in quotes as the result is of type String.',
    options: [
      { id: 'A', text: '"am"' },
      { id: 'B', text: '"xa"' },
      { id: 'C', text: '"ex"' },
      { id: 'D', text: '"mp"' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q10',
    question: 'Which of the following is correct? Select the two correct answers.',
    options: [
      { id: 'A', text: 'The native keyword indicates that the method is implemented in another language like C/C++.' },
      { id: 'B', text: 'The only statements that can appear before an import statement in a Java file are comments.' },
      { id: 'C', text: 'The method definitions inside interfaces are public and abstract. They cannot be private or protected.' },
      { id: 'D', text: 'A class constructor may have public or protected keyword before them, nothing else.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q11',
    question: 'What is the result of evaluating the expression 14 ^ 23? Select the one correct answer.',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '37' },
      { id: 'C', text: '6' },
      { id: 'D', text: '31' },
      { id: 'E', text: '17' },
      { id: 'F', text: '9' },
      { id: 'G', text: '24' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q12',
    question: 'Which of the following are true? Select the one correct answer.',
    options: [
      { id: 'A', text: '&& operator is used for short-circuited logical AND.' },
      { id: 'B', text: '~ operator is the bit-wise XOR operator.' },
      { id: 'C', text: '| operator is used to perform bitwise OR and also short-circuited logical OR.' },
      { id: 'D', text: 'The unsigned right shift operator in Java is >>.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q13',
    question: 'Name the access modifier which when used with a method, makes it available to all the classes in the same package and to all the subclasses of the class.',
    options: [
      { id: 'A', text: 'protected' },
      { id: 'B', text: 'public' },
      { id: 'C', text: 'private' },
      { id: 'D', text: 'package' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q14',
    question: 'Which of the following is true? Select the two correct answers.',
    options: [
      { id: 'A', text: 'A class that is abstract may not be instantiated.' },
      { id: 'B', text: 'The final keyword indicates that the body of a method is to be found elsewhere. The code is written in non-Java language, typically in C/C++.' },
      { id: 'C', text: 'A static variable indicates there is only one copy of that variable.' },
      { id: 'D', text: 'A method defined as private indicates that it is accessible to all other classes in the same package.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q15',
    question: 'What all gets printed when the following program is compiled and run? Select the two correct answers.',
    code: `public class test {
  public static void main(String args[]) {
    int i, j=1;
    i = (j>1)?2:1;
    switch(i) {
      case 0: System.out.println(0); break;
      case 1: System.out.println(1);
      case 2: System.out.println(2); break;
      case 3: System.out.println(3); break;
    }
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q16',
    question: 'What all gets printed when the following program is compiled and run? Select the one correct answer.',
    code: `public class test {
  public static void main(String args[]) {
    int i=0, j=2;
    do {
      i=++i;
      j--;
    } while(j>0);
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: 'The program does not compile because of statement "i=++i;"' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q17',
    question: 'What all gets printed when the following gets compiled and run? Select the three correct answers.',
    code: `public class test {
  public static void main(String args[])
  {
    int i=1, j=1;
    try
    {
      i++;
      j--;
      if(i/j > 1)
        i++;
    }
    catch(ArithmeticException e)
    {
      System.out.println(0);
    }
    catch(ArrayIndexOutOfBoundsException e)
    {
      System.out.println(1);
    }
    catch(Exception e)
    {
      System.out.println(2);
    }
    finally
    {
      System.out.println(3);
    }
    System.out.println(4);
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswers: ['A', 'D', 'E']
  },
  {
    id: 's1q18',
    question: 'What all gets printed when the following gets compiled and run? Select the two correct answers.',
    code: `public class test {
  public static void main(String args[]) {
    int i=1, j=1;
    try
    {
      i++;
      j--;
      if(i == j)
        i++;
    }
    catch(ArithmeticException e)
    {
      System.out.println(0);
    }
    catch(ArrayIndexOutOfBoundsException e)
    {
      System.out.println(1);
    }
    catch(Exception e)
    {
      System.out.println(2);
    }
    finally
    {
      System.out.println(3);
    }
    System.out.println(4);
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '3' },
      { id: 'E', text: '4' }
    ],
    correctAnswers: ['D', 'E']
  },
  {
    id: 's1q19',
    question: 'What all gets printed when the following gets compiled and run? Select the two correct answers.',
    code: `public class test {
  public static void main(String args[]) {
    String s1 = "abc";
    String s2 = "abc";
    if(s1 == s2)
      System.out.println(1);
    else
      System.out.println(2);
    if(s1.equals(s2))
      System.out.println(3);
    else
      System.out.println(4);
  }
}`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q20',
    question: 'What all gets printed when the following gets compiled and run? Select the two correct answers.',
    code: `public class test {
  public static void main(String args[]) {
    String s1 = "abc";
    String s2 = new String("abc");
    if(s1 == s2)
      System.out.println(1);
    else
      System.out.println(2);
    if(s1.equals(s2))
      System.out.println(3);
    else
      System.out.println(4);
  }
}`,
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '2' },
      { id: 'C', text: '3' },
      { id: 'D', text: '4' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q21',
    question: 'Which of the following are legal array declarations? Select the three correct answers.',
    options: [
      { id: 'A', text: 'int i[5][];' },
      { id: 'B', text: 'int i[][];' },
      { id: 'C', text: 'int []i[];' },
      { id: 'D', text: 'int i[5][5];' },
      { id: 'E', text: 'int[][] a;' }
    ],
    correctAnswers: ['B', 'C', 'E']
  },
  {
    id: 's1q22',
    question: 'What is the range of values that can be specified for an int? Select the one correct answer.',
    options: [
      { id: 'A', text: 'The range of values is compiler dependent.' },
      { id: 'B', text: '-2³¹ to 2³¹ – 1' },
      { id: 'C', text: '-2³¹-1 to 2³¹' },
      { id: 'D', text: '-2¹⁵ to 2¹⁵ – 1' },
      { id: 'E', text: '-2¹⁵-1 to 2¹⁵' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q23',
    question: 'How can you ensure that the memory allocated by an object is freed? Select the one correct answer.',
    options: [
      { id: 'A', text: 'By invoking the free method on the object.' },
      { id: 'B', text: 'By calling system.gc() method.' },
      { id: 'C', text: 'By setting all references to the object to new values (say null).' },
      { id: 'D', text: 'Garbage collection cannot be forced. The programmer cannot force the JVM to free the memory used by an object.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q24',
    question: 'What gets printed when the following code is compiled and run? Select the one correct answer.',
    code: `public class test {
  public static void main(String args[]) {
    int i = 1;
    do
    {
      i--;
    } while (i > 2);
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '1' },
      { id: 'C', text: '2' },
      { id: 'D', text: '-1' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q25',
    question: 'Which of these is a legal definition of a method named m assuming it throws IOException, and returns void. Also assume that the method does not take any arguments. Select the one correct answer.',
    options: [
      { id: 'A', text: 'void m() throws IOException{}' },
      { id: 'B', text: 'void m() throw IOException{}' },
      { id: 'C', text: 'void m(void) throws IOException{}' },
      { id: 'D', text: 'm() throws IOException{}' },
      { id: 'E', text: 'void m() {} throws IOException' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q26',
    question: 'Which of the following are legal identifier names in Java? Select the two correct answers.',
    options: [
      { id: 'A', text: '%abcd' },
      { id: 'B', text: '$abcd' },
      { id: 'C', text: '1abcd' },
      { id: 'D', text: 'package' },
      { id: 'E', text: '_a_long_name' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's1q27',
    question: 'At what stage in the following method does the object initially referenced by s become available for garbage collection? Select the one correct answer.',
    code: `void method X() {
  String r = new String("abc");
  String s = new String("abc");
  r = r+1; //1
  r = null; //2
  s = s + r; //3
} //4`,
    options: [
      { id: 'A', text: 'Before statement labeled 1' },
      { id: 'B', text: 'Before statement labeled 2' },
      { id: 'C', text: 'Before statement labeled 3' },
      { id: 'D', text: 'Before statement labeled 4' },
      { id: 'E', text: 'Never.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q28',
    question: 'Assuming the declaration: String s = new String("xyz"); Which of the following statements would compile? Select the one correct answer.',
    options: [
      { id: 'A', text: 's = 2 * s;' },
      { id: 'B', text: 'int i = s[0];' },
      { id: 'C', text: 's = s + s;' },
      { id: 'D', text: 's = s >> 2;' },
      { id: 'E', text: 'None of the above.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q29',
    question: 'Which of the following statements related to Garbage Collection are correct? Select the two correct answers.',
    options: [
      { id: 'A', text: 'It is possible for a program to free memory at a given time.' },
      { id: 'B', text: 'Garbage Collection feature of Java ensures that the program never runs out of memory.' },
      { id: 'C', text: 'It is possible for a program to make an object available for Garbage Collection.' },
      { id: 'D', text: 'The finalize method of an object is invoked before garbage collection is performed on the object.' }
    ],
    correctAnswers: ['C', 'D']
  },
  {
    id: 's1q30',
    question: 'If a base class has a method defined as void method() { }. Which of the following are legal prototypes in a derived class of this class? Select the two correct answers.',
    options: [
      { id: 'A', text: 'void method() { }' },
      { id: 'B', text: 'int method() { return 0;}' },
      { id: 'C', text: 'void method(int i) { }' },
      { id: 'D', text: 'private void method() { }' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q31',
    question: 'In which all cases does an exception get generated? Select the two correct answers.',
    code: `int i = 0, j = 1;`,
    options: [
      { id: 'A', text: 'if((i == 0) || (j/i == 1))' },
      { id: 'B', text: 'if((i == 0) | (j/i == 1))' },
      { id: 'C', text: 'if((i != 0) && (j/i == 1))' },
      { id: 'D', text: 'if((i != 0) & (j/i == 1))' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's1q32',
    question: 'Which of the following statements are true? Select the two correct answers.',
    options: [
      { id: 'A', text: 'The wait method defined in the Thread class, can be used to convert a thread from Running state to Waiting state.' },
      { id: 'B', text: 'The wait(), notify(), and notifyAll() methods must be executed in synchronized code.' },
      { id: 'C', text: 'The notify() and notifyAll() methods can be used to signal and move waiting threads to ready-to-run state.' },
      { id: 'D', text: 'The Thread class is an abstract class.' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q33',
    question: 'Which keyword when applied on a method indicates that only one thread should execute the method at a time? Select the one correct answer.',
    options: [
      { id: 'A', text: 'transient' },
      { id: 'B', text: 'volatile' },
      { id: 'C', text: 'synchronized' },
      { id: 'D', text: 'native' },
      { id: 'E', text: 'static' },
      { id: 'F', text: 'final' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q34',
    question: 'What is the name of the Collection interface used to represent elements in a sequence (in a particular order)? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Collection' },
      { id: 'B', text: 'Set' },
      { id: 'C', text: 'List' },
      { id: 'D', text: 'Map' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q35',
    question: 'Which of these classes implement the Collection interface SortedMap? Select the one correct answer.',
    options: [
      { id: 'A', text: 'HashMap' },
      { id: 'B', text: 'Hashtable' },
      { id: 'C', text: 'TreeMap' },
      { id: 'D', text: 'HashSet' },
      { id: 'E', text: 'TreeSet' },
      { id: 'F', text: 'Vector' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's1q36',
    question: 'Which of the following are true about interfaces? Select the two correct answers.',
    options: [
      { id: 'A', text: 'Methods declared in interfaces are implicitly private.' },
      { id: 'B', text: 'Variables declared in interfaces are implicitly public, static, and final.' },
      { id: 'C', text: 'An interface can extend any number of interfaces.' },
      { id: 'D', text: 'The keyword implements indicate that an interface inherits from another.' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's1q37',
    question: 'Assume that class A extends class B, which extends class C. Also all the three classes implement the method test(). How can a method in a class A invoke the test() method defined in class C (without creating a new instance of class C)? Select the one correct answer.',
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
    id: 's1q38',
    question: 'What is the return type of method round(double d) defined in Math class?',
    options: [
      { id: 'A', text: 'long' },
      { id: 'B', text: 'int' },
      { id: 'C', text: 'double' },
      { id: 'D', text: 'float' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q39',
    question: 'What gets written on the screen when the following program is compiled and run? Select the one right answer.',
    code: `public class test {
  public static void main(String args[]) {
    int i;
    float f = 2.3f;
    double d = 2.7;
    i = ((int)Math.ceil(f)) * ((int)Math.round(d));
    System.out.println(i);
  }
}`,
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '5' },
      { id: 'C', text: '6' },
      { id: 'D', text: '6.1' },
      { id: 'E', text: '9' }
    ],
    correctAnswers: ['E']
  },
  {
    id: 's1q40',
    question: 'Is the following statement true or false? As the toString method is defined in the Object class, System.out.println can be used to print any object.',
    options: [
      { id: 'A', text: 'true' },
      { id: 'B', text: 'false' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q41',
    question: 'Which of these classes defined in java.io and used for file-handling are abstract? Select the two correct answers.',
    options: [
      { id: 'A', text: 'InputStream' },
      { id: 'B', text: 'PrintStream' },
      { id: 'C', text: 'Reader' },
      { id: 'D', text: 'FileInputStream' },
      { id: 'E', text: 'FileWriter' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's1q42',
    question: 'Name the collection interface used to represent collections that maintain unique elements.',
    options: [
      { id: 'A', text: 'Set' },
      { id: 'B', text: 'List' },
      { id: 'C', text: 'Map' },
      { id: 'D', text: 'Collection' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q43',
    question: 'What is the result of compiling and running the following program?',
    code: `public class test {
  public static void main(String args[]) {
    String str1="abc";
    String str2="def";
    String str3=str1.concat(str2);
    str1.concat(str2);
    System.out.println(str1);
  }
}`,
    options: [
      { id: 'A', text: 'abc' },
      { id: 'B', text: 'def' },
      { id: 'C', text: 'abcabc' },
      { id: 'D', text: 'abcdef' },
      { id: 'E', text: 'defabc' },
      { id: 'F', text: 'abcdefdef' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q44',
    question: 'Select the one correct answer. The number of characters in an object of a class String is given by:',
    options: [
      { id: 'A', text: 'The member variable called size' },
      { id: 'B', text: 'The member variable called length' },
      { id: 'C', text: 'The method size() returns the number of characters.' },
      { id: 'D', text: 'The method length() returns the number of characters.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q45',
    question: 'Select the one correct answer. Which method defined in Integer class can be used to convert an Integer object to primitive int type?',
    options: [
      { id: 'A', text: 'valueOf' },
      { id: 'B', text: 'intValue' },
      { id: 'C', text: 'getInt' },
      { id: 'D', text: 'getInteger' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's1q46',
    question: 'Name the return type of method hashCode() defined in Object class, which is used to get the unique hash value of an Object.',
    options: [
      { id: 'A', text: 'int' },
      { id: 'B', text: 'long' },
      { id: 'C', text: 'String' },
      { id: 'D', text: 'Object' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's1q47',
    question: 'Which of the following are correct? Select the one correct answer.',
    options: [
      { id: 'A', text: 'An import statement, if defined, must always be the first non-comment statement of the file.' },
      { id: 'B', text: 'private members are accessible to all classes in the same package.' },
      { id: 'C', text: 'An abstract class can be declared as final.' },
      { id: 'D', text: 'Local variables cannot be declared as static.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's1q48',
    question: 'Name the keyword that makes a variable belong to a class, rather than being defined for each instance of the class. Select the one correct answer.',
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
    id: 's1q49',
    question: 'Which of these are core interfaces in the collection framework? Select the one correct answer.',
    options: [
      { id: 'A', text: 'Tree' },
      { id: 'B', text: 'Stack' },
      { id: 'C', text: 'Queue' },
      { id: 'D', text: 'Array' },
      { id: 'E', text: 'LinkedList' },
      { id: 'F', text: 'Map' }
    ],
    correctAnswers: ['F']
  },
  {
    id: 's1q50',
    question: 'Which of these statements are true? Select the two correct answers.',
    options: [
      { id: 'A', text: 'For each try block there must be at least one catch block defined.' },
      { id: 'B', text: 'A try block may be followed by any number of finally blocks.' },
      { id: 'C', text: 'A try block must be followed by at least one finally or catch block.' },
      { id: 'D', text: 'If both catch and finally blocks are defined, catch block must precede the finally block.' }
    ],
    correctAnswers: ['C', 'D']
  }
];

export default sampleTest1;

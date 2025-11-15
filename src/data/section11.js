const section11 = [
  {
    id: 's11q1',
    question: 'Choose all valid forms of the argument list for the FileOutputStream constructor shown below:',
    options: [
      { id: 'A', text: 'FileOutputStream( FileDescriptor fd )' },
      { id: 'B', text: 'FileOutputStream( String n, boolean a )' },
      { id: 'C', text: 'FileOutputStream( boolean a )' },
      { id: 'D', text: 'FileOutputStream()' },
      { id: 'E', text: 'FileOutputStream( File f )' }
    ],
    correctAnswers: ['A', 'B', 'E']
  },
  {
    id: 's11q2',
    question: 'A "mode" argument such as "r" or "rw" is required in the constructor for the class(es):',
    options: [
      { id: 'A', text: 'DataInputStream' },
      { id: 'B', text: 'InputStream' },
      { id: 'C', text: 'RandomAccessFile' },
      { id: 'D', text: 'File' },
      { id: 'E', text: 'None of the above' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's11q3',
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
    id: 's11q4',
    question: 'If raf is a RandomAccessFile, what is the result of compiling and executing the following code? raf.seek( raf.length() );',
    options: [
      { id: 'A', text: 'The code will not compile.' },
      { id: 'B', text: 'An IOException will be thrown.' },
      { id: 'C', text: 'The file pointer will be positioned immediately before the last character of the file.' },
      { id: 'D', text: 'The file pointer will be positioned immediately after the last character of the file.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's11q5',
    question: 'How can you change the current working directory using an instance of the File class called FileName?',
    options: [
      { id: 'A', text: 'FileName.chdir("DirName")' },
      { id: 'B', text: 'FileName.cd("DirName")' },
      { id: 'C', text: 'FileName.cwd("DirName")' },
      { id: 'D', text: 'The File class does not support directly changing the current directory.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's11q6',
    question: 'Given the following code, what code would be most likely for the body of the ioCall method?',
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
      { id: 'A', text: 'public void ioCall ()throws IOException{\nDataInputStream din = new DataInputStream(System.in);\ndin.readChar();\n}' },
      { id: 'B', text: 'public void ioCall ()throw IOException{\nDataInputStream din = new DataInputStream(System.in);\ndin.readChar();\n}' },
      { id: 'C', text: 'public void ioCall (){\nDataInputStream din = new DataInputStream(System.in);\ndin.readChar();\n}' },
      { id: 'D', text: 'public void ioCall throws IOException(){\nDataInputStream din = new DataInputStream(System.in);\ndin.readChar();\n}' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's11q7',
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
    id: 's11q8',
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
    id: 's11q9',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `import java.io.*;

class Base{
public static void amethod()throws FileNotFoundException{}
}

public class ExcepDemo extends Base{
public static void main(String argv[]){
       ExcepDemo e = new ExcepDemo();
}
public static void amethod(){}

protected ExcepDemo(){
 try{
  DataInputStream din = new DataInputStream(System.in);
  System.out.println("Pausing");
  din.readChar();
  System.out.println("Continuing");
  this.amethod();
  }catch(IOException ioe) {}
}

}`,
    options: [
      { id: 'A', text: 'Compile time error caused by protected constructor' },
      { id: 'B', text: 'Compile time error caused by amethod not declaring Exception' },
      { id: 'C', text: 'Runtime error caused by amethod not declaring Exception' },
      { id: 'D', text: 'Compile and run with output of "Pausing" and "Continuing" after a key is hit' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's11q10',
    question: 'Which of the following will compile without error?',
    options: [
      { id: 'A', text: 'File f = new File("/","autoexec.bat");' },
      { id: 'B', text: 'DataInputStream d = new DataInputStream(System.in);' },
      { id: 'C', text: 'OutputStreamWriter o = new OutputStreamWriter(System.out);' },
      { id: 'D', text: 'RandomAccessFile r = new RandomAccessFile("OutFile");' }
    ],
    correctAnswers: ['A', 'B', 'C']
  }
];

export default section11;
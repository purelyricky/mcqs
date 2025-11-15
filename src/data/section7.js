const section7 = [
  {
    id: 's7q1',
    question: 'What line of code would begin execution of a thread named myThread?',
    options: [
      { id: 'A', text: 'myThread.start();' },
      { id: 'B', text: 'myThread.run();' },
      { id: 'C', text: 'myThread.begin();' },
      { id: 'D', text: 'myThread.execute();' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's7q2',
    question: 'Which methods are required to implement the interface Runnable?',
    options: [
      { id: 'A', text: 'wait()' },
      { id: 'B', text: 'run()' },
      { id: 'C', text: 'stop()' },
      { id: 'D', text: 'update()' },
      { id: 'E', text: 'resume()' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's7q3',
    question: 'What class defines the wait() method?',
    options: [
      { id: 'A', text: 'Object' },
      { id: 'B', text: 'Thread' },
      { id: 'C', text: 'Runnable' },
      { id: 'D', text: 'System' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's7q4',
    question: 'For what reasons might a thread stop execution?',
    options: [
      { id: 'A', text: 'A thread with higher priority began execution.' },
      { id: 'B', text: 'The thread\'s wait() method was invoked.' },
      { id: 'C', text: 'The thread invoked its yield() method.' },
      { id: 'D', text: 'The thread\'s pause() method was invoked.' },
      { id: 'E', text: 'The thread\'s sleep() method was invoked.' }
    ],
    correctAnswers: ['A', 'B', 'C', 'E']
  },
  {
    id: 's7q5',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `class Background implements Runnable{ 
  int i=0; 
  public int run(){ 
         while(true){ 
                i++; 
                System.out.println("i="+i); 
            } //End while
     }//End run 
}//End class`,
    options: [
      { id: 'A', text: 'It will compile and the run method will print out the increasing value of i.' },
      { id: 'B', text: 'It will compile and calling start will print out the increasing value of i.' },
      { id: 'C', text: 'The code will cause an error at compile time.' },
      { id: 'D', text: 'Compilation will cause an error because while cannot take a parameter of true.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's7q6',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'No two methods can ever simultaneously execute synchronized methods on the same object.' },
      { id: 'B', text: 'Methods declared synchronized should not be recursive, since the object\'s monitor will not allow simultaneous invocations of the method.' },
      { id: 'C', text: 'Synchronized methods can only call other synchronized methods directly.' },
      { id: 'D', text: 'Inside a synchronized method, one can assume that no other threads are currently executing a method in the same class.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's7q7',
    question: 'When extending the Thread class to provide a thread\'s behavior, which methods should be overridden?',
    options: [
      { id: 'A', text: 'begin()' },
      { id: 'B', text: 'start()' },
      { id: 'C', text: 'run()' },
      { id: 'D', text: 'resume()' },
      { id: 'E', text: 'behavior()' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's7q8',
    question: 'Which of the following statements are true?',
    options: [
      { id: 'A', text: 'The class Thread is abstract.' },
      { id: 'B', text: 'The class Thread implements Runnable.' },
      { id: 'C', text: 'Classes implementing the Runnable interface must define a method called start();' },
      { id: 'D', text: 'Calling the method run() on an object implementing Runnable will produce a new thread.' },
      { id: 'E', text: 'Programs terminate when the last non-daemon thread ends.' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's7q9',
    question: 'Which of the following is the correct way to start a new thread?',
    options: [
      { id: 'A', text: 'Just create a new thread. The thread will start automatically.' },
      { id: 'B', text: 'Create a new thread and call the method begin() on the thread.' },
      { id: 'C', text: 'Create a new thread and call the method start() on the thread.' },
      { id: 'D', text: 'Create a new thread and call the method run() on the thread.' },
      { id: 'E', text: 'Create a new thread and call the method resume() on the thread.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's7q10',
    question: 'What will happen when you attempt to compile and run the following code?',
    code: `public class Bground extends Thread{

public static void main(String argv[]){
	        Bground b = new Bground();
        	b.run();
        }
        public void start(){
        	for (int i = 0; i <10; i++){
                	System.out.println("Value of i = " + i);
                }
        }

}`,
    options: [
      { id: 'A', text: 'A compile time error indicating that no run method is defined for the Thread class' },
      { id: 'B', text: 'A run time error indicating that no run method is defined for the Thread class' },
      { id: 'C', text: 'Clean compile and at run time the values 0 to 9 are printed out' },
      { id: 'D', text: 'Clean compile but no output at runtime' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's7q11',
    question: 'What can cause a thread to stop executing?',
    options: [
      { id: 'A', text: 'The program exits via a call to exit(0);' },
      { id: 'B', text: 'The priority of another thread is increased' },
      { id: 'C', text: 'A call to the stop method of the Thread class' },
      { id: 'D', text: 'A call to the halt method of the Thread class' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's7q12',
    question: 'Under what circumstances might you use the yield method of the Thread class?',
    options: [
      { id: 'A', text: 'To call from the currently running thread to allow another thread of the same priority to run' },
      { id: 'B', text: 'To call on a waiting thread to allow it to run' },
      { id: 'C', text: 'To allow a thread of higher priority to run' },
      { id: 'D', text: 'To call from the currently running thread with a parameter designating which thread should be allowed to run' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's7q13',
    question: 'Which of the following statements about threading are true?',
    options: [
      { id: 'A', text: 'You can only obtain a mutually exclusive lock on methods in a class that extends Thread or implements runnable' },
      { id: 'B', text: 'You can obtain a mutually exclusive lock on any object' },
      { id: 'C', text: 'A thread can obtain a mutex lock on a method declared with the keyword synchronized' },
      { id: 'D', text: 'Thread scheduling algorithms are platform dependent' }
    ],
    correctAnswers: ['B', 'C', 'D']
  },
  {
    id: 's7q14',
    question: 'Which of the following are methods of the Thread class?',
    options: [
      { id: 'A', text: 'yield()' },
      { id: 'B', text: 'sleep(long msec)' },
      { id: 'C', text: 'go()' },
      { id: 'D', text: 'stop()' }
    ],
    correctAnswers: ['A', 'B', 'D']
  },
  {
    id: 's7q15',
    question: 'What will happen if you compile/run this code?',
    code: `1:     public class Q1 extends Thread
2:     {
3:         public void run()
4:         {
5:            System.out.println("Before start method");
6:            this.stop();        
7:            System.out.println("After stop method");
8:        }
9:        
10:        public static void main(String[] args)
11:        {
12:            Q1 a = new Q1();
13:            a.start();
14:        }
15:    }`,
    options: [
      { id: 'A', text: 'Compilation error at line 7.' },
      { id: 'B', text: 'Runtime exception at line 7.' },
      { id: 'C', text: 'Prints "Before start method" and "After stop method".' },
      { id: 'D', text: 'Prints "Before start method" only.' }
    ],
    correctAnswers: ['D']
  }
];

export default section7;
const chapter13Html = [
  {
    id: 's13q1',
    question: 'What is the primary motivation behind using monitors in concurrent programming?',
    options: [
      { id: 'A', text: 'To simplify the syntax of semaphore operations.' },
      { id: 'B', text: 'To encapsulate shared data and synchronise access to it.' },
      { id: 'C', text: 'To eliminate the need for any form of explicit synchronisation.' },
      { id: 'D', text: 'To enable communication between distributed processes.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's13q2',
    question: 'Which of the following statements is true about the relationship between semaphores and monitors?',
    options: [
      { id: 'A', text: 'Semaphores are more powerful for expressing concurrency control than monitors.' },
      { id: 'B', text: 'Monitors can only be implemented using semaphores.' },
      { id: 'C', text: 'Semaphores and monitors are equally capable of expressing concurrency control.' },
      { id: 'D', text: 'Semaphores offer a more structured approach to synchronisation compared to monitors.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's13q3',
    question: 'How do monitors typically handle the scenario where multiple processes attempt to access shared data simultaneously?',
    options: [
      { id: 'A', text: 'Access is granted to the process with the highest priority.' },
      { id: 'B', text: 'Processes are queued, and access is granted one at a time.' },
      { id: 'C', text: 'The monitor dynamically allocates resources to prevent conflicts.' },
      { id: 'D', text: 'A random process is selected for access, ensuring fairness.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's13q4',
    question: 'What is the primary responsibility of the programmer when using monitors for cooperation synchronisation?',
    options: [
      { id: 'A', text: 'Defining the structure of the monitor itself.' },
      { id: 'B', text: 'Ensuring conditions like buffer underflow or overflow are avoided.' },
      { id: 'C', text: 'Implementing the queuing mechanism for process access.' },
      { id: 'D', text: 'Selecting the appropriate synchronisation primitives from the language.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's13q5',
    question: 'According to the provided text, which programming languages support monitors?',
    options: [
      { id: 'A', text: 'Only Concurrent Pascal and Modula.' },
      { id: 'B', text: 'Ada, Java, and C#.' },
      { id: 'C', text: 'Primarily languages focused on operating system development.' },
      { id: 'D', text: 'Languages that exclusively use message passing for concurrency.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's13q6',
    question: 'Which of the following languages was the first to incorporate monitors?',
    options: [
      { id: 'A', text: 'Java' },
      { id: 'B', text: 'Modula' },
      { id: 'C', text: 'Concurrent Pascal' },
      { id: 'D', text: 'Ada' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's13q7',
    question: 'What is the function of the `synchronized` keyword in Java when used with methods of a class designed as a monitor?',
    options: [
      { id: 'A', text: 'It signals other threads to wait until the method completes.' },
      { id: 'B', text: 'It allows multiple threads to access the method concurrently.' },
      { id: 'C', text: 'It defines a section of code where exceptions cannot occur.' },
      { id: 'D', text: 'It ensures that only one thread can access the method at a time.' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's13q8',
    question: 'In the context of the provided text, what does the term \'client unit\' refer to?',
    options: [
      { id: 'A', text: 'The specific hardware components involved in concurrent execution.' },
      { id: 'B', text: 'The underlying operating system that manages process scheduling.' },
      { id: 'C', text: 'Code segments or processes outside the monitor that interact with it.' },
      { id: 'D', text: 'The internal data structures and variables within the monitor.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's13q9',
    question: 'What is the primary distinction between competition synchronisation and cooperation synchronisation?',
    options: [
      { id: 'A', text: 'Competition synchronisation manages resource allocation while cooperation synchronisation handles process communication.' },
      { id: 'B', text: 'Competition synchronisation is essential for multi-core systems while cooperation synchronisation is only relevant for single-core systems.' },
      { id: 'C', text: 'Competition synchronisation prevents simultaneous access to shared resources while cooperation synchronisation coordinates tasks between processes.' },
      { id: 'D', text: 'Competition synchronisation is handled implicitly by the operating system while cooperation synchronisation requires explicit programmer intervention.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's13q10',
    question: 'What mechanism is employed in Ada 95 to provide a streamlined way of implementing monitors?',
    options: [
      { id: 'A', text: 'Semaphores' },
      { id: 'B', text: 'Protected objects' },
      { id: 'C', text: 'Conditional variables' },
      { id: 'D', text: 'Message queues' }
    ],
    correctAnswers: ['B']
  }
];

export default chapter13Html;

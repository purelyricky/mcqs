const mockTest1 = [
  {
    id: 'mt1q1',
    question: 'What is correct syntax for main method of a java class?',
    options: [
      { id: 'A', text: 'public static int main(String[] args)' },
      { id: 'B', text: 'public int main(String[] args)' },
      { id: 'C', text: 'public static void main(String[] args)' },
      { id: 'D', text: 'None of the above.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt1q2',
    question: 'Which of the following is not a keyword in java?',
    options: [
      { id: 'A', text: 'static' },
      { id: 'B', text: 'Boolean' },
      { id: 'C', text: 'void' },
      { id: 'D', text: 'private' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q3',
    question: 'What is a class in java?',
    options: [
      { id: 'A', text: 'A class is a blue print from which individual objects are created. A class can contain fields and methods to describe the behavior of an object.' },
      { id: 'B', text: 'class is a special data type.' },
      { id: 'C', text: 'class is used to allocate memory to a data type.' },
      { id: 'D', text: 'none of the above.' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q4',
    question: 'Primitive variables are stored on Stack.',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q5',
    question: 'Objects are stored on Stack.',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q6',
    question: 'Static functions can be accessed using null reference.',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q7',
    question: 'Can we compare int variable with a boolean variable?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q8',
    question: 'What of the following is the default value of a local variable?',
    options: [
      { id: 'A', text: 'null' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'Depends upon the type of variable' },
      { id: 'D', text: 'Not assigned' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt1q9',
    question: 'What of the following is the default value of an instance variable?',
    options: [
      { id: 'A', text: 'null' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'Depends upon the type of variable' },
      { id: 'D', text: 'Not assigned' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt1q10',
    question: 'What is the size of byte variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q11',
    question: 'What is the size of short variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q12',
    question: 'What is the size of int variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt1q13',
    question: 'What is the size of long variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt1q14',
    question: 'What is the size of float variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 'mt1q15',
    question: 'What is the size of double variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt1q16',
    question: 'What is the size of char variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: '64 bit' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q17',
    question: 'What is the size of boolean variable?',
    options: [
      { id: 'A', text: '8 bit' },
      { id: 'B', text: '16 bit' },
      { id: 'C', text: '32 bit' },
      { id: 'D', text: 'not precisely defined' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 'mt1q18',
    question: 'Is an empty .java file a valid source file?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q19',
    question: 'Can we have multiple classes in same java file?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q20',
    question: 'Can we have two public classes in one java file?',
    options: [
      { id: 'A', text: 'True' },
      { id: 'B', text: 'False' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q21',
    question: 'What is the default value of byte variable?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '0.0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: 'undefined' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q22',
    question: 'What is the default value of short variable?',
    options: [
      { id: 'A', text: '0.0' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: 'undefined' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q23',
    question: 'What is the default value of byte variable?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '0.0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: 'not defined' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 'mt1q24',
    question: 'What is the default value of short variable?',
    options: [
      { id: 'A', text: '0.0' },
      { id: 'B', text: '0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: 'not defined' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 'mt1q25',
    question: 'What is the default value of int variable?',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '0.0' },
      { id: 'C', text: 'null' },
      { id: 'D', text: 'not defined' }
    ],
    correctAnswers: ['A']
  }
];

export default mockTest1;

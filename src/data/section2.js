const section2 = [
  {
    id: 's2q1',
    question: `If size = 4, triArray looks like:

int[][] makeArray( int size ) 
{  
    int[][] triArray = new int[size][];
    int val=1;
    for( int i = 0; i < triArray.length; i++ ) {
        triArray[i] = new int[i+1];
        for( int j=0; j < triArray[i].length; j++ ) {
            triArray[i][j] = val++;
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
    question: `Given the variables defined below:

int one = 1;
int two = 2;
char initial = '2';
boolean flag = true;

Which of the following are valid?`,
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
  }
  // Add remaining questions from Section2.txt following the same pattern
]

export default section2
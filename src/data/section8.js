const section8 = [
  {
    id: 's8q1',
    question: 'This piece of code: TextArea ta = new TextArea( 10, 3 ); produces (select all correct statements):',
    options: [
      { id: 'A', text: 'a TextArea with 10 rows and up to 3 columns' },
      { id: 'B', text: 'a TextArea with a variable number of columns not less than 10 and 3 rows' },
      { id: 'C', text: 'a TextArea that may not contain more than 30 characters' },
      { id: 'D', text: 'a TextArea that can be edited' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's8q2',
    question: 'In the list below, which subclass(es) of Component cannot be directly instantiated?',
    options: [
      { id: 'A', text: 'Panel' },
      { id: 'B', text: 'Dialog' },
      { id: 'C', text: 'Container' },
      { id: 'D', text: 'Frame' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q3',
    question: 'Of the five Component methods listed below, only one is also a method of the class MenuItem. Which one?',
    options: [
      { id: 'A', text: 'setVisible( boolean b )' },
      { id: 'B', text: 'setEnabled( boolean b )' },
      { id: 'C', text: 'getSize()' },
      { id: 'D', text: 'setForeground( Color c )' },
      { id: 'E', text: 'setBackground( Color c )' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q4',
    question: 'If a font with variable width is used to construct the string text for a column, the initial size of the column is:',
    options: [
      { id: 'A', text: 'determined by the number of characters in the string, multiplied by the width of a character in this font' },
      { id: 'B', text: 'determined by the number of characters in the string, multiplied by the average width of a character in this font' },
      { id: 'C', text: 'exclusively determined by the number of characters in the string' },
      { id: 'D', text: 'undetermined' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q5',
    question: 'Which of the following methods from the java.awt.Graphics class would be used to draw the outline of a rectangle with a single method call?',
    options: [
      { id: 'A', text: 'fillRect()' },
      { id: 'B', text: 'drawRect()' },
      { id: 'C', text: 'fillPolygon()' },
      { id: 'D', text: 'drawPolygon()' },
      { id: 'E', text: 'drawLine()' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's8q6',
    question: 'The Container methods add( Component comp ) and add( String name, Component comp ) will throw an IllegalArgumentException if comp is a:',
    options: [
      { id: 'A', text: 'button' },
      { id: 'B', text: 'list' },
      { id: 'C', text: 'window' },
      { id: 'D', text: 'textarea' },
      { id: 'E', text: 'container that contains this container' }
    ],
    correctAnswers: ['C', 'E']
  },
  {
    id: 's8q7',
    question: 'Of the following AWT classes, which one(s) are responsible for implementing the components layout?',
    options: [
      { id: 'A', text: 'LayoutManager' },
      { id: 'B', text: 'GridBagLayout' },
      { id: 'C', text: 'ActionListener' },
      { id: 'D', text: 'WindowAdapter' },
      { id: 'E', text: 'FlowLayout' }
    ],
    correctAnswers: ['B', 'E']
  },
  {
    id: 's8q8',
    question: 'A component that should resize vertically but not horizontally should be placed in a:',
    options: [
      { id: 'A', text: 'BorderLayout in the North or South location' },
      { id: 'B', text: 'FlowLayout as the first component' },
      { id: 'C', text: 'BorderLayout in the East or West location' },
      { id: 'D', text: 'BorderLayout in the Center location' },
      { id: 'E', text: 'GridLayout' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q9',
    question: 'What type of object is the parameter for all methods of the MouseListener interface?',
    options: [
      { id: 'A', text: 'MouseEvent' },
      { id: 'B', text: 'Event' },
      { id: 'C', text: 'ActionEvent' },
      { id: 'D', text: 'MouseActionEvent' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's8q10',
    question: 'Which of the following statements about event handling in JDK 1.1 and later are true?',
    options: [
      { id: 'A', text: 'A class can implement multiple listener interfaces' },
      { id: 'B', text: 'If a class implements a listener interface, it only has to overload the methods it uses' },
      { id: 'C', text: 'All of the MouseMotionAdapter class methods have a void return type.' }
    ],
    correctAnswers: ['A', 'C']
  },
  {
    id: 's8q11',
    question: 'Which of the following describe the sequence of method calls that result in a component being redrawn?',
    options: [
      { id: 'A', text: 'invoke paint() directly' },
      { id: 'B', text: 'invoke update which calls paint()' },
      { id: 'C', text: 'invoke repaint() which invokes update(), which in turn invokes paint()' },
      { id: 'D', text: 'invoke repaint() which invokes paint directly' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q12',
    question: 'You are browsing the Java HTML documentation for information on the java.awt.TextField component. You want to create Listener code to respond to focus events. The only Listener method listed is addActionListener. How do you go about finding out about Listener methods?',
    options: [
      { id: 'A', text: 'Define your own Listener interface according to the event to be tracked' },
      { id: 'B', text: 'Use the search facility in the HTML documentation for the listener needed' },
      { id: 'C', text: 'Move up the hierarchy in the HTML documentation to locate methods in base classes' },
      { id: 'D', text: 'Subclass awt.event with the appropriate Listener method' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q13',
    question: 'What will be displayed when you attempt to compile and run the following code?',
    code: `//Code start 
import java.awt.*;
public class Butt extends Frame{
public static void main(String argv[]){ 
        Butt MyBut=new Butt(); 
        }
Butt(){ 
        Button HelloBut=new Button("Hello"); 
        Button ByeBut=new Button("Bye"); 
        add(HelloBut); 
        add(ByeBut); 
        setSize(300,300); 
        setVisible(true); 
        } 
} 
//Code end`,
    options: [
      { id: 'A', text: 'Two buttons side by side occupying all of the frame, Hello on the left and Bye on the right' },
      { id: 'B', text: 'One button occupying the entire frame saying Hello' },
      { id: 'C', text: 'One button occupying the entire frame saying Bye' },
      { id: 'D', text: 'Two buttons at the top of the frame one saying Hello the other saying Bye' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q14',
    question: 'If g is a graphics instance what will the following code draw on the screen? g.fillArc(45,90,50,50,90,180);',
    options: [
      { id: 'A', text: 'An arc bounded by a box of height 45, width 90 with a centre point of 50,50, starting at an angle of 90 degrees traversing through 180 degrees counter clockwise.' },
      { id: 'B', text: 'An arc bounded by a box of height 50, width 50, with a centre point of 45,90 starting at an angle of 90 degrees traversing through 180 degrees clockwise.' },
      { id: 'C', text: 'An arc bounded by a box of height 50, width 50, with a top left at coordinates of 45, 90, starting at 90 degrees and traversing through 180 degrees counter clockwise.' },
      { id: 'D', text: 'An arc starting at 45 degrees, traversing through 90 degrees clockwise bounded by a box of height 50, width 50 with a centre point of 90, 180.' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q15',
    question: 'How would you go about opening an image file called MyPicture.jpg?',
    options: [
      { id: 'A', text: 'Graphics.getGraphics("MyPicture.jpg");' },
      { id: 'B', text: 'Image image=Toolkit.getDefaultToolkit().getImage("MyPicture.jpg");' },
      { id: 'C', text: 'Graphics.openImage("MyPicture");' },
      { id: 'D', text: 'Image m=new Image("MyPicture");' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q16',
    question: 'An Applet has its Layout Manager set to the default of FlowLayout. What code would be correct to change to another Layout Manager?',
    options: [
      { id: 'A', text: 'setLayoutManager(new GridLayout());' },
      { id: 'B', text: 'setLayout(new GridLayout(2,2));' },
      { id: 'C', text: 'setGridLayout(2,2,))' },
      { id: 'D', text: 'setBorderLayout();' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q17',
    question: 'You have created an applet that draws lines. You have overridden the paint operation and used the graphics drawLine method, and increase one of its parameters to multiple lines across the screen. When you first test the applet you find that the new lines are redrawn, but the old lines are erased. How can you modify your code to allow the old lines to stay on the screen instead of being cleared?',
    options: [
      { id: 'A', text: 'Override repaint thus: public void repaint(Graphics g){ paint(g); }' },
      { id: 'B', text: 'Override update thus: public void update(Graphics g) { paint(g); }' },
      { id: 'C', text: 'turn off clearing with the method setClear();' },
      { id: 'D', text: 'Remove the drawing from the paint Method and place in the calling code' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q18',
    question: 'Given the following code, how could you set the frame surface color to pink?',
    code: `import java.awt.*;
public class SetF extends Frame{
public static void main(String argv[]){
        SetF s=new SetF();
        s.setSize(300,200);
        s.setVisible(true);
        }
}`,
    options: [
      { id: 'A', text: 's.setBackground(Color.pink);' },
      { id: 'B', text: 's.setColor(PINK);' },
      { id: 'C', text: 's.Background(pink);' },
      { id: 'D', text: 's.color=Color.pink' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q19',
    question: 'If you create a TextField with a constructor to set it to occupy 5 columns, what difference will it make if you use it with a proportional font (ie Times Roman) or a fixed pitch typewriter style font (Courier)?',
    options: [
      { id: 'A', text: 'With a fixed font you will see 5 characters, with a proportional it will depend on the width of the characters' },
      { id: 'B', text: 'With a fixed font you will see 5 characters, with a proportional it will cause the field to expand to fit the text' },
      { id: 'C', text: 'The columns setting does not affect the number of characters displayed' },
      { id: 'D', text: 'Both will show exactly 5 characters' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's8q20',
    question: 'You have created a simple Frame and overridden the paint method as follows: public void paint(Graphics g){ g.drawString("Dolly",50,10); }. What will be the result when you attempt to compile and run the program?',
    options: [
      { id: 'A', text: 'The string "Dolly" will be displayed at the centre of the frame' },
      { id: 'B', text: 'An error at compilation complaining at the signature of the paint method' },
      { id: 'C', text: 'The lower part of the word Dolly will be seen at the top of the form, with the top hidden.' },
      { id: 'D', text: 'The string "Dolly" will be shown at the bottom of the form' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q21',
    question: 'You want to lay out a set of buttons horizontally but with more space between the first button and the rest. You are going to use the GridBagLayout manager to control the way the buttons are set out. How will you modify the way the GridBagLayout acts in order to change the spacing around the first button?',
    options: [
      { id: 'A', text: 'Create an instance of the GridBagConstraints class, call the weightx() method and then pass the GridBagConstraints instance with the component to the setConstraints method of the GridBagLayout class.' },
      { id: 'B', text: 'Create an instance of the GridBagConstraints class, set the weightx field and then pass the GridBagConstraints instance with the component to the setConstraints method of the GridBagLayout class.' },
      { id: 'C', text: 'Create an instance of the GridBagLayout class, set the weightx field and then call the setConstraints method of the GridBagLayoutClass with the component as a parameter.' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q22',
    question: 'You are using the GridBagLayout manager to place a series of buttons on a Frame. You want to make the size of one of the buttons bigger than the text it contains. Which of the following will allow you to do that?',
    options: [
      { id: 'A', text: 'The GridBagLayout manager does not allow you to do this' },
      { id: 'B', text: 'The setFill method of the GridBagLayout class' },
      { id: 'C', text: 'The setFill method of the GridBagConstraints class' },
      { id: 'D', text: 'The fill field of the GridBagConstraints class' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's8q23',
    question: 'You are creating an applet with a Frame that contains buttons. You are using the GridBagLayout manager and you have added Four buttons. At the moment the buttons appear in the centre of the frame from left to right. You want them to appear one on top of the other going down the screen. What is the most appropriate way to do this?',
    options: [
      { id: 'A', text: 'Set the gridy value of the GridBagConstraint class to a value increasing from 1 to 4' },
      { id: 'B', text: 'set the fill value of the GridBagConstrint class to VERTICAL' },
      { id: 'C', text: 'Set the ipady value of the GridBagConstraint class to a value increasing from 0 to 4' },
      { id: 'D', text: 'Set the fill value of the GridBagLayout class to GridBag.VERTICAL' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's8q24',
    question: 'What best describes the appearance of an application with the following code?',
    code: `import java.awt.*;

public class FlowAp extends Frame{

public static void main(String argv[]){
    FlowAp fa=new FlowAp();
    fa.setSize(400,300);
    fa.setVisible(true);
}
FlowAp(){
        add(new Button("One"));
        add(new Button("Two"));
        add(new Button("Three"));
        add(new Button("Four"));
    }//End of constructor

}//End of Application`,
    options: [
      { id: 'A', text: 'A Frame with buttons marked One to Four placed on each edge.' },
      { id: 'B', text: 'A Frame with buttons marked One to four running from the top to bottom' },
      { id: 'C', text: 'A Frame with one large button marked Four in the Centre' },
      { id: 'D', text: 'An Error at run time indicating you have not set a LayoutManager' }
    ],
    correctAnswers: ['C']
  },
  {
    id: 's8q25',
    question: 'How do you indicate where a component will be positioned using Flowlayout?',
    options: [
      { id: 'A', text: 'North, South, East, West' },
      { id: 'B', text: 'Assign a row/column grid reference' },
      { id: 'C', text: 'Pass a X/Y percentage parameter to the add method' },
      { id: 'D', text: 'Do nothing, the FlowLayout will position the component' }
    ],
    correctAnswers: ['D']
  },
  {
    id: 's8q26',
    question: 'How do you change the current layout manager for a container?',
    options: [
      { id: 'A', text: 'Use the setLayout method' },
      { id: 'B', text: 'Once created you cannot change the current layout manager of a component' },
      { id: 'C', text: 'Use the setLayoutManager method' },
      { id: 'D', text: 'Use the updateLayout method' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's8q27',
    question: 'Which of the following are fields of the GridBagConstraints class?',
    options: [
      { id: 'A', text: 'ipadx' },
      { id: 'B', text: 'fill' },
      { id: 'C', text: 'insets' },
      { id: 'D', text: 'width' }
    ],
    correctAnswers: ['A', 'B', 'C']
  },
  {
    id: 's8q28',
    question: 'What most closely matches the appearance when this code runs?',
    code: `import java.awt.*;

public class CompLay extends Frame{
public static void main(String argv[]){
    CompLay cl = new CompLay();
    }

CompLay(){
    Panel p = new Panel();
    p.setBackground(Color.pink);
    p.add(new Button("One"));
    p.add(new Button("Two"));
    p.add(new Button("Three"));
    add("South",p);
    setLayout(new FlowLayout());
    setSize(300,300);
    setVisible(true);
    }
}`,
    options: [
      { id: 'A', text: 'The buttons will run from left to right along the bottom of the Frame' },
      { id: 'B', text: 'The buttons will run from left to right along the top of the frame' },
      { id: 'C', text: 'The buttons will not be displayed' },
      { id: 'D', text: 'Only button three will show occupying all of the frame' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q29',
    question: 'Which statements are correct about the anchor field?',
    options: [
      { id: 'A', text: 'It is a field of the GridBagLayout manager for controlling component placement' },
      { id: 'B', text: 'It is a field of the GridBagConstraints class for controlling component placement' },
      { id: 'C', text: 'A valid setting for the anchor field is GridBagConstraints.NORTH' },
      { id: 'D', text: 'The anchor field controls the height of components added to a container' }
    ],
    correctAnswers: ['B', 'C']
  },
  {
    id: 's8q30',
    question: 'When using the GridBagLayout manager, each new component requires a new instance of the GridBagConstraints class. Is this statement:',
    options: [
      { id: 'A', text: 'true' },
      { id: 'B', text: 'false' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q31',
    question: 'What will happen when you attempt to compile and run this code?',
    code: `//Demonstration of event handling
import java.awt.event.*;
import java.awt.*;

public class MyWc extends Frame implements WindowListener{
public static void main(String argv[]){
        MyWc mwc = new MyWc();
        }
        public void windowClosing(WindowEvent we){
                System.exit(0);
                }//End of windowClosing

      public void  MyWc(){
        setSize(300,300);
        setVisible(true);
        }
}//End of class`,
    options: [
      { id: 'A', text: 'Error at compile time' },
      { id: 'B', text: 'Visible Frame created that can be closed' },
      { id: 'C', text: 'Compilation but no output at run time' },
      { id: 'D', text: 'Error at compile time because of comment before import statements' }
    ],
    correctAnswers: ['A']
  },
  {
    id: 's8q32',
    question: 'Which of the following statements are correct?',
    options: [
      { id: 'A', text: 'If multiple listeners are added to a component only events for the last listener added will be processed' },
      { id: 'B', text: 'If multiple listeners are added to a component the events will be processed for all but with no guarantee in the order' },
      { id: 'C', text: 'Adding multiple listeners to a component will cause a compile time error' },
      { id: 'D', text: 'You may remove as well add listeners to a component.' }
    ],
    correctAnswers: ['B', 'D']
  },
  {
    id: 's8q33',
    question: 'Which of the following are correct event handling methods?',
    options: [
      { id: 'A', text: 'mousePressed(MouseEvent e){}' },
      { id: 'B', text: 'MousePressed(MouseClick e){}' },
      { id: 'C', text: 'functionKey(KeyPress k){}' },
      { id: 'D', text: 'componentAdded(ContainerEvent e){}' }
    ],
    correctAnswers: ['A', 'D']
  },
  {
    id: 's8q34',
    question: 'In the following applet, how many Buttons will be displayed?',
    code: `1:    import java.applet.*;
2:    import java.awt.*;
3:
4:    public class Q16 extends Applet
5:    {
6:        Button okButton = new Button("Ok");
7:
8:        public void init()
9:        {
10:            add(okButton);
11:            add(okButton);
12:            add(okButton);
13:            add(okButton);
14:
15:            add(new Button("Cancel"));
16:            add(new Button("Cancel"));
17:            add(new Button("Cancel"));
18:            add(new Button("Cancel"));
19:
20:            setSize(300,300);
21:        }
22:	}`,
    options: [
      { id: 'A', text: '1 Button with label "Ok" and 1 Button with label "Cancel".' },
      { id: 'B', text: '1 Button with label "Ok" and 4 Buttons with label "Cancel".' },
      { id: 'C', text: '4 Buttons with label "Ok" and 1 Button with label "Cancel".' },
      { id: 'D', text: '4 Buttons with label "Ok" and 4 Buttons with label "Cancel".' }
    ],
    correctAnswers: ['B']
  },
  {
    id: 's8q35',
    question: 'In the following, which is correct Container-Default layout combination?',
    options: [
      { id: 'A', text: 'Applet - FlowLayout' },
      { id: 'B', text: 'Applet - BorderLayout' },
      { id: 'C', text: 'Applet - CardLayout' },
      { id: 'D', text: 'Frame - Flowlayout' },
      { id: 'E', text: 'Frame - BorderLayout' },
      { id: 'F', text: 'Frame - CardLayout' },
      { id: 'G', text: 'Panel - FlowLayout' },
      { id: 'H', text: 'Panel - BorderLayout.' }
    ],
    correctAnswers: ['A', 'E', 'G']
  },
  {
    id: 's8q36',
    question: 'The following applet will display:',
    code: `1:    import java.applet.*;
2:    import java.awt.*;
3:
4:    public class Q20 extends Applet
5:    {
6:        Button  okButton = new Button("Ok");
7:    
8:        public void init()
9:        {
10:            setLayout(new BorderLayout());
11:        
12:            add("South",  okButton);
13:            add("North",  okButton);
14:            add("East",   okButton);
15:            add("West",   okButton);
16:            add("Center", okButon);
17:
18:            setSize(300,300);
19:        }
20:    }`,
    options: [
      { id: 'A', text: 'Five Buttons with label "Ok" at Top, Bottom, Right, Left and Center of the Applet.' },
      { id: 'B', text: 'Only one Button with label "Ok" at the Top of the Applet.' },
      { id: 'C', text: 'Only one Button with label "Ok" at the Bottom of the applet.' },
      { id: 'D', text: 'Only one Button with label "Ok" at the Center of the Applet.' }
    ],
    correctAnswers: ['D']
  }
];

export default section8;
package memento;

import java.util.Deque;
import java.util.LinkedList;

public class TextEditor {
    public Deque<TextArea.Memento> stateHistory;

    public TextArea textArea;

    public TextEditor(){
        stateHistory=new LinkedList<>();
        textArea=new TextArea();
    }

    public void write(String text,boolean bold,String color,String alignment){
        textArea.setText(text);
        textArea.setBold(bold);
        textArea.setAlignment(alignment);
        textArea.setColor(color);

        stateHistory.add(textArea.takeSnapshot());
    }

    public void undo(){
        textArea.restore(stateHistory.remove());
    }


}

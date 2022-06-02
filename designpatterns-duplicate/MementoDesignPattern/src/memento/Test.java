package memento;

public class Test {
    public static void main(String[] args) {
        TextEditor editor=new TextEditor();

        editor.write("Ahoy welcome aboard",true,"red","left");
        editor.write("Greetings",false,"black","center");


        TextArea textArea= editor.textArea;
        System.out.println(textArea.toString());

        System.out.println("\nReverting to previous state...\n");

        editor.undo();
        System.out.println(textArea.toString());
    }
}

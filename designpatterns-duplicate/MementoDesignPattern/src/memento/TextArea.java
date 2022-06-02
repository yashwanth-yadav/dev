package memento;

public class TextArea {
    public String text;

    public boolean bold;
    public String alignment;
    public String color;

    public void setText(String text) {
        this.text = text;
    }

    public void setBold(boolean bold) {
        this.bold = bold;
    }

    public void setAlignment(String alignment) {
        this.alignment = alignment;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Memento takeSnapshot(){
        return new Memento(this.text,this.bold,this.color,this.alignment);
    }

    public void restore(Memento memento){
        this.text=memento.getSavedText();
        this.alignment=memento.getSavedAlignment();
        this.bold=memento.getSavedBold();
        this.color=memento.getSavedColor();
    }

    public static class Memento{
        private final String text;
        private final boolean bold;
        private final String alignment;
        private final String color;
        private Memento(String textToSave,boolean boldToSave,String colorToSave,String alignmentToSave){
            text=textToSave;
            bold=boldToSave;
            alignment=alignmentToSave;
            color=colorToSave;
        }
        private String getSavedText(){
            return text;
        }

        private boolean getSavedBold() {
            return bold;
        }

        private String getSavedAlignment() {
            return alignment;
        }

        private String getSavedColor() {
            return color;
        }
    }

    @Override
    public String toString() {
        return "TextArea{" +
                "text='" + text + '\'' +
                ", bold=" + bold +
                ", alignment='" + alignment + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}

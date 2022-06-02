package flyweight;

public class Square implements Shape{
    private String color;
    private final int x=20;
    private final int y=30;
    private final int length =50;

    public Square(){

    }

    public Square(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    @Override
    public void draw() {
        System.out.println(this+" : Square: Draw() [Color : " + color + ", x : " + x + ", y :" + y + ", length :"+ length);
    }
}

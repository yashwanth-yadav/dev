package flyweight;

public class Test {
    private static final String colors[] = { "Red", "Green", "Blue", "Orange", "Black" };
    public static void main(String[] args) {
        System.out.println("\nRed circles..........");
        for (int i=0;i<10;i++){
            Circle circle=(Circle) ShapeFactory.getShape("circle");
            circle.setColor(colors[0]);
            circle.draw();
        }
        System.out.println("\n############### Green color Circles ####################");
        for( int i = 0; i < 10; ++i )
        {
            Circle circle = (Circle) ShapeFactory.getShape("circle");
            circle.setColor(colors[1]);
            circle.draw();
        }
        System.out.println("\n################ Blue color Squares ####################");

        for( int i = 0; i < 10; ++i )
        {
            Square square = (Square) ShapeFactory.getShape("square");
            square.setColor(colors[2]);
            square.draw();
        }
    }
}

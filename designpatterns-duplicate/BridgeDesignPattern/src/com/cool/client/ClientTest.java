package com.cool.client;

import com.cool.bridge.Shape;
import com.cool.bridge.impl.Blue;
import com.cool.bridge.impl.Rectangle;
import com.cool.bridge.impl.Red;
import com.cool.bridge.impl.Square;

public class ClientTest {
    public static void main(String[] args) {
        Shape square=new Square(new Blue());
        String blueSquare = square.draw();
        System.out.println(blueSquare);

        Shape rectangle=new Rectangle(new Red());
        String redRectangle = rectangle.draw();
        System.out.println(redRectangle);
    }
}

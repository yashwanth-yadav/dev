package com.cool.bridge.impl;

import com.cool.bridge.Color;
import com.cool.bridge.Shape;

public class Rectangle extends Shape {


    public Rectangle(Color color) {
        super(color);
    }

    @Override
    public String draw() {
        return "rectangle drawn"+color.fill();
    }
}

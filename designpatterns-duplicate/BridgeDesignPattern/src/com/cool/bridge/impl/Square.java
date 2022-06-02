package com.cool.bridge.impl;

import com.cool.bridge.Color;
import com.cool.bridge.Shape;

public class Square extends Shape {

    public Square(Color color) {
        super(color);
    }

    @Override
    public String draw() {
        return "Square drawn " + color.fill();
    }
}
package com.cool.bridge;

public abstract class Shape {
    protected Color color;
    public Shape(Color color){
        this.color=color;
    }
    public abstract String draw();
}
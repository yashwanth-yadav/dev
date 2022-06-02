package com.cool.state;

public class Test {
    public static void main(String[] args) {
        Kid kid=new Kid(2);
        kid.eat();
        kid.play();

        kid.setAge(4);
        kid.eat();
        kid.play();
    }
}

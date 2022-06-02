package com.cool.chainofresponsibility;

public class Test {
    public static void main(String[] args) {
        Chain chainCalc1=new AddNumbers();
        Chain chainCalc2=new SubtractNumbers();
        Chain chainCalc3=new MultNumbers();
        Chain chainCalc4=new DivNumbers();

        chainCalc1.setNextChain(chainCalc2);
        chainCalc2.setNextChain(chainCalc3);
        chainCalc3.setNextChain(chainCalc4);

        Numbers request=new Numbers(6,3,"sub");
        chainCalc1.calculate(request);
    }
}
